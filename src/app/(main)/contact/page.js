"use client";
import { useState } from 'react';
import LocationMap from '../../../components/LocationMap';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, MessageCircle, Clock, Building } from 'lucide-react';
import { siteData } from '../../../config/siteData';
import Image from 'next/image';
import heroContact from '../../../assets/herocontact.webp';
import heroContactMobile from '../../../assets/herocontactmobile.webp';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully! We will get back to you soon.' });
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.error || 'Failed to send message.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'An unexpected error occurred. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

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
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow">
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
            <h2 className="text-2xl md:text-4xl font-bold text-brand-text-primary mb-4">Let's Connect</h2>
            <p className="text-brand-text-secondary text-lg max-w-2xl mx-auto">
              Have a question, need a quote, or want to schedule a service? Fill out the form or use our contact details below. Our team is ready to help!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Contact Information */}
            <div className="bg-gradient-primary p-6 md:p-10 rounded-2xl shadow-[0_15px_40px_rgb(46,125,50,0.2)] text-white relative overflow-hidden group animate-fade-in-up delay-[400ms]">
              {/* Decorative background shapes */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/3 -translate-x-1/4"></div>
              
              <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-10 relative z-10 text-white drop-shadow-md">Get In Touch</h2>
              <div className="space-y-6 md:space-y-10 relative z-10">
                
                {/* Location */}
                <div className="flex items-start gap-4 md:gap-5 group/item cursor-default">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-2.5 md:p-4 rounded-full text-white shrink-0 group-hover/item:scale-110 group-hover/item:bg-white/20 group-hover/item:border-white/40 transition-all duration-300 shadow-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 md:w-[26px] md:h-[26px]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-xl tracking-wide transition-colors">Our Location</h3>
                    <p className="text-white/80 mt-2 leading-relaxed text-base group-hover/item:text-white transition-colors">
                      {siteData.contact.address.fullAddress}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4 md:gap-5 group/item cursor-default">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-2.5 md:p-4 rounded-full text-white shrink-0 group-hover/item:scale-110 group-hover/item:bg-white/20 group-hover/item:border-white/40 transition-all duration-300 shadow-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 md:w-[26px] md:h-[26px]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg sm:text-xl tracking-wide transition-colors">Phone Number</h3>
                    <p className="text-white/80 mt-1 text-base sm:text-lg group-hover/item:text-white transition-colors font-medium">
                      {siteData.contact.phone}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4 md:gap-5 group/item cursor-default">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-2.5 md:p-4 rounded-full text-white shrink-0 group-hover/item:scale-110 group-hover/item:bg-white/20 group-hover/item:border-white/40 transition-all duration-300 shadow-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 md:w-[26px] md:h-[26px]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-white text-lg sm:text-xl tracking-wide transition-colors">Email Address</h3>
                    <p className="text-white/80 mt-1 text-base sm:text-lg group-hover/item:text-white transition-colors font-medium break-all">
                      {siteData.contact.email}
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center gap-4 md:gap-5 group/item cursor-default">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-2.5 md:p-4 rounded-full text-white shrink-0 group-hover/item:scale-110 group-hover/item:bg-white/20 group-hover/item:border-white/40 transition-all duration-300 shadow-lg flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:w-[26px] md:h-[26px]">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-white text-lg sm:text-xl tracking-wide transition-colors">WhatsApp</h3>
                    <p className="text-white/80 mt-1 text-base sm:text-lg group-hover/item:text-white transition-colors font-medium break-all">
                      {siteData.contact.phone}
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-brand-border-default animate-fade-in-up delay-[500ms]">
              <h2 className="text-2xl font-bold text-brand-text-primary mb-4">Send a Message</h2>
              
              {status.type === 'success' ? (
                <div className="flex flex-col items-center justify-center py-10 space-y-4">
                  <div className="bg-green-100 p-4 rounded-full">
                    <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">Thank You!</h3>
                  <p className="text-center text-gray-600">{status.message}</p>
                  <button 
                    onClick={() => setStatus({type: '', message: ''})} 
                    className="mt-6 px-6 py-2 border-2 border-brand-primary text-brand-primary rounded-md font-bold hover:bg-brand-primary hover:text-white transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {status.message && (
                    <div className="p-4 rounded-md text-sm font-medium bg-red-50 text-red-800 border border-red-200">
                      {status.message}
                    </div>
                  )}

                  <div>
                <label className="block text-sm font-medium text-brand-text-primary mb-1">Name</label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full border border-brand-border-default rounded-md p-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary bg-brand-bg-main" 
                  placeholder="Your Name" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-text-primary mb-1">Email</label>
                <input 
                  type="email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full border border-brand-border-default rounded-md p-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary bg-brand-bg-main" 
                  placeholder="you@example.com" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-text-primary mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  required
                  pattern="[0-9]{10}"
                  maxLength="10"
                  title="Please enter exactly 10 digits"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value.replace(/\D/g, '')})}
                  className="w-full border border-brand-border-default rounded-md p-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary bg-brand-bg-main" 
                  placeholder="Your Mobile Number (10 digits)" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-brand-text-primary mb-1">Message</label>
                <textarea 
                  rows="5" 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full border border-brand-border-default rounded-md p-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary bg-brand-bg-main" 
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={loading}
                className="bg-brand-primary text-white px-8 py-3 rounded-md hover:bg-brand-primary-hover transition-colors font-bold w-full shadow-md mt-2 cursor-pointer disabled:opacity-70 flex justify-center items-center"
              >
                {loading ? (
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  'Send Message'
                )}
              </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours & Service Areas */}
      <section className="w-full py-16 bg-brand-primary/5 border-t border-brand-border-default">
        <div className="max-w-6xl mx-auto px-4 sm:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            
            {/* Business Hours */}
            <div className="bg-white p-5 md:p-8 rounded-[1.5rem] md:rounded-3xl shadow-sm border border-brand-primary/10 flex flex-col sm:flex-row gap-4 md:gap-6 items-start hover:shadow-md transition-shadow">
              <div className="bg-brand-accent/20 p-3 md:p-4 rounded-xl md:rounded-2xl shrink-0">
                <Clock className="w-6 h-6 md:w-8 md:h-8 text-brand-accent" />
              </div>
              <div className="w-full">
                <h3 className="text-xl md:text-2xl font-bold text-brand-text-primary mb-3 md:mb-4">Business Hours</h3>
                <ul className="space-y-3 text-brand-text-secondary text-base md:text-lg">
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
            <div className="bg-white p-5 md:p-8 rounded-[1.5rem] md:rounded-3xl shadow-sm border border-brand-primary/10 flex flex-col sm:flex-row gap-4 md:gap-6 items-start hover:shadow-md transition-shadow">
              <div className="bg-brand-primary/10 p-3 md:p-4 rounded-xl md:rounded-2xl shrink-0">
                <Building className="w-6 h-6 md:w-8 md:h-8 text-brand-primary" />
              </div>
              <div className="w-full">
                <h3 className="text-xl md:text-2xl font-bold text-brand-text-primary mb-3 md:mb-4">Areas We Serve</h3>
                <p className="text-brand-text-secondary text-base md:text-lg mb-4">
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
