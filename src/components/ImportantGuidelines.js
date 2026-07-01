"use client";
import { ShieldAlert, Info, AlertTriangle, Droplet, Wind, HandMetal, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { APP_ROUTES } from '../config/routes';

export default function ImportantGuidelines() {
  const safetyRules = [
    {
      title: "Keep Children and Pets Away",
      desc: "Ensure children and pets are kept away from the treated areas until the chemicals have completely dried or for the duration recommended by our technicians.",
      icon: <ShieldAlert size={32} />
    },
    {
      title: "Cover Food and Water",
      desc: "Store all food, drinking water, and utensils in sealed containers or inside closed cabinets before the treatment begins.",
      icon: <Droplet size={32} />
    },
    {
      title: "Ventilate the Premises",
      desc: "After the treatment, open windows and doors to allow proper ventilation for at least 2-3 hours before re-entering the treated rooms.",
      icon: <Wind size={32} />
    },
    {
      title: "Avoid Touching Treated Surfaces",
      desc: "Do not touch the walls, baseboards, or other treated surfaces immediately after the process. Wash hands thoroughly if accidental contact occurs.",
      icon: <HandMetal size={32} />
    },
    {
      title: "Follow Technician Advice",
      desc: "Always adhere strictly to the post-treatment instructions provided by our certified exterminators for maximum safety and effectiveness.",
      icon: <Info size={32} />
    },
    {
      title: "In Case of Emergency",
      desc: "If anyone experiences irritation, dizziness, or allergic reactions, move to fresh air immediately and seek medical attention.",
      icon: <AlertTriangle size={32} />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-primary/5 border border-brand-primary/20 rounded-full mb-6">
          <ShieldAlert className="text-brand-primary" size={18} />
          <span className="text-sm font-bold text-brand-primary tracking-wide uppercase">Safety First</span>
        </div>
        <h2 className="text-2xl md:text-4xl font-bold text-brand-text-primary mb-6 leading-tight">Important Guidelines</h2>
        <p className="text-brand-text-secondary text-lg max-w-2xl mx-auto leading-relaxed mb-8">
          Our chemicals are highly effective against pests but require careful handling. Strict adherence to these rules is mandatory to ensure the safety of your family and pets.
        </p>
        <Link 
          href={APP_ROUTES.SAFETY_INSTRUCTIONS}
          className="inline-flex items-center gap-2 px-6 py-3 bg-brand-primary text-white font-bold rounded-full hover:bg-brand-primary-hover shadow-lg hover:shadow-[0_10px_20px_rgba(46,125,50,0.3)] transition-all duration-300 group hover:-translate-y-1"
        >
          View All Safety Instructions
          <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform duration-300" />
        </Link>
      </motion.div>

      <motion.div 
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {safetyRules.map((rule, i) => (
          <motion.div 
            key={i} 
            variants={itemVariants} 
            className="bg-white p-8 rounded-[2rem] shadow-lg border border-brand-border-default hover:border-brand-primary/40 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden"
          >
            {/* Decorative background circle */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-bl-full -mr-8 -mt-8 transition-transform duration-500 group-hover:scale-110"></div>
            
            <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-primary transition-colors duration-300 relative z-10 text-brand-primary group-hover:text-white">
              {rule.icon}
            </div>
            <h3 className="text-xl font-bold mb-4 text-brand-text-primary group-hover:text-brand-primary transition-colors relative z-10">{rule.title}</h3>
            <p className="text-brand-text-secondary leading-relaxed relative z-10">{rule.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
