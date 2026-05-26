import React from 'react';
import { Phone, Hash, WifiOff, Send } from 'lucide-react';

const USSDBridge = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-ndc-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
      <div className="bg-white w-full max-w-sm rounded-[32px] overflow-hidden shadow-2xl animate-in zoom-in duration-300">
        <div className="bg-ndc-green p-8 text-white text-center relative">
          <button onClick={onClose} className="absolute top-4 right-4 hover:bg-white/20 p-1 rounded-full">
            <WifiOff size={20} />
          </button>
          <div className="w-16 h-16 bg-white/20 rounded-2xl mx-auto flex items-center justify-center mb-4">
            <Phone size={32} />
          </div>
          <h3 className="text-2xl font-black italic">USSD BRIDGE</h3>
          <p className="text-white/70 text-sm font-medium">No Data? No Problem.</p>
        </div>

        <div className="p-8 space-y-6">
          <div className="text-center">
            <p className="text-gray-500 text-sm mb-2 uppercase font-black tracking-widest">Dial Code</p>
            <div className="text-4xl font-black text-ndc-black tracking-tighter">*347*NDC#</div>
          </div>

          <div className="space-y-3">
             <div className="p-4 bg-gray-50 rounded-2xl border flex justify-between items-center group hover:border-ndc-green transition-colors cursor-pointer">
                <span className="font-bold text-sm">1. Membership Status</span>
                <Hash size={16} className="text-gray-300 group-hover:text-ndc-green" />
             </div>
             <div className="p-4 bg-gray-50 rounded-2xl border flex justify-between items-center group hover:border-ndc-green transition-colors cursor-pointer">
                <span className="font-bold text-sm">2. Register for Ward Meeting</span>
                <Hash size={16} className="text-gray-300 group-hover:text-ndc-green" />
             </div>
             <div className="p-4 bg-gray-50 rounded-2xl border flex justify-between items-center group hover:border-ndc-green transition-colors cursor-pointer">
                <span className="font-bold text-sm">3. Report Local Issue</span>
                <Hash size={16} className="text-gray-300 group-hover:text-ndc-green" />
             </div>
             <div className="p-4 bg-gray-50 rounded-2xl border flex justify-between items-center group hover:border-ndc-green transition-colors cursor-pointer">
                <span className="font-bold text-sm">4. Donate (Offline)</span>
                <Hash size={16} className="text-gray-300 group-hover:text-ndc-green" />
             </div>
          </div>

          <div className="pt-4">
            <div className="bg-ndc-green/5 p-4 rounded-xl border border-ndc-green/10 text-[10px] text-gray-500 leading-tight">
               <span className="font-bold text-ndc-green">PRO TIP:</span> USSD sessions are zero-rated on MTN, Airtel, and Glo. All data syncs to the blockchain ledger automatically when connection is restored.
            </div>
          </div>

          <button 
            onClick={onClose}
            className="w-full py-4 bg-ndc-black text-white rounded-2xl font-black hover:bg-gray-800 transition-colors"
          >
            EXIT BRIDGE
          </button>
        </div>
      </div>
    </div>
  );
};

export default USSDBridge;
