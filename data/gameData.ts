
import { Character, GameEvent, Ending, Achievement } from '../types';
import { haoShituChar, haoShituEvents, haoShituEndings } from './characters/hao_shitu';
import { huaBeibeiChar, huaBeibeiEvents, huaBeibeiEndings } from './characters/hua_beibei';
import { fanTongChar, fanTongEvents, fanTongEndings } from './characters/fan_tong';
import { guJiaChar, guJiaEvents, guJiaEndings } from './characters/gu_jia';
import { renXingChar, renXingEvents, renXingEndings } from './characters/ren_xing';
import { haoYouqianChar, haoYouqianEvents, haoYouqianEndings } from './characters/hao_youqian';
import { biChenglongChar, biChenglongEvents, biChenglongEndings } from './characters/bi_chenglong';
import { zhenYangqiChar, zhenYangqiEvents, zhenYangqiEndings } from './characters/zhen_yangqi';
import { huSanwanChar, huSanwanEvents, huSanwanEndings } from './characters/hu_sanwan';
import { wuRenaiChar, wuRenaiEvents, wuRenaiEndings } from './characters/wu_renai';

export const CHARACTERS: Character[] = [
  haoShituChar,
  huaBeibeiChar,
  fanTongChar,
  guJiaChar,
  renXingChar,
  haoYouqianChar,
  biChenglongChar,
  zhenYangqiChar,
  huSanwanChar,
  wuRenaiChar
];

export const CHARACTER_EVENTS: Record<string, GameEvent[]> = {
  [haoShituChar.id]: haoShituEvents,
  [huaBeibeiChar.id]: huaBeibeiEvents,
  [fanTongChar.id]: fanTongEvents,
  [guJiaChar.id]: guJiaEvents,
  [renXingChar.id]: renXingEvents,
  [haoYouqianChar.id]: haoYouqianEvents,
  [biChenglongChar.id]: biChenglongEvents,
  [zhenYangqiChar.id]: zhenYangqiEvents,
  [huSanwanChar.id]: huSanwanEvents,
  [wuRenaiChar.id]: wuRenaiEvents
};

export const CHARACTER_ENDINGS: Record<string, Ending[]> = {
  [haoShituChar.id]: haoShituEndings,
  [huaBeibeiChar.id]: huaBeibeiEndings,
  [fanTongChar.id]: fanTongEndings,
  [guJiaChar.id]: guJiaEndings,
  [renXingChar.id]: renXingEndings,
  [haoYouqianChar.id]: haoYouqianEndings,
  [biChenglongChar.id]: biChenglongEndings,
  [zhenYangqiChar.id]: zhenYangqiEndings,
  [huSanwanChar.id]: huSanwanEndings,
  [wuRenaiChar.id]: wuRenaiEndings
};

// Helper for generating consistent, high-contrast icons
const getIcon = (text: string, bg: string = '580808', color: string = 'F2C94C') => 
  `https://placehold.co/200x200/${bg}/${color}?text=${encodeURIComponent(text)}&font=roboto`;

export const ACHIEVEMENTS: Achievement[] = [
  // A. Numerical Extremes
  {
    id: 'cyber_beggar',
    title: '赛博乞丐',
    conditionDescription: '游戏结束时，负债超过 5000 元',
    quote: '凭本事借的钱，为什么要还？明年的我，请加油。',
    icon: getIcon('🥣', '2d3748', 'e2e8f0') // Dark gray bowl
  },
  {
    id: 'village_tycoon',
    title: '村口首富',
    conditionDescription: '单局游戏中，净赚超过 10,000 元',
    quote: '谁说春节是劫？对我来说，这是上市敲钟的前奏。',
    icon: getIcon('💰', 'f6e05e', '744210') // Gold money
  },
  {
    id: 'icu_reserve',
    title: 'ICU 预备役',
    conditionDescription: '游戏结束时，健康值 < 10',
    quote: '只要心跳还在，我就能再熬一宿。护士，拔管！挡着我回消息了。',
    icon: getIcon('🏥', 'e53e3e', 'fff5f5') // Red hospital
  },
  {
    id: 'mad_dog',
    title: '人形疯狗',
    conditionDescription: '游戏结束时，San值 > 120',
    quote: '素质消失之后，整个人的精神状态好多了。汪！',
    icon: getIcon('🐕', 'ed8936', 'fffaf0') // Orange dog
  },
  {
    id: 'social_terrorist',
    title: '社交恐怖分子',
    conditionDescription: '游戏结束时，面子 < -80',
    quote: '只要我不尴尬，尴尬的就是别人。现在的我，无敌。',
    icon: getIcon('🤡', '805ad5', 'ffffff') // Purple clown
  },
  {
    id: 'weight_gain',
    title: '每逢佳节胖十斤',
    conditionDescription: '游戏结束时，体重增加 ≥ 5kg',
    quote: '吃饱了才有力气减肥。这不叫胖，这叫家庭幸福的具象化。',
    icon: getIcon('🐷', 'f687b3', 'fff5f7') // Pink pig
  },
  {
    id: 'unlucky_one',
    title: '天选倒霉蛋',
    conditionDescription: '游戏结束时，运气 < 0',
    quote: '喝凉水都塞牙，打麻将必点炮。我想静静，别问静静是谁。',
    icon: getIcon('🌧️', '4299e1', 'ebf8ff') // Blue rain
  },

  // B. Behavioral Choices
  {
    id: 'breaking_bad_food',
    title: '绝命毒师',
    conditionDescription: '累计选择“吃剩菜/垃圾食品/乱吃”相关选项 ≥ 3 次',
    quote: '你的胃是铁打的，也是垃圾桶做的。米其林三星都欠你一个奖杯。',
    icon: getIcon('🤢', '48bb78', 'f0fff4') // Green nausea
  },
  {
    id: 'balancing_act',
    title: '端水大师',
    conditionDescription: '游戏结束时，除运气外所有属性均为正数且不低于 40',
    quote: '在混乱的春节战场中，你竟然做到了片叶不沾身。你是真正的情商帝。',
    icon: getIcon('⚖️', 'a0aec0', '2d3748') // Grey scale
  },
  {
    id: 'the_gambler',
    title: '赌怪',
    conditionDescription: '累计参与大额金钱输赢（>800元）的事件 ≥ 3 次',
    quote: '小赌怡情，大赌伤身，强赌灰飞烟灭。但你，是为了那个‘赢’字活着的。',
    icon: getIcon('🎲', 'e53e3e', 'ffffff') // Red dice
  },
  {
    id: 'filial_piety',
    title: '大孝子',
    conditionDescription: '累计选择“牺牲San值换取面子”的选项 ≥ 4 次',
    quote: '虽然心里苦，虽然钱包瘪，但爸妈的笑容守护住了。感动中国候选人。',
    icon: getIcon('🙇', 'ecc94b', '000000') // Yellow bow
  },

  // C. Special
  {
    id: 'hexagon_warrior',
    title: '六边形战士',
    conditionDescription: '单局游戏中，所有 6 种属性都发生过数值变化',
    quote: '这一趟春节，你经历了人生的大起大落。酸甜苦辣咸，你全尝遍了。',
    icon: getIcon('🔯', '667eea', 'ffffff') // Indigo hex
  }
];
