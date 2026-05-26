import React, { useState } from 'react';
import { 
  Users, 
  LayoutDashboard, 
  ShieldCheck, 
  Wallet, 
  MessageSquareQuote, 
  CreditCard, 
  Trophy,
  Bell,
  Search,
  Menu
} from 'lucide-react';

// Import Views
import Onboarding from './views/Onboarding';
import MemberDashboard from './views/MemberDashboard';
import CommandCenter from './views/CommandCenter';
import AIEngine from './views/AIEngine';
import FinancialLedger from './views/FinancialLedger';
import MemberCard from './views/MemberCard';
import TaskCenter from './views/TaskCenter';

const App = () => {
  const [currentView, setCurrentView] = useState('onboarding');
  const [role, setRole] = useState('guest'); // guest, member, executive

  const renderView = () => {
    switch (currentView) {
      case 'onboarding': return <Onboarding onComplete={(r) => { setRole(r); setCurrentView(r === 'executive' ? 'command' : 'dashboard'); }} />;
      case 'dashboard': return <MemberDashboard />;
      case 'command': return <CommandCenter />;
      case 'ai-engine': return <AIEngine />;
      case 'ledger': return <FinancialLedger />;
      case 'member-card': return <MemberCard />;
      case 'tasks': return <TaskCenter />;
      default: return <MemberDashboard />;
    }
  };

  const navItems = role === 'executive' ? [
    { id: 'command', label: 'Command', icon: ShieldCheck },
    { id: 'ai-engine', label: 'AI', icon: MessageSquareQuote },
    { id: 'ledger', label: 'Ledger', icon: Wallet },
    { id: 'tasks', label: 'Tasks', icon: Trophy },
  ] : [
    { id: 'dashboard', label: 'Hub', icon: LayoutDashboard },
    { id: 'member-card', label: 'ID', icon: CreditCard },
    { id: 'tasks', label: 'Tasks', icon: Trophy },
    { id: 'ledger', label: 'Books', icon: Wallet },
  ];

  if (currentView === 'onboarding') {
    return <Onboarding onComplete={(r) => { setRole(r); setCurrentView(r === 'executive' ? 'command' : 'dashboard'); }} />;
  }

  return (
    <div className="flex flex-col h-screen bg-gray-50 text-slate-900 overflow-hidden font-sans max-w-md mx-auto border-x shadow-2xl">
      {/* Header - Mobile Compact */}
      <header className="h-14 bg-white border-b flex items-center justify-between px-4 sticky top-0 z-20">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-ndc-green rounded-lg flex items-center justify-center font-bold text-white text-sm">N</div>
          <h1 className="text-sm font-black uppercase tracking-tight">NDC Pulse</h1>
        </div>

        <div className="flex items-center gap-3">
          <button className="p-2 text-gray-500 hover:text-ndc-green">
            <Bell size={20} />
          </button>
          <div 
            onClick={() => { setCurrentView('onboarding'); setRole('guest'); }}
            className="w-8 h-8 rounded-full bg-ndc-green/10 flex items-center justify-center font-bold text-ndc-green text-xs border border-ndc-green/30 cursor-pointer"
          >
            {role === 'executive' ? 'EO' : 'JD'}
          </div>
        </div>
      </header>

      {/* Main Content - Scrollable */}
      <main className="flex-1 overflow-y-auto pb-20 p-4">
         <div className="mb-4">
            <span className="px-3 py-1 bg-ndc-green/10 text-ndc-green text-[10px] font-black rounded-full uppercase tracking-widest border border-ndc-green/20">
              {role} Secure Access
            </span>
         </div>
        {renderView()}
      </main>

      {/* Bottom Navigation - Strictly Mobile */}
      <nav className="h-16 bg-white border-t flex items-center justify-around px-2 pb-safe sticky bottom-0 z-20">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentView(item.id)}
            className={`flex flex-col items-center justify-center gap-1 transition-all ${
              currentView === item.id ? 'text-ndc-green' : 'text-gray-400'
            }`}
          >
            <item.icon size={20} strokeWidth={currentView === item.id ? 2.5 : 2} />
            <span className={`text-[10px] font-bold ${currentView === item.id ? 'opacity-100' : 'opacity-60'}`}>
              {item.label}
            </span>
            {currentView === item.id && <div className="w-1 h-1 bg-ndc-green rounded-full mt-0.5"></div>}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default App;
