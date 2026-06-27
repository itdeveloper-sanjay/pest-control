"use client";
import { Telescope, Lightbulb, Users, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CompanyVision() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="my-16 md:my-24 mx-4 sm:mx-6 lg:mx-8 relative overflow-hidden bg-brand-primary rounded-[3rem] shadow-2xl">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-brand-accent/20 rounded-full blur-[100px] md:blur-[120px] -translate-y-1/2 translate-x-1/3 z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-white/10 rounded-full blur-[100px] md:blur-[120px] translate-y-1/3 -translate-x-1/3 z-0 pointer-events-none"></div>
      
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEgMWgyMHYyMEgxVjF6IiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvc3ZnPg==')] opacity-30 z-0"></div>

      <motion.div
        className="max-w-5xl mx-auto px-6 md:px-12 pt-8 pb-16 md:pt-12 md:pb-24 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={itemVariants} className="inline-flex items-center justify-center mb-4">
          <div className="relative">
            <div className="absolute inset-0 bg-brand-accent blur-xl opacity-40 rounded-full scale-150"></div>
            <Telescope size={48} className="text-brand-accent relative z-10 drop-shadow-[0_0_15px_rgba(249,168,37,0.5)]" />
          </div>
        </motion.div>

        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 tracking-tight drop-shadow-lg">
          Company's <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-yellow-300">Vision</span>
        </motion.h2>

        <motion.div variants={itemVariants} className="space-y-6 text-lg md:text-xl text-white/80 leading-relaxed max-w-4xl mx-auto font-medium">
          <p>
            We believe in the highest quality service. We offer outstanding Information Service Management with the highest Return on Investment for our clients. We focus on using state of the art technology in a way that translates into real business benefits for our clients.
          </p>
          <p>
            Through trust and commitment, we build win-win relationships with our customers and callers. To our employees, <strong className="text-white font-bold tracking-wide">Professionalz PMS</strong> creates an honest, creative, enjoyable and rewarding environment.
          </p>
          <p>
            Our vision is to expand our business by achieving the top-notch position in the information industry in India which will be well known all over India by using new and latest technology and infrastructure.
          </p>
        </motion.div>

        {/* Feature Highlights beneath vision */}
        <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-10 mt-16 pt-8 border-t border-white/10">
          <motion.div variants={itemVariants} className="flex flex-col items-center p-8 md:p-10 rounded-[2rem] bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-white/10 hover:border-white/30 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 group">
            <div className="bg-brand-accent/20 group-hover:bg-brand-accent transition-colors duration-500 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
              <Lightbulb className="text-brand-accent group-hover:text-brand-text-primary transition-colors duration-500" size={36} />
            </div>
            <h4 className="font-extrabold text-xl md:text-2xl text-white mb-2">Latest Technology</h4>
            <p className="text-white/70 text-sm font-medium">State-of-the-art solutions</p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col items-center p-8 md:p-10 rounded-[2rem] bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-white/10 hover:border-white/30 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 group">
            <div className="bg-brand-accent/20 group-hover:bg-brand-accent transition-colors duration-500 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
              <Users className="text-brand-accent group-hover:text-brand-text-primary transition-colors duration-500" size={36} />
            </div>
            <h4 className="font-extrabold text-xl md:text-2xl text-white mb-2 text-center">Win-Win Relationships</h4>
            <p className="text-white/70 text-sm font-medium">Trust and commitment</p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col items-center p-8 md:p-10 rounded-[2rem] bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:bg-white/10 hover:border-white/30 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 group">
            <div className="bg-brand-accent/20 group-hover:bg-brand-accent transition-colors duration-500 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-inner">
              <TrendingUp className="text-brand-accent group-hover:text-brand-text-primary transition-colors duration-500" size={36} />
            </div>
            <h4 className="font-extrabold text-xl md:text-2xl text-white mb-2 text-center">Top-Notch Position</h4>
            <p className="text-white/70 text-sm font-medium">Industry leadership</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
