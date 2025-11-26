import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { MapPin, Clock } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Residential', 'Commercial', 'Kitchen'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="animate-fade-in-up">
       <div className="bg-meraki-black text-white py-24 text-center">
        <h1 className="font-serif text-4xl md:text-5xl mb-4">Our Portfolio</h1>
        <p className="text-gray-400 max-w-2xl mx-auto px-4">A showcase of precision, innovation, and style.</p>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-12">
        {/* Filter */}
        <div className="flex justify-center gap-4 md:gap-8 mb-12 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-sm uppercase tracking-widest pb-1 border-b-2 transition-all ${filter === cat ? 'border-black text-black' : 'border-transparent text-gray-400 hover:text-black'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-16">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
                {/* Before/After comparison or just main images */}
                <div className="relative h-[400px] overflow-hidden">
                  <span className="absolute top-4 left-4 bg-black text-white text-xs px-3 py-1 uppercase tracking-widest z-10">Before / 3D</span>
                  <img src={project.beforeImage || project.afterImage} alt="Before" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="relative h-[400px] overflow-hidden">
                  <span className="absolute top-4 left-4 bg-white text-black text-xs px-3 py-1 uppercase tracking-widest z-10">After / Actual</span>
                  <img src={project.afterImage} alt="After" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              </div>

              <div className="max-w-4xl mx-auto text-center">
                 <h2 className="font-serif text-3xl mb-2">{project.title}</h2>
                 <div className="flex justify-center gap-6 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4"/> {project.location}</span>
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4"/> {project.duration}</span>
                 </div>
                 <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                 <div className="flex flex-wrap justify-center gap-2">
                    {project.materials.map((m, i) => (
                      <span key={i} className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">{m}</span>
                    ))}
                 </div>
              </div>
              <div className="w-full h-px bg-gray-200 mt-16"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;