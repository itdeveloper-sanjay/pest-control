"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import heroPrivacy from '../../../assets/heroprivacy.webp';
import heroMobile from '../../../assets/homeheromobile.webp';

export default function PrivacyPolicyPage() {
  return (
    <div className="flex-1 w-full bg-brand-bg-main flex flex-col pb-16">
      {/* Hero Section */}
      <section className="relative w-full min-h-[500px] flex items-center justify-center pb-16">
        <div className="absolute inset-0 z-0">
          <div className="hidden md:block w-full h-full relative">
            <Image
              src={heroPrivacy}
              alt="Privacy Policy Desktop"
              fill
              className="object-cover object-top"
              priority
              placeholder="blur"
            />
          </div>
          <div className="block md:hidden w-full h-full relative">
            <Image
              src={heroMobile}
              alt="Privacy Policy Mobile"
              fill
              className="object-cover object-top"
              priority
              placeholder="blur"
            />
          </div>
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-10 text-center px-4 pt-28">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
            Privacy Policy
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
            Your privacy is important to us. Learn how we handle and protect your information.
          </motion.p>
        </div>
      </section>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto p-8 md:p-12 w-full bg-white rounded-2xl shadow-sm border border-brand-border-default mt-8 animate-fade-in-up delay-300">
        <p className="text-lg text-brand-text-secondary mb-8 leading-relaxed">
          At <strong className="text-brand-primary">Professionalz PMS</strong>, we are committed to protecting the privacy and security of our clients. This Privacy Policy outlines how we collect, use, disclose, and safeguard your personal information when you use our website or engage our pest control and management services.
        </p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-brand-text-primary">1. Information We Collect</h2>
        <div className="text-brand-text-secondary mb-8 space-y-4 text-lg leading-relaxed">
          <p>We may collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our services, or when you contact us. The personal information that we collect depends on the context of your interactions with us and the services you request.</p>
          <ul className="list-disc pl-6 space-y-2 marker:text-brand-accent">
            <li><strong>Personal Contact Details:</strong> Name, address, phone number, and email address.</li>
            <li><strong>Service Details:</strong> Information regarding your property, pest issues, and service history.</li>
            <li><strong>Payment Information:</strong> Billing address and payment method details (processed securely).</li>
          </ul>
        </div>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-brand-text-primary">2. How We Use Your Information</h2>
        <div className="text-brand-text-secondary mb-8 space-y-4 text-lg leading-relaxed">
          <p>We use the information we collect or receive for the following business purposes:</p>
          <ul className="list-disc pl-6 space-y-2 marker:text-brand-accent">
            <li>To facilitate, schedule, and perform pest control and anti-termite treatments at your premises.</li>
            <li>To send you administrative information, service updates, and maintenance reminders.</li>
            <li>To respond to your inquiries and offer customer support.</li>
            <li>To improve our services and ensure the highest safety standards.</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-brand-text-primary">3. Sharing Your Information</h2>
        <p className="text-brand-text-secondary mb-8 text-lg leading-relaxed">
          We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners and trusted affiliates for the purposes outlined above. We may also disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, or a judicial proceeding.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-brand-text-primary">4. Data Security & Protection</h2>
        <p className="text-brand-text-secondary mb-8 text-lg leading-relaxed">
          We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information, transaction information, and data stored on our site.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-brand-text-primary">5. Changes to This Privacy Policy</h2>
        <p className="text-brand-text-secondary mb-8 text-lg leading-relaxed">
          <strong className="text-brand-primary">Professionalz PMS</strong> has the discretion to update this privacy policy at any time. When we do, we will revise the updated date at the bottom of this page. We encourage users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect.
        </p>
        
        <div className="mt-12 pt-6 border-t border-brand-border-default">
          <p className="text-brand-text-secondary font-medium">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </p>
        </div>
      </div>
    </div>
  );
}
