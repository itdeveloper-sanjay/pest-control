import LocationMap from '../../../components/LocationMap';
import { MapPin, Phone, Mail } from 'lucide-react';
import { siteData } from '../../../config/siteData';
import Image from 'next/image';
import heroContact from '../../../assets/herocontact.webp';

export default function ContactPage() {
  return (
    <div className="flex-1 w-full bg-brand-bg-main flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full min-h-[500px] flex items-center justify-center pb-16">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroContact}
            alt="Contact Professionalz PMS"
            fill
            className="object-cover object-center"
            priority
            placeholder="blur"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-10 text-center px-4 pt-28">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
            We'd Love to Hear From You
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 drop-shadow-md">
            Reach out to our expert team for customized pest control and management solutions for your property.
          </p>
          <a
            href="#contact-section"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-brand-accent text-brand-text-primary font-bold text-lg shadow-[0_8px_30px_rgb(249,168,37,0.4)] hover:shadow-[0_8px_30px_rgb(249,168,37,0.6)] hover:-translate-y-1 transition-all duration-300"
          >
            Contact Us Today
          </a>
        </div>
      </section>

      <section id="contact-section" className="w-full py-10 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 w-full">

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Contact Information */}
            {/* Contact Information */}
            <div className="bg-gradient-primary p-10 rounded-2xl shadow-[0_15px_40px_rgb(46,125,50,0.2)] text-white relative overflow-hidden group">
              {/* Decorative background shapes */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/3 -translate-x-1/4"></div>
              
              <h2 className="text-3xl font-extrabold mb-10 relative z-10 text-white drop-shadow-md">Get In Touch</h2>
              <div className="space-y-10 relative z-10">
                
                {/* Location */}
                <div className="flex items-start gap-5 group/item cursor-default">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-full text-white shrink-0 group-hover/item:scale-110 group-hover/item:bg-brand-accent group-hover/item:border-brand-accent group-hover/item:text-brand-text-primary transition-all duration-300 shadow-lg">
                    <MapPin size={26} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-xl tracking-wide group-hover/item:text-brand-accent transition-colors">Our Location</h3>
                    <p className="text-white/80 mt-2 leading-relaxed text-base group-hover/item:text-white transition-colors">
                      {siteData.contact.address.fullAddress}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4 group/item cursor-default">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-3 sm:p-4 rounded-full text-white shrink-0 group-hover/item:scale-110 group-hover/item:bg-brand-accent group-hover/item:border-brand-accent group-hover/item:text-brand-text-primary transition-all duration-300 shadow-lg flex items-center justify-center">
                    <Phone size={22} className="sm:w-[26px] sm:h-[26px]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg sm:text-xl tracking-wide group-hover/item:text-brand-accent transition-colors">Phone Number</h3>
                    <p className="text-white/80 mt-1 text-base sm:text-lg group-hover/item:text-white transition-colors font-medium">
                      {siteData.contact.phone}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4 group/item cursor-default">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-3 sm:p-4 rounded-full text-white shrink-0 group-hover/item:scale-110 group-hover/item:bg-brand-accent group-hover/item:border-brand-accent group-hover/item:text-brand-text-primary transition-all duration-300 shadow-lg flex items-center justify-center">
                    <Mail size={22} className="sm:w-[26px] sm:h-[26px]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-white text-lg sm:text-xl tracking-wide group-hover/item:text-brand-accent transition-colors">Email Address</h3>
                    <p className="text-white/80 mt-1 text-base sm:text-lg group-hover/item:text-white transition-colors font-medium break-all">
                      {siteData.contact.email}
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Contact Form */}
            <form className="bg-white p-8 rounded-2xl shadow-sm border border-brand-border-default space-y-5">
              <h2 className="text-2xl font-bold text-brand-text-primary mb-4">Send a Message</h2>
              <div>
                <label className="block text-sm font-medium text-brand-text-primary mb-1">Name</label>
                <input type="text" className="w-full border border-brand-border-default rounded-md p-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary bg-brand-bg-main" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-text-primary mb-1">Email</label>
                <input type="email" className="w-full border border-brand-border-default rounded-md p-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary bg-brand-bg-main" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-text-primary mb-1">Message</label>
                <textarea rows="5" className="w-full border border-brand-border-default rounded-md p-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary bg-brand-bg-main" placeholder="How can we help you?"></textarea>
              </div>
              <button type="button" className="bg-brand-primary text-white px-8 py-3 rounded-md hover:bg-brand-primary-hover transition-colors font-bold w-full shadow-md mt-2 cursor-pointer">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <LocationMap />
    </div>
  );
}
