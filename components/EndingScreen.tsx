import React from 'react';
import { RefreshCw, ScrollText, Quote } from 'lucide-react';
import { Character, Ending, Stats } from '../types';

interface Props {
  character: Character;
  finalStats: Stats;
  ending: Ending;
  onRestart: () => void;
}

// Helper component
const FinalStatItem: React.FC<{icon: string, label: string, value: number, color: string, unit?: string}> = ({ icon, label, value, color, unit = '' }) => {
  const getColor = () => {
     switch(color) {
      case 'orange': return 'text-orange-600 bg-orange-50';
      case 'purple': return 'text-purple-600 bg-purple-50';
      case 'red': return 'text-red-600 bg-red-50';
      case 'green': return 'text-green-600 bg-green-50';
      case 'blue': return 'text-blue-600 bg-blue-50';
      case 'yellow': return 'text-yellow-600 bg-yellow-50';
      default: return 'text-gray-600';
    }
  }

  return (
    <div className={`flex items-center justify-between p-3 rounded-lg ${getColor()} bg-opacity-50`}>
       <div className="flex items-center space-x-2">
         <span>{icon}</span>
         <span className="text-sm font-medium opacity-80">{label}</span>
       </div>
       <span className="font-bold">{unit === '¥' ? '¥' : ''}{value.toLocaleString()}{unit !== '¥' ? unit : ''}</span>
    </div>
  )
}


export const EndingScreen: React.FC<Props> = ({ character, finalStats, ending, onRestart }) => {
  return (
    <div className="min-h-screen bg-festive-dark flex flex-col items-center justify-center p-4">
      
      {/* Badge */}
      <div className="bg-red-600 text-white px-6 py-2 rounded-full font-bold mb-6 shadow-lg border-2 border-yellow-400 animate-fade-in-down">
        春节假期复盘报告
      </div>

      <div className="text-center space-y-4 mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200 drop-shadow-sm">
          {ending.title}
        </h1>
      </div>

      <div className="bg-[#FFF5E6] w-full max-w-2xl rounded-3xl p-6 md:p-8 shadow-2xl relative text-gray-800 border-4 border-yellow-200 flex flex-col md:flex-row gap-6">
        
        {/* Left Col: Description (Styled as Paper/Journal) */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-inner border border-gray-200 relative overflow-hidden">
           {/* Decorative Paper Lines */}
           <div className="absolute top-0 left-6 bottom-0 w-px bg-red-100"></div>
           <div className="absolute top-0 right-0 left-0 h-8 bg-gradient-to-b from-gray-50 to-transparent"></div>
           
           <div className="flex items-center space-x-2 text-red-800 mb-4 border-b border-red-100 pb-2">
             <ScrollText size={20} />
             <h3 className="font-bold text-lg">结局回溯</h3>
           </div>
           
           <div className="relative z-10">
             <Quote size={24} className="text-gray-200 absolute -top-2 -left-2 transform -scale-x-100" />
             <p className="text-gray-700 leading-relaxed text-justify text-sm md:text-base indent-6 pt-2">
                {ending.description}
             </p>
             <Quote size={24} className="text-gray-200 absolute -bottom-4 right-0" />
           </div>
        </div>

        {/* Right Col: Stats & Profile */}
        <div className="w-full md:w-64 flex flex-col space-y-4">
           
           {/* Character Summary */}
           <div className="flex items-center space-x-3 pb-4 border-b border-gray-200">
              <img src={character.avatar} alt={character.name} className="w-12 h-12 rounded-lg object-cover border-2 border-yellow-400" />
              <div>
                <h3 className="text-base font-bold text-red-800">{character.name}</h3>
                <p className="text-xs text-gray-500">{character.roleDescription}</p>
              </div>
           </div>

           {/* Stats Title */}
           <div className="text-xs font-bold text-gray-400 uppercase tracking-wider text-center">最终状态评估</div>

           {/* Final Stats Grid */}
           <div className="grid grid-cols-1 gap-2">
              <FinalStatItem icon="💰" label="存款" value={finalStats.money} color="yellow" unit="¥" />
              <FinalStatItem icon="⚖️" label="体重" value={finalStats.weight} color="blue" unit="kg" />
              <FinalStatItem icon="😎" label="面子" value={finalStats.face} color="orange" />
              <FinalStatItem icon="🧠" label="San值" value={finalStats.san} color="purple" />
              <FinalStatItem icon="❤️" label="健康" value={finalStats.health} color="red" />
              <FinalStatItem icon="🍀" label="运气" value={finalStats.luck} color="green" />
           </div>
        </div>

      </div>
      
      {/* Restart Button */}
      <button 
        onClick={onRestart}
        className="mt-8 px-8 py-4 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-bold rounded-xl shadow-lg border-b-4 border-red-800 active:border-b-0 active:translate-y-1 transition-all flex items-center justify-center space-x-2 text-xl"
      >
        <RefreshCw size={24} />
        <span>🎉 我还想过节</span>
      </button>

      <div className="text-yellow-500/50 text-xs mt-8">
           — 感谢你的游玩 —
      </div>
    </div>
  );
};