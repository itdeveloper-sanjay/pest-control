import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    quote: "We switched our entire corn program to Aurora Hybrid and saw our best harvest in fifteen years, even through a dry July.",
    name: "Marcus Bell",
    role: "Grain farmer, Iowa",
    initials: "MB"
  },
  {
    id: 2,
    quote: "The agronomy team genuinely understands our soil. Their recommendations paid for themselves in the first season.",
    name: "Priya Nair",
    role: "Farm manager, Punjab",
    initials: "PN"
  },
  {
    id: 3,
    quote: "Goldspike wheat gave us the protein content our mill demands, with the winter hardiness our climate requires.",
    name: "Tomas Kovac",
    role: "Cooperative lead, Slovakia",
    initials: "TK"
  }
];

export default function Reviews() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-brand-bg-main">
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-brand-bg-alt mb-6">
          <div className="w-1.5 h-1.5 rounded-full bg-brand-accent mr-2"></div>
          <span className="text-xs font-bold tracking-wider text-brand-primary uppercase">Grower Stories</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-brand-text-primary mb-6 tracking-tight">
          Trusted on farms around the world
        </h2>
        <p className="text-lg text-brand-text-secondary max-w-2xl mx-auto">
          Real results from the growers who plant ZPSM season after season.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((review) => (
          <div 
            key={review.id} 
            className="bg-brand-bg-card p-8 rounded-[32px] shadow-sm hover:shadow-md transition-shadow border border-brand-border-default/50 flex flex-col h-full"
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
    </section>
  );
}
