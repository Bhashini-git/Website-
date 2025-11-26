import React from 'react';
import { BLOG_POSTS } from '../constants';
import { Calendar } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <div className="animate-fade-in-up">
       <div className="bg-meraki-grey py-24 text-center">
        <h1 className="font-serif text-4xl md:text-5xl mb-4">Design Journal</h1>
        <p className="text-gray-500 max-w-2xl mx-auto px-4">Tips, trends, and inspiration for your home.</p>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <div key={post.id} className="group cursor-pointer">
              <div className="overflow-hidden mb-4 h-64">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-400 mb-2 uppercase tracking-wide">
                <Calendar className="w-3 h-3" />
                {post.date}
              </div>
              <h3 className="font-serif text-xl font-bold mb-3 group-hover:text-gray-600 transition-colors">{post.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
              <span className="text-xs font-bold uppercase tracking-widest underline decoration-gray-300">Read Article</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;