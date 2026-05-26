import React from 'react';
import { 
  TrendingUp, 
  Users, 
  MapPin, 
  Zap, 
  ShieldAlert,
  ArrowRight,
  Target,
  BarChart3
} from 'lucide-react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell, LineChart, Line 
} from 'recharts';

const sentimentData = [
  { name: 'Supportive', value: 65, color: '#008751' },
  { name: 'Neutral', value: 20, color: '#facc15' },
  { name: 'Opposed', value: 15, color: '#ef4444' },
];

const fundingData = [
  { month: 'Jan', amount: 45 },
  { month: 'Feb', amount: 52 },
  { month: 'Mar', amount: 48 },
  { month: 'Apr', amount: 61 },
  { month: 'May', amount: 55 },
  { month: 'Jun', amount: 67 },
];

const CommandCenter = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* War Chest & Quick Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-2 bg-ndc-black text-white p-8 rounded-3xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-ndc-green/20 blur-3xl rounded-full"></div>
          <p className="text-gray-400 font-bold uppercase tracking-[0.2em] text-xs mb-2">Total War Chest</p>
          <h2 className="text-5xl font-black mb-6">₦2,450,890,000</h2>
          
          <div className="flex gap-8">
            <div>
              <p className="text-xs text-gray-500 font-bold mb-1 uppercase">Today's Inflow</p>
              <p className="text-xl font-bold text-ndc-green">+₦12.4M</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-bold mb-1 uppercase">Expenses (MTD)</p>
              <p className="text-xl font-bold text-red-400">₦145.2M</p>
            </div>
          </div>

          <div className="mt-8 flex gap-2">
            {[1,2,3,4,5].map(i => (
              <div key={i} className="h-1 flex-1 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-ndc-green" style={{ width: `${Math.random() * 100}%` }}></div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl border shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 bg-ndc-green/10 rounded-2xl flex items-center justify-center text-ndc-green">
                <Target size={24} />
              </div>
              <span className="text-xs font-black bg-ndc-green/10 text-ndc-green px-2 py-1 rounded">ON TRACK</span>
            </div>
            <p className="text-gray-400 text-xs font-bold uppercase">Mobilization Goal</p>
            <h3 className="text-3xl font-black">15.2M</h3>
            <p className="text-sm text-gray-500 mt-1">Verified members nationwide</p>
          </div>
          <div className="mt-4 bg-gray-100 h-2 rounded-full overflow-hidden">
            <div className="h-full bg-ndc-green w-3/4"></div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl border shadow-sm flex flex-col justify-between">
          <div>
             <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600">
                <ShieldAlert size={24} />
              </div>
              <span className="text-xs font-black bg-orange-100 text-orange-600 px-2 py-1 rounded">4 ALERTS</span>
            </div>
            <p className="text-gray-400 text-xs font-bold uppercase">Sentiment Score</p>
            <h3 className="text-3xl font-black text-orange-600">74.2</h3>
            <p className="text-sm text-gray-500 mt-1">Slight dip in North-Central</p>
          </div>
          <button className="w-full mt-4 py-2 border-2 border-gray-100 rounded-xl text-xs font-black hover:bg-gray-50 transition-colors">
            VIEW ANALYTICS
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sentiment Visualization */}
        <div className="bg-white p-8 rounded-3xl border shadow-sm lg:col-span-1">
          <h3 className="font-bold text-xl mb-6">Policy Support Levels</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={sentimentData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {sentimentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-3 mt-4">
            {sentimentData.map((item, i) => (
              <div key={i} className="flex items-center justify-between text-sm font-medium">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-gray-500">{item.name}</span>
                </div>
                <span>{item.value}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Geographic Intelligence Map Mock */}
        <div className="bg-white p-8 rounded-3xl border shadow-sm lg:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-xl">Engagement Heatmap</h3>
            <div className="flex gap-2">
              <button className="px-3 py-1 bg-ndc-green text-white text-xs font-bold rounded-lg">States</button>
              <button className="px-3 py-1 bg-gray-100 text-gray-500 text-xs font-bold rounded-lg">LGAs</button>
            </div>
          </div>
          
          <div className="relative aspect-video bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 flex items-center justify-center overflow-hidden">
             {/* Map Placeholder */}
             <MapPin className="text-ndc-green absolute top-1/4 left-1/3 animate-bounce" />
             <MapPin className="text-ndc-green absolute top-1/2 left-1/2 opacity-50" />
             <MapPin className="text-orange-500 absolute bottom-1/3 right-1/4 animate-pulse" />
             <Globe className="text-gray-200 w-48 h-48 opacity-20" />
             
             <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-md p-4 rounded-xl border flex justify-between items-center">
                <div>
                  <p className="text-xs font-black uppercase text-gray-400">Critical Sector</p>
                  <p className="font-bold">Kano Municipal • LGA-12</p>
                </div>
                <button className="px-4 py-2 bg-ndc-green text-white rounded-lg text-xs font-bold flex items-center gap-2">
                  DEPLOY ASSETS <ArrowRight size={14} />
                </button>
             </div>
          </div>
        </div>
      </div>

      {/* Campaign Broadcast Preview */}
      <div className="bg-white p-8 rounded-3xl border shadow-sm">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex items-center gap-6">
             <div className="w-16 h-16 bg-ndc-green rounded-2xl flex items-center justify-center text-white shadow-lg shadow-ndc-green/20">
               <Zap size={32} />
             </div>
             <div>
               <h3 className="font-bold text-xl">Rapid Broadcast System</h3>
               <p className="text-gray-500">Targeting 4.2M members in South-West region</p>
             </div>
          </div>
          <div className="flex gap-4 w-full md:w-auto">
             <button className="flex-1 md:flex-none px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-bold hover:bg-gray-200 transition-colors">
               Save Draft
             </button>
             <button className="flex-1 md:flex-none px-6 py-3 bg-ndc-green text-white rounded-xl font-bold hover:bg-ndc-green/90 transition-colors">
               Send Broadcast
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommandCenter;
