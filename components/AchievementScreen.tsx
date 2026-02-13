
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
      
      {/* Container - Light style to match CharacterSelection */}
      <div className="bg-[#FFF5E6] w-full max-w-6xl rounded-3xl p-6 md:p-10 shadow-2xl relative text-gray-800 border-4 border-yellow-200 flex flex-col items-center min-h-[85vh]">
        
        {/* Header Section */}
        <div className="text-center mb-8 space-y-4 w-full">
          <div className="flex items-center justify-between w-full relative">
             {/* Back Button inside container for better visual flow */}
             <button 
                onClick={onBack}
                className="p-2 md:p-3 rounded-xl bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold flex items-center justify-center shadow-sm transition-colors absolute left-0 top-0"
              >
                <ArrowLeft size={20} className="md:w-6 md:h-6" />
              </button>

              <div className="mx-auto flex flex-col items-center">
                <div className="flex items-center justify-center gap-3 text-red-800 mb-2">
                  <Trophy size={32} className="md:w-10 md:h-10 text-yellow-500 drop-shadow-sm" />
                  <h1 className="text-3xl md:text-5xl font-bold tracking-tight">春节成就墙</h1>
                </div>
                
                <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-sm md:text-base">
                   <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full border border-yellow-300 font-bold shadow-sm">
                      已解锁 {unlockedIds.length} / {achievements.length}
                   </div>
                   <span className="text-gray-500">长按图标查看达成条件</span>
                </div>
              </div>
              
              {/* Spacer for symmetry */}
              <div className="w-10 md:w-12"></div>
          </div>
          
          <div className="h-px bg-gray-300 w-full mt-6"></div>
        </div>

        {/* Achievement Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 w-full pb-8 overflow-y-auto custom-scrollbar flex-1">
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
                onContextMenu={(e) => e.preventDefault()}
                className={`
                  relative rounded-2xl p-4 flex flex-col items-center text-center transition-all duration-300 border-2 cursor-pointer
                  ${isUnlocked 
                    ? 'bg-white border-yellow-300 shadow-md hover:shadow-lg scale-100' 
                    : 'bg-gray-200 border-gray-300 opacity-80 scale-95 grayscale'
                  }
                  ${isHolding ? 'scale-105 ring-4 ring-red-400 z-10' : ''}
                `}
              >
                {/* Icon Container */}
                <div className="w-20 h-20 md:w-28 md:h-28 mb-3 relative rounded-lg overflow-hidden bg-gray-50">
                  <img 
                     src={achievement.icon} 
                     alt={achievement.title} 
                     className={`w-full h-full object-cover pointer-events-none transition-all duration-500 ${!isUnlocked ? 'brightness-50 blur-[1px]' : ''}`}
                  />
                  {!isUnlocked && (
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500/80">
                      <Lock size={32} />
                    </div>
                  )}
                </div>
                
                {/* Title */}
                <h3 className={`text-base md:text-lg font-bold mb-2 line-clamp-1 leading-tight ${isUnlocked ? 'text-red-800' : 'text-gray-500'}`}>
                  {isUnlocked ? achievement.title : '???'}
                </h3>
                
                {/* Description Area */}
                <div className={`text-xs md:text-sm h-16 flex items-center justify-center w-full`}>
                  {isUnlocked ? (
                    isHolding ? (
                      <div className="text-red-600 font-bold bg-yellow-50 p-2 rounded w-full h-full flex items-center justify-center animate-pulse border border-yellow-200">
                        {achievement.conditionDescription}
                      </div>
                    ) : (
                      <span className="text-gray-600 italic line-clamp-3">"{achievement.quote}"</span>
                    )
                  ) : (
                    <span className="text-gray-400">解锁后查看</span>
                  )}
                </div>

              </div>
            );
          })}
        </div>
      </div>
      
      <div className="text-yellow-500/50 text-xs md:text-sm mt-6">
           — 收集所有成就，成为春节赢家 —
      </div>

    </div>
  );
};
