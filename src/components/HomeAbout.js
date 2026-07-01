"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { servicesData } from '../config/servicesData';
import { ShieldAlert, Quote, CheckCircle2 } from 'lucide-react';
import ServicesGrid from './ServicesGrid';

export default function HomeAbout() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <>
      <section className="py-24 lg:py-32 bg-white overflow-hidden relative font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Intro & Philosophy Split */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col space-y-8"
            >
              <div>
                <span className="text-brand-primary font-bold uppercase tracking-widest text-sm mb-3 block">Who We Are</span>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Pioneering Best-in-Class Pest Management
                </h3>
              </div>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  We are pleased to introduce ourselves as <strong className="text-gray-900">PROFESSIONAL’z</strong> pest management services, utilizing the latest technology to satisfy special demands. With a team of professionally qualified experts, we guide and supervise our trained technicians to provide international standard Pest Management Services in India.
                </p>
                <p>
                  We may not be the first Pest Control Company in India, but we are bringing the best technology to Indians for domestic and commercial needs. We don't wish to be known as just another pest control company; our aim is to be recognized as people who deliver complete customer satisfaction.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 space-y-8 relative overflow-hidden h-full flex flex-col justify-center transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-brand-primary/10 to-transparent rounded-bl-full -z-0"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Integrated Pest Management (IPM)
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  <strong className="text-gray-900">PROFESSIONAL’z</strong> believes that effective, responsible pest elimination should be less dependent upon chemical pesticides and more reliant upon techniques such as exclusion, traps, and surveillance.
                </p>
                
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-red-50 relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-400"></div>
                  <p className="font-bold text-red-500 mb-3 flex items-center gap-2">
                    <ShieldAlert className="w-5 h-5" /> The Flaw in Traditional Methods
                  </p>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    We don't rely only on repeated, residual pesticide applications. That approach ignores two flaws: Insects develop resistance to low doses, and subsequent high dosages can be harmful to humans, pets, and the environment.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Modern Quote Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative max-w-3xl mx-auto mt-16 md:mt-24 px-4"
          >
            <div className="bg-brand-primary/5 border border-brand-primary/10 p-6 md:p-8 rounded-3xl relative overflow-hidden shadow-sm flex flex-col md:flex-row items-start md:items-center gap-5 md:gap-8">
              
              <div className="absolute top-0 right-0 opacity-[0.03] transform translate-x-1/4 -translate-y-1/4 pointer-events-none">
                 <Quote className="w-48 h-48" />
              </div>
              
              <div className="shrink-0 relative z-10">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-primary rounded-xl flex items-center justify-center shadow-lg shadow-brand-primary/30 -rotate-3 hover:rotate-0 transition-transform">
                  <Quote className="w-5 h-5 md:w-6 md:h-6 text-white fill-current" />
                </div>
              </div>

              <div className="relative z-10 text-left flex-1">
                <h2 className="text-base md:text-lg lg:text-xl font-medium text-gray-800 leading-relaxed mb-5">
                  "A pest is an organism which is detrimental to man. Among the various pests which man encounters, the insects form the major group, against which man has to fight forever."
                </h2>
                <div className="inline-flex items-center gap-2.5 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
                  <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
                  <span className="font-bold text-gray-900 tracking-widest text-[10px] md:text-xs uppercase">Professional'z Vision</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Services Grid - Dark Modern Section */}
      <ServicesGrid />
    </>
  );
}

