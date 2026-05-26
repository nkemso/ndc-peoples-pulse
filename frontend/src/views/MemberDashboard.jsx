import React, { useState } from 'react';
import { 
  TrendingUp, 
  MapPin, 
  Award, 
  Clock, 
  ArrowUpRight,
  Users,
  MessageSquare,
  Smartphone
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import USSDBridge from '../components/USSDBridge';

const activityData = [
  { name: 'Mon', tasks: 4 },
  { name: 'Tue', tasks: 3 },
  { name: 'Wed', tasks: 7 },
  { name: 'Thu', tasks: 5 },
  { name: 'Fri', tasks: 12 },
  { name: 'Sat', tasks: 15 },
  { name: 'Sun', tasks: 10 },
];

const MemberDashboard = () => {
  const [isUSSDOpen, setIsUSSDOpen] = useState(false);

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <USSDBridge isOpen={isUSSDOpen} onClose={() => setIsUSSDOpen(false)} />

      {/* Top Welcome Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Good morning, John Doe</h2>
          <p className="text-gray-500 font-medium">Lagos State • Ikeja LGA • Ward 04</p>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsUSSDOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors shadow-sm"
          >
            <Smartphone size={18} /> USSD Access
          </button>
          <div className="flex items-center gap-3 bg-white p-2 rounded-2xl shadow-sm border">
            <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center text-white font-bold">
              <Award size={24} />
            </div>
            <div className="pr-4">
              <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Impact Points</p>
              <p className="text-xl font-black text-slate-900">2,450</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-3xl border shadow-sm space-y-4">
          <div className="w-12 h-12 bg-ndc-green/10 rounded-2xl flex items-center justify-center text-ndc-green">
            <Users size={24} />
          </div>
          <div>
            <p className="text-sm font-bold text-gray-400 uppercase">Ward Size</p>
            <div className="flex items-end gap-2">
              <span className="text-3xl font-black text-slate-900">12,402</span>
              <span className="text-ndc-green text-sm font-bold flex items-center gap-1 mb-1">
                <ArrowUpRight size={14} /> +12%
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl border shadow-sm space-y-4">
          <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">
            <TrendingUp size={24} />
          </div>
          <div>
            <p className="text-sm font-bold text-gray-400 uppercase">Polling Unit Strength</p>
            <div className="flex items-end gap-2">
              <span className="text-3xl font-black text-slate-900">88%</span>
              <span className="text-blue-600 text-sm font-bold flex items-center gap-1 mb-1">
                <TrendingUp size={14} /> High
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl border shadow-sm space-y-4">
          <div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600">
            <Clock size={24} />
          </div>
          <div>
            <p className="text-sm font-bold text-gray-400 uppercase">Active Tasks</p>
            <div className="flex items-end gap-2">
              <span className="text-3xl font-black text-slate-900">04</span>
              <span className="text-purple-600 text-sm font-bold mb-1">2 Due Today</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Engagement Chart */}
        <div className="bg-white p-8 rounded-3xl border shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-bold text-xl text-slate-800">Mobilization Activity</h3>
            <select className="bg-gray-100 border-none rounded-lg text-xs font-bold px-3 py-2 outline-none">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={activityData}>
                <defs>
                  <linearGradient id="colorTasks" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#008751" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#008751" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#9ca3af'}} />
                <YAxis hide />
                <Tooltip 
                   contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Area type="monotone" dataKey="tasks" stroke="#008751" strokeWidth={3} fillOpacity={1} fill="url(#colorTasks)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Local Feed */}
        <div className="bg-white p-8 rounded-3xl border shadow-sm">
          <h3 className="font-bold text-xl mb-6 text-slate-800">Local Ward Feed</h3>
          <div className="space-y-6">
            {[
              { 
                user: 'Adebayo S.', 
                action: 'completed Ward 04 Road Advocacy', 
                time: '2h ago',
                icon: <Award size={16} />,
                color: 'bg-yellow-100 text-yellow-600'
              },
              { 
                user: 'LGA Coordinator', 
                action: 'posted a new mobilization task', 
                time: '5h ago',
                icon: <MessageSquare size={16} />,
                color: 'bg-blue-100 text-blue-600'
              },
              { 
                user: 'Chioma O.', 
                action: 'donated to the Ward Emergency Fund', 
                time: '8h ago',
                icon: <TrendingUp size={16} />,
                color: 'bg-ndc-green/10 text-ndc-green'
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className={`w-10 h-10 rounded-full ${item.color} flex items-center justify-center shrink-0`}>
                  {item.icon}
                </div>
                <div className="border-b border-gray-100 pb-4 w-full text-slate-700">
                  <p className="text-sm">
                    <span className="font-bold">{item.user}</span> {item.action}
                  </p>
                  <span className="text-xs text-gray-400 font-medium">{item.time}</span>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-3 text-ndc-green font-bold text-sm hover:bg-ndc-green/5 rounded-xl transition-colors">
            View All Local Activity
          </button>
        </div>
      </div>
    </div>
  );
};

export default MemberDashboard;
