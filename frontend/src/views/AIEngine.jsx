import React, { useState } from 'react';
import { 
  Sparkles, 
  Radio, 
  MessageSquare, 
  Send, 
  Copy, 
  RefreshCw,
  Layout,
  Mic2
} from 'lucide-react';

const AIEngine = () => {
  const [activeTab, setActiveTab] = useState('radio');
  const [isGenerating, setIsGenerating] = useState(false);
  const [content, setContent] = useState({
    radio: "Abeg, make we listen! NDC bring beta light, beta road, and beta life for all of us. Power to the People, no be just talk!",
    push: "🚨 Action Required: Join the Ward 04 Maintenance Advocacy today at 4 PM. Your impact matters!",
    pitch: "Oga/Madam, you see how things hard? NDC get plan to make market better for everybody. No let dem use you, follow who know road."
  });

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => setIsGenerating(false), 1500);
  };

  const tabs = [
    { id: 'radio', label: 'Radio Script', icon: Radio, tone: 'Charismatic / Pidgin' },
    { id: 'push', label: 'Push Notification', icon: Layout, tone: 'Urgent / Direct' },
    { id: 'pitch', label: 'Grassroots Pitch', icon: MessageSquare, tone: 'Simplified English' },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="bg-gradient-to-r from-ndc-green to-ndc-black p-10 rounded-3xl text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full -mr-20 -mt-20"></div>
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-widest mb-4">
              <Sparkles size={14} /> Powered by Golden Works AI
            </div>
            <h2 className="text-4xl font-black mb-2 tracking-tight">Content Intelligence</h2>
            <p className="text-ndc-light/70 text-lg">Transforming policy into resonance.</p>
          </div>
          <div className="w-48 h-48 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl flex items-center justify-center">
             <div className="relative">
                <div className="w-24 h-24 bg-ndc-green rounded-full flex items-center justify-center animate-pulse">
                  <Mic2 size={40} />
                </div>
                <div className="absolute -inset-4 border border-white/20 rounded-full animate-ping opacity-20"></div>
             </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl border shadow-sm overflow-hidden">
        <div className="flex border-b">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center gap-3 py-6 font-bold transition-all border-b-2 ${
                activeTab === tab.id 
                  ? 'bg-ndc-green/5 text-ndc-green border-ndc-green' 
                  : 'text-gray-400 border-transparent hover:text-gray-600'
              }`}
            >
              <tab.icon size={20} />
              <span className="hidden md:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <div className="space-y-1">
              <p className="text-xs font-black uppercase text-gray-400">Current Tone</p>
              <p className="font-bold text-slate-800">{tabs.find(t => t.id === activeTab).tone}</p>
            </div>
            <button 
              onClick={handleGenerate}
              disabled={isGenerating}
              className="flex items-center gap-2 px-4 py-2 bg-ndc-black text-white rounded-xl text-xs font-black hover:bg-gray-800 transition-all disabled:opacity-50"
            >
              <RefreshCw size={14} className={isGenerating ? 'animate-spin' : ''} />
              {isGenerating ? 'RE-GENERATING...' : 'RE-GENERATE'}
            </button>
          </div>

          <div className="relative group">
            <textarea
              value={content[activeTab]}
              onChange={(e) => setContent({ ...content, [activeTab]: e.target.value })}
              className="w-full h-48 p-6 bg-gray-50 border-2 border-transparent focus:border-ndc-green rounded-2xl outline-none text-xl font-medium resize-none transition-all leading-relaxed"
            />
            <button className="absolute bottom-4 right-4 p-3 bg-white border shadow-sm rounded-xl text-gray-400 hover:text-ndc-green transition-colors opacity-0 group-hover:opacity-100">
              <Copy size={18} />
            </button>
          </div>

          <div className="mt-8 pt-8 border-t flex flex-col md:flex-row gap-4">
             <div className="flex-1">
                <p className="text-xs font-black text-gray-400 uppercase mb-4">Context Policy</p>
                <div className="p-4 bg-ndc-green/5 rounded-xl border border-ndc-green/10 flex items-center gap-4">
                  <div className="w-10 h-10 bg-ndc-green text-white rounded-lg flex items-center justify-center font-bold">P1</div>
                  <div>
                    <p className="font-bold text-sm">Decentralized Power Infrastructure</p>
                    <p className="text-xs text-gray-500 italic">Bill #092 - Rural Electrification</p>
                  </div>
                </div>
             </div>
             <div className="md:w-48 flex flex-col justify-end">
                <button className="w-full py-4 bg-ndc-green text-white rounded-xl font-black shadow-lg shadow-ndc-green/20 flex items-center justify-center gap-2 hover:translate-y-[-2px] transition-transform">
                  USE CONTENT <Send size={18} />
                </button>
             </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-3xl border border-dashed border-gray-300 flex items-center gap-4 hover:border-ndc-green transition-colors cursor-pointer group">
          <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-ndc-green/10 group-hover:text-ndc-green transition-colors">
            <Sparkles size={24} />
          </div>
          <div>
             <h4 className="font-bold">A/B Content Testing</h4>
             <p className="text-xs text-gray-500">Test tone resonance across regions</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-dashed border-gray-300 flex items-center gap-4 hover:border-ndc-green transition-colors cursor-pointer group">
          <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-ndc-green/10 group-hover:text-ndc-green transition-colors">
             <Radio size={24} />
          </div>
          <div>
             <h4 className="font-bold">Audio Broadcast Gen</h4>
             <p className="text-xs text-gray-500">Generate AI Voice scripts for radio</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIEngine;
