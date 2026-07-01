import Link from 'next/link';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-[80vh] bg-brand-bg-main px-4 text-center py-20">
      <div className="bg-white p-10 md:p-16 rounded-[2rem] md:rounded-[3rem] shadow-2xl shadow-brand-primary/10 border border-brand-border-default max-w-2xl w-full mx-auto transform transition-all hover:scale-[1.02] duration-500">
        <div className="relative inline-block mb-6">
          <h1 className="text-6xl md:text-7xl font-bold text-brand-primary/10 select-none">404</h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl md:text-6xl font-bold text-brand-primary drop-shadow-sm">Oops!</span>
          </div>
        </div>
        
        <h2 className="text-2xl md:text-3xl font-bold text-brand-text-primary mb-4">Page Not Found</h2>
        
        <p className="text-base md:text-lg text-brand-text-secondary mb-10 leading-relaxed max-w-md mx-auto">
          The page you are looking for doesn't exist, has been removed, or is temporarily unavailable. Let's get you back to safety.
        </p>
        
        <Link 
          href="/" 
          className="inline-flex items-center justify-center gap-3 bg-brand-primary text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-[0_8px_30px_rgba(46,125,50,0.4)] hover:-translate-y-1 hover:bg-brand-primary-hover transition-all duration-300 text-lg"
        >
          <Home size={22} />
          <span>Back to Home</span>
        </Link>
      </div>
    </div>
  );
}
