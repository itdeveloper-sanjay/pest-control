import Image from 'next/image';
import heroAbout from '../../../assets/heroabout.webp';

export default function PrivacyPolicyPage() {
  return (
    <div className="flex-1 w-full bg-brand-bg-main flex flex-col pb-16">
      {/* Hero Section */}
      <section className="relative w-full min-h-[500px] flex items-center justify-center pb-16">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroAbout}
            alt="Privacy Policy"
            fill
            className="object-cover object-center"
            priority
            placeholder="blur"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-10 text-center px-4 pt-28">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
            Privacy Policy
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
            Your privacy is important to us. Learn how we handle and protect your information.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto p-8 w-full bg-white rounded-2xl shadow-sm border border-brand-border-default mt-8">
        <p className="text-lg text-brand-text-secondary mb-8">
          This privacy policy explains how we collect, use, and protect your information as our pest control customer.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4 text-brand-text-primary">1. Information We Collect</h2>
        <p className="text-brand-text-secondary mb-8">
          We collect information to provide better services to our users and ensure our pest management services are effectively delivered to your property.
        </p>
        
        <h2 className="text-2xl font-semibold mt-6 mb-4 text-brand-text-primary">2. How We Use Information</h2>
        <p className="text-brand-text-secondary mb-4">
          We use the information we collect to operate, maintain, and improve our pest control and anti-termite treatment services.
        </p>
      </div>
    </div>
  );
}
