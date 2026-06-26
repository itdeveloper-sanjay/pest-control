import Image from 'next/image';
import protectFromImg from '@/assets/protectfrom.webp';

export default function ProtectHome() {
  return (
    <section className="w-full bg-brand-primary/5 py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 bg-white shadow-sm border border-brand-border-default rounded-full mb-8">
          <div className="w-2 h-2 rounded-full bg-brand-primary"></div>
          <span className="text-sm md:text-base font-medium text-brand-text-primary">Protected / Safety</span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-primary mb-16 max-w-3xl tracking-tight leading-tight">
          Protecting your home with expert pest control
        </h2>

        {/* Image */}
        <div className="w-full relative rounded-3xl overflow-hidden shadow-2xl shadow-brand-primary/10 bg-white">
          <Image
            src={protectFromImg}
            alt="Protecting your home from pests"
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
