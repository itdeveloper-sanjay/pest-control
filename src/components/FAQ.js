"use client";
import { useState } from 'react';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "What services does Professionalz PMS provide?",
    answer: "We offer comprehensive pest management systems for residential and commercial properties, including anti-termite treatment, cockroach control, rodent control, and general pest control."
  },
  {
    question: "How can I request a quote?",
    answer: "You can request a quote by clicking the 'Request a quote' button in the header, using the floating Call/WhatsApp buttons, or by visiting our Contact page."
  },
  {
    question: "Are your solutions environmentally friendly?",
    answer: "Yes, we prioritize sustainable and eco-friendly practices. We use safe, tested chemicals that are highly effective against pests but harmless to human health and pets."
  },
  {
    question: "Do you offer Annual Maintenance Contracts (AMC)?",
    answer: "Absolutely! We take charge of the yearly maintenance of your place through our AMC plans, ensuring you remain pest-free all year round."
  }
];

export default function FAQ({ faqData }) {
  const [openIndex, setOpenIndex] = useState(null);
  
  const displayFaqs = faqData || faqs;

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section className="py-8 md:py-12 px-4 md:px-8 max-w-4xl mx-auto w-full">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-brand-primary/10 rounded-2xl mb-4 shadow-sm">
          <MessageCircleQuestion size={32} className="text-brand-primary" />
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-brand-text-primary mb-4 tracking-tight">Frequently Asked Questions</h2>
        <p className="text-brand-text-secondary text-lg max-w-2xl mx-auto">Find answers to common questions about our services, safety measures, and pest control methods.</p>
      </div>
      
      <div className="flex flex-col gap-4">
        {displayFaqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              className={`border-2 rounded-2xl transition-all duration-300 overflow-hidden bg-white group ${
                isOpen ? 'border-brand-primary shadow-lg shadow-brand-primary/10' : 'border-brand-border-default hover:border-brand-primary/40 hover:shadow-md'
              }`}
            >
              <button
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <span className={`font-bold text-lg pr-4 transition-colors duration-300 ${isOpen ? 'text-brand-primary' : 'text-brand-text-primary group-hover:text-brand-primary'}`}>
                  {faq.question || faq.q}
                </span>
                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-brand-primary text-white rotate-180' : 'bg-brand-primary/5 text-brand-primary group-hover:bg-brand-primary/10'}`}>
                  <ChevronDown size={20} className="transition-transform duration-300" />
                </div>
              </button>
              
              <AnimatePresence>
                {isOpen && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 pt-2">
                      <div className="pl-4 border-l-4 border-brand-accent/50 text-brand-text-secondary text-[1.05rem] leading-relaxed">
                        {faq.answer || faq.a}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
