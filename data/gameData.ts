import { Character, GameEvent, Ending, Achievement } from '../types';

export const CHARACTERS: Character[] = [
  {
    id: 'hao_shitu',
    name: '郝仕途',
    avatar: 'https://i.postimg.cc/Zqr31dWv/101.jpg',
    tags: ['厅局风·编制内霸总', '#山东丈母娘梦中情婿', '#保温杯里泡枸杞'],
    roleDescription: '厅局风·编制内霸总',
    bio: '"不管是五粮液还是茅台，倒进我的保温杯里都一样。在单位我是小郝，回了村我就是\'省里有人\'的郝处。别问工资，问就是\'死工资，不够油钱\'，但我后备箱里的米面油从来没断过。"',
    baseStats: {
      money: 158000,
      weight: 88,
      face: 100,
      san: 95,
      health: 55,
      luck: 85,
    },
  },
  {
    id: 'hua_beibei',
    name: '花贝贝',
    avatar: 'https://i.postimg.cc/zfD7Y0Sk/102.jpg',
    tags: ['都市隶人·回村Vivian', '#精致穷', '#沪上名媛体验卡'],
    roleDescription: '都市隶人·回村Vivian',
    bio: '“我的美甲是找‘海底捞’做的，包包是‘广州皮具城’的高定。回村这七天，是我年度演技大赏。千万别问我为什么不买车，问就是‘上海牌照太难拍’，其实是连五菱宏光都首付不起。”',
    baseStats: {
      money: -32450,
      weight: 46,
      face: 80,
      san: 40,
      health: 45,
      luck: 15,
    },
  }
];

// Map events to character IDs
export const CHARACTER_EVENTS: Record<string, GameEvent[]> = {
  'hao_shitu': [
    // Day 1
    {
      id: 'd1_morning',
      day: 1,
      dayLabel: '腊月二十八',
      timeOfDay: 'morning',
      timeLabel: '早上',
      title: '后备箱的“政治学”',
      description: '早上8点，你站在那辆洗得发亮的黑帕萨特车尾。面前是堆积如山的年货。你知道，后备箱怎么摆，决定了回村后打开那一瞬间的“含权量”。',
      image: 'https://i.postimg.cc/c4RSt1tf/1_1.png',
      choices: [
        {
          id: 'A',
          text: '显山露水',
          title: '显山露水',
          description: '把单位发的印字米面油、茅台摆在最外层',
          quote: '这不仅是油，这是组织的关怀。得让二舅他们一眼就看见‘xx特供’这几个字。',
          impact: { face: 10, health: -2 }
        },
        {
          id: 'B',
          text: '谨小慎微',
          title: '谨小慎微',
          description: '拿两份红头文件（哪怕是过期的）夹在公文包里随身带',
          quote: '万一村支书问起政策，我得有理论依据。再说，手里没个文件袋，心里不踏实。',
          impact: { san: 5, weight: -1 }
        },
        {
          id: 'C',
          text: '养生为重',
          title: '养生为重',
          description: '先花半小时灌满三大壶特级枸杞原浆水',
          quote: '堵车不可怕，可怕的是堵车的时候肾虚。我们要打有准备的仗。',
          impact: { health: 5, money: -100 }
        }
      ]
    },
    {
      id: 'd1_afternoon',
      day: 1,
      dayLabel: '腊月二十八',
      timeOfDay: 'afternoon',
      timeLabel: '下午',
      title: '高速路上的“远程办公”',
      description: '下午2点，意料之中地堵在了高速上。车内空气沉闷，只有车载蓝牙连着你的手机。这时候，你的表演欲望上来了。',
      image: 'https://i.postimg.cc/mgTGYx7m/1_2.png',
      choices: [
        {
          id: 'A',
          text: '电话遥控',
          title: '电话遥控',
          description: '给留守的值班老李打个慰问电话',
          quote: '（故意按免提）“喂，老李啊，辛苦辛苦！那个阀门的事……对，原则上按我说的办。我在哪？哎呀不用管我，大局为重！”',
          impact: { san: 5, face: 3 }
        },
        {
          id: 'B',
          text: '指点江山',
          title: '指点江山',
          description: '评判前车的驾驶技术和交通规划',
          quote: '这就不是开车的问题，这是顶层设计没做好！要是让我来抓交通口……',
          impact: { san: -3, weight: 1 }
        },
        {
          id: 'C',
          text: '闭目养神',
          title: '闭目养神',
          description: '在副驾驶躺平，让老婆/孩子开车',
          quote: '我平时太累了，既然是放假，就得学会放权。小刘（老婆），稳着点开。',
          impact: { health: 3, face: -5 }
        }
      ]
    },
    {
      id: 'd1_evening',
      day: 1,
      dayLabel: '腊月二十八',
      timeOfDay: 'evening',
      timeLabel: '晚上',
      title: '村口的“首秀”',
      description: '晚上7点，车终于驶入村口。大灯照亮了聚集在小卖部前的情报中心（大爷大妈们）。这是你一年中最重要的“述职报告”现场。',
      image: 'https://i.postimg.cc/3x3HXM2B/1_3.png',
      choices: [
        {
          id: 'A',
          text: '精准散烟',
          title: '精准散烟',
          description: '摇下车窗，见人就递一根软中华',
          quote: '哪怕叫不出名字，也要喊一句“二叔/三婶”。必须保持微笑，动作要行云流水，尽显干部的亲和力。',
          impact: { money: -300, face: 10, luck: 5 }
        },
        {
          id: 'B',
          text: '低调潜行',
          title: '低调潜行',
          description: '不停车，直接开进自家院子关大门',
          quote: '现在的形势，低调才是最大的炫耀。让他们猜去吧，越神秘越敬畏。',
          impact: { face: -5, san: 5 }
        },
        {
          id: 'C',
          text: '甚至不回家',
          title: '甚至不回家',
          description: '直接把车开到村支书家门口',
          quote: '先拜码头。要想在村里过得舒坦，还得和‘组织’保持一致。',
          impact: { face: 5, money: -500 }
        }
      ]
    },
    {
      id: 'd1_sleep',
      day: 1,
      dayLabel: '腊月二十八',
      timeOfDay: 'sleep',
      timeLabel: '睡觉',
      title: '换地图后的第一夜',
      description: '晚上10点，老家的床有点硬，窗外偶尔传来鞭炮声。你换上了旧睡衣，但不仅没睡意，反而开始焦虑明天的“战斗”。',
      image: 'https://i.postimg.cc/Dw7KrV1d/1_4.png',
      choices: [
        {
          id: 'A',
          text: '情报搜集',
          title: '情报搜集',
          description: '翻看家族群消息，分析明天谁会来借钱',
          quote: '三表舅刚买了房可能手头紧，二姨家孩子要考公肯定得找我咨询……我得备好话术。',
          impact: { san: -5, luck: 2 }
        },
        {
          id: 'B',
          text: '彻底躺平',
          title: '彻底躺平',
          description: '泡个脚，什么都不想',
          quote: '管他呢，天塌下来有高个子顶着。我是回来过年的，又不是回来扶贫的。',
          impact: { health: 2, san: 2 }
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
      title: '祭祖的“述职报告”',
      description: '早上9点，全家族准备上山祭祖。寒风凛冽，这是展示孝道和家族地位的最佳时机。',
      image: 'https://i.postimg.cc/GmznzMjS/2_1.png',
      choices: [
        {
          id: 'A',
          text: '政绩汇报',
          title: '政绩汇报',
          description: '念叨：“太爷爷，孙子我现在负责的重点项目已经落地了...”',
          quote: '向列祖列宗汇报工作，这叫不忘本。保佑我仕途顺遂，也是为了光宗耀祖。',
          impact: { san: 5, face: 5 }
        },
        {
          id: 'B',
          text: '风水指导',
          title: '风水指导',
          description: '指着旁边的树：“三叔，这棵树挡了财位，原则上应该移走...”',
          quote: '不懂风水的干部不是好孙子。这叫‘环境整治’。',
          impact: { face: 5, money: -500 }
        },
        {
          id: 'C',
          text: '默默做事',
          title: '默默做事',
          description: '一言不发，抢着背最沉的祭品，把碑擦得锃亮',
          quote: '实干兴邦。让大家看到，我虽然当了官，但还是那个肯干活的小郝。',
          impact: { luck: 5, health: -2 }
        }
      ]
    },
    {
      id: 'd2_afternoon',
      day: 2,
      dayLabel: '腊月二十九',
      timeOfDay: 'afternoon',
      timeLabel: '下午',
      title: '贴对联的“指挥艺术”',
      description: '下午3点，开始贴春联。梯子架好了，浆糊打好了。这时候你是亲自动手，还是发挥领导特长？',
      image: 'https://i.postimg.cc/sgKCKncD/2_2.png',
      choices: [
        { id: 'A', text: '现场指挥', title: '现场指挥', description: '双手背在身后，指挥晚辈：“歪了歪了！往左一公分！要有大局观！”', quote: '站得高不一定看得远，站在地上指挥的人才掌握全局。', impact: { face: 5, health: 2 } },
        { id: 'B', text: '御笔亲书', title: '御笔亲书', description: '铺开红纸，写一副充满“老干部体”的对联：“国恩家庆，人寿年丰”', quote: '这字还得练，有点躁气。不过镇住这帮没文化的亲戚足够了。', impact: { face: 15, san: -3 } },
        { id: 'C', text: '摸鱼隐身', title: '摸鱼隐身', description: '借口“单位有急事”，躲车里抽烟刷手机', quote: '这种体力活，留给年轻人锻炼吧。我得养精蓄锐应对晚上的酒局。', impact: { san: 5, face: -2 } },
      ]
    },
    {
      id: 'd2_evening',
      day: 2,
      dayLabel: '腊月二十九',
      timeOfDay: 'evening',
      timeLabel: '晚上',
      title: '年夜饭的“C位争夺战”',
      description: '晚上6点，除夕大餐。菜上齐了，最关键的时刻到了——座次排定。',
      image: 'https://i.postimg.cc/3x9Q9LBx/2_3.png',
      choices: [
        { id: 'A', text: '三辞三让', title: '三辞三让', description: '嘴上说“坐那儿不合适”，身体却很诚实地被拉向主宾位', quote: '哎呀，二叔您坐！我不行！……既然大家都这么说，那我就恭敬不如从命了。', impact: { face: 20, san: 5 } },
        { id: 'B', text: '发表讲话', title: '发表讲话', description: '举起酒杯，敲敲桌子：“在动筷子之前，我简单讲三点……”', quote: '一是要感恩，二是要团结，三是要发展。来，干了！', impact: { face: 5, luck: -5 } },
        { id: 'C', text: '亲民路线', title: '亲民路线', description: '主动去小孩那一桌挤着坐', quote: '我还是喜欢和祖国的花朵在一起，单纯！', impact: { weight: 2, face: -5 } },
      ]
    },
    {
      id: 'd2_sleep',
      day: 2,
      dayLabel: '腊月二十九',
      timeOfDay: 'sleep',
      timeLabel: '睡觉',
      title: '压岁钱的“财政预算”',
      description: '零点钟声敲响。晚辈们排队拜年。你的红包厚度决定了明年的口碑。',
      image: 'https://i.postimg.cc/SKsFPWTs/2_4.png',
      choices: [
        { id: 'A', text: '精准扶贫', title: '精准扶贫', description: '学习好的多给，学习差的少给，并附赠一句“将来考公务员”', quote: '每一分钱都要花在刀刃上，这叫‘绩效考核’。', impact: { money: -1000, san: 2 } },
        { id: 'B', text: '撒币战术', title: '撒币战术', description: '只要喊叔叔的统统200，见者有份', quote: '花钱买清静。不用记谁是谁，统一标准最公平。', impact: { money: -3000, face: 10 } },
      ]
    },
    // Day 3
    {
      id: 'd3_morning',
      day: 3,
      dayLabel: '正月初一',
      timeOfDay: 'morning',
      timeLabel: '早上',
      title: '短信批阅与发送',
      description: '早上7点，两台手机都震个不停。全是复制粘贴的群发祝福。你需要处理这些信息。',
      image: 'https://i.postimg.cc/5t0drw7H/3_1.png',
      choices: [
        { id: 'A', text: '定向攻坚', title: '定向攻坚', description: '给局长编辑一条200字的小作文，包含局长名字和具体细节', quote: '要体现出差异化竞争优势。群发的信息是垃圾，定制的信息是忠心。', impact: { san: -5, luck: 10 } },
        { id: 'B', text: '批阅奏章', title: '批阅奏章', description: '对下属和普通朋友的祝福，统一回复“同乐”', quote: '言多必失，保持一点神秘感和距离感。', impact: { face: 5, san: 2 } },
        { id: 'C', text: '无视消息', title: '无视消息', description: '无论谁发都不回，直接静音', quote: '真正的强者，从不在意这些虚礼。我在休息，勿扰。', impact: { luck: -5, health: 2 } },
      ]
    },
    {
      id: 'd3_afternoon',
      day: 3,
      dayLabel: '正月初一',
      timeOfDay: 'afternoon',
      timeLabel: '下午',
      title: '全村巡游（踩泥坑）',
      description: '必须去村里几位长辈家走一圈。路面盖着层雪，你穿着擦得锃亮的皮鞋。',
      image: 'https://i.postimg.cc/QMyGZHwy/3_2.png',
      choices: [
        { id: 'A', text: '干部下乡', title: '干部下乡', description: '无论进谁家，先看墙上奖状，再点评房子结构', quote: '老三，这房子采光不行啊，得做个‘顶层设计’改造一下。', impact: { face: 5, san: 2 } },
        { id: 'B', text: '遭遇借钱', title: '遭遇借钱', description: '远房表弟凑过来，支支吾吾想开口。你立刻预判', quote: '别等他开口！先发制人：‘最近单位查得严，工资卡都上交了，难啊！’', impact: { money: 0, face: -2 } },
        { id: 'C', text: '硬撑场面', title: '硬撑场面', description: '即使踩了一脚泥，也要保持微笑，给小孩发糖', quote: '这叫‘深入基层’，脚下有泥，心中有光。', impact: { health: -2, face: 5 } },
      ]
    },
    {
      id: 'd3_evening',
      day: 3,
      dayLabel: '正月初一',
      timeOfDay: 'evening',
      timeLabel: '晚上',
      title: '第一场硬仗（酒局）',
      description: '发小聚会。这是把你拉下神坛的修罗场，全是高度白酒。',
      image: 'https://i.postimg.cc/TP4MvpFk/3_3.png',
      choices: [
        { id: 'A', text: '战术养生', title: '战术养生', description: '掏出药盒：“兄弟们，我刚吃了头孢，以茶代酒，心意在。”', quote: '保命要紧。留得青山在，不怕没酒喝。', impact: { health: 5, face: -10 } },
        { id: 'B', text: '舍命陪君子', title: '舍命陪君子', description: '“满上！今天不谈工作，只谈感情！喝！”', quote: '宁伤身体，不伤感情。酒精是男人友谊的润滑剂。', impact: { health: -10, face: 15, san: -5 } },
        { id: 'C', text: '太极推手', title: '太极推手', description: '每一杯都只抿一小口，但劝酒词一套一套的', quote: '酒品即人品，但我只劝别人喝。这叫‘管理能力’。', impact: { luck: 5, face: 2 } },
      ]
    },
    {
      id: 'd3_sleep',
      day: 3,
      dayLabel: '正月初一',
      timeOfDay: 'sleep',
      timeLabel: '睡觉',
      title: '酒后真言',
      description: '喝完酒回来，你不想打扰妻子，你自己一个人到小房间躺在床上天旋地转。',
      image: 'https://i.postimg.cc/MGF2Jvg2/3_4.png',
      choices: [
        { id: 'A', text: '后悔', title: '后悔', description: '“言多必失，刚才不该吹那个牛，说明天给强子安排工作的。”', quote: '......', impact: { san: -5 } },
        { id: 'B', text: '昏睡', title: '昏睡', description: '鼾声如雷', quote: '......', impact: { health: -2 } },
      ]
    },
    // Day 4
    {
      id: 'd4_morning',
      day: 4,
      dayLabel: '正月初二',
      timeOfDay: 'morning',
      timeLabel: '早上',
      title: '礼品的“含权量”',
      description: '回丈母娘家，你提着五粮液，看到大姐夫提着茅台和整箱车厘子。',
      image: 'https://i.postimg.cc/SsY0Smpb/4_1.png',
      choices: [
        { id: 'A', text: '特供攻势', title: '特供攻势', description: '拿出一盒包装简陋但印着“内部供应”的茶叶', quote: '妈，这茶外面买不到，是省里开会发的。比茅台养生。', impact: { face: 10, money: 0 } },
        { id: 'B', text: '现金为王', title: '现金为王', description: '既然拼不过礼物，直接拍两万现金给丈母娘', quote: '简单粗暴。但我心在滴血，这是私房钱啊。', impact: { money: -20000, face: 15 } },
        { id: 'C', text: '家务表现', title: '家务表现', description: '一进门就穿围裙下厨房', quote: '虽然我没大姐夫有钱，但我比他顾家。', impact: { health: -2, face: 5 } },
      ]
    },
    {
      id: 'd4_afternoon',
      day: 4,
      dayLabel: '正月初二',
      timeOfDay: 'afternoon',
      timeLabel: '下午',
      title: '客厅里的“凡尔赛”',
      description: '大姐夫在吹嘘今年的生意赚了多少个W，老丈人在听。',
      image: 'https://i.postimg.cc/qRPPgWkn/4_2.png',
      choices: [
        { id: 'A', text: '降维打击', title: '降维打击', description: '淡淡地说：“赚钱好啊，不过最近税务查得严，大姐夫要注意合规风险。”', quote: '一句话让他闭嘴。在规则制定者面前，赚钱的都是打工的。', impact: { san: 5, face: 5 } },
        { id: 'B', text: '避其锋芒', title: '避其锋芒', description: '躲到阳台去给花浇水，顺便和老丈人聊国际局势', quote: '我们要聊点有高度的，比如中东局势，显得我格局大。', impact: { san: 2, luck: 2 } },
        { id: 'C', text: '附和吹捧', title: '附和吹捧', description: '“大姐夫厉害！以后还得靠你帮衬。”', quote: '大丈夫能屈能伸，说不定哪天真要找他借钱。', impact: { face: -5, money: 0 } },
      ]
    },
    {
      id: 'd4_evening',
      day: 4,
      dayLabel: '正月初二',
      timeOfDay: 'evening',
      timeLabel: '晚上',
      title: '麻将桌上的政治',
      description: '陪老丈人、大姐夫、亲戚一起打麻将。',
      image: 'https://i.postimg.cc/d1bbDgqj/4_3.png',
      choices: [
        { id: 'A', text: '精准喂牌', title: '精准喂牌', description: '宁可自己拆听，也要让老丈人胡牌', quote: '哄好了领导（岳父），日子才好过。', impact: { money: -500, luck: 5 } },
        { id: 'B', text: '大杀四方', title: '大杀四方', description: '展现高超算牌技巧，赢光大姐夫的钱', quote: '让你下午吹牛！在智商面前，你那些钱没用。', impact: { money: 1000, face: 5, luck: -2 } },
        { id: 'C', text: '观战指点', title: '观战指点', description: '站在老丈人背后瞎指挥', quote: '爸，打这张！信我的，我是统筹全局的。', impact: { face: -2, san: -2 } },
      ]
    },
    {
      id: 'd4_sleep',
      day: 4,
      dayLabel: '正月初二',
      timeOfDay: 'sleep',
      timeLabel: '睡觉',
      title: '枕边风',
      description: '终于结束了一天的客场作战，你和老婆穿着睡衣坐在床头聊起天。',
      image: 'https://i.postimg.cc/mk709VkT/4_4.png',
      choices: [
        { id: 'A', text: '吐槽', title: '吐槽', description: '跟老婆抱怨：“你大姐夫有点太张扬了，迟早出事。”', quote: '精神胜利法。', impact: { san: 2 } },
        { id: 'B', text: '认床', title: '认床', description: '在丈母娘家睡不着，失眠', quote: '......', impact: { health: -2 } },
      ]
    },
    // Day 5
    {
      id: 'd5_morning',
      day: 5,
      dayLabel: '正月初三',
      timeOfDay: 'morning',
      timeLabel: '早上',
      title: '战袍加身',
      description: '今天有同学会，站在镜子前，看着发际线，今天不能穿便装。',
      image: 'https://i.postimg.cc/D01tG503/5_1.png',
      choices: [
        { id: 'A', text: '厅局穿搭', title: '厅局穿搭', description: '白衬衫（不扎领带），深色行政夹克，黑西裤，黑皮鞋', quote: '这叫‘不可描述的威严感’。此时无声胜有声。', impact: { face: 10, san: 2 } },
        { id: 'B', text: '时尚减龄', title: '时尚减龄', description: '穿卫衣牛仔裤，试图装嫩', quote: '我心态还年轻，不像他们那么油腻。', impact: { face: -5, health: 2 } },
        { id: 'C', text: '满身Logo', title: '满身Logo', description: '把过年买的奢侈品都挂身上', quote: '虽然土，但是贵。简单直接。', impact: { face: 2, money: 0 } },
      ]
    },
    {
      id: 'd5_afternoon',
      day: 5,
      dayLabel: '正月初三',
      timeOfDay: 'afternoon',
      timeLabel: '下午',
      title: '饭局买单秀',
      description: '饭吃完了，服务员拿着账单走过来。死对头刚要掏卡。',
      image: 'https://i.postimg.cc/qMTfrfb9/5_2.png',
      choices: [
        { id: 'A', text: '抢单表演', title: '抢单表演', description: '按住死对头的手：“别动！到了我的地盘还能让你花钱？看不起我？”', quote: '声音要大，动作要慢，眼神示意旁边的人来拦我。', impact: { face: 5, money: 0 } },
        { id: 'B', text: '真正买单', title: '真正买单', description: '趁大家上厕所先把账结了', quote: '虽然肉疼，但这叫‘格局’。回去吃一个月泡面也值了。', impact: { money: -2000, face: 15 } },
        { id: 'C', text: '借花献佛', title: '借花献佛', description: '“哎呀，这顿饭要是能开发票就好了…还是赵老板大气。”', quote: '一句话确立了你‘公家饭’的身份，又省了钱。', impact: { san: 5, face: -2 } },
      ]
    },
    {
      id: 'd5_evening',
      day: 5,
      dayLabel: '正月初三',
      timeOfDay: 'evening',
      timeLabel: '晚上',
      title: 'KTV麦霸',
      description: '吃完饭，同学们约好去KTV，进了包厢，大家都喝嗨了。',
      image: 'https://i.postimg.cc/7Ykv4vsj/5_3.png',
      choices: [
        { id: 'A', text: '主旋律', title: '主旋律', description: '必点《精忠报国》或《向天再借五百年》', quote: '我站在风口浪尖紧握住日月旋转！吼出中年男人的不甘。', impact: { san: 10, face: -5 } },
        { id: 'B', text: '深情款款', title: '深情款款', description: '给初恋唱《同桌的你》', quote: '眼神要忧郁。以此祭奠我死去的青春。', impact: { luck: -5, san: 5 } },
        { id: 'C', text: '商务陪酒', title: '商务陪酒', description: '玩骰子，把老同学当客户陪', quote: '职业病犯了。让大家都喝好是我的职责。', impact: { health: -5, face: 5 } },
      ]
    },
    {
      id: 'd5_sleep',
      day: 5,
      dayLabel: '正月初三',
      timeOfDay: 'sleep',
      timeLabel: '睡觉',
      title: '虚荣后的空虚',
      description: '同学聚会散场，冷风一吹，回到家你去到小房间躺下。',
      image: 'https://i.postimg.cc/5NVcJc7h/5_4.png',
      choices: [
        { id: 'A', text: '感叹', title: '感叹', description: '“一帮俗人，除了钱就是钱，还是我境界高。”', quote: '......', impact: { san: 5 } },
        { id: 'B', text: '胃痛', title: '胃痛', description: '找胃药', quote: '......', impact: { health: -5 } },
      ]
    },
    // Day 6
    {
      id: 'd6_morning',
      day: 6,
      dayLabel: '正月初四',
      timeOfDay: 'morning',
      timeLabel: '早上',
      title: '赖床与借口',
      description: '早上10点，腰酸背痛，根本起不来。',
      image: 'https://i.postimg.cc/TY68x8Nf/6_1.png',
      choices: [
        { id: 'A', text: '装病谢客', title: '装病谢客', description: '告诉家人身体不适，今天闭门谢客', quote: '可能是痛风犯了…哎哟…为了工作透支了身体啊。', impact: { health: 5, face: -5 } },
        { id: 'B', text: '硬挺晨跑', title: '硬挺晨跑', description: '坚持去村里跑步，并在朋友圈打卡', quote: '自律的男人最可怕。我要让大家看到我的意志力。', impact: { health: -3, face: 5 } },
      ]
    },
    {
      id: 'd6_afternoon',
      day: 6,
      dayLabel: '正月初四',
      timeOfDay: 'afternoon',
      timeLabel: '下午',
      title: '熊孩子危机',
      description: '亲戚家熊孩子来串门，看上了你柜子里的五粮液酒水瓶子。',
      image: 'https://i.postimg.cc/hPbkPCNG/6_2.png',
      choices: [
        { id: 'A', text: '大义灭亲', title: '大义灭亲', description: '“拿走拿走，叔叔都多大了还玩这个。”', quote: '心在滴血，脸上在笑。这叫长辈风度。', impact: { san: -10, face: 5 } },
        { id: 'B', text: '严肃教育', title: '严肃教育', description: '“这个不是玩具，这是叔叔的‘固定资产’，我们要懂得物权法。”', quote: '用专业名词把小孩绕晕，让他知难而退。', impact: { san: 5, face: -2 } },
        { id: 'C', text: '祸水东引', title: '祸水东引', description: '“这个不好玩，去找你爸要把。”', quote: '成功的管理者懂得转移矛盾。', impact: { luck: 2, san: 2 } },
      ]
    },
    {
      id: 'd6_evening',
      day: 6,
      dayLabel: '正月初四',
      timeOfDay: 'evening',
      timeLabel: '晚上',
      title: '避难所（车内独处）',
      description: '终于没人了。你躲在车里，既不开火也不开灯，只是坐着。',
      image: 'https://i.postimg.cc/X7cR72tL/6_3.png',
      choices: [
        { id: 'A', text: '打游戏', title: '打游戏', description: '玩一把王者荣耀，必须玩坦克，因为要抗压', quote: '只有在峡谷里，我才能真正做自己。', impact: { san: 5, health: -2 } },
        { id: 'B', text: '看老电影', title: '看老电影', description: '手机看《教父》片段', quote: '学习一下教父的表情管理，明天还得用。', impact: { san: 3 } },
        { id: 'C', text: '清理车内', title: '清理车内', description: '把座位缝隙里的瓜子皮抠出来', quote: '一屋不扫何以扫天下。这是一种禅修。', impact: { san: 2, health: -1 } },
      ]
    },
    {
      id: 'd6_sleep',
      day: 6,
      dayLabel: '正月初四',
      timeOfDay: 'sleep',
      timeLabel: '睡觉',
      title: '噩梦',
      description: '晚上睡觉一直翻来覆去，睡得很浅，似乎在做梦的样子。',
      image: 'https://i.postimg.cc/BQcrQhRN/6_4.png',
      choices: [
        { id: 'A', text: '梦见周报', title: '梦见周报', description: '梦见假期结束要交5000字心得体会，还没写', quote: '......', impact: { san: -5 } },
        { id: 'B', text: '梦见升职', title: '梦见升职', description: '梦见自己坐在主席台上讲话', quote: '......', impact: { san: 5 } },
      ]
    },
    // Day 7
    {
      id: 'd7_morning',
      day: 7,
      dayLabel: '正月初五',
      timeOfDay: 'morning',
      timeLabel: '早上',
      title: '迎财神',
      description: '今天是初五，破五迎财神，外边鞭炮震天响。',
      image: 'https://i.postimg.cc/Jzr9yNWx/7_1.png',
      choices: [
        { id: 'A', text: '双标现场', title: '双标现场', description: '嘴上说“心诚则灵”，身体却跪得比谁都标准', quote: '财神爷，我不贪，只要能还完房贷就行。这也是为了更好地服务人民。', impact: { luck: 10, face: -2 } },
        { id: 'B', text: '唯物主义', title: '唯物主义', description: '坚决不拜，站在旁边背手看', quote: '那是封建迷信，我是坚定的唯物主义战士。', impact: { face: 5, luck: -5 } },
        { id: 'C', text: '电子财神', title: '电子财神', description: '偷偷转发朋友圈锦鲤图片，设置“仅自己可见”', quote: '赛博求财，既隐蔽又现代。', impact: { luck: 2, san: 2 } },
      ]
    },
    {
      id: 'd7_afternoon',
      day: 7,
      dayLabel: '正月初五',
      timeOfDay: 'afternoon',
      timeLabel: '下午',
      title: '吃饺子（赌徒心态）',
      description: '今天吃饺子，包了硬币的饺子，谁吃到谁今年发财。',
      image: 'https://i.postimg.cc/43nqPXyp/7_2.png',
      choices: [
        { id: 'A', text: '狂吃', title: '狂吃', description: '为了吃到包硬币的那个饺子，连吃40个', quote: '只要我不停嘴，好运就跑不掉。拼了！', impact: { weight: 3, health: -2, luck: 5 } },
        { id: 'B', text: '细嚼慢咽', title: '细嚼慢咽', description: '每一个都用筷子戳破看看', quote: '这叫‘事前审计’，规避风险。', impact: { face: -2, luck: 2 } },
        { id: 'C', text: '让贤', title: '让贤', description: '吃到硬币偷偷吐出来，塞给孩子', quote: '把希望留给下一代，我这种境界，财神爷都得感动。', impact: { face: 5, san: 5 } },
      ]
    },
    {
      id: 'd7_evening',
      day: 7,
      dayLabel: '正月初五',
      timeOfDay: 'evening',
      timeLabel: '晚上',
      title: '收拾残局',
      description: '假期余额严重不足。看着满地瓜子皮，感到一阵虚无。',
      image: 'https://i.postimg.cc/PqN9ydJW/7_3.png',
      choices: [
        { id: 'A', text: '提前焦虑', title: '提前焦虑', description: '开始查返程路线，看哪里不堵', quote: '所有不以早走为目的的返程都是耍流氓。', impact: { san: -2 } },
        { id: 'B', text: '清理库存', title: '清理库存', description: '把剩下的烟酒分给邻居，做最后的人情', quote: '都要走了，再刷一波好感度。', impact: { face: 5, money: 0 } },
      ]
    },
    {
      id: 'd7_sleep',
      day: 7,
      dayLabel: '正月初五',
      timeOfDay: 'sleep',
      timeLabel: '睡觉',
      title: '整理',
      description: '睡觉前，行李整理好，你坐在床上没睡着手上拿着手机。',
      image: 'https://i.postimg.cc/zf367qvS/7_4.png',
      choices: [
        { id: 'A', text: '整理名片', title: '整理名片', description: '整理这几天加的微信备注（xx局长侄子，xx老板）', quote: '这些都是资源，得维护好。', impact: { luck: 2 } },
        { id: 'B', text: '发呆', title: '发呆', description: '盯着天花板', quote: '好累，什么时候退休？', impact: { san: -2 } },
      ]
    },
    // Day 8
    {
      id: 'd8_morning',
      day: 8,
      dayLabel: '正月初六',
      timeOfDay: 'morning',
      timeLabel: '早上',
      title: '后备箱俄罗斯方块',
      description: '妈妈要把家里所有的土特产塞进你的后备箱，包括一只活鸡和半扇猪肉。',
      image: 'https://i.postimg.cc/Gp9VKbtz/8_1.png',
      choices: [
        { id: 'A', text: '全盘接收', title: '全盘接收', description: '看着活鸡在车后座拉屎，你忍了', quote: '这都是妈的心意…没事，回去我精洗内饰。', impact: { face: -5, san: 5, money: -200 } },
        { id: 'B', text: '据理力争', title: '据理力争', description: '“妈，城里不让养鸡！我们要讲文明！要有素质！”', quote: '试图用行政命令阻止母爱，通常是无效的。', impact: { san: -5, health: 2 } },
        { id: 'C', text: '只要精品', title: '只要精品', description: '只带看起来高档的山货，方便回去送礼', quote: '土特产也要搞‘供给侧改革’，去粗取精。', impact: { luck: 5, face: 2 } },
      ]
    },
    {
      id: 'd8_afternoon',
      day: 8,
      dayLabel: '正月初六',
      timeOfDay: 'afternoon',
      timeLabel: '下午',
      title: '高速长征（心态切换）',
      description: '下午回程路上，再次堵死在高速上。',
      image: 'https://i.postimg.cc/MG44rgfD/8_2.png',
      choices: [
        { id: 'A', text: '听书学习', title: '听书学习', description: '播放《曾国藩家书》或《大明王朝1566》解说', quote: '即使在堵车，我也在进化。我要找回工作的状态。', impact: { san: 5, face: 2 } },
        { id: 'B', text: '狂躁路怒', title: '狂躁路怒', description: '疯狂按喇叭，素质三连', quote: '这群人会不会开车！耽误我明天的早会！', impact: { san: -5, health: -2 } },
        { id: 'C', text: '服务区放纵', title: '服务区放纵', description: '吃一顿垃圾食品', quote: '马上要回去吃轻食了，最后放纵一次。', impact: { weight: 2, money: -50 } },
      ]
    },
    {
      id: 'd8_evening',
      day: 8,
      dayLabel: '正月初六',
      timeOfDay: 'evening',
      timeLabel: '晚上',
      title: '洗车仪式',
      description: '晚上，到了城里，还不算很晚，你想着要不要洗下车。',
      image: 'https://i.postimg.cc/Ls770GZd/8_3.png',
      choices: [
        { id: 'A', text: '洗去尘埃', title: '洗去尘埃', description: '看着泥土被冲掉，你感觉自己又变回了那个“郝处”', quote: '再见了二狗，你好郝科长。车必须比脸干净。', impact: { face: 5, money: -100 } },
        { id: 'B', text: '直接回家', title: '直接回家', description: '太累了，明天再洗', quote: '这一车泥也是战绩，说明我也是‘千里走单骑’。', impact: { face: -2, health: 2 } },
      ]
    },
    {
      id: 'd8_sleep',
      day: 8,
      dayLabel: '正月初六',
      timeOfDay: 'sleep',
      timeLabel: '睡觉',
      title: '调闹钟',
      description: '躺在城里家的大床上，你琢磨着些事情。',
      image: 'https://i.postimg.cc/0N33HhJx/8_4.png',
      choices: [
        { id: 'A', text: '甚至有点期待', title: '甚至有点期待', description: '“终于可以上班休息了。家里比单位累多了。”', quote: '只有工作能给我安全感。', impact: { san: 5 } },
        { id: 'B', text: '极度抗拒', title: '极度抗拒', description: '“不想上班，想辞职。”', quote: '这是每年的保留节目。', impact: { san: -5 } },
      ]
    },
    // Day 9
    {
      id: 'd9_morning',
      day: 9,
      dayLabel: '正月初七',
      timeOfDay: 'morning',
      timeLabel: '早上',
      title: '权力的幻肢痛',
      description: '早上8:00，生物钟让你准时醒来。虽然不用去单位，但你觉得必须做点什么来找回掌控感。',
      image: 'https://i.postimg.cc/j579VvzR/9_1.png',
      choices: [
        { id: 'A', text: '微服私访', title: '微服私访', description: '既然大家都还没上班，我偷偷去趟单位，“检查一下安全隐患”，顺便给领导办公室的绿植浇点水', quote: '这不叫加班，这叫‘主人翁意识’。万一被值班领导撞见，那就赢麻了。', impact: { face: 5, luck: 5 } },
        { id: 'B', text: '城市晨跑', title: '城市晨跑', description: '换上全套专业装备，在公园里跑个5公里，一定要发带定位的朋友圈', quote: '用城市的柏油路净化脚底的泥土气。看，我又是一个自律的都市精英。', impact: { health: 3, face: 5 } },
        { id: 'C', text: '甚至不赖床', title: '甚至不赖床', description: '在家哪怕没事干，也要穿戴整齐坐在书房喝茶', quote: '懈怠是堕落的开始。我要保持战斗状态，哪怕敌人只是空气。', impact: { san: 5, health: -1 } },
      ]
    },
    {
      id: 'd9_afternoon',
      day: 9,
      dayLabel: '正月初七',
      timeOfDay: 'afternoon',
      timeLabel: '下午',
      title: '形象重塑工程',
      description: '镜子里的自己，经过8天的熬夜和胡吃海塞，显得有点浮肿和油腻。必须大修。',
      image: 'https://i.postimg.cc/vBVjRXWW/9_2.png',
      choices: [
        { id: 'A', text: '头面工程', title: '头面工程', description: '找那个最贵的“Tony老师”，染黑两鬓的白发，修剪一个干练的“厅局风”发型', quote: '发型不乱，江山才稳。要把这几天的沧桑感剪掉。', impact: { face: 10, money: -500 } },
        { id: 'B', text: '汗蒸排毒', title: '汗蒸排毒', description: '去洗浴中心汗蒸，狠狠搓个澡', quote: '把老家的烟火味、酒味、穷酸气，统统搓掉。我要清清白白地回办公室。', impact: { health: 5, san: 2 } },
        { id: 'C', text: '战袍养护', title: '战袍养护', description: '把明天要穿的行政夹克、衬衫亲自熨烫一遍，不能有一丝褶皱', quote: '褶皱代表着失控。平整代表着秩序。我爱秩序。', impact: { san: 5, face: 2 } },
      ]
    },
    {
      id: 'd9_evening',
      day: 9,
      dayLabel: '正月初七',
      timeOfDay: 'evening',
      timeLabel: '晚上',
      title: '战略预演',
      description: '假期最后的晚餐。你拿出笔记本，开始推演明天上班的剧本。',
      image: 'https://i.postimg.cc/zBgMmpnC/9_3.png',
      choices: [
        { id: 'A', text: '情报整理', title: '情报整理', description: '翻看朋友圈，给领导这几天的旅游照片点赞（要在最后时刻点，显得压轴）', quote: '点赞是门学问。太早显得闲，太晚显得慢。现在刚刚好。', impact: { luck: 5, san: -2 } },
        { id: 'B', text: '清淡饮食', title: '清淡饮食', description: '煮一碗白粥，配点咸菜', quote: '绚烂至极归于平淡。肠胃需要休息，欲望也是。', impact: { health: 3, weight: -1 } },
        { id: 'C', text: '特产分配', title: '特产分配', description: '将带回来的土特产分成三六九等，贴上便利贴，规划明天分给谁', quote: '核桃给科员，笨鸡蛋给主任，野山参…还是留着自己补补吧。', impact: { san: 2, face: 5 } },
      ]
    },
    {
      id: 'd9_sleep',
      day: 9,
      dayLabel: '正月初七',
      timeOfDay: 'sleep',
      timeLabel: '睡觉',
      title: '黎明前的焦虑',
      description: '闹钟定在了7:30。你坐在床上眯上眼思考着，假期真的结束了。',
      image: 'https://i.postimg.cc/hvRYKxrJ/9_4.png',
      choices: [
        { id: 'A', text: '脑内演练', title: '脑内演练', description: '在脑子里把明天见到领导的第一句话、第一个表情演练了十遍', quote: '不能笑得太开心（显得没心没肺），也不能太沉重（显得不想上班）。要在那一瞬间拿捏住‘稳重中带着期待’的分寸。', impact: { san: -5, luck: 2 } },
        { id: 'B', text: '贤者时间', title: '贤者时间', description: '看着窗外的城市灯火，突然产生了一秒钟的厌世念头，然后迅速掐灭', quote: '这就是生活。为了这点碎银几两，为了这点面子…睡吧，郝科长，明天还要战斗。', impact: { san: 2, health: 2 } },
      ]
    },
  ],
  'hua_beibei': [
    // Day 1
    {
      id: 'd1_morning',
      day: 1,
      dayLabel: '腊月二十八',
      timeOfDay: 'morning',
      timeLabel: '早上',
      title: '行李箱里的秘密',
      description: '10 平米的出租屋里，床上铺满了衣服。必须精准筛选带回家的“战袍”，既要看着贵，又不能真贵。',
      image: 'https://i.postimg.cc/Twgp7X5M/0000.jpg',
      choices: [
        {
          id: 'A',
          text: '重装上阵',
          title: '重装上阵',
          description: '塞进那个拼单买的 Rimowa（高仿）箱子，还要带上全套化妆品和卷发棒。',
          quote: '这是回村战斗的武器库。输了什么都不能输了妆容。',
          impact: { face: 10, health: -2, money: -50 }
        },
        {
          id: 'B',
          text: '极简名媛',
          title: '极简名媛',
          description: '只带两个“名牌”纸袋（里面装杂物），假装东西都寄回来了。',
          quote: '这叫松弛感。真正有钱人谁大包小包自己扛啊？那是代购。',
          impact: { san: 5, face: 5 }
        },
        {
          id: 'C',
          text: '甚至不带',
          title: '甚至不带',
          description: '穿身上这一套回去，宣称“在那边买新的”。',
          quote: '断舍离，懂吗？但这衣服得穿 9 天，有点味儿。',
          impact: { money: 0, face: -5 }
        }
      ]
    },
    {
      id: 'd1_afternoon',
      day: 1,
      dayLabel: '腊月二十八',
      timeOfDay: 'afternoon',
      timeLabel: '下午',
      title: '拼车的博弈',
      description: '坐不起高铁商务座，更没车。找了辆跨城顺风车，还要跟司机斗智斗勇，不能让村里人看出是拼的。',
      image: 'https://i.postimg.cc/Twgp7X5M/0000.jpg',
      choices: [
        {
          id: 'A',
          text: '伪装专车',
          title: '伪装专车',
          description: '上车前给司机买包烟：“师傅，进村能不能把拼车单关了？假装是我包的车。”',
          quote: '要是让二婶看见我跟人拼车，我也别混了。Vivian 必须有专职司机。',
          impact: { money: -50, face: 10 }
        },
        {
          id: 'B',
          text: '精致穷游',
          title: '精致穷游',
          description: '就在村口下，拖着箱子走回去，谎称“司机不认识路”。',
          quote: '省下 50 块，能买两杯喜茶呢。走两步就当 Citywalk 了。',
          impact: { health: -3, money: 0 }
        },
        {
          id: 'C',
          text: '甚至蹭车',
          title: '甚至蹭车',
          description: '发朋友圈求顺风车，蹭隔壁村二狗的车。',
          quote: '能省则省，反正二狗暗恋我。',
          impact: { luck: -2, money: 100 }
        }
      ]
    },
    {
      id: 'd1_evening',
      day: 1,
      dayLabel: '腊月二十八',
      timeOfDay: 'evening',
      timeLabel: '晚上',
      title: 'Vivian 上线',
      description: '进家门那一刻，你不再是“翠花”，你是从静安区回来的 Vivian。全家都在看你。',
      image: 'https://i.postimg.cc/Twgp7X5M/0000.jpg',
      choices: [
        {
          id: 'A',
          text: '先声夺人',
          title: '先声夺人',
          description: '进门先吐槽：“哎呀，这老家太冷了，湿冷！还得是上海的中央空调舒服。”',
          quote: '建立一种‘我不适应这里’的娇贵感，把身价抬上去。',
          impact: { face: 5, luck: -5 }
        },
        {
          id: 'B',
          text: '甚至不脱鞋',
          title: '甚至不脱鞋',
          description: '穿着高跟鞋进屋，怕踩脏了鞋底。',
          quote: '这鞋底贴了膜的，家里地太脏了。',
          impact: { face: -2, san: 2 }
        },
        {
          id: 'C',
          text: '甚至不吃饭',
          title: '甚至不吃饭',
          description: '“我在路上吃过轻食了，晚上不吃碳水。”',
          quote: '保持身材是名媛的自我修养。',
          impact: { weight: -1, health: -2 }
        }
      ]
    },
    {
      id: 'd1_sleep',
      day: 1,
      dayLabel: '腊月二十八',
      timeOfDay: 'sleep',
      timeLabel: '睡觉',
      title: '清理内存',
      description: '躺在旧床单上，信号只有 3G。',
      image: 'https://i.postimg.cc/Twgp7X5M/0000.jpg',
      choices: [
        {
          id: 'A',
          text: 'P图预备',
          title: 'P图预备',
          description: '把手机里在上海拍的存货（下午茶、展会）整理好，作为这几天的朋友圈素材。',
          quote: '我不生产生活，我只是素材的搬运工。库存够发 7 天了。',
          impact: { san: 5, luck: 2 }
        },
        {
          id: 'B',
          text: '甚至不睡',
          title: '甚至不睡',
          description: '熬夜刷小红书，看“过年回家穿搭攻略”。',
          quote: '临阵磨枪，不快也光。必须艳压群芳。',
          impact: { health: -2, face: 2 }
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
      title: '指甲保卫战',
      description: '刚起床，妈妈喊你帮忙剥蒜洗菜。看着手上 300 块做的建构美甲，你陷入沉思。',
      image: 'https://i.postimg.cc/Twgp7X5M/0000.jpg',
      choices: [
        {
          id: 'A',
          text: '智取',
          title: '智取',
          description: '伸出贴满钻的手：“妈，这指甲 500 多做的，沾水就废了！这是艺术品！”',
          quote: '用价格吓退劳动。只要更贵，就能更懒。',
          impact: { money: 0, luck: -5, health: 2 }
        },
        {
          id: 'B',
          text: '摆拍',
          title: '摆拍',
          description: '拿着抹布摆个 Pose 拍张照发朋友圈：“除夕也要帮妈妈干活~ #孝顺”，然后放下抹布。',
          quote: '重点是人设，不是干活。照片拍了等于活干了。',
          impact: { face: 5, san: 2 }
        },
        {
          id: 'C',
          text: '甚至干活',
          title: '甚至干活',
          description: '戴上手套真的去干活。',
          quote: '算了，还是心疼我妈。Vivian 偶尔也要下凡。',
          impact: { face: -2, san: 5 }
        }
      ]
    },
    {
      id: 'd2_afternoon',
      day: 2,
      dayLabel: '腊月二十九',
      timeOfDay: 'afternoon',
      timeLabel: '下午',
      title: '全妆焊死',
      description: '下午要贴对联、祭祖。虽然不出村，但妆容不能输。',
      image: 'https://i.postimg.cc/Twgp7X5M/0000.jpg',
      choices: [
        {
          id: 'A',
          text: '伪素颜',
          title: '伪素颜',
          description: '花 2 小时化一个“看起来没化其实用了 8 种遮瑕”的心机妆。',
          quote: '回村最高礼仪：天生丽质。不能让邻居看出粉底痕迹。',
          impact: { face: 10, san: -2 }
        },
        {
          id: 'B',
          text: '甚至戴墨镜',
          title: '甚至戴墨镜',
          description: '谎称感冒了，戴个口罩墨镜。',
          quote: '神秘巨星回村既视感。主要是懒得化妆。',
          impact: { san: 5, face: -2 }
        },
        {
          id: 'C',
          text: '甚至不洗脸',
          title: '甚至不洗脸',
          description: '反正没人看，油头垢面。',
          quote: '在这个家里，我就是个废人。',
          impact: { face: -10, health: 2 }
        }
      ]
    },
    {
      id: 'd2_evening',
      day: 2,
      dayLabel: '腊月二十九',
      timeOfDay: 'evening',
      timeLabel: '晚上',
      title: '年夜饭的朋友圈',
      description: '一桌子大鱼大肉。全家人准备动筷子。',
      image: 'https://i.postimg.cc/Twgp7X5M/0000.jpg',
      choices: [
        {
          id: 'A',
          text: '消毒仪式',
          title: '消毒仪式',
          description: '“等一下！我先拍个照！”把饮料倒进红酒杯，摆拍九宫格。',
          quote: '文案必须带定位，虽然模糊，但要暗示‘岁月静好’。手机先吃。',
          impact: { face: 10, health: -2 }
        },
        {
          id: 'B',
          text: '暴风吸入',
          title: '暴风吸入',
          description: '不装了，这红烧肉太香了。',
          quote: '减肥是明年的事。碳水万岁！',
          impact: { weight: 2, san: 5 }
        },
        {
          id: 'C',
          text: '甚至不吃',
          title: '甚至不吃',
          description: '坐在桌边玩手机，只吃两口青菜。',
          quote: '我要维持我‘胃口小’的人设。',
          impact: { weight: -1, san: -5 }
        }
      ]
    },
    {
      id: 'd2_sleep',
      day: 2,
      dayLabel: '腊月二十九',
      timeOfDay: 'sleep',
      timeLabel: '睡觉',
      title: '红包恐慌',
      description: '群里开始发红包，还要给小侄子压岁钱。余额告急。',
      image: 'https://i.postimg.cc/Twgp7X5M/0000.jpg',
      choices: [
        {
          id: 'A',
          text: '信号不好',
          title: '信号不好',
          description: '“哎呀这农村网怎么这么差，红包发不出去！一直转圈！”',
          quote: '只要我演技够真，连 5G 信号都得配合我。',
          impact: { money: 0, face: -5 }
        },
        {
          id: 'B',
          text: '花呗套现',
          title: '花呗套现',
          description: '硬着头皮发，心在滴血。',
          quote: '为了面子，哪怕下个月吃土。这叫‘人情投资’。',
          impact: { money: -500, face: 5 }
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
      title: '美丽冻人',
      description: '气温零下 5 度。今天要出门拜年，面对全村的审视。',
      image: 'https://i.postimg.cc/Twgp7X5M/0000.jpg',
      choices: [
        {
          id: 'A',
          text: '光腿神器',
          title: '光腿神器',
          description: '穿上看起来像没穿但其实加绒的丝袜，配短裙大衣。',
          quote: '时尚是没有温度的。Vivian 绝不穿棉裤。我要做村里最靓的崽。',
          impact: { face: 10, health: -5 }
        },
        {
          id: 'B',
          text: '军大衣妥协',
          title: '军大衣妥协',
          description: '裹上那件奶奶的旧棉袄。',
          quote: '这叫‘复古潮’，权志龙同款懂不懂？保命要紧。',
          impact: { health: 5, luck: 2 }
        },
        {
          id: 'C',
          text: '甚至不出门',
          title: '甚至不出门',
          description: '装病躲在被窝里。',
          quote: '本公举凤体抱恙。',
          impact: { san: 5, face: -5 }
        }
      ]
    },
    {
      id: 'd3_afternoon',
      day: 3,
      dayLabel: '正月初一',
      timeOfDay: 'afternoon',
      timeLabel: '下午',
      title: '薪资拷问',
      description: '七大姑八大姨围攻：“贝贝在上海一个月挣多少啊？买房了吗？”',
      image: 'https://i.postimg.cc/Twgp7X5M/0000.jpg',
      choices: [
        {
          id: 'A',
          text: '模糊战术',
          title: '模糊战术',
          description: '“也就是个行业平均水平，年包（Annual Package）稍微能看。”',
          quote: '只要拽英文，她们就不敢细问。把月薪说成年薪。',
          impact: { face: 5, san: 5 }
        },
        {
          id: 'B',
          text: '凡尔赛',
          title: '凡尔赛',
          description: '“钱不重要，主要是公司有期权，为了梦想嘛。”',
          quote: '实际上工资卡余额 250。画饼这事儿，我也学会了。',
          impact: { face: 10, luck: -5 }
        },
        {
          id: 'C',
          text: '甚至哭穷',
          title: '甚至哭穷',
          description: '“上海开销大，根本存不下钱。”',
          quote: '说实话能避免借钱，但很丢人。',
          impact: { face: -10, money: 0 }
        }
      ]
    },
    {
      id: 'd3_evening',
      day: 3,
      dayLabel: '正月初一',
      timeOfDay: 'evening',
      timeLabel: '晚上',
      title: '躲避相亲',
      description: '听说媒人要上门，介绍隔壁村养猪大户的儿子。',
      image: 'https://i.postimg.cc/Twgp7X5M/0000.jpg',
      choices: [
        {
          id: 'A',
          text: '职业借口',
          title: '职业借口',
          description: '“我老板突然 call 我开会，这几天都要加班。没空见人。”',
          quote: '都市丽人是没有假期的。我很忙，以此提升身价。',
          impact: { san: 5, luck: 2 }
        },
        {
          id: 'B',
          text: '甚至去见',
          title: '甚至去见',
          description: '听说对方开宝马，勉强洗个头。',
          quote: '万一瞎猫碰上死耗子呢？去蹭顿饭也好。',
          impact: { face: -2, luck: 5 }
        },
        {
          id: 'C',
          text: '甚至骂人',
          title: '甚至骂人',
          description: '“养猪的？你看不起谁呢？”',
          quote: '我的目标是陆家嘴金融男。',
          impact: { face: 5, luck: -5 }
        }
      ]
    },
    {
      id: 'd3_sleep',
      day: 3,
      dayLabel: '正月初一',
      timeOfDay: 'sleep',
      timeLabel: '睡觉',
      title: '深夜 emo',
      description: '刷到朋友圈里同事去日本旅游的照片。',
      image: 'https://i.postimg.cc/Twgp7X5M/0000.jpg',
      choices: [
        {
          id: 'A',
          text: '网抑云',
          title: '网抑云',
          description: '听着 emo 歌曲，看着负债账单流泪。',
          quote: '生而为人，我很抱歉。为什么我这么穷还要装。',
          impact: { san: -5 }
        },
        {
          id: 'B',
          text: '精神胜利',
          title: '精神胜利',
          description: '给同事点赞，并评论“好棒，我也快去了（下次）”。',
          quote: '输人不能输阵。',
          impact: { san: 2 }
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
      title: '被动营业',
      description: '去二姨家走亲戚。手里不能空着。',
      image: 'https://i.postimg.cc/Twgp7X5M/0000.jpg',
      choices: [
        {
          id: 'A',
          text: '精致礼盒',
          title: '精致礼盒',
          description: '提着网上买的“港式点心”（其实是河南产的，包装全是繁体字）。',
          quote: '只要包装看着贵，就是上海特产。主打一个信息差。',
          impact: { money: -100, face: 5 }
        },
        {
          id: 'B',
          text: '甚至空手',
          title: '甚至空手',
          description: '“哎呀走得急，东西忘在上海了。”',
          quote: '只要脸皮厚，省下一顿肉。',
          impact: { face: -10, money: 0 }
        },
        {
          id: 'C',
          text: '甚至不去',
          title: '甚至不去',
          description: '谎称生理期。',
          quote: '多一事不如少一事。',
          impact: { san: 5, luck: -2 }
        }
      ]
    },
    {
      id: 'd4_afternoon',
      day: 4,
      dayLabel: '正月初二',
      timeOfDay: 'afternoon',
      timeLabel: '下午',
      title: '代购陷阱',
      description: '表妹拿着手机凑过来：“姐，听说上海买 LV 便宜，你回去了帮我带一个呗？”',
      image: 'https://i.postimg.cc/Twgp7X5M/0000.jpg',
      choices: [
        {
          id: 'A',
          text: '断货借口',
          title: '断货借口',
          description: '“哎呀那个款我也看了，全上海都断货，得配货（买垃圾）才能买。”',
          quote: '把购买门槛说得高不可攀，让她知难而退。姐都没钱买，还给你带？',
          impact: { san: 5, luck: 2 }
        },
        {
          id: 'B',
          text: '答应下来',
          title: '答应下来',
          description: '“行啊，我有那边的 SA（柜姐）微信，到时候帮你问。”',
          quote: '先答应着，到时候就说没买到，或者去某田买个高仿给她。',
          impact: { face: 5, san: -5 }
        },
        {
          id: 'C',
          text: '甚至教育',
          title: '甚至教育',
          description: '“小孩子家家的，不要攀比，要买A货姐有链接。”',
          quote: '试图把她拉入我的消费降级阵营。',
          impact: { face: -2, money: 0 }
        }
      ]
    },
    {
      id: 'd4_evening',
      day: 4,
      dayLabel: '正月初二',
      timeOfDay: 'evening',
      timeLabel: '晚上',
      title: '蹭车风波',
      description: '表哥开着新买的比亚迪送你回家。',
      image: 'https://i.postimg.cc/Twgp7X5M/0000.jpg',
      choices: [
        {
          id: 'A',
          text: '点评车辆',
          title: '点评车辆',
          description: '“这车还可以，就是跟我的特斯拉比，推背感差了点。”',
          quote: '虽然我连驾照都没有，但这不妨碍我懂车。特斯拉是名媛标配话题。',
          impact: { face: 5, luck: -2 }
        },
        {
          id: 'B',
          text: '甚至睡觉',
          title: '甚至睡觉',
          description: '上车就睡，假装很累。',
          quote: '避免尴尬聊天的最好方式。',
          impact: { san: 2, health: 1 }
        },
        {
          id: 'C',
          text: '甚至不坐',
          title: '甚至不坐',
          description: '嫌车里有烟味，非要走回去。',
          quote: '矫情到底。',
          impact: { health: -2, face: 2 }
        }
      ]
    },
    {
      id: 'd4_sleep',
      day: 4,
      dayLabel: '正月初二',
      timeOfDay: 'sleep',
      timeLabel: '睡觉',
      title: '修图工程',
      description: '今天在二姨家拍的照片背景全是烂砖头。',
      image: 'https://i.postimg.cc/Twgp7X5M/0000.jpg',
      choices: [
        {
          id: 'A',
          text: 'P掉背景',
          title: 'P掉背景',
          description: '用消除笔把背景P掉，换成ins风滤镜，或者只发大头照。',
          quote: '照片里不能出现任何土味元素。这是底线。',
          impact: { san: -2, face: 2 }
        },
        {
          id: 'B',
          text: '甚至不发',
          title: '甚至不发',
          description: '今天素材质量太差，断更一天。',
          quote: '宁缺毋滥。',
          impact: { san: 2 }
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
      title: '装备全开',
      description: '听说当年的班花嫁了个土豪，前桌考上了公务员。必须祭出压箱底的宝贝。',
      image: 'https://i.postimg.cc/Twgp7X5M/0000.jpg',
      choices: [
        {
          id: 'A',
          text: '全副武装',
          title: '全副武装',
          description: '拿出“广州皮具城”买的高仿 GUCCI 和“拼夕夕”买的赫本风大衣，喷上分装大牌香水。',
          quote: '气味是女人的第二张名片。只要我不尴尬，这包就是真的。',
          impact: { face: 10, money: 0 }
        },
        {
          id: 'B',
          text: '甚至借衣服',
          title: '甚至借衣服',
          description: '找表姐借了件真貂。',
          quote: '虽然有点老气，但贵气逼人。',
          impact: { face: 5, health: -2 }
        },
        {
          id: 'C',
          text: '甚至迟到',
          title: '甚至迟到',
          description: '故意晚到半小时。',
          quote: '主角总是最后登场。',
          impact: { face: 2, luck: -2 }
        }
      ]
    },
    {
      id: 'd5_afternoon',
      day: 5,
      dayLabel: '正月初三',
      timeOfDay: 'afternoon',
      timeLabel: '下午',
      title: 'AA 制危机',
      description: '饭吃得差不多了，班长提议 AA，一人 300。',
      image: 'https://i.postimg.cc/Twgp7X5M/0000.jpg',
      choices: [
        {
          id: 'A',
          text: '抢单假动作',
          title: '抢单假动作',
          description: '慢吞吞掏手机：“哎呀我微信限额了，谁先垫一下我转支付宝？”',
          quote: '拖延战术。希望能拖到那个土豪同学主动买单。',
          impact: { money: -300, san: -2 }
        },
        {
          id: 'B',
          text: '淡定转账',
          title: '淡定转账',
          description: '毫不犹豫转账，并不经意露出手机壁纸（陆家嘴夜景）。',
          quote: '姐不差钱。这点钱也就是我两杯下午茶。',
          impact: { money: -300, face: 5 }
        },
        {
          id: 'C',
          text: '甚至逃单',
          title: '甚至逃单',
          description: '假装去厕所，很久才回来。',
          quote: '能躲就躲，面子值几个钱？',
          impact: { face: -20, money: 300 }
        }
      ]
    },
    {
      id: 'd5_evening',
      day: 5,
      dayLabel: '正月初三',
      timeOfDay: 'evening',
      timeLabel: '晚上',
      title: 'KTV 拼盘',
      description: '大家都喝嗨了。',
      image: 'https://i.postimg.cc/Twgp7X5M/0000.jpg',
      choices: [
        {
          id: 'A',
          text: '只会英文歌',
          title: '只会英文歌',
          description: '点一首 Taylor Swift，不管发音准不准，范儿要正。',
          quote: '我在外企工作（其实是外卖平台客服），习惯了。Chinese song? No feeling.',
          impact: { face: 5, luck: -2 }
        },
        {
          id: 'B',
          text: '甚至不唱',
          title: '甚至不唱',
          description: '坐在角落玩手机，回工作消息（装的）。',
          quote: '我很忙，你们玩。',
          impact: { san: 2, face: 2 }
        },
        {
          id: 'C',
          text: '甚至拼酒',
          title: '甚至拼酒',
          description: '跟男同学拼酒。',
          quote: '老娘在上海夜店也不是白混的。',
          impact: { health: -5, face: 5 }
        }
      ]
    },
    {
      id: 'd5_sleep',
      day: 5,
      dayLabel: '正月初三',
      timeOfDay: 'sleep',
      timeLabel: '睡觉',
      title: '卸妆后的空虚',
      description: '回到家，卸掉假睫毛，看着镜子里卡粉的脸。',
      image: 'https://i.postimg.cc/Twgp7X5M/0000.jpg',
      choices: [
        {
          id: 'A',
          text: '深度清洁',
          title: '深度清洁',
          description: '敷最贵的面膜（之前囤的小样）。',
          quote: '明天又是新的一天，脸不能垮。',
          impact: { san: 2, health: 2 }
        },
        {
          id: 'B',
          text: '甚至哭泣',
          title: '甚至哭泣',
          description: '想到班花开的是保时捷，自己坐的是摩的。',
          quote: '差距太大了。',
          impact: { san: -5 }
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
      title: '咖啡因戒断',
      description: '村里没有星巴克，甚至没有瑞幸。头疼欲裂。',
      image: 'https://i.postimg.cc/Twgp7X5M/0000.jpg',
      choices: [
        {
          id: 'A',
          text: '自制特调',
          title: '自制特调',
          description: '用速溶咖啡兑旺仔牛奶，还要加冰块。',
          quote: '这叫‘Dirty’，只要杯子好看，拍照就能用。没有条件创造条件。',
          impact: { san: 2, weight: 1 }
        },
        {
          id: 'B',
          text: '强行忍耐',
          title: '强行忍耐',
          description: '喝白开水。',
          quote: '我快不行了，我想念 Manner，我想念冰美式。',
          impact: { san: -5, health: 2 }
        },
        {
          id: 'C',
          text: '甚至喝茶',
          title: '甚至喝茶',
          description: '偷喝爸爸的茶叶。',
          quote: '东方树叶，也是一种 Lifestyle。',
          impact: { health: 1, money: 0 }
        }
      ]
    },
    {
      id: 'd6_afternoon',
      day: 6,
      dayLabel: '正月初四',
      timeOfDay: 'afternoon',
      timeLabel: '下午',
      title: '价值观冲突',
      description: '媒人又来了，这次是个“厂二代”，问你结婚后能不能不去上海打工了。',
      image: 'https://i.postimg.cc/Twgp7X5M/0000.jpg',
      choices: [
        {
          id: 'A',
          text: '怒怼',
          title: '怒怼',
          description: '“我那是事业！不是打工！我在上海有自己的生活！下头男。谁稀罕你家的三层楼。”',
          quote: 'San值 -5（气死我了），面子 +5（当场怼回去）。',
          impact: { san: -5, face: 5 }
        },
        {
          id: 'B',
          text: '敷衍',
          title: '敷衍',
          description: '“可以考虑啊，但我要求很高的。”',
          quote: '先吊着，万一他在上海买房呢？',
          impact: { luck: 2, san: -2 }
        },
        {
          id: 'C',
          text: '甚至动摇',
          title: '甚至动摇',
          description: '想到上海的房租，突然觉得当厂长夫人也不错。',
          quote: '或许这就叫上岸？',
          impact: { san: 5, face: -5 }
        }
      ]
    },
    {
      id: 'd6_evening',
      day: 6,
      dayLabel: '正月初四',
      timeOfDay: 'evening',
      timeLabel: '晚上',
      title: '独处',
      description: '躲在被窝里刷 Boss 直聘。',
      image: 'https://i.postimg.cc/Twgp7X5M/0000.jpg',
      choices: [
        {
          id: 'A',
          text: '焦虑投递',
          title: '焦虑投递',
          description: '看到上海房租又要涨了，疯狂投简历。',
          quote: '必须涨薪，不然回不去了。',
          impact: { san: -5 }
        },
        {
          id: 'B',
          text: '甚至追剧',
          title: '甚至追剧',
          description: '看《繁花》，假装自己活在那个上海。',
          quote: '逃避可耻但有用。',
          impact: { san: 2 }
        },
        {
          id: 'C',
          text: '甚至借钱',
          title: '甚至借钱',
          description: '找闺蜜借 2000 块周转。',
          quote: '江湖救急。',
          impact: { money: 2000, face: -5 }
        }
      ]
    },
    {
      id: 'd6_sleep',
      day: 6,
      dayLabel: '正月初四',
      timeOfDay: 'sleep',
      timeLabel: '睡觉',
      title: '梦回',
      description: '睡得很不踏实。',
      image: 'https://i.postimg.cc/Twgp7X5M/0000.jpg',
      choices: [
        {
          id: 'A',
          text: '梦见暴富',
          title: '梦见暴富',
          description: '梦见彩票中了 500 万，把购物车清空了。',
          quote: '醒来会更失落，但在梦里很爽。',
          impact: { san: 5 }
        },
        {
          id: 'B',
          text: '梦见迟到',
          title: '梦见迟到',
          description: '梦见全勤奖没了。',
          quote: '社畜的本能。',
          impact: { san: -2 }
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
      title: '接财神',
      description: '别的神可以不信，财神必须跪穿膝盖。',
      image: 'https://i.postimg.cc/Twgp7X5M/0000.jpg',
      choices: [
        {
          id: 'A',
          text: '疯狂转发',
          title: '疯狂转发',
          description: '朋友圈转发 5 张不同画风的财神爷，设置不可见分组（屏蔽同事）。',
          quote: '何以解忧，唯有暴富。信女愿用前男友十年单身换我不还花呗。',
          impact: { luck: 10, san: 5 }
        },
        {
          id: 'B',
          text: '甚至去庙里',
          title: '甚至去庙里',
          description: '跟着奶奶去庙里烧高香。',
          quote: '虽然烟熏火燎对皮肤不好，但为了钱我可以忍。',
          impact: { money: -50, luck: 5 }
        },
        {
          id: 'C',
          text: '甚至换壁纸',
          title: '甚至换壁纸',
          description: '手机壁纸换成财神。',
          quote: '时刻提醒自己搞钱。',
          impact: { san: 2 }
        }
      ]
    },
    {
      id: 'd7_afternoon',
      day: 7,
      dayLabel: '正月初五',
      timeOfDay: 'afternoon',
      timeLabel: '下午',
      title: '吃饺子',
      description: '破五吃饺子。',
      image: 'https://i.postimg.cc/Twgp7X5M/0000.jpg',
      choices: [
        {
          id: 'A',
          text: '只吃两个',
          title: '只吃两个',
          description: '为了抗糖抗碳水，只吃两个意思一下。',
          quote: '自律的女人最好命。吃了脸会肿。',
          impact: { weight: -1, health: -2 }
        },
        {
          id: 'B',
          text: '硬币挑战',
          title: '硬币挑战',
          description: '听说吃到硬币能发财，狂吃。',
          quote: '为了钱，我可以牺牲体重。这不是饺子，这是元宝。',
          impact: { weight: 2, luck: 5 }
        },
        {
          id: 'C',
          text: '甚至拍照',
          title: '甚至拍照',
          description: '把饺子摆成一排拍照。',
          quote: '传统节日也要有仪式感。',
          impact: { face: 2 }
        }
      ]
    },
    {
      id: 'd7_evening',
      day: 7,
      dayLabel: '正月初五',
      timeOfDay: 'evening',
      timeLabel: '晚上',
      title: '收拾行李',
      description: '妈妈往箱子里塞馒头和咸菜。',
      image: 'https://i.postimg.cc/Twgp7X5M/0000.jpg',
      choices: [
        {
          id: 'A',
          text: '抗拒土味',
          title: '抗拒土味',
          description: '“妈！上海那边吃轻食！不吃馒头！这太土了！”',
          quote: '这馒头带过去，我 Vivian 的人设往哪搁？要是被室友看见就完蛋了。',
          impact: { san: -2, face: 2 }
        },
        {
          id: 'B',
          text: '含泪接受',
          title: '含泪接受',
          description: '其实心里想的是：下半个月伙食费有着落了。',
          quote: '真香定律。还是馒头顶饱，切片烤一下就是 Toast。',
          impact: { money: 200, weight: 1 }
        },
        {
          id: 'C',
          text: '甚至偷拿',
          title: '甚至偷拿',
          description: '偷偷多塞几包腊肠。',
          quote: '在生存面前，人设不值一提。',
          impact: { money: 100, health: -1 }
        }
      ]
    },
    {
      id: 'd7_sleep',
      day: 7,
      dayLabel: '正月初五',
      timeOfDay: 'sleep',
      timeLabel: '睡觉',
      title: '焦虑预警',
      description: '明天就要走了。',
      image: 'https://i.postimg.cc/Twgp7X5M/0000.jpg',
      choices: [
        {
          id: 'A',
          text: '查账单',
          title: '查账单',
          description: '看了一眼花呗还款日，心跳加速。',
          quote: '该来的总会来。',
          impact: { san: -5 }
        },
        {
          id: 'B',
          text: '甚至不看',
          title: '甚至不看',
          description: '只要我不看，就没欠钱。',
          quote: '鸵鸟心态。',
          impact: { san: 2 }
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
      title: '离别',
      description: '拖着箱子走在村口土路上。',
      image: 'https://i.postimg.cc/Twgp7X5M/0000.jpg',
      choices: [
        {
          id: 'A',
          text: '最后的回眸',
          title: '最后的回眸',
          description: '拍一张乡村风景，调成黑白滤镜：“逃离舒适圈，奔赴山海。”',
          quote: '其实是不想上班。文案要显得有野心，给老板看。',
          impact: { face: 5, san: -2 }
        },
        {
          id: 'B',
          text: '甚至不回头',
          title: '甚至不回头',
          description: '走得飞快，一秒都不想多待。',
          quote: '这破地方，连外卖都没有。',
          impact: { san: 2, health: 2 }
        }
      ]
    },
    {
      id: 'd8_afternoon',
      day: 8,
      dayLabel: '正月初六',
      timeOfDay: 'afternoon',
      timeLabel: '下午',
      title: '返程囧途',
      description: '又是拼车。这次拼了个脚臭的大叔。',
      image: 'https://i.postimg.cc/Twgp7X5M/0000.jpg',
      choices: [
        {
          id: 'A',
          text: '窒息忍耐',
          title: '窒息忍耐',
          description: '戴上降噪耳机，疯狂喷香水。',
          quote: '这就是生活给我的暴击。我要努力赚钱买车！',
          impact: { san: -10, health: -2 }
        },
        {
          id: 'B',
          text: '甚至吐槽',
          title: '甚至吐槽',
          description: '发朋友圈（仅闺蜜可见）吐槽奇葩路人。',
          quote: '无语子，绝绝子。',
          impact: { san: 2 }
        },
        {
          id: 'C',
          text: '甚至睡觉',
          title: '甚至睡觉',
          description: '试图用睡眠逃避现实。',
          quote: '睡着了就闻不到了。',
          impact: { health: 1 }
        }
      ]
    },
    {
      id: 'd8_evening',
      day: 8,
      dayLabel: '正月初六',
      timeOfDay: 'evening',
      timeLabel: '晚上',
      title: '回到出租屋',
      description: '上海，冷冰冰的 10 平米小屋。',
      image: 'https://i.postimg.cc/Twgp7X5M/0000.jpg',
      choices: [
        {
          id: 'A',
          text: '点外卖',
          title: '点外卖',
          description: '点一份 30 块的麻辣烫，还要用红包。',
          quote: '这才是真实的我。花贝贝，欢迎回来。还是麻辣烫好吃。',
          impact: { money: -30, san: 2 }
        },
        {
          id: 'B',
          text: '甚至大扫除',
          title: '甚至大扫除',
          description: '把从家里带的特产塞进冰箱。',
          quote: '把土味藏起来，明天我又是 Vivian。',
          impact: { health: -2, face: 2 }
        },
        {
          id: 'C',
          text: '甚至不吃',
          title: '甚至不吃',
          description: '减肥，省钱。',
          quote: '当仙女是需要代价的。',
          impact: { money: 0, health: -2 }
        }
      ]
    },
    {
      id: 'd8_sleep',
      day: 8,
      dayLabel: '正月初六',
      timeOfDay: 'sleep',
      timeLabel: '睡觉',
      title: '定闹钟',
      description: '闹钟定在 7:30。',
      image: 'https://i.postimg.cc/Twgp7X5M/0000.jpg',
      choices: [
        {
          id: 'A',
          text: '甚至有点安心',
          title: '甚至有点安心',
          description: '“终于不用演戏了。虽然穷，但是自由。”',
          quote: '金窝银窝不如自己的狗窝。',
          impact: { san: 5 }
        },
        {
          id: 'B',
          text: '极度抗拒',
          title: '极度抗拒',
          description: '“不想上班，不想面对老板。”',
          quote: '假期综合症晚期。',
          impact: { san: -5 }
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
      title: '早八地狱',
      description: '挤地铁。妆都快被挤花了。',
      image: 'https://i.postimg.cc/Twgp7X5M/0000.jpg',
      choices: [
        {
          id: 'A',
          text: '全妆出勤',
          title: '全妆出勤',
          description: '哪怕只睡了 5 小时，也要全妆见同事，涂最红的口红。',
          quote: '这是都市丽人的尊严。气色不够，口红来凑。',
          impact: { face: 5, health: -2, san: 2 }
        },
        {
          id: 'B',
          text: '素颜眼镜',
          title: '素颜眼镜',
          description: '“我还没缓过来，今天走智性恋风（其实是懒）。”',
          quote: '只要戴上黑框眼镜，我就是忙碌的 Senior。',
          impact: { san: 2, face: -2 }
        },
        {
          id: 'C',
          text: '甚至迟到',
          title: '甚至迟到',
          description: '全勤奖不要了，多睡 10 分钟。',
          quote: '命比钱重要。',
          impact: { money: -200, health: 1 }
        }
      ]
    },
    {
      id: 'd9_afternoon',
      day: 9,
      dayLabel: '正月初七',
      timeOfDay: 'afternoon',
      timeLabel: '下午',
      title: '开工利是',
      description: '老板发红包。',
      image: 'https://i.postimg.cc/Twgp7X5M/0000.jpg',
      choices: [
        {
          id: 'A',
          text: '立刻拆开',
          title: '立刻拆开',
          description: '看看能不能覆盖昨天的拼车费。',
          quote: '千万不要是彩票，给我现金！……只有 50？打发叫花子呢？',
          impact: { money: 50, san: -2 }
        },
        {
          id: 'B',
          text: '甚至摆拍',
          title: '甚至摆拍',
          description: '把红包封皮拍得很好看发朋友圈。',
          quote: '谢谢老板~ 新年旺旺！（屏蔽老板：抠门）',
          impact: { face: 5, san: 2 }
        },
        {
          id: 'C',
          text: '甚至摸鱼',
          title: '甚至摸鱼',
          description: '拿着红包去楼下买咖啡。',
          quote: '带薪拉屎，带薪喝咖啡。',
          impact: { money: -30, san: 5 }
        }
      ]
    },
    {
      id: 'd9_evening',
      day: 9,
      dayLabel: '正月初七',
      timeOfDay: 'evening',
      timeLabel: '晚上',
      title: '回血时刻',
      description: '坐在便利店吃关东煮。',
      image: 'https://i.postimg.cc/Twgp7X5M/0000.jpg',
      choices: [
        {
          id: 'A',
          text: 'P图发圈',
          title: 'P图发圈',
          description: '发一张工位图：“开工大吉，新的一年继续搞钱！”',
          quote: '配图是精心调整过滤镜的。不管实际上有没有钱，口号要喊得响。',
          impact: { face: 5, san: 2 }
        },
        {
          id: 'B',
          text: '甚至加班',
          title: '甚至加班',
          description: '为了蹭公司的晚饭和打车报销。',
          quote: '这叫薅羊毛，不是卷。',
          impact: { money: 30, health: -2 }
        },
        {
          id: 'C',
          text: '甚至早睡',
          title: '甚至早睡',
          description: '回家倒头就睡。',
          quote: '累了，毁灭吧。',
          impact: { health: 2, san: 2 }
        }
      ]
    },
    {
      id: 'd9_sleep',
      day: 9,
      dayLabel: '正月初七',
      timeOfDay: 'sleep',
      timeLabel: '睡觉',
      title: '黎明前的焦虑',
      description: '关了灯，手机屏幕的光照在脸上。假期彻底结束了。',
      image: 'https://i.postimg.cc/Twgp7X5M/0000.jpg',
      choices: [
        {
          id: 'A',
          text: '直面账单',
          title: '直面账单',
          description: '打开花呗，看着那个鲜红的数字 -32450，制定了一个并不打算执行的存钱计划。',
          quote: '只要我不死，钱总能还得完。下个月少喝两杯咖啡…算了，少喝一杯吧。',
          impact: { san: -5, money: 0 }
        },
        {
          id: 'B',
          text: '仰望星空',
          title: '仰望星空',
          description: '看着窗外陆家嘴方向依稀可见的光，幻想着有一天那个灯火通明的写字楼里有自己的一席之地。',
          quote: '这里是上海，这里有无限可能。花贝贝，别灰心，Vivian 总有一天会成真的。',
          impact: { san: 5, luck: 2 }
        }
      ]
    },
  ]
};

// Map endings to character IDs
export const CHARACTER_ENDINGS: Record<string, Ending[]> = {
  'hao_shitu': [
    {
      id: 'icu',
      title: 'ICU 里的“硬汉”',
      description: '正月初八的晨会，你缺席了。不是因为睡过头，而是因为躺在急诊病房挂点滴。诊断书上写着“劳累过度引发的基础性疾病复发”。朋友圈里大家都在给你点赞祝早日康复，但当你刷到单位群消息时，发现你负责的重点项目已经被移交给了隔壁的小王。你赢了春节的面子，却输了身体的底子。',
      condition: (stats) => stats.health < 30
    },
    {
      id: 'promotion',
      title: '完美的“平步青云”',
      description: '假期结束回到单位，你走进办公室的那一刻，感觉气场都不一样了。领导在走廊里特意停下来，拍了拍你的肩膀说：“小郝，过年期间即使休息也不忘关心单位，不错。”听说即将调整的干部名单里，你的呼声很高。你在老家不仅确立了家族话事人的地位，还把每个人际关系都打点得滴水不漏。虽然很累，虽然存款没剩多少，但你知道，这笔投资，值了。',
      condition: (stats) => stats.face > 140 && stats.luck > 100
    },
    {
      id: 'void',
      title: '无法逃离的“中年虚无”',
      description: '闹钟响了，你像往常一样穿上那件深色夹克，开车汇入早高峰的车流。春节的那几天喧嚣仿佛是一场不真实的梦——在老家你是“省里有人”的郝处，回到工位你依然是那个要写材料、听指挥的郝科长。银行卡里的余额少了一截，体重涨了几斤，除此之外，生活没有任何改变。你看着窗外灰蒙蒙的天空，长叹一口气，打开了电脑文档。',
      condition: () => true // Default ending
    }
  ],
  'hua_beibei': [
    {
      id: 'lost_credit',
      title: '失信名单上的 Vivian',
      description: '假期结束的第三天，你收到了某借贷平台的催收短信。你在老家维持了 7 天的完美名媛形象，代价是下个月的房租彻底没了着落。朋友圈里那张“开工大吉”的精修图下有 100 个赞，但你盯着手机屏幕，不敢点开支付软件。Vivian 的水晶鞋不仅是 A 货，而且还是租来的，现在，租期到了。',
      condition: (stats) => stats.money < -34000
    },
    {
      id: 'mental_breakdown',
      title: '沪漂的“精神断舍离”',
      description: '坐在工位上的第一天，你突然在洗手间里崩溃大哭。不是因为工作太难，而是因为那股在老家硬撑着的“心气儿”散了。你看着镜子里精致的妆容下掩盖不住的黑眼圈，突然觉得“Vivian”这个名字好累。你甚至产生了一个可怕的念头：也许隔壁村养猪大户的儿子，真的是个不错的归宿。',
      condition: (stats) => stats.san < 30 || stats.health < 30
    },
    {
      id: 'shanghai_dream',
      title: '永不落幕的“上海梦”',
      description: '关掉闹钟，涂上口红，挤进早高峰的地铁。春节那几天的“名媛体验卡”已经过期，你熟练地切换回“花贝贝”模式。虽然信用卡账单让人窒息，虽然出租屋只有 10 平米，但当你走出地铁站，看到陆家嘴三件套在晨光中闪耀时，你对自己说：“加油，万一哪天真成了呢？”你依然在演，但演着演着，你希望自己能信以为真。',
      condition: () => true // Default ending
    }
  ]
};

// Deprecate direct exports for single char
export const EVENTS = []; 
export const ENDINGS = []; 

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