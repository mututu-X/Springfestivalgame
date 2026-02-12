
import React, { useState, useRef } from 'react';
import { ArrowLeft, Lock, Trophy } from 'lucide-react';
import { Achievement } from '../types';

interface Props {
  achievements: Achievement[];
  unlockedIds: string[];
  onBack: () => void;
}

export const AchievementScreen: React.FC<Props> = ({ achievements, unlockedIds, onBack }) => {
  const [holdingId, setHoldingId] = useState<string | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handlePressStart = (id: string) => {
    timerRef.current = setTimeout(() => {
      setHoldingId(id);
    }, 300); // 300ms delay for long press feel
  };

  const handlePressEnd = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setHoldingId(null);
  };

  return (
    <div className="min-h-screen bg-festive-dark flex flex-col items-center p-4 md:p-8 relative select-none">
      
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
        <p className="text-yellow-200/80 text-sm">长按已解锁的成就，查看达成条件</p>
        
        <div className="bg-black/30 inline-block px-4 py-1 rounded-full text-xs text-yellow-500 border border-yellow-500/30">
          已解锁 {unlockedIds.length} / {achievements.length}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl pb-12">
        
        {/* Render Real Achievements */}
        {achievements.map((achievement) => {
          const isUnlocked = unlockedIds.includes(achievement.id);
          const isHolding = holdingId === achievement.id;
          
          return (
            <div 
              key={achievement.id}
              onMouseDown={() => isUnlocked && handlePressStart(achievement.id)}
              onMouseUp={handlePressEnd}
              onMouseLeave={handlePressEnd}
              onTouchStart={() => isUnlocked && handlePressStart(achievement.id)}
              onTouchEnd={handlePressEnd}
              onContextMenu={(e) => e.preventDefault()} // Prevent right-click menu on mobile
              className={`
                relative rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-300 border-2 cursor-pointer
                ${isUnlocked 
                  ? 'bg-[#FFF5E6] border-yellow-400 shadow-[0_0_20px_rgba(250,204,21,0.3)] scale-100' 
                  : 'bg-white/5 border-white/10 blur-[1px] opacity-70 scale-95'
                }
                ${isHolding ? 'scale-105 ring-4 ring-yellow-200' : ''}
              `}
            >
              <div className="w-24 h-24 mb-4 relative">
                <img 
                   src={achievement.icon} 
                   alt={achievement.title} 
                   className={`w-full h-full object-contain pointer-events-none ${!isUnlocked ? 'grayscale brightness-50 contrast-125' : ''}`}
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
              
              <div className={`text-sm mb-4 min-h-[60px] flex items-center justify-center`}>
                {isUnlocked ? (
                  isHolding ? (
                    <span className="text-red-600 font-bold bg-yellow-100 px-2 py-1 rounded animate-pulse">
                      条件：{achievement.conditionDescription}
                    </span>
                  ) : (
                    <span className="text-gray-600 italic">"{achievement.quote}"</span>
                  )
                ) : (
                  <span className="text-gray-500">继续探索春节故事解锁更多成就</span>
                )}
              </div>

              <div className={`w-full py-2 border-t ${isUnlocked ? 'border-yellow-200' : 'border-white/10'}`}>
                 <span className={`text-xs font-bold ${isUnlocked ? 'text-green-600' : 'text-gray-500'}`}>
                   {isUnlocked ? '✔ 已解锁 (长按查看)' : '未解锁'}
                 </span>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
