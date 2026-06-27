'use client';
import { Star } from 'lucide-react';
import { useEffect, useRef } from 'react';

const reviews = [
  {
    id: 1,
    quote: "We had a severe termite problem in our new house. Professionalz PMS completely eradicated them and provided a 5-year warranty. Highly recommended!",
    name: "Rajesh Kumar",
    role: "Homeowner, Kharar",
    initials: "RK"
  },
  {
    id: 2,
    quote: "Their team was extremely professional. They used eco-friendly chemicals which was very important for us since we have pets at home.",
    name: "Priya Sharma",
    role: "Resident, Mohali",
    initials: "PS"
  },
  {
    id: 3,
    quote: "We've signed an AMC for our office building. Since then, we haven't seen a single cockroach or rodent. Best pest control service in Mohali/Chandigarh.",
    name: "Amit Desai",
    role: "Facility Manager, Chandigarh",
    initials: "AD"
  }
];

const allReviews = [...reviews, ...reviews];

export default function Reviews() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        let { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        
        // On mobile, gap is 24px (gap-6). 
        // Total scrollWidth = 6 * itemWidth + 5 * gap.
        // The exact distance to jump half-way is 3 * itemWidth + 3 * gap.
        // Mathematically this is (scrollWidth + 24) / 2.
        const jumpDistance = (scrollWidth + 24) / 2;

        // If we reached the second half of the slider (the duplicated items)
        if (scrollLeft >= jumpDistance - 10) { // -10 for rounding forgiveness
          // Silently jump backward by exactly one loop distance
          scrollRef.current.scrollTo({ left: scrollLeft - jumpDistance, behavior: 'auto' });
          scrollLeft = scrollLeft - jumpDistance;
        }

        // Wait a frame for the silent jump to apply, then smooth scroll forward
        requestAnimationFrame(() => {
          if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: clientWidth * 0.85, behavior: 'smooth' });
          }
        });
      }
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 w-full bg-brand-primary/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-brand-bg-alt mb-6">
          <div className="w-1.5 h-1.5 rounded-full bg-brand-accent mr-2"></div>
          <span className="text-xs font-bold tracking-wider text-brand-primary uppercase">Customer Stories</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-brand-text-primary mb-6 tracking-tight">
          Trusted by families and businesses across Mohali/Chandigarh
        </h2>
        <p className="text-lg text-brand-text-secondary max-w-2xl mx-auto">
          Real results from the customers who rely on Professionalz PMS for a pest-free environment.
        </p>
      </div>

      <div 
        ref={scrollRef}
        className="flex md:grid md:grid-cols-3 gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
      >
        {allReviews.map((review, index) => (
          <div 
            key={index} 
            className={`w-[85vw] sm:w-[350px] md:w-auto shrink-0 snap-center bg-brand-bg-card p-8 rounded-[32px] shadow-sm hover:shadow-md transition-shadow border border-brand-border-default/50 flex flex-col h-auto md:h-full ${index >= 3 ? 'md:hidden' : ''}`}
          >
            <div className="flex space-x-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-brand-accent text-brand-accent" />
              ))}
            </div>
            
            <p className="text-brand-text-secondary text-lg leading-relaxed flex-grow mb-8">
              "{review.quote}"
            </p>
            
            <div className="pt-6 border-t border-brand-border-default/60 flex items-center mt-auto">
              <div className="w-12 h-12 rounded-full bg-brand-bg-alt text-brand-primary flex items-center justify-center font-bold text-sm mr-4 shrink-0">
                {review.initials}
              </div>
              <div>
                <h4 className="text-brand-text-primary font-bold">{review.name}</h4>
                <p className="text-brand-text-secondary text-sm">{review.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
