import React from 'react';
import { ArrowLeft, RefreshCw, Gamepad2, MessageCircle } from 'lucide-react';
import { Character } from '../types';

interface Props {
  character: Character;
  onBack: () => void;
  onSelect: () => void;
  onRandom: () => void;
}

export const CharacterSelection: React.FC<Props> = ({ character, onBack, onSelect, onRandom }) => {
  return (
    <div className="min-h-screen bg-festive-dark flex flex-col items-center justify-center p-4 lg:p-8">
      
      {/* Header */}
      <div className="text-center mb-6 lg:mb-10 space-y-2 lg:space-y-4">
        <div className="flex items-center justify-center space-x-2 text-festive-gold">
          <div className="h-px w-8 lg:w-16 bg-festive-gold"></div>
          <span className="text-xs lg:text-sm tracking-widest uppercase">角色选择</span>
          <div className="h-px w-8 lg:w-16 bg-festive-gold"></div>
        </div>
        <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-wide">选择你的春节身份</h2>
      </div>

      {/* Card Container - Increased max-width for large screens */}
      <div className="bg-[#FFF5E6] w-full max-w-2xl lg:max-w-5xl rounded-3xl p-6 md:p-10 lg:p-12 shadow-2xl relative text-gray-800 border-4 border-yellow-200 transition-all duration-300">
        
        {/* Content Layout */}
        <div className="flex flex-col md:flex-row gap-8 lg:gap-16 items-center md:items-start">
          
          {/* Left: Avatar - Scaled up for large screens */}
          <div className="flex-shrink-0 relative">
             <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-80 lg:h-80 transition-all duration-300">
                {/* Decorative brackets */}
                <div className="absolute -top-3 -left-3 w-8 h-8 lg:w-12 lg:h-12 border-t-4 border-l-4 border-red-500 rounded-tl-lg"></div>
                <div className="absolute -top-3 -right-3 w-8 h-8 lg:w-12 lg:h-12 border-t-4 border-r-4 border-red-500 rounded-tr-lg"></div>
                <div className="absolute -bottom-3 -left-3 w-8 h-8 lg:w-12 lg:h-12 border-b-4 border-l-4 border-red-500 rounded-bl-lg"></div>
                <div className="absolute -bottom-3 -right-3 w-8 h-8 lg:w-12 lg:h-12 border-b-4 border-r-4 border-red-500 rounded-br-lg"></div>
                
                <img 
                  src={character.avatar} 
                  alt={character.name} 
                  className="w-full h-full object-cover rounded-xl border-2 border-yellow-300 shadow-inner bg-gray-200"
                />
             </div>
          </div>

          {/* Right: Info */}
          <div className="flex-1 space-y-4 lg:space-y-6 w-full text-center md:text-left">
            <div>
              <h3 className="text-4xl lg:text-6xl font-bold text-red-800 mb-2">{character.name}</h3>
              <div className="h-1 w-16 lg:w-24 bg-yellow-400 mb-4 lg:mb-6 mx-auto md:mx-0"></div>
              
              {/* Role Badge */}
              <div className="inline-flex items-center bg-red-700 text-white px-4 py-1.5 lg:px-6 lg:py-2 rounded-full text-sm lg:text-lg font-medium shadow-md mb-3 lg:mb-4">
                <span className="mr-2">🎯</span>
                {character.roleDescription}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 lg:gap-3 justify-center md:justify-start mb-4">
                {character.tags.filter(t => t !== character.roleDescription).map((tag, i) => (
                  <span key={i} className={`px-3 py-1 lg:px-4 lg:py-2 rounded-full text-xs lg:text-sm font-medium border ${i % 2 === 0 ? 'bg-yellow-100 text-yellow-800 border-yellow-300' : 'bg-green-100 text-green-800 border-green-300'}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bio Box */}
            <div className="bg-orange-50 rounded-xl p-4 lg:p-6 border border-orange-100 relative text-left">
               <div className="flex items-center space-x-2 text-gray-500 mb-2">
                 <MessageCircle size={16} className="lg:w-5 lg:h-5" />
                 <span className="text-xs lg:text-sm font-bold uppercase">人设独白</span>
               </div>
               <div className="w-1 h-full absolute left-0 top-0 bg-red-400 rounded-l-xl"></div>
               <p className="text-gray-600 text-sm lg:text-lg leading-relaxed italic pl-2 lg:pl-4">
                 {character.bio}
               </p>
            </div>
            
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-200 w-full my-6 lg:my-10"></div>

        {/* Action Buttons - Larger on desktop */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 lg:gap-6">
          <div className="flex w-full sm:w-auto gap-4">
            <button 
              onClick={onBack}
              className="flex-1 sm:flex-none px-6 py-3 lg:px-8 lg:py-4 rounded-xl bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold flex items-center justify-center shadow-sm transition-colors text-sm lg:text-base"
            >
              <ArrowLeft size={18} className="mr-2 lg:w-6 lg:h-6" /> 返回
            </button>
            
            <button 
              onClick={onRandom}
              className="flex-1 sm:flex-none px-6 py-3 lg:px-8 lg:py-4 rounded-xl bg-yellow-200 hover:bg-yellow-300 text-yellow-800 font-bold flex items-center justify-center shadow-sm transition-colors border border-yellow-400 text-sm lg:text-base"
            >
              <RefreshCw size={18} className="mr-2 lg:w-6 lg:h-6" /> 换一个
            </button>
          </div>

          <button 
            onClick={onSelect}
            className="w-full sm:flex-1 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-bold py-3 lg:py-4 rounded-xl shadow-lg border-b-4 border-red-800 active:border-b-0 active:translate-y-1 transition-all flex items-center justify-center text-base lg:text-xl"
          >
            选择角色 <Gamepad2 size={20} className="ml-2 lg:w-6 lg:h-6" />
          </button>
        </div>

      </div>
      
      <div className="text-yellow-500/50 text-xs lg:text-sm mt-8">
           — 每个角色都有独特的春节体验 —
      </div>
    </div>
  );
};