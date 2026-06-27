import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { APP_ROUTES } from '../config/routes';

export default function CTA() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-[32px] overflow-hidden shadow-xl bg-brand-primary">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary-hover via-brand-primary to-brand-secondary opacity-90"></div>
        
        <div className="relative z-10 px-8 py-12 md:py-16 lg:py-20 flex flex-col lg:flex-row items-center justify-between gap-10 max-w-6xl mx-auto">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-accent mr-2"></div>
              <span className="text-xs font-bold tracking-wider text-white uppercase">Live pest free</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6 leading-tight tracking-tight">
              Ready to protect your home or business?
            </h2>
            
            <p className="text-lg md:text-xl text-white/90 max-w-xl leading-relaxed mb-0">
              Talk to our expert team to build a pest control plan tailored to your property, ensuring a safe and healthy environment.
            </p>
          </div>
          
          {/* Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 shrink-0 w-full lg:w-auto">
            <Link 
              href="/contact"
              className="w-full sm:w-64 inline-flex items-center justify-center px-8 py-4 rounded-full bg-brand-accent text-brand-text-primary font-bold text-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              Request a quote
              <ArrowRight size={20} className="ml-2" />
            </Link>
            <Link 
              href={APP_ROUTES.SERVICES}
              className="w-full sm:w-64 inline-flex items-center justify-center px-8 py-4 rounded-full bg-transparent border-2 border-white/30 text-white font-bold text-lg hover:bg-white/10 hover:border-white transition-all duration-300 cursor-pointer"
            >
              Browse Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
