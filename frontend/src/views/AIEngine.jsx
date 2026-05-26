import React, { useState } from 'react';
import { 
  Sparkles, 
  Radio, 
  MessageSquare, 
  Send, 
  Copy, 
  RefreshCw,
  Layout,
  Mic2,
  ShieldCheck
} from 'lucide-react';

const AIEngine = () => {
  const [activeTab, setActiveTab] = useState('radio');
  const [isGenerating, setIsGenerating] = useState(false);
  const [content, setContent] = useState({
    radio: "Abeg, make we listen! NDC bring beta light, beta road, and beta life for all of us. Power to the People, no be just talk!",
    push: "🚨 Action Required: Join the Ward 04 Maintenance Advocacy today at 4 PM. Your impact matters!",
    pitch: "Oga/Madam, you see how things hard? NDC get plan to make market better for everybody. No let dem use you, follow who know road."
  });
  const [strategy, setStrategy] = useState("Analyzing ward-level metrics for South-West region...");

  const handleGenerate = async () => {
    setIsGenerating(true);
    try {
      // Logic for real API call (mocked here but path is set)
      // const res = await fetch('/api/ai/generate-content', { ... });
      setTimeout(() => setIsGenerating(false), 1500);
    } catch (e) {
      setIsGenerating(false);
    }
  };

  const tabs = [
    { id: 'radio', label: 'Radio Script', icon: Radio, tone: 'Charismatic / Pidgin', agent: 'Qwen 2.5 (Free)' },
    { id: 'push', label: 'Push Notification', icon: Layout, tone: 'Urgent / Direct', agent: 'Qwen 2.5 (Free)' },
    { id: 'pitch', label: 'Grassroots Pitch', icon: MessageSquare, tone: 'Simplified English', agent: 'Qwen 2.5 (Free)' },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500 pb-10">
      <div className="bg-gradient-to-r from-ndc-green to-ndc-black p-8 rounded-3xl text-white relative overflow-hidden shadow-xl">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4">
            <Sparkles size={12} /> Multi-Agent Intelligence
          </div>
          <h2 className="text-3xl font-black mb-1">Golden Works AI</h2>
          <p className="text-ndc-light/70 text-sm">Powered by Qwen & Llama 3 (Zero Cost Protocols)</p>
        </div>
      </div>

      {/* Strategy Agent Insight */}
      <div className="bg-white border-2 border-ndc-green/20 rounded-3xl p-6 shadow-sm relative">
         <div className="absolute -top-3 left-6 px-3 py-1 bg-ndc-green text-white text-[10px] font-black rounded-full flex items-center gap-2">
            <ShieldCheck size={12} /> STRATEGY AGENT (LLAMA 3)
         </div>
         <p className="text-sm font-medium text-slate-700 italic">"{strategy}"</p>
      </div>

      <div className="bg-white rounded-3xl border shadow-sm overflow-hidden">
        <div className="flex border-b overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex flex-col items-center justify-center gap-1 py-4 px-2 font-bold transition-all border-b-2 min-w-[100px] ${
                activeTab === tab.id 
                  ? 'bg-ndc-green/5 text-ndc-green border-ndc-green' 
                  : 'text-gray-400 border-transparent'
              }`}
            >
              <tab.icon size={18} />
              <span className="text-[10px] uppercase tracking-tighter">{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <div className="space-y-0.5">
              <p className="text-[10px] font-black uppercase text-gray-400">Agent Provider</p>
              <p className="font-bold text-xs text-slate-800">{tabs.find(t => t.id === activeTab).agent}</p>
            </div>
            <button 
              onClick={handleGenerate}
              disabled={isGenerating}
              className="flex items-center gap-2 px-3 py-1.5 bg-ndc-black text-white rounded-lg text-[10px] font-black hover:bg-gray-800 transition-all disabled:opacity-50"
            >
              <RefreshCw size={12} className={isGenerating ? 'animate-spin' : ''} />
              {isGenerating ? 'GEN...' : 'RE-GENERATE'}
            </button>
          </div>

          <div className="relative group">
            <textarea
              value={content[activeTab]}
              onChange={(e) => setContent({ ...content, [activeTab]: e.target.value })}
              className="w-full h-40 p-4 bg-gray-50 border-2 border-transparent focus:border-ndc-green rounded-2xl outline-none text-sm font-medium resize-none transition-all leading-relaxed"
            />
          </div>

          <button className="w-full mt-6 py-4 bg-ndc-green text-white rounded-xl font-black shadow-lg shadow-ndc-green/20 flex items-center justify-center gap-2 text-sm">
             USE CONTENT <Send size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIEngine;
