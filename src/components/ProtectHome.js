import Image from 'next/image';
import insect1 from '@/assets/insect/protection-item-image-1.png';
import insect2 from '@/assets/insect/protection-item-image-2.png';
import insect3 from '@/assets/insect/protection-item-image-3.png';
import insect4 from '@/assets/insect/protection-item-image-4.png';
import insect5 from '@/assets/insect/protection-item-image-5.png';

export default function ProtectHome() {
  const pests = [
    { name: "Cockroaches", image: insect1 },
    { name: "Mosquitoes", image: insect2 },
    { name: "Bed Bugs", image: insect3 },
    { name: "Spiders", image: insect4 },
    { name: "Termites", image: insect5 },
  ];

  return (
    <section className="w-full bg-brand-primary/5 py-8 md:py-16 px-4 md:px-8">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 md:px-5 py-1.5 md:py-2 bg-white shadow-sm border border-brand-border-default rounded-full mb-6 md:mb-8">
          <div className="w-2 h-2 rounded-full bg-brand-primary"></div>
          <span className="text-sm md:text-base font-medium text-brand-text-primary">Protected / Safety</span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-brand-primary mb-6 md:mb-12 max-w-3xl tracking-tight leading-tight">
          Protecting your home with expert pest management solution
        </h2>

        {/* Insects Container */}
        <div className="w-[calc(100%+2rem)] -mx-4 md:mx-0 relative md:w-full rounded-none md:rounded-[2.5rem] shadow-xl md:shadow-2xl shadow-brand-primary/10 bg-white py-6 md:p-8 lg:p-10 border-y md:border border-brand-border-default/50 overflow-hidden">
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee {
              animation: marquee 20s linear infinite;
            }
          `}</style>

          {/* Desktop View (One Line) */}
          <div className="hidden md:flex justify-between items-center gap-4 lg:gap-8 w-full">
            {pests.map((pest, index) => (
              <div key={index} className="flex flex-col items-center group flex-1 cursor-pointer">
                <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 flex items-center justify-center mb-4 relative transition-all duration-500 group-hover:-translate-y-4 group-hover:drop-shadow-[0_15px_25px_rgba(34,197,94,0.3)]">
                  <Image
                    src={pest.image}
                    alt={pest.name}
                    fill
                    className="object-contain transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6"
                  />
                </div>
                <h4 className="text-brand-text-primary font-bold text-base lg:text-lg group-hover:text-brand-primary transition-colors duration-300 text-center">
                  {pest.name}
                </h4>
                <div className="w-8 h-1.5 bg-brand-accent mt-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-x-0 group-hover:scale-x-100"></div>
              </div>
            ))}
          </div>

          {/* Mobile View (Continuous Sliding) */}
          <div className="flex md:hidden w-max animate-marquee mt-2">
            {[...pests, ...pests].map((pest, index) => (
              <div key={index} className="flex flex-col items-center group w-[100px] sm:w-[120px] shrink-0 cursor-pointer mr-6 sm:mr-10">
                <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-3 relative transition-all duration-500">
                  <Image
                    src={pest.image}
                    alt={pest.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h4 className="text-brand-text-primary font-bold text-sm sm:text-base text-center">
                  {pest.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
