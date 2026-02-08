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
    <div className="min-h-screen bg-festive-dark flex flex-col items-center justify-center p-4">
       
       <div className="text-center mb-6 space-y-2">
        <div className="flex items-center justify-center space-x-2 text-festive-gold">
          <div className="h-px w-8 bg-festive-gold"></div>
          <span className="text-xs tracking-widest uppercase">角色属性</span>
          <div className="h-px w-8 bg-festive-gold"></div>
        </div>
        <h2 className="text-3xl font-bold text-white">确认你的初始属性</h2>
        <p className="text-gray-400 text-sm">不满意可以搏一搏，单车变摩托！</p>
      </div>

      <div className="bg-[#FFF5E6] w-full max-w-2xl rounded-3xl p-6 shadow-2xl relative text-gray-800 border-4 border-yellow-200">
        
        {/* Header Small */}
        <div className="flex items-center space-x-4 mb-6 pb-4 border-b border-gray-200">
           <img src={character.avatar} alt={character.name} className="w-16 h-16 rounded-lg object-cover border-2 border-yellow-400" />
           <div>
             <h3 className="text-xl font-bold text-red-800">{character.name}</h3>
             <p className="text-sm text-gray-500">{character.roleDescription}</p>
           </div>
        </div>

        {/* Stats Grid */}
        <div className="space-y-6">
          
          <div>
            <span className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded font-bold mb-2 inline-block">基础属性 (固定)</span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <div className="bg-yellow-50 p-4 rounded-xl flex justify-between items-center border border-yellow-100">
                  <span className="flex items-center text-yellow-800 font-bold"><span className="text-xl mr-2">💰</span> 存款</span>
                  <span className="text-xl font-bold text-yellow-600">¥{currentStats.money.toLocaleString()}</span>
               </div>
               <div className="bg-blue-50 p-4 rounded-xl flex justify-between items-center border border-blue-100">
                  <span className="flex items-center text-blue-800 font-bold"><span className="text-xl mr-2">⚖️</span> 体重</span>
                  <span className="text-xl font-bold text-blue-600">{currentStats.weight}kg</span>
               </div>
            </div>
          </div>

          <div>
            <div className="flex items-center space-x-2 mb-2">
               <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded font-bold">随机属性 (搏一搏)</span>
            </div>
            
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 transition-opacity duration-300 ${isRolling ? 'opacity-50' : 'opacity-100'}`}>
              <SimpleStatBar icon="😎" label="面子" value={currentStats.face} color="orange" />
              <SimpleStatBar icon="🧠" label="San值" value={currentStats.san} color="purple" />
              <SimpleStatBar icon="❤️" label="健康" value={currentStats.health} color="red" />
              <SimpleStatBar icon="🍀" label="运气" value={currentStats.luck} color="green" />
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 flex items-center justify-between gap-4">
           <button 
            onClick={onBack}
            className="px-6 py-3 rounded-xl bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold flex items-center shadow-sm transition-colors"
          >
            <ArrowLeft size={18} className="mr-2" /> 返回
          </button>
          
          <button 
            onClick={handleRoll}
            disabled={isRolling}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-400 hover:to-yellow-400 text-white font-bold flex items-center shadow-lg transition-transform active:scale-95 disabled:opacity-50"
          >
            <Dices size={18} className={`mr-2 ${isRolling ? 'animate-spin' : ''}`} /> 搏一搏
          </button>

          <button 
            onClick={onStartGame}
            className="flex-1 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-bold py-3 rounded-xl shadow-lg border-b-4 border-red-800 active:border-b-0 active:translate-y-1 transition-all flex items-center justify-center"
          >
            开始游戏 <Gamepad2 size={20} className="ml-2" />
          </button>
        </div>

      </div>

      <div className="text-yellow-500/50 text-xs mt-8">
           — 属性会影响你的春节体验和结局 —
      </div>
    </div>
  );
};

// Helper for this specific screen's light theme stats
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
    <div className={`${getBg()} ${getBorder()} border p-4 rounded-xl flex items-center justify-between`}>
      <div className="flex items-center space-x-2 w-20">
        <span>{icon}</span>
        <span className="text-gray-600 font-medium">{label}</span>
      </div>
      <div className="flex-1 mx-4 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div className={`h-full ${getBar()} rounded-full transition-all duration-500`} style={{ width: `${percent}%` }}></div>
      </div>
      <span className={`text-xl font-bold ${getText()}`}>{value}</span>
    </div>
  );
}