export default function ServicesPage() {
  return (
    <div className="flex-1 max-w-7xl mx-auto p-8 w-full">
      <h1 className="text-4xl font-bold mb-6 text-brand-text-primary">Our Services</h1>
      <p className="text-lg text-brand-text-secondary mb-8">
        We provide end-to-end services to ensure your agricultural operations run smoothly.
      </p>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Dummy Service Cards */}
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-brand-border-default hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold mb-3 text-brand-primary">Service Offering {i}</h3>
            <p className="text-brand-text-secondary leading-relaxed">
              Our expert team provides comprehensive support and implementation for this service. 
              We ensure maximum yield and protection for your specific farming requirements using data-driven insights.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
