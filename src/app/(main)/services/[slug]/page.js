import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, CheckCircle2, PhoneCall, ArrowLeft } from 'lucide-react';
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
      <section className="relative w-full py-24 md:py-40 bg-gray-900 overflow-hidden">
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Left Column: Rich Details & Placeholders */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-sm border border-gray-100">
              {service.content}
            </div>
          </div>

          {/* Right Column: Sidebar (CTA) */}
          <div className="space-y-8">
            
            {/* Quick Contact CTA */}
            <div className="bg-gradient-to-br from-brand-primary to-[#1A5C28] p-8 rounded-[2rem] shadow-xl text-white text-center sticky top-24">
              <h3 className="text-2xl font-bold mb-4">Need this service?</h3>
              <p className="text-white/80 mb-8 font-medium">Contact our experts today for a free consultation and quote.</p>
              <a 
                href={`tel:${siteData.contact.phone.replace(/\D/g, '')}`}
                className="w-full bg-white text-brand-primary font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors shadow-md"
              >
                <PhoneCall className="w-5 h-5" />
                {siteData.contact.phone}
              </a>
              
              {/* Back to Services */}
              <Link 
                href="/#services" 
                className="flex items-center justify-center gap-2 text-white/80 hover:text-white font-medium transition-colors mt-6 pt-6 border-t border-white/20"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to All Services
              </Link>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
