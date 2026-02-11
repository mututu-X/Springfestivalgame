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
    <div className={`flex items-center justify-between p-3 lg:p-4 rounded-lg ${getColor()} bg-opacity-50`}>
       <div className="flex items-center space-x-2">
         <span className="text-lg lg:text-xl">{icon}</span>
         <span className="text-sm lg:text-base font-medium opacity-80">{label}</span>
       </div>
       <span className="font-bold text-base lg:text-lg">{unit === '¥' ? '¥' : ''}{value.toLocaleString()}{unit !== '¥' ? unit : ''}</span>
    </div>
  )
}


export const EndingScreen: React.FC<Props> = ({ character, finalStats, ending, onRestart }) => {
  return (
    <div className="min-h-screen bg-festive-dark flex flex-col items-center justify-center p-4 lg:p-8">
      
      {/* Badge */}
      <div className="bg-red-600 text-white px-6 py-2 lg:px-8 lg:py-3 rounded-full font-bold mb-6 lg:mb-10 shadow-lg border-2 border-yellow-400 animate-fade-in-down text-sm lg:text-xl tracking-wider">
        春节假期复盘报告
      </div>

      <div className="text-center space-y-4 mb-8 lg:mb-12">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200 drop-shadow-sm leading-tight px-4">
          {ending.title}
        </h1>
      </div>

      {/* Increased max-width for large screens */}
      <div className="bg-[#FFF5E6] w-full max-w-2xl lg:max-w-6xl rounded-3xl p-6 md:p-10 lg:p-14 shadow-2xl relative text-gray-800 border-4 border-yellow-200 flex flex-col md:flex-row gap-6 lg:gap-12">
        
        {/* Left Col: Description (Styled as Paper/Journal) */}
        <div className="flex-1 bg-white p-6 lg:p-10 rounded-lg shadow-inner border border-gray-200 relative overflow-hidden flex flex-col">
           {/* Decorative Paper Lines */}
           <div className="absolute top-0 left-6 lg:left-10 bottom-0 w-px bg-red-100"></div>
           <div className="absolute top-0 right-0 left-0 h-8 bg-gradient-to-b from-gray-50 to-transparent"></div>
           
           <div className="flex items-center space-x-2 text-red-800 mb-4 lg:mb-8 border-b border-red-100 pb-2 lg:pb-4">
             <ScrollText size={20} className="lg:w-8 lg:h-8" />
             <h3 className="font-bold text-lg lg:text-2xl">结局回溯</h3>
           </div>
           
           <div className="relative z-10 flex-1 flex flex-col justify-center">
             <Quote size={24} className="text-gray-200 absolute -top-2 lg:-top-4 -left-2 lg:-left-4 transform -scale-x-100 lg:w-10 lg:h-10" />
             <p className="text-gray-700 leading-relaxed text-justify text-sm md:text-base lg:text-xl lg:leading-loose indent-6 lg:indent-10 pt-2">
                {ending.description}
             </p>
             <Quote size={24} className="text-gray-200 absolute -bottom-4 lg:-bottom-6 right-0 lg:w-10 lg:h-10" />
           </div>
        </div>

        {/* Right Col: Stats & Profile - Fixed width on Desktop, Scaled up on LG */}
        <div className="w-full md:w-64 lg:w-80 flex-shrink-0 flex flex-col space-y-4 lg:space-y-6">
           
           {/* Character Summary */}
           <div className="flex items-center space-x-3 lg:space-x-4 pb-4 lg:pb-6 border-b border-gray-200">
              <img src={character.avatar} alt={character.name} className="w-12 h-12 lg:w-20 lg:h-20 rounded-lg object-cover border-2 border-yellow-400" />
              <div>
                <h3 className="text-base lg:text-2xl font-bold text-red-800">{character.name}</h3>
                <p className="text-xs lg:text-base text-gray-500 mt-1">{character.roleDescription}</p>
              </div>
           </div>

           {/* Stats Title */}
           <div className="text-xs lg:text-sm font-bold text-gray-400 uppercase tracking-wider text-center">最终状态评估</div>

           {/* Final Stats Grid */}
           <div className="grid grid-cols-1 gap-2 lg:gap-3">
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
        className="mt-8 lg:mt-12 px-8 py-4 lg:px-12 lg:py-6 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-bold rounded-xl shadow-lg border-b-4 border-red-800 active:border-b-0 active:translate-y-1 transition-all flex items-center justify-center space-x-2 text-xl lg:text-2xl"
      >
        <RefreshCw size={24} className="lg:w-8 lg:h-8" />
        <span>🎉 我还想过节</span>
      </button>

      <div className="text-yellow-500/50 text-xs lg:text-sm mt-8 lg:mt-10">
           — 感谢你的游玩 —
      </div>
    </div>
  );
};