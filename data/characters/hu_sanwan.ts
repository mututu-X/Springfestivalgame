import { Character, GameEvent, Ending } from '../../types';

// Reuse default images for generic scenes
const DEFAULT_IMAGES = {
  morning: 'https://i.postimg.cc/T1vvSY5P/001.jpg',
  afternoon: 'https://i.postimg.cc/5yWWGNQ2/002.jpg',
  evening: 'https://i.postimg.cc/NFvvVf2M/003.jpg',
  sleep: 'https://i.postimg.cc/fyQQFTST/004.jpg'
};

export const huSanwanChar: Character = {
  id: 'hu_sanwan',
  name: '胡三万',
  avatar: 'https://i.postimg.cc/kXYd8txH/109.jpg',
  tags: ['川渝雀圣·熬夜修仙党', '#麻将是本体', '#白天睡不醒'],
  roleDescription: '川渝雀圣·熬夜修仙党',
  bio: '“饭可以不吃，觉可以不睡，三缺一绝对不行！我的春节没有白天黑夜，只有‘上家’和‘下家’。赢了请大家吃火锅，输了……输了是不可能的，我今年穿了红内裤！”',
  baseStats: {
    money: 20000,
    weight: 58,
    face: 70,
    san: 90,
    health: 35,
    luck: 99,
  },
};

export const huSanwanEvents: GameEvent[] = [
  // Day 1: 腊月二十八 (2月15日)
  {
    id: 'd1_morning',
    day: 1,
    dayLabel: '腊月二十八',
    timeOfDay: 'morning',
    timeLabel: '早上',
    title: '系统重连：返乡丧尸号',
    description: '拖着被生活（和熬夜）掏空的躯壳，你由于核心显卡（脸）过于苍白，差点被高铁安检仪判定为生化危机携带者。此时，座位旁边的熊孩子正在进行高分贝声波攻击。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '物理隔绝',
        title: '物理隔绝',
        description: '戴上降噪耳机，开启AT力场。',
        quote: '物理隔绝成功，但你的颈椎在抗议，像是生锈的机械臂。',
        impact: { san: 5, health: -2 }
      },
      {
        id: 'B',
        text: '文化输出',
        title: '文化输出',
        description: '加入战局，教熊孩子玩手机麻将。',
        quote: '熊孩子学会了“清一色”，他妈瞪了你一眼，觉得你这人不正经。',
        impact: { face: -5, luck: 5 }
      },
      {
        id: 'C',
        text: '强制关机',
        title: '强制关机',
        description: '直接昏睡，进入低功耗模式。',
        quote: '你睡出了哈喇子，梦里杠上开花，醒来发现嘴角湿了一片。',
        impact: { health: 5, san: 2 }
      }
    ]
  },
  {
    id: 'd1_afternoon',
    day: 1,
    dayLabel: '腊月二十八',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '归巢：太后的全屏扫描',
    description: '踏入家门，母亲大人的眼神如X光般扫射全身。你的“熬夜修仙肌”和“外卖堆积脂”无所遁形。桌上摆着这几天唯一的清淡饮食，之后便是红油地狱。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '甜言蜜语',
        title: '甜言蜜语',
        description: '先发制人：“妈，我想死你的回锅肉了！”',
        quote: '糖衣炮弹命中核心，太后嘴角上扬30像素，这一关过了。',
        impact: { face: 5, weight: 1 }
      },
      {
        id: 'B',
        text: '诚实交代',
        title: '诚实交代',
        description: '坦白：“妈，我先补觉，饭别叫我。”',
        quote: '太后开启了“别人家孩子都帮忙干活”的语音包，循环播放一小时。',
        impact: { san: -5, health: 2 }
      },
      {
        id: 'C',
        text: '钞能力',
        title: '钞能力',
        description: '塞给老妈两千块红包。',
        quote: '金钱是通用的情感润滑剂，家庭气氛瞬间进入五星级酒店模式。',
        impact: { money: -2000, face: 15 }
      }
    ]
  },
  {
    id: 'd1_evening',
    day: 1,
    dayLabel: '腊月二十八',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '首战：邻居大妈的试探',
    description: '晚饭刚过，隔壁王姨提着瓜子来了。眼神里闪烁着“三缺一”的饥渴光芒。这是回乡后的第一次算力测试，空气中弥漫着硝烟味。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '雀圣附体',
        title: '雀圣附体',
        description: '应战！川渝雀圣从不畏惧。',
        quote: '手起刀落，自摸三家。王姨脸色铁青，你入账五百，此乃大吉之兆。',
        impact: { money: 500, san: 5 }
      },
      {
        id: 'B',
        text: '装傻充愣',
        title: '装傻充愣',
        description: '装作时差没倒过来（虽然没有时差）。',
        quote: '王姨到处说你在大城市混傻了，连麻将都不会打了。',
        impact: { face: -5, luck: -2 }
      },
      {
        id: 'C',
        text: '场外指导',
        title: '场外指导',
        description: '在旁边观战，指点江山。',
        quote: '俗话说观棋不语，你因为嘴碎差点被王姨用瓜子壳活埋。',
        impact: { face: -5, san: -2 }
      }
    ]
  },
  {
    id: 'd1_sleep',
    day: 1,
    dayLabel: '腊月二十八',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '赛后复盘',
    description: '第一天的战斗结束了。躺在熟悉的硬板床上，你的脑子里全是麻将牌的碰撞声。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '意念练牌',
        title: '意念练牌',
        description: '在脑海里复盘刚才那把清一色。',
        quote: '越想越兴奋，感觉明天手气会更好。',
        impact: { luck: 5, health: -2 }
      },
      {
        id: 'B',
        text: '听书助眠',
        title: '听书助眠',
        description: '听郭德纲相声入睡。',
        quote: '在笑声中安然入睡，梦里都是杠上开花。',
        impact: { health: 2 }
      }
    ]
  },
  // Day 2: 腊月二十九 (2月16日)
  {
    id: 'd2_morning',
    day: 2,
    dayLabel: '腊月二十九',
    timeOfDay: 'morning',
    timeLabel: '早上',
    title: '唤醒服务：吸尘器轰炸',
    description: '早上八点，生物钟显示此时应为深度睡眠区。但母亲大人的吸尘器不仅清理了灰尘，还清理了你的睡意。每一次撞击门板都是对你神经的物理超度。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '物理防御',
        title: '物理防御',
        description: '裹紧被子，进行听觉屏蔽。',
        quote: '你在噪音中做了一个被装修队追杀的噩梦，精神衰弱+1。',
        impact: { san: -5, health: 2 }
      },
      {
        id: 'B',
        text: '甚至勤快',
        title: '甚至勤快',
        description: '起床抢过吸尘器假装干活。',
        quote: '虽然身体在抗议，但太后觉得你“懂事了”，尽管你只是在地板上划水。',
        impact: { face: 5, health: -2 }
      },
      {
        id: 'C',
        text: '甚至打钱',
        title: '甚至打钱',
        description: '大喊一声：“妈，我给你转五百去买菜！”',
        quote: '吸尘器声音瞬间消失。人民币真是最好的消音器。',
        impact: { money: -500, san: 10 }
      }
    ]
  },
  {
    id: 'd2_afternoon',
    day: 2,
    dayLabel: '腊月二十九',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '战备囤货：碳水与尼古丁',
    description: '为了应对接下来的“血战到底”，你需要补充战略物资。你是去超市采购年货，还是去茶楼提前踩点占座？',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '修仙物资',
        title: '修仙物资',
        description: '去超市买红牛和槟榔。',
        quote: '收银员看你的眼神像在看一个准备猝死的加班狗，但你觉得浑身充满了力量。',
        impact: { money: -200, health: -5 }
      },
      {
        id: 'B',
        text: '社交外交',
        title: '社交外交',
        description: '去茶楼和老板娘套近乎。',
        quote: '预定了一张风水最好的机麻桌，老板娘送了你一盘瓜子，运气值UP。',
        impact: { money: -100, luck: 10 }
      },
      {
        id: 'C',
        text: '家庭煮夫',
        title: '家庭煮夫',
        description: '在家帮老爸贴对联。',
        quote: '对联贴歪了，但老爸很高兴。你感觉这种传统仪式竟然有点解压。',
        impact: { san: 5, face: 2 }
      }
    ]
  },
  {
    id: 'd2_evening',
    day: 2,
    dayLabel: '腊月二十九',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '前哨战：高中同学的邀约',
    description: '高中死党发来定位：“老地方，三缺一，速来。” 这是年前的热身赛，但你知道这群人打牌不仅看牌技，还看演技。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '甚至通宵',
        title: '甚至通宵',
        description: '飞奔而去，今晚通宵！',
        quote: '大杀四方，赢了800块。虽然肝在隐隐作痛，但灵魂得到了升华。',
        impact: { money: 800, health: -10 }
      },
      {
        id: 'B',
        text: '甚至养生',
        title: '甚至养生',
        description: '推辞不去，养精蓄锐。',
        quote: '死党群里发了红包你没抢到，感觉错过了一个亿。',
        impact: { san: -5, health: 5 }
      },
      {
        id: 'C',
        text: '甚至蹭吃',
        title: '甚至蹭吃',
        description: '去吃个夜宵就走。',
        quote: '吃了三斤小龙虾，没打牌，光听八卦了。肚子和耳朵都很满足。',
        impact: { money: -200, weight: 2 }
      }
    ]
  },
  {
    id: 'd2_sleep',
    day: 2,
    dayLabel: '腊月二十九',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '手气玄学',
    description: '看了看今天的黄历，写着“宜出行，忌赌博”。你陷入了沉思。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '甚至换内裤',
        title: '甚至换内裤',
        description: '找出一身红内衣穿上。',
        quote: '本命年（虽然不是）装备已穿戴。心理防御+100。',
        impact: { luck: 5, face: -2 }
      },
      {
        id: 'B',
        text: '甚至洗手',
        title: '甚至洗手',
        description: '用柚子叶水洗手。',
        quote: '洗去霉气，迎接财神。仪式感拉满。',
        impact: { luck: 2, san: 2 }
      }
    ]
  },
  // Day 3: 正月初一 (2月17日)
  {
    id: 'd3_morning',
    day: 3,
    dayLabel: '正月初一',
    timeOfDay: 'morning',
    timeLabel: '早上',
    title: '生物入侵：熊孩子军团',
    description: '亲戚们带着他们的生化武器——熊孩子来了。你的手办、键盘和麻将牌面临着毁灭性打击。这比打麻将点炮还要让人心率失常。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '空城计',
        title: '空城计',
        description: '锁门，假装不在家。',
        quote: '门外传来踹门声，但你的领地暂时安全。亲戚在背后说你孤僻。',
        impact: { face: -5, san: 5 }
      },
      {
        id: 'B',
        text: '废物利用',
        title: '废物利用',
        description: '拿出备用麻将给他们搭积木。',
        quote: '牺牲了一副旧麻将，换来了耳根清净。培养下一代雀神，从娃娃抓起。',
        impact: { money: -50, san: 5 }
      },
      {
        id: 'C',
        text: '电子封印',
        title: '电子封印',
        description: '打开动画片，进行电子保姆托管。',
        quote: '电视成了救世主，孩子们被光影封印，你获得了片刻安宁。',
        impact: { san: 2, health: 0 }
      }
    ]
  },
  {
    id: 'd3_afternoon',
    day: 3,
    dayLabel: '正月初一',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '油腻审判：圆桌会议',
    description: '大家族午宴，七大姑八大姨开启了“查户口”模式。工资多少？对象在哪？买房没？每一个问题都是暴击。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '满嘴跑火车',
        title: '满嘴跑火车',
        description: '胡扯：“在做元宇宙区块链量子麻将，年入千万。”',
        quote: '亲戚们没听懂，但大受震撼，纷纷给你夹鸡腿。随后有人找你借钱。',
        impact: { face: 10, luck: -5 }
      },
      {
        id: 'B',
        text: '暴风吸入',
        title: '暴风吸入',
        description: '埋头苦吃，用食物堵嘴。',
        quote: '你像个饿死鬼投胎，亲戚摇摇头，觉得你在外面过得很苦。',
        impact: { weight: 3, face: -2 }
      },
      {
        id: 'C',
        text: '反客为主',
        title: '反客为主',
        description: '反向提问：“二舅您退休金多少？表妹期末考几分？”',
        quote: '全场沉默，空气凝固。你获得了MVP级的控场体验，虽然有点社死。',
        impact: { face: -5, san: 10 }
      }
    ]
  },
  {
    id: 'd3_evening',
    day: 3,
    dayLabel: '正月初一',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '巅峰对决：家族血战',
    description: '晚饭后，真正的重头戏来了。二舅、三姨、表哥早已在麻将桌前就位。这不仅是娱乐，更是家族地位的重新洗牌。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '大开杀戒',
        title: '大开杀戒',
        description: '拿出全部实力，六亲不认！',
        quote: '你赢光了二舅的私房钱，二舅妈脸都绿了。你确立了家族雀神的统治地位。',
        impact: { money: 2000, face: -5 }
      },
      {
        id: 'B',
        text: '甚至放水',
        title: '甚至放水',
        description: '故意放水，输钱攒人品。',
        quote: '长辈们夸你懂事，并在心里把你标记为“优质提款机”。',
        impact: { money: -1000, face: 10 }
      },
      {
        id: 'C',
        text: '甚至心理战',
        title: '甚至心理战',
        description: '边打边聊八卦，干扰对手。',
        quote: '你成功挑拨了三姨和表哥的关系，牌局在争吵中草草收场，平局。',
        impact: { san: 5, face: -2 }
      }
    ]
  },
  {
    id: 'd3_sleep',
    day: 3,
    dayLabel: '正月初一',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '亢奋与疲惫',
    description: '赢了钱太兴奋，或者是输了钱不甘心，总之脑细胞在蹦迪。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '甚至数钱',
        title: '甚至数钱',
        description: '躲在被窝里数赢来的现金。',
        quote: '钞票的味道是最好的安眠香。这波不亏。',
        impact: { san: 5, luck: 2 }
      },
      {
        id: 'B',
        text: '甚至懊悔',
        title: '甚至懊悔',
        description: '复盘刚才那把为什么要点炮。',
        quote: '甚至想扇自己一巴掌。带着怨气入睡。',
        impact: { san: -5, health: -1 }
      }
    ]
  },
  // Day 4: 正月初二 (2月18日)
  {
    id: 'd4_morning',
    day: 4,
    dayLabel: '正月初二',
    timeOfDay: 'morning',
    timeLabel: '早上',
    title: '系统过载：宿醉与缺氧',
    description: '昨晚的麻将声还在脑海回荡，你感觉脑浆像被倒进搅拌机。窗外阳光刺眼，对你这种暗夜生物造成了真实伤害。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '强行开机',
        title: '强行开机',
        description: '强行起床，喝黑咖啡续命。',
        quote: '心脏狂跳，san值回升，但你的胃表示强烈抗议。',
        impact: { health: -5, san: 5 }
      },
      {
        id: 'B',
        text: '待机模式',
        title: '待机模式',
        description: '继续昏睡，直到午饭。',
        quote: '错过了早饭，被老妈骂“懒猪”，但至少血条回了一点。',
        impact: { health: 5, face: -2 }
      },
      {
        id: 'C',
        text: '幸灾乐祸',
        title: '幸灾乐祸',
        description: '在床上刷手机，看别人上班。',
        quote: '看到工作群里的加班消息，你的幸福感油然而生。幸灾乐祸是最好的良药。',
        impact: { san: 10, luck: 2 }
      }
    ]
  },
  {
    id: 'd4_afternoon',
    day: 4,
    dayLabel: '正月初二',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '强制任务：带娃危机',
    description: '表姐要去打牌，把两岁的侄子扔给了你。“就带一小会儿！”这是春节最大的谎言。你看着这个流着鼻涕的生物，感到了前所未有的恐惧。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '甚至教学',
        title: '甚至教学',
        description: '教他认麻将牌。',
        quote: '侄子把“发财”吞进嘴里差点噎死，你吓出一身冷汗，san值狂掉。',
        impact: { san: -10, luck: 5 }
      },
      {
        id: 'B',
        text: '甚至观战',
        title: '甚至观战',
        description: '抱着娃去围观牌局。',
        quote: '“童子身”Buff生效，表姐在你背后赢了好几把，分了你200块带娃费。',
        impact: { money: 200, face: 5 }
      },
      {
        id: 'C',
        text: '甚至退货',
        title: '甚至退货',
        description: '装病把娃退货。',
        quote: '你捂着肚子打滚，表姐骂骂咧咧地抱走了娃。你保住了自由，但失去了尊严。',
        impact: { face: -10, san: 10 }
      }
    ]
  },
  {
    id: 'd4_evening',
    day: 4,
    dayLabel: '正月初二',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '反击时刻：复仇局',
    description: '为了洗刷昨晚（可能存在）的失误，或者乘胜追击。今晚的局组在了烟雾缭绕的地下茶楼。这里没有亲情，只有输赢。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '甚至抽烟',
        title: '甚至抽烟',
        description: '点上一根烟，眼神犀利。',
        quote: '气场拉满，对手被你的烟雾弹迷惑，连续放炮。肺部污染度+10%。',
        impact: { health: -5, luck: 5 }
      },
      {
        id: 'B',
        text: '甚至苟住',
        title: '甚至苟住',
        description: '稳扎稳打，不贪大牌。',
        quote: '虽然赢得不多，但胜在稳健。今晚的夜宵有着落了。',
        impact: { money: 300, san: 2 }
      },
      {
        id: 'C',
        text: '甚至犯困',
        title: '甚至犯困',
        description: '由于太困，打错一张牌。',
        quote: '包胡！全场欢呼，只有你在滴血。熬夜是大忌啊！',
        impact: { money: -500, san: -10 }
      }
    ]
  },
  {
    id: 'd4_sleep',
    day: 4,
    dayLabel: '正月初二',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '腰酸背痛',
    description: '连续坐了十个小时，感觉脊椎已经不是自己的了。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '甚至贴膏药',
        title: '甚至贴膏药',
        description: '贴上从老妈那顺来的骨通贴。',
        quote: '一股中药味，但热辣辣的挺舒服。老年人生活提前体验。',
        impact: { health: 2, face: -2 }
      },
      {
        id: 'B',
        text: '甚至瑜伽',
        title: '甚至瑜伽',
        description: '在床上做猫式伸展。',
        quote: '咔咔作响。觉得自己像个生锈的变形金刚。',
        impact: { health: 2, san: 2 }
      }
    ]
  },
  // Day 5: 正月初三 (2月19日)
  {
    id: 'd5_morning',
    day: 5,
    dayLabel: '正月初三',
    timeOfDay: 'morning',
    timeLabel: '早上',
    title: '异变：吸血鬼体质',
    description: '你意识到回家五天了，还没见过正午的太阳。皮肤苍白得像刷了腻子，眼圈黑得像国宝。老妈试图拉开窗帘，你发出了凄厉的惨叫。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '甚至早饭',
        title: '甚至早饭',
        description: '在这个点吃一顿正经早饭。',
        quote: '胃部受到惊吓，但随即表示感谢。老妈感动的差点哭了。',
        impact: { health: 5, face: 5 }
      },
      {
        id: 'B',
        text: '甚至自闭',
        title: '甚至自闭',
        description: '躲进被窝继续修仙。',
        quote: '你在被窝里思考人生，感觉自己正在退化成真菌。',
        impact: { health: -2, san: -2 }
      },
      {
        id: 'C',
        text: '甚至照镜子',
        title: '甚至照镜子',
        description: '照镜子，被自己吓一跳。',
        quote: '这哪里是雀圣，简直是僵尸道长。必须敷面膜了。',
        impact: { san: -5, face: -2 }
      }
    ]
  },
  {
    id: 'd5_afternoon',
    day: 5,
    dayLabel: '正月初三',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '身躯警报：腰肌劳损',
    description: '连续几天的久坐，你的腰发出了断裂警告。每动一下都像生锈的齿轮在摩擦。此时，又有一场局在召唤。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '甚至硬撑',
        title: '甚至硬撑',
        description: '贴上膏药，带伤上阵。',
        quote: '轻伤不下火线！这就是牌桌精神！晚上痛得睡不着。',
        impact: { health: -10, luck: 2 }
      },
      {
        id: 'B',
        text: '甚至按摩',
        title: '甚至按摩',
        description: '拒绝牌局，去盲人按摩。',
        quote: '技师说你的腰像五十岁的人。按完之后，感觉又能大战三百回合了。',
        impact: { money: -200, health: 10 }
      },
      {
        id: 'C',
        text: '甚至使唤',
        title: '甚至使唤',
        description: '躺平，指使老爸倒水。',
        quote: '老爸一边倒水一边骂，但你好歹休息了一会儿。',
        impact: { face: -5, health: 2 }
      }
    ]
  },
  {
    id: 'd5_evening',
    day: 5,
    dayLabel: '正月初三',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '深渊凝视：连跪之夜',
    description: '今晚风水不对。怎么打怎么输，喝凉水都塞牙。你的钱包在缩水，心态在崩塌，san值狂掉。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '甚至上头',
        title: '甚至上头',
        description: '上头了！借钱也要翻本！',
        quote: '典型的赌徒谬误。你输得只剩裤衩，心态彻底炸裂，今晚注定无眠。',
        impact: { money: -5000, san: -20 }
      },
      {
        id: 'B',
        text: '甚至止损',
        title: '甚至止损',
        description: '及时止损，掀桌走人。',
        quote: '虽然输了钱，但保住了命。留得青山在，不怕没柴烧。',
        impact: { money: -1000, health: 2 }
      },
      {
        id: 'C',
        text: '甚至换位',
        title: '甚至换位',
        description: '换个座位，申请换牌。',
        quote: '玄学改命成功了一半，止住了颓势，但还是小输。',
        impact: { luck: 10, money: -500 }
      }
    ]
  },
  {
    id: 'd5_sleep',
    day: 5,
    dayLabel: '正月初三',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '输红了眼',
    description: '输了五千块，心在滴血，想剁手。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '甚至剁手',
        title: '甚至剁手',
        description: '发誓再赌就是狗。',
        quote: '汪汪汪。你知道这誓言撑不过明天。',
        impact: { san: 2, face: -2 }
      },
      {
        id: 'B',
        text: '甚至研究',
        title: '甚至研究',
        description: '上网搜“麻将必胜口诀”。',
        quote: '试图用知识武装头脑，结果看睡着了。',
        impact: { san: 2, luck: 2 }
      }
    ]
  },
  // Day 6: 正月初四 (2月20日)
  {
    id: 'd6_morning',
    day: 6,
    dayLabel: '正月初四',
    timeOfDay: 'morning',
    timeLabel: '早上',
    title: '战术撤退：装病',
    description: '为了躲避今天预定的远房亲戚聚会（那是纯粹的精神污染），你决定启用奥斯卡级别的演技。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '甚至食物中毒',
        title: '甚至食物中毒',
        description: '化妆成面色惨白，声称食物中毒。',
        quote: '全家人都出门了，留你独自在家。你点了一份超大外卖，爽到飞起。',
        impact: { san: 10, health: 2 }
      },
      {
        id: 'B',
        text: '甚至被抓',
        title: '甚至被抓',
        description: '被老妈识破，强行拖走。',
        quote: '在车上被数落了一路，还要面对亲戚的假笑，简直是地狱。',
        impact: { san: -10, face: -5 }
      },
      {
        id: 'C',
        text: '甚至加班',
        title: '甚至加班',
        description: '声称公司服务器崩了，要远程加班。',
        quote: '这就是赛博时代的免死金牌。大家对你的“忙碌”表示敬畏。',
        impact: { face: 5, luck: 2 }
      }
    ]
  },
  {
    id: 'd6_afternoon',
    day: 6,
    dayLabel: '正月初四',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '秘密基地：逃离',
    description: '你成功溜了出来，漫步在县城大街。空气中弥漫着鞭炮和尘土味。你需要一个没有亲戚、没有麻将（暂时）的净土。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '甚至网吧',
        title: '甚至网吧',
        description: '钻进一家老旧网吧。',
        quote: '还是熟悉的烟味，还是熟悉的键盘敲击声。这里才是你的精神故乡。',
        impact: { san: 10, health: -2 }
      },
      {
        id: 'B',
        text: '甚至钓鱼',
        title: '甚至钓鱼',
        description: '去河边发呆，看大爷钓鱼。',
        quote: '光合作用终于启动。虽然大爷钓的鱼比你的人生还小，但你的内心平静了。',
        impact: { san: 15, health: 5 }
      },
      {
        id: 'C',
        text: '甚至初恋',
        title: '甚至初恋',
        description: '偶遇小学女神（现已发福）。',
        quote: '岁月的杀猪刀太狠了。美好的回忆碎了一地，你只想快点走。',
        impact: { san: -5, face: -2 }
      }
    ]
  },
  {
    id: 'd6_evening',
    day: 6,
    dayLabel: '正月初四',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '同学会：凡尔赛修罗场',
    description: '躲得过初一躲不过十五。初中同学聚会，包厢里充斥着二手烟和虚荣心。班长在晒车钥匙，体委在晒二胎。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '甚至干饭',
        title: '甚至干饭',
        description: '低调干饭，只在这个时候才像个吃货。',
        quote: '你吃回了份子钱，肚子圆了一圈。大家觉得你混得一般，不再针对你。',
        impact: { weight: 3, san: 2 }
      },
      {
        id: 'B',
        text: '甚至毒舌',
        title: '甚至毒舌',
        description: '毒舌全开：“班长这车租一天多少钱？”',
        quote: '全场死寂，班长脸成了猪肝色。你成为了聚会终结者，爽！',
        impact: { face: -10, san: 15 }
      },
      {
        id: 'C',
        text: '甚至复赌',
        title: '甚至复赌',
        description: '喝高了，拉着大家去打麻将。',
        quote: '最后还是回到了麻将桌上。这才是你擅长的领域，虽然又输了钱。',
        impact: { money: -1000, luck: -2 }
      }
    ]
  },
  {
    id: 'd6_sleep',
    day: 6,
    dayLabel: '正月初四',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '社交后的孤独',
    description: '喧闹过后，走在空无一人的街道上，突然觉得有点冷。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '甚至哼歌',
        title: '甚至哼歌',
        description: '哼着《不再犹豫》回家。',
        quote: '假装自己是电影主角，虽然走得有点踉跄。',
        impact: { san: 5 }
      },
      {
        id: 'B',
        text: '甚至买醉',
        title: '甚至买醉',
        description: '在路边摊又喝了一瓶啤酒。',
        quote: '这是对春节的最后致敬。明天开始戒酒（大概）。',
        impact: { health: -2, money: -20 }
      }
    ]
  },
  // Day 7: 正月初五 (2月21日)
  {
    id: 'd7_morning',
    day: 7,
    dayLabel: '正月初五',
    timeOfDay: 'morning',
    timeLabel: '早上',
    title: '内存碎片：断片',
    description: '醒来时头痛欲裂，完全不记得昨晚同学会后半段发生了什么。手机里多了几个莫名其妙的群聊，微信余额少了一截。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '甚至社死',
        title: '甚至社死',
        description: '翻看聊天记录，寻找线索。',
        quote: '发现自己在群里发了 60 秒的语音独唱《难忘今宵》，社死现场。',
        impact: { face: -10, san: -5 }
      },
      {
        id: 'B',
        text: '甚至装傻',
        title: '甚至装傻',
        description: '不管了，假装无事发生。',
        quote: '只要我不尴尬，尴尬的就是别人。甚至还能理直气壮地吃早饭。',
        impact: { san: 5, health: 2 }
      },
      {
        id: 'C',
        text: '甚至破财',
        title: '甚至破财',
        description: '给昨晚最好的兄弟打电话确认。',
        quote: '兄弟说你昨晚抢着买单。好吧，破财免灾。',
        impact: { money: -200, face: 2 }
      }
    ]
  },
  {
    id: 'd7_afternoon',
    day: 7,
    dayLabel: '正月初五',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '偶遇：当年的白月光',
    description: '去买奶茶的时候，居然撞见了高中暗恋的对象。对方看起来光鲜亮丽，而你穿着睡衣拖鞋，头发像鸡窝。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '甚至逃跑',
        title: '甚至逃跑',
        description: '掉头就跑，速度突破人类极限。',
        quote: '拖鞋跑掉了一只，狼狈指数满星。这下彻底没戏了。',
        impact: { face: -5, luck: -2 }
      },
      {
        id: 'B',
        text: '甚至搭讪',
        title: '甚至搭讪',
        description: '淡定打招呼：“哟，你也回来建设家乡了？”',
        quote: '对方竟然觉得你这身“颓废风”很有个性，加了微信。',
        impact: { face: 10, luck: 5 }
      },
      {
        id: 'C',
        text: '甚至演戏',
        title: '甚至演戏',
        description: '假装是外卖员。',
        quote: '“您的奶茶到了。”演技拙劣，对方一脸懵逼。',
        impact: { face: -10, san: 2 }
      }
    ]
  },
  {
    id: 'd7_evening',
    day: 7,
    dayLabel: '正月初五',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '终局之战：血战到底',
    description: '这是离家前的最后一场大牌局。真正的“雀神”争霸赛。规则：血战到底，刮风下雨，呼叫转移。赌上尊严的一战！',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '甚至超神',
        title: '甚至超神',
        description: '开启“计算姬”模式，记牌算牌。',
        quote: '大脑高速运转，CPU 过热，但你赢麻了！把前几天输的都赢回来了！',
        impact: { money: 3000, san: -10 }
      },
      {
        id: 'B',
        text: '甚至佛系',
        title: '甚至佛系',
        description: '随缘打法，快乐麻将。',
        quote: '输赢不大，大家都很开心。这才是春节的意义嘛（自我安慰）。',
        impact: { money: -500, san: 10 }
      },
      {
        id: 'C',
        text: '甚至被虐',
        title: '甚至被虐',
        description: '被三家围攻，惨遭针对。',
        quote: '你被针对得体无完肤，怀疑人生。发誓明年再也不打牌了（假的）。',
        impact: { money: -2000, san: -15 }
      }
    ]
  },
  {
    id: 'd7_sleep',
    day: 7,
    dayLabel: '正月初五',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '最后的倔强',
    description: '明天就要走了。今晚是最后一个可以放肆的夜晚。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '甚至通宵',
        title: '甚至通宵',
        description: '抓住假期的尾巴，再看一部电影。',
        quote: '眼睛都睁不开了还在坚持。这是对上班的无声抗议。',
        impact: { health: -5, san: 5 }
      },
      {
        id: 'B',
        text: '甚至收拾',
        title: '甚至收拾',
        description: '把赢来的钱（如果有）塞进红包给老妈。',
        quote: '虽然平时不靠谱，但关键时刻还是懂事的。',
        impact: { face: 10, luck: 5 }
      }
    ]
  },
  // Day 8: 正月初六 (2月22日)
  {
    id: 'd8_morning',
    day: 8,
    dayLabel: '正月初六',
    timeOfDay: 'morning',
    timeLabel: '早上',
    title: '压缩算法：行李箱危机',
    description: '老妈开启了“空间折叠技术”展示。腊肉、香肠、特产，试图把整个菜市场塞进你的行李箱。箱子发出了即将爆炸的哀鸣。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '甚至抗议',
        title: '甚至抗议',
        description: '誓死抵抗：“妈，超重了！”',
        quote: '抵抗无效，老妈甚至塞进去了一口锅。你只能背着炸药包上路。',
        impact: { face: -5, health: -2 }
      },
      {
        id: 'B',
        text: '甚至顺从',
        title: '甚至顺从',
        description: '全盘接受，哪怕再买个箱子。',
        quote: '老妈很欣慰，你的肩膀在哭泣。这些够你吃半年了。',
        impact: { money: -300, face: 5 }
      },
      {
        id: 'C',
        text: '甚至偷拿',
        title: '甚至偷拿',
        description: '偷偷把东西拿出来。',
        quote: '回到出租屋才发现，那是老妈精心准备的土鸡蛋，全碎了。有点心酸。',
        impact: { san: -5, luck: -2 }
      }
    ]
  },
  {
    id: 'd8_afternoon',
    day: 8,
    dayLabel: '正月初六',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '盘点：盈亏结算',
    description: '坐在房间里，你掏出手机计算器和微信账单，进行年度财务审计。是赚了还是亏了，在此一举。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '甚至心痛',
        title: '甚至心痛',
        description: '仔细核对每一笔红包和牌局。',
        quote: '算来算去，大概亏了一个月工资。心痛得无法呼吸。',
        impact: { san: -10, health: -2 }
      },
      {
        id: 'B',
        text: '甚至糊涂',
        title: '甚至糊涂',
        description: '不看了，难得糊涂。',
        quote: '只要不知道亏了多少，就不算亏。精神胜利法万岁！',
        impact: { san: 10, luck: 5 }
      },
      {
        id: 'C',
        text: '甚至惊喜',
        title: '甚至惊喜',
        description: '发现竟然小赚一笔。',
        quote: '可能是老天爷看你太惨了。决定今晚请爸妈吃顿好的。',
        impact: { san: 15, luck: 10 }
      }
    ]
  },
  {
    id: 'd8_evening',
    day: 8,
    dayLabel: '正月初六',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '最后的晚餐：火锅洗礼',
    description: '离家前的最后一顿，必须是老火锅。牛油翻滚，热气腾腾。这不仅是食物，是川渝人的信仰充值。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '甚至特辣',
        title: '甚至特辣',
        description: '特辣！加麻加辣！',
        quote: '嘴巴肿了，菊花紧了，但灵魂满足了。这就是痛并快乐着。',
        impact: { health: -5, san: 10 }
      },
      {
        id: 'B',
        text: '甚至养生',
        title: '甚至养生',
        description: '点鸳鸯锅（微辣）。',
        quote: '被全家人鄙视：“你是不是在外面把胃养娇气了？”',
        impact: { face: -10, weight: 2 }
      },
      {
        id: 'C',
        text: '甚至肉食',
        title: '甚至肉食',
        description: '只吃肉不吃菜。',
        quote: '纯肉食动物的狂欢。老妈一直给你夹毛肚，甚至有点舍不得你走。',
        impact: { weight: 3, face: 5 }
      }
    ]
  },
  {
    id: 'd8_sleep',
    day: 8,
    dayLabel: '正月初六',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '离别焦虑',
    description: '想到明天就要离开这个每天能睡到自然醒的地方。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '甚至不舍',
        title: '甚至不舍',
        description: '闻着被子上的太阳味（或者火锅味）。',
        quote: '突然觉得老家也挺好的。除了亲戚烦点。',
        impact: { san: 5, health: 2 }
      },
      {
        id: 'B',
        text: '甚至期待',
        title: '甚至期待',
        description: '想到回去可以点外卖了。',
        quote: '虽然老妈做的饭好吃，但我想念黄焖鸡米饭了。',
        impact: { san: 2, health: -2 }
      }
    ]
  },
  // Day 9: 正月初七 (2月23日)
  {
    id: 'd9_morning',
    day: 9,
    dayLabel: '正月初七',
    timeOfDay: 'morning',
    timeLabel: '早上',
    title: '离巢：混乱早晨',
    description: '车票是上午十点。家里乱成一锅粥。找不到身份证、塞不进的特产、老妈的唠叨，构成了离别的交响曲。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '甚至淡定',
        title: '甚至淡定',
        description: '淡定指挥，确认所有物品。',
        quote: '居然没有丢三落四，这不科学。一定是昨晚火锅吃对了。',
        impact: { luck: 5, san: 5 }
      },
      {
        id: 'B',
        text: '甚至顺手',
        title: '甚至顺手',
        description: '慌乱中把老爸的烟揣兜里了。',
        quote: '到了车站才发现，老爸要骂街了，但你白嫖了一包中华。',
        impact: { money: 50, face: -5 }
      },
      {
        id: 'C',
        text: '甚至煽情',
        title: '甚至煽情',
        description: '拥抱父母，潇洒转身。',
        quote: '虽然很煽情，但你看到老妈偷偷抹眼泪，心里酸酸的。',
        impact: { san: 5, face: 5 }
      }
    ]
  },
  {
    id: 'd9_afternoon',
    day: 9,
    dayLabel: '正月初七',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '迁徙：高铁上的贤者时间',
    description: '高铁飞驰，窗外的风景从家乡的山水变成枯燥的工业区。狂欢结束，戒断反应袭来。你的 san 值正在波动。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '甚至补觉',
        title: '甚至补觉',
        description: '补觉，修复受损的肝。',
        quote: '一路睡到终点站，口水流了一地，但精神好多了。',
        impact: { health: 5, san: 5 }
      },
      {
        id: 'B',
        text: '甚至复盘',
        title: '甚至复盘',
        description: '复盘这几天的牌局。',
        quote: '越想越后悔那张牌没打对，恨不得跳车回去重来。',
        impact: { san: -5, luck: 2 }
      },
      {
        id: 'C',
        text: '甚至工贼',
        title: '甚至工贼',
        description: '打开工作软件，提前进入状态。',
        quote: '看到 99+ 的未读消息，你想当场去世。社畜模式启动。',
        impact: { san: -20, health: -2 }
      }
    ]
  },
  {
    id: 'd9_evening',
    day: 9,
    dayLabel: '正月初七',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '系统重启：回到出租屋',
    description: '推开冷清的出租屋房门，没有热腾腾的饭菜，只有落灰的地板。你放下沉重的行李（全是老妈的爱），春节副本正式通关。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '甚至下厨',
        title: '甚至下厨',
        description: '煮一碗老妈带的腊肉面。',
        quote: '真香！吃完这碗面，才有力气明天去搬砖。',
        impact: { san: 10, health: 2 }
      },
      {
        id: 'B',
        text: '甚至麻将',
        title: '甚至麻将',
        description: '立刻约同事：“三缺一吗？”',
        quote: '没救了。你的血液里流淌的不是红细胞，是麻将牌。',
        impact: { health: -5, luck: -5 }
      },
      {
        id: 'C',
        text: '甚至洗澡',
        title: '甚至洗澡',
        description: '洗个澡，定好明天闹钟。',
        quote: '回归现实。虽然有点残忍，但还要赚钱过下一个年啊。胡三万，加油！',
        impact: { health: 5, san: 5 }
      }
    ]
  },
  {
    id: 'd9_sleep',
    day: 9,
    dayLabel: '正月初七',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '游戏结束',
    description: '躺在出租屋的床上，周围安静得可怕。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '甚至期待',
        title: '甚至期待',
        description: '想着明年一定要赢回来。',
        quote: '赌徒心态要不得。但梦想还是要有的。',
        impact: { luck: 5 }
      },
      {
        id: 'B',
        text: '甚至疲惫',
        title: '甚至疲惫',
        description: '身体像是散架了。',
        quote: '终于可以好好睡一觉了。不用担心被吸尘器吵醒。',
        impact: { health: 10 }
      }
    ]
  },
];

export const huSanwanEndings: Ending[] = [
  {
    id: 'icu_mahjong',
    title: 'ICU 里的“清一色”',
    description: '正月初八，你缺席了晨会。不是睡过头，而是躺在急诊挂点滴。诊断书上写着“劳累过度引发的心律失常”。朋友圈里大家在晒开工红包，你却在和护士确认医保报销比例。这一趟春节，你赢了表哥、保住了面子，却彻底输了身体的底子。看着工作群的 99+ 消息，你只能虚弱地回一个“收到”。这哪里是充电，分明是电池报废。',
    condition: (stats) => stats.health < 10
  },
  {
    id: 'legend_mahjong',
    title: '满载而归的“雀坛传说”',
    description: '走出地铁站时，你的步伐轻盈得像在跳探戈。这一趟回家，你凭实力（和运气）给亲戚们上了一课，不仅没被催婚，反而收获了崇拜的目光。看着银行卡里多出来的几千块“过年基金”和塞满箱子的土特产，你的 San 值爆表。推开出租屋的门，你大喊一声“胡了！”，仿佛新的一年已经被你抓在手里，杠上开花。灵魂已满血复活。',
    condition: (stats) => stats.money > 23000 && stats.san > 95
  },
  {
    id: 'post_holiday_blues',
    title: '彷徨的“节后戒断症”',
    description: '闹钟无情响起，把你从“自摸清一色”的美梦中拽回现实。花了五分钟，你才确认自己已回到冰冷的出租屋。这一趟春节像场热闹的幻觉：钱没存下也没亏，腰酸背痛体重微涨。家乡的鞭炮声远去，取而代之的是早高峰的鸣笛。你叹了口气挤上牙膏，感到一种深深的空虚。这就是成年人的春节：短暂狂欢后，继续做回那个平凡的打工人。',
    condition: () => true // Default ending
  }
];