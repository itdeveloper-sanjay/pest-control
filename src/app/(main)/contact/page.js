import LocationMap from '../../../components/LocationMap';
import { MapPin, Phone, Mail } from 'lucide-react';
import { siteData } from '../../../config/siteData';
import Image from 'next/image';
import contactUsHero from '../../../assets/contactushero.webp';

export default function ContactPage() {
  return (
    <div className="flex-1 w-full bg-brand-bg-main flex flex-col">
      {/* Hero Section */}
      <section className="w-full pt-12">
        <div className="max-w-6xl mx-auto px-4 md:px-8 w-full">
          <div className="rounded-3xl overflow-hidden shadow-xl border border-brand-border-default bg-white">
            <Image
              src={contactUsHero}
              alt="Contact Professionalz PMS"
              className="w-full h-auto"
              priority
              placeholder="blur"
            />
          </div>
        </div>
      </section>

      <section className="w-full py-16">
        <div className="max-w-6xl mx-auto px-8 w-full">

          <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
            {/* Contact Information */}
            <div className="bg-brand-bg-card p-8 rounded-2xl shadow-sm border border-brand-border-default">
              <h2 className="text-2xl font-bold text-brand-text-primary mb-8">Get In Touch</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-brand-primary/10 p-4 rounded-full text-brand-primary shrink-0">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-text-primary text-lg">Our Location</h3>
                    <p className="text-brand-text-secondary mt-1 leading-relaxed">
                      {siteData.contact.address.fullAddress}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-brand-primary/10 p-4 rounded-full text-brand-primary shrink-0">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-text-primary text-lg">Phone Number</h3>
                    <p className="text-brand-text-secondary mt-1 text-lg">
                      {siteData.contact.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-brand-primary/10 p-4 rounded-full text-brand-primary shrink-0">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-text-primary text-lg">Email Address</h3>
                    <p className="text-brand-text-secondary mt-1 text-lg">
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
