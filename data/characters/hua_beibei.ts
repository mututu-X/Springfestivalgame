import { Character, GameEvent, Ending } from '../../types';

// Default images based on time of day
const DEFAULT_IMAGES = {
  morning: 'https://i.postimg.cc/T1vvSY5P/001.jpg',
  afternoon: 'https://i.postimg.cc/5yWWGNQ2/002.jpg',
  evening: 'https://i.postimg.cc/NFvvVf2M/003.jpg',
  sleep: 'https://i.postimg.cc/fyQQFTST/004.jpg'
};

export const huaBeibeiChar: Character = {
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
};

export const huaBeibeiEvents: GameEvent[] = [
  // Day 1: 腊月二十八
  {
    id: 'd1_morning',
    day: 1,
    dayLabel: '腊月二十八',
    timeOfDay: 'morning',
    timeLabel: '早上',
    title: '春运：赛博迁徙的阵痛',
    description: '拖着分期付款买的日默瓦（其实是拼夕夕平替），你站在高铁站的人海里，感觉自己像个即将被打包压缩的数据包。昨晚通宵做的美甲在晨光中闪耀，那是你最后的倔强。旁边的大叔刚脱了鞋，一股生化武器般的味道试图穿透你的 N95 口罩。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '戴上降噪耳机',
        title: '戴上降噪耳机',
        description: '播放《Bohemian Rhapsody》',
        quote: '现实被屏蔽了，但耳机电量显示 10%，你的焦虑感开始指数级上升。',
        impact: { san: 5, luck: -2 }
      },
      {
        id: 'B',
        text: '星巴克摆拍',
        title: '星巴克摆拍',
        description: '掏出星巴克杯子摆拍发朋友圈',
        quote: '获得 3 个点赞，但为了买这杯咖啡你错过了最佳排队位置，现在只能站着。',
        impact: { face: 5, money: -40 }
      },
      {
        id: 'C',
        text: '方言对喷',
        title: '方言对喷',
        description: '用方言和大叔对喷',
        quote: '大叔被你流利的家乡话震惊，默默穿上了鞋。Vivian 的人设崩了，但花贝贝爽了。',
        impact: { san: 15, face: -5 }
      }
    ]
  },
  {
    id: 'd1_afternoon',
    day: 1,
    dayLabel: '腊月二十八',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '进村：高跟鞋的泥泞滑铁卢',
    description: '出租车只能停在村口，看着那条充满原生态风情的泥巴路，你脚上的 7cm 细跟仿佛在瑟瑟发抖。这是对“都市隶人”的一场降维打击。村口的大黄狗冲你狂吠，仿佛看穿了你兜里比脸还干净的余额。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '硬着头皮走',
        title: '硬着头皮走',
        description: '硬着头皮走过去',
        quote: '鞋跟断了。这可是 A 货里的顶配啊！维修费又是一笔巨款。',
        impact: { money: -200, health: -5 }
      },
      {
        id: 'B',
        text: '召唤老爸',
        title: '召唤老爸',
        description: '打电话叫老爸骑三轮车来接',
        quote: '你坐在满是灰尘的三轮车斗里，像个被查获的落魄名媛，但至少脚保住了。',
        impact: { face: -10, health: 5 }
      },
      {
        id: 'C',
        text: '贿赂大黄',
        title: '贿赂大黄',
        description: '给大黄狗喂一根火腿肠',
        quote: '大黄成了你的舔狗，不仅不叫了，还帮你叼住了一个掉落的化妆包。',
        impact: { money: -5, luck: 5 }
      }
    ]
  },
  {
    id: 'd1_evening',
    day: 1,
    dayLabel: '腊月二十八',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '首夜：信号黑洞与凡尔赛',
    description: '晚饭桌上，七大姑八大姨开始了预热赛。你的手机信号在 E 和 3G 之间反复横跳，就像你的心电图。此时，二婶问出了那个经典问题：“贝贝啊，在上海买车了吗？”',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '抛出牌照梗',
        title: '抛出牌照梗',
        description: '抛出“牌照梗”：太难拍了，不想挂外牌',
        quote: '二婶不懂行情，被你的气势镇住了。你保住了面子，但心里发虚。',
        impact: { face: 5, san: -2 }
      },
      {
        id: 'B',
        text: '实话实说',
        title: '实话实说',
        description: '实话实说：地铁更方便（其实是穷）',
        quote: '空气突然安静。老爸咳嗽了一声，觉得你给他丢人了。',
        impact: { face: -10, san: 5 }
      },
      {
        id: 'C',
        text: '毒舌反击',
        title: '毒舌反击',
        description: '转移话题：二婶你这皱纹多了啊，我有推荐的医美',
        quote: '二婶脸绿了，但这顿饭没人再敢惹你。毒舌属性大爆发。',
        impact: { san: 10, luck: -5 }
      }
    ]
  },
  {
    id: 'd1_sleep',
    day: 1,
    dayLabel: '腊月二十八',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '冷酷的温差',
    description: '躺在家里那个十年没换的硬板床上，没有地暖，没有空调，只有一条重达十斤的大红牡丹棉被。你的脚在冰冷的被窝里无处安放。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '物理抗寒',
        title: '物理抗寒',
        description: '即使穿着 Gucci（仿）的睡衣，也要在里面套上秋裤和袜子',
        quote: 'Vivian 今晚下线了，现在是怕冷的翠花。保命要紧。',
        impact: { health: 5, face: -2 }
      },
      {
        id: 'B',
        text: '意念发热',
        title: '意念发热',
        description: '坚持只穿真丝吊带睡裙，假装自己在供暖区',
        quote: '冻得发抖，但这叫‘美人的坚持’。结果一晚上没睡着。',
        impact: { health: -10, san: -5 }
      }
    ]
  },
  // Day 2: 腊月二十九
  {
    id: 'd2_morning',
    day: 2,
    dayLabel: '腊月二十九',
    timeOfDay: 'morning',
    timeLabel: '早上',
    title: '次日：被鸡鸣终结的懒觉',
    description: '没有 Brunch，没有冰美式。凌晨五点，邻居家的公鸡像吞了低音炮一样把你震醒。被窝外的温度是零下，被窝里是你最后的避难所。膀胱告急，但去厕所需要穿过半个院子。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '意念取暖',
        title: '意念取暖',
        description: '憋着，用意念取暖',
        quote: '你梦见自己变成了忍者神龟，醒来发现并没有。肾功能受到轻微威胁。',
        impact: { health: -5, san: -5 }
      },
      {
        id: 'B',
        text: '军大衣冲锋',
        title: '军大衣冲锋',
        description: '裹着军大衣冲向厕所',
        quote: '刚出门就被隔壁发小撞见。你那精致的‘沪上名媛’形象瞬间崩塌成‘村口二丫’。',
        impact: { face: -15, health: 2 }
      },
      {
        id: 'C',
        text: '账单提神',
        title: '账单提神',
        description: '在被窝里刷欠费通知提神',
        quote: '看到下个月花呗账单，你瞬间清醒了，甚至出了一身冷汗，不冷了。',
        impact: { san: -5, health: 2 }
      }
    ]
  },
  {
    id: 'd2_afternoon',
    day: 2,
    dayLabel: '腊月二十九',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '搜寻：消失的5G与蹭网行动',
    description: '为了追最新的剧（其实是为了回复甲方的夺命连环 call），你必须找到网络。全村只有村委会和小卖部有稳定的 Wi-Fi。你看着手里仅剩 20% 电量的手机，这不仅是通讯工具，这是你的生命维持系统。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '小卖部蹭网',
        title: '小卖部蹭网',
        description: '去小卖部买零食蹭网',
        quote: '买了一堆山寨奥利奥，Wi-Fi 密码竟然是 \'12345678\'。网速感人，勉强发出去了邮件。',
        impact: { money: -20, san: 5 }
      },
      {
        id: 'B',
        text: '屋顶寻信号',
        title: '屋顶寻信号',
        description: '爬上自家屋顶寻找信号',
        quote: '你在寒风中举着手机像个避雷针。被路过的村长拍下来发到了‘相亲群’，配文：这闺女练功呢。',
        impact: { face: -5, luck: -5 }
      },
      {
        id: 'C',
        text: '假装失联',
        title: '假装失联',
        description: '开启飞行模式，假装失联',
        quote: '只要我看不到甲方，甲方就不存在。获得了片刻的内心宁静。',
        impact: { san: 10, money: -10 }
      }
    ]
  },
  {
    id: 'd2_evening',
    day: 2,
    dayLabel: '腊月二十九',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '家宴前奏：厨房里的伪装者',
    description: '妈妈在厨房忙得热火朝天，喊你去帮忙剥蒜。看着刚做的千禧风辣妹延长甲，你陷入了沉思。这是价值 800 块的艺术品，绝不能毁在几瓣大蒜手里。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '戴手套剥蒜',
        title: '戴手套剥蒜',
        description: '戴手套剥蒜',
        quote: '手套被指甲戳破了，指甲缝里全是蒜味，这下真的是‘有味道的女人’了。',
        impact: { san: -5, face: 2 }
      },
      {
        id: 'B',
        text: '声称过敏',
        title: '声称过敏',
        description: '声称“过敏”，只能洗菜',
        quote: '妈妈翻了个白眼：‘以前吃蒜泥白肉没见你过敏？’但还是放过了你的指甲。',
        impact: { face: -2, luck: 2 }
      },
      {
        id: 'C',
        text: '雇佣童工',
        title: '雇佣童工',
        description: '花钱雇邻居小孩剥',
        quote: '资本的力量在农村依然有效。你翘着二郎腿监工，感觉找回了当总监的错觉。',
        impact: { money: -20, san: 10 }
      }
    ]
  },
  {
    id: 'd2_sleep',
    day: 2,
    dayLabel: '腊月二十九',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '守岁的焦虑',
    description: '除夕夜，外面的鞭炮声震耳欲聋。你躺在床上，手机里收到了无数条群发的拜年短信，但你在意的那个人（前任/暧昧对象）始终没发消息。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '主动出击',
        title: '主动出击',
        description: '编辑一条“群发风”的文案发给他，试探反应',
        quote: '假装群发，实则钓鱼。结果等到凌晨两点也没回复。',
        impact: { san: -10, luck: -2 }
      },
      {
        id: 'B',
        text: '屏蔽世界',
        title: '屏蔽世界',
        description: '关机睡觉，拒绝内耗',
        quote: '没有什么比我的美容觉更重要。明天还要早起战斗。',
        impact: { health: 5, san: 5 }
      }
    ]
  },
  // Day 3: 正月初一
  {
    id: 'd3_morning',
    day: 3,
    dayLabel: '正月初一',
    timeOfDay: 'morning',
    timeLabel: '早上',
    title: '围剿：三姑六婆的包围圈',
    description: '初一拜年，亲戚大军压境。客厅里充满了瓜子皮和审视的目光。大姑盯着你的“广州高定”包包，眼神像 X 光机：“贝贝啊，这包得好几万吧？真的假的啊？”',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '死撑到底',
        title: '死撑到底',
        description: '死撑到底：当然是真的，配货配了好久',
        quote: '大姑伸手摸了一把：‘呦，这皮怎么有点硬？’你心跳加速到 180，差点当场去世。',
        impact: { san: -10, face: 5 }
      },
      {
        id: 'B',
        text: '反讽',
        title: '反讽',
        description: '反讽：假的，拼多多九块九包邮',
        quote: '大姑反而不信了：‘这孩子真低调。’ 危机解除，这就叫虚则实之。',
        impact: { face: 5, luck: 5 }
      },
      {
        id: 'C',
        text: '破财免灾',
        title: '破财免灾',
        description: '迅速把包藏到身后，拿出红包',
        quote: '破财免灾。大姑的注意力瞬间转移到了红包厚度上。你的心在滴血，那可是半个月的伙食费。',
        impact: { money: -500, san: 5 }
      }
    ]
  },
  {
    id: 'd3_afternoon',
    day: 3,
    dayLabel: '正月初一',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '战局：熊孩子与化妆品',
    description: '午睡醒来，发现表弟正拿着你的 TF 口红在地上画奥特曼。那可是绝版色号！你的血压瞬间飙升到爆表，理智线像你的丝袜一样崩裂了。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '尖叫夺回',
        title: '尖叫夺回',
        description: '展现成年人的崩溃：尖叫并夺回口红',
        quote: '表弟哭了，全家都来指责你‘跟小孩子计较什么’。你成了恶毒表姐。',
        impact: { face: -10, san: -10 }
      },
      {
        id: 'B',
        text: '鼓励创作',
        title: '鼓励创作',
        description: '微笑：画得真好，姐姐教你画在墙上',
        quote: '表弟在刚刷的大白墙上创作了巨幅壁画。舅妈回来后脸都绿了，痛打表弟。你内心狂喜。',
        impact: { san: 20, money: -200 }
      },
      {
        id: 'C',
        text: '索赔',
        title: '索赔',
        description: '默默算账，找舅妈索赔',
        quote: '舅妈阴阳怪气地给了钱：‘不就个唇膏吗，至于吗？’ 至于！钱到手才是硬道理。',
        impact: { money: 300, face: -5 }
      }
    ]
  },
  {
    id: 'd3_evening',
    day: 3,
    dayLabel: '正月初一',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '催婚：同辈压力锅',
    description: '晚餐时，比你小两岁的表妹带着男朋友来了。两人当众喂饭，大谈明年结婚买房计划。全家人的目光再次聚焦在你身上，仿佛你是那个滞销的库存货。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '虚构男友',
        title: '虚构男友',
        description: '虚构一个“在国外封闭开发”的高管男友',
        quote: '你编得太投入，连自己都快信了。但姥姥让你现在视频连线，你慌得一批。',
        impact: { face: 10, san: -10 }
      },
      {
        id: 'B',
        text: '埋头干饭',
        title: '埋头干饭',
        description: '埋头干饭，假装听不见',
        quote: '化悲愤为食欲，结果吃撑了，扣子崩开一颗。更尴尬了。',
        impact: { weight: 1, face: -5 }
      },
      {
        id: 'C',
        text: '毒舌点评',
        title: '毒舌点评',
        description: '毒舌点评：表妹这戒指钻显黄啊，切工不行',
        quote: '精准打击。表妹笑容凝固，男朋友面红耳赤。你成功破坏了气氛，Good Job。',
        impact: { san: 10, face: 0 }
      }
    ]
  },
  {
    id: 'd3_sleep',
    day: 3,
    dayLabel: '正月初一',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '复盘与修图',
    description: '今天拍了一堆照片，但没一张满意的。背景太杂，脸上卡粉。你躺在床上，打开了某图秀秀，准备开始一项浩大的工程。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '通宵精修',
        title: '通宵精修',
        description: '不修到完美绝不发朋友圈',
        quote: '修掉了背景里的烂拖鞋，拉长了腿，美白了三个度。发出去的那一刻，值了。',
        impact: { health: -5, face: 5 }
      },
      {
        id: 'B',
        text: '放弃治疗',
        title: '放弃治疗',
        description: '随便加个滤镜发了，仅三天可见',
        quote: '累了，就这样吧。反正在村里也没人看。',
        impact: { san: 2, face: -2 }
      }
    ]
  },
  // Day 4: 正月初二
  {
    id: 'd4_morning',
    day: 4,
    dayLabel: '正月初二',
    timeOfDay: 'morning',
    timeLabel: '早上',
    title: '剩菜：无限循环的猪蹄',
    description: '早餐是昨晚的剩菜，午餐预告也是昨晚的剩菜。那盆红烧猪蹄已经热了第三回，黑得像你的未来。你的胃在抗议，渴望着上海便利店的饭团。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '含泪吞咽',
        title: '含泪吞咽',
        description: '含泪吃下去',
        quote: '胶原蛋白补充过量，感觉脸泛油光。妈妈夸你‘好养活’。',
        impact: { weight: 1, health: -2 }
      },
      {
        id: 'B',
        text: '偷偷外卖',
        title: '偷偷外卖',
        description: '偷偷点外卖（如果能送达）',
        quote: '跑腿费 50 块。你在村口像接头特务一样接过了肯德基。真香。',
        impact: { money: -80, san: 10 }
      },
      {
        id: 'C',
        text: '宣称减肥',
        title: '宣称减肥',
        description: '宣称要减肥，只喝水',
        quote: '饿得头昏眼花，听到肚子叫出了交响乐。',
        impact: { weight: -1, health: -5 }
      }
    ]
  },
  {
    id: 'd4_afternoon',
    day: 4,
    dayLabel: '正月初二',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '社交：塑料姐妹花的视频通话',
    description: '上海的同事 Jessica 发来视频邀请。背景是三亚的无边泳池。看看自己身后的花开富贵床单，你必须在 3 秒内搭建一个“我在度假”的假象。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '局部出镜',
        title: '局部出镜',
        description: '只露上半身，背景虚化',
        quote: '你穿着睡裤，上半身是西装。Jessica 问你为什么不开美颜，其实你开了十级。',
        impact: { face: 5, san: -2 }
      },
      {
        id: 'B',
        text: '文字回复',
        title: '文字回复',
        description: '甚至不想接，回消息说“在滑雪”',
        quote: '撒谎的最高境界是文字。虽然窗外只有泥巴，但你心里的雪下得很大。',
        impact: { face: 5, luck: -2 }
      },
      {
        id: 'C',
        text: '直接挂断',
        title: '直接挂断',
        description: '直接挂断，发朋友圈吐槽“信号差”',
        quote: '简单粗暴。顺便屏蔽了 Jessica 的朋友圈，眼不见心不烦。',
        impact: { san: 10 }
      }
    ]
  },
  {
    id: 'd4_evening',
    day: 4,
    dayLabel: '正月初二',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '牌局：人情世故的麻将桌',
    description: '被拉去凑手打麻将。桌上坐着三个长辈，这是一场“只能输不能赢”的政治局。你的钱包在颤抖，因为你知道这不仅仅是运气问题。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '故意点炮',
        title: '故意点炮',
        description: '故意点炮，输钱讨欢心',
        quote: '长辈们笑开了花，夸你‘懂事’。你看着空荡荡的钱包，觉得这‘懂事’太贵了。',
        impact: { money: -200, face: 10 }
      },
      {
        id: 'B',
        text: '大杀四方',
        title: '大杀四方',
        description: '大杀四方，赢光他们的买菜钱',
        quote: '你赢了 200 块。三姑脸黑得像锅底，散场时说你‘这孩子心眼多’。',
        impact: { money: 200, face: -10 }
      },
      {
        id: 'C',
        text: '装傻充愣',
        title: '装傻充愣',
        description: '假装不懂规则，乱打一通',
        quote: '把麻将打成了消消乐。长辈们嫌你笨，把你赶下了桌。解脱！',
        impact: { face: -5, san: 5 }
      }
    ]
  },
  {
    id: 'd4_sleep',
    day: 4,
    dayLabel: '正月初二',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '饥饿的深夜',
    description: '因为晚饭为了维持人设只吃了几口（或者被气饱了），现在凌晨一点，你的肚子开始狂叫。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '潜入厨房',
        title: '潜入厨房',
        description: '摸黑去厨房找剩菜或者泡面',
        quote: '像做贼一样吃了一包干脆面，幸福感爆棚。',
        impact: { weight: 1, san: 5 }
      },
      {
        id: 'B',
        text: '喝水充饥',
        title: '喝水充饥',
        description: '灌一肚子凉白开',
        quote: '名媛是不会吃夜宵的……但名媛会饿得睡不着。',
        impact: { san: -5, health: -2 }
      }
    ]
  },
  // Day 5: 正月初三
  {
    id: 'd5_morning',
    day: 5,
    dayLabel: '正月初三',
    timeOfDay: 'morning',
    timeLabel: '早上',
    title: '相亲：与“老实人”的初次交锋',
    description: '媒人王大妈带着传说中的“优质男”上门了。对方据说是“搞养殖的潜力股”，但看着他没洗的油头和指甲里的黑泥，你感觉你的 San 值正在清零。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '职业假笑',
        title: '职业假笑',
        description: '全程保持职业假笑',
        quote: '脸笑僵了。对方以为你有意思，开始在那滔滔不绝讲母猪产后护理。',
        impact: { san: -10, face: 5 }
      },
      {
        id: 'B',
        text: '谈论艺术',
        title: '谈论艺术',
        description: '开始谈论奢侈品和艺术展',
        quote: '试图用认知壁垒劝退对方。结果他说：‘哦，那个啊，我给前女友买过真的。’ 竟然是个隐形土豪？！',
        impact: { face: -5, money: 0 }
      },
      {
        id: 'C',
        text: '素颜见客',
        title: '素颜见客',
        description: '素颜穿着睡衣见客',
        quote: '对方被你的黑眼圈吓退了。媒人出门时还在嘀咕：‘这姑娘是不是身体不好？’',
        impact: { face: -15, san: 15 }
      }
    ]
  },
  {
    id: 'd5_afternoon',
    day: 5,
    dayLabel: '正月初三',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '暴击：信用卡账单日',
    description: '叮！手机收到短信，多张信用卡账单同时到达战场。那个数字长得像手机号。你坐在院子里的磨盘上，感觉自己卖了这磨盘都还不起最低还款额。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '倒卡',
        title: '倒卡',
        description: '拆东墙补西墙（倒卡）',
        quote: '手续费又是一笔支出。你的金融杂技玩得越来越惊险了。',
        impact: { money: -50, san: -5 }
      },
      {
        id: 'B',
        text: '啃老',
        title: '啃老',
        description: '向老妈撒娇借点“周转资金”',
        quote: '被骂了半小时‘败家女’，但成功搞到 2000 块。尊严？多少钱一斤？',
        impact: { face: -10, money: 2000 }
      },
      {
        id: 'C',
        text: '卖闲置',
        title: '卖闲置',
        description: '挂咸鱼卖闲置（那个假包）',
        quote: '含泪把‘广州高定’挂了上去。被人砍价到 300 包邮，心在滴血。',
        impact: { money: 300, san: -5 }
      }
    ]
  },
  {
    id: 'd5_evening',
    day: 5,
    dayLabel: '正月初三',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '独处：天台上的 emo 时刻',
    description: '为了躲避家里压抑的气氛，你躲到了平房顶上。月亮很圆，像个巨大的硬币。你想起上海的出租屋，虽然小，但那是自由。现在，你只是个欠债的村姑。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '网抑云',
        title: '网抑云',
        description: '发网抑云动态',
        quote: '‘生而为人，我很抱歉，尤其是没钱的时候。’ 收获了一堆‘哈哈哈哈’的评论。',
        impact: { face: -2, san: 5 }
      },
      {
        id: 'B',
        text: '发誓攒钱',
        title: '发誓攒钱',
        description: '对着月亮发誓明年一定攒钱',
        quote: '月亮：我不信。你自己都不信。',
        impact: { san: 2, luck: 0 }
      },
      {
        id: 'C',
        text: '偷吃红薯',
        title: '偷吃红薯',
        description: '下去偷吃灶台上的红薯干',
        quote: '碳水化合物是唯一的救赎。这一刻，你原谅了世界。',
        impact: { weight: 1, san: 10 }
      }
    ]
  },
  {
    id: 'd5_sleep',
    day: 5,
    dayLabel: '正月初三',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '后悔的余韵',
    description: '刚把包挂上咸鱼卖了，现在躺在床上越想越后悔。那个包虽然是 A 货，但也是挑了好久才买到的。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '撤回交易',
        title: '撤回交易',
        description: '趁买家还没拍，赶紧下架',
        quote: '包还在，债也还在。但心里踏实了。穷就穷吧。',
        impact: { san: 5, money: -300 }
      },
      {
        id: 'B',
        text: '硬着心肠',
        title: '硬着心肠',
        description: '盯着余额，催眠自己“旧的不去新的不来”',
        quote: '含泪入睡，梦里自己中了彩票。',
        impact: { san: -2, money: 0 }
      }
    ]
  },
  // Day 6: 正月初四
  {
    id: 'd6_morning',
    day: 6,
    dayLabel: '正月初四',
    timeOfDay: 'morning',
    timeLabel: '早上',
    title: '逃离：伪造的加班令',
    description: '为了不再去走亲戚，你决定动用“尚方宝剑”。你假装接到了老板的电话，神情严肃，满口“赋能”、“抓手”、“闭环”。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '大声开会',
        title: '大声开会',
        description: '在客厅大声开“电话会议”',
        quote: '全家人大气不敢出，以为你在谈几亿的项目。其实你在跟 Siri 聊天。',
        impact: { face: 5, san: 5 }
      },
      {
        id: 'B',
        text: '锁门写PPT',
        title: '锁门写PPT',
        description: '锁门，声称要写 PPT',
        quote: '成功获得了一上午的清净时光。你在被窝里刷完了两部综艺。',
        impact: { san: 10, health: 2 }
      },
      {
        id: 'C',
        text: '表演过度',
        title: '表演过度',
        description: '表演过度，被老爸看穿',
        quote: '老爸冷冷地说：‘你们公司大年初六还抓手？抓瞎吧。’',
        impact: { face: -5, luck: -2 }
      }
    ]
  },
  {
    id: 'd6_afternoon',
    day: 6,
    dayLabel: '正月初四',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '八卦：村口情报中心的挑战',
    description: '路过村口，被情报中心（一群嗑瓜子的大妈）拦截。她们掌握着全村的秘密，现在想挖掘你的。这是比 FBI 审讯更可怕的环节。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '主动爆料',
        title: '主动爆料',
        description: '主动爆料别人的八卦转移视线',
        quote: '你编排了隔壁二狗子的绯闻。大妈们像闻到血的鲨鱼一样游走了。虽不道德，但有用。',
        impact: { luck: -2, san: 5 }
      },
      {
        id: 'B',
        text: '装傻充愣',
        title: '装傻充愣',
        description: '装傻充愣，只笑不说话',
        quote: '被判定为‘在大城市读傻了’。',
        impact: { face: -5, san: -2 }
      },
      {
        id: 'C',
        text: '反客为主',
        title: '反客为主',
        description: '反客为主：婶儿，听说您儿媳妇又吵架了？',
        quote: '魔法打败魔法！大妈脸色一变，匆匆回家救火去了。',
        impact: { face: 5, san: 10 }
      }
    ]
  },
  {
    id: 'd6_evening',
    day: 6,
    dayLabel: '正月初四',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '暗黑料理：辣条配红酒',
    description: '吃腻了清汤寡水的家常菜，你的味蕾在咆哮。你偷偷从抽屉里翻出一包卫龙，又倒了一杯家里剩的长城干红。这是属于都市隶人的朋克养生。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '尽情享用',
        title: '尽情享用',
        description: '尽情享用',
        quote: '虽然第二天可能会拉肚子，但此刻灵魂得到了升华。这才是人过的日子！',
        impact: { health: -5, san: 15 }
      },
      {
        id: 'B',
        text: '分组可见',
        title: '分组可见',
        description: '拍照发朋友圈分组可见',
        quote: '配文‘Home sweet home’，屏蔽了家里亲戚。获得了 5 个赞。',
        impact: { face: 5, san: 5 }
      },
      {
        id: 'C',
        text: '被发现',
        title: '被发现',
        description: '被妈妈发现偷吃垃圾食品',
        quote: '辣条被没收，还被灌了一碗难喝的养生汤。',
        impact: { face: -2, health: 2 }
      }
    ]
  },
  {
    id: 'd6_sleep',
    day: 6,
    dayLabel: '正月初四',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '多巴胺戒断',
    description: '刷了三个小时抖音，眼睛酸痛，但就是不想睡。因为睡着了明天就要来了，而明天又是无聊的一天。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '报复性熬夜',
        title: '报复性熬夜',
        description: '继续刷，直到手机砸脸',
        quote: '黑眼圈更重了，但感觉赢回了时间。',
        impact: { health: -5, san: 2 }
      },
      {
        id: 'B',
        text: '冥想',
        title: '冥想',
        description: '听着冥想音频入睡',
        quote: '在‘吸气、呼气’中，焦虑暂时缓解了。',
        impact: { san: 5, health: 2 }
      }
    ]
  },
  // Day 7: 正月初五
  {
    id: 'd7_morning',
    day: 7,
    dayLabel: '正月初五',
    timeOfDay: 'morning',
    timeLabel: '早上',
    title: '备战：易容术（全妆）',
    description: '今天是同学聚会，也就是年度凡尔赛锦标赛。你拿出了全套家伙什：遮瑕、高光、修容、假睫毛。这不只是化妆，这是画皮。必须让那帮人看看，谁才是村里的 Vivian。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '纯欲伪素颜',
        title: '纯欲伪素颜',
        description: '画个“纯欲伪素颜”妆',
        quote: '耗时 3 小时，看起来像刚洗完脸一样清纯，其实粉底比墙灰还厚。完美。',
        impact: { face: 10, money: -10 }
      },
      {
        id: 'B',
        text: '欧美大浓妆',
        title: '欧美大浓妆',
        description: '欧美截断大浓妆',
        quote: '在村里略显突兀，出门把邻居大爷吓了一跳：‘这孩咋跟鬼似的？’',
        impact: { face: -5, luck: -2 }
      },
      {
        id: 'C',
        text: '松弛感',
        title: '松弛感',
        description: '只涂口红，主打一个松弛感',
        quote: '到了现场发现连当年的班花都打了玻尿酸，你输在了起跑线上。',
        impact: { face: -10, san: -5 }
      }
    ]
  },
  {
    id: 'd7_afternoon',
    day: 7,
    dayLabel: '正月初五',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '聚会：名利场修罗场',
    description: '包间里，当年的班长（现保险推销员）正在激昂陈词，当年的学渣（现拆迁户）戴着大金链子。你试图夹缝生存，但曾经的死对头“绿茶”小美走向了你，手里晃着奔驰钥匙。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '先发制人',
        title: '先发制人',
        description: '先发制人：哎呀小美，你这双眼皮在哪割的？有点宽啊',
        quote: '小美笑容僵硬。周围同学发出了憋笑的声音。K.O.',
        impact: { san: 15, face: 5 }
      },
      {
        id: 'B',
        text: '低调炫穷',
        title: '低调炫穷',
        description: '低调炫穷：我在上海也就是混口饭吃，不像你们大富大贵',
        quote: '大家觉得你深不可测，拆迁户甚至想给你借钱。',
        impact: { face: 5, luck: 5 }
      },
      {
        id: 'C',
        text: '抢着买单',
        title: '抢着买单',
        description: '抢着买单（期待有人拦着）',
        quote: '该死！居然没有人拦着！你刷爆了信用卡，心在滴血，脸上在笑。',
        impact: { money: -1000, face: 20 }
      }
    ]
  },
  {
    id: 'd7_evening',
    day: 7,
    dayLabel: '正月初五',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: 'KTV：走调的青春',
    description: '聚会下半场，KTV。灯红酒绿中，初恋男友（已秃顶）点了一首《同桌的你》含情脉脉地看着你。你手里拿着拼盘里的西瓜，心里盘算着怎么逃跑。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '点歌回敬',
        title: '点歌回敬',
        description: '点一首《算什么男人》回敬',
        quote: '全场起哄。初恋脸红成了猪肝色。你感觉自己是女王。',
        impact: { san: 10, face: 5 }
      },
      {
        id: 'B',
        text: '借口溜走',
        title: '借口溜走',
        description: '借口上厕所，直接溜走',
        quote: '逃出生天！外面的冷风让你清醒，这帮人太油腻了。',
        impact: { san: 10, face: -2 }
      },
      {
        id: 'C',
        text: '喝高抢麦',
        title: '喝高抢麦',
        description: '喝高了，抢麦当麦霸',
        quote: '你唱破音了八次，还抱着麦克风痛哭流涕。明天你会想移民火星。',
        impact: { face: -15, health: -5 }
      }
    ]
  },
  {
    id: 'd7_sleep',
    day: 7,
    dayLabel: '正月初五',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '社交宿醉',
    description: '耳边还回荡着 KTV 的嘈杂声，脑子里不断重播今天聚会的尴尬瞬间。比如抢买单时那0.1秒的犹豫，是不是被看见了？',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '脚趾扣地',
        title: '脚趾扣地',
        description: '反复回想尴尬细节，在床上翻来覆去',
        quote: '在脑海里重演了 100 遍‘如果当时我这么说就好了’。',
        impact: { san: -5, health: -2 }
      },
      {
        id: 'B',
        text: '拉黑删除',
        title: '拉黑删除',
        description: '把几个讨厌的同学微信删了，甚至拉黑了初恋',
        quote: '清理了通讯录，感觉空气都清新了。',
        impact: { san: 10 }
      }
    ]
  },
  // Day 8: 正月初六
  {
    id: 'd8_morning',
    day: 8,
    dayLabel: '正月初六',
    timeOfDay: 'morning',
    timeLabel: '早上',
    title: '宿醉：悔恨的泪水',
    description: '头痛欲裂。昨晚的记忆碎片攻击着你的大脑：刷爆的卡、走调的歌、以及可能加回来的前任微信。你发誓再喝酒就是狗。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '查看微信',
        title: '查看微信',
        description: '查看微信余额和聊天记录',
        quote: '看到账单，San 值狂掉。看到给前任发的‘在吗’，你想把手剁了。',
        impact: { san: -10, face: -5 }
      },
      {
        id: 'B',
        text: '喝醒酒汤',
        title: '喝醒酒汤',
        description: '喝妈妈煮的醒酒汤',
        quote: '虽然被骂了一顿，但身体舒服多了。世上只有妈妈好。',
        impact: { health: 10, san: 5 }
      },
      {
        id: 'C',
        text: '赖床',
        title: '赖床',
        description: '赖床不起，假装生病',
        quote: '躲过了做早饭，但没躲过妈妈的念叨攻击。',
        impact: { health: 5, face: -5 }
      }
    ]
  },
  {
    id: 'd8_afternoon',
    day: 8,
    dayLabel: '正月初六',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '打包：特产的物理压缩',
    description: '离别在即，妈妈开启了“空间折叠术”模式。土鸡蛋、腊肉、大白菜、甚至还有一只活鸡，都试图塞进你那精致的 20 寸登机箱里。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '极力抗拒',
        title: '极力抗拒',
        description: '极力抗拒：妈，这箱子很贵的！',
        quote: '抗议无效。妈妈说：‘箱子就是用来装东西的，不然供着？’',
        impact: { face: 2, luck: -2 }
      },
      {
        id: 'B',
        text: '换编织袋',
        title: '换编织袋',
        description: '默默接受，换个大编织袋',
        quote: '你提着红蓝编织袋，彻底放弃了名媛人设。但这些吃的回去能省一个月饭钱！真香。',
        impact: { face: -15, money: 100 }
      },
      {
        id: 'C',
        text: '试图筛选',
        title: '试图筛选',
        description: '试图筛选：只要腊肉，不要活鸡',
        quote: '经过一番讨价还价，活鸡被留下了，但你多背了十斤红薯。',
        impact: { san: 5, health: -2 }
      }
    ]
  },
  {
    id: 'd8_evening',
    day: 8,
    dayLabel: '正月初六',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '夜话：最后的灵魂拷问',
    description: '最后一晚，爸妈坐在床边，气氛突然温情又沉重。他们塞给你一叠皱巴巴的现金，“在大城市别太辛苦，没钱就说。”',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '收下钱',
        title: '收下钱',
        description: '眼眶红了，收下钱',
        quote: '还是爸妈疼你。虽然这点钱不够还卡债，但暖心。你决定下个月少买个包。',
        impact: { money: 1000, face: -5 }
      },
      {
        id: 'B',
        text: '硬气拒绝',
        title: '硬气拒绝',
        description: '硬气拒绝：我有钱！（假装）',
        quote: '死要面子活受罪。爸妈把钱收回去了，你心里那个悔啊。',
        impact: { face: 10, money: 0 }
      },
      {
        id: 'C',
        text: '立flag',
        title: '立flag',
        description: '收下钱，发誓明年带个真的男朋友回来',
        quote: '爸妈开心坏了。你给自己挖了个巨大的坑，明年咋办明年再说吧。',
        impact: { money: 1000, san: -5 }
      }
    ]
  },
  {
    id: 'd8_sleep',
    day: 8,
    dayLabel: '正月初六',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '离别的倒计时',
    description: '行李箱已经放在了门口。你看着熟悉的旧房间，突然有点舍不得。明天就要回到那个冷冰冰的出租屋了。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '感伤失眠',
        title: '感伤失眠',
        description: '睁着眼睛看天花板，回忆小时候',
        quote: '故乡容不下肉身，他乡容不下灵魂。矫情了一整晚。',
        impact: { san: -5, health: -2 }
      },
      {
        id: 'B',
        text: '期待回城',
        title: '期待回城',
        description: '想到回去就能喝奶茶、点外卖，兴奋地睡着了',
        quote: '对不起，但我真的更爱城市的便利。',
        impact: { san: 20 }
      }
    ]
  },
  // Day 9: 正月初七
  {
    id: 'd9_morning',
    day: 9,
    dayLabel: '正月初七',
    timeOfDay: 'morning',
    timeLabel: '早上',
    title: '启程：后备箱的爱与负担',
    description: '清晨的雾气中，你坐上了去县城的车。回头看，父母站在村口挥手，身影越来越小。你的行李箱重得像灌了铅，那是沉甸甸的爱和卡路里。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '戴上墨镜',
        title: '戴上墨镜',
        description: '戴上墨镜，不让眼泪流下来',
        quote: '气氛烘托到位了。司机师傅问：‘姑娘，沙眼啊？’ 感动瞬间破功。',
        impact: { face: 2, san: 2 }
      },
      {
        id: 'B',
        text: '发朋友圈',
        title: '发朋友圈',
        description: '发朋友圈告别：再见，我的精神避难所',
        quote: '定位显示‘xx村’。评论区：‘原来 Vivian 是村里的啊’。无所谓了，反正回上海又是好汉一条。',
        impact: { face: 5, san: 5 }
      },
      {
        id: 'C',
        text: '检查行李',
        title: '检查行李',
        description: '检查有没有漏带东西',
        quote: '发现老妈偷偷在包夹层里塞了个平安符。San 值回满。',
        impact: { luck: 5, san: 10 }
      }
    ]
  },
  {
    id: 'd9_afternoon',
    day: 9,
    dayLabel: '正月初七',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '返沪：穿越结界',
    description: '高铁飞驰，窗外的景色从田野变成高楼。你正在经历一场“生物变态”过程，从“花二丫”变回“花贝贝”。你需要调整状态，准备迎接明天早高峰的地铁。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '变身',
        title: '变身',
        description: '补妆，喷香水，换回高跟鞋',
        quote: '仪式感拉满。虽然脚还是很痛，但你是都市丽人了。',
        impact: { face: 10, health: -2 }
      },
      {
        id: 'B',
        text: '工作状态',
        title: '工作状态',
        description: '整理工作邮件，进入战斗状态',
        quote: '看到 99+ 的未读消息，想跳车。这就是社畜的宿命。',
        impact: { san: -5, face: 5 }
      },
      {
        id: 'C',
        text: '算账',
        title: '算账',
        description: '计算这次回家的总花销',
        quote: '路费+红包+装 X 成本 > 存款。心态崩了。',
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
    title: '归位：狭小却自由的笼子',
    description: '推开出租屋的门，空气里有一股陈旧的灰尘味。6 平米的房间，还没有老家的厕所大。但你把名牌包往床上一扔，点了一份外卖，深吸一口气：这是自由的味道（也是穷的味道）。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '煮面',
        title: '煮面',
        description: '煮一碗老妈带的腊肉面',
        quote: '真香。这味道能支撑你再战半年。明年春节……再说吧。',
        impact: { health: 5, san: 10 }
      },
      {
        id: 'B',
        text: '存钱计划',
        title: '存钱计划',
        description: '立刻制定“存钱计划”',
        quote: '写下了宏伟计划。虽然你知道坚持不过三天，但今晚睡得踏实。',
        impact: { san: 5, money: 0 }
      },
      {
        id: 'C',
        text: '买包',
        title: '买包',
        description: '刷信用卡买个新包抚慰自己',
        quote: '死性不改！精致穷的轮回再次开始。欢迎回到地狱，花贝贝。',
        impact: { money: -2000, san: 20 }
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
    description: '闹钟定在了 7:30。你躺在床上，周围死一般的寂静。假期真的结束了。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '脑内演练',
        title: '脑内演练',
        description: '在脑子里把明天见到老板的第一句话、第一个表情演练了十遍',
        quote: '不能笑得太开心（显得没心没肺），也不能太沉重（显得不想上班）。要在那一瞬间拿捏住‘专业且渴望搞钱’的分寸。',
        impact: { san: -5, luck: 2 }
      },
      {
        id: 'B',
        text: '贤者时间',
        title: '贤者时间',
        description: '看着窗外的城市灯火，突然产生了一秒钟的厌世念头，然后迅速掐灭',
        quote: '这就是生活。为了这点碎银几两，为了这点面子…睡吧，Vivian，明天还要战斗。',
        impact: { san: 2, health: 2 }
      }
    ]
  },
];

export const huaBeibeiEndings: Ending[] = [
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
];
