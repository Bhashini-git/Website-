import React, { useState, useRef, useEffect } from 'react';
import { getDesignAdvice } from '../services/geminiService';
import { Sparkles, X, MessageSquare, Send } from 'lucide-react';
import Button from './Button';

const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [response]);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    const result = await getDesignAdvice(query);
    setResponse(result);
    setIsLoading(false);
    setQuery('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-80 md:w-96 bg-white shadow-2xl border border-gray-100 rounded-none overflow-hidden animate-fade-in-up">
          <div className="bg-meraki-black text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-yellow-500" />
              <h3 className="font-serif font-medium tracking-wide text-sm">Meraki AI Consultant</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-300">
              <X className="w-4 h-4" />
            </button>
          </div>
          
          <div className="p-4 h-64 overflow-y-auto bg-gray-50 text-sm">
            {!response && !isLoading && (
              <p className="text-gray-500 italic">
                "Ask me about color trends, kitchen layouts, or material choices for 2025..."
              </p>
            )}
            
            {response && (
              <div className="mb-4">
                 <div className="bg-white p-3 shadow-sm border border-gray-100">
                   <p className="leading-relaxed whitespace-pre-wrap">{response}</p>
                 </div>
              </div>
            )}

            {isLoading && (
              <div className="flex items-center gap-2 text-gray-400">
                <div className="w-2 h-2 bg-meraki-black rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                <div className="w-2 h-2 bg-meraki-black rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-meraki-black rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleAsk} className="p-3 border-t bg-white flex gap-2">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask for design advice..."
              className="flex-1 text-sm border-none focus:ring-0 px-2 py-1 outline-none"
            />
            <button 
              type="submit" 
              disabled={isLoading || !query.trim()}
              className="p-2 bg-meraki-black text-white disabled:opacity-50 hover:bg-gray-800 transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-meraki-black text-white rounded-full shadow-lg hover:bg-gray-800 transition-all flex items-center justify-center group"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Sparkles className="w-6 h-6 group-hover:scale-110 transition-transform" />}
      </button>
    </div>
  );
};

export default AiAssistant;