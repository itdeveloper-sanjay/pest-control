"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { servicesData } from '@/config/servicesData';
import { ArrowRight } from 'lucide-react';
import service1 from '@/assets/services/service1.webp';
import sitePreparationImg from '@/assets/services/site-prepration.webp';
import soilTreatmentImg from '@/assets/services/soil-tretement.webp';
import service4 from '@/assets/services/service4.webp';
import service5 from '@/assets/services/service5.webp';
import heroServiceImg from '@/assets/heroservice.webp';
import heroServiceMobile from '@/assets/heroservicemobile.webp';

export default function ServicesPage() {
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
    <div className="flex flex-col w-full bg-slate-50 min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative w-full min-h-[500px] flex items-center justify-center pb-16 mb-8">
        <div className="absolute inset-0 z-0">
          <div className="hidden md:block w-full h-full relative">
            <Image
              src={heroServiceImg}
              alt="Anti Termite Services Desktop"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
          <div className="block md:hidden w-full h-full relative">
            <Image
              src={heroServiceMobile}
              alt="Anti Termite Services Mobile"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="absolute z-10 text-center px-4 w-full max-w-4xl mx-auto flex flex-col items-center pt-32 md:pt-16">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="inline-block px-4 py-1.5 bg-brand-primary/20 text-brand-primary-light backdrop-blur-md font-semibold rounded-full text-sm tracking-wide mb-4 border border-brand-primary/30 text-white shadow-sm">
            Premium Services
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight capitalize drop-shadow">
            Our Professional Services
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-base md:text-xl text-gray-200 max-w-2xl mx-auto drop-shadow font-medium leading-relaxed">
            Discover our wide range of expert pest management solutions, tailored to protect your property using the highest safety standards and modern equipment.
          </motion.p>
        </div>
      </section>

      <div className="w-full">
        {/* Service 1 - Image Right, Text Left */}
        <section className="w-full bg-white py-20 lg:py-24 overflow-hidden">
          <motion.div 
            className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-12 group"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants} className="flex-1 space-y-6">
              <div className="inline-block px-4 py-1.5 bg-brand-primary/10 text-brand-primary font-semibold rounded-full text-sm tracking-wide">
                Pest Control
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Anti Termite Treatment
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p className="font-semibold text-gray-800">
                  Health Hazards and Safety Measures
                </p>
                <p>
                  All chemicals used for anti-termite treatment are poisonous and hazardous to health. We strictly follow the highest safety protocols:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Keep the containers closed and secured.</li>
                  <li>Wear protective clothing while handling the chemicals.</li>
                  <li>Avoid flames in the vicinity during mixing.</li>
                  <li>Never allow treatment chemicals to contaminate sources of drinking water.</li>
                  <li>Follow the instructions provided by the manufacturer in the MSDS (Material Safety Data Sheet).</li>
                  <li>In case of poisoning, take remedial measures according to the MSDS provided by the manufacturer and as per IS 4015.</li>
                </ul>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="flex-1 w-full relative min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] rounded-2xl overflow-hidden shadow-2xl shadow-brand-primary/10 transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-3xl">
              <Image
                src={service1}
                alt="Anti Termite Treatment"
                fill
                className="object-cover transition-transform duration-700"
              />
            </motion.div>
          </motion.div>
        </section>

        {/* Service 2 - Image Left, Text Right */}
        <section className="w-full bg-brand-primary/5 py-20 lg:py-24 overflow-hidden">
          <motion.div 
            className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 group"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants} className="flex-1 w-full relative min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] rounded-2xl overflow-hidden shadow-2xl shadow-brand-primary/10 transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-3xl">
              <Image
                src={sitePreparationImg}
                alt="Site Preparation"
                fill
                className="object-cover transition-transform duration-700"
              />
            </motion.div>
            <motion.div variants={itemVariants} className="flex-1 space-y-6">
              <div className="inline-block px-4 py-1.5 bg-brand-primary/10 text-brand-primary font-semibold rounded-full text-sm tracking-wide">
                Site Readiness
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Site Preparation
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Remove all organic matter, construction debris, rubbish, etc.</li>
                  <li>Water-logged foundations shall be treated after drying when the soil is absorbent.</li>
                  <li>For low penetration and sloping sites, the surface should be scarified to a depth of 75 mm.</li>
                  <li>Complete all cutting, excavation, leveling, and grading before starting the treatment.</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Service 3 - Image Right, Text Left */}
        <section className="w-full bg-white py-20 lg:py-24 overflow-hidden">
          <motion.div 
            className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-12 group"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={itemVariants} className="flex-1 space-y-6">
              <div className="inline-block px-4 py-1.5 bg-brand-primary/10 text-brand-primary font-semibold rounded-full text-sm tracking-wide">
                Ground Prep
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Soil Treatment
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  To make the soil treatment effective, the chemical water emulsion is applied in the required dosage over the entire ground area covered by the building.
                </p>
                <p>
                  A watering can or an operated compressed air sprayer can be used to ensure even distribution of the chemical emulsion.
                </p>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="flex-1 w-full relative min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] rounded-2xl overflow-hidden shadow-2xl shadow-brand-primary/10 transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-3xl">
              <Image
                src={soilTreatmentImg}
                alt="Soil Treatment"
                fill
                className="object-cover transition-transform duration-700"
              />
            </motion.div>
          </motion.div>
        </section>

        {/* Service 4 */}
        <section className="w-full bg-brand-primary/5 py-20 lg:py-24 overflow-hidden">
          <motion.div 
            className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12 group"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <motion.div variants={itemVariants} className="flex-1 w-full relative rounded-2xl overflow-hidden shadow-2xl shadow-brand-primary/10 transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-3xl flex items-center justify-center">
                <Image
                  src={service4}
                  alt="Structure Barriers and Chemicals"
                  className="w-full h-auto transition-transform duration-700"
                />
              </motion.div>
              <motion.div variants={itemVariants} className="flex-1 space-y-6">
                <div className="inline-block px-4 py-1.5 bg-brand-primary/10 text-brand-primary font-semibold rounded-full text-sm tracking-wide">
                  Barriers & Materials
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  Structure Barriers & Chemicals
                </h2>
                <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                  <div>
                    <p className="mb-4">
                      The structure barriers may be provided continuously at the plinth level to prevent the entry of termites through walls.
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>The cement concrete layer, 5 to 7.5 cm thick, may be provided projecting 5 to 7.5 cm on both sides.</li>
                      <li>The metal barriers consist of non-corrodible sheets of copper or galvanized iron, 0.8 mm thick, which may be provided on both sides.</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl border border-brand-border-default shadow-sm w-full">
              <h3 className="font-bold text-brand-primary text-2xl mb-4">Chemicals</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 text-lg">
                <li>Termidor 25 EC (ISI certified).</li>
                <li>Chemicals approved by the Indian Pest Control Association shall be used.</li>
                <li>The contractor shall submit purchase vouchers to the EIC for verification.</li>
              </ul>
            </motion.div>
          </motion.div>
        </section>

        {/* Service 5 */}
        <section className="w-full bg-white py-20 lg:py-24 overflow-hidden">
          <motion.div 
            className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12 group"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
              <motion.div variants={itemVariants} className="flex-1 space-y-6">
                <div className="inline-block px-4 py-1.5 bg-brand-primary/10 text-brand-primary font-semibold rounded-full text-sm tracking-wide">
                  Advanced Protection
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  Treatment for RCC Foundations & Basement
                </h2>
                <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                  <div>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Treatment shall start at a depth of 500 mm below the ground level/FML.</li>
                      <li>Apply emulsion on vertical surfaces at 7.50 Litres/Sq.m.</li>
                    </ul>
                    <div className="mt-4 bg-gray-50 p-4 rounded-lg border border-gray-100 text-sm">
                      <span className="font-semibold block mb-2 text-gray-800 text-base">Legend</span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-gray-600">
                        <li><span className="font-medium text-gray-800">A</span> – Min 500 mm below NGL/FML</li>
                        <li><span className="font-medium text-gray-800">B</span> – Plinth Filling</li>
                        <li><span className="font-medium text-gray-800">D</span> – FML to Grade Beam Top</li>
                        <li><span className="font-medium text-gray-800">E</span> – FFL to Plinth Beam Top</li>
                        <li><span className="font-medium text-gray-800">NGL</span> – Natural Ground Level</li>
                        <li><span className="font-medium text-gray-800">FML</span> – Formation Level</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div variants={itemVariants} className="flex-1 w-full relative rounded-2xl overflow-hidden shadow-2xl shadow-brand-primary/10 transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-3xl flex items-center justify-center">
                <Image
                  src={service5}
                  alt="Treatment for RCC Foundations & Basement"
                  className="w-full h-auto transition-transform duration-700"
                />
              </motion.div>
            </div>

            <div className="w-full grid md:grid-cols-3 gap-6">
              <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl border border-brand-border-default shadow-sm">
                <h3 className="font-bold text-brand-primary text-xl mb-4">Top Surface of Plinth Filling</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Consolidated plinth surface shall be treated at 5 Litres/Sq.m before the sub-base is laid.</li>
                  <li>If the consolidated soil does not allow the emulsion to seep through:
                    <ul className="list-[circle] pl-6 mt-2 space-y-1 text-sm">
                      <li>Make holes using a 12 mm diameter rod at 150 mm c/c in both directions.</li>
                      <li>The depth of each hole shall be 50 mm to 75 mm.</li>
                      <li>Pour the chemical emulsion into the holes and allow it to saturate.</li>
                    </ul>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div variants={itemVariants} className="bg-gray-50 p-6 rounded-2xl border border-brand-border-default shadow-sm">
                <h3 className="font-bold text-brand-primary text-xl mb-4">Mode of Application & Rate</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Chemical emulsion should be applied uniformly by sprayers.</li>
                  <li>Specified rates should be applied at each stage of treatment.</li>
                  <li>Pressure pumps and sprayers of adequate capacity shall be used for proper penetration of the chemical.</li>
                </ul>
              </motion.div>

              <motion.div variants={itemVariants} className="bg-white p-6 rounded-2xl border border-brand-border-default shadow-sm">
                <h3 className="font-bold text-brand-primary text-xl mb-4">Treatment for Masonry Foundations</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Foundations shall be completely enveloped with a chemical barrier from the substructure to the plinth surface.</li>
                  <li>Apply emulsion at 5 Litres/Sq.m for normal load-bearing structures.</li>
                  <li>Apply emulsion at 7.50 Litres/Sq.m on vertical surfaces.</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
