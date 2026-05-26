import React from 'react';
import { 
  Trophy, 
  MapPin, 
  Clock, 
  ChevronRight, 
  Star, 
  Users,
  CheckCircle2
} from 'lucide-react';

const TaskCenter = () => {
  const tasks = [
    {
      id: 1,
      title: "Ward 04 Road Maintenance Advocacy",
      location: "Ikeja, Lagos",
      points: 500,
      timeLeft: "2 days left",
      participants: 124,
      category: "Infrastructure",
      status: "Active"
    },
    {
      id: 2,
      title: "PVC Collection Assistance",
      location: "Alimosho LGA",
      points: 250,
      timeLeft: "14 hours left",
      participants: 890,
      category: "Mobilization",
      status: "High Priority"
    },
    {
      id: 3,
      title: "Community Townhall Setup",
      location: "Surulere Ward 02",
      points: 150,
      timeLeft: "5 hours left",
      participants: 12,
      category: "Logistics",
      status: "Urgent"
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h2 className="text-3xl font-bold">Volunteer Hub</h2>
          <p className="text-gray-500 font-medium">Earn Impact Points by completing local tasks.</p>
        </div>
        <div className="bg-white px-6 py-4 rounded-3xl border shadow-sm flex items-center gap-6">
           <div className="text-center border-r pr-6">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Total Earned</p>
              <p className="text-xl font-black text-ndc-green">2,450</p>
           </div>
           <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-white">
                 <Trophy size={20} />
              </div>
              <p className="text-sm font-bold">Gold Rank</p>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <h3 className="font-bold text-lg mb-2">Available Tasks Near You</h3>
          {tasks.map((task) => (
            <div key={task.id} className="bg-white p-6 rounded-3xl border border-transparent hover:border-ndc-green shadow-sm transition-all group cursor-pointer">
              <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                <div className="flex gap-4">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${
                    task.category === 'Infrastructure' ? 'bg-blue-50 text-blue-600' :
                    task.category === 'Mobilization' ? 'bg-orange-50 text-orange-600' :
                    'bg-purple-50 text-purple-600'
                  }`}>
                    {task.category === 'Infrastructure' ? <MapPin size={24} /> : <Users size={24} />}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                       <span className={`text-[10px] font-black px-2 py-0.5 rounded uppercase ${
                         task.status === 'Urgent' ? 'bg-red-100 text-red-600' : 
                         task.status === 'High Priority' ? 'bg-orange-100 text-orange-600' : 
                         'bg-ndc-green/10 text-ndc-green'
                       }`}>{task.status}</span>
                       <span className="text-xs text-gray-400 font-medium">• {task.category}</span>
                    </div>
                    <h4 className="font-bold text-lg group-hover:text-ndc-green transition-colors">{task.title}</h4>
                    <div className="flex items-center gap-4 mt-2 text-gray-500 text-sm">
                       <div className="flex items-center gap-1"><MapPin size={14} /> {task.location}</div>
                       <div className="flex items-center gap-1"><Clock size={14} /> {task.timeLeft}</div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between md:flex-col md:items-end gap-2">
                   <div className="flex items-center gap-1.5 bg-yellow-400/10 text-yellow-700 px-3 py-1 rounded-full font-black text-xs">
                      <Star size={12} fill="currentColor" /> {task.points} PTS
                   </div>
                   <button className="flex items-center gap-1 text-sm font-bold text-ndc-green group-hover:gap-2 transition-all">
                      Details <ChevronRight size={16} />
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <div className="bg-ndc-black text-white p-8 rounded-3xl relative overflow-hidden">
             <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4">Leaderboard</h3>
                <div className="space-y-4">
                   {[
                     { name: 'Adamu G.', points: 12400, rank: 1 },
                     { name: 'Chukwuma O.', points: 11200, rank: 2 },
                     { name: 'Bisi A.', points: 9800, rank: 3 }
                   ].map((user) => (
                     <div key={user.rank} className="flex items-center justify-between p-3 bg-white/5 rounded-2xl">
                        <div className="flex items-center gap-3">
                           <span className="text-ndc-green font-black">{user.rank}</span>
                           <span className="font-medium">{user.name}</span>
                        </div>
                        <span className="font-black text-xs">{user.points.toLocaleString()}</span>
                     </div>
                   ))}
                </div>
                <button className="w-full mt-6 py-3 border border-white/20 rounded-xl text-xs font-bold hover:bg-white/10 transition-colors">
                   VIEW ALL RANKINGS
                </button>
             </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border shadow-sm">
             <h3 className="font-bold mb-4">Impact Guidelines</h3>
             <ul className="space-y-4">
                <li className="flex gap-3 text-sm">
                   <CheckCircle2 size={18} className="text-ndc-green shrink-0" />
                   <p className="text-gray-600"><span className="font-bold text-slate-800">Verified Proof:</span> Upload a geo-tagged photo to claim points.</p>
                </li>
                <li className="flex gap-3 text-sm">
                   <CheckCircle2 size={18} className="text-ndc-green shrink-0" />
                   <p className="text-gray-600"><span className="font-bold text-slate-800">Civic Duty:</span> 1000 bonus points for 100% Ward attendance.</p>
                </li>
             </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCenter;
