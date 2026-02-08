import React from 'react';
import { ArrowLeft, Lock, Trophy } from 'lucide-react';
import { Achievement } from '../types';

interface Props {
  achievements: Achievement[];
  unlockedIds: string[];
  onBack: () => void;
}

export const AchievementScreen: React.FC<Props> = ({ achievements, unlockedIds, onBack }) => {
  
  // Dummy Locked Achievements to fill the grid for visual reference
  const dummyLocked = [1, 2, 3]; 

  return (
    <div className="min-h-screen bg-festive-dark flex flex-col items-center p-4 md:p-8 relative">
      
      {/* Fixed Back Button */}
      <button 
        onClick={onBack}
        className="fixed top-4 left-4 z-50 p-3 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md border border-white/20 transition-all shadow-lg group"
        aria-label="Back"
      >
        <ArrowLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
      </button>

      {/* Header */}
      <div className="text-center mt-8 mb-12 space-y-4">
        <div className="inline-flex items-center justify-center bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
          成就收藏
        </div>
        <div className="flex items-center justify-center gap-3">
           <Trophy size={48} className="text-yellow-400" />
           <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">春节成就墙</h1>
        </div>
        <p className="text-yellow-200/80 text-sm">完成不同的春节体验，解锁专属成就徽章</p>
        
        <div className="bg-black/30 inline-block px-4 py-1 rounded-full text-xs text-yellow-500 border border-yellow-500/30">
          已解锁 {unlockedIds.length} / {achievements.length + dummyLocked.length * 3}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl pb-12">
        
        {/* Render Real Achievements */}
        {achievements.map((achievement) => {
          const isUnlocked = unlockedIds.includes(achievement.id);
          
          return (
            <div 
              key={achievement.id}
              className={`
                relative rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 border-2
                ${isUnlocked 
                  ? 'bg-[#FFF5E6] border-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.3)] scale-100' 
                  : 'bg-white/5 border-white/10 blur-[1px] opacity-70 scale-95'
                }
              `}
            >
              <div className="w-24 h-24 mb-4 relative">
                <img 
                   src={achievement.icon} 
                   alt={achievement.title} 
                   className={`w-full h-full object-contain ${!isUnlocked ? 'grayscale brightness-50 contrast-125' : ''}`}
                />
                {!isUnlocked && (
                  <div className="absolute inset-0 flex items-center justify-center text-white/50">
                    <Lock size={32} />
                  </div>
                )}
              </div>
              
              <h3 className={`text-xl font-bold mb-2 ${isUnlocked ? 'text-red-800' : 'text-gray-400'}`}>
                {isUnlocked ? achievement.title : '???'}
              </h3>
              
              <p className={`text-sm mb-4 min-h-[40px] ${isUnlocked ? 'text-gray-600' : 'text-gray-500'}`}>
                {isUnlocked ? achievement.quote : '继续探索春节故事解锁更多成就'}
              </p>

              <div className={`w-full py-2 border-t ${isUnlocked ? 'border-yellow-200' : 'border-white/10'}`}>
                 <span className={`text-xs font-bold ${isUnlocked ? 'text-green-600' : 'text-gray-500'}`}>
                   {isUnlocked ? '✔ 已解锁' : '未解锁'}
                 </span>
              </div>
            </div>
          );
        })}

        {/* Render Dummy Locked Slots */}
        {[...Array(6)].map((_, i) => (
           <div 
              key={`dummy-${i}`}
              className="bg-white/5 border-2 border-white/5 rounded-2xl p-6 flex flex-col items-center text-center opacity-40"
            >
              <div className="w-24 h-24 mb-4 flex items-center justify-center bg-black/20 rounded-full text-white/30">
                 <Lock size={40} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-500">未解锁</h3>
              <p className="text-sm mb-4 text-gray-600">继续探索春节故事解锁更多成就</p>
            </div>
        ))}
      </div>

    </div>
  );
};