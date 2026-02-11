import { Character, GameEvent, Ending } from '../../types';

// Reuse default images for generic scenes
const DEFAULT_IMAGES = {
  morning: 'https://i.postimg.cc/T1vvSY5P/001.jpg',
  afternoon: 'https://i.postimg.cc/5yWWGNQ2/002.jpg',
  evening: 'https://i.postimg.cc/NFvvVf2M/003.jpg',
  sleep: 'https://i.postimg.cc/fyQQFTST/004.jpg'
};

export const renXingChar: Character = {
  id: 'ren_xing',
  name: '任兴',
  avatar: 'https://i.postimg.cc/dtNKdT8r/105.jpg',
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
        text: '甚至裸睡',
        title: '甚至裸睡',
        description: '脱光，释放天性。',
        quote: '反正门锁了，这就是我的绝对领域。',
        impact: { san: 5, health: -2 }
      },
      {
        id: 'B',
        text: '甚至熬夜',
        title: '甚至熬夜',
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
        text: '甚至碰瓷',
        title: '甚至碰瓷',
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
        text: '甚至捧哏',
        title: '甚至捧哏',
        description: '陪父母看神剧，并真心点评特效。',
        quote: '你的智商受到了侮辱，但父母觉得你很孝顺。',
        impact: { san: -5, face: 5 }
      },
      {
        id: 'B',
        text: '甚至冷战',
        title: '甚至冷战',
        description: '回房间玩手机，断绝物理交流。',
        quote: '逃避可耻但有用。这是属于你的赛博避难所。',
        impact: { san: 5, face: -2 }
      },
      {
        id: 'C',
        text: '甚至投毒',
        title: '甚至投毒',
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
    title: '甚至不想睡',
    description: '精神抖擞，不想睡觉。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '甚至蹦迪',
        title: '甚至蹦迪',
        description: '带上耳机，在床上云蹦迪。',
        quote: '床板在震动，灵魂在飞升。',
        impact: { san: 5, health: -2 }
      },
      {
        id: 'B',
        text: '甚至夜宵',
        title: '甚至夜宵',
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
        text: '甚至凡尔赛',
        title: '甚至凡尔赛',
        description: '“哎呀，年薪不到百万，也就是混口饭吃。”',
        quote: '你装到了，但代价是接下来几天你要发巨额红包来圆谎。',
        impact: { money: -800, face: 20 }
      },
      {
        id: 'B',
        text: '甚至借钱',
        title: '甚至借钱',
        description: '“阿姨借点钱吧，我在外面欠了高利贷，正愁没钱还呢。”',
        quote: '亲戚们瞬间闭嘴，并以光速离开了你家。世界清静了。',
        impact: { san: 20, face: -20 }
      },
      {
        id: 'C',
        text: '甚至人身攻击',
        title: '甚至人身攻击',
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
        text: '甚至送礼',
        title: '甚至送礼',
        description: '“拿去吧，这是哥哥的命...”',
        quote: '你是个好哥哥，但你心在滴血。表弟五分钟后把它摔断了。',
        impact: { money: -500, san: -20 }
      },
      {
        id: 'B',
        text: '甚至劝学',
        title: '甚至劝学',
        description: '拿出一套《五年高考三年模拟》：“想要吗？做完这一本就送你。”',
        quote: '表弟尖叫着跑了，你维护了知识的尊严。',
        impact: { san: 10, luck: 5 }
      },
      {
        id: 'C',
        text: '甚至恐吓',
        title: '甚至恐吓',
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
        text: '甚至断片',
        title: '甚至断片',
        description: '喝！喝到断片！',
        quote: '你喝吐了，长辈们夸你豪爽。第二天你会后悔出生。',
        impact: { health: -20, face: 10 }
      },
      {
        id: 'B',
        text: '甚至怀孕',
        title: '甚至怀孕',
        description: '“我备孕呢。”（无论男女）',
        quote: '全场震惊。这理由太硬核，没人敢劝了，只剩下窃窃私语。',
        impact: { san: 10, face: -10 }
      },
      {
        id: 'C',
        text: '甚至反杀',
        title: '甚至反杀',
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
    title: '甚至做梦',
    description: '酒精上头，梦里还在划拳。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '甚至梦话',
        title: '甚至梦话',
        description: '大喊一声“五魁首啊”。',
        quote: '把起夜的你爸吓了一跳。',
        impact: { face: -2 }
      },
      {
        id: 'B',
        text: '甚至口渴',
        title: '甚至口渴',
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
        text: '甚至卑微',
        title: '甚至卑微',
        description: '全程陪笑，点头哈腰。',
        quote: '你成了背景板，衬托了红花的鲜艳。由于过于卑微，SAN 值狂掉。',
        impact: { san: -15, face: -5 }
      },
      {
        id: 'B',
        text: '甚至拆台',
        title: '甚至拆台',
        description: '“听说这岗位天天加班还没加班费，真的吗？”',
        quote: '哪壶不开提哪壶。对方笑容凝固，王阿姨觉得你嫉妒心重。',
        impact: { san: 5, face: -10 }
      },
      {
        id: 'C',
        text: '甚至结拜',
        title: '甚至结拜',
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
        text: '甚至正常',
        title: '甚至正常',
        description: '正常交流，互通有无。',
        quote: '平平淡淡，你们加了微信然后互躺尸体列表。',
        impact: { money: -50, face: 5 }
      },
      {
        id: 'B',
        text: '甚至演戏',
        title: '甚至演戏',
        description: '“你好，我是不婚主义者，咱俩凑合演个戏？”',
        quote: '对方眼中有了光，你们愉快地打了一下午王者荣耀。',
        impact: { san: 10, money: 0 }
      },
      {
        id: 'C',
        text: '甚至推销',
        title: '甚至推销',
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
        text: '甚至输钱',
        title: '甚至输钱',
        description: '故意点炮，输钱买开心。',
        quote: '长辈们赢钱了夸你懂事，你钱包瘪了但家庭地位暂时上升。',
        impact: { money: -500, face: 10 }
      },
      {
        id: 'B',
        text: '甚至六亲不认',
        title: '甚至六亲不认',
        description: '六亲不认，算牌狂魔。',
        quote: '你赢光了三姑的买菜钱。气氛很尴尬，但钱很香。',
        impact: { money: 300, face: -15 }
      },
      {
        id: 'C',
        text: '甚至做法',
        title: '甚至做法',
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
    title: '甚至数钱',
    description: '赢了钱/输了钱睡不着。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '甚至数钱',
        title: '甚至数钱',
        description: '反复数那赢来的 300 块。',
        quote: '这是凭本事赢的，不丢人。睡着了嘴都是咧着的。',
        impact: { san: 5 }
      },
      {
        id: 'B',
        text: '甚至复盘',
        title: '甚至复盘',
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
        text: '甚至虔诚',
        title: '甚至虔诚',
        description: '虔诚磕头，心里默念代码。',
        quote: '中规中矩，祖宗收到了你的头，没收到你的诚意。',
        impact: { face: 5, san: -2 }
      },
      {
        id: 'B',
        text: '甚至烧币',
        title: '甚至烧币',
        description: '“爷爷，下面通货膨胀厉害吗？给您烧点比特帀？”',
        quote: '你爸觉得你大逆不道，但你觉得这才叫与时俱进。',
        impact: { san: 10, face: -10 }
      },
      {
        id: 'C',
        text: '甚至演技',
        title: '甚至演技',
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
        text: '甚至铁胃',
        title: '甚至铁胃',
        description: '闭眼吞咽，铁胃无敌。',
        quote: '你吃下了一周份的致癌物，获得了母亲的欣慰笑容。',
        impact: { health: -10, face: 2 }
      },
      {
        id: 'B',
        text: '甚至作弊',
        title: '甚至作弊',
        description: '偷偷点外卖，假装在吃剩菜。',
        quote: '虽然有点费钱，但保住了狗命。就是藏外卖包装盒有点累。',
        impact: { money: -50, health: 5 }
      },
      {
        id: 'C',
        text: '甚至科普',
        title: '甚至科普',
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
        text: '甚至冷暴力',
        title: '甚至冷暴力',
        description: '沉默是金，左耳进右耳出。',
        quote: '冷暴力处理。家里气氛压抑得像即将下雨。',
        impact: { san: -5, face: -2 }
      },
      {
        id: 'B',
        text: '甚至出柜',
        title: '甚至出柜',
        description: '“爸，妈，其实我喜欢...纸片人。”',
        quote: '拿出了二次元老婆的照片。父母彻底绝望，决定放弃治疗你。',
        impact: { san: 15, face: -20 }
      },
      {
        id: 'C',
        text: '甚至开价',
        title: '甚至开价',
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
    title: '甚至反思',
    description: '怼了父母一天。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '甚至愧疚',
        title: '甚至愧疚',
        description: '想去道个歉，但拉不下脸。',
        quote: '在门口转了两圈，最后去尿了个尿。',
        impact: { san: -5 }
      },
      {
        id: 'B',
        text: '甚至坚定',
        title: '甚至坚定',
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
        text: '甚至正当',
        title: '甚至正当',
        description: '“公司服务器炸了，我得去网吧修 BUG！”',
        quote: '这理由很正当。你在网吧开了一上午黑，爽翻了。',
        impact: { san: 15, money: -20 }
      },
      {
        id: 'B',
        text: '甚至奶茶',
        title: '甚至奶茶',
        description: '假装去散步，实则去买奶茶。',
        quote: '高糖分摄入让你找回了活着的感觉。',
        impact: { weight: 1, san: 10 }
      },
      {
        id: 'C',
        text: '甚至直球',
        title: '甚至直球',
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
        text: '甚至路人',
        title: '甚至路人',
        description: '假装没看见，低头看手机快步走过。',
        quote: '只要我不尴尬，青春就还在。保留美好回忆（假象）就好。',
        impact: { san: 5, face: 0 }
      },
      {
        id: 'B',
        text: '甚至嘴贱',
        title: '甚至嘴贱',
        description: '上前搭讪：“哟，这谁啊，这么福态了？”',
        quote: '你亲手摧毁了对方的尊严，也摧毁了自己的回忆。这就是发疯的快感。',
        impact: { san: 10, face: -10 }
      },
      {
        id: 'C',
        text: '甚至虚伪',
        title: '甚至虚伪',
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
        text: '甚至负能量',
        title: '甚至负能量',
        description: '疯狂吐槽，释放负能量。',
        quote: '你们互相舔舐伤口，感觉 SAN 值回满。这是真正的春节。',
        impact: { san: 20, health: -5 }
      },
      {
        id: 'B',
        text: '甚至装逼',
        title: '甚至装逼',
        description: '抢着买单，装个小逼。',
        quote: '虽然钱包痛，但那一声‘义父’让你迷失了自我。',
        impact: { money: -500, face: 20 }
      },
      {
        id: 'C',
        text: '甚至创业',
        title: '甚至创业',
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
    title: '甚至宿醉',
    description: '喝到了凌晨。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '甚至不洗脸',
        title: '甚至不洗脸',
        description: '直接倒在床上。',
        quote: '明天枕头会很精彩，但管他呢。',
        impact: { face: -5, health: -2 }
      },
      {
        id: 'B',
        text: '甚至夜谈',
        title: '甚至夜谈',
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
        text: '甚至巨婴',
        title: '甚至巨婴',
        description: '瘫痪在床，叫妈倒水。',
        quote: '被骂‘懒猪’，但喝到了温水。退化成巨婴挺舒服的。',
        impact: { health: 5, face: -5 }
      },
      {
        id: 'B',
        text: '甚至行尸',
        title: '甚至行尸',
        description: '强撑起床，展示意志力。',
        quote: '你像个行尸走肉一样飘荡在家里，差点撞门框上。',
        impact: { health: -10, san: -5 }
      },
      {
        id: 'C',
        text: '甚至发圈',
        title: '甚至发圈',
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
    description: '班长在群里@所有人，发起同学聚会。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '甚至盛装',
        title: '甚至盛装',
        description: '去！还要盛装出席！',
        quote: '你花钱做了头发，准备去见证人类虚荣心的巅峰。',
        impact: { money: -200, face: 5 }
      },
      {
        id: 'B',
        text: '甚至退群',
        title: '甚至退群',
        description: '不去，直接退群。',
        quote: '只要我没有道德，你就绑架不了我。爽！',
        impact: { san: 20, face: -20 }
      },
      {
        id: 'C',
        text: '甚至AA',
        title: '甚至AA',
        description: '群里回复：“AA吗？人均超过 50 我不去啊。”',
        quote: '群里瞬间冷场。你凭一己之力拉低了聚会的格调。你是英雄。',
        impact: { face: -30, san: 15 }
      }
    ]
  },
  {
    id: 'd7_evening',
    day: 7,
    dayLabel: '正月初五',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '名利场·凡尔赛之夜',
    description: '还是去了同学会。大家都在装。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '甚至打包',
        title: '甚至打包',
        description: '默默干饭，打包剩菜。',
        quote: '只要我脸皮厚，这顿就是自助餐。这波不亏。',
        impact: { money: 20, face: -20 }
      },
      {
        id: 'B',
        text: '甚至捧杀',
        title: '甚至捧杀',
        description: '配合演出：“哇！王总真厉害！李总带带我！”',
        quote: '你出卖了灵魂，换来了所谓的‘人脉’（其实并没有卵用）。',
        impact: { san: -15, luck: 5 }
      },
      {
        id: 'C',
        text: '甚至拆穿',
        title: '甚至拆穿',
        description: '当众拆穿：“张总，听说你那大奔是租的？一天多少钱？”',
        quote: '全场死寂。【素质消失术】终极奥义。你成为了聚会终结者。',
        impact: { san: 30, face: -50 }
      }
    ]
  },
  {
    id: 'd7_sleep',
    day: 7,
    dayLabel: '正月初五',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '甚至拉黑',
    description: '聚会结束，班长发了假惺惺的合照。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '甚至举报',
        title: '甚至举报',
        description: '举报群聊有违规内容。',
        quote: '我是正义的化身。',
        impact: { san: 5, luck: 2 }
      },
      {
        id: 'B',
        text: '甚至无视',
        title: '甚至无视',
        description: '设置消息免打扰，睡觉。',
        quote: '你们演你们的，我睡我的。',
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
    title: '特产扫货',
    description: '快走了，得买点特产带回去给同事。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '甚至冤种',
        title: '甚至冤种',
        description: '老实买买买。',
        quote: '花了冤枉钱，买了个心安。同事们估计转手就扔了。',
        impact: { money: -300, san: -2 }
      },
      {
        id: 'B',
        text: '甚至土豆',
        title: '甚至土豆',
        description: '去菜市场买两斤土豆。',
        quote: '“这是正宗老家笨土豆！”这理由无懈可击，还省钱。',
        impact: { money: -10, face: -5 }
      },
      {
        id: 'C',
        text: '甚至网购',
        title: '甚至网购',
        description: '网购下单直接寄到公司。',
        quote: '这是现代智慧。没人知道你没在当地买，除了快递单。',
        impact: { money: -100, luck: 5 }
      }
    ]
  },
  {
    id: 'd8_afternoon',
    day: 8,
    dayLabel: '正月初六',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '最后的训话',
    description: '离别前的最后一下午，父母开启了‘尊享版唠叨模式’。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '甚至敷衍',
        title: '甚至敷衍',
        description: '“好好好，是是是，对对对”。',
        quote: '经典的‘敷衍三连’。虽然没听进去，但这是为了世界和平。',
        impact: { san: -5, face: 5 }
      },
      {
        id: 'B',
        text: '甚至画饼',
        title: '甚至画饼',
        description: '反向画饼：“明年一定带个亿万富翁回来！”',
        quote: '只要饼画得够大，父母就吃不下。他们觉得你在做梦。',
        impact: { san: 10, face: -5 }
      },
      {
        id: 'C',
        text: '甚至屏蔽',
        title: '甚至屏蔽',
        description: '带上耳机，物理屏蔽。',
        quote: '父母看着像在演默剧的你，叹了口气，放弃了。',
        impact: { face: -10, san: 5 }
      }
    ]
  },
  {
    id: 'd8_evening',
    day: 8,
    dayLabel: '正月初六',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '俄罗斯方块·行李箱版',
    description: '你妈试图往你那 20 寸的箱子里塞进半头猪。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '甚至硬塞',
        title: '甚至硬塞',
        description: '拼命塞，坐上去压。',
        quote: '箱子拉链发出了惨叫，但你带走了沉甸甸的母爱（负担）。',
        impact: { health: -2, weight: 5 }
      },
      {
        id: 'B',
        text: '甚至拒绝',
        title: '甚至拒绝',
        description: '坚决不要：“妈，大城市有超市，我不是去荒野求生！”',
        quote: '你妈觉得你不知道柴米油盐贵，偷偷塞你包里两个煮鸡蛋。',
        impact: { face: -5, san: 5 }
      },
      {
        id: 'C',
        text: '甚至快递',
        title: '甚至快递',
        description: '提议快递寄过去。',
        quote: '用金钱换空间。双赢。',
        impact: { money: -50, luck: 5 }
      }
    ]
  },
  {
    id: 'd8_sleep',
    day: 8,
    dayLabel: '正月初六',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '甚至舍不得',
    description: '明天就要走了。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '甚至偷拍',
        title: '甚至偷拍',
        description: '偷拍一张家里的照片。',
        quote: '留个纪念，下次回来不知道什么时候。',
        impact: { san: -2, luck: 2 }
      },
      {
        id: 'B',
        text: '甚至期待',
        title: '甚至期待',
        description: '期待回大城市点外卖。',
        quote: '家乡很好，但外卖更好。',
        impact: { san: 5, health: -1 }
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
    title: '离家仪式',
    description: '父母站在寒风中，突然显得有点苍老。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '甚至温情',
        title: '甚至温情',
        description: '拥抱父母：“走了啊，照顾好身体。”',
        quote: '短暂的温情。你看到老妈偷偷抹了眼泪。唉，这就是羁绊。',
        impact: { san: 10, face: 5 }
      },
      {
        id: 'B',
        text: '甚至潇洒',
        title: '甚至潇洒',
        description: '挥手不回头：“我去为 GDP 做贡献了！”',
        quote: '潇洒离去。真男人从不回头看爆炸（泪水）。',
        impact: { san: 5, luck: 5 }
      },
      {
        id: 'C',
        text: '甚至实用',
        title: '甚至实用',
        description: '检查有没有落东西，无视煽情。',
        quote: '实用主义者。你确认了身份证在，就放心了。',
        impact: { face: -5, luck: 2 }
      }
    ]
  },
  {
    id: 'd9_afternoon',
    day: 9,
    dayLabel: '正月初七',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '返程的戒断反应',
    description: '回程的高铁上，周围依然喧闹。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '甚至社畜',
        title: '甚至社畜',
        description: '打开工作群，提前进入状态。',
        quote: '看着 99+ 的消息，你想跳车。社畜模式加载中...',
        impact: { san: -20, money: 100 }
      },
      {
        id: 'B',
        text: '甚至补觉',
        title: '甚至补觉',
        description: '补觉，逃避现实。',
        quote: '能睡一分钟是一分钟。梦里没有 KPI。',
        impact: { health: 5, san: 5 }
      },
      {
        id: 'C',
        text: '甚至算账',
        title: '甚至算账',
        description: '算账：这趟回家花了多少钱。',
        quote: '看着账单，你觉得自己这几天是在‘精准扶贫’。心痛。',
        impact: { san: -10, money: 0 }
      }
    ]
  },
  {
    id: 'd9_evening',
    day: 9,
    dayLabel: '正月初七',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '出租屋的泡面',
    description: '回到冰冷的出租屋。你煮了一碗泡面。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '甚至发圈',
        title: '甚至发圈',
        description: '发朋友圈：“已回村（城），工位见。”',
        quote: '春节副本通关。游戏结束，生活继续。',
        impact: { face: 5, luck: 2 }
      },
      {
        id: 'B',
        text: '甚至喊楼',
        title: '甚至喊楼',
        description: '大喊一声：“老子又是这条街最靓的仔！”',
        quote: '隔壁邻居敲墙骂你神经病。这熟悉的感觉，回来了。',
        impact: { san: 15, face: -5 }
      },
      {
        id: 'C',
        text: '甚至睡觉',
        title: '甚至睡觉',
        description: '定好明天闹钟，倒头就睡。',
        quote: '你是成熟的打工人。晚安，赛博世界。',
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
    title: '游戏结算',
    description: '闭上眼，假期的一幕幕像走马灯一样闪过。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '甚至期待',
        title: '甚至期待',
        description: '期待明天的开工红包。',
        quote: '苍蝇腿也是肉。为了钱，忍了。',
        impact: { luck: 5 }
      },
      {
        id: 'B',
        text: '甚至空虚',
        title: '甚至空虚',
        description: '突然觉得房间好安静。',
        quote: '这就是自由的代价。孤独，但值得。',
        impact: { san: -5 }
      }
    ]
  },
];

export const renXingEndings: Ending[] = [
  {
    id: 'crazy_legend',
    title: '传说级·村口疯狗',
    description: '你提着行李箱站在村口，感觉神清气爽，头顶的蓝天都比往年更蓝。身后是正在指指点点的七大姑八大姨，和被你气得血压升高的熊孩子家长。这个春节，你没有送出一个不情愿的红包，没有喝下一杯不想喝的酒，也没有忍受一句爹味的说教。虽然家族群里把你踢了，村口情报中心传言你“在大城市疯了”，但你摸了摸口袋里保住的存款和心中满溢的快乐，笑着对自己说：“这才是任兴（任性）的人生啊。” (你的传说将在村里流传至少三年，主要作为反面教材。)',
    condition: (stats) => stats.san >= 140
  },
  {
    id: 'bankrupt',
    title: '破产版·家族散财童子',
    description: '回到出租屋，看着手机余额显示，你陷入了长久的沉默。那被表弟摔断的手办尸体仿佛在嘲笑你，朋友圈里同学会的大合照除了证明你是个合格的“买单侠”外毫无意义。你为了所谓的“体面”和“家族和谐”，打肿脸充胖子，结果不仅脸肿了，钱包也瘪了。接下来的一一个月，你必须依靠每天一顿泡面和公司蹭水来度过。 (这是一场毫无性价比的返乡，你赢了长辈口中的“懂事”，却输了打工人的“生存”。)',
    condition: (stats) => stats.money < 2500
  },
  {
    id: 'sub_health',
    title: '憋屈的·亚健康社畜',
    description: '工位的电脑屏幕亮起，你的灵魂却还留在老家的硬板床上。这个春节过得像一场漫长的拉锯战：你怼了亲戚但又随后后悔，想省钱却还是买了人情债，吃了几天剩菜，喝了几顿大酒。此刻的你，面色蜡黄，胃部隐隐作痛，精神萎靡不振。你既没有像疯狗一样获得彻底的快乐，也没有像成功人士一样获得虚荣的满足。你只是在这个庞大的春节习俗机器中，被嚼了一遍又吐了出来。 (这就是90%普通人的春节真相：一种名为“节后综合征”的慢性病。)',
    condition: (stats) => stats.san < 70 || stats.health < 50
  }
];