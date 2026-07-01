import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, CheckCircle2, PhoneCall, MessageCircle } from 'lucide-react';
import { servicesData } from '@/config/servicesData';
import { siteData } from '@/config/siteData';

import serviceBanner from '@/assets/services/subservices/servicebanner.webp';
import serviceBannerMobile from '@/assets/services/subservices/servicebannermobile.webp';

// Generate static params so these pages are statically generated at build time
export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;

  return (
    <div className="flex-1 w-full bg-slate-50 min-h-screen pb-20">
      {/* Dynamic Hero Section */}
      <section className="relative w-full min-h-[450px] md:min-h-[500px] flex items-center justify-center bg-gray-900 overflow-hidden pt-24 md:pt-32 pb-16">
        {/* Background Images */}
        <div className="absolute inset-0 z-0">
          <Image
            src={serviceBanner}
            alt="Service Banner"
            fill
            className="hidden md:block object-cover object-center opacity-80"
            priority
          />
          <Image
            src={serviceBannerMobile}
            alt="Service Banner Mobile"
            fill
            className="block md:hidden object-cover object-center opacity-80"
            priority
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-md">
              {service.name}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl font-medium">
              {service.shortDesc}
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm font-medium text-gray-500">
            <Link href="/" className="hover:text-brand-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/services" className="hover:text-brand-primary transition-colors">Services</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-brand-primary">{service.name}</span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 md:mt-16">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Rich Details & Placeholders */}
          <div className="lg:col-span-2">
            <div className="bg-white p-5 sm:p-8 lg:p-10 rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
              {service.content}
            </div>
          </div>

          {/* Right Column: Sidebar (CTA) */}
          <div className="space-y-6 lg:sticky lg:top-28">
            
            {/* Quick Contact CTA */}
            <div className="bg-gradient-to-br from-brand-primary to-[#1A5C28] p-6 lg:p-8 rounded-3xl shadow-xl text-white text-center">
              <h3 className="text-xl lg:text-2xl font-bold mb-3">Need this service?</h3>
              <p className="text-white/80 mb-6 text-sm lg:text-base font-medium">Contact our experts today for a free consultation and quote.</p>
              <a 
                href={`tel:${siteData.contact.phone.replace(/\D/g, '')}`}
                className="w-full bg-white text-brand-primary font-bold py-3.5 lg:py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors shadow-md"
              >
                <PhoneCall className="w-5 h-5" />
                {siteData.contact.phone}
              </a>
              
              {/* WhatsApp CTA */}
              <a 
                href={`https://wa.me/${siteData.contact.phone.replace(/\D/g, '')}?text=Hi%20PROFESSIONALz,%20I'm%20interested%20in%20your%20${encodeURIComponent(service.name)}%20service.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-white bg-white/10 hover:bg-white/20 font-bold transition-colors mt-4 py-3 rounded-xl border border-white/20 w-full shadow-sm"
              >
                <MessageCircle className="w-5 h-5" />
                Message on WhatsApp
              </a>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
