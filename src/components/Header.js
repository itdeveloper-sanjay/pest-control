"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';
import { siteData } from '../config/siteData';
import { APP_ROUTES } from '../config/routes';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', href: APP_ROUTES.HOME },
    { name: 'Products', href: APP_ROUTES.PRODUCTS },
    { name: 'Services', href: APP_ROUTES.SERVICES },
    { name: 'About', href: APP_ROUTES.ABOUT },
    { name: 'Contact', href: APP_ROUTES.CONTACT },
  ];

  return (
    <header className="bg-brand-primary-hover shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href={APP_ROUTES.HOME}>
              <Image
                src="/logo.png"
                alt="Logo"
                width={150}
                height={50}
                className="h-12 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${isActive
                    ? 'bg-white text-brand-primary border-white shadow-md'
                    : 'text-white/90 border-white/30 hover:border-white hover:bg-white/10 hover:text-white shadow-sm'
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Side: Phone & Button (Desktop) */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-2 text-white font-medium">
              <Phone size={20} />
              <span>{siteData.contact.phone}</span>
            </div>
            <Link
              href={APP_ROUTES.CONTACT}
              className="bg-gradient-accent text-brand-text-primary font-bold px-6 py-2.5 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 shadow-md ring-2 ring-brand-accent/50 ring-offset-2"
            >
              Request a quote
            </Link>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-brand-accent focus:outline-none"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sliding Menu */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-brand-border-default">
          <span className="text-2xl font-bold text-brand-primary tracking-tight">Menu</span>
          <button
            onClick={toggleMenu}
            className="p-2 -mr-2 rounded-full text-brand-text-secondary hover:bg-brand-bg-alt hover:text-brand-primary transition-colors focus:outline-none"
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
          <div className="flex items-center justify-center gap-3 text-brand-text-primary font-medium">
            <div className="bg-brand-primary/10 p-3 rounded-full text-brand-primary">
              <Phone size={22} />
            </div>
            <span className="text-xl tracking-wide">{siteData.contact.phone}</span>
          </div>
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
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={toggleMenu}
        />
      )}
    </header>
  );
}
