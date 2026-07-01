import Link from 'next/link';
import Image from 'next/image';
import { siteData } from '../config/siteData';
import { APP_ROUTES } from '../config/routes';
import { MapPin, Phone, Mail } from 'lucide-react';

// Custom SVG Icons since Lucide removed third-party brand icons
const FacebookIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const YoutubeIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

const InstagramIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);



export default function Footer() {
  return (
    <footer className="bg-brand-primary-hover text-brand-bg-main mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8 items-start">
          
          {/* Brand & Description */}
          <div className="flex flex-col items-start gap-4">
            <Link href={APP_ROUTES.HOME}>
              <Image
                src="/brand-logo.png"
                alt="Logo"
                width={160}
                height={50}
                className="h-12 w-auto bg-white/10 p-2 rounded-lg"
              />
            </Link>
            <p className="text-brand-border-default text-sm max-w-sm mt-2 leading-relaxed">
              Expert pest management solutions for your safety. We are dedicated to providing a clean, safe, and healthy environment through professional and eco-friendly treatments.
            </p>
            <div className="flex gap-4 mt-4">
              <a href={siteData.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-brand-border-default hover:text-brand-accent hover:bg-white/10 transition-all" aria-label="Instagram">
                <InstagramIcon size={20} />
              </a>
              <a href={siteData.social.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-brand-border-default hover:text-brand-accent hover:bg-white/10 transition-all" aria-label="Facebook">
                <FacebookIcon size={20} />
              </a>
              <a href={siteData.social.youtube} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-brand-border-default hover:text-brand-accent hover:bg-white/10 transition-all" aria-label="YouTube">
                <YoutubeIcon size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
            <nav className="flex flex-col gap-y-3 text-sm text-brand-border-default">
              <Link href={APP_ROUTES.HOME} className="hover:text-brand-accent transition-colors flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-accent"></div> Home
              </Link>
              <Link href={APP_ROUTES.ABOUT} className="hover:text-brand-accent transition-colors flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-accent"></div> About Us
              </Link>
              <Link href={APP_ROUTES.SERVICES} className="hover:text-brand-accent transition-colors flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-accent"></div> Services
              </Link>
              <Link href={APP_ROUTES.SAFETY_INSTRUCTIONS} className="hover:text-brand-accent transition-colors flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-accent"></div> Safety Instructions
              </Link>
              <Link href={APP_ROUTES.PRIVACY_POLICY} className="hover:text-brand-accent transition-colors flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-accent"></div> Privacy Policy
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col">
            <h3 className="text-lg font-bold text-white mb-6">Contact Us</h3>
            <div className="flex flex-col gap-4 text-sm text-brand-border-default/90">
              <div className="flex items-start gap-3">
                <div className="mt-1 p-2 rounded-full bg-white/5 text-brand-accent">
                  <MapPin size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-white mb-1">Our Location</span>
                  <span className="leading-relaxed max-w-xs">{siteData.contact.address.fullAddress}</span>
                </div>
              </div>
              
              <div className="flex items-start gap-3 mt-2">
                <div className="mt-1 p-2 rounded-full bg-white/5 text-brand-accent">
                  <Phone size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-white mb-1">Phone Number</span>
                  <a href={`tel:${siteData.contact.phone.replace(/\s+/g, '')}`} className="hover:text-brand-accent transition-colors">{siteData.contact.phone}</a>
                </div>
              </div>

              <div className="flex items-start gap-3 mt-2">
                <div className="mt-1 p-2 rounded-full bg-white/5 text-brand-accent">
                  <Mail size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-white mb-1">Email Address</span>
                  <a href={`mailto:${siteData.contact.email}`} className="hover:text-brand-accent transition-colors">{siteData.contact.email}</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-brand-primary text-center text-sm text-brand-border-default/80">
          <p>&copy; {new Date().getFullYear()} PROFESSIONALZ PMS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
