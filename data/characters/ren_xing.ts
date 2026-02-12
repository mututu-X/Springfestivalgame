

import { Character, GameEvent, Ending } from '../../types';

// Reuse default images for generic scenes
const DEFAULT_IMAGES = {
  morning: '/image/common/001.jpg',
  afternoon: '/image/common/002.jpg',
  evening: '/image/common/003.jpg',
  sleep: '/image/common/004.jpg'
};

export const renXingChar: Character = {
  id: 'ren_xing',
  name: '任兴',
  avatar: '/image/roleicon/105.jpg',
  tags: ['发疯学者·职场整顿版', '#素质消失术', '#哪壶不开提哪壶'],
  roleDescription: '发疯学者·职场整顿版',
  bio: '“大伯，您退休金多少？够去养老院 ICU 住几天？表哥，学区房买了吗？嫂子怎么没回来？哦离了啊。——只要我先发疯，就没人能道德绑架我。放下素质，享受缺德人生。”',
  baseStats: {
    money: 5000,
    weight: 50,
    face: 0,
    san: 100,
    health: 85,
    luck: 20,
  },
};

export const renXingEvents: GameEvent[] = [
  // Day 1: 腊月二十八 (2月15日)
  {
    id: 'd1_morning',
    day: 1,
    dayLabel: '腊月二十八',
    timeOfDay: 'morning',
    timeLabel: '早上',
    title: '铁龙运尸车',
    description: '高铁二等座，你的脊椎正在进行一场名为‘归乡’的耐力测试。后座的熊孩子正在对你的椅背进行高频物理打击，其监护人正以 80 分贝外放短视频。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '物理防御',
        title: '物理防御',
        description: '戴上降噪耳机，忍气吞声。',
        quote: '你试图用科技屏蔽现实，但物理震动让你的肾上腺素飙升。你的忍耐值 -10。',
        impact: { san: -10, health: -2 }
      },
      {
        id: 'B',
        text: '魔法对轰',
        title: '魔法对轰',
        description: '转头加入他们：“这视频真好笑，来，我也给你们放个大悲咒！”',
        quote: '只要你比他们更癫，尴尬的就是别人。车厢安静了，你获得了‘赛博疯狗’称号。',
        impact: { san: 10, face: -5 }
      },
      {
        id: 'C',
        text: '阴阳怪气',
        title: '阴阳怪气',
        description: '“小朋友腿劲儿真大，以后进厂打螺丝肯定是一把好手。”',
        quote: '监护人翻了个白眼骂你神经病，但熊孩子确实停了一会儿。',
        impact: { san: 5, face: -2 }
      }
    ]
  },
  {
    id: 'd1_afternoon',
    day: 1,
    dayLabel: '腊月二十八',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '边境安检（进村）',
    description: '拖着行李箱踏入村口的瞬间，村口情报中心（大妈团）的雷达瞬间锁定了你。她们眼神如 X 光，正在扫描你的衣着品牌、发量以及是否携带异性伴侣。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '虚张声势',
        title: '虚张声势',
        description: '假装打电话：“喂？几千万的项目别找我，我在休假！”',
        quote: '大妈们被你的气场镇住，村口情报库更新：这小子在外面发了。',
        impact: { face: 10, luck: -5 }
      },
      {
        id: 'B',
        text: '先发制人',
        title: '先发制人',
        description: '主动出击：“哟，王婶，您孙子期末考几分？二胎怀上了吗？退休金涨了吗？”',
        quote: '这就是【素质消失术】！大妈团溃不成军，你成功突围。',
        impact: { san: 15, face: -10 }
      },
      {
        id: 'C',
        text: '潜行失败',
        title: '潜行失败',
        description: '低头疾走，唯唯诺诺。',
        quote: '你成为了她们接下来三天的笑料素材：‘看老任家那小子，混得不行。’',
        impact: { san: -5, face: -5 }
      }
    ]
  },
  {
    id: 'd1_evening',
    day: 1,
    dayLabel: '腊月二十八',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '饲养员的投喂',
    description: '晚饭桌上，母上大人开启了‘填鸭式’投喂模式。碗里的红烧肉堆成了金字塔，父皇在一旁擦拭着那瓶珍藏的散装白酒。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '舍命陪君子',
        title: '舍命陪君子',
        description: '来者不拒，狂炫三碗。',
        quote: '为了家庭和谐，你献祭了自己的胃。爸妈很满意，你的血糖很伤心。',
        impact: { weight: 2, health: -5 }
      },
      {
        id: 'B',
        text: '科技养生',
        title: '科技养生',
        description: '掏出体检报告：“医生说我这肝，再喝就得换义体了。”',
        quote: '父母吓坏了，当场转给你 200 块买营养品。计划通。',
        impact: { money: 200, health: 2 }
      },
      {
        id: 'C',
        text: '发疯文学',
        title: '发疯文学',
        description: '“吃！都吃！吃饱了好上路（指上班）！”',
        quote: '空气突然安静，爸妈觉得你在大城市压力太大，脑子坏掉了。',
        impact: { san: 5, face: -5 }
      }
    ]
  },
  {
    id: 'd1_sleep',
    day: 1,
    dayLabel: '腊月二十八',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '认床综合征',
    description: '习惯了出租屋的硬板床，家里的软床让你腰疼。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '彻底裸睡',
        title: '彻底裸睡',
        description: '脱光，释放天性。',
        quote: '反正门锁了，这就是我的绝对领域。',
        impact: { san: 5, health: -2 }
      },
      {
        id: 'B',
        text: '报复熬夜',
        title: '报复熬夜',
        description: '翻看这几天没看的小说。',
        quote: '这是报复性熬夜，是对白天不得不做人的补偿。',
        impact: { san: 5, health: -5 }
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
    title: '生物钟强行校准',
    description: '早上 6 点，吸尘器撞击房门的频率与你心跳共振。伴随着‘太阳晒屁股’的古老咒语。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '回光返照',
        title: '回光返照',
        description: '诈尸般起床：“我爱劳动！劳动使我快乐！”',
        quote: '你违背了生物本能，获得了母亲的赞赏和一整天的萎靡不振。',
        impact: { san: -10, health: -2 }
      },
      {
        id: 'B',
        text: '物理防御',
        title: '物理防御',
        description: '反锁房门，带上耳塞，继续昏迷。',
        quote: '你在梦中构建了防御工事。但这会被记入‘不懂事’的小本本。',
        impact: { san: 5, face: -5 }
      },
      {
        id: 'C',
        text: '阴暗爬行',
        title: '阴暗爬行',
        description: '在床上阴暗爬行并发出怪叫。',
        quote: '母亲默默关上了门，并怀疑你中邪了，你成功捍卫了睡眠权。',
        impact: { san: 10, face: -10 }
      }
    ]
  },
  {
    id: 'd2_afternoon',
    day: 2,
    dayLabel: '腊月二十九',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '大扫除特种兵',
    description: '全家大扫除。父亲在一旁指挥，不仅不动手，还发表‘现在的年轻人干活不行’的评论音轨。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '任劳任怨',
        title: '任劳任怨',
        description: '老实干活，不仅擦窗还把厕所刷了。',
        quote: '你成了免费劳动力，但不仅腰酸背痛，还被奖励了一个苹果。',
        impact: { health: -5, money: 100 }
      },
      {
        id: 'B',
        text: '假装工伤',
        title: '假装工伤',
        description: '“爸，这玻璃太高，我这老腰是工伤，算了吧。”',
        quote: '你成功偷懒，父亲一边骂一边自己爬上去擦了。',
        impact: { health: 2, face: -5 }
      },
      {
        id: 'C',
        text: '反向PUA',
        title: '反向PUA',
        description: '把抹布扔给父亲：“您是总指挥，这种核心技术还得您亲自展示！”',
        quote: '你用职场 PUA 术反向管理了父亲。他干得很起劲，你在旁边玩手机。',
        impact: { san: 10, luck: 2 }
      }
    ]
  },
  {
    id: 'd2_evening',
    day: 2,
    dayLabel: '腊月二十九',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '电视遥控器争夺战',
    description: '父母想看《抗日神剧》，你想投屏看发疯视频。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '阴阳捧哏',
        title: '阴阳捧哏',
        description: '陪父母看神剧，并真心点评特效。',
        quote: '你的智商受到了侮辱，但父母觉得你很孝顺。',
        impact: { san: -5, face: 5 }
      },
      {
        id: 'B',
        text: '断绝交流',
        title: '断绝交流',
        description: '回房间玩手机，断绝物理交流。',
        quote: '逃避可耻但有用。这是属于你的赛博避难所。',
        impact: { san: 5, face: -2 }
      },
      {
        id: 'C',
        text: '强制安利',
        title: '强制安利',
        description: '强行投屏鬼畜视频：“爸妈，这是现在的潮流文化，学习一下！”',
        quote: '父母看着屏幕上的鬼畜画面陷入沉思，随后没收了遥控器。',
        impact: { san: 15, face: -10 }
      }
    ]
  },
  {
    id: 'd2_sleep',
    day: 2,
    dayLabel: '腊月二十九',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '深夜亢奋',
    description: '精神抖擞，不想睡觉。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '颅内蹦迪',
        title: '颅内蹦迪',
        description: '带上耳机，在床上云蹦迪。',
        quote: '床板在震动，灵魂在飞升。',
        impact: { san: 5, health: -2 }
      },
      {
        id: 'B',
        text: '生化夜宵',
        title: '生化夜宵',
        description: '煮一包螺蛳粉。',
        quote: '整个家都弥漫着独特的味道。你妈以为厕所炸了。',
        impact: { weight: 1, face: -5 }
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
    title: '亲戚围城·初级版',
    description: '七大姑八大姨已刷新。话题直指你的工资、对象和房产。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '凡尔赛语',
        title: '凡尔赛语',
        description: '“哎呀，年薪不到百万，也就是混口饭吃。”',
        quote: '你装到了，但代价是接下来几天你要发巨额红包来圆谎。',
        impact: { money: -800, face: 20 }
      },
      {
        id: 'B',
        text: '反手借钱',
        title: '反手借钱',
        description: '“阿姨借点钱吧，我在外面欠了高利贷，正愁没钱还呢。”',
        quote: '亲戚们瞬间闭嘴，并以光速离开了你家。世界清静了。',
        impact: { san: 20, face: -20 }
      },
      {
        id: 'C',
        text: '精准毒舌',
        title: '精准毒舌',
        description: '“二姨，您这双眼皮割得有点不对称啊。”',
        quote: '精准打击！二姨捂着脸走了，你被你妈狠狠掐了一下。',
        impact: { san: 10, health: -2 }
      }
    ]
  },
  {
    id: 'd3_afternoon',
    day: 3,
    dayLabel: '正月初一',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '熊孩子拆家联盟',
    description: '表弟指着你的限量版手办：“哥哥，我要这个！”',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '断臂求生',
        title: '断臂求生',
        description: '“拿去吧，这是哥哥的命...”',
        quote: '你是个好哥哥，但你心在滴血。表弟五分钟后把它摔断了。',
        impact: { money: -500, san: -20 }
      },
      {
        id: 'B',
        text: '魔鬼劝学',
        title: '魔鬼劝学',
        description: '拿出一套《五年高考三年模拟》：“想要吗？做完这一本就送你。”',
        quote: '表弟尖叫着跑了，你维护了知识的尊严。',
        impact: { san: 10, luck: 5 }
      },
      {
        id: 'C',
        text: '灵异恐吓',
        title: '灵异恐吓',
        description: '告诉他：“这个娃娃晚上会动，还会吃小孩手指头。”',
        quote: '表弟被吓哭了，你被姑姑骂了‘没个正经’，但手办保住了。',
        impact: { san: 15, face: -5 }
      }
    ]
  },
  {
    id: 'd3_evening',
    day: 3,
    dayLabel: '正月初一',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '酒精修罗场',
    description: '长辈们拿出了珍藏的‘土味茅台’。劝酒词一套一套的。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '豪饮断片',
        title: '豪饮断片',
        description: '喝！喝到断片！',
        quote: '你喝吐了，长辈们夸你豪爽。第二天你会后悔出生。',
        impact: { health: -20, face: 10 }
      },
      {
        id: 'B',
        text: '硬核借口',
        title: '硬核借口',
        description: '“我备孕呢。”（无论男女）',
        quote: '全场震惊。这理由太硬核，没人敢劝了，只剩下窃窃私语。',
        impact: { san: 10, face: -10 }
      },
      {
        id: 'C',
        text: '反客为主',
        title: '反客为主',
        description: '“来！我干了！谁不喝谁孙子！大舅你养鱼呢？”',
        quote: '你反客为主，把长辈们劝怕了。【素质消失术】大成功。',
        impact: { san: 20, health: -5 }
      }
    ]
  },
  {
    id: 'd3_sleep',
    day: 3,
    dayLabel: '正月初一',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '醉后梦呓',
    description: '酒精上头，梦里还在划拳。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '梦话连篇',
        title: '梦话连篇',
        description: '大喊一声“五魁首啊”。',
        quote: '把起夜的你爸吓了一跳。',
        impact: { face: -2 }
      },
      {
        id: 'B',
        text: '起夜找水',
        title: '起夜找水',
        description: '半夜起来找水喝。',
        quote: '像个游魂一样在客厅游荡。',
        impact: { health: -2 }
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
    title: '别人家的孩子',
    description: '邻居王阿姨带着考上公务员的儿子来串门。自带‘圣光’BUFF。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '虚伪奉承',
        title: '虚伪奉承',
        description: '全程陪笑，点头哈腰。',
        quote: '你成了背景板，衬托了红花的鲜艳。由于过于卑微，SAN 值狂掉。',
        impact: { san: -15, face: -5 }
      },
      {
        id: 'B',
        text: '无情拆台',
        title: '无情拆台',
        description: '“听说这岗位天天加班还没加班费，真的吗？”',
        quote: '哪壶不开提哪壶。对方笑容凝固，王阿姨觉得你嫉妒心重。',
        impact: { san: 5, face: -10 }
      },
      {
        id: 'C',
        text: '当场结拜',
        title: '当场结拜',
        description: '“以后犯了事就靠兄弟你捞我了！”',
        quote: '成功把对方拉下水。王阿姨拉着儿子赶紧跑了，生怕沾上晦气。',
        impact: { san: 10, face: -20 }
      }
    ]
  },
  {
    id: 'd4_afternoon',
    day: 4,
    dayLabel: '正月初二',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '相亲陷阱',
    description: '被骗到咖啡馆相亲。对面坐着一位同样满脸写着‘想死’的异性。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '无效社交',
        title: '无效社交',
        description: '正常交流，互通有无。',
        quote: '平平淡淡，你们加了微信然后互躺尸体列表。',
        impact: { money: -50, face: 5 }
      },
      {
        id: 'B',
        text: '戏精附体',
        title: '戏精附体',
        description: '“你好，我是不婚主义者，咱俩凑合演个戏？”',
        quote: '对方眼中有了光，你们愉快地打了一下午王者荣耀。',
        impact: { san: 10, money: 0 }
      },
      {
        id: 'C',
        text: '硬核推销',
        title: '硬核推销',
        description: '“了解一下安利吗？或者是我的保险业务？”',
        quote: '对方落荒而逃。你妈接到介绍人电话，说你脑子是不是有坑。',
        impact: { san: 20, face: -10 }
      }
    ]
  },
  {
    id: 'd4_evening',
    day: 4,
    dayLabel: '正月初二',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '牌桌风云',
    description: '三缺一，你被拉上桌。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '散财童子',
        title: '散财童子',
        description: '故意点炮，输钱买开心。',
        quote: '长辈们赢钱了夸你懂事，你钱包瘪了但家庭地位暂时上升。',
        impact: { money: -500, face: 10 }
      },
      {
        id: 'B',
        text: '冷血雀神',
        title: '冷血雀神',
        description: '六亲不认，算牌狂魔。',
        quote: '你赢光了三姑的买菜钱。气氛很尴尬，但钱很香。',
        impact: { money: 300, face: -15 }
      },
      {
        id: 'C',
        text: '当场做法',
        title: '当场做法',
        description: '边打边做法：“天灵灵地灵灵，把你们的钱都吸过来！”',
        quote: '你的精神攻击干扰了他们的牌运。牌局不欢而散。',
        impact: { san: 10, face: -15 }
      }
    ]
  },
  {
    id: 'd4_sleep',
    day: 4,
    dayLabel: '正月初二',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '深夜盘点',
    description: '赢了钱/输了钱睡不着。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '数钱取乐',
        title: '数钱取乐',
        description: '反复数那赢来的 300 块。',
        quote: '这是凭本事赢的，不丢人。睡着了嘴都是咧着的。',
        impact: { san: 5 }
      },
      {
        id: 'B',
        text: '痛苦复盘',
        title: '痛苦复盘',
        description: '后悔刚才那一手牌打错了。',
        quote: '越想越气，给了自己一巴掌。',
        impact: { san: -5, health: -1 }
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
    title: '赛博祭祖',
    description: '上山祭祖。长辈要求你对着空气磕头。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '敷衍了事',
        title: '敷衍了事',
        description: '虔诚磕头，心里默念代码。',
        quote: '中规中矩，祖宗收到了你的头，没收到你的诚意。',
        impact: { face: 5, san: -2 }
      },
      {
        id: 'B',
        text: '赛博烧纸',
        title: '赛博烧纸',
        description: '“爷爷，下面通货膨胀厉害吗？给您烧点比特帀？”',
        quote: '你爸觉得你大逆不道，但你觉得这才叫与时俱进。',
        impact: { san: 10, face: -10 }
      },
      {
        id: 'C',
        text: '演技爆发',
        title: '演技爆发',
        description: '被烟熏得流泪，假装感动大哭。',
        quote: '全家族都夸你是个孝子，只有你知道是被 PM2.5 呛的。',
        impact: { face: 15, health: -2 }
      }
    ]
  },
  {
    id: 'd5_afternoon',
    day: 5,
    dayLabel: '正月初三',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '剩菜大作战',
    description: '冰箱里的年夜饭剩菜已经热了第三回了。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '铁胃挑战',
        title: '铁胃挑战',
        description: '闭眼吞咽，铁胃无敌。',
        quote: '你吃下了一周份的致癌物，获得了母亲的欣慰笑容。',
        impact: { health: -10, face: 2 }
      },
      {
        id: 'B',
        text: '外卖作弊',
        title: '外卖作弊',
        description: '偷偷点外卖，假装在吃剩菜。',
        quote: '虽然有点费钱，但保住了狗命。就是藏外卖包装盒有点累。',
        impact: { money: -50, health: 5 }
      },
      {
        id: 'C',
        text: '致命说教',
        title: '致命说教',
        description: '“妈，这菜里的亚硝酸盐能腌死一头猪了。”',
        quote: '你妈骂你‘书读到狗肚子里了’，然后当你面把菜吃了。',
        impact: { san: 5, face: -5 }
      }
    ]
  },
  {
    id: 'd5_evening',
    day: 5,
    dayLabel: '正月初三',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '催婚联合公报',
    description: '晚间新闻时间，父母联合发动总攻。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '彻底沉默',
        title: '彻底沉默',
        description: '沉默是金，左耳进右耳出。',
        quote: '冷暴力处理。家里气氛压抑得像即将下雨。',
        impact: { san: -5, face: -2 }
      },
      {
        id: 'B',
        text: '纸片恋人',
        title: '纸片恋人',
        description: '“爸，妈，其实我喜欢...纸片人。”',
        quote: '拿出了二次元老婆的照片。父母彻底绝望，决定放弃治疗你。',
        impact: { san: 15, face: -20 }
      },
      {
        id: 'C',
        text: '坐地起价',
        title: '坐地起价',
        description: '“给我五百万买房，我明天就结婚。”',
        quote: '以经济基础击碎上层建筑。父母沉默了，因为真没钱。',
        impact: { san: 10, money: 0 }
      }
    ]
  },
  {
    id: 'd5_sleep',
    day: 5,
    dayLabel: '正月初三',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '深夜反省',
    description: '怼了父母一天。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '一丝愧疚',
        title: '一丝愧疚',
        description: '想去道个歉，但拉不下脸。',
        quote: '在门口转了两圈，最后去尿了个尿。',
        impact: { san: -5 }
      },
      {
        id: 'B',
        text: '死不悔改',
        title: '死不悔改',
        description: '我没错，错的是这个世界。',
        quote: '如果不发疯，早就被逼疯了。继续保持。',
        impact: { san: 5 }
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
    title: '逃离计划启动',
    description: '你在家里待够了，急需呼吸自由的空气。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '系统崩溃',
        title: '系统崩溃',
        description: '“公司服务器炸了，我得去网吧修 BUG！”',
        quote: '这理由很正当。你在网吧开了一上午黑，爽翻了。',
        impact: { san: 15, money: -20 }
      },
      {
        id: 'B',
        text: '奶茶续命',
        title: '奶茶续命',
        description: '假装去散步，实则去买奶茶。',
        quote: '高糖分摄入让你找回了活着的感觉。',
        impact: { weight: 1, san: 10 }
      },
      {
        id: 'C',
        text: '直球对决',
        title: '直球对决',
        description: '“这地儿我待不下去了，我要出去透气。”',
        quote: '诚实是种美德，但会挨骂。你妈骂你‘家是旅馆吗’。',
        impact: { face: -10, san: 5 }
      }
    ]
  },
  {
    id: 'd6_afternoon',
    day: 6,
    dayLabel: '正月初四',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '偶遇昔日女神/男神',
    description: '撞见了高中时的暗恋对象。对方身材走样，正在骂孩子。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '路人模式',
        title: '路人模式',
        description: '假装没看见，低头看手机快步走过。',
        quote: '只要我不尴尬，青春就还在。保留美好回忆（假象）就好。',
        impact: { san: 5, face: 0 }
      },
      {
        id: 'B',
        text: '恶语相向',
        title: '恶语相向',
        description: '上前搭讪：“哟，这谁啊，这么福态了？”',
        quote: '你亲手摧毁了对方的尊严，也摧毁了自己的回忆。这就是发疯的快感。',
        impact: { san: 10, face: -10 }
      },
      {
        id: 'C',
        text: '假意寒暄',
        title: '假意寒暄',
        description: '礼貌寒暄，互加微信（然后屏蔽）。',
        quote: '成年人的虚伪社交。你发现他/她朋友圈全是微商广告。',
        impact: { face: 5, san: -5 }
      }
    ]
  },
  {
    id: 'd6_evening',
    day: 6,
    dayLabel: '正月初四',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '狐朋狗友局',
    description: '和几个同样回乡的‘废柴’发小聚会。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '疯狂吐槽',
        title: '疯狂吐槽',
        description: '疯狂吐槽，释放负能量。',
        quote: '你们互相舔舐伤口，感觉 SAN 值回满。这是真正的春节。',
        impact: { san: 20, health: -5 }
      },
      {
        id: 'B',
        text: '抢着买单',
        title: '抢着买单',
        description: '抢着买单，装个小逼。',
        quote: '虽然钱包痛，但那一声‘义父’让你迷失了自我。',
        impact: { money: -500, face: 20 }
      },
      {
        id: 'C',
        text: '怂恿创业',
        title: '怂恿创业',
        description: '劝大家：“都不容易，来，不如我们集体辞职创业？”',
        quote: '大家像看傻子一样看你，然后继续喝廉价啤酒。',
        impact: { luck: -10, face: -5 }
      }
    ]
  },
  {
    id: 'd6_sleep',
    day: 6,
    dayLabel: '正月初四',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '酩酊大醉',
    description: '喝到了凌晨。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '倒头就睡',
        title: '倒头就睡',
        description: '直接倒在床上。',
        quote: '明天枕头会很精彩，但管他呢。',
        impact: { face: -5, health: -2 }
      },
      {
        id: 'B',
        text: '对狗谈心',
        title: '对狗谈心',
        description: '拉着还没睡的狗聊了一个小时天。',
        quote: '狗都困了，你还精神。',
        impact: { san: 5, health: -2 }
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
    title: '宿醉后的哲学思考',
    description: '昨晚喝多了，头痛欲裂。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '退化巨婴',
        title: '退化巨婴',
        description: '瘫痪在床，叫妈倒水。',
        quote: '被骂‘懒猪’，但喝到了温水。退化成巨婴挺舒服的。',
        impact: { health: 5, face: -5 }
      },
      {
        id: 'B',
        text: '垂死挣扎',
        title: '垂死挣扎',
        description: '强撑起床，展示意志力。',
        quote: '你像个行尸走肉一样飘荡在家里，差点撞门框上。',
        impact: { health: -10, san: -5 }
      },
      {
        id: 'C',
        text: '痛斥春节',
        title: '痛斥春节',
        description: '发朋友圈：“春节，一场以爱为名的集体绑架。”',
        quote: '获得了 3 个赞，屏蔽了父母。你觉得很酷。',
        impact: { san: 10, luck: -2 }
      }
    ]
  },
  {
    id: 'd7_afternoon',
    day: 7,
    dayLabel: '正月初五',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '同学聚会邀请函',
    description: '班长在群里@所有人，提议去县城最贵的KTV聚会，AA制，人均预计300。群里一片“收到”，只有你看着余额陷入沉思。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '直接退群',
        title: '直接退群',
        description: '二话不说，直接退群。',
        quote: '深藏功与名。只要我跑得快，尴尬就追不上我。',
        impact: { san: 10, face: -5 }
      },
      {
        id: 'B',
        text: '哭穷表演',
        title: '哭穷表演',
        description: '“班长，可以带家属吗？我全家都想去蹭饭。”',
        quote: '群里瞬间冷场。班长私聊问你是不是被盗号了。',
        impact: { face: -10, money: 0 }
      },
      {
        id: 'C',
        text: '发送砍一刀',
        title: '发送砍一刀',
        description: '往群里发了个拼多多砍一刀链接。',
        quote: '“帮我砍一下，我凑够了钱就去。”你不仅没花钱，还白嫖了大家的点击。',
        impact: { san: 15, face: -20 }
      }
    ]
  },
  {
    id: 'd7_evening',
    day: 7,
    dayLabel: '正月初五',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '独自狂欢',
    description: '并没有去聚会。你斥巨资（20元）在路边摊买了一份炸串，一边吃一边看群里他们虚伪的合照。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '朋友圈点赞',
        title: '朋友圈点赞',
        description: '给所有人的合照点赞。',
        quote: '主打一个“已阅”。虽然我不在江湖，但江湖有我的赞。',
        impact: { face: 2, san: 2 }
      },
      {
        id: 'B',
        text: '炸串真香',
        title: '炸串真香',
        description: '再加两串里脊肉。',
        quote: '满嘴流油。这不比听班长吹牛逼香？',
        impact: { health: -2, san: 5 }
      },
      {
        id: 'C',
        text: '匿名短信',
        title: '匿名短信',
        description: '给班长发匿名短信：“你老婆知道你初恋也在吗？”',
        quote: '虽然是编的，但看群里班长突然不说话了，感觉很有趣。',
        impact: { san: 10, luck: -5 }
      }
    ]
  },
  {
    id: 'd7_sleep',
    day: 7,
    dayLabel: '正月初五',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '众人皆醉',
    description: '群里还在发KTV的小视频，鬼哭狼嚎。你关上手机，享受清静。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '拉黑群组',
        title: '拉黑群组',
        description: '把同学群设为免打扰并折叠。',
        quote: '世界清静了。',
        impact: { san: 5 }
      },
      {
        id: 'B',
        text: '早睡早起',
        title: '早睡早起',
        description: '为了明天的精神状态，睡觉。',
        quote: '在这个浮躁的夜晚，你是唯一的智者。',
        impact: { health: 2 }
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
    title: '特产塞箱',
    description: '老妈试图把半头猪塞进你的行李箱。你看着那油腻腻的袋子，想到了高铁安检员的眼神。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '誓死不从',
        title: '誓死不从',
        description: '“妈，我是去上班，不是去逃荒。”',
        quote: '你妈骂你忘本，但你保住了行李箱的整洁。',
        impact: { face: -2, san: 5 }
      },
      {
        id: 'B',
        text: '勉强接受',
        title: '勉强接受',
        description: '挑两块小的带着。',
        quote: '各退一步。你妈虽然不满意，但也没再说什么。',
        impact: { san: -2, weight: 1 }
      },
      {
        id: 'C',
        text: '反向进货',
        title: '反向进货',
        description: '把老爸的好烟好酒顺走。',
        quote: '“爸，这烟我不抽也是浪费。”你爸气得吹胡子瞪眼，但没拦你。',
        impact: { money: 200, face: -5 }
      }
    ]
  },
  {
    id: 'd8_afternoon',
    day: 8,
    dayLabel: '正月初六',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '最后的闲逛',
    description: '在村里做最后的巡视。看到那个曾经嘲笑过你的二婶，她正因为儿子欠债在门口骂街。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '看戏模式',
        title: '看戏模式',
        description: '买把瓜子，蹲在不远处看戏。',
        quote: '这就是回馈。善恶终有报，苍天饶过谁。',
        impact: { san: 10, luck: 2 }
      },
      {
        id: 'B',
        text: '路过补刀',
        title: '路过补刀',
        description: '假装关心：“二婶，要不把房子卖了吧？”',
        quote: '二婶差点气晕过去。你深藏功与名。',
        impact: { san: 15, face: -5 }
      },
      {
        id: 'C',
        text: '无视离开',
        title: '无视离开',
        description: '径直走过，眼神都不给一个。',
        quote: '无视是最大的鄙视。你已经不是当年的你了。',
        impact: { san: 5, face: 2 }
      }
    ]
  },
  {
    id: 'd8_evening',
    day: 8,
    dayLabel: '正月初六',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '离别饭',
    description: '最后一顿晚饭。父母突然变得客气起来，不停给你夹菜。气氛有点煽情。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '打破煽情',
        title: '打破煽情',
        description: '“妈，这肉咸了。”',
        quote: '你破坏了气氛，但阻止了眼泪。你不喜欢哭哭啼啼。',
        impact: { san: 5, face: -2 }
      },
      {
        id: 'B',
        text: '默默承受',
        title: '默默承受',
        description: '低头扒饭，听他们唠叨。',
        quote: '左耳进右耳出。这一刻，你是个孝顺的工具人。',
        impact: { san: -2, health: 2 }
      },
      {
        id: 'C',
        text: '索要路费',
        title: '索要路费',
        description: '“爸，给点路费呗，机票挺贵的。”',
        quote: '你爸愣了一下，掏出了两百块。虽然不多，但是肉。',
        impact: { money: 200, face: -5 }
      }
    ]
  },
  {
    id: 'd8_sleep',
    day: 8,
    dayLabel: '正月初六',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '再见旧床',
    description: '明天就要回去了。躺在硬板床上，竟然有点舍不得。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '期待自由',
        title: '期待自由',
        description: '想到回去就能点外卖、熬夜没人管。',
        quote: '自由在召唤！嘴角疯狂上扬。',
        impact: { san: 5 }
      },
      {
        id: 'B',
        text: '略有遗憾',
        title: '略有遗憾',
        description: '这次回来好像也没干啥正事。',
        quote: '算了，过年不就是换个地方玩手机吗。',
        impact: { san: 0 }
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
    title: '启程',
    description: '父母送到村口。你看着他们变小的身影，心里五味杂陈。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '甚至不回头',
        title: '甚至不回头',
        description: '大步流星，绝不回头。',
        quote: '酷盖从不回头看爆炸（泪点）。',
        impact: { san: 5, face: 5 }
      },
      {
        id: 'B',
        text: '挥手告别',
        title: '挥手告别',
        description: '用力挥手：“回去吧！别送了！”',
        quote: '还是有点心酸的。明年见吧，老头老太。',
        impact: { san: 2, face: 2 }
      },
      {
        id: 'C',
        text: '最后整活',
        title: '最后整活',
        description: '大喊：“记得给我转账！”',
        quote: '你妈举起了扫帚作势要打，你笑着跑了。',
        impact: { san: 5, money: 0 }
      }
    ]
  },
  {
    id: 'd9_afternoon',
    day: 9,
    dayLabel: '正月初七',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '返程高铁',
    description: '车厢里充满了返程打工人的怨气。你旁边的大哥正在吃泡面。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '甚至蹭汤',
        title: '甚至蹭汤',
        description: '盯着他的面看。',
        quote: '大哥被你看毛了，问你要不要喝汤。你礼貌拒绝。',
        impact: { san: 2, face: -2 }
      },
      {
        id: 'B',
        text: '闭目养神',
        title: '闭目养神',
        description: '睡觉，补充能量。',
        quote: '为明天的搬砖做准备。',
        impact: { health: 2 }
      }
    ]
  },
  {
    id: 'd9_evening',
    day: 9,
    dayLabel: '正月初七',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '回归',
    description: '回到出租屋。打开门，一股冷清的气息扑面而来。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '狂点外卖',
        title: '狂点外卖',
        description: '点一份全家桶奖励自己。',
        quote: '热量爆炸，快乐爆炸。这才是生活。',
        impact: { health: -5, san: 10 }
      },
      {
        id: 'B',
        text: '清理行李',
        title: '清理行李',
        description: '把老妈塞的腊肉拿出来。',
        quote: '看着那块肉，突然想家了。',
        impact: { san: -2 }
      },
      {
        id: 'C',
        text: '立即开黑',
        title: '立即开黑',
        description: '打开电脑，启动游戏。',
        quote: '只要游戏开始，孤独就追不上我。',
        impact: { san: 5, health: -2 }
      }
    ]
  },
  {
    id: 'd9_sleep',
    day: 9,
    dayLabel: '正月初七',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '假期结束',
    description: '定好明天 7 点的闹钟。春节副本，通关。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '甚至期待',
        title: '甚至期待',
        description: '想想要见到可爱的同事（并没有）。',
        quote: '只有工资能给我安慰。',
        impact: { money: 0 }
      },
      {
        id: 'B',
        text: '甚至绝望',
        title: '甚至绝望',
        description: '不想上班不想上班。',
        quote: '带着怨气入睡。',
        impact: { san: -5 }
      }
    ]
  },
];

export const renXingEndings: Ending[] = [
  {
    id: 'crazy_winner',
    title: '赛博疯狗的“至高胜利”',
    description: '假期结束，你精神抖擞地回到了工位。这个春节，你没有被任何亲戚道德绑架，因为你并没有道德。你怼翻了势利的二婶，吓跑了借钱的表弟，拉黑了虚伪的同学群。虽然在老家你的名声已经臭不可闻，成了“那个在大城市疯了的孩子”，但你摸着良心（如果有的话），感到无比舒畅。你的San值处于巅峰状态，甚至觉得老板那张臭脸都变得可爱起来——毕竟他只是想要你的劳动力，而亲戚们想要的是你的命。',
    condition: (stats) => stats.san >= 120
  },
  {
    id: 'social_outcast',
    title: '全村公敌',
    description: '你成功得罪了所有人。现在全村都在传你的坏话，说你在外面干传销、脑子坏了、六亲不认。你爸妈打电话来把你骂了一顿，并威胁要断绝关系。虽然你获得了自由，但这代价似乎有点大。你独自坐在出租屋里，吃着外卖，感到一种众人皆醉我独醒的孤独（和一丝丝爽感）。',
    condition: (stats) => stats.face <= -100
  },
  {
    id: 'normal_return',
    title: '薛定谔的“疯批”',
    description: '闹钟响起，你熟练地切换回“社畜模式”。春节期间的那些发疯瞬间——在高铁上外放经文、在亲戚面前装神弄鬼，仿佛是另一个人格干的。你依然是那个偶尔在互联网上发疯，现实中唯唯诺诺的打工人。生活继续，你把那份狂野藏在了心底，等待下一个春节的到来。',
    condition: () => true // Default ending
  }
];
