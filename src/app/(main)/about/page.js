import Image from 'next/image';
import FAQ from '../../../components/FAQ';
import LocationMap from '../../../components/LocationMap';
import CompanyVision from '../../../components/CompanyVision';
import CoreValues from '../../../components/CoreValues';
import about1Image from '../../../assets/about1.webp';
import heroAbout from '../../../assets/heroabout.webp';
export default function AboutPage() {
  return (
    <div className="flex-1 w-full bg-brand-bg-main flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full min-h-[500px] flex items-center justify-center pb-16">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroAbout}
            alt="About Professionalz PMS"
            fill
            className="object-cover object-center"
            priority
            placeholder="blur"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-10 text-center px-4 pt-28">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
            About Us
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
            Dedicated to providing a safe and healthy environment through expert pest control management.
          </p>
        </div>
      </section>

      {/* Intro Section - Default Bg */}
      <section className="w-full py-16">
        <div className="max-w-6xl mx-auto px-8">
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-brand-text-primary">Our Story</h2>
              <p className="text-lg text-brand-text-secondary leading-relaxed">
                <strong className="text-brand-primary">Professionalz PMS</strong> is one of the fastest growing pest control management company in New Delhi that provides pest control services in Delhi, Noida, Gurgaon, Greater Noida, Manesar, Bhiwadi, Indrapuram, Govindpuram, Dwarka, South Delhi, East Delhi, North Delhi, West Delhi, Ghaziabad, Faridabad and other major cities of Northern India.
              </p>
              <p className="text-lg text-brand-text-secondary leading-relaxed">
                We have established our company with a desire to provide a safe and healthy environment to our customers.
              </p>
            </div>
            
            {/* Right: Image */}
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-lg border border-brand-border-default">
              <Image 
                src={about1Image} 
                alt="About Professionalz PMS" 
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                placeholder="blur"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section - Fluid Light Bg */}
      <section className="w-full bg-brand-bg-alt border-y border-brand-border-default overflow-hidden">
        <div className="max-w-6xl mx-auto px-8">
          <CompanyVision />
        </div>
      </section>

      {/* Services Overview Section - Default Bg */}
      <section className="w-full py-20">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="relative overflow-hidden bg-white/50 backdrop-blur-md p-10 rounded-[2.5rem] shadow-xl border border-brand-border-default group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full -mr-20 -mt-20 blur-3xl group-hover:bg-brand-primary/20 transition-colors duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-2 bg-gradient-to-r from-brand-primary to-brand-accent rounded-full mb-6"></div>
                <h3 className="text-3xl font-extrabold text-brand-text-primary mb-6 tracking-tight">Commercial & Residential Pest Control</h3>
                <div className="space-y-4">
                  <p className="text-brand-text-secondary text-lg leading-relaxed">
                    We at <strong className="text-brand-primary">Professionalz PMS</strong> are providing pest control management services to both residential and commercial properties. We are backed by a dedicated team of highly qualified and professionally trained personnel. We ensure for delivering highest level of service and quality products in order to provide healthy and safe environments to your commercial or residential premises.
                  </p>
                  <p className="text-brand-text-secondary text-lg leading-relaxed">
                    One of the biggest significances of our services is that we use eco-friendly products in order to control pests and to protect human health. All our products or pesticides are well-tested on the basis of various parameters and not harmful to human beings.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative overflow-hidden bg-white/50 backdrop-blur-md p-10 rounded-[2.5rem] shadow-xl border border-brand-border-default group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-accent/10 rounded-full -mr-20 -mb-20 blur-3xl group-hover:bg-brand-accent/20 transition-colors duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-2 bg-gradient-to-r from-brand-accent to-brand-primary rounded-full mb-6"></div>
                <h3 className="text-3xl font-extrabold text-brand-text-primary mb-6 tracking-tight">Termite & Cockroach Control</h3>
                <div className="space-y-4">
                  <p className="text-brand-text-secondary text-lg leading-relaxed">
                    We can help you to get rid of all kinds of pests such as termite, wood borer, cockroaches, rodents (rats), mosquitoes, crickets, wasps, spiders, ants, flies, bed bugs, etc. Our pest control and pest control management services are accepted and appreciated by lots of people, thanks to their understanding and having trust with our quality products and services.
                  </p>
                  <p className="text-brand-text-secondary text-lg leading-relaxed">
                    The quality of our service, which is given timely, is appreciated by all our customers. <strong className="text-brand-primary">Professionalz PMS</strong> also takes charge of the yearly maintenance of your place, so that you need not worry about pests for one complete year.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section - Default Bg (the component itself is dark) */}
      <section className="w-full">
        <div className="max-w-6xl mx-auto px-8">
          <CoreValues />
        </div>
      </section>

      {/* FAQ Section - Fluid Light Bg */}
      <section className="w-full bg-brand-bg-alt border-t border-brand-border-default py-20">
        <div className="max-w-6xl mx-auto px-8">
          <FAQ />
        </div>
      </section>

      <LocationMap />
    </div>
  );
}
