"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';
import { siteData } from '../config/siteData';
import { APP_ROUTES } from '../config/routes';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
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
    { name: 'Safety Instructions', href: APP_ROUTES.SAFETY_INSTRUCTIONS },
    { name: 'Services', href: APP_ROUTES.SERVICES },
    { name: 'About', href: APP_ROUTES.ABOUT },
    { name: 'Contact', href: APP_ROUTES.CONTACT },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 w-full flex justify-center pointer-events-none">
      <div className="bg-brand-primary/95 backdrop-blur-xl border border-white/20 shadow-2xl rounded-full px-5 sm:px-8 py-2.5 md:py-3.5 flex items-center justify-between w-full max-w-[1320px] pointer-events-auto">
        
        {/* Left Side: Logo */}
        <div className="flex items-center">
          <Link href={APP_ROUTES.HOME} className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="Logo"
              width={160}
              height={56}
              className="h-9 sm:h-11 md:h-14 w-auto drop-shadow-md"
              priority
            />
          </Link>
        </div>

        {/* Center: Nav Links */}
        <nav className="hidden lg:flex items-center gap-3">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-5 py-2.5 rounded-full text-base font-medium transition-all duration-300 border flex items-center gap-2 ${isActive
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
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-white/90 font-medium text-base hover:bg-white/10 transition-all">
            <Phone size={18} className="text-white/80" />
            <span>{siteData.contact.phone}</span>
          </div>
          <Link
            href={APP_ROUTES.CONTACT}
            className="bg-gradient-accent text-brand-text-primary font-bold px-7 py-3 rounded-full shadow-[0_0_15px_rgba(249,168,37,0.4)] hover:shadow-[0_0_25px_rgba(249,168,37,0.6)] transition-all duration-300 text-base flex items-center gap-2 hover:scale-105"
          >
            <span>Request Quote</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
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
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-4 rounded-2xl text-lg font-semibold transition-all duration-200 ${
                    isActive 
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
