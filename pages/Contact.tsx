import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import Button from '../components/Button';
import { COMPANY_PHONE, COMPANY_EMAIL, COMPANY_ADDRESS } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="animate-fade-in-up">
       <div className="bg-meraki-black text-white py-24 text-center">
        <h1 className="font-serif text-4xl md:text-5xl mb-4">Get In Touch</h1>
        <p className="text-gray-400 max-w-2xl mx-auto px-4">Let's build something beautiful together.</p>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Form */}
          <div className="lg:w-1/2">
            <h2 className="font-serif text-2xl mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Name</label>
                  <input type="text" className="w-full border-b border-gray-300 py-2 focus:border-black outline-none transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Phone</label>
                  <input type="tel" className="w-full border-b border-gray-300 py-2 focus:border-black outline-none transition-colors" placeholder="+91" />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email</label>
                <input type="email" className="w-full border-b border-gray-300 py-2 focus:border-black outline-none transition-colors" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Service Interested In</label>
                <select className="w-full border-b border-gray-300 py-2 focus:border-black outline-none transition-colors bg-white">
                  <option>Residential Interior</option>
                  <option>Commercial Interior</option>
                  <option>Modular Kitchen</option>
                  <option>CNC Works</option>
                  <option>Others</option>
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Message</label>
                <textarea rows={4} className="w-full border-b border-gray-300 py-2 focus:border-black outline-none transition-colors" placeholder="Tell us about your project..."></textarea>
              </div>
              <Button type="submit">Submit Request</Button>
            </form>
          </div>

          {/* Info */}
          <div className="lg:w-1/2 bg-meraki-grey p-8 md:p-12">
             <h2 className="font-serif text-2xl mb-8">Contact Information</h2>
             <div className="space-y-8">
               <div className="flex items-start gap-4">
                 <div className="bg-white p-3 rounded-full shadow-sm">
                   <Phone className="w-5 h-5 text-black" />
                 </div>
                 <div>
                   <h5 className="font-bold text-sm uppercase tracking-wide mb-1">Phone</h5>
                   <p className="text-gray-600 font-serif text-lg">{COMPANY_PHONE}</p>
                   <p className="text-gray-400 text-xs mt-1">Mon-Sat 10am - 7pm</p>
                 </div>
               </div>

               <div className="flex items-start gap-4">
                 <div className="bg-white p-3 rounded-full shadow-sm">
                   <Mail className="w-5 h-5 text-black" />
                 </div>
                 <div>
                   <h5 className="font-bold text-sm uppercase tracking-wide mb-1">Email</h5>
                   <p className="text-gray-600 font-serif text-lg">{COMPANY_EMAIL}</p>
                 </div>
               </div>

               <div className="flex items-start gap-4">
                 <div className="bg-white p-3 rounded-full shadow-sm">
                   <MapPin className="w-5 h-5 text-black" />
                 </div>
                 <div>
                   <h5 className="font-bold text-sm uppercase tracking-wide mb-1">Office</h5>
                   <p className="text-gray-600">{COMPANY_ADDRESS}</p>
                   <a href="#" className="text-xs text-black underline mt-2 block">View on Google Maps</a>
                 </div>
               </div>
             </div>

             {/* Pricing Teaser */}
             <div className="mt-12 pt-12 border-t border-gray-300">
               <h2 className="font-serif text-xl mb-4">Pricing Packages</h2>
               <div className="space-y-3">
                 <div className="flex justify-between items-center bg-white p-4 shadow-sm">
                   <span className="font-medium">Basic Interiors</span>
                   <span className="text-sm text-gray-500">Starts @ ₹800/sqft</span>
                 </div>
                 <div className="flex justify-between items-center bg-white p-4 shadow-sm border border-black">
                   <span className="font-medium">Premium Interiors</span>
                   <span className="text-sm text-gray-500">Starts @ ₹1400/sqft</span>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;