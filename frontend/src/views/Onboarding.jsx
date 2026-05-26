import React, { useState } from 'react';
import { ShieldCheck, UserPlus, Flag, Fingerprint, Smartphone } from 'lucide-react';

const Onboarding = ({ onComplete }) => {
  const [step, setStep] = useState('splash'); // splash, selection, verify

  const Splash = () => (
    <div className="min-h-screen bg-ndc-black flex flex-col items-center justify-center text-white p-6 relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 left-0 w-full h-2 bg-ndc-green"></div>
      <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-ndc-green/10 rounded-full blur-3xl"></div>
      
      <div className="z-10 text-center space-y-8 animate-in fade-in zoom-in duration-700">
        <div className="w-24 h-24 bg-ndc-green rounded-2xl mx-auto flex items-center justify-center shadow-2xl shadow-ndc-green/20 rotate-12">
           <Flag size={48} className="-rotate-12" />
        </div>
        
        <div>
          <h1 className="text-5xl font-black tracking-tighter mb-2 italic">NDC: THE PEOPLE'S PULSE</h1>
          <p className="text-xl text-gray-400 font-medium tracking-widest uppercase">Power to the People</p>
        </div>

        <button 
          onClick={() => setStep('selection')}
          className="mt-8 px-10 py-4 bg-ndc-green hover:bg-ndc-green/90 text-white rounded-full font-bold text-lg transition-transform hover:scale-105 active:scale-95"
        >
          Enter Platform
        </button>
      </div>

      <div className="absolute bottom-10 text-gray-500 text-sm font-medium">
        v1.0.4 - Built for Unity & Progress
      </div>
    </div>
  );

  const Selection = () => (
    <div className="min-h-screen bg-white flex flex-col md:flex-row">
      <div className="md:w-1/2 bg-ndc-green p-12 flex flex-col justify-center text-white">
        <h2 className="text-4xl font-bold mb-6">Welcome to the Movement</h2>
        <p className="text-ndc-light/80 text-lg mb-8 max-w-md">
          Join thousands of Nigerians in shaping the future of our democracy through decentralized action and transparent leadership.
        </p>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">1</div>
            <p className="font-medium">Verify your citizenship (NIN/PVC)</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">2</div>
            <p className="font-medium">Connect with your Ward & LGA</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">3</div>
            <p className="font-medium">Take action and track impact</p>
          </div>
        </div>
      </div>
      
      <div className="md:w-1/2 p-12 flex flex-col justify-center bg-gray-50">
        <div className="max-w-md mx-auto w-full space-y-6">
          <button 
            onClick={() => setStep('verify')}
            className="w-full p-6 bg-white border-2 border-transparent hover:border-ndc-green rounded-2xl shadow-sm text-left flex items-center gap-6 group transition-all"
          >
            <div className="w-14 h-14 bg-ndc-green/10 rounded-xl flex items-center justify-center text-ndc-green group-hover:bg-ndc-green group-hover:text-white transition-colors">
              <ShieldCheck size={28} />
            </div>
            <div>
              <h3 className="font-bold text-xl">Verify My PVC</h3>
              <p className="text-gray-500 text-sm">Secure biometric & INEC linkage</p>
            </div>
          </button>

          <button 
            onClick={() => onComplete('member')}
            className="w-full p-6 bg-white border-2 border-transparent hover:border-ndc-green rounded-2xl shadow-sm text-left flex items-center gap-6 group transition-all"
          >
            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <UserPlus size={28} />
            </div>
            <div>
              <h3 className="font-bold text-xl">Join Movement</h3>
              <p className="text-gray-500 text-sm">Create account via phone number</p>
            </div>
          </button>

          <div className="pt-8 border-t border-gray-200">
            <p className="text-center text-gray-500 mb-4 text-sm font-medium uppercase tracking-widest">Administrative Access</p>
            <button 
              onClick={() => onComplete('executive')}
              className="w-full py-4 bg-ndc-black text-white rounded-xl font-bold hover:bg-gray-800 transition-colors"
            >
              Executive Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const VerificationStep = () => (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white max-w-lg w-full rounded-3xl shadow-xl p-10 space-y-8">
        <div className="text-center">
          <div className="w-20 h-20 bg-ndc-green/10 rounded-full flex items-center justify-center mx-auto text-ndc-green mb-4">
            <Fingerprint size={40} />
          </div>
          <h2 className="text-3xl font-bold">Biometric Verification</h2>
          <p className="text-gray-500">Connecting to National Identity Management (NIMC)</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-tight">NIN / PVC Number</label>
            <input 
              type="text" 
              placeholder="Enter 11-digit NIN or PVC ID" 
              className="w-full p-4 bg-gray-100 border-none rounded-xl focus:ring-2 focus:ring-ndc-green outline-none font-mono"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 py-4 border-2 border-gray-200 rounded-xl font-bold hover:bg-gray-50 transition-colors">
              <Smartphone size={20} /> Face ID
            </button>
            <button className="flex items-center justify-center gap-2 py-4 border-2 border-gray-200 rounded-xl font-bold hover:bg-gray-50 transition-colors">
              <Fingerprint size={20} /> Thumbprint
            </button>
          </div>
        </div>

        <button 
          onClick={() => onComplete('member')}
          className="w-full py-5 bg-ndc-green text-white rounded-2xl font-black text-lg shadow-lg shadow-ndc-green/20 hover:scale-[1.02] transition-transform"
        >
          VERIFY & JOIN
        </button>

        <p className="text-center text-xs text-gray-400">
          Your data is encrypted and stored on a decentralized ledger. NDC does not store raw NIN data.
        </p>
      </div>
    </div>
  );

  return (
    <div>
      {step === 'splash' && <Splash />}
      {step === 'selection' && <Selection />}
      {step === 'verify' && <VerificationStep />}
    </div>
  );
};

export default Onboarding;
