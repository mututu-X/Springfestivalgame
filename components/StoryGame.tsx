
import React, { useState } from 'react';
import { Calendar, Sun, Moon, Sunset, BedDouble } from 'lucide-react';
import { Character, GameEvent, Stats, Choice, ChoiceImpact } from '../types';
import { StatBar } from './StatBar';
import { Toast } from './Toast';

interface Props {
  character: Character;
  currentStats: Stats;
  event: GameEvent;
  onChoiceMade: (choice: Choice) => void;
}

export const StoryGame: React.FC<Props> = ({ character, currentStats, event, onChoiceMade }) => {
  const [selectedChoiceId, setSelectedChoiceId] = useState<string | null>(null);
  
  // State for Toast content
  const [toastData, setToastData] = useState<{ quote: string, stats: string[] }>({ quote: '', stats: [] });
  const [showToast, setShowToast] = useState(false);
  
  // Track the impact of the currently selected choice to pass to StatBars
  const [currentImpact, setCurrentImpact] = useState<ChoiceImpact | null>(null);

  const getTimeIcon = (time: string) => {
    const iconClass = "w-3 h-3 md:w-4 md:h-4 lg:w-6 lg:h-6 mr-1";
    switch (time) {
      case 'morning': return <Sun className={iconClass} />;
      case 'afternoon': return <Sun className={`${iconClass} text-orange-400`} />;
      case 'evening': return <Sunset className={iconClass} />;
      case 'sleep': return <BedDouble className={iconClass} />;
      default: return <Sun className={iconClass} />;
    }
  };

  const getTimeColor = (time: string) => {
     switch (time) {
      case 'morning': return 'bg-orange-500 border-orange-600';
      case 'afternoon': return 'bg-yellow-600 border-yellow-700';
      case 'evening': return 'bg-indigo-600 border-indigo-700';
      case 'sleep': return 'bg-blue-900 border-blue-950';
      default: return 'bg-orange-500';
    }
  }

  const handleChoice = (choice: Choice) => {
    if (selectedChoiceId) return; // Prevent double click
    setSelectedChoiceId(choice.id);
    setCurrentImpact(choice.impact);

    // Format impact strings for toast
    const imp = choice.impact;
    const fmt = (val: number | undefined, name: string) => {
      if (!val) return null;
      return `${name} ${val > 0 ? '+' : ''}${val}`;
    }

    const changes = [
       fmt(imp.money, '存款'),
       fmt(imp.face, '面子'),
       fmt(imp.san, 'San值'),
       fmt(imp.health, '健康'),
       fmt(imp.luck, '运气'),
       fmt(imp.weight, '体重')
    ].filter((s): s is string => Boolean(s));

    setToastData({
      quote: choice.quote,
      stats: changes
    });
    setShowToast(true);

    // Delay to show animations and allow reading
    setTimeout(() => {
      setSelectedChoiceId(null);
      setCurrentImpact(null);
      setShowToast(false);
      onChoiceMade(choice);
    }, 3500); 
  };

  return (
    <div className="min-h-screen bg-festive-dark p-2 md:p-6 lg:p-8 flex flex-col md:justify-center items-center overflow-hidden">
      <Toast 
        quote={toastData.quote} 
        statChanges={toastData.stats} 
        isVisible={showToast} 
        onClose={() => setShowToast(false)} 
      />

      {/* Main Container - Adjusted height calculation for mobile to avoid scroll */}
      <div className="flex flex-col md:flex-row gap-2 md:gap-6 lg:gap-10 w-full max-w-7xl lg:max-w-[95vw] xl:max-w-[1800px] h-[calc(100vh-1rem)] md:h-[90vh]">
        
        {/* --- Mobile Header: Optimized for Data Density --- */}
        <div className="md:hidden shrink-0 w-full bg-[#FFF5E6] rounded-lg border-l-4 border-red-500 shadow-md p-2 flex flex-col gap-1.5 z-20">
             {/* Row 1: Date, Time, Name */}
             <div className="flex items-center justify-between border-b border-red-100 pb-1">
                 <div className="flex items-center gap-2">
                     <div className="bg-red-700 text-white text-[10px] px-1.5 py-0.5 rounded font-bold shadow-sm">{event.dayLabel}</div>
                     <div className={`${getTimeColor(event.timeOfDay)} text-white text-[10px] px-1.5 py-0.5 rounded font-bold flex items-center shadow-sm`}>
                        {getTimeIcon(event.timeOfDay)}
                        {event.timeLabel}
                     </div>
                 </div>
                 <div className="font-bold text-red-900 text-sm">{character.name}</div>
             </div>
             
             {/* Row 2: All Stats in a Grid */}
             <div className="grid grid-cols-3 gap-x-2 gap-y-1 text-[10px] font-medium leading-tight">
                <div className="flex justify-between text-yellow-700"><span>💰存款</span> <span>{currentStats.money}</span></div>
                <div className="flex justify-between text-orange-700"><span>😎面子</span> <span>{currentStats.face}</span></div>
                <div className="flex justify-between text-purple-700"><span>🧠San</span> <span>{currentStats.san}</span></div>
                <div className="flex justify-between text-blue-600"><span>⚖️体重</span> <span>{currentStats.weight}</span></div>
                <div className="flex justify-between text-red-600"><span>❤️健康</span> <span>{currentStats.health}</span></div>
                <div className="flex justify-between text-green-600"><span>🍀运气</span> <span>{currentStats.luck}</span></div>
             </div>
        </div>

        {/* --- Desktop Left Column (Unchanged) --- */}
        <div className="hidden md:flex w-80 lg:w-96 xl:w-[28rem] flex-col gap-4 flex-shrink-0 transition-all duration-300">
          <div className="flex gap-4">
            <div className="bg-red-700 text-white px-3 py-2 lg:py-4 rounded-lg font-bold flex items-center justify-center flex-1 border-b-4 border-red-900 shadow-md text-sm lg:text-xl">
              <Calendar className="w-4 h-4 lg:w-6 lg:h-6 mr-2" />
              {event.dayLabel}
            </div>
            <div className={`${getTimeColor(event.timeOfDay)} text-white px-3 py-2 lg:py-4 rounded-lg font-bold flex items-center justify-center flex-1 border-b-4 shadow-md text-sm lg:text-xl`}>
              {getTimeIcon(event.timeOfDay)}
              {event.timeLabel}
            </div>
          </div>

          <div className="bg-[#FFF5E6] p-3 lg:p-5 rounded-xl border-l-4 border-red-500 flex items-center space-x-3 lg:space-x-5 shadow-lg">
             <img src={character.avatar} alt="Avatar" className="w-14 h-14 lg:w-20 lg:h-20 rounded-lg object-cover border border-yellow-500" />
             <div>
               <div className="font-bold text-red-900 text-lg lg:text-2xl leading-tight">{character.name}</div>
               <div className="text-xs lg:text-base text-red-700 mt-1 opacity-80">{character.tags[0]}</div>
             </div>
          </div>

          <div className="bg-black/20 backdrop-blur-md rounded-xl p-3 lg:p-5 border border-white/10 space-y-3 lg:space-y-4 overflow-y-auto custom-scrollbar shadow-inner flex-1">
             <StatBar icon="💰" label="存款" value={currentStats.money} type="money" change={currentImpact?.money} />
             <StatBar icon="⚖️" label="体重" value={currentStats.weight} type="weight" change={currentImpact?.weight} />
             <div className="h-px bg-white/10 my-2"></div>
             <StatBar icon="😎" label="面子" value={currentStats.face} type="face" change={currentImpact?.face} />
             <StatBar icon="🧠" label="San值" value={currentStats.san} type="san" change={currentImpact?.san} />
             <StatBar icon="❤️" label="健康" value={currentStats.health} type="health" change={currentImpact?.health} />
             <StatBar icon="🍀" label="运气" value={currentStats.luck} type="luck" change={currentImpact?.luck} />
          </div>
        </div>

        {/* --- Right Column: Story & Choices --- */}
        <div className="flex-1 flex flex-col min-h-0 bg-festive-bg rounded-xl md:rounded-2xl overflow-hidden shadow-2xl border-2 md:border-4 border-[#5E1212] relative">
          
          {/* Top Section: Image & Description */}
          {/* Mobile: 35% height, Desktop: 35% height. Adjusted description box for mobile readability. */}
          <div className="relative h-[35%] w-full flex-shrink-0 group overflow-hidden">
             <img 
               src={event.image} 
               alt={event.title} 
               className="w-full h-full object-cover transition-transform duration-[20s] ease-linear transform group-hover:scale-110" 
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

             <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 lg:p-8 flex flex-col justify-end h-full pointer-events-none">
                <div className="flex flex-col justify-end h-full pointer-events-auto">
                  <div className="flex items-center space-x-2 md:space-x-3 mb-1 md:mb-4 shrink-0">
                    <span className="bg-red-600 text-white text-[10px] md:text-base font-bold px-1.5 py-0.5 md:px-3 md:py-1 rounded shadow-sm border border-red-400">
                      事件
                    </span>
                    <h3 className="text-base md:text-2xl lg:text-4xl font-bold text-white drop-shadow-md tracking-wide line-clamp-1">
                      {event.title}
                    </h3>
                  </div>
                  
                  {/* Description Box */}
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-2 md:p-3 lg:p-6 rounded-lg md:rounded-xl shadow-lg max-h-[75%] overflow-y-auto custom-scrollbar">
                    <p className="text-gray-100 text-xs md:text-base lg:text-xl leading-relaxed md:leading-loose font-medium drop-shadow-sm text-justify">
                      {event.description}
                    </p>
                  </div>
                </div>
             </div>
          </div>

          {/* Bottom Section: Choices */}
          {/* Fills remaining space. Padding reduced for mobile to fit content. */}
          <div className="flex-1 bg-[#FFF5E6] relative flex flex-col min-h-0">
            <div className="h-1 bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 shadow-md z-10 shrink-0"></div>
            
            <div className="flex items-center justify-center py-1 md:py-2 lg:py-3 bg-[#FFF0D4] border-b border-yellow-200/50 flex-shrink-0">
              <span className="text-yellow-800/60 text-[10px] md:text-sm font-bold uppercase tracking-[0.2em]">— 请做出你的选择 —</span>
            </div>

            <div className="flex-1 p-2 md:p-4 lg:p-6 flex flex-col justify-center gap-2 md:gap-4 overflow-y-auto custom-scrollbar">
              {event.choices.map((choice, index) => (
                <button
                  key={choice.id}
                  onClick={() => handleChoice(choice)}
                  disabled={selectedChoiceId !== null}
                  className={`
                    w-full relative group text-left p-2 md:p-4 rounded-xl border-2 transition-all duration-300 transform flex-1 flex flex-col justify-center
                    min-h-[60px] md:min-h-[90px] lg:min-h-[100px]
                    ${selectedChoiceId === choice.id 
                      ? 'bg-yellow-100 border-yellow-500 shadow-inner scale-[0.99] ring-2 ring-yellow-400/50' 
                      : 'bg-white border-orange-100 hover:border-red-400 hover:bg-orange-50 hover:shadow-xl hover:-translate-y-1'
                    }
                    ${selectedChoiceId !== null && selectedChoiceId !== choice.id ? 'opacity-40 grayscale blur-[1px]' : 'opacity-100'}
                  `}
                >
                  <div className="flex items-center h-full">
                    {/* Index Number */}
                    <div className={`
                      flex-shrink-0 w-6 h-6 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center font-bold text-white mr-2 md:mr-5 shadow-md text-sm md:text-lg lg:text-xl transition-colors duration-300
                      ${selectedChoiceId === choice.id ? 'bg-green-500' : 'bg-red-800 group-hover:bg-red-600'}
                    `}>
                      {selectedChoiceId === choice.id ? '✓' : String.fromCharCode(65 + index)}
                    </div>
                    
                    <div className="flex-1 min-w-0 flex flex-col justify-center">
                      <div className="font-bold text-gray-800 text-sm md:text-lg lg:text-2xl mb-0.5 md:mb-1 group-hover:text-red-800 transition-colors line-clamp-1">
                        {choice.title}
                      </div>
                      <div className="text-gray-600 text-[10px] md:text-sm lg:text-lg leading-tight md:leading-normal line-clamp-2 font-medium">
                        {choice.description}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
