import Image from 'next/image';
import heroImage from '../../../assets/herocontact.webp';

export default function ProductsPage() {
  return (
    <div className="flex-1 w-full bg-brand-bg-main flex flex-col pb-16">
      {/* Hero Section */}
      <section className="relative w-full min-h-[500px] flex items-center justify-center pb-16">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt="Our Products"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-10 text-center px-4 pt-28">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
            Our Products
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
            Explore our comprehensive range of advanced pest control products and solutions.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Dummy Product Cards */}
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-brand-border-default hover:border-brand-primary transition-colors">
              <div className="w-full h-48 bg-brand-bg-alt rounded-lg mb-4 flex items-center justify-center text-brand-text-muted">
                Product Image
              </div>
              <h3 className="text-xl font-bold mb-2 text-brand-text-primary">Premium Product {i}</h3>
              <p className="text-brand-text-secondary mb-4">High-quality solution for modern pest control needs.</p>
              <button className="text-brand-primary font-semibold hover:underline cursor-pointer">Learn More &rarr;</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
