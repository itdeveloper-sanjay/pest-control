"use client";
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

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

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section className="py-16 px-4 md:px-8 max-w-5xl mx-auto w-full">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold text-brand-text-primary mb-4">Frequently Asked Questions</h2>
        <p className="text-brand-text-secondary text-lg">Have questions? We're here to help.</p>
      </div>
      
      <div className="flex flex-col gap-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              className={`border rounded-xl transition-all duration-300 overflow-hidden ${
                isOpen ? 'border-brand-primary bg-brand-bg-alt shadow-sm' : 'border-brand-border-default bg-white hover:border-brand-border-hover'
              }`}
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <span className={`font-semibold text-lg pr-4 ${isOpen ? 'text-brand-primary' : 'text-brand-text-primary'}`}>
                  {faq.question}
                </span>
                <span className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? 'text-brand-primary' : 'text-brand-text-secondary'}`}>
                  {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </span>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  isOpen ? 'max-h-96 opacity-100 mb-4' : 'max-h-0 opacity-0 overflow-hidden'
                }`}
              >
                <div className="px-6 text-brand-text-secondary leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
