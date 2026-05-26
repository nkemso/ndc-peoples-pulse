import React from 'react';
import { ShieldCheck, Flag, MapPin, Share2, Download, Star } from 'lucide-react';

const MemberCard = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-12 animate-in zoom-in duration-500">
      <div className="text-center">
        <h2 className="text-3xl font-bold">Your Digital Identity</h2>
        <p className="text-gray-500 font-medium">Verified NDC Membership</p>
      </div>

      {/* The Physical-Style Card */}
      <div className="w-full max-w-sm aspect-[1.586/1] relative group">
        <div className="absolute inset-0 bg-gradient-to-br from-ndc-green to-ndc-black rounded-3xl shadow-2xl overflow-hidden transform group-hover:scale-[1.02] transition-transform duration-500">
          {/* Card Patterns */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"></div>
          
          <div className="relative h-full p-8 flex flex-col justify-between text-white">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-ndc-green font-bold text-[10px]">N</div>
                  <span className="font-bold text-xs tracking-widest uppercase">NDC Nigeria</span>
                </div>
                <p className="text-[10px] text-white/60 font-medium tracking-tighter uppercase">Democratic Congress Official Member</p>
              </div>
              <ShieldCheck className="text-ndc-green fill-white/20" size={32} />
            </div>

            <div className="space-y-4">
              <div className="flex items-end gap-6">
                 <div className="w-20 h-20 bg-gray-200 rounded-xl overflow-hidden border-2 border-white/20 shrink-0">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=John" alt="Member" className="w-full h-full object-cover" />
                 </div>
                 <div className="mb-2">
                    <h3 className="text-2xl font-black tracking-tight leading-none mb-1">JOHN DOE</h3>
                    <div className="flex items-center gap-2 text-white/70">
                       <MapPin size={12} />
                       <span className="text-[10px] font-bold uppercase">Lagos • Ward 04</span>
                    </div>
                 </div>
              </div>

              <div className="flex justify-between items-end border-t border-white/10 pt-4">
                 <div className="space-y-1">
                    <p className="text-[8px] text-white/50 font-black uppercase tracking-widest">Membership ID</p>
                    <p className="font-mono text-xs font-bold">NDC-LOS-IKJ-24092</p>
                 </div>
                 <div className="bg-white p-2 rounded-lg">
                    {/* Simulated QR Code */}
                    <div className="w-12 h-12 grid grid-cols-4 gap-0.5">
                       {[...Array(16)].map((_, i) => (
                         <div key={i} className={`w-full h-full ${Math.random() > 0.5 ? 'bg-ndc-black' : 'bg-gray-100'}`}></div>
                       ))}
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Tier Badge */}
        <div className="absolute -top-4 -right-4 bg-yellow-400 text-ndc-black px-4 py-1.5 rounded-full font-black text-[10px] uppercase shadow-xl flex items-center gap-1.5 ring-4 ring-white">
           <Star size={12} fill="currentColor" /> Financial Tier
        </div>
      </div>

      <div className="flex gap-4 w-full max-w-sm">
         <button className="flex-1 flex items-center justify-center gap-2 py-4 bg-white border border-gray-200 rounded-2xl font-bold text-sm hover:bg-gray-50 transition-colors">
            <Download size={18} /> SAVE CARD
         </button>
         <button className="flex-1 flex items-center justify-center gap-2 py-4 bg-white border border-gray-200 rounded-2xl font-bold text-sm hover:bg-gray-50 transition-colors">
            <Share2 size={18} /> SHARE
         </button>
      </div>

      <div className="max-w-sm w-full bg-ndc-green/5 border border-ndc-green/10 rounded-2xl p-6">
         <div className="flex gap-4 items-start">
            <div className="w-10 h-10 bg-ndc-green text-white rounded-full flex items-center justify-center shrink-0">
               <ShieldCheck size={20} />
            </div>
            <div>
               <h4 className="font-bold text-slate-800">Verified Member Status</h4>
               <p className="text-sm text-gray-500 leading-relaxed mt-1">
                 Your identity has been cross-referenced with INEC PVC data and NIN. This card grants you voting rights at ward congresses.
               </p>
            </div>
         </div>
      </div>
    </div>
  );
};

export default MemberCard;
