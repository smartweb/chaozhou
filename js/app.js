/* ===========================================================
   潮州市研学管理服务平台 — App shell + mock data + router
   =========================================================== */

/* ---------- SVG icon set (inline, no dependency) ---------- */
const ICONS = {
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>',
  bell: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>',
  scan: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M7 12h10"/></svg>',
  chevR: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m9 18 6-6-6-6"/></svg>',
  chevL: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3 6.5 7 .9-5 4.9 1.3 7L12 18l-6.3 3.3L7 14.3 2 9.4l7-.9L12 2z"/></svg>',
  route: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/></svg>',
  book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
  home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9.5 12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-7h-6v7H4a1 1 0 0 1-1-1V9.5z"/></svg>',
  news: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 22h16a2 2 0 0 0 2-2V4H6a2 2 0 0 0-2 2v16Z"/><path d="M4 6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2"/><path d="M18 14h-8M15 18h-5M10 6h8v4h-8V6Z"/></svg>',
  mine: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>',
  briefcase: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
  gov: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M5 21V10l7-5 7 5v11M9 21v-6h6v6"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M20 6 9 17l-5-5"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"/></svg>',
  cart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>',
  award: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>',
  doc: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>',
  settings: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',
  layers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 17l9 5 9-5"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
  money: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></svg>',
};

/* ---------- Mock data ---------- */
const IMG = (seed, w = 600, h = 400) => `https://picsum.photos/seed/chaozhou-${seed}/${w}/${h}`;

const DATA = {
  /* Base list (研学基地) — 21 bases per spec */
  bases: [
    { id: 'b1', name: '广济桥非遗研学基地', level: '国家级', area: '湘桥区', img: IMG('guangji', 600, 400), tags: ['非遗', '历史'], rating: 4.9, students: 12800 },
    { id: 'b2', name: '牌坊街文化研学基地', level: '省级', area: '湘桥区', img: IMG('paifang', 600, 400), tags: ['文化', '建筑'], rating: 4.8, students: 9600 },
    { id: 'b3', name: '潮州窑陶瓷研学基地', level: '省级', area: '枫溪区', img: IMG('ciqi', 600, 400), tags: ['陶瓷', '工艺'], rating: 4.7, students: 7200 },
    { id: 'b4', name: '凤凰山茶文化基地', level: '国家级', area: '凤凰镇', img: IMG('fenghuang', 600, 400), tags: ['茶艺', '生态'], rating: 4.9, students: 15400 },
    { id: 'b5', name: '韩文公祠国学基地', level: '省级', area: '韩江东岸', img: IMG('hanwen', 600, 400), tags: ['国学', '历史'], rating: 4.8, students: 8900 },
    { id: 'b6', name: '龙湖古寨民俗基地', level: '市级', area: '潮安区', img: IMG('longhu', 600, 400), tags: ['民俗', '古建'], rating: 4.6, students: 5400 },
  ],

  /* Routes (研学路线) */
  routes: [
    { id: 'r1', title: '潮州古城非遗寻踪 2 日研学', img: IMG('route1', 800, 500), price: 588, original: 768, days: 2, age: '8-15岁', spots: 6, rating: 4.9, signed: 326, tags: ['非遗体验', '名家授课', '深度游'],
      desc: '走进广济桥、牌坊街、非遗大师工作室，亲手制作潮绣、木雕、手拉朱泥壶，感受千年古城的文化脉搏。' },
    { id: 'r2', title: '凤凰山单丛茶文化研学营', img: IMG('route2', 800, 500), price: 988, original: 1280, days: 3, age: '10-17岁', spots: 4, rating: 4.9, signed: 184, tags: ['茶艺', '自然生态', '劳动教育'],
      desc: '登临凤凰山，访茶农、采单丛、学炒青、品茶道，在云雾茶海中完成一份属于自己的茶文化调研报告。' },
    { id: 'r3', title: '红棉英烈红色研学之路', img: IMG('route3', 800, 500), price: 368, original: 468, days: 1, age: '12-18岁', spots: 5, rating: 4.7, signed: 512, tags: ['红色教育', '爱国主义'],
      desc: '探访涵碧楼、茂芝会议旧址，重温革命历史，传承红色基因，是一堂行走的思政课。' },
    { id: 'r4', title: '潮州陶瓷工业研学之旅', img: IMG('route4', 800, 500), price: 458, original: 568, days: 2, age: '10-16岁', spots: 4, rating: 4.6, signed: 233, tags: ['工艺', '工业游', '实践'],
      desc: '从枫溪古窑到现代陶瓷工厂，见证泥土到艺术品的蜕变，亲手拉坯成型，烧制专属陶瓷作品。' },
  ],

  /* Courses (研学课程) */
  courses: [
    { id: 'c1', title: '潮绣技艺大师课', img: IMG('course1', 800, 500), price: 128, sessions: 4, rating: 4.9, students: 1240, tags: ['非遗', '手工'],
      desc: '中国工艺美术大师亲授潮绣针法，从基础到完成一幅小型作品，传承百年技艺。' },
    { id: 'c2', title: '潮州木雕入门课', img: IMG('course2', 800, 500), price: 168, sessions: 6, rating: 4.8, students: 860, tags: ['非遗', '工艺'],
      desc: '了解潮州金漆木雕的历史与技法，在老师指导下完成一件浮雕作品。' },
    { id: 'c3', title: '手拉朱泥壶制作课', img: IMG('course3', 800, 500), price: 198, sessions: 4, rating: 4.9, students: 1520, tags: ['茶器', '手工'],
      desc: '枫溪手拉壶传承人现场教学，体验古老的车床手拉成型工艺，制作专属朱泥壶。' },
    { id: 'c4', title: '潮州工夫茶艺课', img: IMG('course4', 800, 500), price: 88, sessions: 2, rating: 4.7, students: 2180, tags: ['茶艺', '文化'],
      desc: '学习正宗潮州工夫茶二十一式，掌握关公巡城、韩信点兵等经典冲泡技法。' },
    { id: 'c5', title: '潮剧脸谱绘画课', img: IMG('course5', 800, 500), price: 98, sessions: 3, rating: 4.6, students: 640, tags: ['戏曲', '美术'],
      desc: '走进潮剧后台，了解生旦净丑，亲手绘制属于自己的潮剧脸谱。' },
  ],

  /* News (研学资讯) */
  news: [
    { id: 'n1', title: '潮州市教育局发布 2026 年中小学生研学实践活动通知', img: IMG('news1', 300, 200), date: '07-01', source: '教育局', hot: true },
    { id: 'n2', title: '广济桥非遗研学基地获评"全国中小学生研学实践教育基地"', img: IMG('news2', 300, 200), date: '06-28', source: '潮州日报' },
    { id: 'n3', title: '凤凰单丛茶文化研学季正式开启，名额限时开放', img: IMG('news3', 300, 200), date: '06-25', source: '平台公告' },
    { id: 'n4', title: '21 家研学基地完成年度资质复审，全部通过', img: IMG('news4', 300, 200), date: '06-22', source: '平台运维' },
    { id: 'n5', title: '文广旅体局：暑期研学路线安全与服务双升级', img: IMG('news5', 300, 200), date: '06-20', source: '文广旅体' },
  ],

  /* School workflow steps */
  schoolSteps: [
    { id: 1, title: '日期确定 · 预报名', desc: '学校收集预报名名单人数（男女数量、优惠减免、老师人数）', status: 'done' },
    { id: 2, title: '勾选菜单 · 形成出行需求单', desc: '勾选基地、交通、旅行社、保险、导师、餐饮、住宿', status: 'done' },
    { id: 3, title: '被选单位复核', desc: '交通复核等执行单位确认接单能力', status: 'done' },
    { id: 4, title: '推送行政单位审核', desc: '教育、文广旅体、产投、交运多部门联合审核', status: 'active' },
    { id: 5, title: '形成可执行业务单', desc: '产投组织分发，各端口确认联系人与总执行人', status: 'wait' },
    { id: 6, title: '推送家长报名缴费', desc: '形成活动报名单，家长完成报名、缴费、购险、签约', status: 'wait' },
    { id: 7, title: '系统推送订单 · 各环节确认', desc: '确定人数后，订单分发至各执行环节复核', status: 'wait' },
    { id: 8, title: '活动执行 · 评价', desc: '活动结束后，学校对各个环节进行评价', status: 'wait' },
    { id: 9, title: '系统根据评价结算', desc: '依据评价结果，自动结算各执行环节费用', status: 'wait' },
  ],

  /* Govt audit tasks */
  govtTasks: [
    { id: 'g1', dept: '文广旅体局', title: '湘桥区城西中学 · 非遗研学路线', desc: '广济桥 + 牌坊街 · 共 320 人', status: '待审核', date: '2026-07-02' },
    { id: 'g2', dept: '交通运输局', title: '潮安区实验中学 · 凤凰茶研学', desc: '需 8 辆 45 座大巴 · 共 360 人', status: '待审核', date: '2026-07-02' },
    { id: 'g3', dept: '教育局', title: '饶平二中 · 红色研学路线', desc: '已报备 · 待复核', status: '已通过', date: '2026-07-01' },
    { id: 'g4', dept: '产投集团', title: '市实验学校 · 陶瓷工业研学', desc: '业务单分发 · 待确认执行人', status: '待审核', date: '2026-07-03' },
  ],
};

/* ---------- Router ---------- */
const routes = {
  'home': () => renderHome(),
  'routes': () => renderList('routes'),
  'courses': () => renderList('courses'),
  'bases': () => renderList('bases'),
  'news': () => renderList('news'),
  'mine': () => renderMine(),
  'flow': () => renderFlow(),
  'govt': () => renderGovt(),
  'detail': (q) => renderDetail(q),
};

function navigate(path, query = {}) {
  const [name] = path.split('?');
  const fn = routes[name];
  const main = document.getElementById('app-main');
  main.scrollTop = 0;
  if (fn) fn(query);
  // update tab active state
  document.querySelectorAll('.tabbar a').forEach(a => {
    a.classList.toggle('active', a.dataset.tab === name);
  });
  window.scrollTo(0, 0);
}

/* ---------- Toast ---------- */
function toast(msg) {
  let t = document.getElementById('toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'toast';
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(window.__toastT);
  window.__toastT = setTimeout(() => t.classList.remove('show'), 1800);
}

/* ---------- Helpers ---------- */
function el(id) { return document.getElementById(id); }
function money(n) { return '¥' + n; }
function statusText(s) {
  const m = { done: '已完成', active: '进行中', wait: '待执行' };
  return m[s] || s;
}

/* expose */
window.ICONS = ICONS;
window.DATA = DATA;
window.navigate = navigate;
window.toast = toast;
