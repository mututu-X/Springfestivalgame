
import React, { useState, useEffect } from 'react';
import { GameState, ScreenState, Stats, Character, Choice } from './types';
import { CHARACTERS, CHARACTER_EVENTS, CHARACTER_ENDINGS, ACHIEVEMENTS } from './data/gameData';
import { MainMenu } from './components/MainMenu';
import { CharacterSelection } from './components/CharacterSelection';
import { AttributeAdjustment } from './components/AttributeAdjustment';
import { StoryGame } from './components/StoryGame';
import { EndingScreen } from './components/EndingScreen';
import { AchievementScreen } from './components/AchievementScreen';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>({
    screen: 'MAIN_MENU',
    selectedCharacterId: null,
    currentStats: { money: 0, weight: 0, face: 0, san: 0, health: 0, luck: 0 },
    initialStats: { money: 0, weight: 0, face: 0, san: 0, health: 0, luck: 0 },
    currentEventIndex: 0,
    history: [],
    unlockedAchievements: [],
    counters: {
      gambleCount: 0,
      badFoodCount: 0,
      filialCount: 0,
      typesTriggered: [],
    }
  });

  // Load unlocked achievements from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem('sfx3_achievements');
    if (saved) {
      setGameState(prev => ({ ...prev, unlockedAchievements: JSON.parse(saved) }));
    }
  }, []);

  const saveAchievements = (ids: string[]) => {
    localStorage.setItem('sfx3_achievements', JSON.stringify(ids));
  };

  const getCharacter = (): Character => {
    if (gameState.selectedCharacterId) {
       return CHARACTERS.find(c => c.id === gameState.selectedCharacterId) || CHARACTERS[0];
    }
    return CHARACTERS[0];
  };

  const getCharacterEvents = () => {
    const charId = gameState.selectedCharacterId || CHARACTERS[0].id;
    return CHARACTER_EVENTS[charId] || [];
  };

  const getCharacterEndings = () => {
    const charId = gameState.selectedCharacterId || CHARACTERS[0].id;
    return CHARACTER_ENDINGS[charId] || [];
  };

  // --- Actions ---

  const handleStartGame = () => {
    const initialCharId = gameState.selectedCharacterId || CHARACTERS[0].id;
    setGameState(prev => ({ 
      ...prev, 
      screen: 'CHARACTER_SELECT',
      selectedCharacterId: initialCharId
    }));
  };

  const handleSelectCharacter = () => {
    const char = getCharacter();
    setGameState(prev => ({ 
      ...prev, 
      screen: 'ATTRIBUTE_ADJUST',
      selectedCharacterId: char.id,
      currentStats: { ...char.baseStats },
      initialStats: { ...char.baseStats },
    }));
  };

  const handleRandomCharacter = () => {
    const currentId = gameState.selectedCharacterId;
    const available = CHARACTERS.filter(c => c.id !== currentId);
    if (available.length === 0) return;
    const nextChar = available[Math.floor(Math.random() * available.length)];
    setGameState(prev => ({ ...prev, selectedCharacterId: nextChar.id }));
  };

  const handleUpdateStats = (newStats: Stats) => {
    setGameState(prev => ({ ...prev, currentStats: newStats, initialStats: newStats }));
  };

  const handleBeginStory = () => {
    setGameState(prev => ({
      ...prev,
      screen: 'GAME_LOOP',
      currentEventIndex: 0,
      history: [],
      counters: {
        gambleCount: 0,
        badFoodCount: 0,
        filialCount: 0,
        typesTriggered: [],
      }
    }));
  };

  // --- Achievement Logic ---
  
  const checkAchievements = (
    currentStats: Stats, 
    initialStats: Stats, 
    impact: any, // ChoiceImpact
    counters: GameState['counters'],
    currentUnlocked: string[]
  ) => {
    const newUnlocked = [...currentUnlocked];
    let newCounters = { ...counters };

    // 1. Update Counters based on Event Heuristics (Heuristic Logic)
    
    // Gamble: Big money swing (>800 absolute change) usually implies gambling or big investment
    if (Math.abs(impact.money || 0) > 800) {
      newCounters.gambleCount += 1;
    }

    // Bad Food: Health down AND Weight up
    if ((impact.health || 0) < 0 && (impact.weight || 0) > 0) {
      newCounters.badFoodCount += 1;
    }

    // Filial Piety: Face up AND Sanity down (Sacrificing self for face/family)
    if ((impact.face || 0) > 0 && (impact.san || 0) < 0) {
      newCounters.filialCount += 1;
    }

    // Hexagon Warrior: Track unique stat types changed
    const changes = Object.keys(impact).filter(k => impact[k] !== 0);
    changes.forEach(key => {
      if (!newCounters.typesTriggered.includes(key)) {
        newCounters.typesTriggered.push(key);
      }
    });

    // 2. Check Achievement Conditions

    // A. Numerical Extremes
    if (currentStats.money < -5000 && !newUnlocked.includes('cyber_beggar')) newUnlocked.push('cyber_beggar');
    if ((currentStats.money - initialStats.money) > 10000 && !newUnlocked.includes('village_tycoon')) newUnlocked.push('village_tycoon');
    if (currentStats.health < 10 && !newUnlocked.includes('icu_reserve')) newUnlocked.push('icu_reserve');
    if (currentStats.san > 120 && !newUnlocked.includes('mad_dog')) newUnlocked.push('mad_dog');
    if (currentStats.face < -80 && !newUnlocked.includes('social_terrorist')) newUnlocked.push('social_terrorist');
    if ((currentStats.weight - initialStats.weight) >= 5 && !newUnlocked.includes('weight_gain')) newUnlocked.push('weight_gain');
    if (currentStats.luck < 0 && !newUnlocked.includes('unlucky_one')) newUnlocked.push('unlucky_one');

    // B. Behavioral (Based on counters)
    if (newCounters.gambleCount >= 3 && !newUnlocked.includes('the_gambler')) newUnlocked.push('the_gambler');
    if (newCounters.badFoodCount >= 3 && !newUnlocked.includes('breaking_bad_food')) newUnlocked.push('breaking_bad_food');
    if (newCounters.filialCount >= 4 && !newUnlocked.includes('filial_piety')) newUnlocked.push('filial_piety');

    // C. Special
    if (newCounters.typesTriggered.length >= 6 && !newUnlocked.includes('hexagon_warrior')) newUnlocked.push('hexagon_warrior');

    // Balancing Act (Check at every step, easier to trigger if you maintain it once)
    // Note: Condition implies "End of Game", but unlocking it mid-game if satisfied is generous and fine.
    // To strictly follow "End Game", we would check this only when isGameOver is true.
    // Let's check if they maintain it late game (e.g. after day 5, index > 15).
    // For simplicity, let's unlock if they hold it at any point, creating a "Moment of Balance".
    const allPositive = currentStats.money > 0 && currentStats.weight > 0 && currentStats.face > 0 && currentStats.san > 0 && currentStats.health > 0;
    const allAbove40 = currentStats.money > 0 && currentStats.face >= 40 && currentStats.san >= 40 && currentStats.health >= 40; 
    // Money just needs to be positive, Weight is usually around 50 so 40 is low bar.
    if (allAbove40 && !newUnlocked.includes('balancing_act')) {
       // Optional: Add a stricter check (e.g., late game index check) if needed.
       newUnlocked.push('balancing_act');
    }

    if (newUnlocked.length !== currentUnlocked.length) {
      saveAchievements(newUnlocked);
    }

    return { newUnlocked, newCounters };
  };

  const handleChoiceMade = (choice: Choice) => {
    const prevStats = { ...gameState.currentStats };
    const impact = choice.impact;
    
    const newStats: Stats = {
      money: prevStats.money + (impact.money || 0),
      weight: prevStats.weight + (impact.weight || 0),
      face: prevStats.face + (impact.face || 0),
      san: prevStats.san + (impact.san || 0),
      health: prevStats.health + (impact.health || 0),
      luck: prevStats.luck + (impact.luck || 0),
    };

    // Check Achievements with new logic
    const { newUnlocked, newCounters } = checkAchievements(
      newStats, 
      gameState.initialStats, 
      impact,
      gameState.counters,
      gameState.unlockedAchievements
    );

    const nextIndex = gameState.currentEventIndex + 1;
    const currentEvents = getCharacterEvents();
    
    // Check if game over
    if (nextIndex >= currentEvents.length) {
      setGameState(prev => ({
        ...prev,
        currentStats: newStats,
        history: [...prev.history, choice.id],
        unlockedAchievements: newUnlocked,
        counters: newCounters,
        screen: 'ENDING'
      }));
    } else {
      setGameState(prev => ({
        ...prev,
        currentStats: newStats,
        currentEventIndex: nextIndex,
        history: [...prev.history, choice.id],
        unlockedAchievements: newUnlocked,
        counters: newCounters,
      }));
    }
  };

  const getEnding = () => {
    const stats = gameState.currentStats;
    const currentEndings = getCharacterEndings();
    return currentEndings.find(e => e.condition(stats)) || currentEndings[currentEndings.length - 1];
  };

  // --- Render ---

  switch (gameState.screen) {
    case 'MAIN_MENU':
      return <MainMenu onStart={handleStartGame} onAchievements={() => setGameState(p => ({...p, screen: 'ACHIEVEMENTS'}))} />;
    
    case 'CHARACTER_SELECT':
      return (
        <CharacterSelection 
          character={getCharacter()} 
          onBack={() => setGameState(p => ({...p, screen: 'MAIN_MENU'}))}
          onSelect={handleSelectCharacter}
          onRandom={handleRandomCharacter}
        />
      );

    case 'ATTRIBUTE_ADJUST':
      return (
        <AttributeAdjustment 
          character={getCharacter()}
          currentStats={gameState.currentStats}
          onUpdateStats={handleUpdateStats}
          onBack={() => setGameState(p => ({...p, screen: 'CHARACTER_SELECT'}))}
          onStartGame={handleBeginStory}
        />
      );

    case 'GAME_LOOP':
      return (
        <StoryGame 
          character={getCharacter()}
          currentStats={gameState.currentStats}
          event={getCharacterEvents()[gameState.currentEventIndex]}
          onChoiceMade={handleChoiceMade}
        />
      );

    case 'ENDING':
      return (
        <EndingScreen 
          character={getCharacter()}
          finalStats={gameState.currentStats}
          ending={getEnding()}
          onRestart={() => setGameState(p => ({...p, screen: 'MAIN_MENU'}))}
        />
      );

    case 'ACHIEVEMENTS':
      return (
        <AchievementScreen 
          achievements={ACHIEVEMENTS}
          unlockedIds={gameState.unlockedAchievements}
          onBack={() => setGameState(p => ({...p, screen: 'MAIN_MENU'}))}
        />
      );

    default:
      return <div>Error: Unknown Screen</div>;
  }
};

export default App;
