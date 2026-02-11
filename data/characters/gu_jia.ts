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
  // Day 1: 腊月二十八 (2月15日)
  {
    id: 'd1_morning',
    day: 1,
    dayLabel: '腊月二十八',
    timeOfDay: 'morning',
    timeLabel: '早上',
    title: '登录服务器',
    description: '拖着半空的行李箱（毕竟没钱买年货）站在家门口，你深吸一口气，准备激活【全职儿女·春节限定版】皮肤。门开了，太后娘娘（你妈）眼神像 X 光一样扫描你的全身，最后落在你两手空空的手上。系统提示：当前亲密度岌岌可危。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '肉麻攻击',
        title: '肉麻攻击',
        description: '妈！我想死你了！（扑上去）。',
        quote: '太后侧身闪避：‘少来这套，想死我了还是想死我的退休金了？’ 闪避率 100%。',
        impact: { face: -5, luck: 2 }
      },
      {
        id: 'B',
        text: '抢占生态位',
        title: '抢占生态位',
        description: '直接抢过扫把：我来拖地！',
        quote: '太后眼神回暖，瞬间转账 200 元‘启动资金’。你获得了【清洁工】buff。',
        impact: { money: 200, health: -5 }
      },
      {
        id: 'C',
        text: '甚至沉默',
        title: '甚至沉默',
        description: '沉默，主打一个深沉。',
        quote: '太后判定你为‘在外面混不下去了’，并在家族群发布了你颓废的背影照。',
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
    title: '初始化工作区',
    description: '行李还没拆，你爸指着积灰一年的窗户说：‘没事，你歇着，我来擦。’ 这是一道送命题。在这个家里，‘歇着’等于‘废物’。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '真·歇着',
        title: '真·歇着',
        description: '真的去歇着玩手机。',
        quote: '你爸叹气声高达 80 分贝。晚饭里的肉消失了。扣除津贴 100 元。',
        impact: { money: -100, face: -10 }
      },
      {
        id: 'B',
        text: '卷王模式',
        title: '卷王模式',
        description: '全副武装，擦出 4K 高清窗户。',
        quote: '玻璃亮到鸟都会撞上去。父母满意度 +10，你的腰椎间盘突出风险 +10%。',
        impact: { health: -10, face: 5 }
      },
      {
        id: 'C',
        text: '甚至卖惨',
        title: '甚至卖惨',
        description: '一边擦一边卖惨诉苦。',
        quote: '利用同情分赚取了 50 元‘辛苦费’，但被贴上了‘这孩子真不抗压’的标签。',
        impact: { money: 50, face: -5 }
      }
    ]
  },
  {
    id: 'd1_evening',
    day: 1,
    dayLabel: '腊月二十八',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: 'KPI制定大会',
    description: '晚饭桌上，太后娘娘拿出了一张《春节接待流程表》。你需要背诵七大姑八大姨的称呼、禁忌话题以及应对催婚的标准答案。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '完美AI',
        title: '完美AI',
        description: '全盘接受，我是专业的。',
        quote: '你像个完美的 AI 点头称是。父母觉得你‘终于懂事了’，虽然你的灵魂已离线。',
        impact: { san: -10, face: 5 }
      },
      {
        id: 'B',
        text: '甚至反骨',
        title: '甚至反骨',
        description: '提出异议：我不想见二舅妈。',
        quote: '遭到‘不懂礼数’的声波攻击，并在洗碗时被剥夺了热水使用权。',
        impact: { san: 5, face: -10 }
      },
      {
        id: 'C',
        text: '甚至画饼',
        title: '甚至画饼',
        description: '反向画饼：明年我一定带对象回来。',
        quote: '这是一张空头支票，但暂时稳住了股价。明年？明年再说。',
        impact: { face: 10, luck: -10 }
      }
    ]
  },
  {
    id: 'd1_sleep',
    day: 1,
    dayLabel: '腊月二十八',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '复盘与回血',
    description: '终于回到了自己的房间。你需要计算今天的劳动所得和情绪损耗。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '甚至记账',
        title: '甚至记账',
        description: '在备忘录里记下今天的“工时”。',
        quote: '擦窗 2 小时，陪聊 1 小时。全职儿女也是一份工作。',
        impact: { san: 5 }
      },
      {
        id: 'B',
        text: '甚至摆烂',
        title: '甚至摆烂',
        description: '报复性刷视频到两点。',
        quote: '只有深夜的时间是属于自己的。熬夜伤身但快乐。',
        impact: { health: -2, san: 5 }
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
    title: '物资争夺战',
    description: '早起六点，你被太后拖去菜市场。在拥挤的大爷大妈中，你需要运用体能抢到最新鲜的排骨。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '甚至肉搏',
        title: '甚至肉搏',
        description: '开启狂暴模式，硬挤。',
        quote: '你用瘦弱的身躯杀出重围，抢到了半价排骨，省下的钱归自己。',
        impact: { health: -5, money: 20 }
      },
      {
        id: 'B',
        text: '甚至挂件',
        title: '甚至挂件',
        description: '跟在妈后面拎包。',
        quote: '你妈嫌你像个木头，连砍价都不会，并把你和隔壁王阿姨的女儿进行了第一次对比。',
        impact: { face: -5 }
      },
      {
        id: 'C',
        text: '甚至外卖',
        title: '甚至外卖',
        description: '运用 App 线上下单。',
        quote: '‘贵！不新鲜！懒！’ 三连暴击。你自掏腰包补差价，还被痛批。',
        impact: { money: -30 }
      }
    ]
  },
  {
    id: 'd2_afternoon',
    day: 2,
    dayLabel: '腊月二十九',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '赛博流水线',
    description: '厨房成了你的战场。你需要剥蒜、择豆角、洗车厘子。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '甚至无情',
        title: '甚至无情',
        description: '机械化作业，追求速度。',
        quote: '效率极高，获得称号【无情的剥蒜机器】，你的手变得粗糙了。',
        impact: { health: -5 }
      },
      {
        id: 'B',
        text: '甚至摸鱼',
        title: '甚至摸鱼',
        description: '戴耳机听播客摸鱼。',
        quote: '蒜没剥完，豆角也没择好。被判定为‘心不在焉’，精神得到了放松。',
        impact: { san: 5, face: -5 }
      },
      {
        id: 'C',
        text: '甚至甩锅',
        title: '甚至甩锅',
        description: '拉着老爸一起干。',
        quote: '成功转移仇恨值。你妈觉得你很有管理天赋，居然把你爸调动起来了。',
        impact: { face: 5, health: -2 }
      }
    ]
  },
  {
    id: 'd2_evening',
    day: 2,
    dayLabel: '腊月二十九',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '除夕前夜的宁静',
    description: '电视里播放某大厂裁员新闻。空气凝固了，全职儿女最怕空气突然安静。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '甚至求生',
        title: '甚至求生',
        description: '立刻起身去切水果。',
        quote: '求生欲拉满。你用果盘堵住了他们即将开启的说教之口。',
        impact: { face: 5 }
      },
      {
        id: 'B',
        text: '甚至装睡',
        title: '甚至装睡',
        description: '假装睡着。',
        quote: '你躲过了一劫。‘这孩子是不是在外面受委屈了？’ 居然获得了一丝同情。',
        impact: { luck: 5 }
      },
      {
        id: 'C',
        text: '甚至辩论',
        title: '甚至辩论',
        description: '点评新闻：资本家真黑。',
        quote: '引发了关于‘体制内 vs 体制外’的一小时辩论赛。你完败且气抖冷。',
        impact: { san: -10 }
      }
    ]
  },
  {
    id: 'd2_sleep',
    day: 2,
    dayLabel: '腊月二十九',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '职业倦怠',
    description: '仅仅工作了两天，你已经感到了深深的疲惫。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '甚至投简历',
        title: '甚至投简历',
        description: '打开招聘软件刷了刷。',
        quote: '哪怕去当保安也比在家当孙子强。越刷越焦虑。',
        impact: { san: -5 }
      },
      {
        id: 'B',
        text: '甚至冥想',
        title: '甚至冥想',
        description: '听着郭德纲相声入睡。',
        quote: '生活太苦，需要一点笑声来中和。',
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
    title: '除夕·祭祖大典',
    description: '贴对联、挂灯笼、祭祖。你需要向列祖列宗解释为什么你今年还是单身且没工作。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '甚至迷信',
        title: '甚至迷信',
        description: '虔诚祈祷：保佑我暴富。',
        quote: '祖宗收到了信号。虽然没显灵，但你心里踏实了。',
        impact: { luck: 10 }
      },
      {
        id: 'B',
        text: '甚至嘴硬',
        title: '甚至嘴硬',
        description: '对联贴歪了，硬说这是艺术。',
        quote: '被老爸勒令重贴。你站在梯子上瑟瑟发抖，丢脸。',
        impact: { face: -10 }
      },
      {
        id: 'C',
        text: '甚至画饼',
        title: '甚至画饼',
        description: '给祖宗画大饼：明年带孙子来。',
        quote: '你妈听了很高兴，信用积分 -100，透支未来运气。',
        impact: { face: 5, luck: -5 }
      }
    ]
  },
  {
    id: 'd3_afternoon',
    day: 3,
    dayLabel: '正月初一',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '年夜饭备战·地狱厨房',
    description: '厨房进入一级战备状态。你是副厨、传菜员、洗碗工三位一体。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '甚至超频',
        title: '甚至超频',
        description: '超频响应，完美配合。',
        quote: '你展现了惊人的家务天赋。太后大悦，当场发放 200 元‘年终奖’。',
        impact: { money: 200, health: -10 }
      },
      {
        id: 'B',
        text: '甚至偷吃',
        title: '甚至偷吃',
        description: '偷偷偷吃炸丸子。',
        quote: '被发现并被拍手背。虽然疼，但是真香。体重小幅上升。',
        impact: { weight: 0.5, san: 5 }
      },
      {
        id: 'C',
        text: '甚至炸裂',
        title: '甚至炸裂',
        description: '手忙脚乱，打碎盘子。',
        quote: '‘碎碎平安’都救不了你。你要赔偿这套名贵餐具的折损费。',
        impact: { face: -20, money: -50 }
      }
    ]
  },
  {
    id: 'd3_evening',
    day: 3,
    dayLabel: '正月初一',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '春晚吐槽大会',
    description: '年夜饭吃完了，全家围坐看春晚。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '甚至毒舌',
        title: '甚至毒舌',
        description: '成为‘嘴替’，犀利吐槽节目。',
        quote: '你爸妈觉得你太刻薄，但你自己爽到了，这是唯一的慰藉。',
        impact: { san: 5 }
      },
      {
        id: 'B',
        text: '甚至抢红包',
        title: '甚至抢红包',
        description: '埋头抢微信红包。',
        quote: '一顿操作猛如虎，一看抢了五块八。',
        impact: { money: 5.8 }
      },
      {
        id: 'C',
        text: '甚至反哺',
        title: '甚至反哺',
        description: '主动给爸妈发大红包。',
        quote: '花呗发红包，虽然心在滴血，但家庭地位瞬间提升至皇室级别。这叫‘付费上班’。',
        impact: { money: -1000, face: 50 }
      }
    ]
  },
  {
    id: 'd3_sleep',
    day: 3,
    dayLabel: '正月初一',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '守岁的虚无',
    description: '零点的钟声敲响了。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '甚至许愿',
        title: '甚至许愿',
        description: '默默许愿明年不再全职。',
        quote: '希望明年这时候，我是带着年终奖回来的。',
        impact: { luck: 2 }
      },
      {
        id: 'B',
        text: '甚至秒睡',
        title: '甚至秒睡',
        description: '实在太累了，倒头就睡。',
        quote: '什么守岁，命都要没了。体力回复中。',
        impact: { health: 5 }
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
    title: '初一·磕头机器',
    description: '大年初一，作为吉祥物去各家拜年。每一次磕头都是为了那不知厚薄的红包。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '甚至响头',
        title: '甚至响头',
        description: '只要红包够厚，头磕得震天响。',
        quote: '你的额头红了，膝盖青了，但钱包鼓了。这是尊严的变现。',
        impact: { money: 800, health: -5 }
      },
      {
        id: 'B',
        text: '甚至社恐',
        title: '甚至社恐',
        description: '依然是全职儿女，拒绝出门。',
        quote: '你守住了懒觉，但失去了红包。亲戚口中成了‘那个孤僻的孩子’。',
        impact: { face: -20, money: 0 }
      },
      {
        id: 'C',
        text: '甚至吉祥话',
        title: '甚至吉祥话',
        description: '嘴甜人不跪，主打一个吉祥话。',
        quote: '‘恭喜发财’说了八百遍。收益一般，但胜在体面。',
        impact: { money: 200, face: 5 }
      }
    ]
  },
  {
    id: 'd4_afternoon',
    day: 4,
    dayLabel: '正月初二',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '熊孩子入侵',
    description: '表姐带着两个混世魔王来了。你的手办进入红色警戒状态。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '甚至锁门',
        title: '甚至锁门',
        description: '锁门，坚壁清野。',
        quote: '表姐在客厅阴阳怪气，但你的老婆（手办）保住了！你的心理防线守住了。',
        impact: { san: 5 }
      },
      {
        id: 'B',
        text: '甚至陪玩',
        title: '甚至陪玩',
        description: '牺牲小我，陪玩。',
        quote: 'San 值狂掉，但表姐塞给你两百块‘带娃费’作为精神损失费。',
        impact: { san: -20, money: 200 }
      },
      {
        id: 'C',
        text: '甚至祸水东引',
        title: '甚至祸水东引',
        description: '教唆熊孩子去折磨他妈。',
        quote: '你教会了他们玩手机游戏。危机解除，且成功转移了矛盾。',
        impact: { luck: 5 }
      }
    ]
  },
  {
    id: 'd4_evening',
    day: 4,
    dayLabel: '正月初二',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '剩菜消消乐',
    description: '从今天开始，你将进入‘热剩菜-吃剩菜-倒剩菜’的死循环。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '甚至硬吃',
        title: '甚至硬吃',
        description: '为了不浪费，硬吃。',
        quote: '肠胃功能紊乱。爸妈夸你节约，但你的身体在抗议。',
        impact: { health: -10, weight: 1 }
      },
      {
        id: 'B',
        text: '甚至倒掉',
        title: '甚至倒掉',
        description: '偷偷倒掉一部分。',
        quote: '垃圾桶暴露了你的罪行。遭到全家批斗：‘这都是钱啊！’',
        impact: { face: -5 }
      },
      {
        id: 'C',
        text: '甚至黑暗料理',
        title: '甚至黑暗料理',
        description: '开发剩菜新吃法。',
        quote: '做出了黑暗料理。全家沉默，没人再逼你吃剩菜了，你也吃不下了。',
        impact: { san: -5 }
      }
    ]
  },
  {
    id: 'd4_sleep',
    day: 4,
    dayLabel: '正月初二',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '消化与反思',
    description: '肚子里的剩菜在翻滚。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '甚至消食',
        title: '甚至消食',
        description: '在房间里做仰卧起坐。',
        quote: '身体的痛苦能缓解精神的痛苦。稍微瘦了一点点。',
        impact: { weight: -0.5 }
      },
      {
        id: 'B',
        text: '甚至网购',
        title: '甚至网购',
        description: '买点肠胃药和零食。',
        quote: '为了明天的战斗，必须补充弹药。',
        impact: { money: -50 }
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
    title: '别人家的孩子（Boss战）',
    description: '二姨带着她那个年薪百万的儿子来了。这是你的宿敌。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '甚至卑微',
        title: '甚至卑微',
        description: '端茶倒水，卑微服务。',
        quote: '二姨儿子怜悯地给了你 200 块红包，像打发叫花子。你收下了。',
        impact: { money: 200, face: -20 }
      },
      {
        id: 'B',
        text: '甚至攻击',
        title: '甚至攻击',
        description: '阴阳怪气：‘哥，头发好像少了点’。',
        quote: '精准打击！你赢了战役，心情舒畅，但被亲戚认为‘不懂事’。',
        impact: { san: 10, face: -10 }
      },
      {
        id: 'C',
        text: '甚至绿茶',
        title: '甚至绿茶',
        description: '聊养生，聊陪伴父母。',
        quote: '你爸妈突然觉得：虽然你穷，但你在身边伺候挺好。',
        impact: { face: 15 }
      }
    ]
  },
  {
    id: 'd5_afternoon',
    day: 5,
    dayLabel: '正月初三',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '洗碗修罗场',
    description: '十几口人的聚餐结束了。作为‘全职儿女’，洗碗是你的天职。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '甚至认命',
        title: '甚至认命',
        description: '默默洗完全部碗筷。',
        quote: '腰断了，手泡白了。你获得了‘免费洗碗机’称号，但也仅此而已。',
        impact: { health: -10 }
      },
      {
        id: 'B',
        text: '甚至溜号',
        title: '甚至溜号',
        description: '假装接电话溜出去。',
        quote: '逃避可耻但有用。不过回来后发现你妈脸色铁青。',
        impact: { face: -15 }
      },
      {
        id: 'C',
        text: '甚至拉人',
        title: '甚至拉人',
        description: '高喊：‘表弟表妹一起来体验生活！’',
        quote: '强行拉壮丁。你解放了双手，心情大好。',
        impact: { san: 10 }
      }
    ]
  },
  {
    id: 'd5_evening',
    day: 5,
    dayLabel: '正月初三',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '相亲伏击战',
    description: '七大姑突然掏出一张照片，你被强制进入了相亲副本。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '甚至敷衍',
        title: '甚至敷衍',
        description: '加微信，敷衍了事。',
        quote: '加上了。你开启了消息免打扰，暂时安全，但内心膈应。',
        impact: { san: -5 }
      },
      {
        id: 'B',
        text: '甚至暴言',
        title: '甚至暴言',
        description: '当场暴言：‘我不婚不育保平安’。',
        quote: '七大姑心梗，你妈血压飙升。家庭会议变成批判大会，但你释放了压力。',
        impact: { face: -30, san: 20 }
      },
      {
        id: 'C',
        text: '甚至自黑',
        title: '甚至自黑',
        description: '自黑：‘我没工作还要靠家里养’。',
        quote: '用魔法打败魔法。七大姑默默收回了照片，觉得你是个累赘。',
        impact: { face: -10 }
      }
    ]
  },
  {
    id: 'd5_sleep',
    day: 5,
    dayLabel: '正月初三',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '深夜的孤独',
    description: '那种被像商品一样推销的屈辱感还在。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '甚至emo',
        title: '甚至emo',
        description: '翻看以前同学的朋友圈。',
        quote: '大家好像都过得很好，只有我还在原地踏步。',
        impact: { san: -10 }
      },
      {
        id: 'B',
        text: '甚至振作',
        title: '甚至振作',
        description: '更新简历。',
        quote: '试图找回一点掌控感，虽然不知道有没有用。',
        impact: { luck: 2 }
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
    title: '越狱计划',
    description: '亲戚走得差不多了，你急需逃离这个充满了瓜子皮的地方。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '甚至假装',
        title: '甚至假装',
        description: '谎称公司加班，去网吧。',
        quote: '爸妈眼神里多了几分对‘社畜’的尊重。网吧泡面真香。',
        impact: { money: -30, san: 10 }
      },
      {
        id: 'B',
        text: '甚至吐槽',
        title: '甚至吐槽',
        description: '真的是去见狐朋狗友。',
        quote: '情绪价值拉满，但吃喝玩乐让钱包空虚。',
        impact: { money: -200, san: 15 }
      },
      {
        id: 'C',
        text: '甚至失败',
        title: '甚至失败',
        description: '被抓壮丁，没跑掉。',
        quote: '越狱失败。被抓去给二姨姥姥送礼。你的灵魂在尖叫。',
        impact: { san: -15 }
      }
    ]
  },
  {
    id: 'd6_afternoon',
    day: 6,
    dayLabel: '正月初四',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '同学聚会·凡尔赛现场',
    description: '高中同学聚会。你是这个生态链的最底层，还是那个看破红尘的观察者？',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '甚至隐形',
        title: '甚至隐形',
        description: '低调吃菜，绝不搭话。',
        quote: '吃回了份子钱，稳赚不赔。内心平静。',
        impact: { san: 5 }
      },
      {
        id: 'B',
        text: '甚至坦诚',
        title: '甚至坦诚',
        description: '实话实说：‘我在家啃老’。',
        quote: '全场寂静。大家竟然投来羡慕的目光：‘还是你活得通透啊！’ 意外获得面子。',
        impact: { face: 10 }
      },
      {
        id: 'C',
        text: '甚至装X',
        title: '甚至装X',
        description: '编造身份：‘我在做独立咨询’。',
        quote: '装 X 成功，但为了圆谎抢着买单。死要面子活受罪。',
        impact: { money: -500, face: 20 }
      }
    ]
  },
  {
    id: 'd6_evening',
    day: 6,
    dayLabel: '正月初四',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '深夜EMO',
    description: '聚会结束，走在冷清的街道上。全职儿女真的是长久之计吗？',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '甚至行动',
        title: '甚至行动',
        description: '投递几份简历。',
        quote: '焦虑转化为行动力。希望能有好运。',
        impact: { luck: 5 }
      },
      {
        id: 'B',
        text: '甚至买醉',
        title: '甚至买醉',
        description: '买瓶啤酒，敬月光。',
        quote: '只要我不尴尬，尴尬的就是月亮。身体受损，心情回升。',
        impact: { money: -10, health: -2 }
      },
      {
        id: 'C',
        text: '甚至摆烂',
        title: '甚至摆烂',
        description: '回家继续刷短视频。',
        quote: '奶头乐是最好的麻醉剂。麻木了，也就不痛了。',
        impact: { san: 2 }
      }
    ]
  },
  {
    id: 'd6_sleep',
    day: 6,
    dayLabel: '正月初四',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '逃避现实',
    description: '玩了一天，但心里更累了。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '甚至不想醒',
        title: '甚至不想醒',
        description: '关掉所有闹钟。',
        quote: '只要我不醒，明天就不会来。',
        impact: { san: 2 }
      },
      {
        id: 'B',
        text: '甚至听书',
        title: '甚至听书',
        description: '听《活着》助眠。',
        quote: '比惨能让人获得内心的平静。',
        impact: { san: 5 }
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
    title: '返程焦虑症',
    description: '父母开始盘算给你带什么土特产，虽然你并不走。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '甚至提醒',
        title: '甚至提醒',
        description: '提醒他们：我不走，我一直在。',
        quote: '父母翻了个白眼：‘哦，忘了。那你赶紧去拖地！’ 温情瞬间破碎。',
        impact: { face: -5 }
      },
      {
        id: 'B',
        text: '甚至欺骗',
        title: '甚至欺骗',
        description: '假装也要走，骗点土特产。',
        quote: '骗到了两根腊肠。相当于变相套现了物资。',
        impact: { money: 100 }
      },
      {
        id: 'C',
        text: '甚至谈判',
        title: '甚至谈判',
        description: '趁机谈续约：下个月生活费涨涨？',
        quote: '谈判破裂。不仅没涨，还因为‘表现不佳’被扣了绩效。',
        impact: { money: -200 }
      }
    ]
  },
  {
    id: 'd7_afternoon',
    day: 7,
    dayLabel: '正月初五',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '大扫除·回滚版本',
    description: '过年的装饰该撤了。这是一个巨大的工程。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '甚至狂暴',
        title: '甚至狂暴',
        description: '开启狂暴清洁模式。',
        quote: '累成狗，但看着家里一尘不染，强迫症满足。身体透支。',
        impact: { health: -10 }
      },
      {
        id: 'B',
        text: '甚至抱怨',
        title: '甚至抱怨',
        description: '边干边抱怨。',
        quote: '‘干活不痛快，不如不干！’ 挨了一顿骂，活还没少干。',
        impact: { face: -10 }
      },
      {
        id: 'C',
        text: '甚至科技',
        title: '甚至科技',
        description: '把活推给扫地机器人。',
        quote: '机器人卡死了。你还得去救驾，被嘲笑‘高科技没屁用’。',
        impact: { san: -5 }
      }
    ]
  },
  {
    id: 'd7_evening',
    day: 7,
    dayLabel: '正月初五',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '最后的晚餐（伪）',
    description: '冰箱里最后一点硬菜被端上桌。爸妈开始唠叨隔壁小张回北京上班了。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '甚至画饼',
        title: '甚至画饼',
        description: '画饼：我在筹备大项目。',
        quote: '神秘感震慑住了二老。暂时获得了安宁，赢回了一点面子。',
        impact: { face: 10 }
      },
      {
        id: 'B',
        text: '甚至装聋',
        title: '甚至装聋',
        description: '埋头干饭，装聋作哑。',
        quote: '只要我吃得够快，唠叨就追不上我。体重增加。',
        impact: { weight: 1 }
      },
      {
        id: 'C',
        text: '甚至感情牌',
        title: '甚至感情牌',
        description: '反击：我想多陪陪你们。',
        quote: '打感情牌。老妈眼圈红了，给你夹了一块最大的肉。',
        impact: { face: 5 }
      }
    ]
  },
  {
    id: 'd7_sleep',
    day: 7,
    dayLabel: '正月初五',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '留守的复杂心情',
    description: '朋友圈里大家都在晒返程的票根。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '甚至庆幸',
        title: '甚至庆幸',
        description: '想到不用早起上班，笑出了声。',
        quote: '全职儿女也是有福利的。心情不错。',
        impact: { san: 5 }
      },
      {
        id: 'B',
        text: '甚至焦虑',
        title: '甚至焦虑',
        description: '看着存款余额发呆。',
        quote: '这觉睡得有点贵。焦虑值上升。',
        impact: { san: -5 }
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
    title: '甚至不需要闹钟',
    description: '法定假期结束了。早上八点，吸尘器准时撞击你的房门。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '甚至弹射',
        title: '甚至弹射',
        description: '立刻弹射起床。',
        quote: '条件反射已养成。你比上班族起得还早，身体有点吃不消。',
        impact: { health: -2 }
      },
      {
        id: 'B',
        text: '甚至耳塞',
        title: '甚至耳塞',
        description: '锁门，戴耳塞。',
        quote: '‘家里养了个大懒虫！’ 门外传来咆哮。面子受损，但睡爽了。',
        impact: { face: -10 }
      },
      {
        id: 'C',
        text: '甚至装病',
        title: '甚至装病',
        description: '装病。',
        quote: '演技浮夸，被识破。太后表示鄙视。',
        impact: { face: -5 }
      }
    ]
  },
  {
    id: 'd8_afternoon',
    day: 8,
    dayLabel: '正月初六',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '账单结算日',
    description: '你开始计算春节期间的收支。你发现全职儿女的 ROI（投资回报率）并不高。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '甚至假账',
        title: '甚至假账',
        description: '做假账，找爸妈报销。',
        quote: '虚报菜价，从中渔利。小赚一笔。',
        impact: { money: 100 }
      },
      {
        id: 'B',
        text: '甚至赤字',
        title: '甚至赤字',
        description: '叹气，接受赤字。',
        quote: '为家里花了钱，还要挨骂。心里苦。',
        impact: { san: -5 }
      },
      {
        id: 'C',
        text: '甚至省钱',
        title: '甚至省钱',
        description: '制定省钱计划：断绝社交。',
        quote: '把自己封印在房间里，强制储蓄。',
        impact: { money: 50 }
      }
    ]
  },
  {
    id: 'd8_evening',
    day: 8,
    dayLabel: '正月初六',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '安静的夜晚',
    description: '亲戚走了，家里恢复了冷清。全职儿女的内核，其实是陪伴。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '甚至削苹果',
        title: '甚至削苹果',
        description: '给爸妈削个苹果。',
        quote: '空气里有淡淡的甜味。这一刻，你觉得这一切还是值得的。',
        impact: { san: 10 }
      },
      {
        id: 'B',
        text: '甚至逃避',
        title: '甚至逃避',
        description: '回房间打游戏。',
        quote: '逃避现实才是刚需。San 值小幅回升。',
        impact: { san: 5 }
      },
      {
        id: 'C',
        text: '甚至全家福',
        title: '甚至全家福',
        description: '偷偷拍张全家福。',
        quote: '照片里的二老睡着了，你比着耶。这是最真实的瞬间。',
        impact: { luck: 5 }
      }
    ]
  },
  {
    id: 'd8_sleep',
    day: 8,
    dayLabel: '正月初六',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '平淡的幸福',
    description: '没有了节日的喧嚣，这一觉睡得格外踏实。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '甚至早睡',
        title: '甚至早睡',
        description: '十点就睡了，养生。',
        quote: '为明天的家务积蓄能量。',
        impact: { health: 5 }
      },
      {
        id: 'B',
        text: '甚至规划',
        title: '甚至规划',
        description: '想想明天给爸妈做点啥好吃的。',
        quote: '我也不是一无是处嘛。',
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
    title: '新的合同周期',
    description: '春节副本通关。今天是新的一个月的开始。你等待太后颁布新的指令。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '甚至续约',
        title: '甚至续约',
        description: '主动请缨：今天大扫除！',
        quote: '续约成功！太后转账 2000 元生活费。算是有编制的人了。',
        impact: { money: 2000 }
      },
      {
        id: 'B',
        text: '甚至试探',
        title: '甚至试探',
        description: '试探：我想出去找工作。',
        quote: '爸妈松了一口气：‘去吧。’ 你获得了解脱感。',
        impact: { san: 10 }
      },
      {
        id: 'C',
        text: '甚至降薪',
        title: '甚至降薪',
        description: '赖床不起。',
        quote: '惨遭‘降薪留用’。生活费减半，还要被骂。',
        impact: { money: -500 }
      }
    ]
  },
  {
    id: 'd9_afternoon',
    day: 9,
    dayLabel: '正月初七',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '行李箱的秘密',
    description: '爸妈习惯性地塞满了你的行李箱，里面塞满了剩下的腊肉、甚至还有一卷手纸。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '甚至收下',
        title: '甚至收下',
        description: '全部收下，放到冰箱。',
        quote: '未来一个月的伙食有着落了。省下就是赚到。',
        impact: { money: 200 }
      },
      {
        id: 'B',
        text: '甚至吐槽',
        title: '甚至吐槽',
        description: '吐槽：给我手纸干嘛？',
        quote: '爸妈觉得你不识货。吵了一架。',
        impact: { face: -5 }
      },
      {
        id: 'C',
        text: '甚至发圈',
        title: '甚至发圈',
        description: '拍照发朋友圈：沉甸甸的爱。',
        quote: '获得了 50 个赞。网络孝子人设屹立不倒。',
        impact: { face: 10 }
      }
    ]
  },
  {
    id: 'd9_evening',
    day: 9,
    dayLabel: '正月初七',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '最终结算与展望',
    description: '这个春节，你作为全职儿女，失去了尊严，但收获了亲情和生活费。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '甚至立Flag',
        title: '甚至立Flag',
        description: '明年我也要去年薪百万！',
        quote: '虽然可能性微存，但梦想还是要有的。',
        impact: { luck: 10 }
      },
      {
        id: 'B',
        text: '甚至苟住',
        title: '甚至苟住',
        description: '全职儿女挺好，苟住！',
        quote: '认清了现实。舒适区虽然窄，但是暖和啊。',
        impact: { san: 5 }
      },
      {
        id: 'C',
        text: '甚至摆烂',
        title: '甚至摆烂',
        description: '不想了，打把王者。',
        quote: '连跪五把。这才是真实的人间。',
        impact: { san: -5 }
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
    description: '游戏面板弹出，统计你这 9 天的 KPI。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '查看数据',
        title: '查看数据',
        description: '看看自己这几天的面子和存款变化。',
        quote: '数据不会骗人，但生活会。晚安，顾嘉。',
        impact: { san: 2 }
      },
      {
        id: 'B',
        text: '直接退出',
        title: '直接退出',
        description: '闭眼，存档，睡觉。',
        quote: '无论如何，明天又是新的一天。',
        impact: { health: 2 }
      }
    ]
  },
];

export const guJiaEndings: Ending[] = [
  {
    id: 's_rank_partner',
    title: 'S 级家庭合伙人',
    description: '看着支付宝余额和刚到账的 2000 元“续约费”，你嘴角比 AK47 还难压。忍辱负重九天，膝盖青了，手糙了，但你成功通过了太后的“试用期考核”。你悟了：在这个家里，只要情绪价值到位，家务干得碎，你就是不可缺少的“核心资产”。外面风大雨大，不如在家做个带编制的啃老专家！',
    condition: (stats) => stats.money > 2200
  },
  {
    id: 'bad_asset',
    title: '强制退市的“不良资产”',
    description: '初十清晨，叫醒你的不是吸尘器，而是老爸扔进来的编织袋。“没钱交伙食费就出去见识社会！”看着负数的存款和家族群里你瘫在沙发上的黑照，你意识到辩解苍白无力。你的“全职儿女”合约因绩效不达标被单方面撕毁。拖着装满剩菜的行李箱站在寒风中，你不得不打开招聘软件，这次是真的为了生存。',
    condition: (stats) => stats.money < 0 || stats.face < -90
  },
  {
    id: 'standby_mode',
    title: '薛定谔的“待机模式”',
    description: '亲戚走后，家里安静得像退潮的海滩。盘算账单，这几天的“工资”刚好抵消精神损耗，不赚不赔。爸妈不再笑脸相迎，但也习惯了你的存在。你就像家里的一台旧家电，虽耗电且卡顿，但还没到被扔掉的地步。既没勇气立刻找工作，也没底气心安理得躺平。生活卡在“加载中”，明天干嘛？大概还是先睡到自然醒吧。',
    condition: () => true // Default ending
  }
];