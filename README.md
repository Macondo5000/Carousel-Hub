# LinkedIn Carousel Hub

一个聚合LinkedIn Carousel内容的网站，帮助市场营销人员和设计师寻找灵感。

## 功能特性

- 🔍 **智能搜索**: 支持关键词搜索和标签筛选
- 📱 **响应式设计**: 完美适配桌面端和移动端
- 🏷️ **分类筛选**: 按内容分类和行业领域筛选
- 💎 **LinkedIn嵌入**: 使用官方嵌入式帖子展示内容
- ❤️ **互动功能**: 点赞、收藏、分享等社交功能
- 🎨 **现代UI**: 基于Tailwind CSS的美观界面

## 技术栈

- **前端框架**: Next.js 14 + React 18
- **样式**: Tailwind CSS
- **图标**: Heroicons
- **动画**: Framer Motion
- **类型安全**: TypeScript
- **构建工具**: Next.js App Router

## 快速开始

### 安装依赖

```bash
npm install
# 或
yarn install
```

### 开发模式

```bash
npm run dev
# 或
yarn dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看应用。

### 构建生产版本

```bash
npm run build
npm start
```

## 项目结构

```
├── app/                    # Next.js App Router
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   └── page.tsx           # 主页
├── components/             # React组件
│   ├── Header.tsx         # 网站头部
│   ├── SearchBar.tsx      # 搜索栏
│   ├── FilterPanel.tsx    # 筛选面板
│   ├── CarouselGrid.tsx   # Carousel网格
│   └── CarouselCard.tsx   # 单个Carousel卡片
├── types/                  # TypeScript类型定义
│   └── carousel.ts        # Carousel相关类型
├── package.json            # 项目依赖
├── tailwind.config.js      # Tailwind配置
├── next.config.js          # Next.js配置
└── tsconfig.json           # TypeScript配置
```

## LinkedIn集成

本项目使用LinkedIn的官方嵌入式帖子功能来展示内容：

1. **嵌入式帖子**: 通过`<iframe>`标签嵌入LinkedIn帖子
2. **官方API**: 集成LinkedIn JavaScript SDK
3. **分享功能**: 支持LinkedIn原生分享

### 获取嵌入式代码

1. 在LinkedIn上找到想要分享的帖子
2. 点击帖子右上角的下拉菜单
3. 选择"嵌入此帖子"
4. 复制生成的HTML代码

## 内容管理

### 添加新的Carousel

在`components/CarouselGrid.tsx`中的`mockCarousels`数组添加新项目：

```typescript
{
  id: 'unique-id',
  title: '标题',
  description: '描述',
  author: '作者姓名',
  authorCompany: '公司名称',
  category: 'category-id',
  industry: 'industry-id',
  tags: ['标签1', '标签2'],
  linkedinUrl: 'LinkedIn帖子链接',
  embedCode: 'LinkedIn嵌入式代码',
  likes: 0,
  comments: 0,
  shares: 0,
  createdAt: '2024-01-01',
  featured: false
}
```

## 部署

### Vercel部署（推荐）

1. 将代码推送到GitHub
2. 在Vercel中导入项目
3. 自动部署完成

#### 部署状态
- ✅ 修复了TrendingUpIcon导入错误
- ✅ 所有组件正常工作

### 其他平台

支持部署到任何支持Node.js的平台：
- Netlify
- Railway
- Heroku
- 自托管服务器

## 贡献

欢迎提交Issue和Pull Request！

## 许可证

MIT License

## 联系方式

如有问题或建议，请通过以下方式联系：
- 提交GitHub Issue
- 发送邮件至 [your-email@example.com]

---

**注意**: 本项目仅用于展示和聚合LinkedIn上的公开内容，不涉及版权问题。所有内容均通过LinkedIn官方嵌入式功能展示。 