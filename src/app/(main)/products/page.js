export default function ProductsPage() {
  return (
    <div className="flex-1 max-w-7xl mx-auto p-8 w-full">
      <h1 className="text-4xl font-bold mb-6 text-brand-text-primary">Our Products</h1>
      <p className="text-lg text-brand-text-secondary mb-8">
        Explore our comprehensive range of advanced crop protection and agritech products.
      </p>
      
      <div className="grid md:grid-cols-3 gap-8">
        {/* Dummy Product Cards */}
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-brand-border-default hover:border-brand-primary transition-colors">
            <div className="w-full h-48 bg-brand-bg-alt rounded-lg mb-4 flex items-center justify-center text-brand-text-muted">
              Product Image
            </div>
            <h3 className="text-xl font-bold mb-2 text-brand-text-primary">Premium Product {i}</h3>
            <p className="text-brand-text-secondary mb-4">High-quality agritech solution for modern farming needs.</p>
            <button className="text-brand-primary font-semibold hover:underline">Learn More &rarr;</button>
          </div>
        ))}
      </div>
    </div>
  );
}
