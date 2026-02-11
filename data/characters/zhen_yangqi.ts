import { Character, GameEvent, Ending } from '../../types';

// Reuse default images for generic scenes
const DEFAULT_IMAGES = {
  morning: 'https://i.postimg.cc/T1vvSY5P/001.jpg',
  afternoon: 'https://i.postimg.cc/5yWWGNQ2/002.jpg',
  evening: 'https://i.postimg.cc/NFvvVf2M/003.jpg',
  sleep: 'https://i.postimg.cc/fyQQFTST/004.jpg'
};

export const zhenYangqiChar: Character = {
  id: 'zhen_yangqi',
  name: '甄洋气',
  avatar: 'https://i.postimg.cc/qq75MjDY/108.jpg',
  tags: ['海归凡尔赛·假装名流', '#中英夹杂', '#其实在送外卖'],
  roleDescription: '海归凡尔赛·假装名流',
  bio: '“Oh my god，家里的红酒没醒过？这种白酒太 spicy 了。我在 Manchester 的时候，Christmas Eve 都是去 Church 的。虽然我现在还是 Gap Year，但我这是在寻找 Life Balance，懂吗？”',
  baseStats: {
    money: -180000,
    weight: 50,
    face: 85,
    san: 50,
    health: 75,
    luck: 40,
  },
};

export const zhenYangqiEvents: GameEvent[] = [
  // Day 1: 腊月二十八 (2月15日)
  {
    id: 'd1_morning',
    day: 1,
    dayLabel: '腊月二十八',
    timeOfDay: 'morning',
    timeLabel: '早上',
    title: '降维打击·乡村初登陆',
    description: '你的限量版 Balenciaga 所谓的‘复古做旧’鞋，终于踩在了真正的‘Old School’烂泥坑里。村口的二大爷对你吐了个烟圈，这大概是某种 Greeting ritual。你拖着两个 Rimowa 箱子，像个试图在 2G 网络里加载 4K 视频的 Bug。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '洋文咒语',
        title: '洋文咒语',
        description: '用 Chinglish 抱怨路况。',
        quote: '二大爷以为你在念咒，把你当成了某种新型萨满，眼神充满了敬畏。',
        impact: { face: 5, luck: -2 }
      },
      {
        id: 'B',
        text: '硬扛仪态',
        title: '硬扛仪态',
        description: '提箱子硬扛，保持仪态。',
        quote: '你的肱二头肌在尖叫，但为了 Maintain 你的贵族人设，你走出了 T 台的感觉。',
        impact: { health: -5, face: 5 }
      },
      {
        id: 'C',
        text: '甚至递烟',
        title: '甚至递烟',
        description: '给村口摩的师傅递烟。',
        quote: 'Social 成功。虽然你的中华烟被嫌弃不够劲，但至少不用自己扛箱子了。',
        impact: { money: -20, san: 5 }
      }
    ]
  },
  {
    id: 'd1_afternoon',
    day: 1,
    dayLabel: '腊月二十八',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '温差攻击·极寒地狱',
    description: '家里没有 Central Heating（暖气），室内温度比曼彻斯特的街头还低。你妈让你穿上那件并在三十年前就退役的军大衣。你看着自己箱子里的羊绒风衣，陷入了 Fashion 与 Survival 的终极博弈。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '美丽冻人',
        title: '美丽冻人',
        description: '坚持穿羊绒大衣。',
        quote: '你美得像个冰雕。鼻涕冻成了冰柱，正好可以用来搅拌你的 Afternoon Tea。',
        impact: { health: -10, face: 10 }
      },
      {
        id: 'B',
        text: '土味保暖',
        title: '土味保暖',
        description: '妥协，穿上军大衣。',
        quote: 'Oh no！你瞬间变成了村口守夜的王大拿，但温暖让你找回了丢失的 Soul。',
        impact: { face: -15, san: 10 }
      },
      {
        id: 'C',
        text: '科技狠活',
        title: '科技狠活',
        description: '贴满暖宝宝假装抗冻。',
        quote: '只要没人摸你的后背，你就是全村最抗冻的崽。虽然皮肤被烫出了 Water bubbles。',
        impact: { money: -50, face: 5 }
      }
    ]
  },
  {
    id: 'd1_evening',
    day: 1,
    dayLabel: '腊月二十八',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '信号黑洞·失联惊魂',
    description: '你想发个朋友圈定位‘Home Sweet Home’，却发现信号格只有 E。你的 iPhone 15 Pro Max 此刻就是一块发光的板砖。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '甚至爬房',
        title: '甚至爬房',
        description: '爬上房顶找信号。',
        quote: '你在瓦片上瑟瑟发抖，终于发出了一条 Story，获得了 3 个 Likes。Worth it？',
        impact: { luck: -5, san: 5 }
      },
      {
        id: 'B',
        text: '甚至冥想',
        title: '甚至冥想',
        description: '假装 Digital Detox。',
        quote: '你告诉自己这是‘冥想’，但其实你脑子里已经在播放送外卖超时的 BGM 了。',
        impact: { san: -5, face: 2 }
      },
      {
        id: 'C',
        text: '甚至蹭网',
        title: '甚至蹭网',
        description: '蹭隔壁小卖部 WiFi。',
        quote: '密码是‘8 个 8’。你蹲在墙角蹭网的样子，像极了当年你在伦敦街头蹭星巴克厕所。',
        impact: { face: -5, money: -10 }
      }
    ]
  },
  {
    id: 'd1_sleep',
    day: 1,
    dayLabel: '腊月二十八',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '时差（并不存在）',
    description: '躺在陌生的床上，你想起了在“伦敦”（其实是出租屋）的日子。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '假装倒时差',
        title: '假装倒时差',
        description: '凌晨三点发朋友圈“Good night, London”。',
        quote: '既然演戏就要演全套。哪怕只有以前的送餐员同事给你点赞。',
        impact: { face: 2, health: -2 }
      },
      {
        id: 'B',
        text: '真实失眠',
        title: '真实失眠',
        description: '担心明天被识破。',
        quote: '如果二舅问起汇率怎么办？赶紧查一下。',
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
    title: '方言加密·语言巴别塔',
    description: '一大早，三大姑八大姨冲进你房间，输出了一顿高频方言。你就像个 CPU 过载的翻译机，完全无法 Decode 她们在说什么。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '甚至点头',
        title: '甚至点头',
        description: '保持微笑，一直点头。',
        quote: '你刚刚答应了帮二舅母挑两百斤大粪。Good luck, my friend。',
        impact: { luck: -10, health: -5 }
      },
      {
        id: 'B',
        text: '甚至回敬',
        title: '甚至回敬',
        description: '用英语回敬。',
        quote: '“Excuse me? 她们以为你中邪了，甚至想去请村里的神婆来看看。',
        impact: { face: -5, san: 5 }
      },
      {
        id: 'C',
        text: '甚至装睡',
        title: '甚至装睡',
        description: '装作还没睡醒。',
        quote: '最有效的防御机制。只要你闭上眼，世界就 Reload 失败。',
        impact: { san: 5, face: -2 }
      }
    ]
  },
  {
    id: 'd2_afternoon',
    day: 2,
    dayLabel: '腊月二十九',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '卫生死角·旱厕惊魂',
    description: '你的肠胃开始抗议昨晚的重油重盐。当你走到那个露天旱厕时，你的 San 值直接归零。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '甚至忍者',
        title: '甚至忍者',
        description: '憋着，憋回伦敦。',
        quote: '你的括约肌正在进行一场史诗级的防御战。脸色发青被认为是‘忧郁贵族气质’。',
        impact: { health: -10, face: 2 }
      },
      {
        id: 'B',
        text: '甚至香水',
        title: '甚至香水',
        description: '喷半瓶香水再进。',
        quote: 'Chanel No.5 混合着氨气，创造出了一种让人当场去世的生化武器。',
        impact: { money: -100, san: -5 }
      },
      {
        id: 'C',
        text: '甚至打车',
        title: '甚至打车',
        description: '去镇上找肯德基。',
        quote: '为了拉屎打车去镇上，这是属于你的奢侈。Toilets matter。',
        impact: { money: -40, san: 10 }
      }
    ]
  },
  {
    id: 'd2_evening',
    day: 2,
    dayLabel: '腊月二十九',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '洗澡危机·太阳能背刺',
    description: '太阳能热水器罢工。老妈提来一壶开水兑在红塑料盆里，那是你洗澡的全部资源。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '甚至复古',
        title: '甚至复古',
        description: '红盆擦澡。',
        quote: '仿佛回到了维多利亚时代的贫民窟。Very retro，very 惨。',
        impact: { face: -5, health: 2 }
      },
      {
        id: 'B',
        text: '甚至冷水',
        title: '甚至冷水',
        description: '坚持洗冷水澡。',
        quote: 'Wim Hof 附体！你在发抖中完成了净化，并在半夜成功发烧。',
        impact: { health: -10, face: 5 }
      },
      {
        id: 'C',
        text: '甚至发胶',
        title: '甚至发胶',
        description: '干脆不洗了。',
        quote: '只要喷足够多的发胶，没人知道你的头皮已经是一个生态系统了。',
        impact: { face: -2, san: 2 }
      }
    ]
  },
  {
    id: 'd2_sleep',
    day: 2,
    dayLabel: '腊月二十九',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '卫生焦虑',
    description: '没洗澡，感觉全身都在痒。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '甚至消毒',
        title: '甚至消毒',
        description: '拿酒精喷雾把床单喷了一遍。',
        quote: '有点呛，但心理上干净了。',
        impact: { san: 5, money: -5 }
      },
      {
        id: 'B',
        text: '甚至和衣',
        title: '甚至和衣',
        description: '穿着衣服睡。',
        quote: '把身体和床单隔离开。我是有洁癖的贵族。',
        impact: { health: -2 }
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
    title: '礼品审判·虚荣的代价',
    description: '你拿出了从义乌批发市场买来贴了英文标的‘进口’保健品。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '甚至胡扯',
        title: '甚至胡扯',
        description: '硬说是出口转内销。',
        quote: '你的胡扯能力 Max。大姨信了，觉得这东西肯定比国内的更 Advanced。',
        impact: { face: 5, luck: 5 }
      },
      {
        id: 'B',
        text: '甚至承认',
        title: '甚至承认',
        description: '承认是国产精品。',
        quote: '大姨撇了撇嘴，把礼物扔到了角落的杂物堆。你的‘海归’光环黯淡了。',
        impact: { face: -10, san: -5 }
      },
      {
        id: 'C',
        text: '甚至吹牛',
        title: '甚至吹牛',
        description: '说是皇室特供。',
        quote: '吹牛税 +1。全村都知道你和英国皇室有关系了，接下来会有更多人找你办事。',
        impact: { face: 20, san: -10 }
      }
    ]
  },
  {
    id: 'd3_afternoon',
    day: 3,
    dayLabel: '正月初一',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '碳水炸弹·流水席',
    description: '你的生酮饮食计划在这里就是个笑话。长辈夹了一块还在颤抖的肥肉到你碗里。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '甚至吞咽',
        title: '甚至吞咽',
        description: '闭眼吞下。',
        quote: '油腻感直冲天灵盖，你感觉自己的血管壁正在此时此刻变厚。',
        impact: { weight: 2, san: -5 }
      },
      {
        id: 'B',
        text: '甚至喂狗',
        title: '甚至喂狗',
        description: '偷偷吐给脚下的狗。',
        quote: '狗嫌弃地走了。连中华田园犬都觉得这块肉太腻。尴尬指数爆表。',
        impact: { face: -5, luck: -5 }
      },
      {
        id: 'C',
        text: '甚至科普',
        title: '甚至科普',
        description: '科普素食主义。',
        quote: '全桌安静了。大家觉得你在国外可能加入了什么邪教，连肉都不吃。',
        impact: { face: -15, health: 2 }
      }
    ]
  },
  {
    id: 'd3_evening',
    day: 3,
    dayLabel: '正月初一',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '薪资拷问·凡尔赛崩塌',
    description: '二舅发问：‘洋气啊，在英国一个月能挣多少？有三万不？’',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '甚至百万',
        title: '甚至百万',
        description: '报个年薪百万。',
        quote: '哇声一片。后果是二舅立刻向你借五万块钱盖猪圈。Risk High, Return Negative。',
        impact: { face: 25, money: -500 }
      },
      {
        id: 'B',
        text: '甚至含糊',
        title: '甚至含糊',
        description: '含糊其辞说‘看绩效’。',
        quote: '大家觉得你混得不行。‘看来还是不如考公务员稳定啊。’你也这么觉得。',
        impact: { face: -5, san: -2 }
      },
      {
        id: 'C',
        text: '甚至保密',
        title: '甚至保密',
        description: '说签了保密协议。',
        quote: '神秘感拉满。大家以为你在为 MI6 工作，眼神中多了一丝恐惧。',
        impact: { face: 10, luck: 5 }
      }
    ]
  },
  {
    id: 'd3_sleep',
    day: 3,
    dayLabel: '正月初一',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '圆谎的压力',
    description: '今天的牛吹得太大了。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '甚至补丁',
        title: '甚至补丁',
        description: '连夜 P 几张和“外国高管”的合影。',
        quote: '为了圆一个谎，要撒一百个谎。太累了。',
        impact: { san: -5, face: 2 }
      },
      {
        id: 'B',
        text: '甚至摆烂',
        title: '甚至摆烂',
        description: '管他呢，反正一年就回来一次。',
        quote: '只要我跑得快，谎言就追不上我。',
        impact: { san: 5 }
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
    title: '晨间劳作·伪田园风',
    description: '为了在朋友圈营造‘Organic Lifestyle’，你主动要求去地里摘菜。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '甚至摆拍',
        title: '甚至摆拍',
        description: '摆拍后立刻撤退。',
        quote: '照片很美，配文‘Connecting with nature’。实际上你跑得比兔子还快。',
        impact: { face: 5, luck: -2 }
      },
      {
        id: 'B',
        text: '甚至硬干',
        title: '甚至硬干',
        description: '硬着头皮干完。',
        quote: '你摘了一筐烂菜叶。老妈问你是不是在英国专修‘破坏农业罪’。',
        impact: { health: -2, face: -2 }
      },
      {
        id: 'C',
        text: '甚至指导',
        title: '甚至指导',
        description: '指导老爸科学种植。',
        quote: '你用《我的世界》的逻辑指导农业生产，被老爸用铁锹赶出了菜地。',
        impact: { face: -10, san: -5 }
      }
    ]
  },
  {
    id: 'd4_afternoon',
    day: 4,
    dayLabel: '正月初二',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '酒桌战役·白酒修罗场',
    description: '长辈们拿出了珍藏的‘塑料壶散装白酒’。这是工业溶剂。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '甚至闷',
        title: '甚至闷',
        description: '一口闷。',
        quote: '食道灼烧，系统重启。你在桌子底下看见了去世的太奶在向你招手。',
        impact: { health: -15, face: 10 }
      },
      {
        id: 'B',
        text: '甚至偷换',
        title: '甚至偷换',
        description: '偷换成白开水。',
        quote: '操作犀利，但被发现了。‘这孩子出国学会造假了！’ 信用破产。',
        impact: { face: -5, luck: -5 }
      },
      {
        id: 'C',
        text: '甚至过敏',
        title: '甚至过敏',
        description: '声称酒精过敏。',
        quote: '‘男人不喝酒，白在世上走。’ 你被贴上了‘娘炮’的标签。',
        impact: { face: -10, health: 2 }
      }
    ]
  },
  {
    id: 'd4_evening',
    day: 4,
    dayLabel: '正月初二',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '麻将风云·数学的败北',
    description: '三缺一，你被拉上了麻将桌。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '甚至精算',
        title: '甚至精算',
        description: '精算概率。',
        quote: '在绝对的运气面前，数学就是个笑话。你输得只剩底裤。',
        impact: { money: -500, san: -5 }
      },
      {
        id: 'B',
        text: '甚至乱打',
        title: '甚至乱打',
        description: '瞎打乱出。',
        quote: '乱拳打死老师傅！你胡了一把‘屁胡’，赢回了今天的奶茶钱。',
        impact: { money: 100, luck: 5 }
      },
      {
        id: 'C',
        text: '甚至不懂',
        title: '甚至不懂',
        description: '假装不懂规则。',
        quote: '被赶下桌。‘连麻将都不会，书都读到狗肚子里去了。’',
        impact: { face: -5, san: 2 }
      }
    ]
  },
  {
    id: 'd4_sleep',
    day: 4,
    dayLabel: '正月初二',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '输钱的痛',
    description: '输了钱，这可是生活费啊。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '甚至肉疼',
        title: '甚至肉疼',
        description: '翻看钱包，计算回去后要吃多少顿泡面。',
        quote: '心痛得无法呼吸。泡面都得吃袋装的了。',
        impact: { san: -2, money: 0 }
      },
      {
        id: 'B',
        text: '甚至安慰',
        title: '甚至安慰',
        description: '就当破财免灾了。',
        quote: '至少在牌桌上没被问对象的事。',
        impact: { san: 2 }
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
    title: '相亲突袭·土味罗曼史',
    description: '媒婆上门了。对方是隔壁村养猪大户的千金。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '甚至英文',
        title: '甚至英文',
        description: '展示英文名片拒绝。',
        quote: '“Oh sorry, I\'m married to my career.” 媒婆没听懂，以为你有生理缺陷。',
        impact: { face: 2, luck: -5 }
      },
      {
        id: 'B',
        text: '甚至见面',
        title: '甚至见面',
        description: '去见一面。',
        quote: '“对方嫌你太瘦，‘不好生养’。这是你人生中第一次因为太瘦被鄙视。”',
        impact: { san: -10, face: -5 }
      },
      {
        id: 'C',
        text: '甚至出柜',
        title: '甚至出柜',
        description: '谎称喜欢男人。',
        quote: '核弹级选项。整个家族瞬间清净了，没人再敢给你介绍对象。Freedom！',
        impact: { face: -40, san: 20 }
      }
    ]
  },
  {
    id: 'd5_afternoon',
    day: 5,
    dayLabel: '正月初三',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '祭祖大典·烟熏妆',
    description: '上山祭祖。纸灰漫天飞舞。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '甚至下跪',
        title: '甚至下跪',
        description: '跪得比谁都标准。',
        quote: '为了明年的财运，你也算是拼了。膝盖在尖叫，但祖宗应该收到了你的诚意。',
        impact: { luck: 10, health: -2 }
      },
      {
        id: 'B',
        text: '甚至躲避',
        title: '甚至躲避',
        description: '躲得远远的。',
        quote: '被指责‘忘本’。你在家族里的评级下调至‘垃圾股’。',
        impact: { face: -10, luck: -2 }
      },
      {
        id: 'C',
        text: '甚至自拍',
        title: '甚至自拍',
        description: '自拍发 Ins。',
        quote: '配文‘Oriental Tradition’。被老爸一脚踹在屁股上，手机差点飞进坟头。',
        impact: { face: 2, health: -2 }
      }
    ]
  },
  {
    id: 'd5_evening',
    day: 5,
    dayLabel: '正月初三',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '崩溃边缘·厕所避难所',
    description: '经历了五天的精神摧残，你躲进了唯一的避难所——厕所。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '甚至刷手机',
        title: '甚至刷手机',
        description: '刷一整晚手机。',
        quote: '腿麻了，痔疮犯了，但灵魂得到了片刻的安息。',
        impact: { san: 10, health: -5 }
      },
      {
        id: 'B',
        text: '甚至装忙',
        title: '甚至装忙',
        description: '给英国‘同事’打电话。',
        quote: '其实是打给外卖平台客服投诉。假装在开跨国会议，声音很大，震慑亲戚。',
        impact: { face: 5, money: -50 }
      },
      {
        id: 'C',
        text: '甚至 PPT',
        title: '甚至 PPT',
        description: '写回国总结 PPT。',
        quote: '职业病犯了。你在厕所里复盘‘如何高效应付七大姑八大姨’。',
        impact: { san: -5, face: 0 }
      }
    ]
  },
  {
    id: 'd5_sleep',
    day: 5,
    dayLabel: '正月初三',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '厕所味',
    description: '在厕所待太久，身上有股味道。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '甚至喷香水',
        title: '甚至喷香水',
        description: '试图用古龙水掩盖。',
        quote: '混合出了一种更奇怪的味道。',
        impact: { face: -2 }
      },
      {
        id: 'B',
        text: '甚至习惯',
        title: '甚至习惯',
        description: '觉得这才是家乡的味道。',
        quote: '嗅觉失灵了。',
        impact: { san: 2 }
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
    title: '逃离计划·虚构的会议',
    description: '你决定实施逃跑计划，声称有一个‘涉及几百万英镑’的紧急 Zoom Meeting。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '甚至演技',
        title: '甚至演技',
        description: '表演焦急。',
        quote: '奥斯卡级别的演技。亲戚们被你的‘精英忙碌感’吓退了，甚至给你塞了两个煮鸡蛋。',
        impact: { face: 5, san: 5 }
      },
      {
        id: 'B',
        text: '甚至开溜',
        title: '甚至开溜',
        description: '直接开溜。',
        quote: '简单粗暴。虽然背后有人指指点点，但你呼吸到了自由的尘土味空气。',
        impact: { face: -5, san: 10 }
      },
      {
        id: 'C',
        text: '甚至带人',
        title: '甚至带人',
        description: '邀请表弟一起去。',
        quote: '表弟是个大嘴巴。你在网吧打游戏的事实可能在两小时后传遍全村。',
        impact: { money: -100, face: -5 }
      }
    ]
  },
  {
    id: 'd6_afternoon',
    day: 6,
    dayLabel: '正月初四',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '小镇漫游·山寨星巴克',
    description: '你在镇上发现了一家‘Starfucks’。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '甚至拍照',
        title: '甚至拍照',
        description: '点一杯拿铁并拍照。',
        quote: '味道像洗锅水。但只要滤镜加得够厚，朋友圈里这就是精致下午茶。',
        impact: { money: -30, face: 5 }
      },
      {
        id: 'B',
        text: '甚至飙英语',
        title: '甚至飙英语',
        description: '跟老板飙英语。',
        quote: '老板以为你是来收保护费的，差点报警。Cultural Shock。',
        impact: { face: -5, san: 5 }
      },
      {
        id: 'C',
        text: '甚至白嫖',
        title: '甚至白嫖',
        description: '只蹭空调不点单。',
        quote: '只要你不尴尬，尴尬的就是别人。你成功在这里苟了一个下午。',
        impact: { face: -10, money: 0 }
      }
    ]
  },
  {
    id: 'd6_evening',
    day: 6,
    dayLabel: '正月初四',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '偶遇故人·土豪同学',
    description: '遇到了初中同学二狗，他现在叫‘龙总’，开着路虎。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '甚至假装',
        title: '甚至假装',
        description: '假装不认识。',
        quote: '你低头猛吃烤冷面，差点噎死。龙总一脚油门扬长而去，溅了你一身泥。',
        impact: { face: -5, san: 2 }
      },
      {
        id: 'B',
        text: '甚至硬着头皮',
        title: '甚至硬着头皮',
        description: '硬着头皮打招呼。',
        quote: '龙总非要请你去洗脚。你被迫进行了一场名为‘叙旧’的炫富听证会。',
        impact: { san: -10, money: -100 }
      },
      {
        id: 'C',
        text: '甚至吹嘘',
        title: '甚至吹嘘',
        description: '吹嘘自己正在考察项目。',
        quote: '龙总信了，非要给你投资。你现在骑虎难下，差点就在路边摊签了合同。',
        impact: { face: 10, luck: -10 }
      }
    ]
  },
  {
    id: 'd6_sleep',
    day: 6,
    dayLabel: '正月初四',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '龙总的阴影',
    description: '二狗都开路虎了。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '甚至嫉妒',
        title: '甚至嫉妒',
        description: '搜索二狗的致富门路。',
        quote: '发现可能是微商或者传销。心里平衡了。',
        impact: { san: 5 }
      },
      {
        id: 'B',
        text: '甚至励志',
        title: '甚至励志',
        description: '发誓明年也要租辆豪车回来。',
        quote: '虚荣心是第一生产力。',
        impact: { face: 2 }
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
    title: '战前准备·租赁豪车',
    description: '为了不输给二狗，你从镇上租车行租了一辆二手宝马 3 系。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '甚至忍受',
        title: '甚至忍受',
        description: '忍受狐臭，把窗关死。',
        quote: '为了装作有空调，你差点被熏晕在驾驶座。这就是尊严的味道。',
        impact: { health: -5, face: 5 }
      },
      {
        id: 'B',
        text: '甚至敞篷',
        title: '甚至敞篷',
        description: '敞篷跑法（开窗）。',
        quote: '发型被吹成了鸡窝。到了聚会地点，你看起来像是个刚遭遇台风的难民。',
        impact: { face: -5, health: -2 }
      },
      {
        id: 'C',
        text: '甚至古龙水',
        title: '甚至古龙水',
        description: '喷洒整瓶古龙水。',
        quote: '狐臭加古龙水，混合出了‘尸体腐烂’的前调。车里的微生物都灭绝了。',
        impact: { money: -80, health: -2 }
      }
    ]
  },
  {
    id: 'd7_afternoon',
    day: 7,
    dayLabel: '正月初五',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '同学聚会·装X巅峰',
    description: '聚会现场，你把淘宝买的法拉利钥匙扔在桌上。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '甚至全英文',
        title: '甚至全英文',
        description: '全英文演讲。',
        quote: '虽然没人听得懂，但大家觉得很厉害。服务员以为你要点西餐，给你端来了一盘拍黄瓜。',
        impact: { face: 10, luck: -2 }
      },
      {
        id: 'B',
        text: '甚至凡尔赛',
        title: '甚至凡尔赛',
        description: '低调凡尔赛。',
        quote: '“其实我也就只是个普通的 Financial Analyst。” 大家纷纷敬酒，你成了全场焦点。',
        impact: { face: 15, san: 5 }
      },
      {
        id: 'C',
        text: '甚至拆穿',
        title: '甚至拆穿',
        description: '被拆穿（车钥匙没电了）。',
        quote: '有人按了一下你的钥匙，结果外面一辆电动车响了。社会性死亡现场。',
        impact: { face: -50, san: -20 }
      }
    ]
  },
  {
    id: 'd7_evening',
    day: 7,
    dayLabel: '正月初五',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: 'KTV决战·High歌',
    description: '转场 KTV。你在点歌台寻找 Adele，但置顶全是《小苹果》。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '甚至坚持',
        title: '甚至坚持',
        description: '坚持唱英文歌。',
        quote: '你唱了 My Heart Will Go On。全场冷场，大家开始低头玩手机。气氛终结者。',
        impact: { face: 2, luck: -5 }
      },
      {
        id: 'B',
        text: '甚至入乡',
        title: '甚至入乡',
        description: '入乡随俗唱神曲。',
        quote: '你吼了一嗓子《好汉歌》。人设崩塌，但大家嗨了，觉得你‘终于接地气了’。',
        impact: { face: -5, san: 10 }
      },
      {
        id: 'C',
        text: '甚至躲避',
        title: '甚至躲避',
        description: '躲在角落喝闷酒。',
        quote: '看着曾经暗恋的女神和二狗对唱情歌，你感觉自己是个多余的背景板。',
        impact: { san: -5, health: -2 }
      }
    ]
  },
  {
    id: 'd7_sleep',
    day: 7,
    dayLabel: '正月初五',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '租车的代价',
    description: '租了一天车，不仅没装到，还花了一大笔钱。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '甚至心疼',
        title: '甚至心疼',
        description: '看着信用卡账单流泪。',
        quote: '下个月要多跑 500 单外卖才能补回来。',
        impact: { money: -500, san: -5 }
      },
      {
        id: 'B',
        text: '甚至还车',
        title: '甚至还车',
        description: '担心车刮花了要赔钱。',
        quote: '半夜爬起来去检查车况。神经质。',
        impact: { san: -2, health: -2 }
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
    title: '宿醉清晨·账单惊吓',
    description: '昨晚抢着买单刷了信用卡。看到扣款短信的瞬间，你的酒醒了。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '甚至装豪爽',
        title: '甚至装豪爽',
        description: '发朋友圈装豪爽。',
        quote: '含泪配图：‘Friends forever。’ 实际上在查哪个平台贷款利息低。',
        impact: { face: 5, money: -1000 }
      },
      {
        id: 'B',
        text: '甚至AA',
        title: '甚至AA',
        description: '群里试探能不能 AA。',
        quote: '刚发出去就撤回了，但已经被截图了。你在同学圈的名声彻底臭了。',
        impact: { face: -30, money: 500 }
      },
      {
        id: 'C',
        text: '甚至泡面',
        title: '甚至泡面',
        description: '吃泡面止损。',
        quote: '接下来的日子，老坛酸菜就是你的米其林三星。',
        impact: { health: -2, money: 20 }
      }
    ]
  },
  {
    id: 'd8_afternoon',
    day: 8,
    dayLabel: '正月初六',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '特产采购·倒爷上线',
    description: '老妈逼你带上两只活鸡和五十斤腊肉。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '甚至倒卖',
        title: '甚至倒卖',
        description: '全部打包带走。',
        quote: '你打算回去就在闲鱼上卖了。‘乡村直供，米其林品质’。不仅回血，还赚了一笔。',
        impact: { money: 300, weight: -1 }
      },
      {
        id: 'B',
        text: '甚至不带',
        title: '甚至不带',
        description: '死活不带。',
        quote: '老妈伤心地抹泪，觉得你嫌弃家。你心里也不滋味，San 值下降。',
        impact: { san: -5, face: -5 }
      },
      {
        id: 'C',
        text: '甚至折中',
        title: '甚至折中',
        description: '只带那两只活鸡。',
        quote: '高铁上鸡叫了一路。你成为了整个车厢最‘引人注目’的仔。',
        impact: { face: -10, san: -5 }
      }
    ]
  },
  {
    id: 'd8_evening',
    day: 8,
    dayLabel: '正月初六',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '行李俄罗斯方块',
    description: '收拾行李。Rimowa 箱子已经被磕掉了两个角。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '甚至暴力',
        title: '甚至暴力',
        description: '暴力压缩。',
        quote: '箱子拉链爆了。你的 Gucci 衬衫和老妈做的霉豆腐拥抱在了一起，彻底报废。',
        impact: { money: -500, luck: -5 }
      },
      {
        id: 'B',
        text: '甚至扔衣',
        title: '甚至扔衣',
        description: '扔掉部分衣物。',
        quote: '断舍离。为了带腊肉，你扔掉了几件 Zara。这就是取舍的艺术。',
        impact: { money: -200, face: 2 }
      },
      {
        id: 'C',
        text: '甚至编织袋',
        title: '甚至编织袋',
        description: '再买个编织袋。',
        quote: '当你提着红白蓝编织袋站在村口，你终于完成了从‘海归’到‘春运民工’的完美蜕变。',
        impact: { face: -15, money: -10 }
      }
    ]
  },
  {
    id: 'd8_sleep',
    day: 8,
    dayLabel: '正月初六',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '甚至不想走',
    description: '虽然这里土，但是这里不用送外卖。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '甚至赖着',
        title: '甚至赖着',
        description: '想要不要多请两天假。',
        quote: '想了想全勤奖，还是算了。',
        impact: { san: -2 }
      },
      {
        id: 'B',
        text: '甚至告别',
        title: '甚至告别',
        description: '摸了摸床头的旧玩偶。',
        quote: 'Goodbye, Woody. I\'m going back to the toy box.',
        impact: { san: 5 }
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
    title: '离别时刻·红包回血',
    description: '爷爷奶奶塞给你两个厚厚的红包。‘外面冷，多吃点好的。’',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '甚至真香',
        title: '甚至真香',
        description: '假装推辞然后收下。',
        quote: '嘴上说不要，身体很诚实。这笔钱救了你下个月的房租。真香。',
        impact: { money: 2000, face: -2 }
      },
      {
        id: 'B',
        text: '甚至拒绝',
        title: '甚至拒绝',
        description: '坚决不收。',
        quote: '你觉得自己长大了。虽然口袋空空，但心里暖暖的。这就是成长的代价。',
        impact: { face: 5, san: 5 }
      },
      {
        id: 'C',
        text: '甚至回赠',
        title: '甚至回赠',
        description: '回赠一个更大的红包。',
        quote: '打肿脸充胖子。你赢了面子，回去得吃三个月土。但在老人眼里，你出息了。',
        impact: { money: -3000, face: 15 }
      }
    ]
  },
  {
    id: 'd9_afternoon',
    day: 9,
    dayLabel: '正月初七',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '返程囧途·身份切换',
    description: '你的眼神逐渐从呆滞变得犀利，准备迎接外卖系统的派单音。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '甚至接单',
        title: '甚至接单',
        description: '立刻打开接单 APP。',
        quote: '抢到了一个顺路单。Welcome back to reality, worker。',
        impact: { money: 50, san: -2 }
      },
      {
        id: 'B',
        text: '甚至修图',
        title: '甚至修图',
        description: '修图发最后一条朋友圈。',
        quote: '‘Goodbye my village, see you next year.’ 定位显示：Heathrow Airport（其实是虹桥火车站）。',
        impact: { face: 5, luck: -2 }
      },
      {
        id: 'C',
        text: '甚至补觉',
        title: '甚至补觉',
        description: '睡觉补觉。',
        quote: '在梦里，你真的成了 Manchester 的名流，没有外卖，只有红酒和 Church。',
        impact: { health: 5, san: 5 }
      }
    ]
  },
  {
    id: 'd9_evening',
    day: 9,
    dayLabel: '正月初七',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '终章·出租屋的泡面',
    description: '回到冰冷的出租屋。你煮了一碗泡面，加了一根从家里带回来的香肠。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '甚至满足',
        title: '甚至满足',
        description: '大口吃完。',
        quote: '真香。还是家里的味道好，虽然形状有点别致。你活过来了。',
        impact: { health: 2, san: 5 }
      },
      {
        id: 'B',
        text: '甚至感伤',
        title: '甚至感伤',
        description: '一边吃一边哭。',
        quote: '也许明年，真的可以混出个人样来？至少不用再租车装 X 了。',
        impact: { san: -2, face: 2 }
      },
      {
        id: 'C',
        text: '甚至滤镜',
        title: '甚至滤镜',
        description: '拍照发‘Late night snack’。',
        quote: '这碗泡面在滤镜下像 Ramen。你依然是那个甄洋气，生活继续，装 X 不止。',
        impact: { face: 5, luck: 2 }
      }
    ]
  },
  {
    id: 'd9_sleep',
    day: 9,
    dayLabel: '正月初七',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '重启',
    description: '闹钟定在了 6:30。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '甚至加油',
        title: '甚至加油',
        description: '对着镜子里的自己说“Cheers”。',
        quote: '为了 Rimowa，为了 Balenciaga，冲！',
        impact: { san: 5 }
      },
      {
        id: 'B',
        text: '甚至认命',
        title: '甚至认命',
        description: '关灯，睡觉。',
        quote: '这就是生活。Good night, cruel world。',
        impact: { health: 2 }
      }
    ]
  },
];

export const zhenYangqiEndings: Ending[] = [
  {
    id: 'sisyphus_filter',
    title: '滤镜下的西西弗斯',
    description: '你回到了那个冰冷的出租屋，熟练地煮了一碗泡面，加了一根从老家带回的香肠。朋友圈里，你发的那张定位在“Heathrow Airport”的照片收获了30个赞，二舅还在评论区问你“英国冷不冷”。你看着屏幕上精致的滤镜，再看看手机银行里依然刺眼的负债数字，叹了口气。闹钟定在了6:30，明天又是作为“城市骑手”的一天。你依然是那个甄洋气，生活继续，装X不止，就像推着石头上山的西西弗斯，在虚荣与现实的夹缝中，痛并快乐着。',
    condition: (stats) => stats.san >= 25 && stats.san <= 60 && stats.money < -180000
  },
  {
    id: 'london_dream_collapse',
    title: '崩塌的“英伦梦”',
    description: '春节结束了，但你的噩梦才刚刚开始。为了圆那个“年薪百万”的谎，你不仅刷爆了信用卡租赁豪车，还为了所谓的面子回赠了爷爷奶奶三千块的大红包。回到城里，车行打来电话说车漆有划痕需要高额赔偿，而此时房东的催租微信也准时弹窗。你看着镜子里那个因为长期吃泡面而浮肿、又因为焦虑而脱发的自己，终于崩溃了。你拉黑了所有亲戚的联系方式，在这个巨大的城市里，像一只试图把头埋进沙子的鸵鸟，连那个虚假的“伦敦梦”都做不下去了。',
    condition: (stats) => stats.san < 25 || stats.money < -183000
  },
  {
    id: 'sober_reseller',
    title: '人间清醒“倒爷”',
    description: '返程的高铁上，你看着微信余额里多出来的两千多块钱——那是爷爷奶奶硬塞给你的红包和你在闲鱼上倒卖腊肉赚的差价，嘴角比AK还难压。虽然在村里被二大爷嘲笑穿得像个萨满，被媒婆嫌弃太瘦，但你看着窗外飞驰的景色，突然觉得那种死要面子活受罪的“英伦范”毫无意义。你打开外卖APP，抢到了一个回程顺路单。这一次，你没有修图发朋友圈，而是踏实地拧动了油门。负债依然在，但你在这个春节治好了自己的精神内耗。Welcome back to reality, rich man at heart.',
    condition: (stats) => stats.san > 60 || stats.money > -178000
  }
];