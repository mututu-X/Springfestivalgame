import { Character, GameEvent, Ending } from '../../types';

// Reuse default images for generic scenes
const DEFAULT_IMAGES = {
  morning: 'https://i.postimg.cc/T1vvSY5P/001.jpg',
  afternoon: 'https://i.postimg.cc/5yWWGNQ2/002.jpg',
  evening: 'https://i.postimg.cc/NFvvVf2M/003.jpg',
  sleep: 'https://i.postimg.cc/fyQQFTST/004.jpg'
};

export const biChenglongChar: Character = {
  id: 'bi_chenglong',
  name: '毕成龙',
  avatar: 'https://i.postimg.cc/QxYr5Wpy/107.jpg',
  tags: ['鸡娃战神·绝望家长', '#寒假作业监工', '#红包回收站'],
  roleDescription: '鸡娃战神·绝望家长',
  bio: '“来，儿子，给太爷爷背个圆周率！再来一段英语朗诵！……你们吃你们的，我得盯着他做寒假作业。我也不想这样，但隔壁老王家的孩子连核聚变都快学会了，我能不急吗？”',
  baseStats: {
    money: 450000,
    weight: 52,
    face: 60,
    san: 15,
    health: 40,
    luck: 30,
  },
};

export const biChenglongEvents: GameEvent[] = [
  // Day 1: 腊月二十八 (2月15日)
  {
    id: 'd1_morning',
    day: 1,
    dayLabel: '腊月二十八',
    timeOfDay: 'morning',
    timeLabel: '早上',
    title: '移动的考公地狱',
    description: '后备箱塞满了土特产？不，那是属于你的\'赛博移动图书馆\'。为了防止这台名为\'儿子\'的生物在回乡路上算力退化，你塞进了五套黄冈密卷。老婆发出指令：\'堵车不堵脑，路上背完这页单词。\'你的 SAN 值随着后备箱盖下的那一刻，由于空间压缩算法失败，直接暴跌。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '执行指令',
        title: '执行指令',
        description: '车内听写。',
        quote: '车内充满了快活的\'abandon\'声。儿子哭，老婆笑，你感觉自己像个夹在中间的语音识别系统。',
        impact: { san: -2, face: 2 }
      },
      {
        id: 'B',
        text: '阳奉阴违',
        title: '阳奉阴违',
        description: '放个《孤勇者》。',
        quote: '儿子的 DNA 动了，开始咆哮跟唱。老婆给了你一个\'你是猪队友吗\'的眼神，物理攻击了你的大腿。',
        impact: { san: 5, face: -2 }
      },
      {
        id: 'C',
        text: '吃药保命',
        title: '吃药保命',
        description: '先吞两片降压药。',
        quote: '药物生效，世界变得模糊且美好。你短暂地切断了与\'鸡娃\'服务器的连接。',
        impact: { health: 2, money: -50 }
      }
    ]
  },
  {
    id: 'd1_afternoon',
    day: 1,
    dayLabel: '腊月二十八',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '高速公路内卷大赛',
    description: '堵车了。隔壁奔驰车窗降下，里面的小孩正在用流利的牛津音读《经济学人》。你回头看了一眼正在啃鸡爪并试图把油擦在真皮座椅上的亲儿子，感觉体内的多巴胺正在极速氧化。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '物理超车',
        title: '物理超车',
        description: '并道插队。',
        quote: '你成功插到了奔驰前面，用尾气羞辱了知识。虽然素质低下，但心情极度舒畅。',
        impact: { san: 5, luck: -5 }
      },
      {
        id: 'B',
        text: '声波攻击',
        title: '声波攻击',
        description: '大喊圆周率。',
        quote: '你逼儿子摇下车窗背圆周率。全高速的人都以为这车里坐了个精神病。隔壁关窗了，赢！',
        impact: { face: -5, san: 2 }
      },
      {
        id: 'C',
        text: '躺平任嘲',
        title: '躺平任嘲',
        description: '关窗睡觉。',
        quote: '只要我听不见，牛津音就是噪音。掩耳盗铃是中年男人的顶级防御机制。',
        impact: { san: 2, health: 1 }
      }
    ]
  },
  {
    id: 'd1_evening',
    day: 1,
    dayLabel: '腊月二十八',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '老宅的降维打击',
    description: '终于到家。还没来得及喝口水，太爷爷颤颤巍巍地掏出了给重孙的红包。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '利用孩子',
        title: '利用孩子',
        description: '\'快谢谢太爷爷，给爸爸保管\'。',
        quote: '孩子大喊：\'妈妈说爸爸保管就是买烟抽！\' 全场爆笑，你当场社死。',
        impact: { face: -5, san: -2 }
      },
      {
        id: 'B',
        text: '大义灭亲',
        title: '大义灭亲',
        description: '\'老婆你收着吧\'。',
        quote: '老婆露出了慈禧般的微笑。你的家庭地位虽然没有提升，但至少避免了今晚睡柴房。',
        impact: { san: 5 }
      },
      {
        id: 'C',
        text: '强行截胡',
        title: '强行截胡',
        description: '光速抽走红包。',
        quote: '你凭单身三十年的手速抢到了。但因为动作太像抢劫，太爷爷差点吓得拨打 110。',
        impact: { money: 200, face: -10 }
      }
    ]
  },
  {
    id: 'd1_sleep',
    day: 1,
    dayLabel: '腊月二十八',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '认床与失眠',
    description: '换了地方睡不着，而且担心明天儿子早起背书的状态。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '定制闹钟',
        title: '定制闹钟',
        description: '给儿子定 6 个闹钟。',
        quote: '为了明天的弯道超车，必须狠心。虽然你也得跟着起。',
        impact: { san: -2, health: -2 }
      },
      {
        id: 'B',
        text: '甚至复盘',
        title: '甚至复盘',
        description: '和老婆讨论今天的“路考”失误。',
        quote: '被老婆数落了半小时，带着怨气入睡。',
        impact: { san: -5 }
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
    title: '不仅要起早，还要背古诗',
    description: '乡村的清晨，老婆已经把你踹醒：\'空气这么好，带儿子去田埂上背《离骚》！\'',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '严父模式',
        title: '严父模式',
        description: '\'走！背不完不准吃饭！\'',
        quote: '村民们看着你们父子俩像僵尸一样在田里游荡。你收获了\'书香门第\'的虚假赞誉。',
        impact: { face: 5, health: -2 }
      },
      {
        id: 'B',
        text: '狼狈为奸',
        title: '狼狈为奸',
        description: '带儿子去小卖部。',
        quote: '你俩躲在草垛后面吃辣条。这是父子间难得的革命友谊，虽然满嘴味精味。',
        impact: { money: -20, san: 5 }
      },
      {
        id: 'C',
        text: '装死',
        title: '装死',
        description: '\'我感冒了\'。',
        quote: '老婆亲自上阵带孩子去了。你在被窝里刷了半小时抖音，感觉灵魂得到了升华。',
        impact: { health: 2, san: 5 }
      }
    ]
  },
  {
    id: 'd2_afternoon',
    day: 2,
    dayLabel: '腊月二十九',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '隔壁神童的量子纠缠',
    description: '隔壁二大爷家的孙子\'浩浩\'来了，见面就聊非欧几何。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '转移话题',
        title: '转移话题',
        description: '\'浩浩，有女朋友了吗？\'',
        quote: '你发起了油腻中年人的降维打击。神童愣住了，你赢在了下三滥。',
        impact: { face: -5, san: 5 }
      },
      {
        id: 'B',
        text: '才艺展示',
        title: '才艺展示',
        description: '\'儿子，给他表演个后空翻\'。',
        quote: '虽然不体面，但至少证明了你儿子四肢发达。神童对此表示 biological confusion。',
        impact: { face: 2, health: -2 }
      },
      {
        id: 'C',
        text: '绝望鸡娃',
        title: '绝望鸡娃',
        description: '\'儿子，把那个圆周率再背一遍！\'',
        quote: '儿子背到 3.1415...就卡住了。神童冷冷地接了下去，背到了小数点后 50 位。你当场裂开。',
        impact: { face: -10, san: -10 }
      }
    ]
  },
  {
    id: 'd2_evening',
    day: 2,
    dayLabel: '腊月二十九',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '猪肉炖粉条与卡路里赤字',
    description: '晚饭是高油高盐的杀猪菜。老婆在桌下掐你大腿提醒你减脂。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '报复性进食',
        title: '报复性进食',
        description: '狂吃三大碗。',
        quote: '去他妈的体脂率！碳水化合物才是快乐的源泉。老婆的眼神能杀人，但你已经饱了。',
        impact: { weight: 1, san: 5 }
      },
      {
        id: 'B',
        text: '自律精英',
        title: '自律精英',
        description: '\'我喝白开水就好\'。',
        quote: '亲戚们纷纷夸你\'城里人就是讲究\'。你饿得半夜想啃床脚。',
        impact: { face: 5, health: -1 }
      },
      {
        id: 'C',
        text: '偷梁换柱',
        title: '偷梁换柱',
        description: '把肥肉埋在饭底下。',
        quote: '完美的犯罪。你假装在吃米饭，实则在享受油脂的欢愉。这就是大人的智慧。',
        impact: { weight: 0.5, san: 2 }
      }
    ]
  },
  {
    id: 'd2_sleep',
    day: 2,
    dayLabel: '腊月二十九',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '神童的阴影',
    description: '满脑子都是白天那个神童不屑的眼神。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '甚至网购',
        title: '甚至网购',
        description: '下单一本《奥数精讲》。',
        quote: '笨鸟先飞，虽然儿子是笨鸟，但我是勤奋的赶鸟人。',
        impact: { money: -50, san: 2 }
      },
      {
        id: 'B',
        text: '甚至精神胜利',
        title: '甚至精神胜利',
        description: '安慰自己儿子情商高。',
        quote: '以后神童没准还得给我儿子打工呢。想着想着笑出了声。',
        impact: { san: 5 }
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
    title: '走亲戚前的军备竞赛',
    description: '去世交老王家，临行前对儿子进行地狱特训。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '疯狂押题',
        title: '疯狂押题',
        description: '模拟对话演练。',
        quote: '你预判了所有刁钻问题。儿子像个被训练好的 ChatGLM，随时准备输出标准答案。',
        impact: { san: -2, face: 5 }
      },
      {
        id: 'B',
        text: '虚张声势',
        title: '虚张声势',
        description: '把车洗得锃亮。',
        quote: '虽然孩子不行，但车行。物质外壳的闪亮能暂时晃瞎亲戚的狗眼。',
        impact: { money: -50, face: 2 }
      },
      {
        id: 'C',
        text: '摆烂心态',
        title: '摆烂心态',
        description: '\'儿啊，靠你自由发挥了\'。',
        quote: '你放弃了抵抗。儿子很高兴，并在出发前把牛奶洒了一裤子。',
        impact: { luck: -5, san: 5 }
      }
    ]
  },
  {
    id: 'd3_afternoon',
    day: 3,
    dayLabel: '正月初一',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '凡尔赛宫的巅峰对决',
    description: '老王开始凡尔赛他孙子的成绩。你需要反击。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '阴阳怪气',
        title: '阴阳怪气',
        description: '\'那是，童年只有一次，快乐最重要\'。',
        quote: '你暗示对方孩子是个只会读书的书呆子。老王脸色一僵，你获得精神胜利。',
        impact: { face: -2, san: 5 }
      },
      {
        id: 'B',
        text: '硬碰硬',
        title: '硬碰硬',
        description: '\'我家正在搞机器人奥赛，没空管校内成绩\'。',
        quote: '虽然你在吹牛，但听起来很高科技。老王不懂机器人，被你唬住了。',
        impact: { face: 10, san: -2 }
      },
      {
        id: 'C',
        text: '尿遁',
        title: '尿遁',
        description: '\'我去个厕所\'。',
        quote: '逃避可耻但有用。你在厕所抽了根烟，听着外面的笑声，感觉像个局外人。',
        impact: { face: -5, san: 2 }
      }
    ]
  },
  {
    id: 'd3_evening',
    day: 3,
    dayLabel: '正月初一',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '酒精与真言',
    description: '喝多了，看着熟睡的儿子悲从中来。老婆让你检查作业。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '借酒撒泼',
        title: '借酒撒泼',
        description: '\'我不干了！我要快乐教育！\'',
        quote: '你撕了一页作业本。老婆冷静地罚款你 100 元，并让你明天早上粘回去。',
        impact: { money: -100, san: 10 }
      },
      {
        id: 'B',
        text: '默默加班',
        title: '默默加班',
        description: '含泪检查算术题。',
        quote: '你发现儿子连\'3+2\'都算成了 6。你的酒醒了，血压上来了。',
        impact: { san: -5, health: -2 }
      },
      {
        id: 'C',
        text: '倒头就睡',
        title: '倒头就睡',
        description: '断电关机。',
        quote: '梦里儿子考上了清华，你笑醒了，然后发现口水流到了枕头上。',
        impact: { health: 5, san: 5 }
      }
    ]
  },
  {
    id: 'd3_sleep',
    day: 3,
    dayLabel: '正月初一',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '酒后乱语',
    description: '酒精的作用下，你拉着老婆的手开始回顾恋爱史。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '甚至忆苦思甜',
        title: '甚至忆苦思甜',
        description: '讲起当年的誓言。',
        quote: '老婆感动了一秒，然后说：‘少废话，明天早起’。',
        impact: { san: 2 }
      },
      {
        id: 'B',
        text: '甚至打呼',
        title: '甚至打呼',
        description: '没说两句就睡着了，呼噜声震天。',
        quote: '被老婆踹了一脚，但没醒。',
        impact: { health: 2, san: -2 }
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
    title: '七大姑八大姨的审判庭',
    description: '七大姑八大姨围攻你的资产状况。二姨问：\'听说你们那学区房跌了？\'',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '金融术语',
        title: '金融术语',
        description: '\'那是技术性调整\'。',
        quote: '你用一堆 K 线图术语把二姨绕晕了。她虽然没听懂，但觉得你亏得很有水平。',
        impact: { face: 5, luck: 2 }
      },
      {
        id: 'B',
        text: '哭穷卖惨',
        title: '哭穷卖惨',
        description: '\'是啊，饭都吃不起了\'。',
        quote: '二姨心软了，没准还能塞给你俩鸡蛋。低姿态是防守反击的精髓。',
        impact: { face: -10, money: 500 }
      },
      {
        id: 'C',
        text: '祸水东引',
        title: '祸水东引',
        description: '\'二姨，表弟还没对象吧？\'',
        quote: '暴击！二姨瞬间转移了火力去攻击表弟。你安全了。',
        impact: { san: 5, luck: 2 }
      }
    ]
  },
  {
    id: 'd4_afternoon',
    day: 4,
    dayLabel: '正月初二',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '熊孩子的破坏力',
    description: '亲戚家的熊孩子在你真皮座椅上画佩奇。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '替天行道',
        title: '替天行道',
        description: '\'这谁家孩子！管不管！\'',
        quote: '你吼了一声。熊孩子哭了，家长来了，你变成了\'和小孩计较的小气鬼\'。',
        impact: { face: -5, san: 5 }
      },
      {
        id: 'B',
        text: '忍气吞声',
        title: '忍气吞声',
        description: '默默擦座椅。',
        quote: '你是忍者神龟。座椅擦不干净，你的心也在滴血。',
        impact: { san: -10, health: -2 }
      },
      {
        id: 'C',
        text: '借刀杀人',
        title: '借刀杀人',
        description: '\'儿子，教他玩手机\'。',
        quote: '你儿子教会了熊孩子给主播刷火箭。过几天他爸妈会感谢你的。',
        impact: { san: 2, luck: 5 }
      }
    ]
  },
  {
    id: 'd4_evening',
    day: 4,
    dayLabel: '正月初二',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '并不丰盛的剩菜宴',
    description: '连吃三天剩菜，你看着那碗大杂烩反胃。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '硬着头皮吃',
        title: '硬着头皮吃',
        description: '\'真香\'。',
        quote: '你在这个家就是个剩菜粉碎机。你的肠胃正在策划一场起义。',
        impact: { health: -5, weight: 0.5 }
      },
      {
        id: 'B',
        text: '偷点外卖',
        title: '偷点外卖',
        description: '乡村肯德基。',
        quote: '你在寒风中等了一个小时的炸鸡。真他妈好吃，这是自由的味道。',
        impact: { money: -100, san: 10 }
      },
      {
        id: 'C',
        text: '绝食抗议',
        title: '绝食抗议',
        description: '\'我在轻断食\'。',
        quote: '老婆赞许地点点头，把你那份喂了狗。狗都不吃。',
        impact: { weight: -1, health: 2 }
      }
    ]
  },
  {
    id: 'd4_sleep',
    day: 4,
    dayLabel: '正月初二',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '饥饿与算计',
    description: '晚上没吃饱，半夜饿醒。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '甚至画饼',
        title: '甚至画饼',
        description: '想想开学后儿子如果考了第一名。',
        quote: '精神食粮填不饱肚子，但能填补焦虑。',
        impact: { san: 2 }
      },
      {
        id: 'B',
        text: '甚至喝水',
        title: '甚至喝水',
        description: '去客厅灌了个水饱。',
        quote: '中年男人连吃夜宵的自由都没有。',
        impact: { weight: 0.5, san: -2 }
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
    title: '红包回收算法v2.0',
    description: '去有钱的姑奶奶家，这是一场金融战役。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '战术指导',
        title: '战术指导',
        description: '\'假装摔倒把红包压身下\'。',
        quote: '吃相太难看。虽然钱到手了，但全族群都觉得这孩子被你教坏了。',
        impact: { money: 1000, face: -20 }
      },
      {
        id: 'B',
        text: '正常流程',
        title: '正常流程',
        description: '\'谢谢姑奶奶，祝您寿比南山\'。',
        quote: '中规中矩。红包厚度一般，但也挑不出毛病。',
        impact: { money: 200, face: 5 }
      },
      {
        id: 'C',
        text: '才艺暴击',
        title: '才艺暴击',
        description: '\'背一首《长恨歌》换红包\'。',
        quote: '知识变现！姑奶奶听得老泪纵横，多给了两百。鸡娃策略终于有了回头钱。',
        impact: { money: 500, face: 15 }
      }
    ]
  },
  {
    id: 'd5_afternoon',
    day: 5,
    dayLabel: '正月初三',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '被老婆收缴的悲剧',
    description: '回到车上，老婆开始清缴所有红包，并盯上了你的私房钱。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '誓死捍卫',
        title: '誓死捍卫',
        description: '\'这是我的烟钱！\'',
        quote: '你保住了两百块，但失去了今晚的被子。这是一场皮洛士式的胜利。',
        impact: { money: 200, san: 5 }
      },
      {
        id: 'B',
        text: '主动上交',
        title: '主动上交',
        description: '\'为了孩子的未来！\'',
        quote: '你彻底变成了无产阶级。老婆夸你懂事，你心里在滴血。',
        impact: { money: -200, san: -5 }
      },
      {
        id: 'C',
        text: '藏匿私房钱',
        title: '藏匿私房钱',
        description: '塞进鞋垫里。',
        quote: '味道有点重，但钱是安全的。只要别被要求脱鞋。',
        impact: { money: 200, luck: -5 }
      }
    ]
  },
  {
    id: 'd5_evening',
    day: 5,
    dayLabel: '正月初三',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '烟花下的虚无',
    description: '村里放烟花，儿子在看烟花，你在逼他背单词。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '加入狂欢',
        title: '加入狂欢',
        description: '\'不背了，放炮去！\'',
        quote: '你点燃了最大的那个\'窜天猴\'。那一刻，你觉得自己也是个孩子。老婆叹了口气，没拦你。',
        impact: { san: 10, face: -2 }
      },
      {
        id: 'B',
        text: '借景抒情',
        title: '借景抒情',
        description: '\'看，烟花就像单词，稍纵即逝\'。',
        quote: '儿子被你整无语了。这种比喻简直是反人类罪。',
        impact: { san: -5, face: 2 }
      },
      {
        id: 'C',
        text: '拍照发圈',
        title: '拍照发圈',
        description: '配文\'岁月静好\'。',
        quote: '朋友圈的点赞数让你获得了一丝虚荣的快感。尽管现实是你冻得流鼻涕。',
        impact: { face: 5, luck: 2 }
      }
    ]
  },
  {
    id: 'd5_sleep',
    day: 5,
    dayLabel: '正月初三',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '财政赤字',
    description: '躺在床上，满脑子都是刚才上交的红包。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '甚至幻想',
        title: '甚至幻想',
        description: '幻想如果彩票中奖。',
        quote: '梦里什么都有。',
        impact: { san: 2 }
      },
      {
        id: 'B',
        text: '甚至计算',
        title: '甚至计算',
        description: '算算距离发工资还有几天。',
        quote: '还有 15 天。绝望。',
        impact: { san: -5 }
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
    title: '战术性称病',
    description: '社交能量耗尽，不想去三舅姥爷家。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '演技爆发',
        title: '演技爆发',
        description: '\'哎哟，腰间盘突出了\'。',
        quote: '成功留守。老婆带着儿子去了。你获得了宝贵的独处时间。',
        impact: { san: 10, face: -2 }
      },
      {
        id: 'B',
        text: '被识破',
        title: '被识破',
        description: '\'别装了，起来开车\'。',
        quote: '老婆太了解你了。你像条死狗一样被拖上了车。',
        impact: { san: -5, face: -2 }
      },
      {
        id: 'C',
        text: '真病了',
        title: '真病了',
        description: '发烧 38 度。',
        quote: '真的是病了。虽然难受，但终于可以正大光明地躺平了。',
        impact: { health: -10, san: 5 }
      }
    ]
  },
  {
    id: 'd6_afternoon',
    day: 6,
    dayLabel: '正月初四',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '乡镇网吧的赛博考古',
    description: '偷偷溜进镇上的网吧，重温青春。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '强行操作',
        title: '强行操作',
        description: '选个亚索快乐一下。',
        quote: '0-12-0。队友问你是不是用脚在玩。虽然输了，但你很快乐。',
        impact: { san: 5, face: -2 }
      },
      {
        id: 'B',
        text: '怀旧模式',
        title: '怀旧模式',
        description: '看个电影。',
        quote: '你在嘈杂的环境里睡着了。这是几天来睡得最香的一觉。',
        impact: { health: 2, money: -20 }
      },
      {
        id: 'C',
        text: '偶遇熟人',
        title: '偶遇熟人',
        description: '碰到当年同学也在上网。',
        quote: '两个中年男人相视一笑，甚至不需要语言。这比什么都治愈。',
        impact: { san: 5, face: 5 }
      }
    ]
  },
  {
    id: 'd6_evening',
    day: 6,
    dayLabel: '正月初四',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '补作业的至暗时刻',
    description: '帮儿子补作业。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '数据造假',
        title: '数据造假',
        description: '直接画个发芽图。',
        quote: '你展现了惊人的绘画天赋。只要老师不查实物，这就是完美的科研欺诈。',
        impact: { luck: 5, face: -2 }
      },
      {
        id: 'B',
        text: '代工模式',
        title: '代工模式',
        description: '\'爸帮你写两页\'。',
        quote: '你模仿儿子的字迹模仿得惟妙惟肖。这是犯罪，但也是父爱。',
        impact: { san: -5, health: -2 }
      },
      {
        id: 'C',
        text: '甚至不愿装',
        title: '甚至不愿装',
        description: '\'就说被狗撕了\'。',
        quote: '这是下策。儿子觉得你是个天才，老婆觉得你是个废柴。',
        impact: { face: -5, luck: -10 }
      }
    ]
  },
  {
    id: 'd6_sleep',
    day: 6,
    dayLabel: '正月初四',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '道德危机',
    description: '帮儿子造假作业，让你产生了一丝丝愧疚。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '甚至反思',
        title: '甚至反思',
        description: '思考中国教育的弊端。',
        quote: '思考了五分钟，觉得还是睡觉要紧。',
        impact: { san: 2 }
      },
      {
        id: 'B',
        text: '甚至侥幸',
        title: '甚至侥幸',
        description: '觉得老师肯定看不出来。',
        quote: '自我安慰大师。心安理得地睡了。',
        impact: { luck: 2 }
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
    title: '同学会前的皮肤整备',
    description: '高中同学聚会，你需要全副武装。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '物理外挂',
        title: '物理外挂',
        description: '穿塑身衣。',
        quote: '勒得慌，但这该死的线条感回来了。哪怕只能坚持两小时。',
        impact: { face: 5, health: -2 }
      },
      {
        id: 'B',
        text: '道具流',
        title: '道具流',
        description: '借车钥匙。',
        quote: '你把表哥的宝马钥匙挂在腰上。虽然车不是你的，但气场是你的。',
        impact: { face: 10, luck: -5 }
      },
      {
        id: 'C',
        text: '休闲风',
        title: '休闲风',
        description: '\'我是乔布斯风格\'。',
        quote: '卫衣牛仔裤。只要你不尴尬，尴尬的就是穿西装的傻 X。',
        impact: { face: -2, san: 5 }
      }
    ]
  },
  {
    id: 'd7_afternoon',
    day: 7,
    dayLabel: '正月初五',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '凡尔赛修罗场',
    description: '同学会上大家互相比拼，班长问你在哪发财。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '模糊概念',
        title: '模糊概念',
        description: '\'做大数据的，涉密\'。',
        quote: '其实就是填 Excel 表。但\'涉密\'两个字让你充满了神秘的高级感。',
        impact: { face: 10, luck: 5 }
      },
      {
        id: 'B',
        text: '自嘲流',
        title: '自嘲流',
        description: '\'给资本家当狗呢\'。',
        quote: '大家哈哈一笑，觉得你这人真实、幽默、没威胁。气氛融洽。',
        impact: { face: 5, san: 5 }
      },
      {
        id: 'C',
        text: '硬撑',
        title: '硬撑',
        description: '\'准备自己搞个项目\'。',
        quote: '班长立马要给你投资，你吓得赶紧借口去厕所。装 X 是有风险的。',
        impact: { face: -5, money: -200 }
      }
    ]
  },
  {
    id: 'd7_evening',
    day: 7,
    dayLabel: '正月初五',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '买单的博弈论',
    description: '结账时刻，你的手在口袋里捏着手机，心跳加速。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '假装接电话',
        title: '假装接电话',
        description: '\'喂？老板啊...\'。',
        quote: '老套路。虽然保住了钱包，但你在同学群里的标签变成了\'鸡贼\'。',
        impact: { face: -10, money: 0 }
      },
      {
        id: 'B',
        text: '真实诚意',
        title: '真实诚意',
        description: '只付 AA 的那份。',
        quote: '最稳妥的选择。不装阔，也不占便宜。中庸之道。',
        impact: { money: -200, face: 0 }
      },
      {
        id: 'C',
        text: '班长全包',
        title: '班长全包',
        description: '\'谢谢班长！\'。',
        quote: '班长大手一挥全付了。你由衷地鼓掌，这一刻他就是你的神。',
        impact: { money: 0, san: 10 }
      }
    ]
  },
  {
    id: 'd7_sleep',
    day: 7,
    dayLabel: '正月初五',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '凡尔赛后遗症',
    description: '回家后，看着班长朋友圈的豪车照片，你陷入了沉思。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '甚至嫉妒',
        title: '甚至嫉妒',
        description: '偷偷百度“班长的公司是不是皮包公司”。',
        quote: '查无此人。心里平衡了一点。',
        impact: { san: 2 }
      },
      {
        id: 'B',
        text: '甚至抱抱',
        title: '甚至抱抱',
        description: '抱住熟睡的老婆，寻求安慰。',
        quote: '虽然没钱，但老婆孩子热炕头，也行吧。',
        impact: { san: 5 }
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
    title: '儿子的罢工',
    description: '儿子罢工不肯学习。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '贿赂法',
        title: '贿赂法',
        description: '\'写完这页，让你玩十分钟手机\'。',
        quote: '成交。虽然这是饮鸩止渴，但至少机器又转动了。',
        impact: { san: -2, luck: 2 }
      },
      {
        id: 'B',
        text: '武力威慑',
        title: '武力威慑',
        description: '拿出拖鞋。',
        quote: '孩子哭了，你也心累。暴政终究不得人心。',
        impact: { san: -5, face: -5 }
      },
      {
        id: 'C',
        text: '加入罢工',
        title: '加入罢工',
        description: '\'那爸也不上班了\'。',
        quote: '你躺在了儿子旁边。父子俩一起看着天花板发呆。老婆气笑了。',
        impact: { san: 10, face: -2 }
      }
    ]
  },
  {
    id: 'd8_afternoon',
    day: 8,
    dayLabel: '正月初六',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '土特产的俄罗斯方块',
    description: '父母往你车里硬塞土特产，空间不足。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '硬塞',
        title: '硬塞',
        description: '利用物理压缩。',
        quote: '你坐上去才把后备箱关上。至于那只鸡会不会闷死，听天由命吧。',
        impact: { health: -2, luck: -2 }
      },
      {
        id: 'B',
        text: '婉拒',
        title: '婉拒',
        description: '\'真吃不完\'。',
        quote: '你妈眼圈红了：\'嫌弃家里的东西不好是不是？\' 你充满了罪恶感，最后还是塞进去了。',
        impact: { face: -5, san: -5 }
      },
      {
        id: 'C',
        text: '偷渡',
        title: '偷渡',
        description: '趁不注意拿出来一点。',
        quote: '你把两颗大白菜偷偷留在了墙角。为了车辆的避震系统，这是必要的牺牲。',
        impact: { san: 5, luck: 5 }
      }
    ]
  },
  {
    id: 'd8_evening',
    day: 8,
    dayLabel: '正月初六',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '最后一晚的寂静',
    description: '坐在老房子门槛上，乡愁袭来。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '感性时刻',
        title: '感性时刻',
        description: '跟父母聊聊心里话。',
        quote: '没说什么宏大的话，就是嘱咐他们注意身体。老爸递给你一根烟，这次没骂你抽烟。',
        impact: { san: 10, face: 5 }
      },
      {
        id: 'B',
        text: '焦虑回归',
        title: '焦虑回归',
        description: '检查 ETC 和油箱。',
        quote: '你迅速切换回了\'城市生存模式\'。感伤是什么？能当油烧吗？',
        impact: { san: -5, luck: 5 }
      },
      {
        id: 'C',
        text: '最后冲刺',
        title: '最后冲刺',
        description: '让儿子再背个单词。',
        quote: '你真是个魔鬼。连家里的狗都看不下去了，对你狂吠。',
        impact: { san: -10, face: -5 }
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
    description: '看着父母准备好的早饭材料，你知道明天早起又是一场战役。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '甚至查路况',
        title: '甚至查路况',
        description: '担心明天堵车，每隔一小时看一眼导航。',
        quote: '地图上的红线让你焦虑。没睡好。',
        impact: { san: -5 }
      },
      {
        id: 'B',
        text: '甚至听呼吸',
        title: '甚至听呼吸',
        description: '听着儿子平稳的呼吸声。',
        quote: '为了这个小吞金兽，拼了。瞬间充满了电。',
        impact: { san: 5, health: 2 }
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
    title: '离别是后视镜里的挥手',
    description: '启动引擎，父母在车窗外挥手。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '潇洒离去',
        title: '潇洒离去',
        description: '一脚油门。',
        quote: '不敢回头，怕眼泪掉下来被老婆嘲笑。你也曾是这个家的孩子啊。',
        impact: { san: -5, face: 2 }
      },
      {
        id: 'B',
        text: '摇下车窗',
        title: '摇下车窗',
        description: '大喊\'保重\'。',
        quote: '你喊破了音。父母笑着挥手，身影越来越小，直到消失在转角。',
        impact: { san: 5, face: 5 }
      },
      {
        id: 'C',
        text: '顺手牵羊',
        title: '顺手牵羊',
        description: '顺走老爸的好烟。',
        quote: '这是\'父爱回收计划\'。你破涕为笑，这趟没白来。',
        impact: { money: 50, san: 5 }
      }
    ]
  },
  {
    id: 'd9_afternoon',
    day: 9,
    dayLabel: '正月初七',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '返程的修罗之路',
    description: '返程高峰，堵车，憋尿，路怒。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '极限憋尿',
        title: '极限憋尿',
        description: '挑战人体极限。',
        quote: '你战胜了生理本能，虽然此时你的脸已经憋成了猪肝色。',
        impact: { health: -5, san: -2 }
      },
      {
        id: 'B',
        text: '路怒症发作',
        title: '路怒症发作',
        description: '狂按喇叭。',
        quote: '并没有什么用，除了费电和遭人白眼。无能狂怒的典型表现。',
        impact: { san: -5, face: -5 }
      },
      {
        id: 'C',
        text: '听书解闷',
        title: '听书解闷',
        description: '放个《曾国藩家书》。',
        quote: '试图用古人的智慧平复路怒。儿子听睡着了，世界清静了。',
        impact: { san: 5, face: 2 }
      }
    ]
  },
  {
    id: 'd9_evening',
    day: 9,
    dayLabel: '正月初七',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '系统重启，游戏继续',
    description: '终于到家，明天上班。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '整理战利品',
        title: '整理战利品',
        description: '把土特产塞进冰箱。',
        quote: '冰箱满了，心也踏实了。这些食物足够你在这个城市苟延残喘一个月。',
        impact: { san: 5, money: 50 }
      },
      {
        id: 'B',
        text: '立即复工',
        title: '立即复工',
        description: '检查邮件。',
        quote: '你是个受虐狂吗？好吧，你是成年人。看着 99+ 的未读邮件，你想死。',
        impact: { san: -10, face: 2 }
      },
      {
        id: 'C',
        text: '终极鸡娃',
        title: '终极鸡娃',
        description: '\'儿子，收心了，做张卷子\'。',
        quote: '儿子绝望的哭声响彻楼道。这才是生活的本来面目。春节大冒险，Game Over，但生活 Online，永不下线。',
        impact: { san: -20, face: 10 }
      }
    ]
  },
  {
    id: 'd9_sleep',
    day: 9,
    dayLabel: '正月初七',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '新的战斗',
    description: '闹钟定在了 7:00。明天是周一。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '甚至失眠',
        title: '甚至失眠',
        description: '想到明天的早会和 PPT。',
        quote: '心脏隐隐作痛。中年人的夜，总是这么长。',
        impact: { san: -5 }
      },
      {
        id: 'B',
        text: '甚至打气',
        title: '甚至打气',
        description: '对着镜子里的发际线说加油。',
        quote: '为了房贷，为了儿子，拼了。',
        impact: { san: 5, health: 2 }
      }
    ]
  },
];

export const biChenglongEndings: Ending[] = [
  {
    id: 'father_404',
    title: '404 Not Found 的“父亲”',
    description: '正月初八的闹钟响了，但你起不来。并不是因为赖床，而是你的大脑像一台过热的服务器，彻底死机了。你在春节赢了亲戚，赢了同学，逼着儿子背完了单词，但现在你躺在医院的白床单上，看着天花板上的灯光重影。医生说这是“重度神经衰弱引发的应激性崩溃”。老婆在病床边哭着数落你，儿子却在一旁偷偷玩手机——他终于没人管了。你的工位被新人顶替，你的“鸡娃”计划无限期搁置。你在这个名为“生活”的游戏里，因为算力过载，被强制下线。',
    condition: (stats) => stats.san < 0 || stats.health < 15
  },
  {
    id: 'system_jailbreak',
    title: '系统越狱成功',
    description: '返程的高速上，车里放着《孤勇者》，你和儿子一起咆哮跟唱，老婆在副驾无奈地翻白眼却嘴角上扬。这个春节，你没能在亲戚面前吹成牛，红包也没抢过别人，甚至被大家当作“没出息”的代表。但你发现，体重涨了 2 斤，久违的笑容回到了脸上，儿子也不再看见你就躲。回到公司，面对 99+ 的邮件，你平静地关掉电脑，决定先点一杯奶茶。你意识到，作为一名普通 NPC，偶尔违背系统的指令，才是最大的自由。',
    condition: (stats) => stats.san > 50 && stats.face < 50
  },
  {
    id: 'sisyphus',
    title: '永不下线的西西弗斯',
    description: '一切就像没发生过一样。后备箱的土特产塞满了冰箱，你按时出现在了周一的晨会上，PPT 依旧做得毫无新意。春节期间的豪言壮语和那些瞬间的感动，在打卡机“滴”的一声中烟消云散。儿子依旧在补习班里挣扎，你依旧在为了房贷和发际线焦虑。你看了看银行卡余额，存款的变动微乎其微。你叹了口气，把保温杯里的枸杞水一饮而尽。生活 Online 继续运行，你既没有崩溃，也没有解脱，只是继续推着那块名为“日子”的巨石，日复一日。',
    condition: () => true // Default ending
  }
];