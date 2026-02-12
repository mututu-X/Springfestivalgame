
import { Character, GameEvent, Ending } from '../../types';

// Reuse default images for generic scenes
const DEFAULT_IMAGES = {
  morning: '/image/common/001.jpg',
  afternoon: '/image/common/002.jpg',
  evening: '/image/common/003.jpg',
  sleep: '/image/common/004.jpg'
};

export const wuRenaiChar: Character = {
  id: 'wu_renai',
  name: '吴仁爱',
  avatar: '/image/roleicon/110.jpg',
  tags: ['大龄剩斗士·相亲遇难', '#此人出售', '#莫欺中年单'],
  roleDescription: '大龄剩斗士·相亲遇难',
  bio: '“我不是剩下的，我是被挑剩下的……不对，我是宁缺毋滥！但在我妈眼里，我就 是个滞销库存。今年我的 KPI 是见完 8 个相亲对象，且保持不吐血。别问要求，是 个活的就行。”',
  baseStats: {
    money: 280000,
    weight: 56,
    face: -100,
    san: 25,
    health: 65,
    luck: 5,
  },
};

export const wuRenaiEvents: GameEvent[] = [
  // Day 1: 腊月二十八 (2月15日)
  {
    id: 'd1_morning',
    day: 1,
    dayLabel: '腊月二十八',
    timeOfDay: 'morning',
    timeLabel: '早上',
    title: '义乌制造的凯旋',
    description: '你在高铁站出站口，为了维持‘大龄精英’的虚假繁荣，你左手拎着两盒燕窝，右手挎着过季打折的奢侈品包。你妈在人群中第一眼就锁定了你——的眼角纹，叹了一口气：‘怎么又是一个人回来？’',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '托运男友',
        title: '托运男友',
        description: '“我带了男朋友，在后面托运呢。”',
        quote: '你妈信了。直到她发现你指的一箱子男装假肢模特。San 值暴跌，但那一刻的虚荣心爽翻了。',
        impact: { face: 10, san: -5 }
      },
      {
        id: 'B',
        text: '职场精英',
        title: '职场精英',
        description: '开启“职场精英”模式，假装在打跨国会议。',
        quote: '你用蹩脚的英语对着蓝牙耳机咆哮，你妈以为你在外面干的是非法传销。',
        impact: { face: -10, health: -5 }
      },
      {
        id: 'C',
        text: '彻底认怂',
        title: '彻底认怂',
        description: '认怂，直接瘫在后座装死。',
        quote: '你妈的叹气声从立体声变成了杜比环绕，你的耳膜逐渐麻木。',
        impact: { san: 5, face: -5 }
      }
    ]
  },
  {
    id: 'd1_afternoon',
    day: 1,
    dayLabel: '腊月二十八',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '家里的“赛博监控”',
    description: '刚进家门，你就发现客厅坐满了‘情报局’成员。邻居王大妈用 5.0 的视力扫描你的全身：‘仁爱啊，这包得好几千吧？有这钱不如留着办嫁妆。’',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '考研暴击',
        title: '考研暴击',
        description: '“王姨，您家那孙子二战考研考上了吗？”',
        quote: '绝杀！王大妈当场卡壳，你赢得了战役，但也成了小区邻里群的头号黑名单。',
        impact: { san: 10, luck: -5 }
      },
      {
        id: 'B',
        text: '自曝高仿',
        title: '自曝高仿',
        description: '“这是高仿，50 块钱三个。”',
        quote: '成功打消了别人借钱的念头，但这辈子你是摘不掉‘穷鬼’的帽子了。',
        impact: { face: -20, money: 0 }
      },
      {
        id: 'C',
        text: '临期礼盒',
        title: '临期礼盒',
        description: '掏出给她们准备的临期礼盒。',
        quote: '拿人手短，她们闭嘴了三秒钟，开始研究包装上的过期日期。',
        impact: { money: -200, luck: 5 }
      }
    ]
  },
  {
    id: 'd1_evening',
    day: 1,
    dayLabel: '腊月二十八',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '全息叹气之夜',
    description: '晚饭桌上，你爸一言不发，每喝一口小酒就看一眼你，然后发出一声长达五秒的叹息。这声音仿佛自带低音炮效果，震撼你的灵魂。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '环保卫士',
        title: '环保卫士',
        description: '“爸，别叹了，再叹二氧化碳超标了。”',
        quote: '你爸把杯子一摔，提前开启了‘你不孝’的批斗大会。',
        impact: { face: -10, san: -10 }
      },
      {
        id: 'B',
        text: '比惨大会',
        title: '比惨大会',
        description: '反向输出，叹得比他还大声。',
        quote: '走父母的路，让他们无路可走。你爸愣住了，以为你在外面欠了高利贷。',
        impact: { san: 15, face: -5 }
      },
      {
        id: 'C',
        text: '狂炫橘子',
        title: '狂炫橘子',
        description: '狂炫砂糖橘，试图用血糖麻痹大脑。',
        quote: '你不仅没脱单，还喜提一嘴溃疡和黄得发亮的双手。',
        impact: { weight: 1, health: -5 }
      }
    ]
  },
  {
    id: 'd1_sleep',
    day: 1,
    dayLabel: '腊月二十八',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '单身狗的深夜',
    description: '躺在冰冷的被窝里，听着父母在隔壁关于你“嫁不出去”的低声争吵。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '审视市场',
        title: '审视市场',
        description: '下载相亲 APP 刷一刷。',
        quote: '全是妖魔鬼怪。看完觉得自己单身挺好的。',
        impact: { san: -5, luck: -2 }
      },
      {
        id: 'B',
        text: '甜宠续命',
        title: '甜宠续命',
        description: '看无脑甜宠剧。',
        quote: '在别人的爱情里流自己的口水。做个好梦。',
        impact: { san: 5, health: -2 }
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
    title: '相亲名单1.0：县城商务精英',
    description: '你妈把你从被窝里拽出来，塞给你一张洗脚城 vip 卡号般的联系方式：‘这是县酒厂的王主任，38 岁，丧偶带俩娃，但这叫有家庭经验！’',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '阴阳怪气',
        title: '阴阳怪气',
        description: '“这经验太丰富了，我怕我不配。”',
        quote: '你妈觉得你在挑肥拣瘦，开始翻你 20 岁时的旧账。',
        impact: { san: -5, face: -5 }
      },
      {
        id: 'B',
        text: '变态要求',
        title: '变态要求',
        description: '“行，让他带孩子一起来，我正好学学带娃。”',
        quote: '你妈被你的变态要求吓到了，暂时撤回了一个相亲对象。',
        impact: { luck: 10, face: -10 }
      },
      {
        id: 'C',
        text: '虚构定位',
        title: '虚构定位',
        description: '打开朋友圈，发一张精致早餐假照并定位上海。',
        quote: '营造一种你已经回沪的假象，结果被你妈从客厅冲进来一顿爆锤。',
        impact: { health: -5, face: 10 }
      }
    ]
  },
  {
    id: 'd2_afternoon',
    day: 2,
    dayLabel: '腊月二十九',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '战袍准备：红秋裤的意志',
    description: '你要去见第一个相亲对象了。你妈非要你穿上那件镶钻的大红羽绒服，说这叫‘喜气’。但在你眼里，这简直是行走的人肉红包。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '土味喜庆',
        title: '土味喜庆',
        description: '妥协，穿上它，再配个烈焰红唇。',
        quote: '你看起来像个刚从春晚联欢会逃出来的伴舞，但意外地吸引了县城暴发户的目光。',
        impact: { face: -20, luck: 10 }
      },
      {
        id: 'B',
        text: '全黑丧风',
        title: '全黑丧风',
        description: '坚持穿全黑冷淡风，再戴个墨镜。',
        quote: '你看起来像是去参加前夫葬礼的，相亲对象还没见你就吓跑了。',
        impact: { face: 10, luck: -10 }
      },
      {
        id: 'C',
        text: '待售红烧肉',
        title: '待售红烧肉',
        description: '在里面套三层保暖内衣，外面披麻袋。',
        quote: '保暖是保暖了，但你看上去像一头待售的红烧肉。',
        impact: { weight: 2, health: 5 }
      }
    ]
  },
  {
    id: 'd2_evening',
    day: 2,
    dayLabel: '腊月二十九',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '第一场处决：星巴克里的逻辑题',
    description: '相亲对象 1 号（王主任）出现了。他喝了一口自带的热水，打量着你说：‘吴小姐，我看你这年纪，现在怀二胎可能算高龄产妇了吧？’',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '发际反杀',
        title: '发际反杀',
        description: '“王哥，看你这发际线，现在治脱发可能算晚期了吧？”',
        quote: '反杀！爽感拉满，但介绍人（你亲小姨）已经在赶来的路上了。',
        impact: { san: 20, face: -10 }
      },
      {
        id: 'B',
        text: '原地修仙',
        title: '原地修仙',
        description: '“其实我这辈子不打算生，我打算修仙。”',
        quote: '他露出看疯子的眼神，买单都没等你就跑了。恭喜，省了 AA 的钱。',
        impact: { money: 30, face: -5 }
      },
      {
        id: 'C',
        text: '微笑受虐',
        title: '微笑受虐',
        description: '微笑着听他吹了一小时的‘白酒产值’。',
        quote: '你成功进化为‘受虐体质’，他在介绍人面前夸你是个贤妻良母。',
        impact: { san: -20, face: 10 }
      }
    ]
  },
  {
    id: 'd2_sleep',
    day: 2,
    dayLabel: '腊月二十九',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '首战复盘',
    description: '今天的相亲让你对男性生物产生了生理性不适。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '闺蜜吐槽',
        title: '闺蜜吐槽',
        description: '在闺蜜群里疯狂吐槽奇葩男。',
        quote: '姐妹们笑疯了。痛苦分享出来就是快乐。',
        impact: { san: 10, health: -2 }
      },
      {
        id: 'B',
        text: '养老美梦',
        title: '养老美梦',
        description: '梦见自己孤独终老，在养老院打麻将。',
        quote: '居然觉得还挺爽的？',
        impact: { san: 5, luck: 0 }
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
    title: '二胎表妹的降维打击',
    description: '走亲戚第一站：大舅家。25 岁的表妹怀里抱着一个，肚里揣着一个，手里还牵着个老公。全家人围着她转，仿佛她是家族里的‘赛博母神’。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '金钱封口',
        title: '金钱封口',
        description: '疯狂塞红包，用钱封住她们的嘴。',
        quote: '钱虽然没了，但那一刻你就是家族最壕的单身富婆，全场噤声。',
        impact: { money: -2000, face: 20 }
      },
      {
        id: 'B',
        text: '英雄奖章',
        title: '英雄奖章',
        description: '“生这么多，国家应该给你颁发英雄奖章。”',
        quote: '阴阳怪气成功，你妈悄悄在桌下踢了你一脚，差点把你踢骨裂。',
        impact: { san: 10, health: -5 }
      },
      {
        id: 'C',
        text: '厕所避难',
        title: '厕所避难',
        description: '躲进厕所刷简历。',
        quote: '厕所是你最后的避风港，虽然味道有点赛博（邻居在烧纸）。',
        impact: { san: 5, luck: 0 }
      }
    ]
  },
  {
    id: 'd3_afternoon',
    day: 3,
    dayLabel: '正月初一',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '亲戚的“关心”矩阵',
    description: '饭后，你被七大姑八大姨围在沙发正中央。二婶问工资，三叔问房贷，四姑问什么时候领证。你感觉自己像是一个正在被拆解的零件。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '卖惨哭穷',
        title: '卖惨哭穷',
        description: '“我失业了，还没交社保，大家能拉扯一把吗？”',
        quote: '亲戚们瞬间四散而去，借口家里煤气没关。这招‘穷鬼战术’极度有效。',
        impact: { face: -30, san: 20 }
      },
      {
        id: 'B',
        text: '大厂炫耀',
        title: '大厂炫耀',
        description: '展示最新的大厂工牌和奖杯照片。',
        quote: '她们更酸了：‘女孩子强有什么用？最后还不是要嫁人。’暴击！',
        impact: { face: 10, san: -15 }
      },
      {
        id: 'C',
        text: '推销葬礼',
        title: '推销葬礼',
        description: '开始给她们推销最新的‘数字葬礼’理财产品。',
        quote: '她们觉得你魔怔了，纷纷去找表妹看孩子了。',
        impact: { luck: -5, san: 10 }
      }
    ]
  },
  {
    id: 'd3_evening',
    day: 3,
    dayLabel: '正月初一',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '第二场处决：国企稳定男',
    description: '第二场相亲对象是在供电局工作的‘体制内之光’。他全身穿着整齐的藏蓝色，开口就是：‘如果你来我这儿，能调动回来考个公吗？女孩子稳定最重要。’',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '内心念经',
        title: '内心念经',
        description: '“我考，我考你个头。”（心里想的）',
        quote: '你表面上点头称是，内心在默念《心经》以防暴力犯罪。',
        impact: { san: -10, face: 5 }
      },
      {
        id: 'B',
        text: '自爆案底',
        title: '自爆案底',
        description: '“其实我有犯罪记录，可能过不了政审。”',
        quote: '他吓得当场删除了你的微信，你的自由值瞬间拉满。',
        impact: { face: -50, san: 30 }
      },
      {
        id: 'C',
        text: '枯燥对决',
        title: '枯燥对决',
        description: '跟他探讨供电系统的赛博安全问题。',
        quote: '他觉得你疯了，你觉得他枯燥。大家一起在星巴克虚度了两小时。',
        impact: { health: -5, luck: -5 }
      }
    ]
  },
  {
    id: 'd3_sleep',
    day: 3,
    dayLabel: '正月初一',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '自我怀疑',
    description: '连续两天的高强度相亲，让你对婚姻制度产生了深刻的怀疑。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '赛博算命',
        title: '赛博算命',
        description: '在网上测“我的真命天子何时出现”。',
        quote: '结果显示：下辈子。气得摔手机。',
        impact: { luck: -5, san: -5 }
      },
      {
        id: 'B',
        text: '养老规划',
        title: '养老规划',
        description: '搜索“高端养老院价格”。',
        quote: '看到价格后，觉得还是得努力赚钱。',
        impact: { san: 10, money: 0 }
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
    title: '家族墓地的沉思',
    description: '大年初四，按习俗去上坟。你妈跪在祖宗坟前，大声喊道：‘祖宗保佑，让仁爱今年赶紧嫁出去吧！’你站在后边，怀疑祖宗们可能会被吵醒。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '跪求财运',
        title: '跪求财运',
        description: '跟着跪下，许愿中彩票。',
        quote: '祖宗可能觉得你比较务实，决定把财运分你一点（五块钱刮刮乐）。',
        impact: { money: 5, luck: 10 }
      },
      {
        id: 'B',
        text: '回怼老妈',
        title: '回怼老妈',
        description: '“妈，祖宗当年要是像你这么催，可能都没我。”',
        quote: '你妈当场表演了一个‘悲从中来’，你成了家族罪人。',
        impact: { face: -20, san: -10 }
      },
      {
        id: 'C',
        text: '烧纸男友',
        title: '烧纸男友',
        description: '在坟头给祖宗烧了几个‘赛博男友’纸扎。',
        quote: '你妈彻底放弃了你，觉得你已经通灵了。',
        impact: { san: 20, face: -30 }
      }
    ]
  },
  {
    id: 'd4_afternoon',
    day: 4,
    dayLabel: '正月初二',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '全羊宴：反刍的流言',
    description: '午饭是家族聚餐的全羊宴。大家一边啃着羊腿，一边聊着谁家的姑娘在北京买房了，谁家的姑娘离婚了。你像是一盘待宰的羔羊，缩在角落。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '悲愤干饭',
        title: '悲愤干饭',
        description: '化悲愤为食欲，狂干三大盘羊肉。',
        quote: '你吃撑了，暂时听不到那些流言蜚语，但你的腰围在抗议。',
        impact: { weight: 2, san: 10 }
      },
      {
        id: 'B',
        text: '乱爆黑料',
        title: '乱爆黑料',
        description: '主动爆料：‘听说那个买房的，首付是高利贷。’',
        quote: '搅屎棍成功！全桌开始讨论高利贷，没人管你单不单身了。',
        impact: { face: -10, san: 15 }
      },
      {
        id: 'C',
        text: '外出喝风',
        title: '外出喝风',
        description: '假装接老板电话，跑出去吃冷风。',
        quote: '风很大，心很凉，但至少胃里没有那些难消化的亲情。',
        impact: { health: -5, san: 5 }
      }
    ]
  },
  {
    id: 'd4_evening',
    day: 4,
    dayLabel: '正月初二',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '第三场处决：健身房教练',
    description: '第三个相亲对象是个‘腱子肉’男，他一上来就摸了摸你的胳膊：‘吴姐，你这体脂率有点高啊，得办卡。’',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '花钱办卡',
        title: '花钱办卡',
        description: '“我有钱办卡，没钱结婚。”',
        quote: '他真的卖了你一张课包，你们成了纯粹的商业伙伴。',
        impact: { money: -3000, weight: -1 }
      },
      {
        id: 'B',
        text: '拒绝叫姐',
        title: '拒绝叫姐',
        description: '“叫谁姐呢？我身份证上是你姑。”',
        quote: '防御性攻击成功，他羞愧地低下了头，并加了你的微信想偷师骂人。',
        impact: { san: 10, face: 5 }
      },
      {
        id: 'C',
        text: '落荒而逃',
        title: '落荒而逃',
        description: '落荒而逃。',
        quote: '你觉得自己不仅老，还胖，且怂。',
        impact: { san: -10, luck: -5 }
      }
    ]
  },
  {
    id: 'd4_sleep',
    day: 4,
    dayLabel: '正月初二',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '身材焦虑',
    description: '被健身教练打击了，站在镜子前捏肚子上的肉。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '立誓断食',
        title: '立誓断食',
        description: '决定明天开始断食。',
        quote: '虽然知道坚持不了，但flag要立。',
        impact: { health: -2, san: -2 }
      },
      {
        id: 'B',
        text: '薯片压惊',
        title: '薯片压惊',
        description: '吃包薯片压压惊。',
        quote: '反正也没人看，胖点怎么了？',
        impact: { weight: 1, san: 5 }
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
    title: '红包通胀危机',
    description: '家里突然来了七八个小孩。你妈在一旁暗示：‘仁爱啊，你是大城市回来的大老板，红包别给少了。’你的余额在尖叫。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '赠送教辅',
        title: '赠送教辅',
        description: '每人发一套《五三教辅》。附赠：好好读书。',
        quote: '孩子们哭了，亲戚们疯了，你爽了。你成了他们童年的阴影。',
        impact: { money: -200, face: -30 }
      },
      {
        id: 'B',
        text: '大方撒币',
        title: '大方撒币',
        description: '大方撒币，每人两百。',
        quote: '你获得了短暂的‘财神爷’称号，但今晚只能躲在被窝里吃泡面。',
        impact: { money: -1600, face: 20 }
      },
      {
        id: 'C',
        text: '锁门躲避',
        title: '锁门躲避',
        description: '假装没看见，把自己锁在书房。',
        quote: '门外传来了‘这孩子越活越自私’的低语。',
        impact: { face: -10, san: 5 }
      }
    ]
  },
  {
    id: 'd5_afternoon',
    day: 5,
    dayLabel: '正月初三',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '同学聚会的凡尔赛巅峰',
    description: '当年的班花带着她的千万富翁老公（秃顶版）和三个保姆出现在饭局。她拉着你的手：‘仁爱，还没成家啊？要不要来我老公公司当前台？’',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '日薪碾压',
        title: '日薪碾压',
        description: '“谢谢，但我现在的日薪够买你这件旗袍。”',
        quote: '虚张声势！全场震惊，你成了当晚的女王，虽然卡里只剩三位数。',
        impact: { face: 30, money: -500 }
      },
      {
        id: 'B',
        text: '询问社保',
        title: '询问社保',
        description: '“前台有五险一金吗？我想提前养老。”',
        quote: '她以为你在开玩笑，结果你真的开始跟她老公聊起劳保待遇。',
        impact: { san: 10, face: -10 }
      },
      {
        id: 'C',
        text: '醉吐班花',
        title: '醉吐班花',
        description: '默默喝酒，直到把自己灌醉。',
        quote: '你吐了班花一身。虽然丢人，但真的解气。',
        impact: { health: -10, luck: -10 }
      }
    ]
  },
  {
    id: 'd5_evening',
    day: 5,
    dayLabel: '正月初三',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '深夜的灵魂拷问',
    description: '凌晨两点，你妈推开你的房门，坐在床边开始抹眼泪：‘我就是怕我们老了，你一个人没人照顾，生病了连个倒水的人都没有……’',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '智能养老',
        title: '智能养老',
        description: '“妈，现在的智能家居可以自动倒水。”',
        quote: '你妈哭得更大声了，觉得你被高科技洗了脑。',
        impact: { san: -5, face: -5 }
      },
      {
        id: 'B',
        text: '抱头痛哭',
        title: '抱头痛哭',
        description: '抱住她，一起痛哭。',
        quote: '家庭矛盾暂时缓解，但你的心理防线全面崩塌。',
        impact: { san: -15, luck: 5 }
      },
      {
        id: 'C',
        text: '战术装睡',
        title: '战术装睡',
        description: '装睡，只要我不睁眼，世界就没人倒水。',
        quote: '她坐了半小时，帮你盖了盖被子，最后长叹一声离去。',
        impact: { san: 5, health: 2 }
      }
    ]
  },
  {
    id: 'd5_sleep',
    day: 5,
    dayLabel: '正月初三',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '失眠夜',
    description: '妈妈的哭声还在耳边回荡。你开始思考孤独终老的可行性。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '计算护工',
        title: '计算护工',
        description: '算一下请护工要多少钱。',
        quote: '存够 500 万就能安享晚年。目标清晰了。',
        impact: { san: 10, money: 0 }
      },
      {
        id: 'B',
        text: '深夜破防',
        title: '深夜破防',
        description: '默默流泪到天亮。',
        quote: '枕头湿了，但明天还要继续战斗。',
        impact: { health: -5, san: -5 }
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
    title: '逃离计划：伪造加班',
    description: '你决定受够了。你让同事发了个虚假的紧急会议通知，一脸凝重地告诉你妈：‘公司服务器炸了，我得去市里的咖啡馆加班。’',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '网吧开黑',
        title: '网吧开黑',
        description: '去网吧开黑，重温青春。',
        quote: '在那一刻，你不是大龄剩女，你是艾泽拉斯的勇士。',
        impact: { san: 20, money: -50 }
      },
      {
        id: 'B',
        text: '真实加班',
        title: '真实加班',
        description: '真的在咖啡馆卷了一整天工作。',
        quote: '工作不会背叛你，但它会让你在过年期间看起来像个倒霉蛋。',
        impact: { money: 1000, san: -10 }
      },
      {
        id: 'C',
        text: '洗浴天堂',
        title: '洗浴天堂',
        description: '去洗浴中心躺平，物理隔绝全世界。',
        quote: '这就是天堂！如果洗浴中心没有遇到你二叔的话。',
        impact: { money: -300, health: 10 }
      }
    ]
  },
  {
    id: 'd6_afternoon',
    day: 6,
    dayLabel: '正月初四',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '偶遇白月光：赛博重逢',
    description: '在市区的奶茶店，你竟然遇到了高中时的暗恋对象。他现在挺着个小肚子，正在给他的双胞胎女儿换尿布。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '装作路人',
        title: '装作路人',
        description: '装作路人，低头疾走。',
        quote: '保住了心中最后一点滤镜，虽然滤镜里都是他现在的尿布味。',
        impact: { face: 5, san: -5 }
      },
      {
        id: 'B',
        text: '坚定不婚',
        title: '坚定不婚',
        description: '大方打招呼：‘嗨，尿布牌子不错。’',
        quote: '他尴尬地笑了笑。那一刻，你突然觉得不结婚也挺好的。',
        impact: { san: 15, face: 10 }
      },
      {
        id: 'C',
        text: '发圈吐槽',
        title: '发圈吐槽',
        description: '发个朋友圈感慨：‘男人终究会变油。’',
        quote: '被共同好友截图发给了他，你被他拉黑了。Nice！',
        impact: { luck: -10, face: -5 }
      }
    ]
  },
  {
    id: 'd6_evening',
    day: 6,
    dayLabel: '正月初四',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '第四场处决：带货男主播',
    description: '晚上被逼着见的这位是当地的‘网红’。他吃着饭还要架着手机直播：‘家人们，给这个大龄单身小姐姐点点关注，咱们帮她找对象！’',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '现场开撕',
        title: '现场开撕',
        description: '抢过手机：‘想要这款包的扣 1，现场开撕！’',
        quote: '你意外地在直播间火了，赚了一笔打赏，还把对方整得怀疑人生。',
        impact: { money: 500, face: 20 }
      },
      {
        id: 'B',
        text: '反手举报',
        title: '反手举报',
        description: '反手一个‘举报该直播间’。',
        quote: '直播间被封了。他对着黑屏破口大骂，你优雅地买单走人。',
        impact: { san: 20, luck: -5 }
      },
      {
        id: 'C',
        text: '菜单挡脸',
        title: '菜单挡脸',
        description: '躲在镜头外，全程用菜单挡脸。',
        quote: '你像个通缉犯，最后还被家人们嘲笑‘长得太丑不敢见人’。',
        impact: { face: -20, san: -10 }
      }
    ]
  },
  {
    id: 'd6_sleep',
    day: 6,
    dayLabel: '正月初四',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '网红梦',
    description: '今天的直播让你发现自己好像有点才艺。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '尝试出道',
        title: '尝试出道',
        description: '注册个账号，发个吐槽相亲的视频。',
        quote: '万一火了呢？那就是大女主剧本了。',
        impact: { luck: 2, san: 5 }
      },
      {
        id: 'B',
        text: '保持理智',
        title: '保持理智',
        description: '算了，互联网是有记忆的，以后还得做人。',
        quote: '删除了草稿箱的视频。',
        impact: { san: -2, face: 5 }
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
    title: '村口的“赛博法庭”',
    description: '初七，你打算去县城买返程票。结果村口那棵大槐树下坐满了‘评审团’。‘吴家那闺女还没走啊？是不是外面混不下去回来招婿了？’',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '虚构收购',
        title: '虚构收购',
        description: '“对，我回来买下整个村子，大家都准备搬迁吧。”',
        quote: '她们愣住了，随后开始讨论哪块地最值钱，成功转移火力。',
        impact: { face: 20, san: 10 }
      },
      {
        id: 'B',
        text: '电驴狂飙',
        title: '电驴狂飙',
        description: '面无表情地骑着电驴狂飙而过。',
        quote: '你留下一阵烟尘，和一句若有若无的‘tui’。',
        impact: { san: 5, face: -5 }
      },
      {
        id: 'C',
        text: '下车理论',
        title: '下车理论',
        description: '下车跟她们理论：‘我单身我快乐！’',
        quote: '永远不要试图叫醒装睡的亲戚，她们用‘以后老了没人埋’把你喷化了。',
        impact: { san: -30, face: -20 }
      }
    ]
  },
  {
    id: 'd7_afternoon',
    day: 7,
    dayLabel: '正月初五',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '第五场处决：玄学大师',
    description: '下午的相亲对象是个半吊子风水师。他盯着你的脸看了半天：‘小姐，你克夫啊，得先给我转 8888 块钱做个法事破一破。’',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '物理玄学',
        title: '物理玄学',
        description: '“巧了，我也看出来了，你今天有血光之灾。”',
        quote: '你举起了沉重的奢侈品包，他落荒而逃。这就是物理玄学。',
        impact: { san: 20, luck: -10 }
      },
      {
        id: 'B',
        text: '买包续命',
        title: '买包续命',
        description: '“8888？我有这钱不如去买个名牌包，死也死得体面。”',
        quote: '你当场在柜台买了包。他无语了，你穷了，但你确实变漂亮了。',
        impact: { money: -8888, face: 30 }
      },
      {
        id: 'C',
        text: '假装中邪',
        title: '假装中邪',
        description: '配合他演戏，假装被鬼附身。',
        quote: '他吓得当场收摊，你成了县城相亲圈的‘鬼故事’女主角。',
        impact: { face: -30, san: 20 }
      }
    ]
  },
  {
    id: 'd7_evening',
    day: 7,
    dayLabel: '正月初五',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '深夜的行李箱博弈',
    description: '你妈开始往你的行李箱里塞东西：20 斤腊肉、30 个土鸡蛋、一袋子花生米……你看着那已经超重 50% 的箱子，陷入了沉思。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '拒绝特产',
        title: '拒绝特产',
        description: '全部拿出来：‘箱子会炸的，真的带不动。’',
        quote: '你妈觉得你嫌弃家里的东西，那是她最后的一点存在感，你亲手摧毁了它。',
        impact: { luck: -10, san: -10 }
      },
      {
        id: 'B',
        text: '快递寄走',
        title: '快递寄走',
        description: '全收下，转头就发快递寄走。',
        quote: '花点钱买个太平，这叫成熟的社交智慧。',
        impact: { money: -200, san: 10 }
      },
      {
        id: 'C',
        text: '接受母爱',
        title: '接受母爱',
        description: '一边塞一边哭，说大城市没肉吃。',
        quote: '你妈被激发了强烈的母爱，又往里塞了两罐咸菜。',
        impact: { weight: 2, face: 5 }
      }
    ]
  },
  {
    id: 'd7_sleep',
    day: 7,
    dayLabel: '正月初五',
    timeOfDay: 'sleep',
    timeLabel: '睡觉',
    title: '最后的宁静',
    description: '行李收拾好了，明天就要逃离这个“爱的牢笼”。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '略有不舍',
        title: '略有不舍',
        description: '看着天花板发呆，居然有点舍不得。',
        quote: '这就是斯德哥尔摩综合征吧。',
        impact: { san: -2, luck: 2 }
      },
      {
        id: 'B',
        text: '预订外卖',
        title: '预订外卖',
        description: '订好了明天到上海后的第一顿外卖。',
        quote: '自由的味道，是麻辣小龙虾味的。',
        impact: { money: -100, san: 5 }
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
    title: '县城大商场的临别秀',
    description: '你妈非要带你去县城最贵的商场买套衣服‘改运’。在一众大红大绿中，你感到自己的审美正在遭受赛博毁灭。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '闭眼刷卡',
        title: '闭眼刷卡',
        description: '闭眼选一套，直接刷卡。',
        quote: '你妈开心了，你的穿搭博主梦破碎了。',
        impact: { money: -3000, face: -10 }
      },
      {
        id: 'B',
        text: '气质不搭',
        title: '气质不搭',
        description: '“这衣服跟我上海那边的气质不搭。”',
        quote: '你成功维护了精英人设，但在店员眼里你就是个装 X 犯。',
        impact: { face: 10, luck: -5 }
      },
      {
        id: 'C',
        text: '改造老妈',
        title: '改造老妈',
        description: '反推销：带你妈去染个最时髦的奶奶灰。',
        quote: '你妈变潮了，她开始忙着自拍，没空催你了。',
        impact: { money: -500, san: 20 }
      }
    ]
  },
  {
    id: 'd8_afternoon',
    day: 8,
    dayLabel: '正月初六',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '无事发生',
    description: '临行前的下午，家里意外地安静。你妈去打麻将炫耀新发型了，你爸去钓鱼了。',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '享受独处',
        title: '享受独处',
        description: '享受难得的宁静。',
        quote: '这才是你想要的春节。',
        impact: { san: 10, health: 2 }
      },
      {
        id: 'B',
        text: '昏睡补觉',
        title: '昏睡补觉',
        description: '睡个昏天黑地。',
        quote: '为明天的早起积蓄能量。',
        impact: { health: 10, san: 5 }
      },
      {
        id: 'C',
        text: '搜刮零食',
        title: '搜刮零食',
        description: '把家里剩下的零食都搜刮走。',
        quote: '回上海也是要买的，能省则省。',
        impact: { money: 50, weight: 1 }
      }
    ]
  },
  {
    id: 'd8_evening',
    day: 8,
    dayLabel: '正月初六',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '散伙饭：最后的体面',
    description: '明天就要走了。这一顿晚饭异常安静，你妈不停地往你碗里夹菜，你爸破天荒地给你倒了一小杯酒。这该死的温情让你有点想哭。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '画饼承诺',
        title: '画饼承诺',
        description: '“别搞这套，明年我争取带个人回来行了吧？”',
        quote: '你许下了无法实现的诺言，空气中充满了 Flag 的芬芳。',
        impact: { san: -5, face: 5 }
      },
      {
        id: 'B',
        text: '沉默防御',
        title: '沉默防御',
        description: '低头干饭，一言不发。',
        quote: '沉默是今晚的康桥，也是你最后的防御工事。',
        impact: { weight: 1, san: 5 }
      },
      {
        id: 'C',
        text: '智能安防',
        title: '智能安防',
        description: '拿出手机给家里买了全套的智能安防系统。',
        quote: '你用科技代替了陪伴，虽然昂贵，但至少让你心里好受点。',
        impact: { money: -4000, san: 15 }
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
    description: '最后一晚，有点失眠。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '熬夜打包',
        title: '熬夜打包',
        description: '熬夜整理行李。',
        quote: '要把每一寸空间都利用好。',
        impact: { health: -5, san: 2 }
      },
      {
        id: 'B',
        text: '母女夜话',
        title: '母女夜话',
        description: '和妈妈聊了会儿天。',
        quote: '发现她头上的白发又多了。心情沉重。',
        impact: { san: -5, luck: 5 }
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
    title: '离家：后备箱的沉重',
    description: '高铁站台，你妈又哭了，你爸还在往你手里塞煮熟的鸡蛋。你感觉自己像是一个去前线打仗的逃兵，行李箱里装满了名为‘关心’的弹药。',
    image: DEFAULT_IMAGES.morning,
    choices: [
      {
        id: 'A',
        text: '加速逃跑',
        title: '加速逃跑',
        description: '“我走了，别太想我。”（加速进站）',
        quote: '逃出生天！虽然有点鼻酸，但自由的味道是如此甜美。',
        impact: { san: 20, luck: 5 }
      },
      {
        id: 'B',
        text: '深情拥抱',
        title: '深情拥抱',
        description: '回头深情拥抱。',
        quote: '你彻底崩溃了，在高铁上哭了一路，把隔壁的小孩都吓清醒了。',
        impact: { san: -10, health: -5 }
      },
      {
        id: 'C',
        text: '高铁相亲',
        title: '高铁相亲',
        description: '在高铁站又加了一个相亲对象的微信。',
        quote: '你变强了，你学会了在苦难中刷 KPI。这个小伙子看起来像是个正常的社畜。',
        impact: { luck: 10, san: -5 }
      }
    ]
  },
  {
    id: 'd9_afternoon',
    day: 9,
    dayLabel: '正月初七',
    timeOfDay: 'afternoon',
    timeLabel: '下午',
    title: '重返赛博荒原',
    description: '回到出租屋，看着满地的灰尘和冷清的空气。你打开那个沉重的箱子，里面除了腊肉，还有一张你妈偷偷塞的存折和一张小纸条。‘在外面吃好点，别委屈。’',
    image: DEFAULT_IMAGES.afternoon,
    choices: [
      {
        id: 'A',
        text: '双倍转账',
        title: '双倍转账',
        description: '立刻给妈转账双倍的钱回去。',
        quote: '你用金钱完成了亲情的闭环，内心得到了片刻的安宁。',
        impact: { money: -10000, san: 30 }
      },
      {
        id: 'B',
        text: '挂面重启',
        title: '挂面重启',
        description: '煮一碗老家带来的挂面。',
        quote: '这一碗面，让你从‘吴仁爱’变回了‘大厂打工人’。生活还得继续。',
        impact: { weight: 1, san: 10 }
      },
      {
        id: 'C',
        text: '定位回归',
        title: '定位回归',
        description: '发个定位，宣告回归：‘还是这里的空气香。’',
        quote: '你在社交媒体上继续扮演精致女孩，只有你胃里的腊肉知道真相。',
        impact: { face: 10, luck: -5 }
      }
    ]
  },
  {
    id: 'd9_evening',
    day: 9,
    dayLabel: '正月初七',
    timeOfDay: 'evening',
    timeLabel: '晚上',
    title: '年终总结：单身万岁？',
    description: '你躺在床上，总结这个春节：8 个相亲对象，3 场亲戚聚会，5 斤肥肉，2 万块开销。你盯着天花板，思考明年的策略。',
    image: DEFAULT_IMAGES.evening,
    choices: [
      {
        id: 'A',
        text: '租赁男友',
        title: '租赁男友',
        description: '明年租个男朋友，绝对不能再这么惨。',
        quote: '你已经开始在二手平台上浏览‘伴侣租赁’服务了。赛博春节，名不虚传。',
        impact: { san: -5, money: 0 }
      },
      {
        id: 'B',
        text: '拉黑亲戚',
        title: '拉黑亲戚',
        description: '彻底断舍离，拉黑所有催婚亲戚。',
        quote: '你赢得了自由，但也成了家族史书里的‘那个疯掉的姑姑’。',
        impact: { san: 50, face: -100 }
      },
      {
        id: 'C',
        text: '彻底认命',
        title: '彻底认命',
        description: '算了，这就是生活。明天还要开周会。',
        quote: '你与世界达成了和解，简称：认命了。',
        impact: { san: 0, health: 0 }
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
    description: '游戏面板弹出，统计 KPI。',
    image: DEFAULT_IMAGES.sleep,
    choices: [
      {
        id: 'A',
        text: '数据复盘',
        title: '数据复盘',
        description: '看看相亲成功率（0%）。',
        quote: '意料之中。',
        impact: { san: -2, face: 0 }
      },
      {
        id: 'B',
        text: '关灯睡觉',
        title: '关灯睡觉',
        description: '关灯睡觉。',
        quote: '明年再战吧，勇士。',
        impact: { health: 5, san: 5 }
      }
    ]
  },
];

export const wuRenaiEndings: Ending[] = [
  {
    id: 'family_specimen',
    title: '家族荣誉陈列室的“标本”',
    description: '亲戚夸你“懂事了”，你妈在广场舞圈终于抬起了头，但你带着几乎归零的San值和缩水的钱包回到了上海。看着老妈发的语音“明年一定要带个对象回来”，你想哭却哭不出来。你赢了面子，却输了里子，活像一具被抽干灵魂、填满稻草的“家族荣誉标本”。你甚至开始期待下一次相亲，只为了证明自己还有点“用”。',
    condition: (stats) => stats.san < 10 || stats.money < 250000
  },
  {
    id: 'cyber_crazy',
    title: '赛博荒原的“五星级疯批”',
    description: '你是被踢出家族群、拉黑邻里圈后哼着歌离开县城的。虽然老妈扬言要断绝关系，但你从未感到如此轻松。回到出租屋，吃着老家带来的挂面，刷到那个被你骂过的带货主播把你做成了鬼畜视频，你反而涨粉两万。在这个赛博荒原里，只要素质够低，就没有人能道德绑架你。恭喜你，做回了快乐的孤狼。',
    condition: (stats) => stats.san > 70 && stats.face < -120
  },
  {
    id: 'sisyphus_return',
    title: '西西弗斯的“返程票”',
    description: '高铁启动的那一刻，你长舒一口气。这九天像是一场混乱的游击战，存款少了点，体重涨了点，被刺痛了几句也怼回去了几句。看着老妈发来的“其实妈也是为你好”，你删删改改回了句“知道了”。你意识到这只是个循环，明年春节战役还会打响。你就像推着“催婚”巨石的西西弗斯，暂时获得了喘息，缝缝补补又是一年。',
    condition: () => true // Default ending
  }
];
