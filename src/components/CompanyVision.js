import { Target, Lightbulb, Users, TrendingUp } from 'lucide-react';

export default function CompanyVision() {
  return (
    <section className="my-20 relative">
      {/* Decorative skewed background */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/5 via-brand-bg-alt to-brand-primary/5 rounded-[3rem] -z-10 transform -skew-y-2 border border-brand-border-default/50 shadow-sm"></div>

      <div className="max-w-4xl mx-auto px-8 py-16 text-center">
        <div className="inline-flex items-center justify-center p-4 bg-white shadow-md rounded-full mb-8 border border-brand-primary/20">
          <Target size={40} className="text-brand-primary" />
        </div>

        <h2 className="text-4xl font-extrabold text-brand-text-primary mb-8 tracking-tight">
          Company's <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">Vision</span>
        </h2>

        <div className="space-y-6 text-lg text-brand-text-secondary leading-relaxed">
          <p>
            We believe in the highest quality service. We offer outstanding Information Service Management with the highest Return on Investment for our clients. We focus on using state of the art technology in a way that translates into real business benefits for our clients.
          </p>
          <p>
            Through trust and commitment, we build win-win relationships with our customers and callers. To our employees, <strong className="text-brand-primary font-semibold">Professionalz PMS</strong> creates an honest, creative, enjoyable and rewarding environment.
          </p>
          <p>
            Our vision is to expand our business by achieving the top-notch position in the information industry in India which will be well known in all over India by using new and latest technology and infrastructure.
          </p>
        </div>

        {/* Feature Highlights beneath vision */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16   pt-12">
          <div className="flex flex-col items-center p-4 rounded-2xl hover:bg-white transition-colors">
            <div className="bg-brand-primary/10 p-3 rounded-full mb-4">
              <Lightbulb className="text-brand-primary" size={24} />
            </div>
            <h4 className="font-bold text-brand-text-primary">Latest Technology</h4>
          </div>
          <div className="flex flex-col items-center p-4 rounded-2xl hover:bg-white transition-colors">
            <div className="bg-brand-primary/10 p-3 rounded-full mb-4">
              <Users className="text-brand-primary" size={24} />
            </div>
            <h4 className="font-bold text-brand-text-primary">Win-Win Relationships</h4>
          </div>
          <div className="flex flex-col items-center p-4 rounded-2xl hover:bg-white transition-colors">
            <div className="bg-brand-primary/10 p-3 rounded-full mb-4">
              <TrendingUp className="text-brand-primary" size={24} />
            </div>
            <h4 className="font-bold text-brand-text-primary">Top-Notch Position</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
