"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { siteData } from '../config/siteData';
import { APP_ROUTES } from '../config/routes';
import { servicesData } from '../config/servicesData';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isDesktopServicesOpen, setIsDesktopServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('mobile-menu-open');
      document.body.style.overflow = 'hidden';
      window.dispatchEvent(new Event('mobileMenuOpened'));
    } else {
      document.body.classList.remove('mobile-menu-open');
      document.body.style.overflow = '';
      window.dispatchEvent(new Event('mobileMenuClosed'));
    }
    return () => {
      document.body.classList.remove('mobile-menu-open');
      document.body.style.overflow = '';
      window.dispatchEvent(new Event('mobileMenuClosed'));
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', href: APP_ROUTES.HOME },
    { name: 'Services', href: APP_ROUTES.SERVICES },
    { name: 'About', href: APP_ROUTES.ABOUT },
    { name: 'Contact', href: APP_ROUTES.CONTACT },
    { name: 'Safety Instructions', href: APP_ROUTES.SAFETY_INSTRUCTIONS },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-3 sm:px-6 w-full flex justify-center pointer-events-none">
      <div className="bg-brand-primary/95 backdrop-blur-xl border border-white/20 shadow-2xl rounded-full px-4 xl:px-6 py-2 md:py-2.5 flex items-center justify-between w-full max-w-[1320px] pointer-events-auto">

        {/* Left Side: Logo */}
        <div className="flex items-center shrink-0">
          <Link href={APP_ROUTES.HOME} className="flex items-center gap-2 shrink-0">
            <Image
              src="/brand-logo.png"
              alt="Logo"
              width={160}
              height={56}
              className="h-8 sm:h-9 md:h-11 w-auto object-contain drop-shadow-md shrink-0"
              priority
            />
          </Link>
        </div>

        {/* Center: Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.name === 'Services' && pathname.startsWith('/services'));

            if (link.name === 'Services') {
              return (
                <div 
                  key={link.name} 
                  className="relative"
                  onMouseEnter={() => setIsDesktopServicesOpen(true)}
                  onMouseLeave={() => setIsDesktopServicesOpen(false)}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsDesktopServicesOpen(false)}
                    className={`px-3 xl:px-4 py-2 rounded-full text-sm xl:text-base font-medium transition-all duration-300 border flex items-center gap-1.5 whitespace-nowrap shrink-0 ${isActive
                      ? 'bg-white/20 text-white border-white/30 shadow-sm'
                      : 'text-white/80 border-transparent hover:border-white/20 hover:bg-white/10 hover:text-white'
                      }`}
                  >
                    {link.name}
                    <ChevronDown size={14} className={`transition-transform duration-300 ${isDesktopServicesOpen ? 'rotate-180' : ''}`} />
                  </Link>

                  {/* Desktop Dropdown */}
                  <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-300 w-[600px] z-50 ${isDesktopServicesOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-2 invisible'}`}>
                    <div className="bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden flex flex-col p-5 pointer-events-auto">
                      
                      <div className="grid grid-cols-2 gap-2">
                        {servicesData.map(service => {
                          const Icon = service.icon;
                          return (
                            <Link
                              key={service.id}
                              href={`/services/${service.slug}`}
                              onClick={() => setIsDesktopServicesOpen(false)}
                              className="group flex items-start gap-4 p-3 hover:bg-gray-50 rounded-2xl transition-all duration-300 border border-transparent hover:border-gray-100"
                            >
                              <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 shadow-sm flex items-center justify-center shrink-0 group-hover:bg-brand-primary group-hover:border-brand-primary transition-colors duration-300">
                                {Icon && <Icon className="w-6 h-6 text-brand-primary group-hover:text-white transition-colors duration-300" />}
                              </div>
                              <div className="pt-0.5">
                                <h4 className="text-gray-900 font-bold text-sm mb-1 group-hover:text-brand-primary transition-colors">{service.name}</h4>
                                <p className="text-xs text-gray-500 line-clamp-1 leading-relaxed">{service.shortDesc}</p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>

                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3 xl:px-4 py-2 rounded-full text-sm xl:text-base font-medium transition-all duration-300 border flex items-center gap-2 whitespace-nowrap shrink-0 ${isActive
                  ? 'bg-white/20 text-white border-white/30 shadow-sm'
                  : 'text-white/80 border-transparent hover:border-white/20 hover:bg-white/10 hover:text-white'
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Side: Phone & Button (Desktop) */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
          <div className="flex items-center gap-1.5 px-3 xl:px-4 py-2 rounded-full border border-white/20 text-white/90 font-medium text-sm xl:text-base hover:bg-white/10 transition-all whitespace-nowrap shrink-0">
            <Phone size={16} className="text-white/80" />
            <span>{siteData.contact.phone}</span>
          </div>
          <Link
            href={APP_ROUTES.CONTACT}
            className="bg-gradient-accent text-brand-text-primary font-bold px-5 xl:px-6 py-2 xl:py-2.5 rounded-full shadow-[0_0_15px_rgba(249,168,37,0.4)] hover:shadow-[0_0_25px_rgba(249,168,37,0.6)] transition-all duration-300 text-sm xl:text-base flex items-center gap-1.5 hover:scale-105 whitespace-nowrap shrink-0"
          >
            <span>Request Quote</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 xl:w-5 xl:h-5"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
          </Link>
        </div>

        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-brand-accent p-2 rounded-full bg-white/10 border border-white/10 focus:outline-none cursor-pointer"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>

      {/* Mobile Sliding Menu */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col pointer-events-auto ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-brand-border-default">
          <span className="text-2xl font-bold text-brand-primary tracking-tight">Menu</span>
          <button
            onClick={toggleMenu}
            className="p-2 -mr-2 rounded-full text-brand-text-secondary hover:bg-brand-bg-alt hover:text-brand-primary transition-colors focus:outline-none cursor-pointer"
          >
            <X size={26} />
          </button>
        </div>

        {/* Mobile Menu Links */}
        <div className="flex-1 overflow-y-auto py-6 px-4">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.name === 'Services' && pathname.startsWith('/services'));

              if (link.name === 'Services') {
                return (
                  <div key={link.name} className="flex flex-col">
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className={`flex items-center justify-between px-4 py-4 rounded-2xl text-lg font-semibold transition-all duration-200 ${isActive || isServicesOpen
                        ? 'bg-brand-primary/10 text-brand-primary'
                        : 'text-brand-text-secondary hover:bg-brand-bg-alt hover:text-brand-text-primary'
                        }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown size={20} className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Mobile Dropdown */}
                    <div className={`overflow-hidden transition-all duration-300 ${isServicesOpen ? 'max-h-[500px] opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                      <div className="flex flex-col pl-4 space-y-1 border-l-2 border-brand-primary/20 ml-6 py-2">

                        {servicesData.map(service => (
                          <Link
                            key={service.id}
                            href={`/services/${service.slug}`}
                            onClick={() => setIsOpen(false)}
                            className="py-2.5 px-4 rounded-xl text-gray-600 hover:text-brand-primary hover:bg-brand-primary/5 text-base font-medium transition-colors"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-4 rounded-2xl text-lg font-semibold transition-all duration-200 ${isActive && link.name !== 'Services'
                    ? 'bg-brand-primary/10 text-brand-primary'
                    : 'text-brand-text-secondary hover:bg-brand-bg-alt hover:text-brand-text-primary'
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Mobile Menu Footer */}
        <div className="p-6 border-t border-brand-border-default bg-brand-bg-alt/30 space-y-6">
          <a
            href={`tel:${siteData.contact.phone.replace(/\D/g, '')}`}
            className="flex items-center justify-center gap-3 text-brand-text-primary font-medium hover:text-brand-primary transition-colors"
          >
            <div className="bg-brand-primary/10 p-3 rounded-full text-brand-primary">
              <Phone size={22} />
            </div>
            <span className="text-xl tracking-wide">{siteData.contact.phone}</span>
          </a>
          <Link
            href={APP_ROUTES.CONTACT}
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center w-full bg-brand-primary text-white font-bold px-6 py-4 rounded-xl hover:bg-brand-primary-hover shadow-md hover:shadow-lg transition-all duration-300"
          >
            Request a quote
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 lg:hidden pointer-events-auto"
          onClick={toggleMenu}
        />
      )}
    </header>
  );
}
