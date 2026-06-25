import { ShieldCheck, Leaf, ThumbsUp, Headset } from 'lucide-react';

export default function CoreValues() {
  const values = [
    {
      icon: <ShieldCheck size={32} className="text-white" />,
      title: "Certified Experts",
      description: "Our team consists of highly trained and certified pest management professionals."
    },
    {
      icon: <Leaf size={32} className="text-white" />,
      title: "Eco-Friendly",
      description: "We use safe, environmentally responsible products that protect human health."
    },
    {
      icon: <ThumbsUp size={32} className="text-white" />,
      title: "100% Satisfaction",
      description: "We guarantee the highest quality service and complete customer satisfaction."
    },
    {
      icon: <Headset size={32} className="text-white" />,
      title: "24/7 Support",
      description: "Round-the-clock customer service and yearly maintenance plans."
    }
  ];

  return (
    <section className="my-24 py-20 bg-brand-primary rounded-[3rem] text-center shadow-xl relative overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#ffffff 2px, transparent 2px)", backgroundSize: "30px 30px" }}></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-8">
        <h2 className="text-4xl font-extrabold text-white mb-4">Why Choose Professionalz PMS?</h2>
        <p className="text-white/80 text-lg max-w-2xl mx-auto mb-16">
          We combine industry-leading expertise with a commitment to environmental safety to deliver the best pest control solutions in India.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl hover:bg-white/20 hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center shadow-lg group">
              <div className="bg-white/10 group-hover:bg-white/20 transition-colors p-4 rounded-full mb-6 border border-white/10">
                {val.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{val.title}</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
