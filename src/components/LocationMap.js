import { siteData } from '../config/siteData';

export default function LocationMap() {
  return (
    <section className="pt-12 w-full bg-brand-bg-alt border-t border-brand-border-default mt-8">
      <div className="text-center mb-8 px-4">
        <h2 className="text-3xl font-bold text-brand-text-primary mb-3">Our Location</h2>
        <p className="text-brand-text-secondary text-lg">{siteData.contact.address.fullAddress}</p>
      </div>
      <div className="w-full">
        <iframe 
          src={siteData.contact.address.mapUrl} 
          width="100%" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-[400px] md:h-[500px]"
          title="Jaipur Location Map"
        ></iframe>
      </div>
    </section>
  );
}
