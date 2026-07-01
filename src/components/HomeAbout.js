"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { servicesData } from '../config/servicesData';
import { ShieldAlert, Quote, CheckCircle2, ArrowRight } from 'lucide-react';

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
          
          {/* Modern Quote Section */}
        {/* Modern Quote Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-3xl mx-auto mb-16 md:mb-24 px-4"
        >
          <div className="bg-gradient-to-br from-brand-primary/5 via-transparent to-brand-primary/5 border border-brand-primary/10 px-6 py-5 md:px-8 md:py-6 rounded-3xl relative overflow-hidden shadow-sm flex flex-col md:flex-row items-center gap-5 md:gap-8">
            
            <div className="absolute -top-4 -right-4 opacity-5 rotate-12">
               <Quote className="w-32 h-32" />
            </div>
            
            <div className="shrink-0 relative z-10 hidden md:block">
              <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center shadow-lg shadow-brand-primary/30 -rotate-3 hover:rotate-0 transition-transform">
                <Quote className="w-6 h-6 text-white fill-current" />
              </div>
            </div>

            <div className="relative z-10 text-center md:text-left flex-1">
              <div className="w-10 h-10 bg-brand-primary rounded-lg flex items-center justify-center shadow-md shadow-brand-primary/30 mx-auto mb-4 md:hidden">
                <Quote className="w-5 h-5 text-white fill-current" />
              </div>
              
              <h2 className="text-base md:text-lg lg:text-xl font-medium text-gray-800 leading-relaxed mb-4 italic">
                "A pest is an organism which is detrimental to man. Among the various pests which man encounters, the insects form the major group, against which man has to fight forever."
              </h2>
              <div className="inline-flex items-center gap-2.5 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
                <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
                <span className="font-bold text-gray-900 tracking-widest text-[10px] md:text-xs uppercase">Professional'z Vision</span>
              </div>
            </div>
          </div>
        </motion.div>

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
              <div className="flex items-center gap-4 pt-4">
                 <div className="flex -space-x-4">
                   {[...Array(4)].map((_, i) => (
                     <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center">
                       <CheckCircle2 className="w-6 h-6 text-brand-primary" />
                     </div>
                   ))}
                 </div>
                 <span className="text-sm font-semibold text-gray-500">Trusted by 1000+ Families</span>
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
        </div>
      </section>

      {/* Services Grid - Dark Modern Section */}
      <section className="py-24 lg:py-32 bg-slate-900 relative overflow-hidden font-sans">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
              {servicesData.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <Link key={service.id || idx} href={`/services/${service.slug}`} className="block h-full outline-none">
                    <motion.div 
                      variants={itemVariants}
                      className="bg-slate-800/40 backdrop-blur-md p-4 md:p-5 rounded-2xl border border-white/5 hover:border-brand-primary/40 hover:bg-slate-800/80 hover:-translate-y-1.5 hover:shadow-[0_10px_40px_rgba(46,125,50,0.15)] transition-all duration-500 flex flex-col items-start text-left group h-full cursor-pointer relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-brand-primary/20 to-transparent rounded-bl-full -mr-4 -mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                      <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center mb-3 group-hover:bg-brand-primary transition-colors duration-500 shrink-0 border border-white/10 group-hover:border-brand-primary relative z-10">
                        <Icon className="w-5 h-5 text-brand-primary group-hover:text-white transition-colors duration-500" />
                      </div>
                      
                      <div className="relative z-10 flex-1 flex flex-col w-full">
                        <h4 className="font-bold text-white text-base mb-1.5 leading-tight group-hover:text-brand-primary transition-colors duration-500">{service.name}</h4>
                        <p className="text-gray-400 text-xs leading-relaxed mb-4 flex-1">{service.shortDesc}</p>
                        
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
    </>
  );
}

