import Reviews from '../../components/Reviews';
import CTA from '../../components/CTA';
import FAQ from '../../components/FAQ';

export default function Home() {
  return (
    <div className="flex-1 w-full">
      <section className="bg-gradient-primary text-white py-20 px-8 text-center">
        <h1 className="text-5xl font-extrabold mb-6">Advanced Crop Protection Solutions</h1>
        <p className="text-xl max-w-2xl mx-auto mb-8 text-brand-bg-main">
          Discover a world of sustainable agriculture. We build premium pesticide and crop protection tools that empower your farm to grow and succeed.
        </p>
        <button className="bg-brand-accent text-brand-text-primary font-bold py-3 px-8 rounded-full shadow-lg hover:opacity-90 transition-opacity">
          Get Started Today
        </button>
      </section>

      <section className="py-16 px-8 max-w-7xl mx-auto bg-brand-bg-main">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-brand-bg-card p-6 rounded-2xl shadow-sm border border-brand-border-default hover:border-brand-border-hover transition-colors">
            <h3 className="text-xl font-bold mb-3 text-brand-text-primary">Yield Optimization</h3>
            <p className="text-brand-text-secondary">Explore the amazing capabilities of our advanced pesticide solutions that maximize your harvest yield securely.</p>
          </div>
          <div className="bg-brand-bg-card p-6 rounded-2xl shadow-sm border border-brand-border-default hover:border-brand-border-hover transition-colors">
            <h3 className="text-xl font-bold mb-3 text-brand-text-primary">Sustainable Farming</h3>
            <p className="text-brand-text-secondary">Protect your crops and manage your agricultural resources more effectively and sustainably than ever before.</p>
          </div>
          <div className="bg-brand-bg-card p-6 rounded-2xl shadow-sm border border-brand-border-default hover:border-brand-border-hover transition-colors">
            <h3 className="text-xl font-bold mb-3 text-brand-text-primary">Data-Driven Insights</h3>
            <p className="text-brand-text-secondary">Gain insights with our powerful analytics and crop reporting tools designed for modern, large-scale agriculture.</p>
          </div>
        </div>
      </section>
      
      <FAQ />
      <Reviews />
      <CTA />
    </div>
  );
}
