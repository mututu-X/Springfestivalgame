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

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'wallet_kill',
    title: '钱包斩杀线',
    conditionDescription: '单局游戏中，存款首次由正到负',
    quote: '千金散尽还复来，你先别急',
    icon: 'https://i.postimg.cc/g03XMSsH/1001.png'
  },
  {
    id: 'bounce_back',
    title: '蒸蚌！',
    conditionDescription: '单局游戏中，存款首次由负回正',
    quote: '就说你一定可以的吧，是你的话做什么都能成功的！',
    icon: 'https://i.postimg.cc/hGVzCysy/1002.png'
  },
  {
    id: 'koi',
    title: '锦鲤本鲤',
    conditionDescription: '幸运首次≥90',
    quote: '好运常伴，金光闪闪的幸运锦鲤就是你！',
    icon: 'https://i.postimg.cc/mr7zdXjj/1003.png'
  }
];