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
  const [toastMessage, setToastMessage] = useState<string>('');
  const [showToast, setShowToast] = useState(false);
  
  // Track the impact of the currently selected choice to pass to StatBars
  const [currentImpact, setCurrentImpact] = useState<ChoiceImpact | null>(null);

  const getTimeIcon = (time: string) => {
    switch (time) {
      case 'morning': return <Sun size={16} className="mr-1" />;
      case 'afternoon': return <Sun size={16} className="mr-1 text-orange-400" />;
      case 'evening': return <Sunset size={16} className="mr-1" />;
      case 'sleep': return <BedDouble size={16} className="mr-1" />;
      default: return <Sun size={16} className="mr-1" />;
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

    // Format impact string for toast/modal
    const impactParts = [];
    const imp = choice.impact;
    
    // Helper to format stat change string
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
    ].filter(Boolean);

    setToastMessage(changes.length > 0 ? changes.join('  |  ') : '无属性变化');
    setShowToast(true);

    // Delay to show animations
    setTimeout(() => {
      setSelectedChoiceId(null);
      setCurrentImpact(null);
      setShowToast(false);
      onChoiceMade(choice);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-festive-dark p-2 md:p-6 flex items-center justify-center">
      <Toast message={toastMessage} isVisible={showToast} onClose={() => setShowToast(false)} />

      {/* Main Container */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full max-w-7xl h-[95vh] md:h-[90vh]">
        
        {/* Left Column: Stats & Profile (Fixed width on desktop) */}
        <div className="hidden md:flex w-80 flex-col gap-4 flex-shrink-0">
          
          {/* Header Date/Time */}
          <div className="flex gap-4">
            <div className="bg-red-700 text-white px-3 py-2 rounded-lg font-bold flex items-center justify-center flex-1 border-b-4 border-red-900 shadow-md">
              <Calendar size={16} className="mr-2" />
              {event.dayLabel}
            </div>
            <div className={`${getTimeColor(event.timeOfDay)} text-white px-3 py-2 rounded-lg font-bold flex items-center justify-center flex-1 border-b-4 shadow-md`}>
              {getTimeIcon(event.timeOfDay)}
              {event.timeLabel}
            </div>
          </div>

          {/* Character Card (Mini) */}
          <div className="bg-[#FFF5E6] p-3 rounded-xl border-l-4 border-red-500 flex items-center space-x-3 shadow-lg">
             <img src={character.avatar} alt="Avatar" className="w-14 h-14 rounded-lg object-cover border border-yellow-500" />
             <div>
               <div className="font-bold text-red-900 text-lg leading-tight">{character.name}</div>
               <div className="text-xs text-red-700 mt-1 opacity-80">{character.tags[0]}</div>
             </div>
          </div>

          {/* Stats Display */}
          <div className="bg-black/20 backdrop-blur-md rounded-xl p-3 border border-white/10 space-y-3 overflow-y-auto custom-scrollbar shadow-inner flex-1">
             <StatBar icon="💰" label="存款" value={currentStats.money} type="money" change={currentImpact?.money} />
             <StatBar icon="⚖️" label="体重" value={currentStats.weight} type="weight" change={currentImpact?.weight} />
             <div className="h-px bg-white/10 my-2"></div>
             <StatBar icon="😎" label="面子" value={currentStats.face} type="face" change={currentImpact?.face} />
             <StatBar icon="🧠" label="San值" value={currentStats.san} type="san" change={currentImpact?.san} />
             <StatBar icon="❤️" label="健康" value={currentStats.health} type="health" change={currentImpact?.health} />
             <StatBar icon="🍀" label="运气" value={currentStats.luck} type="luck" change={currentImpact?.luck} />
          </div>
        </div>

        {/* Mobile Header (Only visible on small screens) */}
        <div className="md:hidden flex items-center justify-between bg-[#FFF5E6] p-2 rounded-lg border-l-4 border-red-500">
             <div className="flex items-center space-x-2">
                 <div className="bg-red-700 text-white text-xs px-2 py-1 rounded">{event.dayLabel}</div>
                 <div className="font-bold text-red-900">{character.name}</div>
             </div>
             <div className="flex space-x-2 text-xs">
                <span className="text-yellow-700">💰 {currentStats.money}</span>
                <span className="text-orange-700">😎 {currentStats.face}</span>
                <span className="text-purple-700">🧠 {currentStats.san}</span>
             </div>
        </div>

        {/* Right Column: Story & Choices (Visual Overhaul) */}
        <div className="flex-1 flex flex-col h-full bg-festive-bg rounded-2xl overflow-hidden shadow-2xl border-4 border-[#5E1212] relative">
          
          {/* Top Section: Image & Description (Overlay) - Reduced height to 1/3 */}
          <div className="relative h-1/3 w-full flex-shrink-0 group overflow-hidden">
             {/* Background Image */}
             <img 
               src={event.image} 
               alt={event.title} 
               className="w-full h-full object-cover transition-transform duration-[20s] ease-linear transform group-hover:scale-110" 
             />
             
             {/* Gradient Overlay for Text Readability */}
             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

             {/* Content Overlay */}
             <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col justify-end h-full">
                <div className="flex flex-col justify-end h-full">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded shadow-sm border border-red-400">
                      事件
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white drop-shadow-md tracking-wide line-clamp-1">
                      {event.title}
                    </h3>
                  </div>
                  
                  {/* Description Box - Scrollable if text is too long */}
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-xl shadow-lg max-h-[85%] overflow-y-auto custom-scrollbar">
                    <p className="text-gray-100 text-sm md:text-base leading-relaxed font-medium drop-shadow-sm text-justify">
                      {event.description}
                    </p>
                  </div>
                </div>
             </div>
          </div>

          {/* Bottom Section: Choices (Expanded Area to 2/3) */}
          <div className="flex-1 h-2/3 bg-[#FFF5E6] relative flex flex-col">
            {/* Divider Line */}
            <div className="h-1 bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 shadow-md z-10"></div>
            
            <div className="flex items-center justify-center py-2 bg-[#FFF0D4] border-b border-yellow-200/50 flex-shrink-0">
              <span className="text-yellow-800/60 text-xs font-bold uppercase tracking-[0.2em]">— 请做出你的选择 —</span>
            </div>

            <div className="flex-1 p-3 md:p-5 flex flex-col justify-center gap-3 md:gap-4 overflow-y-auto custom-scrollbar">
              {event.choices.map((choice, index) => (
                <button
                  key={choice.id}
                  onClick={() => handleChoice(choice)}
                  disabled={selectedChoiceId !== null}
                  className={`
                    w-full relative group text-left p-3 md:p-4 rounded-xl border-2 transition-all duration-300 transform flex-1 min-h-[80px] flex flex-col justify-center
                    ${selectedChoiceId === choice.id 
                      ? 'bg-yellow-100 border-yellow-500 shadow-inner scale-[0.99] ring-2 ring-yellow-400/50' 
                      : 'bg-white border-orange-100 hover:border-red-400 hover:bg-orange-50 hover:shadow-lg hover:-translate-y-0.5'
                    }
                    ${selectedChoiceId !== null && selectedChoiceId !== choice.id ? 'opacity-40 grayscale blur-[1px]' : 'opacity-100'}
                  `}
                >
                  <div className="flex items-center">
                    {/* Index Number / Checkmark */}
                    <div className={`
                      flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-white mr-3 shadow-md text-sm transition-colors duration-300
                      ${selectedChoiceId === choice.id ? 'bg-green-500' : 'bg-red-800 group-hover:bg-red-600'}
                    `}>
                      {selectedChoiceId === choice.id ? '✓' : index + 1}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-0.5">
                        <div className="font-bold text-gray-800 text-base group-hover:text-red-800 transition-colors truncate">
                          {choice.title}
                        </div>
                      </div>
                      <div className="text-gray-600 text-sm leading-snug line-clamp-2">
                        {choice.description}
                      </div>
                      <div className="text-xs text-gray-400 italic mt-1 truncate opacity-70">
                        "{choice.quote}"
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