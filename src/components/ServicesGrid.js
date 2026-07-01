"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { servicesData } from '@/config/servicesData';
import { ArrowRight } from 'lucide-react';

export default function ServicesGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="services" className="py-16 md:py-24 lg:py-32 bg-slate-900 relative overflow-hidden font-sans">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-brand-primary/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-brand-accent/5 blur-3xl rounded-full translate-y-1/2 -translate-x-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="text-center mb-16">
            <span className="text-brand-primary font-bold uppercase tracking-widest text-sm mb-3 block">Our Expertise</span>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Comprehensive Treatments
            </h3>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              We provide highly specialized services for all pest-related problems. Controlling them is generally best left to <strong className="text-gray-200">PROFESSIONAL’z</strong>.
            </p>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-5 pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 md:gap-6 sm:overflow-visible" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <style>{`
              .flex::-webkit-scrollbar { display: none; }
            `}</style>
            {servicesData.map((service, idx) => {
              const Icon = service.icon;
              return (
                <Link 
                  key={service.id || idx} 
                  href={`/services/${service.slug}`} 
                  className="block h-full outline-none w-[72vw] shrink-0 snap-center sm:w-full sm:shrink sm:snap-align-none"
                >
                  <motion.div 
                    variants={itemVariants}
                    className="bg-slate-800/40 backdrop-blur-md p-4 md:p-5 rounded-2xl border border-white/5 hover:border-brand-primary/40 hover:bg-slate-800/80 hover:-translate-y-1.5 hover:shadow-[0_10px_40px_rgba(46,125,50,0.15)] transition-all duration-500 flex flex-col items-start text-left group h-full cursor-pointer relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-brand-primary/20 to-transparent rounded-bl-full -mr-4 -mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white/5 rounded-xl flex items-center justify-center mb-3 md:mb-4 group-hover:bg-brand-primary transition-colors duration-500 shrink-0 border border-white/10 group-hover:border-brand-primary relative z-10">
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-brand-primary group-hover:text-white transition-colors duration-500" />
                    </div>
                    
                    <div className="relative z-10 flex-1 flex flex-col w-full">
                      <h4 className="font-bold text-white text-[15px] md:text-base mb-1.5 md:mb-2 leading-tight group-hover:text-brand-primary transition-colors duration-500">{service.name}</h4>
                      <p className="text-gray-400 text-[11px] md:text-xs leading-relaxed mb-3 md:mb-4 flex-1 line-clamp-2 md:line-clamp-none">{service.shortDesc}</p>
                      
                      <div className="mt-auto flex items-center text-[11px] font-bold text-brand-primary uppercase tracking-wider group-hover:text-white transition-colors duration-300">
                        Explore Treatment 
                        <ArrowRight className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </motion.div>
                  </Link>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
