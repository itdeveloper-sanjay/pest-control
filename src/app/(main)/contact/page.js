"use client";
import LocationMap from '../../../components/LocationMap';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, MessageCircle, Clock, Building } from 'lucide-react';
import { siteData } from '../../../config/siteData';
import Image from 'next/image';
import heroContact from '../../../assets/herocontact.webp';
import heroContactMobile from '../../../assets/herocontactmobile.webp';

export default function ContactPage() {
  return (
    <div className="flex-1 w-full bg-brand-bg-main flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full min-h-[500px] flex items-center justify-center pb-16">
        <div className="absolute inset-0 z-0">
          <div className="hidden md:block w-full h-full relative">
            <Image
              src={heroContact}
              alt="Contact Professionalz PMS Desktop"
              fill
              className="object-cover object-top"
              priority
              placeholder="blur"
            />
          </div>
          <div className="block md:hidden w-full h-full relative">
            <Image
              src={heroContactMobile}
              alt="Contact Professionalz PMS Mobile"
              fill
              className="object-cover object-top"
              priority
              placeholder="blur"
            />
          </div>
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-10 text-center px-4 pt-28">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
            We'd Love to Hear From You
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 drop-shadow-md">
            Reach out to our expert team for customized pest control and management solutions for your property.
          </motion.p>
        </div>
      </section>

      <section id="contact-section" className="w-full py-10 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 w-full">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-text-primary mb-4">Let's Connect</h2>
            <p className="text-brand-text-secondary text-lg max-w-2xl mx-auto">
              Have a question, need a quote, or want to schedule a service? Fill out the form or use our contact details below. Our team is ready to help!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Contact Information */}
            <div className="bg-gradient-primary p-10 rounded-2xl shadow-[0_15px_40px_rgb(46,125,50,0.2)] text-white relative overflow-hidden group animate-fade-in-up delay-[400ms]">
              {/* Decorative background shapes */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/3 -translate-x-1/4"></div>
              
              <h2 className="text-3xl font-extrabold mb-10 relative z-10 text-white drop-shadow-md">Get In Touch</h2>
              <div className="space-y-10 relative z-10">
                
                {/* Location */}
                <div className="flex items-start gap-5 group/item cursor-default">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-full text-white shrink-0 group-hover/item:scale-110 group-hover/item:bg-[#EA4335] group-hover/item:border-[#EA4335] group-hover/item:text-white transition-all duration-300 shadow-lg">
                    <MapPin size={26} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-xl tracking-wide group-hover/item:text-[#EA4335] transition-colors">Our Location</h3>
                    <p className="text-white/80 mt-2 leading-relaxed text-base group-hover/item:text-white transition-colors">
                      {siteData.contact.address.fullAddress}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4 group/item cursor-default">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-3 sm:p-4 rounded-full text-white shrink-0 group-hover/item:scale-110 group-hover/item:bg-[#007AFF] group-hover/item:border-[#007AFF] group-hover/item:text-white transition-all duration-300 shadow-lg flex items-center justify-center">
                    <Phone size={22} className="sm:w-[26px] sm:h-[26px]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg sm:text-xl tracking-wide group-hover/item:text-[#007AFF] transition-colors">Phone Number</h3>
                    <p className="text-white/80 mt-1 text-base sm:text-lg group-hover/item:text-white transition-colors font-medium">
                      {siteData.contact.phone}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4 group/item cursor-default">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-3 sm:p-4 rounded-full text-white shrink-0 group-hover/item:scale-110 group-hover/item:bg-[#F59E0B] group-hover/item:border-[#F59E0B] group-hover/item:text-white transition-all duration-300 shadow-lg flex items-center justify-center">
                    <Mail size={22} className="sm:w-[26px] sm:h-[26px]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-white text-lg sm:text-xl tracking-wide group-hover/item:text-[#F59E0B] transition-colors">Email Address</h3>
                    <p className="text-white/80 mt-1 text-base sm:text-lg group-hover/item:text-white transition-colors font-medium break-all">
                      <a href={`mailto:${siteData.contact.email}`}>{siteData.contact.email}</a>
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center gap-4 group/item cursor-default">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-3 sm:p-4 rounded-full text-white shrink-0 group-hover/item:scale-110 group-hover/item:bg-[#25D366] group-hover/item:border-[#25D366] group-hover/item:text-white transition-all duration-300 shadow-lg flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[22px] h-[22px] sm:w-[26px] sm:h-[26px]">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-white text-lg sm:text-xl tracking-wide group-hover/item:text-[#25D366] transition-colors">WhatsApp</h3>
                    <p className="text-white/80 mt-1 text-base sm:text-lg group-hover/item:text-white transition-colors font-medium break-all">
                      <a href={`https://wa.me/${siteData.contact.phone.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer">
                        {siteData.contact.phone}
                      </a>
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Contact Form */}
            <form className="bg-white p-8 rounded-2xl shadow-sm border border-brand-border-default space-y-5 animate-fade-in-up delay-[500ms]">
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

      {/* Business Hours & Service Areas */}
      <section className="w-full py-16 bg-brand-primary/5 border-t border-brand-border-default">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Business Hours */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-primary/10 flex gap-6 items-start hover:shadow-md transition-shadow">
              <div className="bg-brand-accent/20 p-4 rounded-2xl shrink-0">
                <Clock size={32} className="text-brand-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-brand-text-primary mb-4">Business Hours</h3>
                <ul className="space-y-3 text-brand-text-secondary text-lg">
                  <li className="flex justify-between items-center border-b border-gray-100 pb-2">
                    <span className="font-medium">Monday - Saturday</span>
                    <span className="text-brand-primary font-bold">9:00 AM - 7:00 PM</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-gray-100 pb-2">
                    <span className="font-medium">Sunday</span>
                    <span className="text-[#EA4335] font-bold">Emergency Only</span>
                  </li>
                  <li className="pt-2 text-sm text-gray-500 italic">
                    * 24/7 support available for severe pest emergencies.
                  </li>
                </ul>
              </div>
            </div>

            {/* Service Areas */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-primary/10 flex gap-6 items-start hover:shadow-md transition-shadow">
              <div className="bg-brand-primary/10 p-4 rounded-2xl shrink-0">
                <Building size={32} className="text-brand-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-brand-text-primary mb-4">Areas We Serve</h3>
                <p className="text-brand-text-secondary text-lg mb-4">
                  We provide rapid-response pest control services across the Tricity and surrounding regions:
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Chandigarh', 'Mohali', 'Kharar', 'Panchkula', 'Zirakpur'].map((city) => (
                    <span key={city} className="px-4 py-1.5 bg-slate-100 text-brand-text-primary rounded-full text-sm font-bold border border-slate-200">
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <LocationMap />
    </div>
  );
}
