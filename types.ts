
export type StatKey = 'money' | 'weight' | 'face' | 'san' | 'health' | 'luck';

export interface Stats {
  money: number;
  weight: number;
  face: number;
  san: number;
  health: number;
  luck: number;
}

export interface Character {
  id: string;
  name: string;
  avatar: string;
  tags: string[];
  roleDescription: string;
  bio: string;
  baseStats: Stats;
}

export interface ChoiceImpact {
  money?: number;
  weight?: number;
  face?: number;
  san?: number;
  health?: number;
  luck?: number;
}

export interface Choice {
  id: string;
  text: string; // The label shown on button (e.g. "Option A")
  title: string; // The short title (e.g. "显山露水")
  description: string; // The descriptive text (e.g. "Put the Maotai in front...")
  quote: string; // The inner monologue
  impact: ChoiceImpact;
}

export interface GameEvent {
  id: string;
  day: number; // 1-9
  dayLabel: string; // "腊月二十八", etc.
  timeOfDay: 'morning' | 'afternoon' | 'evening' | 'sleep';
  timeLabel: string; // "早上", "下午", etc.
  title: string;
  description: string;
  image: string;
  choices: Choice[];
}

export interface Ending {
  id: string;
  title: string;
  description: string;
  condition: (stats: Stats) => boolean;
}

export interface Achievement {
  id: string;
  title: string;
  conditionDescription: string;
  quote: string;
  icon: string;
}

export type ScreenState = 'MAIN_MENU' | 'CHARACTER_SELECT' | 'ATTRIBUTE_ADJUST' | 'GAME_LOOP' | 'ENDING' | 'ACHIEVEMENTS';

export interface GameState {
  screen: ScreenState;
  selectedCharacterId: string | null;
  currentStats: Stats;
  initialStats: Stats; // Track starting stats for comparison
  currentEventIndex: number; // Index in the linear event array
  history: string[]; // Track choices made
  unlockedAchievements: string[]; // IDs of unlocked achievements
  
  // Achievement Trackers
  counters: {
    gambleCount: number;   // Big money swings
    badFoodCount: number;  // Health down, Weight up
    filialCount: number;   // Face up, San down
    typesTriggered: string[]; // Unique stat types changed in one run
  };
}
