import React, { useState } from 'react';
import { ArrowLeft, Dices, Gamepad2 } from 'lucide-react';
import { Character, Stats } from '../types';
import { StatBar } from './StatBar';

interface Props {
  character: Character;
  currentStats: Stats;
  onUpdateStats: (newStats: Stats) => void;
  onBack: () => void;
  onStartGame: () => void;
}

export const AttributeAdjustment: React.FC<Props> = ({ character, currentStats, onUpdateStats, onBack, onStartGame }) => {
  const [isRolling, setIsRolling] = useState(false);

  const handleRoll = () => {
    setIsRolling(true);
    
    // Animate rolling effect briefly
    setTimeout(() => {
      const randomize = (base: number) => {
        const variance = Math.floor(base * 0.1); // 10%
        const change = Math.floor(Math.random() * (variance * 2 + 1)) - variance;
        return Math.floor(base + change);
      };

      const newStats: Stats = {
        ...currentStats,
        face: randomize(character.baseStats.face),
        san: randomize(character.baseStats.san),
        health: randomize(character.baseStats.health),
        luck: randomize(character.baseStats.luck),
        // Money and Weight do not change
        money: character.baseStats.money,
        weight: character.baseStats.weight,
      };

      onUpdateStats(newStats);
      setIsRolling(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-festive-dark flex flex-col items-center justify-center p-3 lg:p-4 overflow-hidden">
       
       <div className="text-center mb-4 lg:mb-6 space-y-1 lg:space-y-2 shrink-0">
        <div className="flex items-center justify-center space-x-2 text-festive-gold">
          <div className="h-px w-8 lg:w-12 bg-festive-gold"></div>
          <span className="text-xs tracking-widest uppercase">角色属性</span>
          <div className="h-px w-8 lg:w-12 bg-festive-gold"></div>
        </div>
        <h2 className="text-2xl lg:text-4xl font-bold text-white tracking-wide">确认你的初始属性</h2>
        <p className="text-gray-400 text-xs lg:text-sm">不满意可以搏一搏，单车变摩托！</p>
      </div>

      {/* Increased max-width for large screens, reduced padding */}
      <div className="bg-[#FFF5E6] w-full max-w-2xl lg:max-w-5xl rounded-2xl lg:rounded-3xl p-5 md:p-8 lg:p-8 shadow-2xl relative text-gray-800 border-4 border-yellow-200 flex flex-col justify-center">
        
        {/* Header Small - Scaled */}
        <div className="flex items-center space-x-4 lg:space-x-5 mb-4 lg:mb-6 pb-3 border-b border-gray-200 shrink-0">
           <img src={character.avatar} alt={character.name} className="w-14 h-14 lg:w-20 lg:h-20 rounded-lg object-cover border-2 border-yellow-400" />
           <div>
             <h3 className="text-xl lg:text-2xl font-bold text-red-800">{character.name}</h3>
             <p className="text-sm lg:text-base text-gray-500 mt-0.5">{character.roleDescription}</p>
           </div>
        </div>

        {/* Stats Grid - Tighter spacing */}
        <div className="space-y-4 lg:space-y-6 overflow-y-auto custom-scrollbar pr-1">
          
          <div>
            <span className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded font-bold mb-2 inline-block">基础属性 (固定)</span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4">
               <div className="bg-yellow-50 p-3 lg:p-4 rounded-xl flex justify-between items-center border border-yellow-100">
                  <span className="flex items-center text-yellow-800 font-bold text-sm lg:text-lg"><span className="text-lg lg:text-2xl mr-2">💰</span> 存款</span>
                  <span className="text-lg lg:text-2xl font-bold text-yellow-600">¥{currentStats.money.toLocaleString()}</span>
               </div>
               <div className="bg-blue-50 p-3 lg:p-4 rounded-xl flex justify-between items-center border border-blue-100">
                  <span className="flex items-center text-blue-800 font-bold text-sm lg:text-lg"><span className="text-lg lg:text-2xl mr-2">⚖️</span> 体重</span>
                  <span className="text-lg lg:text-2xl font-bold text-blue-600">{currentStats.weight}kg</span>
               </div>
            </div>
          </div>

          <div>
            <div className="flex items-center space-x-2 mb-2">
               <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded font-bold">随机属性 (搏一搏)</span>
            </div>
            
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4 transition-opacity duration-300 ${isRolling ? 'opacity-50' : 'opacity-100'}`}>
              <SimpleStatBar icon="😎" label="面子" value={currentStats.face} color="orange" />
              <SimpleStatBar icon="🧠" label="San值" value={currentStats.san} color="purple" />
              <SimpleStatBar icon="❤️" label="健康" value={currentStats.health} color="red" />
              <SimpleStatBar icon="🍀" label="运气" value={currentStats.luck} color="green" />
            </div>
          </div>
        </div>

        {/* Actions - Larger buttons */}
        <div className="mt-6 lg:mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 lg:gap-5 shrink-0">
           <div className="flex w-full sm:w-auto gap-3">
             <button 
              onClick={onBack}
              className="flex-1 sm:flex-none px-5 py-2.5 lg:px-6 lg:py-3 rounded-xl bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold flex items-center justify-center shadow-sm transition-colors text-sm lg:text-base"
            >
              <ArrowLeft size={16} className="mr-2 lg:w-5 lg:h-5" /> 返回
            </button>
            
            <button 
              onClick={handleRoll}
              disabled={isRolling}
              className="flex-1 sm:flex-none px-5 py-2.5 lg:px-6 lg:py-3 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-400 hover:to-yellow-400 text-white font-bold flex items-center justify-center shadow-lg transition-transform active:scale-95 disabled:opacity-50 text-sm lg:text-base"
            >
              <Dices size={16} className={`mr-2 lg:w-5 lg:h-5 ${isRolling ? 'animate-spin' : ''}`} /> 搏一搏
            </button>
           </div>

          <button 
            onClick={onStartGame}
            className="w-full sm:flex-1 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-bold py-3 lg:py-3.5 rounded-xl shadow-lg border-b-4 border-red-800 active:border-b-0 active:translate-y-1 transition-all flex items-center justify-center text-base lg:text-lg"
          >
            开始游戏 <Gamepad2 size={18} className="ml-2 lg:w-5 lg:h-5" />
          </button>
        </div>

      </div>

      <div className="text-yellow-500/50 text-xs mt-6 lg:mt-8 shrink-0">
           — 属性会影响你的春节体验和结局 —
      </div>
    </div>
  );
};

// Helper for this specific screen's light theme stats - Scaled for large screens
const SimpleStatBar: React.FC<{icon: string, label: string, value: number, color: string}> = ({ icon, label, value, color }) => {
  const getBg = () => {
    switch(color) {
      case 'orange': return 'bg-orange-50';
      case 'purple': return 'bg-purple-50';
      case 'red': return 'bg-red-50';
      case 'green': return 'bg-green-50';
      default: return 'bg-gray-50';
    }
  };
  const getBorder = () => {
    switch(color) {
      case 'orange': return 'border-orange-100';
      case 'purple': return 'border-purple-100';
      case 'red': return 'border-red-100';
      case 'green': return 'border-green-100';
      default: return 'border-gray-100';
    }
  };
  const getText = () => {
    switch(color) {
      case 'orange': return 'text-orange-600';
      case 'purple': return 'text-purple-600';
      case 'red': return 'text-red-600';
      case 'green': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };
  const getBar = () => {
     switch(color) {
      case 'orange': return 'bg-orange-500';
      case 'purple': return 'bg-purple-500';
      case 'red': return 'bg-red-500';
      case 'green': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  }

  // Changed max to 100 as per request
  const percent = Math.min((value / 100) * 100, 100);

  return (
    <div className={`${getBg()} ${getBorder()} border p-3 lg:p-4 rounded-xl flex items-center justify-between h-full`}>
      <div className="flex items-center space-x-2 w-16 lg:w-24">
        <span className="text-lg lg:text-2xl">{icon}</span>
        <span className="text-gray-600 font-medium text-sm lg:text-base">{label}</span>
      </div>
      <div className="flex-1 mx-2 lg:mx-4 h-2 lg:h-3 bg-gray-200 rounded-full overflow-hidden">
        <div className={`h-full ${getBar()} rounded-full transition-all duration-500`} style={{ width: `${percent}%` }}></div>
      </div>
      <span className={`text-lg lg:text-2xl font-bold ${getText()}`}>{value}</span>
    </div>
  );
}