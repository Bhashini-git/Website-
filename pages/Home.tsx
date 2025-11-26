import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Ruler, Clock, Lightbulb } from 'lucide-react';
import Button from '../components/Button';
import { SERVICES, TESTIMONIALS, PROJECTS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/1920/1080?random=100" 
            alt="Luxury Interior" 
            className="w-full h-full object-cover brightness-[0.6]"
          />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-white">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
            Designing Spaces with <br/>
            <span className="italic font-light">Precision & Passion</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl font-light tracking-wide animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            The key of innovation homes. We craft bespoke interiors that blend functionality with timeless aesthetics.
          </p>
          <div className="flex flex-col md:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Link to="/contact">
              <Button variant="white">Get Free Quote</Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">View Portfolio</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Teaser / USP */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <img src="https://picsum.photos/800/1000?random=101" alt="Our Work" className="w-full h-[500px] object-cover shadow-2xl" />
            </div>
            <div className="md:w-1/2">
              <h4 className="text-sm font-bold tracking-[0.2em] text-gray-500 mb-2 uppercase">Why Choose Us</h4>
              <h2 className="font-serif text-4xl mb-6 text-meraki-black">Experience the Art of Living</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                At Meraki Ample, we believe that your space should tell your story. With years of expertise in residential and commercial design, we bring a perfect blend of creativity and engineering.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-meraki-black mt-1" />
                  <div>
                    <h5 className="font-serif font-bold">On-Time Delivery</h5>
                    <p className="text-xs text-gray-500">Strict timeline adherence</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-6 h-6 text-meraki-black mt-1" />
                  <div>
                    <h5 className="font-serif font-bold">3D Visualization</h5>
                    <p className="text-xs text-gray-500">See it before you build it</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Ruler className="w-6 h-6 text-meraki-black mt-1" />
                  <div>
                    <h5 className="font-serif font-bold">Precision CNC</h5>
                    <p className="text-xs text-gray-500">Flawless custom cuts</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-meraki-black mt-1" />
                  <div>
                    <h5 className="font-serif font-bold">Premium Materials</h5>
                    <p className="text-xs text-gray-500">Quality that lasts</p>
                  </div>
                </div>
              </div>
              
              <Link to="/about">
                <span className="inline-flex items-center border-b border-black pb-1 uppercase text-xs tracking-widest hover:text-gray-600 transition-colors cursor-pointer">
                  Read More About Us <ArrowRight className="ml-2 w-3 h-3" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-meraki-grey">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
             <h2 className="font-serif text-3xl md:text-4xl mb-4">Our Expertise</h2>
             <div className="w-20 h-1 bg-meraki-black mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-white group hover:shadow-xl transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-lg font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">{service.description}</p>
                  <Link to="/services" className="text-xs font-bold uppercase tracking-widest underline decoration-gray-300 underline-offset-4 group-hover:decoration-black transition-all">Explore</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-20 bg-meraki-black text-white">
        <div className="container mx-auto px-4 md:px-8">
           <div className="flex flex-col md:flex-row justify-between items-end mb-12">
              <div>
                <h4 className="text-xs font-bold tracking-[0.2em] text-gray-400 mb-2 uppercase">Recent Masterpiece</h4>
                <h2 className="font-serif text-3xl md:text-4xl">The Azure Residence</h2>
              </div>
              <Link to="/portfolio">
                <Button variant="white" className="mt-6 md:mt-0">View All Projects</Button>
              </Link>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-gray-800">
              <div className="relative h-[400px] md:h-[600px] group overflow-hidden">
                 <img src={PROJECTS[0].afterImage} alt="After" className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white text-xl tracking-widest uppercase border-b-2 border-white pb-2">After</span>
                 </div>
              </div>
              <div className="relative h-[400px] md:h-[600px] group overflow-hidden">
                 <img src={PROJECTS[0].beforeImage || "https://picsum.photos/800/600"} alt="Before" className="w-full h-full object-cover grayscale" />
                 <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-white text-xl tracking-widest uppercase border-b-2 border-white pb-2">Before</span>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
          <h2 className="font-serif text-3xl mb-12">Client Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="p-6 bg-meraki-grey">
                <div className="flex justify-center mb-4 text-yellow-500 gap-1">
                   {[...Array(t.rating)].map((_, i) => <span key={i}>★</span>)}
                </div>
                <p className="text-gray-600 italic text-sm mb-6 leading-relaxed">"{t.text}"</p>
                <h5 className="font-serif font-bold text-sm">{t.name}</h5>
                <p className="text-xs text-gray-500 uppercase tracking-wide mt-1">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-100 border-t border-gray-200">
         <div className="container mx-auto px-4 text-center">
            <h2 className="font-serif text-4xl mb-6">Ready to transform your space?</h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">Book a consultation today and let us help you build the home of your dreams.</p>
            <Link to="/contact">
              <Button>Start Your Project</Button>
            </Link>
         </div>
      </section>
    </div>
  );
};

export default Home;