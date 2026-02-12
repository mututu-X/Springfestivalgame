
import { Character, GameEvent, Ending } from '../../types';

// Reuse default images for generic scenes
const DEFAULT_IMAGES = {
  morning: 'https://i.postimg.cc/T1vvSY5P/001.jpg',
  afternoon: 'https://i.postimg.cc/5yWWGNQ2/002.jpg',
  evening: 'https://i.postimg.cc/NFvvVf2M/003.jpg',
  sleep: 'https://i.postimg.cc/fyQQFTST/004.jpg'
};

export const haoYouqianChar: Character = {
  id: 'hao_youqian',
  name: '郝有乾',
  avatar: 'https://i.postimg.cc/HsvC57Qb/106.jpg',
  tags: ['隐形富豪·土味房东', '#人字拖', '#蛇皮袋装现金'],
  roleDescription: '隐形富豪·土味房东',
  bio: '“穿着这件起球的 POLO 衫，踩着五块钱的人字拖，没人知道我腰上挂的那串钥匙能买下半个 CBD。那些开宝马回来的小年轻，车还是租我的呢。发红包？随便啦，每人两百，见者有份。”',
  baseStats: {
    money: 12800000,
    weight: 72,
    face: 95,
    san: 98,
    health: 60,
    luck: 90,
  },
};

export const haoYouqianEvents: GameEvent[] = [
  // Day 1: 腊月二十八 (2月15日)
  {
    id: 'd1_morning',
    day: 1,
    dayLabel: '腊月二十八',
    timeOfDay: 'morning',
    timeLabel: '早上',
    title: '安检风云',
    description: '如果你以为亿万富翁都坐私人飞机，那你显然不懂什么是‘old money’的伪装。你拖着红蓝白三色蛇皮袋（里面装了200万现金备用）站在高铁安检口。安检员看着X光机里致密的有机物图像，眼神像是在扫描一颗战术核弹。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '饲料专款',
        title: '饲料专款',
        description: '淡定表示是给猪买的饲料款。',
        quote: '安检员眼神充满了对‘养猪大户’的敬畏与关爱。你顺利过关，深藏功与名。',
        impact: { face: -5, san: 2 }
      },
      {
        id: 'B',
        text: '露富补票',
        title: '露富补票',
        description: '打开袋子一角，露出粉色一角。',
        quote: '你不得不买了最贵的补票费，并被三个乘警全程‘护送’上车。高调的代价是失去了低调的自由。',
        impact: { face: 10, money: -500 }
      },
      {
        id: 'C',
        text: '装傻充愣',
        title: '装傻充愣',
        description: '用脚趾扣紧人字拖，装傻充愣。',
        quote: '被当成进城务工的困难户，安检小姐姐差点给你众筹车票。你的尊严系统遭受降维打击。',
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
    title: '村口情报',
    description: '回村的最后两公里。村口的大槐树下坐着‘情报中心’的五位大妈。她们是乡村的生物雷达，任何数据包（返乡人员）都必须经过她们的深包检测。你那件起球的 POLO 衫成为了她们攻击的漏洞。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '假烟攻势',
        title: '假烟攻势',
        description: '主动递上华子，假装是假烟。',
        quote: '‘哎哟，有乾这孩子还是这么朴实，抽假烟都这么大方。’ 伪装成功，情报等级判定为：无害废物。',
        impact: { money: -100, face: 2 }
      },
      {
        id: 'B',
        text: '落荒而逃',
        title: '落荒而逃',
        description: '低头疾走，甚至跑掉了一只拖鞋。',
        quote: '谣言生成中：《郝家那小子可能在外面欠了高利贷》。你的风评被害，但安全系数上升。',
        impact: { face: -15, health: -1 }
      },
      {
        id: 'C',
        text: '转钥匙圈',
        title: '转钥匙圈',
        description: '掏出 CBD 的钥匙串当指尖陀螺转。',
        quote: '大妈们看不懂这是写字楼钥匙，以为你是配钥匙的。职业歧视链启动，你被列为‘技术工种’。',
        impact: { face: 5, luck: 2 }
      }
    ]
  },
  {
    id: 'd1_evening',
    day: 1,
    dayLabel: '腊月二十八',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '时尚审判',
    description: '晚饭桌上，老母亲盯着你那件价值 8000 块但刻意做旧起球的限量版名牌 T 恤，眼里的心疼溢出了屏幕。她觉得你在大城市过得连乞丐都不如。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '强行解释',
        title: '强行解释',
        description: '解释这是做旧工艺。',
        quote: '老妈根本不信，并试图用剃毛球机给你的限量版做‘物理整形’。你的心在滴血。',
        impact: { san: -5, money: -8000 } // Value lost or emotional damage
      },
      {
        id: 'B',
        text: '默认哭穷',
        title: '默认哭穷',
        description: '默认自己过得苦，大口吃肉。',
        quote: '老妈给你碗里堆成了喜马拉雅山。虽然撑得半死，但亲情防火墙已修复。',
        impact: { weight: 1, health: -1 }
      },
      {
        id: 'C',
        text: '现金垫桌',
        title: '现金垫桌',
        description: '拿出两叠现金放在桌腿垫桌子。',
        quote: '全家沉默。老爹默默把你面前的咸菜换成了红烧肉。金钱的物理属性战胜了审美焦虑。',
        impact: { face: 10, san: 5 }
      }
    ]
  },
  {
    id: 'd1_sleep',
    day: 1,
    dayLabel: '腊月二十八',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '金钱安眠',
    description: '躺在老家硬邦邦的木板床上，你有点想念 CBD 顶层那张价值 20 万的海斯腾床垫。房间角落放着那个装满现金的蛇皮袋。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '高枕无忧',
        title: '高枕无忧',
        description: '把蛇皮袋塞到枕头底下。',
        quote: '没有什么比枕着 200 万现金更助眠了，如果有，那就是 400 万。',
        impact: { san: 5, luck: 2 }
      },
      {
        id: 'B',
        text: '豪掷网购',
        title: '豪掷网购',
        description: '下单给家里买全套智能家电。',
        quote: '虽然人要低调，但生活质量不能低调。明天快递到了就说是公司发的福利。',
        impact: { money: -50000, san: 2 }
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
    title: '鸡鸣早起',
    description: '在 CBD 习惯了中午起床的你，早上 6 点就被楼下的鸡叫声和老爹劈柴的声音强制开机。你的睡眠系统崩溃，san 值狂掉。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '买鸡炖汤',
        title: '买鸡炖汤',
        description: '冲下楼要把鸡买了炖汤。',
        quote: '你挥舞着钞票买下了那只公鸡。世界安静了，但老爹看你的眼神像看个杀人犯。',
        impact: { money: -200, san: 5 }
      },
      {
        id: 'B',
        text: '降噪续命',
        title: '降噪续命',
        description: '戴上降噪耳机继续睡。',
        quote: '你错过了早饭，被亲戚们贴上了‘好吃懒做’的标签。富豪的快乐就是这么朴实无华且被误解。',
        impact: { face: -5, health: 2 }
      },
      {
        id: 'C',
        text: '强行劈柴',
        title: '强行劈柴',
        description: '起床劈柴，展示核心力量。',
        quote: '没想到你虚胖的身体根本扛不住物理劳动，闪了腰。腰上的钥匙串哗啦啦响，像是在嘲笑你。',
        impact: { health: -5, face: 5 }
      }
    ]
  },
  {
    id: 'd2_afternoon',
    day: 2,
    dayLabel: '腊月二十九',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '邻里炫耀',
    description: '隔壁王婶来串门，带着她那个刚考上公务员的儿子。‘哎呀，有乾啊，还在外面飘着呢？你看我家二狗，虽然工资不高，但稳定啊。’ 空气中弥漫着编制的优越感。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '展示收租',
        title: '展示收租',
        description: '展示手机里的收租 APP 后台。',
        quote: '王婶看到那一串零，以为是计算器坏了。二狗眼神呆滞，道心破碎。你爽了，但借钱的风险增加了。',
        impact: { face: 10, luck: -5 }
      },
      {
        id: 'B',
        text: '抠脚示弱',
        title: '抠脚示弱',
        description: '抠脚，点头，‘是啊，混口饭吃’。',
        quote: '你成功守住了‘废物’的人设。王婶满意离去，留下一袋烂苹果作为扶贫慰问。',
        impact: { face: -10, san: 5 }
      },
      {
        id: 'C',
        text: '反问房价',
        title: '反问房价',
        description: '询问二狗单位附近的房价。',
        quote: '‘哦，那个小区啊，我有三套在租。’ 无形装 X，最为致命。王婶的表情像吞了只苍蝇。',
        impact: { face: 5, san: 2 }
      }
    ]
  },
  {
    id: 'd2_evening',
    day: 2,
    dayLabel: '腊月二十九',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '家庭审判',
    description: '父母开启了‘催婚+催生+质问存款’的三重奏。电视里放着《新闻联播》，现实里在上演《法治进行时》。气氛压抑得像股市熔断。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '谎称出柜',
        title: '谎称出柜',
        description: '谎称自己喜欢男人。',
        quote: '父母大脑宕机，彻底放弃催婚。老爹拿起了扫帚，你获得了物理伤害，但精神解脱了。',
        impact: { face: -50, san: 20 }
      },
      {
        id: 'B',
        text: '黑卡甩脸',
        title: '黑卡甩脸',
        description: '拿出一张黑卡拍在桌上。',
        quote: '‘随便刷，密码是妈生日。’ 钞能力解决了 99% 的问题，剩下 1% 是他们不会用 POS 机。',
        impact: { face: 20, san: 5 }
      },
      {
        id: 'C',
        text: '假装诈骗',
        title: '假装诈骗',
        description: '装作信号不好，接个几十亿的生意电话。',
        quote: '你对着空气谈了半小时‘收购推特’的业务。父母虽然听不懂，但觉得你可能涉嫌诈骗，不敢多问了。',
        impact: { face: 5, luck: -2 }
      }
    ]
  },
  {
    id: 'd2_sleep',
    day: 2,
    dayLabel: '腊月二十九',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '孤独富豪',
    description: '刚才家庭会议用力过猛，现在躺在床上，听着父母在隔壁小声嘀咕你的“精神问题”。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '美股看盘',
        title: '美股看盘',
        description: '打开美股账户，看一眼今晚的波动。',
        quote: '哪怕跌了一个点，也够买下这个村子。这种掌控感让你安心入睡。',
        impact: { money: 50000, san: 2 }
      },
      {
        id: 'B',
        text: '匿名吐槽',
        title: '匿名吐槽',
        description: '在“隐形富豪匿名群”里吐槽。',
        quote: '群友建议你买下隔壁王婶儿子的单位。你觉得这个提议很有建设性。',
        impact: { san: 3, luck: 1 }
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
    title: '忽悠亲戚',
    description: '走亲戚副本开启。七大姑的大侄子把你堵在墙角，满嘴‘Web3.0’、‘元宇宙养猪’。他不知道你刚因为比特币波动亏了一辆法拉利，正烦着呢。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '专业回击',
        title: '专业回击',
        description: '跟他聊底层技术逻辑。',
        quote: '你用专业的金融术语把他聊懵了。他发现骗不到你，骂骂咧咧地转去忽悠隔壁二傻子了。',
        impact: { face: 5, san: -2 }
      },
      {
        id: 'B',
        text: '天使投资',
        title: '天使投资',
        description: '直接转账 500 块当‘天使轮’投资。',
        quote: '‘拿去喝奶茶，别折腾了。’ 伤害性不大，侮辱性极强。你成为了他口中的‘土鳖暴发户’。',
        impact: { money: -500, face: 10 }
      },
      {
        id: 'C',
        text: '推荐摆摊',
        title: '推荐摆摊',
        description: '推荐他去你名下的商铺卖煎饼。',
        quote: '‘实体经济才是王道。’ 你顺便招了个租客。商业鬼才就是你。',
        impact: { money: 2000, luck: 2 }
      }
    ]
  },
  {
    id: 'd3_afternoon',
    day: 3,
    dayLabel: '正月初一',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '假酒风云',
    description: '饭局巅峰。三舅拿出了珍藏十年的‘特供茅台’（瓶身印着‘茅台镇欢迎您’）。作为隐形富豪，你一眼看出这是工业酒精勾兑的，喝下去可能要重开。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '硬头皮喝',
        title: '硬头皮喝',
        description: '硬着头皮喝，主打一个给面子。',
        quote: '你的肝脏在报警，视网膜开始模糊。三舅夸你是‘纯爷们’，你觉得自己是‘纯傻X’。',
        impact: { health: -10, face: 5 }
      },
      {
        id: 'B',
        text: '偷偷浇花',
        title: '偷偷浇花',
        description: '趁人不备倒进发财树盆里。',
        quote: '发财树肉眼可见地枯萎了。你保住了狗命，但牺牲了家里的风水。',
        impact: { health: 2, luck: -5 }
      },
      {
        id: 'C',
        text: '真酒骑脸',
        title: '真酒骑脸',
        description: '此时从蛇皮袋掏出一瓶真拉菲。',
        quote: '全场震惊。三舅尝了一口说：‘这洋酒咋是酸的？坏了吧？’ 你的品味在土味面前一文不值。',
        impact: { money: -30000, face: 15 }
      }
    ]
  },
  {
    id: 'd3_evening',
    day: 3,
    dayLabel: '正月初一',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '红包围攻',
    description: '不知哪来的消息泄露，一大波熊孩子正在逼近。他们像是被编程好的丧尸，嘴里喊着‘恭喜发财’，手里伸着二维码。你的现金库存告急。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '大方撒币',
        title: '大方撒币',
        description: '每人发 200，这都是小钱。',
        quote: '你成为了孩子们眼中的上帝。但随后更多孩子从邻村闻讯赶来，服务器即将过载。',
        impact: { money: -5000, face: 10 }
      },
      {
        id: 'B',
        text: '发黄冈卷',
        title: '发黄冈卷',
        description: '给他们发这学期的《黄冈密卷》。',
        quote: '孩子们的笑容凝固了，你是魔鬼。整个村子的平均成绩因此提高，你被家长们奉为圣人。',
        impact: { san: 10, face: -5 }
      },
      {
        id: 'C',
        text: '装醉逃避',
        title: '装醉逃避',
        description: '装醉倒在沙发上不省人事。',
        quote: '最朴素的物理防御。虽然被孩子们踩了几脚，但钱包守住了。',
        impact: { face: -10, san: 2 }
      }
    ]
  },
  {
    id: 'd3_sleep',
    day: 3,
    dayLabel: '正月初一',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '酒后盘点',
    description: '假酒有点上头，但作为资本家，睡前必须盘点。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '慈善心态',
        title: '慈善心态',
        description: '想到今天发出去的红包和《黄冈密卷》，觉得这也是一种社会责任。',
        quote: '培养下一代（做题家），我有功。',
        impact: { san: 5, luck: 2 }
      },
      {
        id: 'B',
        text: '保肝护命',
        title: '保肝护命',
        description: '赶紧吃两粒护肝片。',
        quote: '身体是收租的本钱。三舅的酒，下次绝对不喝了。',
        impact: { health: 2, san: 2 }
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
    title: '相亲催租',
    description: '八大姨给你介绍了个对象，说是‘城里回来的高端白领’。见面发现，她正是你那栋楼里拖欠了三个月房租的租客小丽。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '当场催租',
        title: '当场催租',
        description: '掏出房租催缴单。',
        quote: '场面极度尴尬又极度舒适。小丽当场社死，你不仅不用相亲，还收回了房租。',
        impact: { money: 8000, san: 20 }
      },
      {
        id: 'B',
        text: '静听吹牛',
        title: '静听吹牛',
        description: '装作不认识，听她吹嘘。',
        quote: '她吹嘘自己住在 CBD 大平层。你在心里默默记账，准备回去涨她房租。',
        impact: { san: 5, luck: 2 }
      },
      {
        id: 'C',
        text: '免单演戏',
        title: '免单演戏',
        description: '配合演戏，甚至想免她房租。',
        quote: '土豪的恶趣味。你想看看她发现真相时的表情。这比看电视剧精彩多了。',
        impact: { money: -8000, san: 10 }
      }
    ]
  },
  {
    id: 'd4_afternoon',
    day: 4,
    dayLabel: '正月初二',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '碳水炸弹',
    description: '连续三顿的大鱼大肉让你的肠胃开始抗议。今天的午餐是：红烧肉、梅菜扣肉、回锅肉、粉蒸肉。你的痛风套餐已上线。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '只吃青菜',
        title: '只吃青菜',
        description: '只吃青菜（如果有的话）。',
        quote: '在满桌肉食动物面前吃草，你被亲戚们判定为‘身体不行’。男人怎么能不行？',
        impact: { health: 2, face: -5 }
      },
      {
        id: 'B',
        text: '饭后催吐',
        title: '饭后催吐',
        description: '狂吃一顿，然后去厕所抠喉咙。',
        quote: '为了面子牺牲了食道。这就是赛博格时代的罗马贵族生活方式吗？',
        impact: { health: -5, weight: -1 }
      },
      {
        id: 'C',
        text: '生酮饮食',
        title: '生酮饮食',
        description: '宣称自己在进行‘生酮饮食’。',
        quote: '没人懂什么是生酮，但听起来很高级。大家纷纷给你夹最肥的肉。',
        impact: { face: 2, weight: 1 }
      }
    ]
  },
  {
    id: 'd4_evening',
    day: 4,
    dayLabel: '正月初二',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '牌桌扮猪',
    description: '亲戚们组局打麻将，三缺一。他们以为你是个有钱的傻子，想宰你一顿。殊不知你在 CBD 老年活动中心可是‘雀圣’。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '故意输钱',
        title: '故意输钱',
        description: '故意输点钱，逗他们开心。',
        quote: '输钱买清净。亲戚们笑得合不拢嘴，夸你‘大气’。气氛和谐得诡异。',
        impact: { money: -2000, face: 5 }
      },
      {
        id: 'B',
        text: '大杀四方',
        title: '大杀四方',
        description: '火力全开，把他们赢得底裤都不剩。',
        quote: '你赢光了二舅的私房钱。二舅妈当场家暴二舅。聚会不欢而散，但你很爽。',
        impact: { money: 1000, face: -10 }
      },
      {
        id: 'C',
        text: '只胡大牌',
        title: '只胡大牌',
        description: '只胡大牌，清一色一条龙。',
        quote: '虽然不赢钱，但展示了绝对的技术统治力。他们开始怀疑你是不是出老千。',
        impact: { face: 5, luck: 5 }
      }
    ]
  },
  {
    id: 'd4_sleep',
    day: 4,
    dayLabel: '正月初二',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '暗自窃喜',
    description: '想到白天小丽惊恐的眼神，还有二舅输钱后的表情。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '记录素材',
        title: '记录素材',
        description: '把这些素材记下来，以后写进回忆录《我是如何假装穷人的》。',
        quote: '生活比剧本精彩。今天又是充实的一天。',
        impact: { san: 2, luck: 2 }
      },
      {
        id: 'B',
        text: '担心房租',
        title: '担心房租',
        description: '担心小丽回去后真的不交房租了。',
        quote: '还是发个微信提醒一下吧：‘房租照付，相亲免谈’。',
        impact: { luck: -2, san: -1 }
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
    title: '理财骗局',
    description: '一个远房表弟神神秘秘地拉住你，推荐一个‘年化收益 200%’的项目：南极冰川水灌溉的沙漠水稻。典型的杀猪盘。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '当场揭穿',
        title: '当场揭穿',
        description: '当场戳穿他的庞氏骗局。',
        quote: '表弟恼羞成怒，说你‘眼界窄’、‘活该发不了大财’。你看着自己的余额，笑了。',
        impact: { san: 5, face: -5 }
      },
      {
        id: 'B',
        text: '反向推销',
        title: '反向推销',
        description: '反向推销你的烂尾楼盘（并没有）。',
        quote: '你编造了一个更离谱的项目，差点把表弟忽悠进去。用魔法打败魔法。',
        impact: { san: 10, luck: 5 }
      },
      {
        id: 'C',
        text: '哭穷拒接',
        title: '哭穷拒接',
        description: '装穷：‘哥连烟钱都没了’。',
        quote: '表弟鄙视地看了你一眼，转身走了。安全，高效，就是有点伤自尊。',
        impact: { face: -2, san: 2 }
      }
    ]
  },
  {
    id: 'd5_afternoon',
    day: 5,
    dayLabel: '正月初三',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '洗车比美',
    description: '家族里的年轻人们开始在院子里洗车，实则是为了展示。表哥租来的宝马 X5 停在 C 位。你那辆贴着‘房屋补漏’广告的五菱神车停在角落。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '露房产证',
        title: '露房产证',
        description: '不经意露出五菱车里的一箱房产证。',
        quote: '暴击！全场鸦雀无声。宝马瞬间变得黯淡无光。五菱宏光才是永远的神。',
        impact: { face: 50, san: 20 }
      },
      {
        id: 'B',
        text: '询问租金',
        title: '询问租金',
        description: '夸表哥车好，问他租金多少。',
        quote: '一语道破天机。表哥脸涨成了猪肝色。这波毒舌精准命中。',
        impact: { san: 5, face: -5 }
      },
      {
        id: 'C',
        text: '默默擦车',
        title: '默默擦车',
        description: '默默去擦自己的五菱。',
        quote: '‘这孩子真不容易。’ 大家向你投来同情的目光。你享受着这份宁静的低调。',
        impact: { face: -10, luck: 5 }
      }
    ]
  },
  {
    id: 'd5_evening',
    day: 5,
    dayLabel: '正月初三',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '手办浩劫',
    description: '你回房间发现，你的手办（虽然你是个大叔，但你有钱买限量版）被亲戚家的小孩拆了。‘他还是个孩子，你这么大人了计较什么？’',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '天价索赔',
        title: '天价索赔',
        description: '告诉家长这手办值 5 万。',
        quote: '家长以为你在讹人，最后经过网上查价，差点晕过去。你获得了全额赔偿，但亲戚没得做了。',
        impact: { money: 50000, face: -20 }
      },
      {
        id: 'B',
        text: '撕作业本',
        title: '撕作业本',
        description: '把小孩作业本撕了。',
        quote: '‘我也还是个孩子。’ 你用最幼稚的方式完成了复仇。爽感爆棚。',
        impact: { san: 20, face: -20 }
      },
      {
        id: 'C',
        text: '忍气吞声',
        title: '忍气吞声',
        description: '忍气吞声，默默流泪。',
        quote: '内伤。你有钱也买不回此刻的心情。这是春节最黑暗的时刻。',
        impact: { san: -20, health: -2 }
      }
    ]
  },
  {
    id: 'd5_sleep',
    day: 5,
    dayLabel: '正月初三',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '防盗危机',
    description: '今天又是表弟骗钱，又是熊孩子拆家。你觉得这个家不安全。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '肉身压宝',
        title: '肉身压宝',
        description: '把那箱房产证从车里拿上来，压在身下睡。',
        quote: '有点硬，但很踏实。这就是身价过亿的负担。',
        impact: { health: -1, san: 5 }
      },
      {
        id: 'B',
        text: '反锁房门',
        title: '反锁房门',
        description: '把房门反锁，还要顶把椅子。',
        quote: '总有刁民想害朕。',
        impact: { san: -2, luck: -2 }
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
    title: '借口逃离',
    description: '亲戚的浓度已经达到了致死量。你决定实施‘逃离计划’。借口是什么？这是个问题。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '服务器崩',
        title: '服务器崩',
        description: '借口公司服务器炸了，要回去救火。',
        quote: '虽然你没有公司，但听起来很像个奋斗逼。父母放你一马，让你去镇上网吧‘办公’。',
        impact: { face: 5, san: -2 }
      },
      {
        id: 'B',
        text: '假装重病',
        title: '假装重病',
        description: '假装重感冒，卧床不起。',
        quote: '你躲在被窝里刷了一上午抖音。除了有点闷，一切都很完美。',
        impact: { health: 2, face: -5 }
      },
      {
        id: 'C',
        text: '镇上洗脚',
        title: '镇上洗脚',
        description: '说去镇上买特产，实则去洗脚。',
        quote: '技师的手法治愈了你的身心。这才是春节该有的节奏。',
        impact: { money: -300, health: 5 }
      }
    ]
  },
  {
    id: 'd6_afternoon',
    day: 6,
    dayLabel: '正月初四',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '网吧操盘',
    description: '你躲在镇上的‘极速网咖’。旁边的小学生在打 LOL，你在操盘股市。烟雾缭绕中，你仿佛回到了赛博朋克的贫民窟。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '指导游戏',
        title: '指导游戏',
        description: '指导小学生打游戏。',
        quote: '被小学生骂‘菜逼’。你那满级的操作意识跟不上生锈的手速。自取其辱。',
        impact: { san: -5, face: -2 }
      },
      {
        id: 'B',
        text: '全场包机',
        title: '全场包机',
        description: '包下全网吧的机子请大家玩。',
        quote: '‘老板大气！’ 你在镇上封神。这种廉价的虚荣心竟然该死的甜美。',
        impact: { money: -1000, face: 10 }
      },
      {
        id: 'C',
        text: '专心搞钱',
        title: '专心搞钱',
        description: '专心搞钱，无视环境。',
        quote: '在满是泡面味的环境里赚了五万块。这就是反差萌。',
        impact: { money: 50000, san: 5 }
      }
    ]
  },
  {
    id: 'd6_evening',
    day: 6,
    dayLabel: '正月初四',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '初恋微信',
    description: '微信震动。初恋女友（那个当年嫌你穷跟人跑了的校花）发来消息：‘明天同学聚会，你去吗？’ 这是一个陷阱，还是机会？',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '高冷回复',
        title: '高冷回复',
        description: '回复：‘忙，每分钟几十万上下’。',
        quote: '高冷。虽然有点装，但解气。她可能以为你在送外卖。',
        impact: { face: 5, san: 5 }
      },
      {
        id: 'B',
        text: '秒回答应',
        title: '秒回答应',
        description: '回复：‘去，必须去！’。',
        quote: '舔狗属性暴露？不，你是去复仇的。今晚注定无眠。',
        impact: { face: -5, san: -5 }
      },
      {
        id: 'C',
        text: '发砍一刀',
        title: '发砍一刀',
        description: '发个拼夕夕砍一刀链接过去。',
        quote: '绝杀！对方把你拉黑了。你彻底断了念想，并且觉得很好笑。',
        impact: { face: -20, san: 10 }
      }
    ]
  },
  {
    id: 'd6_sleep',
    day: 6,
    dayLabel: '正月初四',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '旧情难忘',
    description: '看到初恋的头像，你翻来覆去。不是因为爱，是因为当年被甩的屈辱。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '视奸动态',
        title: '视奸动态',
        description: '翻看她这几年的朋友圈。',
        quote: '看她过得不好，我就放心了。看到她卖三无面膜，我更放心了。',
        impact: { san: 2, luck: 2 }
      },
      {
        id: 'B',
        text: '规划装逼',
        title: '规划装逼',
        description: '计划明天的装逼路线。',
        quote: '明天穿那套阿玛尼，还是穿那件 50 块的文化衫去砸场子？',
        impact: { face: 2, san: -2 }
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
    title: '战袍选择',
    description: '同学聚会日。你站在镜子前，左手是那件起球的 POLO 衫，右手是定制的 Armani 西装。是继续扮猪，还是偶尔吃虎？',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '土味穿搭',
        title: '土味穿搭',
        description: '穿 POLO 衫，脚踩人字拖。',
        quote: '彻底贯彻‘土味房东’人设。你要看看这帮人势利的嘴脸。',
        impact: { face: -10, luck: 5 }
      },
      {
        id: 'B',
        text: '西装革履',
        title: '西装革履',
        description: '西装革履，戴上劳力士。',
        quote: '帅是帅，但在农村泥地里走两步全是泥。这种不协调感很赛博。',
        impact: { face: 20, health: -1 }
      },
      {
        id: 'C',
        text: '外卖制服',
        title: '外卖制服',
        description: '穿饿了么外卖服。',
        quote: '行为艺术。你想测试人性的底线。这绝对是个大新闻。',
        impact: { face: -30, san: 15 }
      }
    ]
  },
  {
    id: 'd7_afternoon',
    day: 7,
    dayLabel: '正月初五',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '聚会交锋',
    description: '聚会现场，班长正在吹嘘他的工程项目。初恋女友在卖保险。大家看你穿得寒酸，纷纷开始‘关心’你的工作。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '自称收租',
        title: '自称收租',
        description: '‘我现在全职收破烂（指收租）’。',
        quote: '大家眼神充满了鄙夷。初恋女友给你推销了一份‘失业险’。你差点笑出声。',
        impact: { face: -10, san: 10 }
      },
      {
        id: 'B',
        text: '买下饭店',
        title: '买下饭店',
        description: '叫来服务员：‘把这家店买下来’。',
        quote: '‘老板，别闹，您卡里余额够买十个我们店。’ 服务员的大声密谋让全场石化。装 X 成功。',
        impact: { money: -2000000, face: 50 }
      },
      {
        id: 'C',
        text: '默默买单',
        title: '默默买单',
        description: '默默吃菜，最后偷偷买单。',
        quote: '事了拂衣去。班长想买单时发现单买了，这种神秘感让他抓狂。',
        impact: { money: -5000, face: 10 }
      }
    ]
  },
  {
    id: 'd7_evening',
    day: 7,
    dayLabel: '正月初五',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '包厢情歌',
    description: '聚会下半场 KTV。酒精上头，大家开始群魔乱舞。初恋女友试图靠近你，因为她听说了你买单的事。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '点歌嘲讽',
        title: '点歌嘲讽',
        description: '点一首《算什么男人》送给班长。',
        quote: '全场尴尬，但你爽了。毒舌属性大爆发。',
        impact: { san: 5, face: 5 }
      },
      {
        id: 'B',
        text: '借口溜号',
        title: '借口溜号',
        description: '借口上厕所，直接溜号。',
        quote: '正如你轻轻地来。留下一屋子的庸脂俗粉，你独自走在寒风中，觉得很 cool。',
        impact: { health: 2, face: -5 }
      },
      {
        id: 'C',
        text: '砸钱禁麦',
        title: '砸钱禁麦',
        description: '用蛇皮袋里的钱砸那个五音不全的麦霸。',
        quote: '‘别唱了，求你。’ 金钱的力量让噪音戛然而止。',
        impact: { money: -5000, face: 15 }
      }
    ]
  },
  {
    id: 'd7_sleep',
    day: 7,
    dayLabel: '正月初五',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '曲终人散',
    description: '同学聚会结束了，证明了大家都变了，只有你没变（还是那么有钱）。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '感到空虚',
        title: '感到空虚',
        description: '坐在床头发呆。',
        quote: '有钱人的快乐往往就是这么枯燥且乏味。没意思。',
        impact: { san: -5 }
      },
      {
        id: 'B',
        text: '匿名捐款',
        title: '匿名捐款',
        description: '想起聚会上听说老同桌得病了，匿名捐了笔钱。',
        quote: '深藏功与名。睡得像个婴儿。',
        impact: { money: -10000, luck: 10 }
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
    title: '假期余额',
    description: '假期余额不足。你躺在床上，听着窗外的鞭炮声，感到一种巨大的虚无。这就是有钱人的空虚吗？不，只是不想上班（虽然不用上班）。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '看钱回血',
        title: '看钱回血',
        description: '打开账户查看余额回血。',
        quote: '看着数字跳动，你的生命值回满了。资本是你最好的抗抑郁药。',
        impact: { san: 5, luck: 5 }
      },
      {
        id: 'B',
        text: '最后扫除',
        title: '最后扫除',
        description: '帮老妈做最后一次大扫除。',
        quote: '劳动使人快乐。老妈夸你‘终于像个人了’。',
        impact: { health: -2, face: 5 }
      },
      {
        id: 'C',
        text: '睡回笼觉',
        title: '睡回笼觉',
        description: '睡回笼觉直到下午。',
        quote: '逃避可耻但有用。梦里没有亲戚，只有会飞的钞票。',
        impact: { health: 2, san: -2 }
      }
    ]
  },
  {
    id: 'd8_afternoon',
    day: 8,
    dayLabel: '正月初六',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '特产塞箱',
    description: '要走了，老妈开始往你的蛇皮袋里塞东西：自制腊肉、活鸡、五十斤红薯。你的 LV 行李箱变成了农贸市场。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '全盘接受',
        title: '全盘接受',
        description: '全盘接受，哪怕超重。',
        quote: '这是沉甸甸的母爱（物理）。你回城的时候像个逃荒的。',
        impact: { weight: 2, health: -2 }
      },
      {
        id: 'B',
        text: '偷偷拿出',
        title: '偷偷拿出',
        description: '偷偷把红薯拿出来。',
        quote: '被老妈发现了。她开启了‘不孝子’念经模式，你的头开始痛了。',
        impact: { san: -2, face: 2 }
      },
      {
        id: 'C',
        text: '留下运费',
        title: '留下运费',
        description: '给老妈留一万块钱当‘运费’。',
        quote: '老妈一边骂你乱花钱，一边笑嘻嘻地收下了。这就是双赢。',
        impact: { money: -10000, face: 10 }
      }
    ]
  },
  {
    id: 'd8_evening',
    day: 8,
    dayLabel: '正月初六',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '最后晚餐',
    description: '临行前的晚餐，那个一直没露面的远房表叔出现了。一开口就是：‘有乾啊，听说你在大城市混得不错，叔最近手头紧……’',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '反向哭穷',
        title: '反向哭穷',
        description: '先发制人：‘叔，借我点路费’。',
        quote: '表叔愣住了，饭都没吃完就跑了。这一招‘反向哭穷’百试不爽。',
        impact: { face: -5, san: 5 }
      },
      {
        id: 'B',
        text: '抵押合同',
        title: '抵押合同',
        description: '让他签正规抵押合同。',
        quote: '你掏出了随身携带的法务合同。表叔看着那厚厚的条款，被赛博法治劝退。',
        impact: { face: 5, san: 5 }
      },
      {
        id: 'C',
        text: '当做扶贫',
        title: '当做扶贫',
        description: '借给他，但是算高利贷（误）。',
        quote: '你借了 2000，心里知道这钱是肉包子打狗。权当是扶贫了。',
        impact: { money: -2000, luck: 5 }
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
    description: '房间里堆满了打包好的行李。蛇皮袋鼓鼓囊囊的。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '确认现金',
        title: '确认现金',
        description: '再次确认那 200 万现金还在袋子里。',
        quote: '这可是老婆本（虽然没有老婆）。安全第一。',
        impact: { san: 2 }
      },
      {
        id: 'B',
        text: '规划翻修',
        title: '规划翻修',
        description: '看着天花板上的霉斑。',
        quote: '明年把这房子翻修一下吧，太破了。给二老装个电梯。',
        impact: { money: -500000, san: 10 }
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
    title: '离别赠礼',
    description: '返程时刻。老父亲站在车边，欲言又止。最后塞给你一包皱皱巴巴的钱：‘在外面别太苦了，这点钱拿去买件新衣服（指替换那件 Polo）。’',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '偷偷塞回',
        title: '偷偷塞回',
        description: '收下，转身偷偷塞回他枕头下。',
        quote: '眼眶湿润。这几千块比你卡里的几千万更重。这才是春节的意义。',
        impact: { san: 10, luck: 5 }
      },
      {
        id: 'B',
        text: '当面拒绝',
        title: '当面拒绝',
        description: '拒绝：‘我有钱！’。',
        quote: '老父亲觉得你还在逞强，叹了口气。沟通失败。',
        impact: { face: -2, san: -2 }
      },
      {
        id: 'C',
        text: '展示余额',
        title: '展示余额',
        description: '展示存款余额给他看。',
        quote: '老父亲戴上老花镜看了半天，问：‘这是津巴布韦币吗？’ 算了，解释不清。',
        impact: { face: 20, san: 5 }
      }
    ]
  },
  {
    id: 'd9_afternoon',
    day: 9,
    dayLabel: '正月初七',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '高速沉思',
    description: '堵在返程的高速上，红色的车尾灯像一条停滞的数据流。你在这个钢铁洪流中，思考着‘故乡’与‘远方’的辩证关系。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '车内K歌',
        title: '车内K歌',
        description: '在车里开个人演唱会。',
        quote: '你嘶吼着《蓝莲花》。隔壁车的狗都被你吓叫了。解压满分。',
        impact: { san: 5, health: 1 }
      },
      {
        id: 'B',
        text: '天价泡面',
        title: '天价泡面',
        description: '下车跟路边大妈买天价泡面。',
        quote: '50 块一桶的泡面，吃出了米其林的味道。这就是垄断经济学。',
        impact: { money: -50, health: -1 }
      },
      {
        id: 'C',
        text: '路上收租',
        title: '路上收租',
        description: '利用堵车时间处理几笔收租。',
        quote: '时间就是金钱。堵车不堵财路。你的账户余额在持续上涨。',
        impact: { money: 10000, san: -2 }
      }
    ]
  },
  {
    id: 'd9_evening',
    day: 9,
    dayLabel: '正月初七',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '重启生活',
    description: '回到那个空荡荡但豪华的家。你把蛇皮袋里的腊肉塞进价值 5 万的冰箱。换上丝绸睡衣，拿起了那串能买下半个 CBD 的钥匙。春节副本，通关。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '孤独外卖',
        title: '孤独外卖',
        description: '点一份外卖，在这个城市孤独地庆祝。',
        quote: '还是外卖香。你终于不用在亲戚面前演戏了。自由万岁。',
        impact: { san: 5, face: -2 }
      },
      {
        id: 'B',
        text: '视频报安',
        title: '视频报安',
        description: '给老妈打个视频电话报平安。',
        quote: '老妈问你腊肉吃了没。你笑着说吃了。那一刻，你觉得这才是真实的自己。',
        impact: { san: 10, face: 5 }
      },
      {
        id: 'C',
        text: '上门收租',
        title: '上门收租',
        description: '立刻去收一圈房租找回场子。',
        quote: '你是无情的收租机器。春节的温情消散，金钱的齿轮重新转动。',
        impact: { money: 50000, san: -2 }
      }
    ]
  },
  {
    id: 'd9_sleep',
    day: 9,
    dayLabel: '正月初七',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '金窝银窝',
    description: '躺在 20 万的床垫上，看着窗外的霓虹灯。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '享受丝滑',
        title: '享受丝滑',
        description: '享受丝绸床单的触感。',
        quote: '舒服。这才是人过的日子。',
        impact: { health: 2 }
      },
      {
        id: 'B',
        text: '太静失眠',
        title: '太静失眠',
        description: '太安静了，有点不习惯。',
        quote: '怀念老家公鸡的打鸣声（也就一秒）。',
        impact: { san: -2 }
      }
    ]
  },
];

export const haoYouqianEndings: Ending[] = [
  {
    id: 'loser_in_vip',
    title: '拥有私人病房的“败者”',
    description: '你并没有像计划中那样风光地回到 CBD 的顶层公寓。返程的高速上，胃部的剧痛让你被迫拨打了 120。躺在私立医院昂贵的 VIP 病房里，护士正给你挂着进口的护肝药。你看着手机里亲戚们在群里称赞你“身体硬朗、甚至能喝工业酒精”，感到一阵荒诞。你的资产足以买下这件医院，但却买不回这几天为了维持“穷人人设”而透支的那个春节。你赢了演技，却把半条命留在了村口的大槐树下。',
    condition: (stats) => stats.health < 30
  },
  {
    id: 'village_legend',
    title: '降维打击的“乡村传说”',
    description: '回到公司，你神清气爽，仿佛刚度过了一个完美的马尔代夫假期。而在你的老家，关于“郝有乾”的传说正在疯狂裂变。有人说你是微服私访的首富，有人说你甚至收购了美国推特。那辆五菱宏光成为了村里的风水图腾，连带你家门口的旧对联都被邻居偷去沾喜气。你不仅在物理上全身而退，更在精神上完成了对世俗眼光的彻底碾压。这不叫过年，这叫“满级大号屠戮新手村”。',
    condition: (stats) => stats.san > 110 && stats.face > 120
  },
  {
    id: 'split_stranger',
    title: '割裂的“异乡人”',
    description: '你躺回了价值 20 万的海斯腾床垫上，窗外是熟悉的城市霓虹。蛇皮袋被丢在角落，里面还塞着老妈硬塞的腊肉和那几千块皱巴巴的“路费”。这几天在村里的经历像是一场不真实的梦——你依然是那个拥有千万资产的隐形富豪，但那种孤独感却在春节后加倍袭来。你发现自己既融不进那个充满人情世故的乡村，也还没完全在冰冷的 CBD 找到归属感。你叹了口气，打开手机，默默向小丽催缴了下个月的房租。生活，还要继续。',
    condition: () => true // Default ending
  }
];
