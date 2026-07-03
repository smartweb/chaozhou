# 潮州市研学管理服务平台 · HTML Demo

一个基于 **Vercel 设计风格** 的移动端小程序 HTML Demo，覆盖研学业务的家长端、学校端与政府监管端。

> 🎨 设计参考：[Vercel Design System](https://vercel.com/design) · Geist 字体 / 极简卡片 / 高对比黑白 + 品牌朱砂红

## ✨ 功能页面

| 页面 | 路径 | 说明 |
|------|------|------|
| 🏠 首页 | `#home` | Hero + 快捷入口 + 热门路线 + 基地 + 资讯 |
| 🧭 研学路线 | `#routes` | 列表 + 筛选 + 详情行程 |
| 📚 精品课程 | `#courses` | 非遗 / 手工 / 茶艺课程 |
| 🏛 研学基地 | `#bases` | 21 家认证基地（Demo 取样） |
| 📰 研学资讯 | `#news` | 政策 / 公告 |
| 👤 我的 | `#mine` | 家长端个人中心 |
| 🏫 学校管理 | `#flow` | 9 步业务流程时间线 |
| 🏛 政府监管 | `#govt` | 多部门审核工作台 |
| ➕ 机构加盟 | `#detail?type=join` | 入驻流程 |
| 👨‍🏫 导师人才库 | `#detail?type=mentors` | 非遗传承人 |

## 🎯 业务覆盖（对照需求）

- **学校（家委）**：日期确定 → 勾选菜单 → 单位复核 → 行政审核 → 业务分发 → 家长报名 → 订单确认 → 评价 → 结算（`#flow` 完整 9 步可视化）
- **政府端**：报备 / 审核，教育局、文广旅体局、交运、产投四部门联合监管（`#govt`）
- **平台运维**：21 家基地上架、机构加盟、人才库（首页快捷入口 + 加盟页）

## 🚀 本地预览

```bash
# 任选一种
python3 -m http.server 8080
# 或
npx serve
```

打开 `http://localhost:8080`，建议使用 Chrome DevTools 的移动端模拟（iPhone 14 Pro）。

## ☁️ 部署到 Vercel

### 方式一：CLI

```bash
npm i -g vercel
vercel        # 预览部署
vercel --prod # 生产部署
```

### 方式二：Git 集成

1. 推送到 GitHub
2. 在 [vercel.com/new](https://vercel.com/new) 导入仓库
3. Framework Preset 选 **Other**，无需构建命令
4. 一键部署

## 🛠 技术栈

- 纯原生 HTML / CSS / JS（无框架、无依赖）
- 内联 SVG 图标系统
- Mock 数据（`js/app.js`）+ Picsum 占位图
- 响应式手机外框（桌面端自动居中显示）
- Hash 路由 + 浏览器历史栈支持

## 📁 目录结构

```
ChaoZhou/
├── index.html        # 入口
├── vercel.json       # Vercel 部署配置
├── css/
│   └── style.css     # Vercel Geist 设计系统
└── js/
    ├── app.js        # Mock 数据 + 路由 + 图标
    └── pages.js      # 各页面渲染器
```

---
© 2026 潮州市产投集团 · 研学管理服务平台 Demo
