/* ===========================================================
   Page renderers
   =========================================================== */

const I = window.ICONS;
const D = window.DATA;

/* ---------- Reusable navbar ---------- */
function navbar(title, opts = {}) {
  const right = opts.right || `<button class="icon-btn" onclick="toast('搜索功能 Demo')">${I.search}</button>`;
  return `
    <div class="statusbar">
      <span>9:41</span>
      <span class="icons">
        <svg viewBox="0 0 18 12" fill="currentColor"><path d="M1 9h2v2H1zM5 7h2v4H5zM9 5h2v6H9zM13 2h2v9h-2z"/></svg>
        <svg viewBox="0 0 16 11" fill="currentColor"><path d="M8 2C5 2 2.5 3 1 4.5L0 3.5C2 1.5 4.8 0 8 0s6 1.5 8 3.5L15 4.5C13.5 3 11 2 8 2zm0 3C6.4 5 5 5.7 4 6.7L3 5.7C4.3 4.4 6 3.5 8 3.5s3.7.9 5 2.2l-1 1C11 5.7 9.6 5 8 5zm0 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/></svg>
        <svg viewBox="0 0 24 12" fill="none"><rect x="1" y="1" width="20" height="10" rx="2.5" stroke="currentColor" stroke-opacity=".4"/><rect x="2.5" y="2.5" width="15" height="7" rx="1" fill="currentColor"/><rect x="22" y="4" width="1.5" height="4" rx=".5" fill="currentColor"/></svg>
      </span>
    </div>
    <div class="navbar">
      ${opts.back ? `<button class="icon-btn" onclick="history.back()">${I.chevL}</button>` : ''}
      <div class="title" style="${opts.back ? '' : 'margin-left:4px'}">${title}</div>
      <div class="nav-actions">${right}</div>
    </div>
  `;
}

/* tabbar (shared) */
function tabbar(active) {
  const tabs = [
    { id: 'home', icon: I.home, label: '首页' },
    { id: 'routes', icon: I.route, label: '路线' },
    { id: 'courses', icon: I.book, label: '课程' },
    { id: 'news', icon: I.news, label: '资讯' },
    { id: 'mine', icon: I.mine, label: '我的' },
  ];
  return `<nav class="tabbar">
    ${tabs.map(t => `<a data-tab="${t.id}" class="${active === t.id ? 'active' : ''}" onclick="navigate('${t.id}')">${t.icon}<span>${t.label}</span></a>`).join('')}
  </nav>`;
}

/* ===================== HOME ===================== */
function renderHome() {
  const main = el('app-main');
  main.innerHTML = `
    ${navbar('潮州研学', { right: `
      <button class="icon-btn" onclick="toast('扫码 Demo')">${I.scan}</button>
      <button class="icon-btn" onclick="toast('消息 Demo')">${I.bell}</button>` })}

    <!-- Hero -->
    <div class="hero">
      <span class="badge">${I.award} 政府监管 · 官方平台</span>
      <h2>千年潮州文脉<br/>一站式研学服务</h2>
      <p>21 家认证基地 · 4 部门联合监管</p>
      <div class="hero-search">
        ${I.search}
        <input placeholder="搜索基地、路线、课程..." />
      </div>
    </div>

    <!-- Quick actions -->
    <div class="quick-grid">
      ${[
        { ico: I.route, label: '研学路线', cls: '', to: 'routes' },
        { ico: I.book, label: '精品课程', cls: 'alt', to: 'courses' },
        { ico: I.layers, label: '研学基地', cls: 'amber', to: 'bases' },
        { ico: I.gov, label: '政府监管', cls: 'dark', to: 'govt' },
        { ico: I.briefcase, label: '学校申报', cls: '', to: 'flow' },
        { ico: I.users, label: '导师人才库', cls: 'alt', to: 'detail?type=mentors' },
        { ico: I.doc, label: '研学资讯', cls: 'amber', to: 'news' },
        { ico: I.plus, label: '机构加盟', cls: 'dark', to: 'detail?type=join' },
      ].map(q => `
        <div class="quick-item" onclick="navigate('${q.to}')">
          <div class="quick-ico ${q.cls}">${q.ico}</div>
          <span>${q.label}</span>
        </div>`).join('')}
    </div>

    <!-- Banner -->
    <div class="banner" onclick="toast('暑期研学季 Demo')">
      <img src="${IMG('banner', 800, 300)}" alt="banner"/>
      <div class="banner-cap">
        <h4>暑期研学季 · 限时优惠</h4>
        <p>政府监管基地 · 全程保险护航</p>
      </div>
      <div class="dots"><i class="on"></i><i></i><i></i></div>
    </div>

    <!-- Hot routes -->
    <div class="section">
      <div class="section-head">
        <h3>🔥 热门研学路线</h3>
        <a class="more" onclick="navigate('routes')">全部 ${I.chevR}</a>
      </div>
      <div class="hscroll">
        ${D.routes.slice(0, 4).map(r => `
          <div class="media-card" style="flex:0 0 220px" onclick="navigate('detail?type=route&id=${r.id}')">
            <img class="thumb" src="${r.img}" style="height:120px" />
            <div class="body">
              <h4 style="font-size:14px">${r.title}</h4>
              <div class="meta-row mt-8">
                <span>${I.clock} ${r.days}天</span>
                <span>${I.users} ${r.signed}人</span>
              </div>
              <div class="price-row">
                <span class="price"><small>¥</small>${r.price}</span>
                <span style="font-size:11px;color:var(--foreground-400)">${I.star} ${r.rating}</span>
              </div>
            </div>
          </div>`).join('')}
      </div>
    </div>

    <!-- Bases -->
    <div class="section">
      <div class="section-head">
        <h3>🏛 认证研学基地</h3>
        <a class="more" onclick="navigate('bases')">查看全部 ${I.chevR}</a>
      </div>
      <div class="hscroll">
        ${D.bases.map(b => `
          <div class="base-card" onclick="navigate('detail?type=base&id=${b.id}')">
            <img src="${b.img}" />
            <div class="info">
              <h5>${b.name}</h5>
              <div class="lvl">${b.level} · ${b.area}</div>
            </div>
          </div>`).join('')}
      </div>
    </div>

    <!-- News -->
    <div class="section">
      <div class="section-head">
        <h3>📰 研学资讯</h3>
        <a class="more" onclick="navigate('news')">更多 ${I.chevR}</a>
      </div>
      <div class="card card-pad">
        ${D.news.slice(0, 3).map(n => `
          <div class="news-item" onclick="toast('资讯详情 Demo')">
            <img src="${n.img}" />
            <div class="news-body">
              <h5>${n.title}</h5>
              <div class="news-meta"><span>${n.source}</span><span>${n.date}</span>${n.hot ? '<span style="color:var(--accent);font-weight:700">🔥 热</span>' : ''}</div>
            </div>
          </div>`).join('')}
      </div>
    </div>

    ${tabbar('home')}
  `;
}

/* ===================== LIST PAGES ===================== */
function renderList(type) {
  const main = el('app-main');
  const titleMap = { routes: '研学路线', courses: '精品课程', bases: '研学基地', news: '研学资讯' };

  let filterHTML = '';
  if (type === 'routes') filterHTML = ['全部', '非遗', '茶艺', '红色', '工业', '自然'].map((c, i) => `<div class="chip ${i === 0 ? 'active' : ''}">${c}</div>`).join('');
  if (type === 'courses') filterHTML = ['全部', '非遗', '手工', '茶艺', '戏曲', '美术'].map((c, i) => `<div class="chip ${i === 0 ? 'active' : ''}">${c}</div>`).join('');
  if (type === 'bases') filterHTML = ['全部', '国家级', '省级', '市级'].map((c, i) => `<div class="chip ${i === 0 ? 'active' : ''}">${c}</div>`).join('');
  if (type === 'news') filterHTML = ['全部', '政策', '公告', '基地', '活动'].map((c, i) => `<div class="chip ${i === 0 ? 'active' : ''}">${c}</div>`).join('');

  let listHTML = '';
  if (type === 'routes') {
    listHTML = `<div class="list">` + D.routes.map(r => `
      <div class="media-card" onclick="navigate('detail?type=route&id=${r.id}')">
        <img class="thumb" src="${r.img}" />
        <div class="body">
          <h4>${r.title}</h4>
          <div class="desc">${r.desc}</div>
          <div class="tag-row">${r.tags.map(t => `<span class="tag brand">${t}</span>`).join('')}<span class="tag">${r.age}</span></div>
          <div class="meta-row mt-8">
            <span>${I.clock} ${r.days}天</span>
            <span>${I.pin} ${r.spots}个研学点</span>
            <span>${I.users} 已报名${r.signed}</span>
            <span>${I.star} ${r.rating}</span>
          </div>
          <div class="price-row">
            <span class="price"><small>¥</small>${r.price}<small style="color:var(--foreground-400);text-decoration:line-through;margin-left:4px">¥${r.original}</small></span>
            <button class="btn btn-accent btn-sm" onclick="event.stopPropagation();navigate('detail?type=route&id=${r.id}')">立即报名</button>
          </div>
        </div>
      </div>`).join('') + `</div>`;
  } else if (type === 'courses') {
    listHTML = `<div class="list">` + D.courses.map(c => `
      <div class="media-card" onclick="navigate('detail?type=course&id=${c.id}')">
        <img class="thumb" src="${c.img}" />
        <div class="body">
          <h4>${c.title}</h4>
          <div class="desc">${c.desc}</div>
          <div class="tag-row">${c.tags.map(t => `<span class="tag brand">${t}</span>`).join('')}<span class="tag">${c.sessions}课时</span></div>
          <div class="meta-row mt-8">
            <span>${I.users} ${c.students}人学习</span>
            <span>${I.star} ${c.rating}</span>
          </div>
          <div class="price-row">
            <span class="price"><small>¥</small>${c.price}<small style="margin-left:2px">/人</small></span>
            <button class="btn btn-accent btn-sm" onclick="event.stopPropagation();navigate('detail?type=course&id=${c.id}')">预约课程</button>
          </div>
        </div>
      </div>`).join('') + `</div>`;
  } else if (type === 'bases') {
    listHTML = `<div class="list">` + D.bases.map(b => `
      <div class="media-card" onclick="navigate('detail?type=base&id=${b.id}')">
        <img class="thumb" src="${b.img}" style="height:180px" />
        <div class="body">
          <div class="flex between aic">
            <h4 style="flex:1">${b.name}</h4>
            <span class="tag brand">${b.level}</span>
          </div>
          <div class="meta-row mt-8">
            <span>${I.pin} ${b.area}</span>
            <span>${I.users} ${b.students.toLocaleString()}人次</span>
            <span>${I.star} ${b.rating}</span>
          </div>
          <div class="tag-row">${b.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
        </div>
      </div>`).join('') + `</div>`;
  } else if (type === 'news') {
    listHTML = `<div class="card card-pad section">` + D.news.map(n => `
      <div class="news-item" onclick="toast('资讯详情 Demo')">
        <img src="${n.img}" />
        <div class="news-body">
          <h5>${n.title}</h5>
          <div class="news-meta"><span>${n.source}</span><span>${n.date}</span>${n.hot ? '<span style="color:var(--accent);font-weight:700">🔥 热门</span>' : ''}</div>
        </div>
      </div>`).join('') + `</div>`;
  }

  main.innerHTML = `
    ${navbar(titleMap[type])}
    <div class="search-bar">${I.search}<input placeholder="搜索${titleMap[type]}..." /></div>
    ${filterHTML ? `<div class="filter-bar">${filterHTML}</div>` : ''}
    <div class="section">${listHTML}</div>
    ${tabbar(type)}
  `;

  // chip interaction
  main.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      main.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      toast(`筛选：${chip.textContent}`);
    });
  });
}

/* ===================== MINE ===================== */
function renderMine() {
  const main = el('app-main');
  const loggedIn = window.__user;
  main.innerHTML = `
    <div class="statusbar"><span>9:41</span><span class="icons">
      <svg viewBox="0 0 18 12" fill="currentColor"><path d="M1 9h2v2H1zM5 7h2v4H5zM9 5h2v6H9zM13 2h2v9h-2z"/></svg>
      <svg viewBox="0 0 16 11" fill="currentColor"><path d="M8 2C5 2 2.5 3 1 4.5L0 3.5C2 1.5 4.8 0 8 0s6 1.5 8 3.5L15 4.5C13.5 3 11 2 8 2zm0 3C6.4 5 5 5.7 4 6.7L3 5.7C4.3 4.4 6 3.5 8 3.5s3.7.9 5 2.2l-1 1C11 5.7 9.6 5 8 5zm0 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/></svg>
      <svg viewBox="0 0 24 12" fill="none"><rect x="1" y="1" width="20" height="10" rx="2.5" stroke="currentColor" stroke-opacity=".4"/><rect x="2.5" y="2.5" width="15" height="7" rx="1" fill="currentColor"/><rect x="22" y="4" width="1.5" height="4" rx=".5" fill="currentColor"/></svg>
    </span></div>
    <div class="profile-hero">
      <div class="profile-top">
        <div class="avatar">${loggedIn ? `<img src="${IMG('avatar', 100, 100)}"/>` : I.mine}</div>
        <div style="flex:1">
          <div class="name">${loggedIn ? '陈同学' : '未登录'}</div>
          <div class="sub">${loggedIn ? '潮州市金山中学 · 高一(3)班' : '登录后享受更多研学服务'}</div>
        </div>
        ${loggedIn ? '' : `<button class="login-btn" onclick="doLogin()">微信登录</button>`}
      </div>
      <div class="stats-row">
        <div class="stat-pill"><div class="n">${loggedIn ? 6 : 0}</div><div class="l">已报名</div></div>
        <div class="stat-pill"><div class="n">${loggedIn ? 3 : 0}</div><div class="l">已完成</div></div>
        <div class="stat-pill"><div class="n">${loggedIn ? 28 : 0}</div><div class="l">学时</div></div>
      </div>
    </div>

    <div class="menu-group">
      ${[
        { ico: I.doc, label: '我的订单', val: loggedIn ? '3 进行中' : '' },
        { ico: I.calendar, label: '我的行程', val: loggedIn ? '下一站：7月12日' : '' },
        { ico: I.award, label: '研学证书', val: loggedIn ? '3 张' : '' },
        { ico: I.money, label: '钱包 / 优惠', val: '¥120' },
      ].map(m => `
        <div class="menu-item" onclick="toast('${m.label} Demo')">
          <div class="mi-ico">${m.ico}</div>
          <div class="mi-label">${m.label}</div>
          ${m.val ? `<div class="mi-val">${m.val}</div>` : ''}
          <div class="chev">${I.chevR}</div>
        </div>`).join('')}
    </div>

    <h6 style="padding:0 16px 8px;font-size:12px;color:var(--foreground-500);font-weight:600;margin-top:8px">学校 / 机构</h6>
    <div class="menu-group" style="margin-top:0">
      ${[
        { ico: I.briefcase, label: '学校管理后台', val: '家委 / 老师' },
        { ico: I.gov, label: '政府部门工作台', val: '审核' },
        { ico: I.layers, label: '平台运维端', val: '基地 / 财务' },
        { ico: I.plus, label: '机构加盟入口', val: '' },
      ].map(m => `
        <div class="menu-item" onclick="${m.label.includes('学校') ? `navigate('flow')` : m.label.includes('部门') ? `navigate('govt')` : `toast('${m.label} Demo')`}">
          <div class="mi-ico">${m.ico}</div>
          <div class="mi-label">${m.label}</div>
          ${m.val ? `<div class="mi-val">${m.val}</div>` : ''}
          <div class="chev">${I.chevR}</div>
        </div>`).join('')}
    </div>

    <div class="menu-group">
      ${[
        { ico: I.phone, label: '客服中心' },
        { ico: I.doc, label: '帮助与反馈' },
        { ico: I.settings, label: '设置' },
      ].map(m => `
        <div class="menu-item" onclick="toast('${m.label} Demo')">
          <div class="mi-ico">${m.ico}</div>
          <div class="mi-label">${m.label}</div>
          <div class="chev">${I.chevR}</div>
        </div>`).join('')}
    </div>

    <div class="center muted" style="font-size:11px;padding:20px 0 10px">潮州市研学管理服务平台 · v1.0.0<br/>© 2026 潮州市产投集团</div>

    ${tabbar('mine')}
  `;
}

function doLogin() {
  window.__user = true;
  toast('登录成功（Demo）');
  renderMine();
}

/* ===================== DETAIL ===================== */
function renderDetail(q) {
  const main = el('app-main');
  const t = q.type || (q.id ? 'route' : '');

  if (t === 'join' || !t) {
    return renderJoin(main);
  }
  if (t === 'mentors') {
    return renderMentors(main);
  }

  let item, title, subtitle, tabs, itinerary, price, original;
  if (t === 'route') {
    item = D.routes.find(r => r.id === q.id) || D.routes[0];
    title = item.title; subtitle = `${item.days}天 · ${item.age} · ${item.spots}个研学点`;
    itinerary = [
      { day: 'DAY 1', text: '上午：潮州古城集合 · 开营仪式\n中午：品尝潮州工夫菜\n下午：广济桥非遗研学 · 潮绣体验\n晚上：古城夜游 · 研学日志' },
      { day: 'DAY 2', text: '上午：牌坊街历史调研 · 木雕工坊\n中午：与非遗传承人交流\n下午：成果展示 · 结营颁奖' },
    ];
    price = item.price; original = item.original;
  } else if (t === 'course') {
    item = D.courses.find(c => c.id === q.id) || D.courses[0];
    title = item.title; subtitle = `${item.sessions}课时 · ${item.students}人学习`;
    itinerary = [
      { day: '第1节', text: '历史与文化背景 · 大师讲解' },
      { day: '第2节', text: '基础技法入门 · 实操示范' },
      { day: '第3节', text: '进阶创作 · 个人作品指导' },
      { day: '第4节', text: '作品完成与展示 · 颁发证书' },
    ];
    price = item.price; original = Math.round(price * 1.3);
  } else if (t === 'base') {
    item = D.bases.find(b => b.id === q.id) || D.bases[0];
    title = item.name; subtitle = `${item.level} · ${item.area} · ${item.students.toLocaleString()}人次`;
    itinerary = [
      { day: '场馆', text: '占地 8000㎡，含主展厅、非遗工坊、研学教室、餐饮休息区。' },
      { day: '课程', text: '提供潮绣、木雕、陶瓷等 6 大主题课程，可定制 1-3 日研学方案。' },
      { day: '配套', text: '专业研学导师 12 名，医疗室、保险、餐饮一站式保障。' },
    ];
    price = 0;
  }

  main.innerHTML = `
    <div class="detail-hero">
      <img src="${item.img.replace(/\/\d+\/\d+$/, '/800/520')}" />
      <div class="back" onclick="history.back()">${I.chevL}</div>
    </div>
    <div class="detail-body">
      <div class="tag-row" style="margin-bottom:10px">
        ${(item.tags || ['官方认证']).map(tg => `<span class="tag brand">${tg}</span>`).join('')}
        <span class="tag">${I.star} ${item.rating || 4.8}</span>
      </div>
      <h1>${title}</h1>
      <div class="detail-meta">
        <span>${I.clock} ${subtitle}</span>
        <span>${I.users} 已报名${item.signed || item.students || 0}人</span>
      </div>

      <div class="detail-section">
        <h3>简介</h3>
        <p>${item.desc || '潮州市官方认证研学基地，由政府多部门联合监管，确保安全、专业、有收获。'}</p>
      </div>

      <div class="detail-section">
        <h3>${t === 'base' ? '基地详情' : t === 'course' ? '课程安排' : '行程安排'}</h3>
        <div class="itinerary">
          ${itinerary.map(i => `
            <div class="iti-item">
              <span class="day">${i.day}</span>
              <p style="white-space:pre-line">${i.text}</p>
            </div>`).join('')}
        </div>
      </div>

      <div class="detail-section">
        <h3>服务保障</h3>
        <div class="tag-row">
          <span class="tag">${I.check} 政府监管</span>
          <span class="tag">${I.check} 全程保险</span>
          <span class="tag">${I.check} 专业导师</span>
          <span class="tag">${I.check} 安全应急</span>
        </div>
      </div>

      <div class="detail-section">
        <h3>报名须知</h3>
        <p style="font-size:13px">• 全程由产投集团统一组织分发，各执行环节均经资质审核。<br/>• 家长可通过平台完成在线报名、缴费、购险、签约。<br/>• 活动结束后可对各个环节进行评价，评价结果影响结算。</p>
      </div>
    </div>

    <div class="buy-bar">
      <div class="bb-ico" onclick="toast('已收藏 Demo')">${I.heart}<span>收藏</span></div>
      <div class="bb-ico" onclick="toast('客服 Demo')">${I.phone}<span>客服</span></div>
      <div class="bb-price">
        ${price ? `<div class="bp"><small>¥</small>${price}</div><div class="bl">原价 ¥${original}</div>` : `<div class="bp" style="font-size:14px">联系咨询</div><div class="bl">官方认证基地</div>`}
      </div>
      <button class="btn btn-accent" style="padding:12px 28px" onclick="toast(${price ? `'已加入预报名清单'` : `'已为您接通客服'`})">${price ? '立即报名' : '咨询预约'}</button>
    </div>
  `;
}

/* ---------- Join ---------- */
function renderJoin(main) {
  main.innerHTML = `
    ${navbar('机构加盟', { back: true, right: '' })}
    <div class="flow-page">
      <div class="flow-intro">
        <span class="pill">${I.plus} 全国招募</span>
        <h2>研学机构加盟入口</h2>
        <p>基地 · 旅行社 · 运输 · 保险 · 餐饮 · 住宿 · 导师</p>
      </div>
      <div class="card card-pad mb-16">
        <h3 style="font-size:15px;font-weight:700;margin-bottom:14px">加盟类型</h3>
        <div class="flex" style="flex-wrap:wrap;gap:8px">
          ${['研学基地', '旅行社', '运输公司', '保险公司', '餐饮服务', '住宿酒店', '研学导师', '课程开发'].map(t => `<span class="chip active" style="cursor:default">${t}</span>`).join('')}
        </div>
      </div>
      <div class="card card-pad mb-16">
        <h3 style="font-size:15px;font-weight:700;margin-bottom:14px">入驻流程</h3>
        <div class="timeline">
          ${['提交资质材料', '平台资质审核', '现场核验', '签署合作协议', '商品 / 服务上架', '正式接单运营'].map((s, i) => `
            <div class="tl-step ${i < 2 ? 'done' : i === 2 ? 'active' : ''}">
              <div class="dot">${i + 1}</div>
              <div class="tl-title">${s}</div>
            </div>`).join('')}
        </div>
      </div>
      <button class="btn btn-accent btn-block" style="padding:14px;margin-bottom:20px" onclick="toast('申请已提交 Demo')">${I.doc} 立即申请加盟</button>
    </div>
  `;
}

/* ---------- Mentors ---------- */
function renderMentors(main) {
  const mentors = [
    { name: '康慧芳', title: '中国工艺美术大师', tag: '潮绣', exp: '40年' },
    { name: '李得浓', title: '国家级非遗传承人', tag: '木雕', exp: '35年' },
    { name: '谢华', title: '中国工艺美术大师', tag: '手拉壶', exp: '30年' },
    { name: '叶汉钟', title: '潮州工夫茶传承人', tag: '茶艺', exp: '28年' },
  ];
  main.innerHTML = `
    ${navbar('导师人才库', { back: true })}
    <div class="section">
      <div class="search-bar">${I.search}<input placeholder="搜索导师、专业领域..." /></div>
      <div class="list">
        ${mentors.map(m => `
          <div class="card card-pad flex aic" style="gap:14px;cursor:pointer" onclick="toast('${m.name} 详情 Demo')">
            <img src="${IMG('mentor' + m.name, 100, 100)}" style="width:56px;height:56px;border-radius:50%;object-fit:cover" />
            <div style="flex:1">
              <div class="flex aic" style="gap:8px">
                <strong style="font-size:15px">${m.name}</strong>
                <span class="tag brand">${m.tag}</span>
              </div>
              <div class="muted" style="font-size:12px;margin-top:3px">${m.title}</div>
              <div class="muted" style="font-size:11px;margin-top:2px">从教 ${m.exp}</div>
            </div>
            <button class="btn btn-sm" onclick="event.stopPropagation();toast('已预约 Demo')">预约</button>
          </div>`).join('')}
      </div>
    </div>
  `;
}

/* ===================== FLOW (school workflow) ===================== */
function renderFlow() {
  const main = el('app-main');
  const steps = D.schoolSteps;
  const doneCount = steps.filter(s => s.status === 'done').length;

  main.innerHTML = `
    ${navbar('学校研学管理', { back: true, right: `<button class="icon-btn" onclick="toast('新建研学 Demo')">${I.plus}</button>` })}
    <div class="flow-page">
      <!-- Current trip card -->
      <div class="card card-pad mb-16" style="background:linear-gradient(135deg,#0a0a0a,#171717);color:#fff;border:none">
        <div class="flex between aic">
          <div>
            <div style="font-size:11px;opacity:.7;font-weight:600">进行中的研学活动</div>
            <div style="font-size:16px;font-weight:700;margin-top:4px">湘桥区城西中学 · 非遗研学</div>
            <div style="font-size:12px;opacity:.7;margin-top:4px">2026-07-12 · 共 320 人 · 广济桥路线</div>
          </div>
          <div style="text-align:center">
            <div style="font-size:22px;font-weight:800;color:#f5a623">${doneCount}/${steps.length}</div>
            <div style="font-size:10px;opacity:.7">进度</div>
          </div>
        </div>
        <div style="height:6px;background:rgba(255,255,255,.15);border-radius:3px;margin-top:14px;overflow:hidden">
          <div style="width:${(doneCount / steps.length * 100)}%;height:100%;background:#f5a623;border-radius:3px"></div>
        </div>
      </div>

      <div class="section-head" style="padding:0">
        <h3>业务流程</h3>
        <span class="muted" style="font-size:12px">9 个环节</span>
      </div>

      <div class="timeline" style="margin-top:12px">
        ${steps.map(s => `
          <div class="tl-step ${s.status}">
            <div class="dot">${s.status === 'done' ? I.check.replace('viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"', 'viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"') : s.id}</div>
            <div class="tl-title">
              ${s.title}
              <span class="status-chip ${s.status}">${statusText(s.status)}</span>
            </div>
            <div class="tl-desc">${s.desc}</div>
            ${s.status === 'active' ? `<button class="btn btn-accent btn-sm mt-8" onclick="toast('查看审核进度 Demo')">查看进度</button>` : ''}
          </div>`).join('')}
      </div>

      <div class="card card-pad mt-16 mb-16">
        <h3 style="font-size:14px;font-weight:700;margin-bottom:10px">需求清单 · 已勾选</h3>
        <div class="tag-row">
          ${['广济桥基地', '城西旅行社', '潮运大巴', '人保财险', '潮菜餐饮', '韩江酒店', '2 名导师'].map(x => `<span class="tag">${I.check} ${x}</span>`).join('')}
        </div>
      </div>
    </div>
  `;
}

/* ===================== GOVT ===================== */
function renderGovt() {
  const main = el('app-main');
  const depts = ['全部', '教育局', '文广旅体局', '交通运输局', '产投集团'];

  main.innerHTML = `
    ${navbar('政府监管工作台', { back: true, right: `<button class="icon-btn" onclick="toast('统计报表 Demo')">${I.doc}</button>` })}
    <div class="flow-page">
      <!-- Stats -->
      <div class="flex" style="gap:10px;margin-bottom:18px">
        ${[
          { n: '24', l: '本月报备', c: 'var(--accent)' },
          { n: '18', l: '待审核', c: 'var(--warning)' },
          { n: '156', l: '已通过', c: '#0a7c3e' },
        ].map(s => `
          <div class="card card-pad" style="flex:1;text-align:center">
            <div style="font-size:22px;font-weight:800;color:${s.c}">${s.n}</div>
            <div style="font-size:11px;color:var(--foreground-500);margin-top:2px">${s.l}</div>
          </div>`).join('')}
      </div>

      <div class="filter-bar" style="padding:0 0 14px">
        ${depts.map((d, i) => `<div class="chip ${i === 0 ? 'active' : ''}">${d}</div>`).join('')}
      </div>

      <h3 style="font-size:15px;font-weight:700;padding:0 0 12px">待办审核</h3>
      ${D.govtTasks.map(g => `
        <div class="govt-card">
          <div class="gh">
            <div>
              <div class="gt">${g.title}</div>
              <div class="gd">${g.desc}</div>
            </div>
            <span class="status-chip ${g.status === '已通过' ? 'done' : 'active'}">${g.status}</span>
          </div>
          <div class="meta-row mt-8" style="margin-top:10px">
            <span>${I.gov} ${g.dept}</span>
            <span>${I.calendar} ${g.date}</span>
          </div>
          ${g.status === '待审核' ? `
            <div class="govt-actions">
              <button class="btn btn-sm" onclick="toast('已查看详情 Demo')">查看详情</button>
              <button class="btn btn-sm btn-accent" onclick="approveTask(this)">通过</button>
              <button class="btn btn-sm btn-ghost" onclick="toast('已退回重选 Demo')">退回</button>
            </div>` : ''}
        </div>`).join('')}

      <div class="card card-pad mt-16" style="background:var(--background-100);border-color:var(--border)">
        <div class="flex aic" style="gap:10px">
          <div style="color:var(--accent)">${I.gov}</div>
          <div style="font-size:12px;color:var(--foreground-700);line-height:1.6">
            政府端流程：<strong>报备 → 审核</strong><br/>
            教育局、文广旅体局、交通运输局、产投集团联合监管
          </div>
        </div>
      </div>
    </div>
  `;

  // dept filter
  main.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      main.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
    });
  });
}

function approveTask(btn) {
  const card = btn.closest('.govt-card');
  const chip = card.querySelector('.status-chip');
  chip.className = 'status-chip done';
  chip.textContent = '已通过';
  card.querySelector('.govt-actions').remove();
  toast('已审核通过');
}

/* status text helper */
function statusText(s) {
  const m = { done: '已完成', active: '进行中', wait: '待执行' };
  return m[s] || s;
}
