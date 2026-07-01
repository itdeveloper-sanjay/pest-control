"use client";
import Image from 'next/image';
import { ShieldCheck, Leaf, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import homeHeroImg from '@/assets/homehero.webp';
import homeHeroMobileImg from '@/assets/homeheromobile.webp';
import Reviews from '../../components/Reviews';
import CTA from '../../components/CTA';
import FAQ from '../../components/FAQ';
import ProtectHome from '../../components/ProtectHome';

import ImportantGuidelines from '../../components/ImportantGuidelines';
import HomeAbout from '../../components/HomeAbout';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="flex-1 w-full overflow-hidden">
      <section className="relative w-full min-h-[600px] flex flex-col justify-center items-center text-center px-4 md:px-8 pb-16">
        <div className="absolute inset-0 z-0">
          <div className="hidden md:block w-full h-full relative">
            <Image
              src={homeHeroImg}
              alt="Home Hero Desktop"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
          <div className="block md:hidden w-full h-full relative">
            <Image
              src={homeHeroMobileImg}
              alt="Home Hero Mobile"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
          {/* Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-white max-w-4xl mx-auto flex flex-col items-center pt-28 px-4">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-3xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 leading-tight drop-shadow text-center">
            Complete Pest Management Solutions
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-base sm:text-lg md:text-2xl max-w-2xl mx-auto mb-8 md:mb-10 text-gray-200 drop-shadow font-medium text-center">
            Protect your home and business with our expert pest management services. We provide safe, eco-friendly, and effective treatments across Tricity.
          </motion.p>

        </div>
      </section>

      <HomeAbout />

      <section className="py-24 md:py-32 bg-slate-50 relative overflow-hidden font-sans">
      {/* Decorative Modern Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-50"></div>
      <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-brand-primary/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-[#25D366]/5 blur-3xl rounded-full translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-1.5 bg-white border border-brand-primary/20 rounded-full mb-4 shadow-sm">
              <span className="text-sm font-bold text-brand-primary tracking-wider uppercase">Our Advantage</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-brand-text-primary mb-6">Why Choose Our Services?</h2>
            <p className="text-lg text-brand-text-secondary max-w-2xl mx-auto leading-relaxed">
              We go beyond basic pest control by offering comprehensive, safe, and expert-driven solutions tailored for your peace of mind.
            </p>
          </motion.div>

          <motion.div
            className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-3 md:gap-8 lg:gap-10"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <style>{`
              .flex::-webkit-scrollbar { display: none; }
            `}</style>
            <motion.div variants={itemVariants} className="w-[85vw] shrink-0 snap-center md:w-full md:shrink md:snap-align-none bg-white p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-transparent hover:border-brand-primary/20 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center text-center relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1.5 md:h-2 bg-gradient-to-r from-brand-primary to-brand-primary-light transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-primary/5 rounded-full flex items-center justify-center mb-5 md:mb-8 group-hover:bg-brand-primary transition-colors duration-500 shadow-inner">
                <ShieldCheck className="w-8 h-8 md:w-10 md:h-10 text-brand-primary group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-brand-text-primary">Total Eradication</h3>
              <p className="text-brand-text-secondary text-base md:text-lg leading-relaxed">Explore our advanced pest control solutions that completely eliminate termites, cockroaches, and other pests from your property.</p>
            </motion.div>

            <motion.div variants={itemVariants} className="w-[85vw] shrink-0 snap-center md:w-full md:shrink md:snap-align-none bg-white p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-transparent hover:border-[#25D366]/20 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center text-center relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1.5 md:h-2 bg-gradient-to-r from-[#25D366] to-[#1DA851] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="w-16 h-16 md:w-20 md:h-20 bg-[#25D366]/5 rounded-full flex items-center justify-center mb-5 md:mb-8 group-hover:bg-[#25D366] transition-colors duration-500 shadow-inner">
                <Leaf className="w-8 h-8 md:w-10 md:h-10 text-[#25D366] group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-brand-text-primary">Eco-Friendly</h3>
              <p className="text-brand-text-secondary text-base md:text-lg leading-relaxed">We use safe, eco-friendly products to manage pests, ensuring the health and safety of your family and pets.</p>
            </motion.div>

            <motion.div variants={itemVariants} className="w-[85vw] shrink-0 snap-center md:w-full md:shrink md:snap-align-none bg-white p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-transparent hover:border-brand-accent/20 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center text-center relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1.5 md:h-2 bg-gradient-to-r from-brand-accent to-yellow-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="w-16 h-16 md:w-20 md:h-20 bg-brand-accent/10 rounded-full flex items-center justify-center mb-5 md:mb-8 group-hover:bg-brand-accent transition-colors duration-500 shadow-inner">
                <Award className="w-8 h-8 md:w-10 md:h-10 text-brand-accent group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-brand-text-primary">Certified Experts</h3>
              <p className="text-brand-text-secondary text-base md:text-lg leading-relaxed">Rely on our team of highly qualified and professionally trained personnel for reliable, year-round pest protection.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <ProtectHome />
      
      <div className="w-full bg-slate-50 border-y border-brand-border-default">
        <ImportantGuidelines />
      </div>

      <Reviews />
      
      <div className="w-full bg-white border-t border-brand-border-default py-8">
        <FAQ />
      </div>
      
      <CTA />
    </div>
  );
}
