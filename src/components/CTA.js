import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-[32px] overflow-hidden shadow-xl bg-brand-primary">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary-hover via-brand-primary to-brand-secondary opacity-90"></div>
        
        <div className="relative z-10 px-6 py-12 md:py-16 lg:py-20 flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-accent mr-2"></div>
            <span className="text-xs font-bold tracking-wider text-white uppercase">Grow with confidence</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6 leading-tight tracking-tight">
            Ready to plant a more productive season?
          </h2>
          
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl leading-relaxed">
            Talk to our agronomy team to build a seed program tailored to your soil, climate, and yield goals.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Link 
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-brand-accent text-brand-text-primary font-bold text-lg hover:opacity-90 transition-opacity"
            >
              Request a quote
              <ArrowRight size={20} className="ml-2" />
            </Link>
            <Link 
              href="/products"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-transparent border border-white/30 text-white font-bold text-lg hover:bg-white/10 transition-colors"
            >
              Browse catalog
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
