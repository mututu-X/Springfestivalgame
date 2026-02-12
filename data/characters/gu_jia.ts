
import { Character, GameEvent, Ending } from '../../types';

// Reuse default images for generic scenes
const DEFAULT_IMAGES = {
  morning: 'https://i.postimg.cc/T1vvSY5P/001.jpg',
  afternoon: 'https://i.postimg.cc/5yWWGNQ2/002.jpg',
  evening: 'https://i.postimg.cc/NFvvVf2M/003.jpg',
  sleep: 'https://i.postimg.cc/fyQQFTST/004.jpg'
};

export const guJiaChar: Character = {
  id: 'gu_jia',
  name: '顾嘉',
  avatar: 'https://i.postimg.cc/8PXVWrhd/104.jpg',
  tags: ['全职儿女·家务雇佣兵', '#新型啃老', '#忍辱负重'],
  roleDescription: '全职儿女·家务雇佣兵',
  bio: '“在这个家里，我的地位取决于今天地拖得干不干净。我是忍辱负重的‘忍者神龟’，为了那每个月两千块的‘全职儿女津贴’，我练就了在七大姑八大姨的嘲讽中微笑服务的本领。”',
  baseStats: {
    money: 66.6,
    weight: 54,
    face: -50,
    san: 60,
    health: 90,
    luck: 50,
  },
};

export const guJiaEvents: GameEvent[] = [
  // Day 1
  {
    id: 'd1_morning',
    day: 1,
    dayLabel: '腊月二十八',
    timeOfDay: 'morning',
    timeLabel: '早上',
    title: '登录服务器',
    description: '拖着半空的行李箱（毕竟没钱买年货）站在家门口，你深吸一口气。这是你的“职场”。从踏入这扇门开始，你就不是顾嘉，你是编号9527的家政服务员。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '主动出击',
        title: '主动出击',
        description: '一进门就抢过扫帚：“妈，放着我来！”',
        quote: '雇主（老妈）露出了满意的笑容。职场第一印象分+10。',
        impact: { face: 5, health: -2 }
      },
      {
        id: 'B',
        text: '汇报工作',
        title: '汇报工作',
        description: '先汇报：“妈，我刚考了营养师证，过年给你们露一手。”',
        quote: '画饼成功。老妈觉得这钱花得值。',
        impact: { face: 10, san: 2 }
      },
      {
        id: 'C',
        text: '试图摆烂',
        title: '试图摆烂',
        description: '“妈，我好累，想睡会儿。”',
        quote: '老妈脸色一沉：“刚回来就懒？隔壁二丫都知道帮家里干活。”开局不利。',
        impact: { face: -10, san: -5 }
      }
    ]
  },
  {
    id: 'd1_afternoon',
    day: 1,
    dayLabel: '腊月二十八',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '岗前培训',
    description: '老妈开启了“全职儿女绩效考核说明会”。重点包括：早起时间、菜品色泽、亲戚接待标准。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '全盘接受',
        title: '全盘接受',
        description: '拿出小本本记下来，频频点头。',
        quote: '态度端正。老妈给你发了200块“启动资金”（买菜钱）。',
        impact: { money: 200, san: -5 }
      },
      {
        id: 'B',
        text: '提出异议',
        title: '提出异议',
        description: '“妈，这比996还累，得加钱。”',
        quote: '谈判破裂。老妈使用了技能“养你这么大有什么用”，造成真实伤害。',
        impact: { san: -10, money: 0 }
      },
      {
        id: 'C',
        text: '左耳进右耳出',
        title: '左耳进右耳出',
        description: '表面答应，心里想待会儿去哪摸鱼。',
        quote: '消极怠工。但至少表面和平。',
        impact: { san: 5, luck: -2 }
      }
    ]
  },
  {
    id: 'd1_evening',
    day: 1,
    dayLabel: '腊月二十八',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '首顿工作餐',
    description: '晚饭时间，老爸想喝酒，老妈想喝汤。作为厨师长，你需要平衡各方需求。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '大厨风范',
        title: '大厨风范',
        description: '四菜一汤，荤素搭配。',
        quote: '完美出品。老爸夸你比外面馆子做得好。KPI 达标。',
        impact: { health: -5, face: 5 }
      },
      {
        id: 'B',
        text: '偷懒预制',
        title: '偷懒预制',
        description: '偷偷用预制菜加热。',
        quote: '老妈吃出来了：“这肉怎么一股塑料味？” 信任危机。',
        impact: { face: -5, san: -2 }
      },
      {
        id: 'C',
        text: '外卖伪装',
        title: '外卖伪装',
        description: '点个外卖装盘子里。',
        quote: '高风险高回报。只要藏好包装袋，这就是你的手艺。',
        impact: { money: -50, san: 5 }
      }
    ]
  },
  {
    id: 'd1_sleep',
    day: 1,
    dayLabel: '腊月二十八',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '员工宿舍',
    description: '躺在自己的小房间，虽然不用付房租，但感觉寄人篱下。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '精算时薪',
        title: '精算时薪',
        description: '计算今天的时薪。',
        quote: '大概 3 块 5 一小时。比黑奴还惨。',
        impact: { san: -5 }
      },
      {
        id: 'B',
        text: '知足常乐',
        title: '知足常乐',
        description: '至少有瓦遮头，有热饭吃。',
        quote: '自我PUA成功。安详入睡。',
        impact: { san: 5, health: 2 }
      }
    ]
  },
  // Day 2
  {
    id: 'd2_morning',
    day: 2,
    dayLabel: '腊月二十九',
    timeOfDay: 'morning',
    timeLabel: '早上',
    title: '深度保洁',
    description: '大扫除日。你需要擦窗户、洗窗帘、通下水道。这是体力活。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '深度清洁',
        title: '深度清洁',
        description: '爬高上低，甚至把油烟机拆了洗。',
        quote: '老妈看你的眼神充满了慈爱（像看一头好用的牛）。',
        impact: { health: -10, face: 10 }
      },
      {
        id: 'B',
        text: '自费外包',
        title: '自费外包',
        description: '花钱请小时工来干。',
        quote: '老妈大怒：“有钱没处花了？本来就是让你干活省钱的！”',
        impact: { money: -200, face: -10 }
      },
      {
        id: 'C',
        text: '表面功夫',
        title: '表面功夫',
        description: '只擦面上的灰，把垃圾扫到沙发底。',
        quote: '眼不见为净。只要不被发现，就是完成了任务。',
        impact: { san: 5, luck: -5 }
      }
    ]
  },
  {
    id: 'd2_afternoon',
    day: 2,
    dayLabel: '腊月二十九',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '采购员',
    description: '去超市采购年货。你需要精准控制预算，还要买到大家都喜欢的东西。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '精打细算',
        title: '精打细算',
        description: '货比三家，为了几毛钱排队领鸡蛋。',
        quote: '完美的家庭主妇/夫。省下的钱能不能进自己腰包？不行，要记账。',
        impact: { money: 10, san: -5 }
      },
      {
        id: 'B',
        text: '吃回扣',
        title: '吃回扣',
        description: '虚报价格，赚取差价。',
        quote: '你黑了 50 块买奶茶。这是合法的劳动报酬。',
        impact: { money: 50, san: 5 }
      },
      {
        id: 'C',
        text: '随心所欲',
        title: '随心所欲',
        description: '只买贵的，不买对的。',
        quote: '超预算了。回家被财务总监（老妈）骂了一顿。',
        impact: { money: -100, face: -5 }
      }
    ]
  },
  {
    id: 'd2_evening',
    day: 2,
    dayLabel: '腊月二十九',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '洗切配',
    description: '明天要来亲戚，今晚得备菜。你在厨房切了十斤土豆丝。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '大秀刀工',
        title: '大秀刀工',
        description: '展示精湛刀工，切得细如发丝。',
        quote: '老爸过来偷吃，夸你将来饿不死。谢谢，有被安慰到。',
        impact: { face: 5, health: -2 }
      },
      {
        id: 'B',
        text: '苦肉计',
        title: '苦肉计',
        description: '不小心切到手，申请工伤。',
        quote: '获得了创可贴一枚，并被免除了洗碗任务。因祸得福。',
        impact: { health: -5, san: 5 }
      },
      {
        id: 'C',
        text: '带薪摸鱼',
        title: '带薪摸鱼',
        description: '戴着耳机边听播客边切。',
        quote: '机械性劳动中寻找精神自由。',
        impact: { san: 5 }
      }
    ]
  },
  {
    id: 'd2_sleep',
    day: 2,
    dayLabel: '腊月二十九',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '手抖',
    description: '切菜切得手抖。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '自我理疗',
        title: '自我理疗',
        description: '自己按摩手腕。',
        quote: '这就是劳动人民的手。',
        impact: { health: 1 }
      },
      {
        id: 'B',
        text: '梦中罢工',
        title: '梦中罢工',
        description: '决定明天装病不干了。',
        quote: '梦里把围裙扔到了老妈脸上。爽。',
        impact: { san: 5 }
      }
    ]
  },
  // Day 3
  {
    id: 'd3_morning',
    day: 3,
    dayLabel: '正月初一',
    timeOfDay: 'morning',
    timeLabel: '早上',
    title: '接待员上线',
    description: '大姑一家来了。你的任务是端茶倒水，削水果，陪笑脸。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '跪式服务',
        title: '跪式服务',
        description: '跪式服务，笑容满面。',
        quote: '大姑夸你：“顾嘉真是越来越懂事了，以后是个好媳妇/女婿。”',
        impact: { face: 10, san: -10 }
      },
      {
        id: 'B',
        text: '职业假笑',
        title: '职业假笑',
        description: '皮笑肉不笑，放下水就走。',
        quote: '大姑觉得你有点傲气：“还是没工作闹的，性格孤僻。”',
        impact: { face: -5, san: 2 }
      },
      {
        id: 'C',
        text: '蓄意报复',
        title: '蓄意报复',
        description: '不小心把水洒在大姑裤子上。',
        quote: '你真的不是故意的吗？看着大姑跳脚，你内心毫无波澜。',
        impact: { face: -20, san: 10 }
      }
    ]
  },
  {
    id: 'd3_afternoon',
    day: 3,
    dayLabel: '正月初一',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '职业歧视',
    description: '大姑问起你的工作。老妈抢答：“在家备考呢，公务员。”',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '配合演戏',
        title: '配合演戏',
        description: '“对，正在复习申论。”',
        quote: '维护了老妈的面子。老妈投来赞许的目光。',
        impact: { face: 5, san: -5 }
      },
      {
        id: 'B',
        text: '坦白啃老',
        title: '坦白啃老',
        description: '“没考，我就在家啃老。”',
        quote: '全场死寂。老妈想当场把你逐出家门。你打破了虚伪的泡沫。',
        impact: { face: -50, san: 20 }
      },
      {
        id: 'C',
        text: '灵活就业',
        title: '灵活就业',
        description: '“我是自由职业，灵活就业。”',
        quote: '大姑：“哦，就是没工作呗。” 解释不清了。',
        impact: { face: -5, san: -2 }
      }
    ]
  },
  {
    id: 'd3_evening',
    day: 3,
    dayLabel: '正月初一',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '洗碗地狱',
    description: '客人走了，留下一桌狼藉。老妈累了，老爸醉了。洗碗的重任落在了你肩上。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '任劳任怨',
        title: '任劳任怨',
        description: '洗了两个小时，手都泡白了。',
        quote: '这是全职儿女的宿命。明天必须申请买个洗碗机。',
        impact: { health: -5, money: 50 }
      },
      {
        id: 'B',
        text: '碎岁平安',
        title: '碎岁平安',
        description: '“岁岁平安！”摔碎两个盘子。',
        quote: '老妈冲进厨房把你赶了出去。你成功下班。',
        impact: { money: -20, san: 10 }
      },
      {
        id: 'C',
        text: '拖延战术',
        title: '拖延战术',
        description: '泡在水里，明天再说。',
        quote: '拖延症的胜利。但明天还是要洗，而且更油。',
        impact: { san: 2, luck: -2 }
      }
    ]
  },
  {
    id: 'd3_sleep',
    day: 3,
    dayLabel: '正月初一',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '腰痛',
    description: '站了一天，腰快断了。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '贴膏药',
        title: '贴膏药',
        description: '贴张膏药。',
        quote: '这哪是过年，这是渡劫。',
        impact: { health: 2 }
      },
      {
        id: 'B',
        text: '浏览招聘',
        title: '浏览招聘',
        description: '打开招聘软件看一眼。',
        quote: '突然觉得上班也挺好的，至少有下班时间。',
        impact: { san: 5 }
      }
    ]
  },
  // Day 4
  {
    id: 'd4_morning',
    day: 4,
    dayLabel: '正月初二',
    timeOfDay: 'morning',
    timeLabel: '早上',
    title: '带娃服务',
    description: '表姐带着两个熊孩子来了。她去打牌，把孩子扔给你。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '金牌幼师',
        title: '金牌幼师',
        description: '带他们做游戏，讲故事。',
        quote: '孩子们很喜欢你，你觉得自己入错行了，应该去当幼师。',
        impact: { san: -5, face: 5 }
      },
      {
        id: 'B',
        text: '电子保姆',
        title: '电子保姆',
        description: '给个手机让他们自己玩。',
        quote: '虽然不负责任，但真轻松。只要别把手机摔了就行。',
        impact: { san: 5, luck: -2 }
      },
      {
        id: 'C',
        text: '恐吓教育',
        title: '恐吓教育',
        description: '“不听话警察叔叔就来抓你们。”',
        quote: '孩子们哭了。表姐回来骂了你一顿。',
        impact: { face: -10, san: 5 }
      }
    ]
  },
  {
    id: 'd4_afternoon',
    day: 4,
    dayLabel: '正月初二',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '讨薪谈判',
    description: '趁着老妈心情好，你决定谈谈待遇问题。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '要求加薪',
        title: '要求加薪',
        description: '“妈，过年这几天算三倍工资不？”',
        quote: '老妈笑了：“行，从你以后结婚的份子钱里扣。” 画饼大师。',
        impact: { money: 0, san: -2 }
      },
      {
        id: 'B',
        text: '索要首饰',
        title: '索要首饰',
        description: '“那把那个金手镯给我呗。”',
        quote: '“等你嫁出去了就给你。” 又是饼。',
        impact: { san: -5, luck: 2 }
      },
      {
        id: 'C',
        text: '讨要红包',
        title: '讨要红包',
        description: '“给我发个大红包冲冲喜。”',
        quote: '成功讨到 500 块。现金落袋为安。',
        impact: { money: 500, face: 2 }
      }
    ]
  },
  {
    id: 'd4_evening',
    day: 4,
    dayLabel: '正月初二',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '剩菜循环',
    description: '又是吃剩菜。你感觉自己是个厨余垃圾处理器。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '剩菜改造',
        title: '剩菜改造',
        description: '把剩菜炒成炒饭。',
        quote: '化腐朽为神奇。全家人抢着吃。',
        impact: { face: 5, weight: 1 }
      },
      {
        id: 'B',
        text: '怒点外卖',
        title: '怒点外卖',
        description: '“我不吃，我要点外卖。”',
        quote: '自己花钱买快乐。老妈骂你浪费，但你吃得开心。',
        impact: { money: -30, san: 5 }
      },
      {
        id: 'C',
        text: '秘密销毁',
        title: '秘密销毁',
        description: '偷偷倒掉。',
        quote: '罪过罪过。但是为了健康，值得。',
        impact: { health: 2, luck: -2 }
      }
    ]
  },
  {
    id: 'd4_sleep',
    day: 4,
    dayLabel: '正月初二',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '职业规划',
    description: '睡不着，思考未来。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '考公上岸',
        title: '考公上岸',
        description: '要不真去考个公？',
        quote: '宇宙的尽头是编制。',
        impact: { san: -2 }
      },
      {
        id: 'B',
        text: '网红博主',
        title: '网红博主',
        description: '做个“全职儿女”博主？',
        quote: '拍拍日常没准能火。',
        impact: { money: 0, san: 5 }
      }
    ]
  },
  // Day 5
  {
    id: 'd5_morning',
    day: 5,
    dayLabel: '正月初三',
    timeOfDay: 'morning',
    timeLabel: '早上',
    title: '相亲？不，是面试',
    description: '老妈居然给你安排了相亲。对方听说你全职在家，眼神变了。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '简历美化',
        title: '简历美化',
        description: '“我是家庭资产管理员。”',
        quote: '对方肃然起敬。高端大气上档次。',
        impact: { face: 10, luck: 2 }
      },
      {
        id: 'B',
        text: '摆烂劝退',
        title: '摆烂劝退',
        description: '“我就在家混吃等死。”',
        quote: '对方吓跑了。你成功劝退了一个潜在的麻烦。',
        impact: { face: -20, san: 10 }
      },
      {
        id: 'C',
        text: '反向面试',
        title: '反向面试',
        description: '“你有房有车有存款吗？养得起我吗？”',
        quote: '把压力给到对方。只要我要求高，我就不会被剩下。',
        impact: { san: 5, face: -5 }
      }
    ]
  },
  {
    id: 'd5_afternoon',
    day: 5,
    dayLabel: '正月初三',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '外出透气',
    description: '实在不想在家里待了，想出去透气。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '借口学习',
        title: '借口学习',
        description: '“我去图书馆学习。”',
        quote: '老妈很高兴，给了你 50 块买咖啡。其实你是去网吧。',
        impact: { money: 50, san: 10 }
      },
      {
        id: 'B',
        text: '小区溜达',
        title: '小区溜达',
        description: '在小区楼下坐了一下午。',
        quote: '看大爷下棋都比在家里听唠叨强。',
        impact: { san: 5, health: 2 }
      },
      {
        id: 'C',
        text: '只逛不买',
        title: '只逛不买',
        description: '去商场只逛不买。',
        quote: '蹭蹭空调，看看人间烟火。',
        impact: { money: 0, san: 2 }
      }
    ]
  },
  {
    id: 'd5_evening',
    day: 5,
    dayLabel: '正月初三',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '家庭矛盾',
    description: '因为一点小事（比如地没拖干净）和老妈吵架了。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '硬气顶嘴',
        title: '硬气顶嘴',
        description: '“我不干了！我要辞职！”',
        quote: '老妈冷笑：“辞职？去哪？这房子是我的。” 寄人篱下的悲哀。',
        impact: { san: -10, face: -5 }
      },
      {
        id: 'B',
        text: '冷战防御',
        title: '冷战防御',
        description: '关门，戴耳机，冷战。',
        quote: '最有效的防御。',
        impact: { san: 5, face: -2 }
      },
      {
        id: 'C',
        text: '滑跪道歉',
        title: '滑跪道歉',
        description: '“妈我错了，我这就拖。”',
        quote: '为了生存，尊严算什么。忍辱负重 +1。',
        impact: { face: -5, money: 20 }
      }
    ]
  },
  {
    id: 'd5_sleep',
    day: 5,
    dayLabel: '正月初三',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '深夜委屈',
    description: '委屈。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '海投简历',
        title: '海投简历',
        description: '半夜疯狂投简历。',
        quote: '哪怕去端盘子也不想受这气了。',
        impact: { san: 5 }
      },
      {
        id: 'B',
        text: '萌宠治愈',
        title: '萌宠治愈',
        description: '看猫猫视频治愈自己。',
        quote: '猫真可爱。想养猫。',
        impact: { san: 2 }
      }
    ]
  },
  // Day 6
  {
    id: 'd6_morning',
    day: 6,
    dayLabel: '正月初四',
    timeOfDay: 'morning',
    timeLabel: '早上',
    title: '虚假和平',
    description: '早起老妈给你做了爱心早餐，仿佛昨晚的吵架没发生过。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '虚假感动',
        title: '虚假感动',
        description: '“妈，你真好。”',
        quote: '中国式亲子关系：没有道歉，只有吃饭。',
        impact: { san: 5, face: 2 }
      },
      {
        id: 'B',
        text: '保持警惕',
        title: '保持警惕',
        description: '“无事献殷勤，非奸即盗。”',
        quote: '果然，老妈让你今天把窗帘全拆下来洗了。',
        impact: { san: -2, health: -5 }
      },
      {
        id: 'C',
        text: '卖萌撒娇',
        title: '卖萌撒娇',
        description: '蹭过去求抱抱。',
        quote: '老妈嫌弃地推开你，但嘴角在笑。',
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
    title: '才艺展示',
    description: '为了哄老妈开心（少干点活），你决定展示才艺。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '专业技师',
        title: '专业技师',
        description: '给老妈按肩。',
        quote: '手法专业。老妈给你发了 100 块小费。',
        impact: { money: 100, health: -2 }
      },
      {
        id: 'B',
        text: '烘焙讨好',
        title: '烘焙讨好',
        description: '用空气炸锅做蛋挞。',
        quote: '虽然焦了，但心意到了。',
        impact: { face: 5, weight: 1 }
      },
      {
        id: 'C',
        text: '安利抖音',
        title: '安利抖音',
        description: '教老妈用抖音拍视频。',
        quote: '老妈沉迷抖音，再也没空管你了。计划通！',
        impact: { san: 10, luck: 5 }
      }
    ]
  },
  {
    id: 'd6_evening',
    day: 6,
    dayLabel: '正月初四',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '合家欢',
    description: '全家一起看电视，难得的温馨时刻。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '共同吐槽',
        title: '共同吐槽',
        description: '一起吐槽剧里的反派。',
        quote: '统一战线。其乐融融。',
        impact: { san: 5 }
      },
      {
        id: 'B',
        text: '贴心服务',
        title: '贴心服务',
        description: '给爸妈剥橘子。',
        quote: '这就是平凡的幸福吧。',
        impact: { health: 1 }
      },
      {
        id: 'C',
        text: '恶意剧透',
        title: '恶意剧透',
        description: '忍不住剧透结局。',
        quote: '被全家混合双打。',
        impact: { health: -5, face: -2 }
      }
    ]
  },
  {
    id: 'd6_sleep',
    day: 6,
    dayLabel: '正月初四',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '难得安稳',
    description: '今晚睡得很香。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '养生早睡',
        title: '养生早睡',
        description: '10点就睡了。',
        quote: '养生。',
        impact: { health: 5 }
      },
      {
        id: 'B',
        text: '美梦发财',
        title: '美梦发财',
        description: '梦见发财了。',
        quote: '给爸妈买了大别墅。',
        impact: { san: 2 }
      }
    ]
  },
  // Day 7
  {
    id: 'd7_morning',
    day: 7,
    dayLabel: '正月初五',
    timeOfDay: 'morning',
    timeLabel: '早上',
    title: '送客服务',
    description: '最后一波亲戚来访。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '假笑送客',
        title: '假笑送客',
        description: '保持职业假笑直到脸僵。',
        quote: '完美的送客服务。',
        impact: { face: 5, san: -2 }
      },
      {
        id: 'B',
        text: '闭门谢客',
        title: '闭门谢客',
        description: '躲在房间不出来。',
        quote: '“顾嘉不在家。”',
        impact: { san: 5, face: -5 }
      },
      {
        id: 'C',
        text: '清理库存',
        title: '清理库存',
        description: '把剩下的年货打包给亲戚带走。',
        quote: '清理库存，皆大欢喜。',
        impact: { face: 5, san: 2 }
      }
    ]
  },
  {
    id: 'd7_afternoon',
    day: 7,
    dayLabel: '正月初五',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '终于解放',
    description: '亲戚都走完了，年也过完了。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '彻底躺平',
        title: '彻底躺平',
        description: '在沙发上躺成一滩泥。',
        quote: '舒服。',
        impact: { health: 2, san: 5 }
      },
      {
        id: 'B',
        text: '畅玩游戏',
        title: '畅玩游戏',
        description: '玩一下午游戏。',
        quote: '没人管的感觉真好。',
        impact: { san: 10, health: -2 }
      },
      {
        id: 'C',
        text: '深度收纳',
        title: '深度收纳',
        description: '把家里彻底收拾干净。',
        quote: '强迫症一本满足。',
        impact: { san: 5, health: -5 }
      }
    ]
  },
  {
    id: 'd7_evening',
    day: 7,
    dayLabel: '正月初五',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '深度谈心',
    description: '和爸妈认真聊聊未来。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '画饼承诺',
        title: '画饼承诺',
        description: '“我一定努力找工作。”',
        quote: '爸妈叹气：“不用太累，家里有口饭吃。” 泪目。',
        impact: { san: 10, face: 5 }
      },
      {
        id: 'B',
        text: '誓死啃老',
        title: '誓死啃老',
        description: '“我就在家陪你们一辈子。”',
        quote: '老妈：“想得美，赶紧嫁人。”',
        impact: { face: -5, san: -2 }
      },
      {
        id: 'C',
        text: '感恩回馈',
        title: '感恩回馈',
        description: '给爸妈发了感恩红包。',
        quote: '虽然不多，但是心意。',
        impact: { money: -200, face: 5 }
      }
    ]
  },
  {
    id: 'd7_sleep',
    day: 7,
    dayLabel: '正月初五',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '安稳入睡',
    description: '明天不用早起。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '安稳入睡',
        title: '安稳入睡',
        description: '睡个好觉。',
        quote: '晚安。',
        impact: { health: 5 }
      },
      {
        id: 'B',
        text: '报复熬夜',
        title: '报复熬夜',
        description: '再玩会儿手机。',
        quote: '舍不得睡。',
        impact: { health: -2 }
      }
    ]
  },
  // Day 8
  {
    id: 'd8_morning',
    day: 8,
    dayLabel: '正月初六',
    timeOfDay: 'morning',
    timeLabel: '早上',
    title: '合同谈判',
    description: '年过完了，该谈谈接下来的安排了。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '续签合同',
        title: '续签合同',
        description: '继续全职儿女合同。',
        quote: '老妈同意了，但要求涨 KPI（多干活）。',
        impact: { money: 0, san: -2 }
      },
      {
        id: 'B',
        text: '决定离职',
        title: '决定离职',
        description: '决定出去找工作。',
        quote: '爸妈表示支持，但也舍不得。',
        impact: { san: 5, face: 5 }
      },
      {
        id: 'C',
        text: '拓展副业',
        title: '拓展副业',
        description: '一边在家一边做副业。',
        quote: '理想状态。',
        impact: { money: 10, san: 5 }
      }
    ]
  },
  {
    id: 'd8_afternoon',
    day: 8,
    dayLabel: '正月初六',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '收支复盘',
    description: '算算这个春节的收支。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '小赚一笔',
        title: '小赚一笔',
        description: '红包比支出多。',
        quote: '这就是全职儿女的年终奖。',
        impact: { money: 1000, san: 10 }
      },
      {
        id: 'B',
        text: '血本无归',
        title: '血本无归',
        description: '为了面子花了不少。',
        quote: '明年不装了。',
        impact: { san: -5 }
      },
      {
        id: 'C',
        text: '收支平衡',
        title: '收支平衡',
        description: '不赚不亏。',
        quote: '白干一场。',
        impact: { san: 0 }
      }
    ]
  },
  {
    id: 'd8_evening',
    day: 8,
    dayLabel: '正月初六',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '独自庆祝',
    description: '自己买点好吃的庆祝活下来了。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '路边烧烤',
        title: '路边烧烤',
        description: '路边摊烧烤。',
        quote: '一个人的狂欢。',
        impact: { money: -50, san: 5 }
      },
      {
        id: 'B',
        text: '全糖奶茶',
        title: '全糖奶茶',
        description: '大杯全糖。',
        quote: '甜度爆表。',
        impact: { weight: 1, san: 5 }
      },
      {
        id: 'C',
        text: '清扫剩饭',
        title: '清扫剩饭',
        description: '回家吃剩饭。',
        quote: '我是省钱小能手。',
        impact: { money: 0, face: -2 }
      }
    ]
  },
  {
    id: 'd8_sleep',
    day: 8,
    dayLabel: '正月初六',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '展望未来',
    description: '新的一年。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '渴望暴富',
        title: '渴望暴富',
        description: '希望能暴富。',
        quote: '梦想总要有的。',
        impact: { san: 5 }
      },
      {
        id: 'B',
        text: '前途迷茫',
        title: '前途迷茫',
        description: '不知道路在何方。',
        quote: '睡吧，梦里有答案。',
        impact: { san: -2 }
      }
    ]
  },
  // Day 9
  {
    id: 'd9_morning',
    day: 9,
    dayLabel: '正月初七',
    timeOfDay: 'morning',
    timeLabel: '早上',
    title: '开工仪式',
    description: '虽然没有正式工作，但也要有开工仪式感。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '开工大吉',
        title: '开工大吉',
        description: '把全家再打扫一遍。',
        quote: '新的一年，从干净开始。',
        impact: { face: 5, health: -2 }
      },
      {
        id: 'B',
        text: '考证学习',
        title: '考证学习',
        description: '开始看书考证。',
        quote: '提升自己才是硬道理。',
        impact: { san: 5, face: 5 }
      },
      {
        id: 'C',
        text: '继续摆烂',
        title: '继续摆烂',
        description: '继续躺平。',
        quote: '只要我不急，急的就是别人。',
        impact: { health: 2, san: 2 }
      }
    ]
  },
  {
    id: 'd9_afternoon',
    day: 9,
    dayLabel: '正月初七',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '悠闲午后',
    description: '给自己泡杯茶。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '悠闲下午',
        title: '悠闲下午',
        description: '晒太阳喝茶。',
        quote: '全职儿女也有春天。',
        impact: { san: 5 }
      },
      {
        id: 'B',
        text: '裁员危机',
        title: '裁员危机',
        description: '担心被裁员（被赶出家门）。',
        quote: '居安思危。',
        impact: { san: -2 }
      }
    ]
  },
  {
    id: 'd9_evening',
    day: 9,
    dayLabel: '正月初七',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '最终章',
    description: '春节结束了。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '自我肯定',
        title: '自我肯定',
        description: '觉得自己表现不错。',
        quote: '优秀员工。',
        impact: { san: 5 }
      },
      {
        id: 'B',
        text: '略有遗憾',
        title: '略有遗憾',
        description: '还是没存下钱。',
        quote: '明年再战。',
        impact: { san: -2 }
      }
    ]
  },
  {
    id: 'd9_sleep',
    day: 9,
    dayLabel: '正月初七',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '晚安打工',
    description: '晚安，打工人。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '安心睡眠',
        title: '安心睡眠',
        description: '睡了。',
        quote: '呼噜。',
        impact: { health: 5 }
      }
    ]
  },
];

export const guJiaEndings: Ending[] = [
  {
    id: 'gold_medal_servant',
    title: '金牌“家政”CEO',
    description: '你在春节期间展现出的惊人家务能力和情绪价值提供能力，彻底征服了全家族。不仅父母对你言听计从，连七大姑八大姨都争着想雇你。你意识到，“全职儿女”不仅是一份工作，更是一门艺术。你决定将这份事业做大做强，甚至开始规划“家庭服务标准化流程”。虽然存款不多，但你在家里的地位固若金汤，成为了不可或缺的核心成员。',
    condition: (stats) => stats.face > 80 && stats.san > 70
  },
  {
    id: 'fired',
    title: '被“优化”的啃老族',
    description: '春节结束的第二天，老妈冷着脸递给你一张招聘启事的报纸。由于你在过年期间表现出的懒惰、顶嘴和消极怠工，你的“全职儿女”合同被单方面终止。你失去了免费的食宿和每月的津贴，被迫在这个寒冷的春天被扫地出门。你拖着行李箱站在街头，明白了职场的残酷——哪怕老板是你妈，干不好也得滚蛋。',
    condition: (stats) => stats.face < -20 || stats.san < 20
  },
  {
    id: 'peaceful_parasite',
    title: '安稳的“寄生虫”',
    description: '日子像温吞水一样过去了。你没有大富大贵，也没有被赶出家门。你学会了在父母的唠叨中寻找生存空间，练就了左耳进右耳出的神功。虽然偶尔会焦虑未来，但看着碗里的红烧肉，你觉得这样混着也挺好。你成为了这个社会庞大“蹲族”中普通而安稳的一员，在舒适圈里躺平，等待着命运的下一次审判。',
    condition: () => true // Default ending
  }
];
