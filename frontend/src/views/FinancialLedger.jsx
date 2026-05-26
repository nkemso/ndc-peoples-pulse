import React from 'react';
import { 
  Lock, 
  ExternalLink, 
  Search, 
  Filter, 
  Download,
  ArrowUpRight,
  ArrowDownRight,
  ShieldCheck,
  CircleDot
} from 'lucide-react';

const FinancialLedger = () => {
  const transactions = [
    { id: '1', type: 'in', donor: 'John D. (Financial Tier)', amount: 50000, date: 'May 26, 2026', hash: '0x4f2...3a1', status: 'Verified' },
    { id: '2', type: 'out', purpose: 'Ward 04 Advocacy Logistics', amount: 120000, date: 'May 25, 2026', hash: '0x9b1...8e4', status: 'Audited' },
    { id: '3', type: 'in', donor: 'Anonymous (Vanguard)', amount: 1000000, date: 'May 25, 2026', hash: '0x1c8...f92', status: 'Verified' },
    { id: '4', type: 'out', purpose: 'Radio Broadcast Fee (Kano)', amount: 450000, date: 'May 24, 2026', hash: '0x7d4...a21', status: 'Audited' },
    { id: '5', type: 'in', donor: 'Sarah K. (Ordinary Tier)', amount: 5000, date: 'May 24, 2026', hash: '0xe32...b15', status: 'Verified' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h2 className="text-3xl font-bold">Open Books Ledger</h2>
          <p className="text-gray-500">Real-time transparency on every Naira raised and spent.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border rounded-xl text-sm font-bold hover:bg-gray-50">
            <Filter size={18} /> Filters
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-ndc-black text-white rounded-xl text-sm font-bold hover:bg-gray-800">
            <Download size={18} /> Export Data
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-3xl border shadow-sm">
           <div className="flex justify-between items-center mb-4 text-ndc-green">
              <span className="font-bold text-xs uppercase tracking-widest">Total Deposits</span>
              <ArrowUpRight size={20} />
           </div>
           <p className="text-3xl font-black">₦124.5M</p>
           <p className="text-xs text-gray-400 mt-2 font-medium">Verified by Decentralized Audit</p>
        </div>
        <div className="bg-white p-6 rounded-3xl border shadow-sm">
           <div className="flex justify-between items-center mb-4 text-red-500">
              <span className="font-bold text-xs uppercase tracking-widest">Total Outflow</span>
              <ArrowDownRight size={20} />
           </div>
           <p className="text-3xl font-black">₦82.1M</p>
           <p className="text-xs text-gray-400 mt-2 font-medium">100% Documentation Match</p>
        </div>
        <div className="bg-ndc-green/5 p-6 rounded-3xl border border-ndc-green/20">
           <div className="flex justify-between items-center mb-4 text-ndc-green">
              <span className="font-bold text-xs uppercase tracking-widest">Trust Index</span>
              <ShieldCheck size={20} />
           </div>
           <p className="text-3xl font-black text-ndc-green">99.8%</p>
           <p className="text-xs text-gray-500 mt-2 font-medium">Public Ledger Integrity</p>
        </div>
      </div>

      <div className="bg-white rounded-3xl border shadow-sm overflow-hidden">
        <div className="p-6 border-b flex justify-between items-center">
           <h3 className="font-bold text-lg">Transaction Ledger</h3>
           <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input type="text" placeholder="Search hash..." className="pl-10 pr-4 py-2 bg-gray-50 border-none rounded-lg text-sm outline-none w-48 focus:w-64 transition-all" />
           </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50 text-gray-400 text-xs font-black uppercase tracking-widest border-b">
                <th className="px-8 py-4">Transaction</th>
                <th className="px-8 py-4">Amount</th>
                <th className="px-8 py-4">Status / Hash</th>
                <th className="px-8 py-4">Date</th>
                <th className="px-8 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {transactions.map((tx) => (
                <tr key={tx.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-8 py-5">
                    <p className="font-bold text-sm text-slate-800">{tx.donor || tx.purpose}</p>
                    <p className="text-xs text-gray-400 font-medium">{tx.type === 'in' ? 'Contribution' : 'Expenditure'}</p>
                  </td>
                  <td className="px-8 py-5">
                    <span className={`font-black text-sm ${tx.type === 'in' ? 'text-ndc-green' : 'text-slate-900'}`}>
                      {tx.type === 'in' ? '+' : '-'} ₦{tx.amount.toLocaleString()}
                    </span>
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex flex-col">
                      <div className="flex items-center gap-1.5 mb-1">
                        <CircleDot size={8} className={tx.status === 'Verified' ? 'text-ndc-green' : 'text-blue-500'} />
                        <span className="text-[10px] font-black uppercase tracking-tighter text-gray-500">{tx.status}</span>
                      </div>
                      <span className="text-xs font-mono text-gray-400">{tx.hash}</span>
                    </div>
                  </td>
                  <td className="px-8 py-5 text-sm text-gray-500 font-medium">
                    {tx.date}
                  </td>
                  <td className="px-8 py-5">
                    <button className="p-2 text-gray-400 hover:text-ndc-green transition-colors">
                      <ExternalLink size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-6 bg-gray-50 text-center border-t">
           <button className="text-ndc-green font-bold text-sm hover:underline">View Full Blockchain Ledger</button>
        </div>
      </div>

      <div className="bg-ndc-black p-10 rounded-3xl text-white flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-2">Support the Movement</h3>
          <p className="text-gray-400">Join a funding tier to power grassroots action.</p>
        </div>
        <div className="grid grid-cols-3 gap-4 w-full md:w-auto">
          <button className="p-4 bg-white/5 border border-white/10 rounded-2xl text-center hover:bg-white/10 transition-colors">
            <p className="text-[10px] font-bold text-gray-500 uppercase">Ordinary</p>
            <p className="font-bold">₦5k</p>
          </button>
          <button className="p-4 bg-ndc-green rounded-2xl text-center hover:bg-ndc-green/90 transition-colors">
             <p className="text-[10px] font-bold text-white/70 uppercase">Financial</p>
             <p className="font-bold text-white">₦50k</p>
          </button>
          <button className="p-4 bg-white/5 border border-white/10 rounded-2xl text-center hover:bg-white/10 transition-colors">
             <p className="text-[10px] font-bold text-gray-500 uppercase">Vanguard</p>
             <p className="font-bold">₦1M+</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FinancialLedger;
