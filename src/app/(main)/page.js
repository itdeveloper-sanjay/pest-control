import Image from 'next/image';
import homeHeroImg from '@/assets/homehero.webp';
import Reviews from '../../components/Reviews';
import CTA from '../../components/CTA';
import FAQ from '../../components/FAQ';
import ProtectHome from '../../components/ProtectHome';

export default function Home() {
  return (
    <div className="flex-1 w-full">
      <section className="relative w-full min-h-[600px] flex flex-col justify-center items-center text-center px-4 md:px-8 pb-16">
        <div className="absolute inset-0 z-0">
          <Image 
            src={homeHeroImg} 
            alt="Home Hero" 
            fill 
            className="object-cover object-center"
            priority
          />
          {/* Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 text-white max-w-4xl mx-auto flex flex-col items-center pt-28">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight drop-shadow-lg">
            Complete Pest Control Solutions
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-10 text-gray-200 drop-shadow font-medium">
            Protect your home and business with our expert pest management services. We provide safe, eco-friendly, and effective treatments across Delhi NCR.
          </p>
          <button className="bg-brand-accent text-brand-text-primary font-bold py-4 px-10 rounded-full shadow-xl hover:-translate-y-1 hover:shadow-2xl hover:opacity-90 transition-all duration-300 text-lg cursor-pointer">
            Get Started Today
          </button>
        </div>
      </section>

      <section className="py-16 px-8 max-w-7xl mx-auto bg-brand-bg-main">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-brand-bg-card p-6 rounded-2xl shadow-sm border border-brand-border-default hover:border-brand-border-hover transition-colors">
            <h3 className="text-xl font-bold mb-3 text-brand-text-primary">Total Eradication</h3>
            <p className="text-brand-text-secondary">Explore our advanced pest control solutions that completely eliminate termites, cockroaches, and other pests from your property.</p>
          </div>
          <div className="bg-brand-bg-card p-6 rounded-2xl shadow-sm border border-brand-border-default hover:border-brand-border-hover transition-colors">
            <h3 className="text-xl font-bold mb-3 text-brand-text-primary">Eco-Friendly Treatments</h3>
            <p className="text-brand-text-secondary">We use safe, eco-friendly products to manage pests, ensuring the health and safety of your family and pets.</p>
          </div>
          <div className="bg-brand-bg-card p-6 rounded-2xl shadow-sm border border-brand-border-default hover:border-brand-border-hover transition-colors">
            <h3 className="text-xl font-bold mb-3 text-brand-text-primary">Certified Experts</h3>
            <p className="text-brand-text-secondary">Rely on our team of highly qualified and professionally trained personnel for reliable, year-round pest protection.</p>
          </div>
        </div>
      </section>
      
      <ProtectHome />
      
      <FAQ />
      <Reviews />
      <CTA />
    </div>
  );
}
