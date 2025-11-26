import React from 'react';
import { Award, Users, History, Gem } from 'lucide-react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="animate-fade-in-up">
      {/* Header */}
      <div className="bg-meraki-black text-white py-24 text-center">
        <h1 className="font-serif text-4xl md:text-5xl mb-4">Our Story</h1>
        <p className="text-gray-400 max-w-2xl mx-auto px-4">Innovating lifestyles through design excellence since 2015.</p>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="flex flex-col md:flex-row gap-16 items-center mb-24">
           <div className="md:w-1/2 relative">
             <div className="absolute top-4 -left-4 w-full h-full border-2 border-meraki-black z-0"></div>
             <img src="https://picsum.photos/800/1000?random=200" alt="Founder or Team" className="relative z-10 w-full object-cover h-[500px]" />
           </div>
           <div className="md:w-1/2">
             <h2 className="font-serif text-3xl mb-6">Meraki Ample: Where Passion Meets Precision</h2>
             <p className="text-gray-600 mb-4 leading-relaxed">
               "Meraki" is a word used to describe doing something with soul, creativity, or love. "Ample" signifies abundance. Together, they define our philosophy: pouring our soul into creating abundant, beautiful spaces for you.
             </p>
             <p className="text-gray-600 mb-8 leading-relaxed">
               Founded by a team of visionary architects and designers, Meraki Ample has grown from a boutique studio to a full-service interior design firm. We specialize in blending modern aesthetics with functional engineering, utilizing state-of-the-art CNC technology and premium materials.
             </p>
             <div className="grid grid-cols-2 gap-8 mb-8">
               <div>
                 <h4 className="font-serif text-3xl font-bold">250+</h4>
                 <p className="text-xs uppercase tracking-widest text-gray-500">Projects Completed</p>
               </div>
               <div>
                 <h4 className="font-serif text-3xl font-bold">10+</h4>
                 <p className="text-xs uppercase tracking-widest text-gray-500">Years Experience</p>
               </div>
             </div>
           </div>
        </div>

        {/* USP Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-24">
           <div className="text-center p-6 bg-gray-50 hover:bg-white hover:shadow-lg transition-all">
              <Award className="w-10 h-10 mx-auto mb-4 text-meraki-black" />
              <h3 className="font-serif font-bold mb-2">Certified Quality</h3>
              <p className="text-sm text-gray-500">ISO 9001 certified processes and premium material sourcing.</p>
           </div>
           <div className="text-center p-6 bg-gray-50 hover:bg-white hover:shadow-lg transition-all">
              <Users className="w-10 h-10 mx-auto mb-4 text-meraki-black" />
              <h3 className="font-serif font-bold mb-2">Expert Team</h3>
              <p className="text-sm text-gray-500">Dedicated project managers, designers, and craftsmen.</p>
           </div>
           <div className="text-center p-6 bg-gray-50 hover:bg-white hover:shadow-lg transition-all">
              <History className="w-10 h-10 mx-auto mb-4 text-meraki-black" />
              <h3 className="font-serif font-bold mb-2">On-Time Delivery</h3>
              <p className="text-sm text-gray-500">We value your time. Guaranteed handover dates.</p>
           </div>
           <div className="text-center p-6 bg-gray-50 hover:bg-white hover:shadow-lg transition-all">
              <Gem className="w-10 h-10 mx-auto mb-4 text-meraki-black" />
              <h3 className="font-serif font-bold mb-2">Lifetime Support</h3>
              <p className="text-sm text-gray-500">We stand by our work with post-handover services.</p>
           </div>
        </div>

        {/* CTA */}
        <div className="bg-meraki-black text-white p-12 text-center rounded-sm">
          <h2 className="font-serif text-2xl mb-4">Legal & Certifications</h2>
          <p className="text-gray-400 mb-6 text-sm">
            Registered MSME Unit | GST Compliant | Green Building Certified Materials
          </p>
          <Link to="/contact">
             <Button variant="white">Contact Us</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;