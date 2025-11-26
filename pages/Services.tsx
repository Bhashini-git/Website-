import React from 'react';
import { SERVICES } from '../constants';
import { Check } from 'lucide-react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const ServicesPage: React.FC = () => {
  return (
    <div className="animate-fade-in-up">
      <div className="bg-meraki-grey py-24 text-center">
        <h1 className="font-serif text-4xl md:text-5xl mb-4">Our Services</h1>
        <p className="text-gray-500 max-w-2xl mx-auto px-4">Comprehensive interior solutions tailored to your unique needs.</p>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="flex flex-col gap-24">
          {SERVICES.map((service, index) => (
            <div key={service.id} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}>
              <div className="md:w-1/2 h-[400px] w-full group overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="md:w-1/2">
                <div className="text-xs font-bold text-gray-400 mb-2 uppercase tracking-widest">Service {index + 1}</div>
                <h2 className="font-serif text-3xl mb-4">{service.title}</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <h4 className="font-bold text-sm mb-4">What's Included:</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-5 h-5 bg-black text-white flex items-center justify-center rounded-full shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                   <Button>Get a Quote</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 bg-gray-50 p-12 text-center">
            <h3 className="font-serif text-2xl mb-4">Looking for something else?</h3>
            <p className="text-gray-600 mb-6">We also offer 2D Floor Planning, 3D Rendering services, and Renovation consultation.</p>
            <div className="flex justify-center gap-4">
               <div className="w-32 h-32 bg-gray-200 flex items-center justify-center text-xs text-gray-500 uppercase tracking-widest">2D Plans</div>
               <div className="w-32 h-32 bg-gray-200 flex items-center justify-center text-xs text-gray-500 uppercase tracking-widest">3D Renders</div>
               <div className="w-32 h-32 bg-gray-200 flex items-center justify-center text-xs text-gray-500 uppercase tracking-widest">Walkthroughs</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;