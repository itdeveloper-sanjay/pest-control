import Link from 'next/link';
import Image from 'next/image';
import { siteData } from '../config/siteData';
import { APP_ROUTES } from '../config/routes';

// Custom SVG Icons since Lucide removed third-party brand icons
const FacebookIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const TwitterIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

const InstagramIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const LinkedinIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-brand-primary-hover text-brand-bg-main mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href={APP_ROUTES.HOME}>
              <Image
                src="/logo.png"
                alt="Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-brand-border-default text-sm">Advanced crop protection & agritech solutions.</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-brand-border-default">
            <Link href={APP_ROUTES.HOME} className="hover:text-brand-accent transition-colors">Home</Link>
            <Link href={APP_ROUTES.PRODUCTS} className="hover:text-brand-accent transition-colors">Products</Link>
            <Link href={APP_ROUTES.SERVICES} className="hover:text-brand-accent transition-colors">Services</Link>
            <Link href={APP_ROUTES.ABOUT} className="hover:text-brand-accent transition-colors">About</Link>
            <Link href={APP_ROUTES.CONTACT} className="hover:text-brand-accent transition-colors">Contact Us</Link>
            <Link href={APP_ROUTES.PRIVACY_POLICY} className="hover:text-brand-accent transition-colors">Privacy Policy</Link>
          </nav>

          <div className="flex gap-5">
            <a href={siteData.social.facebook} target="_blank" rel="noopener noreferrer" className="text-brand-border-default hover:text-brand-accent transition-colors" aria-label="Facebook">
              <FacebookIcon size={24} />
            </a>
            <a href={siteData.social.twitter} target="_blank" rel="noopener noreferrer" className="text-brand-border-default hover:text-brand-accent transition-colors" aria-label="Twitter">
              <TwitterIcon size={24} />
            </a>
            <a href={siteData.social.instagram} target="_blank" rel="noopener noreferrer" className="text-brand-border-default hover:text-brand-accent transition-colors" aria-label="Instagram">
              <InstagramIcon size={24} />
            </a>
            <a href={siteData.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-brand-border-default hover:text-brand-accent transition-colors" aria-label="LinkedIn">
              <LinkedinIcon size={24} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-brand-primary text-center text-sm text-brand-border-default/80">
          <p>&copy; {new Date().getFullYear()} PROFESSIONALZ PMS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
