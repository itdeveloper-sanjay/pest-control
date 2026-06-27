"use client";
import Image from 'next/image';
import kOthrine3 from '@/assets/k-othrine-3.webp';
import kOthrine1 from '@/assets/k-othrine-1.webp';
import kOthrine2 from '@/assets/k-othrine-2.webp';
import kOthrine4 from '@/assets/k-othrine-4.webp';
import safetyHero from '@/assets/safetyhero.webp';
import safetyHeroMobile from '@/assets/safetyheromobile.webp';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldCheck, Droplets, Droplet, Clock, Home, Building2, Wind, ShieldAlert,
  ChevronDown, CheckCircle2, AlertTriangle, Zap, Leaf, Check
} from 'lucide-react';
import FAQ from '@/components/FAQ';

export default function AquaKOthrinePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const productBenefits = [
    { title: "Fast Knockdown", desc: "Provides rapid control of adult mosquitoes.", icon: <Zap size={32} /> },
    { title: "Water-Based Formula", desc: "Cleaner and safer than many traditional solvent-based formulations.", icon: <Droplets size={32} /> },
    { title: "Odour Free", desc: "No strong chemical smell during application.", icon: <Wind size={32} /> },
    { title: "Indoor & Outdoor Use", desc: "Suitable for homes, offices, gardens, commercial buildings, and public spaces.", icon: <Home size={32} /> },
    { title: "Professional Equipment", desc: "Works with ULV sprayers, thermal foggers, and cold fogging machines.", icon: <Building2 size={32} /> },
    { title: "Environment Friendly", desc: "Reduces pollution and minimizes environmental impact.", icon: <Leaf size={32} /> }
  ];

  const optimalTiming = [
    { target: "Aedes Mosquito", time: "Morning (7 AM) or Evening (5 PM)" },
    { target: "Culex Mosquito", time: "Evening (7 PM – 12 AM)" },
    { target: "Anopheles Mosquito", time: "Night (9 PM – 5 AM)" },
    { target: "House Fly", time: "Daytime before sunset" }
  ];

  const whyChooseUs = [
    "Fast Acting", "Water-Based", "Low Odour", "Professional Grade",
    "Safe Indoor Application", "Outdoor Mosquito Control", "Environment Friendly",
    "Advanced Spray Technology", "Trusted by Pest Control Professionals"
  ];

  const applicationMethods = [
    "ULV Spraying", "Cold Fogging", "Thermal Fogging", "Indoor Space Spraying", "Outdoor Space Spraying"
  ];

  const faqs = [
    { q: "Is Aqua K-Othrine safe?", a: "When applied by trained professionals according to recommended guidelines, Aqua K-Othrine is an effective mosquito control solution." },
    { q: "Does it have a strong smell?", a: "No. It is a water-based formulation with very low odour." },
    { q: "Can it be used indoors?", a: "Yes. It is suitable for both indoor and outdoor mosquito control." },
    { q: "How long does the treatment take?", a: "Treatment time depends on the size of the property and level of infestation." }
  ];

  return (
    <div className="flex-1 w-full bg-slate-50 flex flex-col pb-20">
      {/* Hero Section */}
      <section className="relative w-full min-h-[550px] flex flex-col justify-center items-center pb-16 pt-20">
        <div className="absolute inset-0 z-0 bg-black">
          {/* Desktop Image */}
          <Image
             src={safetyHero}
             alt="Safety Instructions"
             fill
             className="object-cover object-center opacity-70 hidden md:block"
             priority
             placeholder="blur"
          />
          {/* Mobile Image */}
          <Image
             src={safetyHeroMobile}
             alt="Safety Instructions Mobile"
             fill
             className="object-cover object-center opacity-70 md:hidden"
             priority
             placeholder="blur"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        </div>
        
        <div className="relative z-10 text-center px-4 w-full max-w-5xl mx-auto flex flex-col items-center justify-center">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center px-5 py-2 bg-brand-accent text-brand-text-primary font-bold rounded-full text-sm tracking-widest uppercase mb-6 shadow-sm">
            <ShieldAlert size={16} className="mr-2" />
            Important Guidelines
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-tight drop-shadow-2xl">
            Safety Instructions & Information
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto drop-shadow-lg">
            Your well-being is our top priority. Explore our safety guidelines and discover the advanced, eco-friendly technologies we use to keep your environment completely secure.
          </motion.p>
        </div>
      </section>

      {/* Title for Technology Section */}
      <section className="w-full bg-gradient-to-b from-brand-primary/5 to-white pt-24 pb-16 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-accent/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-[0_4px_15px_rgb(0,0,0,0.05)] border border-brand-primary/10 mb-6"
          >
            <div className="bg-brand-primary/10 p-1.5 rounded-full">
              <Droplet size={16} className="text-brand-primary" fill="currentColor" />
            </div>
            <span className="text-brand-primary font-bold text-sm uppercase tracking-wider">Advanced Technology</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-text-primary mb-6 tracking-tight drop-shadow-sm"
          >
            Aqua <span className="text-brand-primary relative inline-block">K-Othrine<span className="absolute bottom-1 left-0 w-full h-3 bg-brand-accent/30 -z-10 -rotate-1"></span></span> Technology
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-brand-text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Learn about our advanced, water-based space spray formulation for effective and safe mosquito management.
          </motion.p>
        </div>
      </section>

      {/* Section 1: What is Aqua K-Othrine? */}
      <section className="w-full bg-white py-20 border-y border-brand-border-default">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-text-primary mb-6">What is Aqua K-Othrine?</h2>
              <p className="text-lg text-brand-text-secondary leading-relaxed mb-6">
                Aqua K-Othrine is a professional-grade water-based space spray formulation used for controlling adult mosquitoes in residential, commercial, industrial, and public environments.
              </p>
              <p className="text-lg text-brand-text-secondary leading-relaxed mb-8">
                It contains <strong>2% Deltamethrin</strong>, a highly effective active ingredient that delivers rapid knockdown of flying mosquitoes while remaining suitable for both indoor and outdoor applications.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Water-based formulation", "Contains 2% Deltamethrin", "Fast knockdown action",
                  "Indoor & outdoor application", "Professional mosquito control"
                ].map((highlight, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="text-brand-primary shrink-0" size={24} />
                    <span className="font-semibold text-brand-text-primary">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 w-full h-[400px] relative rounded-[2rem] overflow-hidden shadow-2xl">
              <Image src={kOthrine1} alt="Water based formulation" fill className="object-cover" placeholder="blur" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Why We Use Aqua K-Othrine */}
      <section className="w-full bg-brand-primary/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col-reverse lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 w-full h-[500px] relative rounded-[2rem] overflow-hidden shadow-xl border border-brand-primary/10">
              <Image src={kOthrine2} alt="Eco-friendly alternative" fill className="object-cover object-right" placeholder="blur" />
            </div>
            <div className="lg:w-1/2">
              <div className="inline-block px-4 py-1.5 bg-white text-brand-primary font-bold rounded-full text-sm mb-4 border border-brand-primary/20 shadow-sm">Cleaner & Safer</div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-text-primary mb-6">Why We Use Aqua K-Othrine</h2>
              <p className="text-lg text-brand-text-secondary leading-relaxed mb-8">
                Traditional solvent-based insecticides often produce strong odours and may leave stains. Aqua K-Othrine offers a cleaner, safer, and more environmentally responsible alternative without compromising performance.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                {[
                  "Water-based dilution", "Environmentally acceptable", "Low pollution", "Easy to handle",
                  "No unpleasant odour", "Low staining", "Lower fire risk", "Compatible with pro equipment",
                  "Indoor & outdoor suitable"
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white p-3 rounded-xl border border-white/50 shadow-sm">
                    <div className="bg-[#25D366]/20 p-1.5 rounded-full shrink-0">
                      <Check className="text-[#25D366]" size={16} />
                    </div>
                    <span className="font-medium text-brand-text-primary text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Advanced Spray Technology */}
      <section className="w-full bg-white py-20 border-y border-brand-border-default">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-text-primary mb-6">Film Forming Aqueous Spray Technology (FFAST)</h2>
            <p className="text-lg text-brand-text-secondary max-w-3xl mx-auto leading-relaxed mb-12">
              Aqua K-Othrine uses FFAST. This technology creates a thin protective film around spray droplets, reducing evaporation and allowing droplets to remain airborne for a longer period. More flying mosquitoes come into contact with the insecticide, improving treatment effectiveness.
            </p>

            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2 w-full h-[400px] relative rounded-[2rem] overflow-hidden shadow-2xl order-2 lg:order-1">
                <Image src={kOthrine3} alt="Spray Technology" fill className="object-cover" placeholder="blur" />
              </div>
              <div className="lg:w-1/2 order-1 lg:order-2">
                <div className="bg-brand-primary/5 rounded-[2rem] p-8 text-left h-full border border-brand-primary/10">
                  <h3 className="text-2xl font-bold text-brand-primary mb-6">Key Advantages</h3>
                  <ul className="space-y-6">
                    {[
                      { title: "Longer airborne suspension", icon: <Wind /> },
                      { title: "Better mosquito contact", icon: <ShieldCheck /> },
                      { title: "Reduced evaporation", icon: <Droplet /> },
                      { title: "Higher treatment efficiency", icon: <Zap /> },
                      { title: "Uniform droplet formation", icon: <Droplets /> }
                    ].map((adv, i) => (
                      <li key={i} className="flex items-center gap-4">
                        <div className="bg-white p-3 rounded-xl shadow-sm text-brand-primary">{adv.icon}</div>
                        <span className="text-xl font-semibold text-brand-text-primary">{adv.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Product Benefits */}
      <section className="w-full bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold text-brand-text-primary mb-4">Key Benefits</h2>
              <div className="w-24 h-1.5 bg-brand-primary mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {productBenefits.map((benefit, i) => (
                <motion.div key={i} variants={itemVariants} className="bg-white p-8 rounded-[2rem] border border-brand-border-default hover:border-brand-primary/30 shadow-lg hover:shadow-2xl transition-all duration-300 group">
                  <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center mb-6 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-extrabold text-brand-text-primary mb-3">{benefit.title}</h3>
                  <p className="text-brand-text-secondary leading-relaxed">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 5: Optimal Application Timing */}
      <section className="w-full bg-brand-primary/5 py-20 border-y border-brand-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col lg:flex-row items-stretch gap-10">
            <div className="lg:w-7/12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-text-primary mb-6">Optimal Application Timing</h2>
              <p className="text-lg text-brand-text-secondary mb-8">
                Mosquito control is most effective when insects are naturally active and flying. Applying treatment during these periods increases contact between airborne droplets and mosquitoes.
              </p>

              <div className="bg-white rounded-[2rem] shadow-sm border border-white/50 overflow-hidden">
                <div className="bg-slate-50 border-b border-brand-border-default p-4 grid grid-cols-2 font-bold text-brand-text-primary text-lg">
                  <div>Target Pest</div>
                  <div>Best Time</div>
                </div>
                <div className="divide-y divide-brand-border-default">
                  {optimalTiming.map((row, i) => (
                    <div key={i} className="p-4 grid grid-cols-2 items-center hover:bg-slate-50 transition-colors">
                      <div className="font-semibold text-brand-primary">{row.target}</div>
                      <div className="text-brand-text-secondary font-medium">{row.time}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 bg-white rounded-2xl p-6 border border-white/50 shadow-sm">
                <h4 className="text-xl font-bold text-brand-primary mb-4 flex items-center gap-2"><Clock size={24} /> Why Timing Matters</h4>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {["Better contact with flying insects", "Higher treatment efficiency", "Improved mosquito control", "Maximum biological performance"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-brand-text-primary font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-accent"></div> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:w-5/12 w-full relative min-h-[400px] rounded-[2rem] overflow-hidden shadow-xl border border-brand-primary/10">
              <Image src={kOthrine4} alt="Optimal Timing" fill className="object-cover" placeholder="blur" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 6 & 7: Application & Why Choose Us */}
      <section className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            <motion.div variants={itemVariants} className="bg-brand-primary text-white rounded-[3rem] p-10 md:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
              <h2 className="text-3xl font-extrabold mb-6 relative z-10">Professional Application Methods</h2>
              <p className="text-white/80 text-lg mb-8 relative z-10">Our trained technicians use specialized equipment to ensure uniform droplet size, better coverage, and maximum treatment efficiency.</p>
              <div className="flex flex-wrap gap-3 relative z-10">
                {applicationMethods.map((method, i) => (
                  <span key={i} className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full font-semibold border border-white/30">{method}</span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-slate-50 rounded-[3rem] p-10 md:p-12 shadow-sm border border-brand-border-default">
              <h2 className="text-3xl font-extrabold text-brand-text-primary mb-8">Why Choose This Solution?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {whyChooseUs.map((reason, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <ShieldCheck className="text-brand-accent shrink-0 mt-0.5" size={22} />
                    <span className="font-semibold text-brand-text-primary">{reason}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 8: Safety Information */}
      <section className="w-full bg-slate-50 py-20 border-t border-brand-border-default">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="bg-amber-50 rounded-[3rem] p-10 md:p-16 border-2 border-amber-200 shadow-sm relative overflow-hidden">
              <AlertTriangle className="absolute -bottom-10 -right-10 text-amber-500/10" size={300} />
              <div className="relative z-10 max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-extrabold text-amber-900 mb-6 flex items-center gap-4">
                  <ShieldAlert className="text-amber-600" size={40} />
                  Safety & Precautions
                </h2>
                <p className="text-lg text-amber-800 mb-8 font-medium">For best results and maximum safety, please follow these guidelines:</p>

                <ul className="space-y-4">
                  {[
                    "Keep doors and windows closed during treatment if advised.",
                    "Leave the treated area for the recommended duration.",
                    "Follow technician instructions before re-entering.",
                    "Keep children and pets away until treatment is complete.",
                    "Store food and utensils safely during indoor spraying."
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 bg-white/60 p-4 rounded-xl border border-amber-100 shadow-sm">
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-50 shrink-0 border border-amber-200"></div>
                      <span className="text-amber-950 font-bold text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full bg-white py-16 border-t border-brand-border-default">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQ faqData={faqs} />
        </div>
      </section>
    </div>
  );
}
