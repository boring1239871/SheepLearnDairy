---
home: true
title: 技术博客
description: 专注于前端开发与技术思考
tagline: 代码与思考的栖息地
heroImage: /images/logo.png
# 更新于: 2024年部署测试
actions:
  - text: 浏览博客
    link: /posts/blog/
    type: primary
  - text: 作品集
    link: /posts/portfolio/
    type: secondary
  # 仅保留一个入口按钮
features:
  - title: 技术实践
    details: 记录开发中的技术选型、架构设计和性能优化
  - title: 学习笔记
    details: 整理系统性知识，构建个人技术体系
  - title: 项目思考
    details: 分享真实项目中的问题解决和架构演进
---

<style>
/* 自定义主题色 */
:root {
  --vp-c-brand: #3eaf7c;
  --vp-c-brand-light: #4abf8a;
  --vp-c-brand-lighter: #6bc99d;
  --vp-c-brand-dark: #2d9966;
  --vp-c-brand-darker: #1f7a4d;
}

/* 首页整体样式 */
.VPHome {
  min-height: 100vh;
}

/* 英雄区域优化 */
.hero {
  text-align: center;
  padding: 4rem 1rem 3rem;
}

.hero h1 {
  font-size: 3.2rem;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--vp-c-brand) 0%, var(--vp-c-brand-dark) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
}

.hero p {
  font-size: 1.4rem;
  color: var(--vp-c-text-2);
  margin-bottom: 2.5rem;
  line-height: 1.6;
}

/* 按钮样式优化 */
.actions {
  gap: 1.2rem;
}

.actions .VPButton.primary {
  background: var(--vp-c-brand);
  border-color: var(--vp-c-brand);
  border-radius: 8px;
  font-weight: 600;
  padding: 0.75rem 2rem;
  font-size: 1.1rem;
  transition: all 0.3s ease;
}

.actions .VPButton.primary:hover {
  background: var(--vp-c-brand-dark);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(62, 175, 124, 0.3);
}

.actions .VPButton.secondary {
  border-radius: 8px;
  font-weight: 600;
  padding: 0.75rem 2rem;
  font-size: 1.1rem;
  transition: all 0.3s ease;
}

.actions .VPButton.secondary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* 特性区域优化 */
.features {
  padding: 4rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

.features .container {
  max-width: 100%;
}

.feature {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  padding: 2rem 1.5rem;
  transition: all 0.3s ease;
  height: 100%;
}

.feature:hover {
  transform: translateY(-5px);
  border-color: var(--vp-c-brand);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.feature h2 {
  font-size: 1.3rem;
  margin-bottom: 0.8rem;
  color: var(--vp-c-text-1);
  font-weight: 600;
}

.feature p {
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin: 0;
  font-size: 0.95rem;
}

/* 响应式优化 */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .hero p {
    font-size: 1.2rem;
  }
  
  .actions {
    flex-direction: column;
    align-items: center;
  }
  
  .actions .VPButton {
    width: 200px;
  }
  
  .features {
    padding: 3rem 1rem;
  }
  
  .feature {
    padding: 1.5rem 1rem;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 3rem 1rem 2rem;
  }
  
  .hero h1 {
    font-size: 2rem;
  }
  
  .hero p {
    font-size: 1.1rem;
  }
}
</style>
