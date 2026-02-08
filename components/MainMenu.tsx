import React from 'react';
import { Trophy, Gamepad2 } from 'lucide-react';

interface Props {
  onStart: () => void;
  onAchievements: () => void;
}

export const MainMenu: React.FC<Props> = ({ onStart, onAchievements }) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-6 bg-[url('https://images.unsplash.com/photo-1548685913-fe6296c09363?q=80&w=2576&auto=format&fit=crop')] bg-cover bg-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-festive-bg/80 mix-blend-multiply"></div>
      
      <div className="relative z-10 w-full max-w-md flex flex-col items-center text-center space-y-12">
        
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center justify-center space-x-2 text-festive-gold">
            <div className="h-px w-8 bg-festive-gold"></div>
            <span className="text-sm tracking-widest uppercase">2026 春节特别活动</span>
            <div className="h-px w-8 bg-festive-gold"></div>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-yellow-200 to-yellow-600 drop-shadow-md leading-tight">
            春节 <span className="text-yellow-400">3×3</span> 天<br/>
            极限挑战
          </h1>
          
          <p className="text-gray-200 text-lg tracking-wide">
            准备开启你的 2026 春节假期了吗？
          </p>
          
          {/* Decorative dots */}
          <div className="flex justify-center space-x-2 mt-4">
            <div className="w-2 h-2 bg-red-500 rotate-45"></div>
            <div className="w-2 h-2 bg-yellow-400 rotate-45"></div>
            <div className="w-2 h-2 bg-red-500 rotate-45"></div>
          </div>
        </div>

        {/* Buttons */}
        <div className="w-full space-y-4">
          <button 
            onClick={onStart}
            className="w-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-bold py-4 rounded-xl shadow-lg border-b-4 border-red-800 active:border-b-0 active:translate-y-1 transition-all flex items-center justify-center space-x-2 text-xl"
          >
            <Gamepad2 size={24} />
            <span>游戏开始</span>
          </button>
          
          <button 
            onClick={onAchievements}
            className="w-full bg-gradient-to-r from-yellow-700 to-yellow-600 hover:from-yellow-600 hover:to-yellow-500 text-yellow-100 font-bold py-4 rounded-xl shadow-lg border-b-4 border-yellow-900 active:border-b-0 active:translate-y-1 transition-all flex items-center justify-center space-x-2 text-xl"
          >
            <Trophy size={24} />
            <span>我的成就</span>
          </button>
        </div>

        <div className="text-yellow-500/50 text-xs mt-12">
           — 体验不同选择带来的多种结局 —
        </div>

      </div>
    </div>
  );
};