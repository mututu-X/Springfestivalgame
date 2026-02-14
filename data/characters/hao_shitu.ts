
import { Character, GameEvent, Ending } from '../../types';

export const haoShituChar: Character = {
  id: 'hao_shitu',
  name: '郝仕途',
  avatar: '/image/roleicon/101.jpg',
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
};

export const haoShituEvents: GameEvent[] = [
  // Day 1
  {
    id: 'd1_morning',
    day: 1,
    dayLabel: '腊月二十八',
    timeOfDay: 'morning',
    timeLabel: '早上',
    title: '后备箱的“政治学”',
    description: '早上8点，你站在那辆洗得发亮的黑帕萨特车尾。面前是堆积如山的年货。你知道，后备箱怎么摆，决定了回村后打开那一瞬间的“含权量”。',
    image: '/image/scene101/1-1.jpg',
    choices: [
      {
        id: 'A',
        text: '显山露水',
        title: '显山露水',
        description: '把单位发的印字米面油、茅台摆在最外层',
        quote: '这不仅是油，这是组织的关怀。得让二舅他们一眼就看见‘xx特供’这几个字。',
        impact: { face: 5, health: -3 }
      },
      {
        id: 'B',
        text: '谨小慎微',
        title: '谨小慎微',
        description: '拿两份红头文件（哪怕是过期的）夹在公文包里随身带',
        quote: '万一村支书问起政策，我得有理论依据。再说，手里没个文件袋，心里不踏实。',
        impact: { san: 5, luck: 2 }
      },
      {
        id: 'C',
        text: '养生为重',
        title: '养生为重',
        description: '先花半小时灌满三大壶特级枸杞原浆水',
        quote: '堵车不可怕，可怕的是堵车的时候肾虚。我们要打有准备的仗。',
        impact: { health: 3, money: -200 }
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
    image: '/image/scene101/1-2.jpg',
    choices: [
      {
        id: 'A',
        text: '电话遥控',
        title: '电话遥控',
        description: '给留守的值班老李打个慰问电话',
        quote: '（故意按免提）“喂，老李啊，辛苦辛苦！那个阀门的事……对，原则上按我说的办。大局为重！”',
        impact: { san: 5, face: 2 }
      },
      {
        id: 'B',
        text: '指点江山',
        title: '指点江山',
        description: '评判前车的驾驶技术和交通规划',
        quote: '这就不是开车的问题，这是顶层设计没做好！要是让我来抓交通口……',
        impact: { san: -5, weight: 1 }
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
    image: '/image/scene101/1-3.jpg',
    choices: [
      {
        id: 'A',
        text: '精准散烟',
        title: '精准散烟',
        description: '摇下车窗，见人就递一根软中华',
        quote: '哪怕叫不出名字，也要喊一句“二叔/三婶”。必须保持微笑，动作要行云流水。',
        impact: { money: -500, luck: 5 }
      },
      {
        id: 'B',
        text: '低调潜行',
        title: '低调潜行',
        description: '不停车，直接开进自家院子关大门',
        quote: '现在的形势，低调才是最大的炫耀。让他们猜去吧，越神秘越敬畏。',
        impact: { face: -10, san: 5 }
      },
      {
        id: 'C',
        text: '甚至不回家',
        title: '甚至不回家',
        description: '直接把车开到村支书家门口',
        quote: '先拜码头。要想在村里过得舒坦，还得和‘组织’保持一致。',
        impact: { face: 5, money: -1000 }
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
    image: '/image/scene101/1-4.jpg',
    choices: [
      {
        id: 'A',
        text: '情报搜集',
        title: '情报搜集',
        description: '翻看家族群消息，分析明天谁会来借钱',
        quote: '我得备好话术：‘原则上很难，但我试试’。',
        impact: { san: -5, luck: 3 }
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
    image: '/image/scene101/2-1.jpg',
    choices: [
      {
        id: 'A',
        text: '政绩汇报',
        title: '政绩汇报',
        description: '念叨：“太爷爷，孙子我现在负责的重点项目已经落地了，明年争取动一动。”',
        quote: '向列祖列宗汇报工作，这叫不忘本。保佑我仕途顺遂。',
        impact: { san: 10, luck: 0 }
      },
      {
        id: 'B',
        text: '风水指导',
        title: '风水指导',
        description: '指着旁边的树：“三叔，这棵树挡了财位，原则上应该移走，要懂规矩。”',
        quote: '不懂风水的干部不是好孙子。这叫‘环境整治’。',
        impact: { face: 5, money: -500 }
      },
      {
        id: 'C',
        text: '默默做事',
        title: '默默做事',
        description: '一言不发，抢着背最沉的祭品，把碑擦得锃亮',
        quote: '实干兴邦。让大家看到，我虽然当了官，但还是那个肯干活的小郝。',
        impact: { luck: 5, health: -3 }
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
    image: '/image/scene101/2-2.jpg',
    choices: [
      { id: 'A', text: '现场指挥', title: '现场指挥', description: '双手背在身后，指挥晚辈：“歪了歪了！往左一公分！要有大局观！”', quote: '站得高不一定看得远，站在地上指挥的人才掌握全局。', impact: { face: 2, health: 1 } },
      { id: 'B', text: '御笔亲书', title: '御笔亲书', description: '铺开红纸，写一副充满“老干部体”的对联：“国恩家庆，人寿年丰”', quote: '这字还得练，有点躁气。不过镇住这帮没文化的亲戚足够了。', impact: { face: 10, san: -5 } },
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
    image: '/image/scene101/2-3.jpg',
    choices: [
      { id: 'A', text: '三辞三让', title: '三辞三让', description: '嘴上说“坐那儿不合适”，身体却很诚实地被拉向主宾位', quote: '哎呀，二叔您坐！我不行！……既然大家都这么说，那我就恭敬不如从命了。', impact: { face: 10, san: 2 } },
      { id: 'B', text: '发表讲话', title: '发表讲话', description: '举起酒杯，敲敲桌子：“在动筷子之前，我简单讲三点……”', quote: '一是要感恩，二是要团结，三是要发展。来，干了！', impact: { face: 5, luck: -5 } },
      { id: 'C', text: '亲民路线', title: '亲民路线', description: '主动去小孩那一桌挤着坐', quote: '我还是喜欢和祖国的花朵在一起，单纯！', impact: { face: -5, weight: 2 } },
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
    image: '/image/scene101/2-4.jpg',
    choices: [
      { id: 'A', text: '精准扶贫', title: '精准扶贫', description: '学习好的多给，学习差的少给，并附赠一句“将来考公务员”', quote: '每一分钱都要花在刀刃上，这叫‘绩效考核’。', impact: { money: -1000, san: 5 } },
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
    image: '/image/scene101/3-1.jpg',
    choices: [
      { id: 'A', text: '定向攻坚', title: '定向攻坚', description: '给局长编辑一条200字的小作文，包含局长名字和具体细节', quote: '要体现出差异化竞争优势。群发的信息是垃圾，定制的信息是忠心。', impact: { luck: 5, san: -5 } },
      { id: 'B', text: '批阅奏章', title: '批阅奏章', description: '对下属和普通朋友的祝福，统一回复“同乐”', quote: '言多必失，保持一点神秘感和距离感。', impact: { face: 2, san: 2 } },
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
    image: '/image/scene101/3-2.jpg',
    choices: [
      { id: 'A', text: '干部下乡', title: '干部下乡', description: '无论进谁家，先看墙上奖状，再点评房子结构', quote: '老三，这房子采光不行啊，得做个‘顶层设计’改造一下。', impact: { face: 5, san: 2 } },
      { id: 'B', text: '遭遇借钱', title: '遭遇借钱', description: '远房表弟凑过来，支支吾吾想开口。你立刻预判', quote: '别等他开口！先发制人：‘最近单位查得严，工资卡都上交了，难啊！’', impact: { money: 0, face: -5 } },
      { id: 'C', text: '硬撑场面', title: '硬撑场面', description: '即使踩了一脚泥，也要保持微笑，给小孩发糖', quote: '这叫‘深入基层’，脚下有泥，心中有光。', impact: { face: 2, health: -2 } },
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
    image: '/image/scene101/3-3.jpg',
    choices: [
      { id: 'A', text: '战术养生', title: '战术养生', description: '掏出药盒：“兄弟们，我刚吃了头孢，以茶代酒，心意在。”', quote: '保命要紧。留得青山在，不怕没酒喝。', impact: { health: 5, face: -10 } },
      { id: 'B', text: '舍命陪君子', title: '舍命陪君子', description: '“满上！今天不谈工作，只谈感情！喝！”', quote: '宁伤身体，不伤感情。酒精是男人友谊的润滑剂。', impact: { health: -10, face: 10 } },
      { id: 'C', text: '太极推手', title: '太极推手', description: '每一杯都只抿一小口，但劝酒词一套一套的', quote: '酒品即人品，但我只劝别人喝。这叫‘管理能力’。', impact: { luck: 5, san: -3 } },
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
    image: '/image/scene101/3-4.jpg',
    choices: [
      { id: 'A', text: '后悔', title: '后悔', description: '“言多必失，刚才不该吹那个牛，说明天给强子安排工作的。”', quote: '......', impact: { san: -10, luck: -2 } },
      { id: 'B', text: '昏睡', title: '昏睡', description: '鼾声如雷', quote: '......', impact: { health: -3, san: 2 } },
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
    image: '/image/scene101/4-1.jpg',
    choices: [
      { id: 'A', text: '特供攻势', title: '特供攻势', description: '拿出一盒包装简陋但印着“内部供应”的茶叶', quote: '妈，这茶外面买不到，是省里开会发的。比茅台养生。', impact: { face: 10, san: 2 } },
      { id: 'B', text: '现金为王', title: '现金为王', description: '既然拼不过礼物，直接拍两万现金给丈母娘', quote: '简单粗暴。但我心在滴血，这是私房钱啊。', impact: { money: -20000, face: 15 } },
      { id: 'C', text: '家务表现', title: '家务表现', description: '一进门就穿围裙下厨房', quote: '虽然我没大姐夫有钱，但我比他顾家。', impact: { face: -2, luck: 5 } },
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
    image: '/image/scene101/4-2.jpg',
    choices: [
      { id: 'A', text: '降维打击', title: '降维打击', description: '淡淡地说：“赚钱好啊，不过最近税务查得严，大姐夫要注意合规风险。”', quote: '一句话让他闭嘴。在规则制定者面前，赚钱的都是打工的。', impact: { san: 5, face: 5 } },
      { id: 'B', text: '避其锋芒', title: '避其锋芒', description: '躲到阳台去给花浇水，顺便和老丈人聊国际局势', quote: '我们要聊点有高度的，比如中东局势，显得我格局大。', impact: { luck: 2, san: 0 } },
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
    image: '/image/scene101/4-3.jpg',
    choices: [
      { id: 'A', text: '精准喂牌', title: '精准喂牌', description: '宁可自己拆听，也要让老丈人胡牌', quote: '哄好了领导（岳父），日子才好过。', impact: { money: -1000, luck: 5 } },
      { id: 'B', text: '大杀四方', title: '大杀四方', description: '展现高超算牌技巧，赢光大姐夫的钱', quote: '让你下午吹牛！在智商面前，你那些钱没用。', impact: { money: 2000, face: 5 } },
      { id: 'C', text: '观战指点', title: '观战指点', description: '站在老丈人背后瞎指挥', quote: '爸，打这张！信我的，我是统筹全局的。', impact: { face: -5, san: -2 } },
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
    image: '/image/scene101/4-4.jpg',
    choices: [
      { id: 'A', text: '吐槽', title: '吐槽', description: '跟老婆抱怨：“你大姐夫有点太张扬了，迟早出事。”', quote: '精神胜利法。', impact: { san: 3, luck: -2 } },
      { id: 'B', text: '认床', title: '认床', description: '在丈母娘家睡不着，失眠', quote: '......', impact: { health: -3, san: -2 } },
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
    image: '/image/scene101/5-1.jpg',
    choices: [
      { id: 'A', text: '厅局穿搭', title: '厅局穿搭', description: '白衬衫（不扎领带），深色行政夹克，黑西裤，黑皮鞋', quote: '这叫‘不可描述的威严感’。此时无声胜有声。', impact: { face: 10, san: 5 } },
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
    image: '/image/scene101/5-2.jpg',
    choices: [
      { id: 'A', text: '抢单表演', title: '抢单表演', description: '按住死对头的手：“别动！到了我的地盘还能让你花钱？看不起我？”', quote: '声音要大，动作要慢，眼神示意旁边的人来拦我。', impact: { face: 5, luck: 2 } },
      { id: 'B', text: '真正买单', title: '真正买单', description: '趁大家上厕所先把账结了', quote: '虽然肉疼，但这叫‘格局’。回去吃一个月泡面也值了。', impact: { money: -3000, face: 15 } },
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
    image: '/image/scene101/5-3.jpg',
    choices: [
      { id: 'A', text: '主旋律', title: '主旋律', description: '必点《精忠报国》或《向天再借五百年》', quote: '我站在风口浪尖紧握住日月旋转！吼出中年男人的不甘。', impact: { san: 10, face: -2 } },
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
    image: '/image/scene101/5-4.jpg',
    choices: [
      { id: 'A', text: '感叹', title: '感叹', description: '“一帮俗人，除了钱就是钱，还是我境界高。”', quote: '......', impact: { san: 5, face: 2 } },
      { id: 'B', text: '胃痛', title: '胃痛', description: '找胃药', quote: '......', impact: { health: -5, weight: 1 } },
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
    image: '/image/scene101/6-1.jpg',
    choices: [
      { id: 'A', text: '装病谢客', title: '装病谢客', description: '告诉家人身体不适，今天闭门谢客', quote: '可能是痛风犯了…哎哟…为了工作透支了身体啊。', impact: { health: 5, face: -2 } },
      { id: 'B', text: '硬挺晨跑', title: '硬挺晨跑', description: '坚持去村里跑步，并在朋友圈打卡', quote: '自律的男人最可怕。我要让大家看到我的意志力。', impact: { health: -5, face: 5 } },
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
    image: '/image/scene101/6-2.jpg',
    choices: [
      { id: 'A', text: '大义灭亲', title: '大义灭亲', description: '“拿走拿走，叔叔都多大了还玩这个。”', quote: '心在滴血，脸上在笑。这叫长辈风度。', impact: { san: -5, face: 5 } },
      { id: 'B', text: '严肃教育', title: '严肃教育', description: '“这个不是玩具，这是叔叔的‘固定资产’，我们要懂得物权法。”', quote: '用专业名词把小孩绕晕，让他知难而退。', impact: { san: 5, face: -5 } },
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
    image: '/image/scene101/6-3.jpg',
    choices: [
      { id: 'A', text: '打游戏', title: '打游戏', description: '玩一把王者荣耀，必须玩坦克，因为要抗压', quote: '只有在峡谷里，我才能真正做自己。', impact: { san: 10, health: -2 } },
      { id: 'B', text: '看老电影', title: '看老电影', description: '手机看《教父》片段', quote: '学习一下教父的表情管理，明天还得用。', impact: { san: 5, face: 2 } },
      { id: 'C', text: '清理车内', title: '清理车内', description: '把座位缝隙里的瓜子皮抠出来', quote: '一屋不扫何以扫天下。这是一种禅修。', impact: { san: 5, health: -1 } },
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
    image: '/image/scene101/6-4.jpg',
    choices: [
      { id: 'A', text: '梦见周报', title: '梦见周报', description: '梦见假期结束要交5000字心得体会，还没写', quote: '......', impact: { san: -10, health: -2 } },
      { id: 'B', text: '梦见升职', title: '梦见升职', description: '梦见自己坐在主席台上讲话', quote: '......', impact: { san: 5, face: 2 } },
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
    image: '/image/scene101/7-1.jpg',
    choices: [
      { id: 'A', text: '双标现场', title: '双标现场', description: '嘴上说“心诚则灵”，身体却跪得比谁都标准', quote: '财神爷，我不贪，只要能还完房贷就行。这也是为了更好地服务人民。', impact: { luck: 10, face: -2 } },
      { id: 'B', text: '唯物主义', title: '唯物主义', description: '坚决不拜，站在旁边背手看', quote: '那是封建迷信，我是坚定的唯物主义战士。', impact: { san: 5, luck: -5 } },
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
    image: '/image/scene101/7-2.jpg',
    choices: [
      { id: 'A', text: '狂吃', title: '狂吃', description: '为了吃到包硬币的那个饺子，连吃40个', quote: '只要我不停嘴，好运就跑不掉。拼了！', impact: { weight: 3, health: -5 } },
      { id: 'B', text: '细嚼慢咽', title: '细嚼慢咽', description: '每一个都用筷子戳破看看', quote: '这叫‘事前审计’，规避风险。', impact: { face: -5, luck: 2 } },
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
    image: '/image/scene101/7-3.jpg',
    choices: [
      { id: 'A', text: '提前焦虑', title: '提前焦虑', description: '开始查返程路线，看哪里不堵', quote: '所有不以早走为目的的返程都是耍流氓。', impact: { san: -5, luck: 2 } },
      { id: 'B', text: '清理库存', title: '清理库存', description: '把剩下的烟酒分给邻居，做最后的人情', quote: '都要走了，再刷一波好感度。', impact: { face: 5, money: -200 } },
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
    image: '/image/scene101/7-4.jpg',
    choices: [
      { id: 'A', text: '整理名片', title: '整理名片', description: '整理这几天加的微信备注（xx局长侄子，xx老板）', quote: '这些都是资源，得维护好。', impact: { luck: 5, san: -2 } },
      { id: 'B', text: '发呆', title: '发呆', description: '盯着天花板', quote: '好累，什么时候退休？', impact: { san: -5, health: -1 } },
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
    image: '/image/scene101/8-1.jpg',
    choices: [
      { id: 'A', text: '全盘接收', title: '全盘接收', description: '看着活鸡在车后座拉屎，你忍了', quote: '这都是妈的心意…没事，回去我精洗内饰。', impact: { san: 5, money: -200 } },
      { id: 'B', text: '据理力争', title: '据理力争', description: '“妈，城里不让养鸡！我们要讲文明！要有素质！”', quote: '试图用行政命令阻止母爱，通常是无效的。', impact: { san: -5, face: -2 } },
      { id: 'C', text: '只要精品', title: '只要精品', description: '只带看起来高档的山货，方便回去送礼', quote: '土特产也要搞‘供给侧改革’，去粗取精。', impact: { face: 5, luck: 2 } },
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
    image: '/image/scene101/8-2.jpg',
    choices: [
      { id: 'A', text: '听书学习', title: '听书学习', description: '播放《曾国藩家书》或《大明王朝1566》解说', quote: '即使在堵车，我也在进化。我要找回工作的状态。', impact: { san: 5, face: 2 } },
      { id: 'B', text: '狂躁路怒', title: '狂躁路怒', description: '疯狂按喇叭，素质三连', quote: '这群人会不会开车！耽误我明天的早会！', impact: { san: -5, health: -2 } },
      { id: 'C', text: '服务区放纵', title: '服务区放纵', description: '吃一顿垃圾食品', quote: '马上要回去吃轻食了，最后放纵一次。', impact: { weight: 2, health: -2 } },
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
    image: '/image/scene101/8-3.jpg',
    choices: [
      { id: 'A', text: '洗去尘埃', title: '洗去尘埃', description: '看着泥土被冲掉，你感觉自己又变回了那个“郝处”', quote: '再见了二狗，你好郝科长。车必须比脸干净。', impact: { face: 5, money: -100 } },
      { id: 'B', text: '直接回家', title: '直接回家', description: '太累了，明天再洗', quote: '这一车泥也是战绩，说明我也是‘千里走单骑’。', impact: { health: 2, face: -2 } },
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
    image: '/image/scene101/8-4.jpg',
    choices: [
      { id: 'A', text: '甚至有点期待', title: '甚至有点期待', description: '“终于可以上班休息了。家里比单位累多了。”', quote: '只有工作能给我安全感。', impact: { san: 5, health: 2 } },
      { id: 'B', text: '极度抗拒', title: '极度抗拒', description: '“不想上班，想辞职。”', quote: '这是每年的保留节目。', impact: { san: -5, luck: -2 } },
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
    image: '/image/scene101/9-1.jpg',
    choices: [
      { id: 'A', text: '微服私访', title: '微服私访', description: '既然大家都还没上班，我偷偷去趟单位，“检查一下安全隐患”，顺便给领导办公室的绿植浇点水', quote: '这不叫加班，这叫‘主人翁意识’。万一被值班领导撞见，那就赢麻了。', impact: { luck: 5, san: 2 } },
      { id: 'B', text: '城市晨跑', title: '城市晨跑', description: '换上全套专业装备，在公园里跑个5公里，一定要发带定位的朋友圈', quote: '用城市的柏油路净化脚底的泥土气。看，我又是一个自律的都市精英。', impact: { health: 5, weight: -1 } },
      { id: 'C', text: '甚至不赖床', title: '甚至不赖床', description: '在家哪怕没事干，也要穿戴整齐坐在书房喝茶', quote: '懈怠是堕落的开始。我要保持战斗状态，哪怕敌人只是空气。', impact: { san: 5, health: -2 } },
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
    image: '/image/scene101/9-2.jpg',
    choices: [
      { id: 'A', text: '头面工程', title: '头面工程', description: '找那个最贵的“Tony老师”，染黑两鬓的白发，修剪一个干练的“厅局风”发型', quote: '发型不乱，江山才稳。要把这几天的沧桑感剪掉。', impact: { face: 10, money: -500 } },
      { id: 'B', text: '汗蒸排毒', title: '汗蒸排毒', description: '去洗浴中心汗蒸，狠狠搓个澡', quote: '把老家的烟火味、酒味、穷酸气，统统搓掉。我要清清白白地回办公室。', impact: { health: 5, weight: -1 } },
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
    image: '/image/scene101/9-3.jpg',
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
    image: '/image/scene101/9-4.jpg',
    choices: [
      { id: 'A', text: '脑内演练', title: '脑内演练', description: '在脑子里把明天见到领导的第一句话、第一个表情演练了十遍', quote: '不能笑得太开心（显得没心没肺），也不能太沉重。要在那一瞬间拿捏住‘稳重中带着期待’的分寸。', impact: { san: -5, luck: 2 } },
      { id: 'B', text: '贤者时间', title: '贤者时间', description: '看着窗外的城市灯火，突然产生了一秒钟的厌世念头，然后迅速掐灭', quote: '这就是生活。为了这点碎银几两，为了这点面子…睡吧，郝科长，明天还要战斗。', impact: { san: 5, health: 2 } },
    ]
  },
];

export const haoShituEndings: Ending[] = [
  {
    id: 'icu',
    title: '缺席的“老郝”',
    description: '工位是空的，因为你此刻正躺在医院急诊输液。为了维持那点所谓的“排场”和“面子”，你在酒桌上透支了本就脆弱的身体，在深夜的焦虑中耗尽了精神。工作群里大家都在抢开工红包，而你负责的重点项目已经在刚才的早会上被悄悄移交。你赢了过年的面子，却输了职场的里子。',
    condition: (stats) => stats.health <= 30 || stats.san <= 50
  },
  {
    id: 'promotion',
    title: '真正的“厅局风”',
    description: '正月初八，你穿着熨烫平整的行政夹克准时出现在晨会，神采奕奕。春节期间，你精准地拿捏了每一场酒局的分寸和每一个红包的厚度。虽然存款缩水，但局长那个意味深长的点头，让你知道这笔“政治投资”稳了。在满屋子疲惫的同事中，你此刻的气场，才叫真正的“接班人”。',
    condition: (stats) => stats.face >= 115 && stats.luck >= 95
  },
  {
    id: 'chill',
    title: '甚至有点“想上班”',
    description: '这是你过得最轻松的一个年。面对亲戚的攀比，你选择了装傻和躲避，甚至在车里打游戏消磨时光。虽然在老家口碑平平，被评价“混得一般”，但此刻看着办公室里那些面如菜色、哈欠连天的同事，满血复活的你心中暗爽。毕竟，只有健康的身体和松弛的神经，才是中年男人最后的护城河。',
    condition: (stats) => stats.face <= 90 && stats.san >= 110
  },
  {
    id: 'void',
    title: '无法逃离的“中年虚无”',
    description: '闹钟响了，你像往常一样穿上那件深色夹克，开车汇入早高峰的车流。春节的那几天喧嚣仿佛是一场不真实的梦——在老家你是“省里有人”的郝处，回到工位你依然是那个要写材料、听指挥的郝科长。银行卡里的余额少了一截，体重涨了几斤，除此之外，生活没有任何改变。你看着窗外灰蒙蒙的天空，长叹一口气，打开了电脑文档。',
    condition: () => true // Default ending
  }
];
