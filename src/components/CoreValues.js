"use client";
import { Shield, Leaf, ThumbsUp, Headset, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CoreValues() {
  const values = [
    {
      icon: <Shield size={28} />,
      title: "Certified Experts",
      description: "Our team consists of highly trained and certified professionals."
    },
    {
      icon: <Leaf size={28} />,
      title: "Eco-Friendly",
      description: "We use safe, environmentally responsible products."
    },
    {
      icon: <ThumbsUp size={28} />,
      title: "100% Satisfaction",
      description: "Highest quality service and complete customer satisfaction."
    },
    {
      icon: <Headset size={28} />,
      title: "24/7 Support",
      description: "Round-the-clock customer service & maintenance."
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="my-6 md:my-24 py-16 md:py-24 bg-brand-primary/5 rounded-[2rem] md:rounded-[3rem] relative overflow-hidden px-8 md:px-16 lg:px-24 shadow-inner">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl -ml-32 -mb-32"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24 relative z-10">
        
        {/* Left Side Content */}
        <motion.div 
          className="lg:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-5 py-2 bg-white shadow-md border border-brand-primary/20 rounded-full mb-8">
            <div className="w-2.5 h-2.5 rounded-full bg-brand-primary animate-pulse"></div>
            <span className="text-sm font-bold text-brand-primary tracking-wide uppercase">Why Choose Us</span>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-extrabold text-brand-text-primary mb-6 leading-[1.2] tracking-tight">
            Exceptional quality, unmatched reliability
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-brand-text-secondary text-lg md:text-xl mb-10 leading-relaxed max-w-lg">
            We combine industry-leading expertise with a commitment to environmental safety to deliver the best pest control solutions in India. Your safety and peace of mind are our top priorities.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col gap-5">
            {['Government Approved Chemicals', 'Odorless Treatments', 'Affordable Pricing'].map((item, i) => (
              <div key={i} className="flex items-center gap-4 bg-white/60 p-3 rounded-xl border border-white backdrop-blur-sm shadow-sm max-w-md">
                <div className="bg-brand-accent/20 p-2 rounded-full">
                  <CheckCircle2 className="text-brand-accent" size={24} />
                </div>
                <span className="text-brand-text-primary font-bold text-lg">{item}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side Grid */}
        <motion.div 
          className="lg:w-1/2 w-full grid sm:grid-cols-2 gap-5 lg:gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {values.map((val, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="bg-white p-6 rounded-3xl border border-transparent hover:border-brand-primary/20 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden flex flex-col justify-between h-full"
            >
              {/* Animated top line on hover */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-brand-primary to-brand-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              
              <div className="bg-brand-primary/5 w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-brand-primary transition-colors duration-500 shadow-inner">
                <div className="text-brand-primary group-hover:text-white transition-colors duration-500 group-hover:scale-110 transform">
                  {val.icon}
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-extrabold text-brand-text-primary mb-2 group-hover:text-brand-primary transition-colors">{val.title}</h3>
                <p className="text-brand-text-secondary text-sm leading-relaxed">
                  {val.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
