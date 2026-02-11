import { Character, GameEvent, Ending } from '../../types';

// Reuse default images for generic scenes
const DEFAULT_IMAGES = {
  morning: 'https://i.postimg.cc/T1vvSY5P/001.jpg',
  afternoon: 'https://i.postimg.cc/5yWWGNQ2/002.jpg',
  evening: 'https://i.postimg.cc/NFvvVf2M/003.jpg',
  sleep: 'https://i.postimg.cc/fyQQFTST/004.jpg'
};

export const fanTongChar: Character = {
  id: 'fan_tong',
  name: '范统',
  avatar: 'https://i.postimg.cc/gJ1sYxG4/103.jpg',
  tags: ['脆皮大学生·特种兵', '#眼神清澈', '#除了吃啥也不会'],
  roleDescription: '脆皮大学生·特种兵',
  bio: '“妈，我的秋裤在哪？妈，饭好了没？作为家里的吉祥物，我主要负责‘清澈的愚蠢’。别让我去拜年，我社恐；别让我干活，我低血糖。给我一个 Wifi，我就能安静地躺到元宵节。”',
  baseStats: {
    money: 850,
    weight: 62,
    face: 15,
    san: 80,
    health: 30,
    luck: 60,
  },
};

export const fanTongEvents: GameEvent[] = [
  // Day 1: 腊月二十八
  {
    id: 'd1_morning',
    day: 1,
    dayLabel: '腊月二十八',
    timeOfDay: 'morning',
    timeLabel: '早上',
    title: '春运高铁',
    description: '春运高铁，代号「人类沙丁鱼罐头」。身为脆皮大学生，你凭借特种兵般的意志挤上了车，但你的肉体正在经历物理降维打击。此时，旁边的大叔脱下了鞋……',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '物理防御',
        title: '物理防御',
        description: '带上降噪耳机，屏住呼吸。',
        quote: '你的肺活量得到了锻炼，但由于缺氧，你看到了太奶在向你招手。',
        impact: { san: -5, health: -2 }
      },
      {
        id: 'B',
        text: '魔法攻击',
        title: '魔法攻击',
        description: '以毒攻毒，掏出螺蛳粉干拌面。',
        quote: '整节车厢进入了生化警戒状态，大叔默默穿上了鞋。你赢了，但失去了一切尊严。',
        impact: { face: -10, san: 5 }
      },
      {
        id: 'C',
        text: '精神污染',
        title: '精神污染',
        description: '眼神清澈地盯着大叔的袜子。',
        quote: '大叔被你清澈且愚蠢的眼神看得发毛，以为你是便衣，收敛了不少。',
        impact: { san: -2, face: 2 }
      }
    ]
  },
  {
    id: 'd1_afternoon',
    day: 1,
    dayLabel: '腊月二十八',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '母爱限定体验卡',
    description: '终于到家。此时的母亲处于「刚见儿子怎么看怎么顺眼」的蜜月期。桌上摆满了猪饲料……不对，是爱心水果。她问你：饿不饿？',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '点菜',
        title: '点菜',
        description: '妈！我要吃红烧肉！',
        quote: '母亲露出了慈祥的笑容，你的体重管理计划宣告破产。',
        impact: { weight: 2, health: 2 }
      },
      {
        id: 'B',
        text: '扫兴',
        title: '扫兴',
        description: '妈，我行李箱里有脏衣服...',
        quote: '蜜月期提前结束。母亲的眼神从慈祥转为看废物的嫌弃。',
        impact: { face: -5, san: -5 }
      },
      {
        id: 'C',
        text: '尸体模式',
        title: '尸体模式',
        description: '直接瘫在沙发上装死。',
        quote: '你完美诠释了「回家就是换个地方玩手机」。',
        impact: { health: 1 }
      }
    ]
  },
  {
    id: 'd1_evening',
    day: 1,
    dayLabel: '腊月二十八',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '碳水化合物的狂欢',
    description: '晚饭时间，这是你在家地位的巅峰时刻。父亲问起了你的恋爱状况，而母亲正在给你夹第 8 块排骨。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '战术咀嚼',
        title: '战术咀嚼',
        description: '埋头苦吃，假装听不见。',
        quote: '只要我嚼得够大声，我就听不见催婚的噪音。',
        impact: { weight: 2, face: -2 }
      },
      {
        id: 'B',
        text: '规则怪谈',
        title: '规则怪谈',
        description: '“学校规定不准谈恋爱”。',
        quote: '你爸看你的眼神像在看一个弱智，但他没戳穿你。',
        impact: { face: -5, san: -2 }
      },
      {
        id: 'C',
        text: '极限反杀',
        title: '极限反杀',
        description: '反问：“爸，你私房钱藏好了吗？”',
        quote: '父亲脸色大变，塞给你 50 块封口费。这波是战术互换。',
        impact: { money: 50, luck: 2 }
      }
    ]
  },
  {
    id: 'd1_sleep',
    day: 1,
    dayLabel: '腊月二十八',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '金窝银窝不如狗窝',
    description: '终于躺在了自己那张久违的小床上。虽然枕头有点硬，被子有点潮，但这里没有室友的磨牙声。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '报复性熬夜',
        title: '报复性熬夜',
        description: '刷抖音到凌晨三点，弥补在学校的早八创伤。',
        quote: '熬的不是夜，是自由。虽然明天可能会猝死。',
        impact: { health: -4, san: 5 }
      },
      {
        id: 'B',
        text: '深夜加餐',
        title: '深夜加餐',
        description: '偷偷爬起来去厨房摸了一个鸡腿。',
        quote: '睡前吃东西不消化？那是养生专家的事，我只需要快乐。',
        impact: { weight: 1, san: 2 }
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
    title: '物理唤醒服务',
    description: '早上 8 点。你以为还在学校？太天真了。母亲手持「戴森吸尘器」，开启了「扫地僧模式」，并伴随被动技能「这都几点了还不起」。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '被窝结界',
        title: '被窝结界',
        description: '卷着被子蠕动到床角。',
        quote: '被子被掀开，此时室内温度 5 度。你受到了冰冻暴击。',
        impact: { health: -2, san: -5 }
      },
      {
        id: 'B',
        text: '虚假勤奋',
        title: '虚假勤奋',
        description: '“妈，我那个...我在听网课”。',
        quote: '虽然手机屏幕显示的是 TikTok，但母亲选择了相信（并没有，她只是懒得理你）。',
        impact: { face: 5, luck: 2 }
      },
      {
        id: 'C',
        text: '垂死病中惊坐起',
        title: '垂死病中惊坐起',
        description: '立刻弹射起床叠被子。',
        quote: '由于起猛了，眼前一黑。脆皮大学生的体质暴露无遗，但获得「乖宝宝」称号。',
        impact: { health: -3, face: 5 }
      }
    ]
  },
  {
    id: 'd2_afternoon',
    day: 2,
    dayLabel: '腊月二十九',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '赛博案底大搜查',
    description: '亲戚来串门前的宁静。你试图打两把游戏，却发现家里的 Wi-Fi 信号弱得像你的期末绩点。隔壁装修钻头声响起。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '氪金玩家',
        title: '氪金玩家',
        description: '切换 4G 流量硬刚。',
        quote: '流量跑得比你的心跳还快，但至少游戏赢了（青铜局）。',
        impact: { money: -20, san: 5 }
      },
      {
        id: 'B',
        text: '老年复健',
        title: '老年复健',
        description: '出门溜达，假装现充。',
        quote: '你在楼下的小区健身器材上像个老年人一样转了半小时腰。',
        impact: { health: 2, face: 2 }
      },
      {
        id: 'C',
        text: '家庭弟位',
        title: '家庭弟位',
        description: '帮妈妈剥蒜。',
        quote: '虽然手指辣得疼，但家庭地位略微回升。你获得了「剥蒜小妹」皮肤。',
        impact: { face: 5, luck: 2 }
      }
    ]
  },
  {
    id: 'd2_evening',
    day: 2,
    dayLabel: '腊月二十九',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '秋裤危机',
    description: '气温骤降。你那条破洞牛仔裤在寒风中瑟瑟发抖。母亲拿着一条红色加绒印花秋裤逼近你。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '美丽冻人',
        title: '美丽冻人',
        description: '誓死不从，坚持时尚。',
        quote: '你保住了风度，但失去了膝盖。老寒腿进度条+10%。',
        impact: { health: -5, face: 5 }
      },
      {
        id: 'B',
        text: '真香定律',
        title: '真香定律',
        description: '屈辱穿上。',
        quote: '真香。虽然看起来像个红火腿肠，但真的很暖和。',
        impact: { health: 3, face: -5 }
      },
      {
        id: 'C',
        text: '俄罗斯套娃',
        title: '俄罗斯套娃',
        description: '穿在里面，外裤套上。',
        quote: '腿粗了一圈，现在你看起来像个底盘稳重的米其林轮胎人。',
        impact: { weight: 1, face: -2 }
      }
    ]
  },
  {
    id: 'd2_sleep',
    day: 2,
    dayLabel: '腊月二十九',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '被窝里的梦想',
    description: '穿着大红秋裤躺在被窝里，感觉自己被封印了。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '甚至不想动',
        title: '甚至不想动',
        description: '连上厕所都懒得去，试图憋到天亮。',
        quote: '这是对膀胱的极限挑战。大学生特种兵精神用错了地方。',
        impact: { health: -2, san: -2 }
      },
      {
        id: 'B',
        text: '做梦素材',
        title: '做梦素材',
        description: '睡前看了半小时吃播。',
        quote: '梦里全是肘子。口水把枕头湿了一大片。',
        impact: { san: 5, weight: 0 }
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
    title: '七大姑八大姨前哨战',
    description: '第一批 NPC 刷新了。二姨带着她那考上公务员的儿子来了。客厅里充满了“别人家孩子”的圣光。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '战术撤退',
        title: '战术撤退',
        description: '躲进厕所，带薪拉屎。',
        quote: '你在厕所蹲到腿麻，外面的人以为你便秘，还要给你推荐开塞露。',
        impact: { san: 5, face: -5 }
      },
      {
        id: 'B',
        text: '魔法对轰',
        title: '魔法对轰',
        description: '主动出击：“表哥工资多少？”',
        quote: '空气凝固了。你用魔法打败了魔法，但被表哥拉入了黑名单。',
        impact: { face: -10, san: 10 }
      },
      {
        id: 'C',
        text: '装傻充愣',
        title: '装傻充愣',
        description: '全程傻笑：“啊对对对”。',
        quote: '你扮演了一个完美的智障吉祥物，二姨觉得你这孩子虽然傻但犹豫。',
        impact: { face: -2, san: -2 }
      }
    ]
  },
  {
    id: 'd3_afternoon',
    day: 3,
    dayLabel: '正月初一',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '熊孩子空降',
    description: '你的房间被表弟入侵了。他指着你那一柜子手办问：“哥哥，这个送我行不行？”眼神比你还清澈。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '生化警告',
        title: '生化警告',
        description: '“这个有毒，摸了手烂掉”。',
        quote: '表弟被吓哭了。二姨过来骂你不懂事，但手办保住了。',
        impact: { face: -5, san: 5 }
      },
      {
        id: 'B',
        text: '破财消灾',
        title: '破财消灾',
        description: '忍痛割爱，给个最便宜的。',
        quote: '心在滴血。表弟拿到后立刻把手办的头拧了下来。',
        impact: { money: -50, san: -10 }
      },
      {
        id: 'C',
        text: '同归于尽',
        title: '同归于尽',
        description: '带他打王者荣耀。',
        quote: '你被坑得星耀掉钻石。他还要举报你送人头。',
        impact: { san: -15, health: -2 }
      }
    ]
  },
  {
    id: 'd3_evening',
    day: 3,
    dayLabel: '正月初一',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '洗碗修罗场',
    description: '一大桌子菜吃完了。亲戚们去客厅嗑瓜子，留下一片狼藉。妈妈在厨房喊：“范统，来帮把手！”这是一道送命题。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '尿遁',
        title: '尿遁',
        description: '装作接电话溜走。',
        quote: '你在寒风中假装业务繁忙。亲戚们评价你‘这孩子真不着家’。',
        impact: { face: -10, luck: -2 }
      },
      {
        id: 'B',
        text: '打工魂',
        title: '打工魂',
        description: '老实洗碗。',
        quote: '腰酸背痛，手被洗洁精泡皱了。获得了“全村好女婿/儿媳储备人选”称号。',
        impact: { health: -3, face: 10 }
      },
      {
        id: 'C',
        text: '物理免役',
        title: '物理免役',
        description: '打碎一个盘子。',
        quote: '岁岁平安！妈妈把你赶出了厨房，你是故意的还是不小心的？',
        impact: { money: -20, face: -5 }
      }
    ]
  },
  {
    id: 'd3_sleep',
    day: 3,
    dayLabel: '正月初一',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '身心俱疲',
    description: '这一天比跑 800 米体测还累。你需要精神按摩。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '奖励自己',
        title: '奖励自己',
        description: '躲被窝里看小说/漫画。',
        quote: '只有二次元的世界没有熊孩子和洗碗。',
        impact: { san: 10, health: -2 }
      },
      {
        id: 'B',
        text: '甚至不洗澡',
        title: '甚至不洗澡',
        description: '太累了，直接睡。',
        quote: '反正明天不出门，脏点怎么了？',
        impact: { face: -5, health: 2 }
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
    title: '乡村土味大拜年',
    description: '被迫营业。你需要跟着父母去村里各家拜年。手里提着两箱奶，口袋里揣着用来假装拒绝红包的双手。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '复读机',
        title: '复读机',
        description: '见人就喊过年好。',
        quote: '哪怕对着村口的狗你也喊了过年好。你在这个早上是没有感情的拜年机器。',
        impact: { face: 5, san: -2 }
      },
      {
        id: 'B',
        text: '影帝附体',
        title: '影帝附体',
        description: '极限拉扯红包。',
        quote: '推拉了三个回合，最后“勉为其难”收下。演技堪比奥斯卡。',
        impact: { money: 200, face: 5 }
      },
      {
        id: 'C',
        text: '甚至叫错',
        title: '甚至叫错',
        description: '叫错长辈称呼。',
        quote: '把“二舅姥爷”叫成了“大表哥”。场面一度十分赛博朋克。',
        impact: { face: -20, luck: -5 }
      }
    ]
  },
  {
    id: 'd4_afternoon',
    day: 4,
    dayLabel: '正月初二',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '猪瘾发作',
    description: '连续两天的吃席让你消化系统过载，但嘴巴还是寂寞。面对满桌的坚果零食，你的手不受控制。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '暴风吸入',
        title: '暴风吸入',
        description: '狂炫开心果。',
        quote: '热量炸弹。你的脸上冒出了一颗巨大的痘痘，仿佛在嘲笑你。',
        impact: { weight: 2, face: -2 }
      },
      {
        id: 'B',
        text: '甚至刮油',
        title: '甚至刮油',
        description: '只喝茶刮油。',
        quote: '肚子咕咕叫，你在富得流油的春节里体验饥荒。',
        impact: { health: 2, san: -2 }
      },
      {
        id: 'C',
        text: '甚至是狗',
        title: '甚至是狗',
        description: '偷偷喂狗。',
        quote: '狗吃得比你还开心，并誓死效忠于你。',
        impact: { luck: 5, san: 5 }
      }
    ]
  },
  {
    id: 'd4_evening',
    day: 4,
    dayLabel: '正月初二',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '学术界恐怖袭击',
    description: '那个当老师的舅舅来了。他推了推眼镜，发出了灵魂拷问：“这学期绩点多少？四级过了吗？奖学金拿了吗？”',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '甚至撒谎',
        title: '甚至撒谎',
        description: '“过了过了，都挺好”。',
        quote: '含糊其辞。舅舅看出了你的心虚，露出了看学渣的慈悲笑容。',
        impact: { face: -5, luck: -2 }
      },
      {
        id: 'B',
        text: '祸水东引',
        title: '祸水东引',
        description: '“舅，听说表姐还在相亲？”。',
        quote: '精准爆破。舅舅立刻转移了火力去骂表姐。表姐想杀你的心都有了。',
        impact: { san: 10, luck: -5 }
      },
      {
        id: 'C',
        text: '虚假好学',
        title: '虚假好学',
        description: '展示手机里的英语单词 APP。',
        quote: '虽然你只背了 abandon，但这一刻你就是学术界的伪装者。',
        impact: { face: 10, san: 2 }
      }
    ]
  },
  {
    id: 'd4_sleep',
    day: 4,
    dayLabel: '正月初二',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '消化不良',
    description: '白天炫了太多坚果，晚上胃里像装了块石头。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '甚至吃药',
        title: '甚至吃药',
        description: '找健胃消食片。',
        quote: '江中牌，家中常备。脆皮大学生连消化系统都是脆的。',
        impact: { health: 3, san: -2 }
      },
      {
        id: 'B',
        text: '甚至发誓',
        title: '甚至发誓',
        description: '发誓明天减肥。',
        quote: '这是你第 108 次发誓。上天都听腻了。',
        impact: { san: 2, weight: 0 }
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
    title: '社交能量枯竭',
    description: 'SAN 值狂掉。你不想见任何人。你只想在被窝里发霉。但门口传来了敲门声。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '林黛玉模式',
        title: '林黛玉模式',
        description: '装病，发出虚弱的声音。',
        quote: '演技逼真。妈妈给你端来了姜汤，你含泪喝下，获得「病娇」属性。',
        impact: { health: 2, face: -2 }
      },
      {
        id: 'B',
        text: '学霸结界',
        title: '学霸结界',
        description: '戴上耳机假装上网课。',
        quote: '门开了又关了。只要涉及学习，他们就不敢打扰，这是至高规则。',
        impact: { face: 5, san: 2 }
      },
      {
        id: 'C',
        text: '返祖现象',
        title: '返祖现象',
        description: '冲出去发疯。',
        quote: '你在客厅跳了一段扭秧歌。亲戚们觉得你读书读傻了，纷纷退散。',
        impact: { face: -20, san: 20 }
      }
    ]
  },
  {
    id: 'd5_afternoon',
    day: 5,
    dayLabel: '正月初三',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '乡村才艺大舞台',
    description: '家庭聚会高潮。长辈们喝高了，开始点名：“范统啊，你是大学生，给大家表演个节目/讲两句！”',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '甚至打嗝',
        title: '甚至打嗝',
        description: '表演一口闷可乐。',
        quote: '这就是你的才艺？除了打嗝声很响亮，没有任何技术含量。',
        impact: { face: -5, weight: 1 }
      },
      {
        id: 'B',
        text: '甚至背书',
        title: '甚至背书',
        description: '朗诵《我的区长父亲》（误）。',
        quote: '你背了一段课文。空气中弥漫着尴尬的气息，只有奶奶在鼓掌。',
        impact: { face: -10, san: -5 }
      },
      {
        id: 'C',
        text: '核心科技',
        title: '核心科技',
        description: '教大家如何领拼多多红包。',
        quote: '全场沸腾！你成为了家族的技术核心，大家都夸你书没白读。',
        impact: { face: 10, money: 5 }
      }
    ]
  },
  {
    id: 'd5_evening',
    day: 5,
    dayLabel: '正月初三',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '剩菜循环启动',
    description: '新鲜菜已经吃完了。从今晚开始，就是无限的剩菜热了吃、吃了热。这是一场名为「清理冰箱」的战役。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '精准挑食',
        title: '精准挑食',
        description: '只挑肉吃。',
        quote: '被妈妈筷子敲头。但你成功摄入了蛋白质。',
        impact: { weight: 2, face: -2 }
      },
      {
        id: 'B',
        text: '甚至乱炖',
        title: '甚至乱炖',
        description: '做成大乱炖盖浇饭。',
        quote: '卖相极差，味道极佳。这就是猪食的美学。',
        impact: { health: -3, san: 5 }
      },
      {
        id: 'C',
        text: '甚至作死',
        title: '甚至作死',
        description: '点外卖（作死）。',
        quote: '你在满桌剩菜面前点了炸鸡。妈妈的怒气值蓄力 100%。',
        impact: { money: -30, face: -10 }
      }
    ]
  },
  {
    id: 'd5_sleep',
    day: 5,
    dayLabel: '正月初三',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '深度昏迷',
    description: '连续几天的应酬让你耗尽了 MP（魔法值）。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '甚至不玩手机',
        title: '甚至不玩手机',
        description: '手机扔一边，直接睡死。',
        quote: '这是身体的求救信号。你睡得像个死猪。',
        impact: { health: 5, san: 5 }
      },
      {
        id: 'B',
        text: '梦游',
        title: '梦游',
        description: '梦见自己还在学校赶 Due。',
        quote: '吓醒了，发现是在家，感到了稳稳的幸福。',
        impact: { san: -2, luck: 2 }
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
    title: '逃离亲戚计划',
    description: '你已经受够了虚伪的寒暄。你决定实施「越狱计划」，目标：没有任何亲戚的快乐老家（网吧/奶茶店）。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '甚至借口',
        title: '甚至借口',
        description: '借口“找同学借资料”。',
        quote: '万能理由。只要是关于学习，你就算去火星他们都支持。',
        impact: { face: 5, luck: 2 }
      },
      {
        id: 'B',
        text: '甚至潜行',
        title: '甚至潜行',
        description: '趁乱溜走。',
        quote: '潜行成功。你像个逃犯一样在街上狂奔，自由的气息！',
        impact: { san: 10, face: -5 }
      },
      {
        id: 'C',
        text: '甚至被抓',
        title: '甚至被抓',
        description: '被抓壮丁去买醋。',
        quote: '越狱失败。你被发配到超市，并在那里遇到了不想见的小学同学。',
        impact: { san: -5, luck: -5 }
      }
    ]
  },
  {
    id: 'd6_afternoon',
    day: 6,
    dayLabel: '正月初四',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '街溜子模式',
    description: '你在县城的商业街游荡。这里充满了杀马特的回忆和蜜雪冰城的甜蜜歌声。兜里只有 850 块巨款。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '雪王诱惑',
        title: '雪王诱惑',
        description: '全款拿下蜜雪冰城圣代。',
        quote: '6 块钱的快乐，是你此时此刻能掌控的极致奢华。',
        impact: { money: -6, san: 5 }
      },
      {
        id: 'B',
        text: '散财童子',
        title: '散财童子',
        description: '去电玩城抓娃娃。',
        quote: '那个爪子比你的意志力还松。你一无所获，痛失 50 大洋。',
        impact: { money: -50, luck: -5 }
      },
      {
        id: 'C',
        text: '冤家路窄',
        title: '冤家路窄',
        description: '偶遇高中班主任。',
        quote: '噩梦重现。条件反射想喊‘起立’。尴尬聊了两句，你只想土遁。',
        impact: { san: -20, face: 2 }
      }
    ]
  },
  {
    id: 'd6_evening',
    day: 6,
    dayLabel: '正月初四',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '虚假的同学群',
    description: '高中班群突然诈尸。班长提议明天聚会。群里开始疯狂接龙，每个人都在用表情包掩饰装逼的欲望。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '甚至视奸',
        title: '甚至视奸',
        description: '潜水视奸，坚决不去。',
        quote: '这是明智的。但你将错过所有八卦，包括谁整容了。',
        impact: { san: 2, face: 0 }
      },
      {
        id: 'B',
        text: '为了干饭',
        title: '为了干饭',
        description: '虽然社恐，为了蹭饭还是去吧。',
        quote: '你报名了。AA 制预警。你的钱包在哭泣。',
        impact: { money: -100, san: -5 }
      },
      {
        id: 'C',
        text: '甚至收到',
        title: '甚至收到',
        description: '在群里发个“收到”。',
        quote: '你破坏了队形，大家都在发接龙，就你发收到。像个呆子。',
        impact: { face: -5, luck: -2 }
      }
    ]
  },
  {
    id: 'd6_sleep',
    day: 6,
    dayLabel: '正月初四',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '社交前夜的焦虑',
    description: '明天要见高中同学了，你开始焦虑穿什么，以及如果遇到前任（暗恋对象）怎么办。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '甚至面膜',
        title: '甚至面膜',
        description: '偷用妈妈的面膜急救。',
        quote: '虽然脸大面膜小，但心理安慰拉满。',
        impact: { face: 2, money: 0 }
      },
      {
        id: 'B',
        text: '甚至演练',
        title: '甚至演练',
        description: '对着镜子练习“好久不见”。',
        quote: '像个神经病一样练了半小时。结果失眠了。',
        impact: { san: -5, health: -2 }
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
    title: '战袍选择困难症',
    description: '为了下午的同学聚会，你需要把自己打扮得像个人样。但你的衣柜里只有优衣库打折款和高中校服。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '甚至偷穿',
        title: '甚至偷穿',
        description: '偷穿老爸的西装。',
        quote: '像个偷穿大人衣服的巨婴，或者卖保险的实习生。',
        impact: { face: -15, luck: -2 }
      },
      {
        id: 'B',
        text: '甚至极简',
        title: '甚至极简',
        description: '极简风：卫衣+牛仔裤。',
        quote: '这就叫松弛感（其实是穷）。只要你不尴尬，尴尬的就是别人。',
        impact: { face: 0, san: 5 }
      },
      {
        id: 'C',
        text: '甚至洗头',
        title: '甚至洗头',
        description: '洗头，吹个造型。',
        quote: '洗头是对聚会最高的尊重。虽然发际线有点危险。',
        impact: { face: 5, luck: 2 }
      }
    ]
  },
  {
    id: 'd7_afternoon',
    day: 7,
    dayLabel: '正月初五',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '凡尔赛斗兽场',
    description: '同学聚会现场。这不是饭局，这是吹牛逼锦标赛。有人年薪百万（编的），有人创业融资（借的）。你坐在角落。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '甚至回本',
        title: '甚至回本',
        description: '埋头苦吃，吃回本。',
        quote: '你们吹你们的牛，我吃我的肉。在这场战役中，只有你的胃是赢家。',
        impact: { weight: 3, san: 5 }
      },
      {
        id: 'B',
        text: '甚至捧哏',
        title: '甚至捧哏',
        description: '附和班长：“啊对，您太强了”。',
        quote: '完美的捧哏。班长很受用，决定这顿饭少收你 10 块钱。',
        impact: { money: 10, face: -2 }
      },
      {
        id: 'C',
        text: '甚至冬眠',
        title: '甚至冬眠',
        description: '被问现状：“我在做人体冬眠研究”。',
        quote: '其实就是天天在宿舍睡觉。大家觉得你深不可测。',
        impact: { face: 10, luck: -2 }
      }
    ]
  },
  {
    id: 'd7_evening',
    day: 7,
    dayLabel: '正月初五',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '账单暴击',
    description: '结账时刻。KTV 转场？不存在的，AA 制账单发到了群里。人均 200。你的存款瑟瑟发抖。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '甚至含泪',
        title: '甚至含泪',
        description: '含泪转账。',
        quote: '你的小金库遭到了降维打击。接下来只能吃土了。',
        impact: { money: -200, san: -10 }
      },
      {
        id: 'B',
        text: '甚至拖延',
        title: '甚至拖延',
        description: '假装信号不好，晚点给。',
        quote: '拖延战术。但这只能延缓死亡，并让你在群里的信用分归零。',
        impact: { face: -15, luck: -5 }
      },
      {
        id: 'C',
        text: '甚至抢包',
        title: '甚至抢包',
        description: '抢个红包回血。',
        quote: '你在群里抢到了班长发的 0.5 元红包。杯水车薪，但聊胜于无。',
        impact: { money: 0.5, face: -5 }
      }
    ]
  },
  {
    id: 'd7_sleep',
    day: 7,
    dayLabel: '正月初五',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '社交后的空虚',
    description: '回到家，卸下伪装。看着群里还在发的聚会照片，你发现自己像个路人甲。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '甚至退群',
        title: '甚至退群',
        description: '屏蔽群消息，眼不见为净。',
        quote: '热闹是他们的，我什么都没有，除了 0.5 元红包。',
        impact: { san: 5 }
      },
      {
        id: 'B',
        text: '甚至复盘',
        title: '甚至复盘',
        description: '躺在床上回味刚才没发挥好的吵架/吹牛片段。',
        quote: '如果当时我这么说，一定能震慑全场。可惜没如果。',
        impact: { san: -10, health: -2 }
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
    title: '假期余额不足',
    description: '倒数第二天。一种名为「不想上学」的绝症开始蔓延。你在床上瘫成了液态。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '甚至躺平',
        title: '甚至躺平',
        description: '赖床到中午 12 点。',
        quote: '与床融为一体。妈妈已经放弃喊你，直接把饭端到了床头（那是给猪的待遇）。',
        impact: { health: -2, face: -5 }
      },
      {
        id: 'B',
        text: '甚至赶工',
        title: '甚至赶工',
        description: '疯狂赶没写完的论文/作业。',
        quote: '创造奇迹的时刻。你的键盘冒出了火星，内容全靠编。',
        impact: { san: -15, face: 5 }
      },
      {
        id: 'C',
        text: '甚至整理',
        title: '甚至整理',
        description: '收拾心情，整理行李。',
        quote: '看着空荡荡的箱子，你感到一阵空虚。然后发现袜子少了一只。',
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
    title: '空间折叠术',
    description: '妈妈开始了「俄罗斯方块」表演。她试图把整头猪、十斤特产和她的爱塞进你的行李箱。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '甚至抗议',
        title: '甚至抗议',
        description: '“妈，真的装不下了！”',
        quote: '无效抗议。妈妈利用物理法则强行压缩了空间，行李箱发出了惨叫。',
        impact: { face: -2, san: -2 }
      },
      {
        id: 'B',
        text: '甚至超重',
        title: '甚至超重',
        description: '默默接受，准备超重。',
        quote: '你将背负着沉重的爱（物理）踏上旅途。这箱子比你人都重。',
        impact: { weight: 0, health: -5 }
      },
      {
        id: 'C',
        text: '甚至夹带',
        title: '甚至夹带',
        description: '偷拿几包辣条塞进去。',
        quote: '这是你最后的倔强。返校后的快乐源泉。',
        impact: { money: -10, san: 5 }
      }
    ]
  },
  {
    id: 'd8_evening',
    day: 8,
    dayLabel: '正月初六',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '最后的晚餐',
    description: '离家前的最后一顿饭。气氛略显沉重。父母开始唠叨：「在学校多吃点，没钱了说。」',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '甚至打钱',
        title: '甚至打钱',
        description: '“妈，打钱！”',
        quote: '虽然直接，但有效。你的小金库瞬间充盈。这就是亲情的金钱具象化。',
        impact: { money: 1000, face: -10 }
      },
      {
        id: 'B',
        text: '甚至感动',
        title: '甚至感动',
        description: '鼻头一酸，默默吃饭。',
        quote: '有些话在心里。红烧肉真好吃，下次吃要等半年了。',
        impact: { san: -5, face: 5 }
      },
      {
        id: 'C',
        text: '甚至画饼',
        title: '甚至画饼',
        description: '画饼：“毕业后我养你们”。',
        quote: '父母笑得很开心，虽然他们知道你现在连自己都养不活。',
        impact: { face: 10, san: 5 }
      }
    ]
  },
  {
    id: 'd8_sleep',
    day: 8,
    dayLabel: '正月初六',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '离别前夜',
    description: '看着收拾好的行李箱，突然觉得家里那个破沙发都变亲切了。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '甚至不舍',
        title: '甚至不舍',
        description: '在家里每个房间转一圈。',
        quote: '像巡视领地的狗。这里虽然吵，但这里是家。',
        impact: { san: -2, luck: 2 }
      },
      {
        id: 'B',
        text: '甚至兴奋',
        title: '甚至兴奋',
        description: '想到回学校没人管了。',
        quote: '自由在召唤！外卖在召唤！通宵在召唤！',
        impact: { san: 10, health: -2 }
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
    title: '离别综合症',
    description: '清晨的车站。寒风凛冽。父母站在车窗外，像两尊守望的雕像。你不敢看他们的眼睛。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '甚至装酷',
        title: '甚至装酷',
        description: '戴上墨镜，酷酷地挥手。',
        quote: '为了掩饰眼角的湿润。装逼是你最后的防线。',
        impact: { face: 5, san: -5 }
      },
      {
        id: 'B',
        text: '甚至画心',
        title: '甚至画心',
        description: '在车窗上哈气画爱心。',
        quote: '土味但温情。妈妈笑了，并在窗外喊着让你穿秋裤。',
        impact: { face: 2, san: 5 }
      },
      {
        id: 'C',
        text: '甚至逃避',
        title: '甚至逃避',
        description: '低头玩手机，不敢抬头。',
        quote: '逃避可耻但有用。车开了，你才敢回头看那两个变小的黑点。',
        impact: { face: -5, san: -10 }
      }
    ]
  },
  {
    id: 'd9_afternoon',
    day: 9,
    dayLabel: '正月初七',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '各种交通工具大乱炖',
    description: '村巴转大巴，大巴转高铁，高铁转地铁。你正在经历「人体运输极限挑战」。箱子里的土特产漏油了。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '甚至搬砖',
        title: '甚至搬砖',
        description: '硬抗行李箱爬楼梯。',
        quote: '脆皮大学生的手臂断裂（夸张）。你觉得自己像个搬砖的。',
        impact: { health: -10, weight: -1 }
      },
      {
        id: 'B',
        text: '甚至求助',
        title: '甚至求助',
        description: '向路人求助。',
        quote: '遇到好心大哥帮忙。人间自有真情在，除了你的箱子真的很重。',
        impact: { luck: 5, face: -2 }
      },
      {
        id: 'C',
        text: '甚至滑行',
        title: '甚至滑行',
        description: '坐在箱子上滑行。',
        quote: '箱子轮子崩飞了一个。现在你是一个只有三个轮子的悲剧。',
        impact: { face: -10, money: -50 }
      }
    ]
  },
  {
    id: 'd9_evening',
    day: 9,
    dayLabel: '正月初七',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '回归狗窝',
    description: '推开宿舍门。一股熟悉的霉味扑面而来。室友们还没回来。你瘫在椅子上，点了一份外卖。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '甚至家乡味',
        title: '甚至家乡味',
        description: '打开妈妈带的酱牛肉。',
        quote: '咬一口，满嘴家乡味。春节结束了，生存游戏重新开始。',
        impact: { san: 10, health: 2 }
      },
      {
        id: 'B',
        text: '甚至称重',
        title: '甚至称重',
        description: '上秤称体重。',
        quote: '看着那个数字，你发出了杀猪般的惨叫。每逢佳节胖三斤，诚不我欺。',
        impact: { san: -15, weight: 0 }
      },
      {
        id: 'C',
        text: '甚至立Flag',
        title: '甚至立Flag',
        description: '立个Flag：新学期我要做卷王。',
        quote: 'Flag 立起来就是为了倒的。洗洗睡吧，明天早八。',
        impact: { face: 5, luck: -2 }
      }
    ]
  },
  {
    id: 'd9_sleep',
    day: 9,
    dayLabel: '正月初七',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '新学期第一夜',
    description: '宿舍的床板比家里的硬，但 Wi-Fi 很快。你躺在床上，听着隔壁床室友的呼噜声（如果回来了），或者享受孤独。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '甚至失眠',
        title: '甚至失眠',
        description: '认床，翻来覆去睡不着。',
        quote: '换了地图，身体还没适应。数羊数到了 5000 只。',
        impact: { health: -2, san: -5 }
      },
      {
        id: 'B',
        text: '甚至通宵',
        title: '甚至通宵',
        description: '打开电脑，启动游戏。',
        quote: '没人管了！今晚我是夜之城的主宰！',
        impact: { health: -10, san: 10 }
      }
    ]
  },
];

export const fanTongEndings: Ending[] = [
  {
    id: 'icu_experience',
    title: '脆皮大学生的“ICU 体验卡”',
    description: '返校的第二天，你没能出现在早八的课堂上，而是出现在了校医院的挂水室里。医生看着你的体检报告直摇头：“现在的年轻人，身体素质还不如跳广场舞的大妈。”回想这个春节，你在高铁上为了面子憋气缺氧，为了时尚在寒风中瑟瑟发抖，为了游戏通宵达旦。你以为自己是铁打的特种兵，现实却给了你一记响亮的耳光。此刻，看着快要见底的吊瓶和上涨的体重，你明白了什么是“生命不能承受之轻”。室友给你带回了食堂的饭，你却毫无胃口，因为你的胃还在为那顿大乱炖剩菜买单。',
    condition: (stats) => stats.health < 15
  },
  {
    id: 'campus_tycoon',
    title: '带资进组的“校园财阀”',
    description: '坐在宿舍的椅子上，你看着手机银行的余额，嘴角比AK47还难压。虽然这个春节你可能在亲戚面前装过傻，在熊孩子面前认过怂，甚至在同学聚会上当了捧哏，但这一切都是值得的。你不仅成功躲过了所有的人情债，还反向收割了一波亲情赞助费。当室友们还在为生活费发愁吃土时，你已经点了一份豪华外卖并在淘宝上下单了新的皮肤。你不仅毫发无伤地度过了春节劫，还完成了资本的原始积累。这就是忍辱负重的胜利，这学期，你是宿舍的王。',
    condition: (stats) => stats.money > 1200 && stats.san > 70
  },
  {
    id: 'nanke_yimeng',
    title: '无事发生的“南柯一梦”',
    description: '闹钟响起的瞬间，你恍惚了很久，分不清现在是初三还是开学第一周。看着镜子里圆了一圈的脸和空荡荡的钱包，你会产生一种错觉：这个寒假真的存在过吗？那些七大姑八大姨的盘问、同学聚会上的虚伪凡尔赛、以及母亲戴森吸尘器的轰鸣声，仿佛是一场热闹而荒诞的梦。你打开行李箱，拿出一包被挤压变形的辣条塞进嘴里，熟悉的味道提醒你：生存游戏重新开始了。你没有变强，也没有变富，只是单纯地变胖了。但这，或许就是大多数大学生最真实的写照。',
    condition: () => true // Default ending
  }
];
