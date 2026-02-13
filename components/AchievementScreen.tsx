
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
    <div className="min-h-screen bg-festive-dark flex flex-col items-center p-3 md:p-8 relative select-none">
      
      {/* Container - Light style */}
      <div className="bg-[#FFF5E6] w-full max-w-6xl rounded-3xl p-4 md:p-10 shadow-2xl relative text-gray-800 border-4 border-yellow-200 flex flex-col items-center min-h-[90vh] md:min-h-[85vh]">
        
        {/* Header Section - Optimized for mobile centering */}
        <div className="w-full relative pt-2 md:pt-0 mb-6 md:mb-8">
            {/* Back Button - Absolute to prevent interfering with center alignment */}
            <button 
              onClick={onBack}
              className="absolute left-0 top-0 p-2 md:p-3 rounded-xl bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold flex items-center justify-center shadow-sm transition-colors z-30"
              aria-label="返回"
            >
              <ArrowLeft size={20} className="md:w-6 md:h-6" />
            </button>

            {/* Centered Content Block */}
            <div className="w-full flex flex-col items-center text-center px-12">
                <div className="flex items-center justify-center gap-2 md:gap-3 text-red-800 mb-2">
                  <Trophy size={28} className="md:w-10 md:h-10 text-yellow-500 drop-shadow-sm" />
                  <h1 className="text-2xl md:text-5xl font-bold tracking-tight">春节成就墙</h1>
                </div>
                
                <div className="flex flex-col md:flex-row items-center gap-1.5 md:gap-4">
                   <div className="bg-yellow-100 text-yellow-800 px-3 py-0.5 md:py-1 rounded-full border border-yellow-300 font-bold shadow-sm text-xs md:text-base">
                      已解锁 {unlockedIds.length} / {achievements.length}
                   </div>
                   <span className="text-gray-500 text-[10px] md:text-sm">长按图标查看达成条件</span>
                </div>
            </div>
            
            <div className="h-px bg-gray-300 w-full mt-4 md:mt-6"></div>
        </div>

        {/* Achievement Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 w-full pb-6 overflow-y-auto custom-scrollbar flex-1 pr-1">
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
                  relative rounded-2xl p-3 md:p-4 flex flex-col items-center text-center transition-all duration-300 border-2 cursor-pointer
                  ${isUnlocked 
                    ? 'bg-white border-yellow-300 shadow-md hover:shadow-lg scale-100' 
                    : 'bg-gray-200 border-gray-300 opacity-80 scale-95 grayscale'
                  }
                  ${isHolding ? 'scale-105 ring-4 ring-red-400 z-10' : ''}
                `}
              >
                {/* Icon Container */}
                <div className="w-16 h-16 md:w-28 md:h-28 mb-2 md:mb-3 relative rounded-lg overflow-hidden bg-gray-50 shadow-inner">
                  <img 
                     src={achievement.icon} 
                     alt={achievement.title} 
                     className={`w-full h-full object-cover pointer-events-none transition-all duration-500 ${!isUnlocked ? 'brightness-50 blur-[1px]' : ''}`}
                  />
                  {!isUnlocked && (
                    <div className="absolute inset-0 flex items-center justify-center text-gray-500/80">
                      <Lock size={24} className="md:w-8 md:h-8" />
                    </div>
                  )}
                </div>
                
                {/* Title */}
                <h3 className={`text-sm md:text-lg font-bold mb-1 md:mb-2 line-clamp-1 leading-tight ${isUnlocked ? 'text-red-800' : 'text-gray-500'}`}>
                  {isUnlocked ? achievement.title : '???'}
                </h3>
                
                {/* Description Area */}
                <div className={`text-[10px] md:text-sm h-12 md:h-16 flex items-center justify-center w-full`}>
                  {isUnlocked ? (
                    isHolding ? (
                      <div className="text-red-600 font-bold bg-yellow-50 p-1 md:p-2 rounded w-full h-full flex items-center justify-center animate-pulse border border-yellow-200 leading-tight">
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
      
      <div className="text-yellow-500/50 text-[10px] md:text-sm mt-4 md:mt-6">
           — 收集所有成就，成为春节赢家 —
      </div>

    </div>
  );
};
