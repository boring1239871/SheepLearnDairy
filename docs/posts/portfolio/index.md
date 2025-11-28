---
title: 作品集
sidebar: false
---

<div class="portfolio-hero">
  <h1>作品集</h1>
  <p>精选项目与成果概览</p>
</div>



## 精选项目

### 智能伴学小程序
- 职责：前端全栈开发；实时对话（WebSocket）与 AI 能力对接；工程化与性能优化
- 亮点：封装请求工具统一错误处理；适配多端屏幕；实现学习计划、测验、抽认卡等功能

### 医院问诊挂号平台
- 职责：状态管理与数据看板；组合式 API 与复用逻辑
- 亮点：可视化看板支持动态渲染；全局状态持久化与性能提升


<div class="cards-grid">
  <div class="card">
    <div class="card-title">智能伴学小程序</div>
    <div class="card-desc">WebSocket 实时对话 · AI 学习 · 工程化优化</div>
  </div>
  <div class="card">
    <div class="card-title">医院问诊挂号平台</div>
    <div class="card-desc">ECharts 数据看板 · 状态持久化 · 组合式 API</div>
  </div>
</div>

<style>
.portfolio-hero{
  position: relative;
  padding: 64px 24px 32px;
  text-align: center;
  color: var(--vp-c-text-1);
  background: radial-gradient(1200px 600px at 50% -100px, rgba(62,175,124,.15), transparent),
              linear-gradient(135deg, rgba(62,175,124,.08), rgba(31,122,77,.08));
  border-radius: 12px;
}
.portfolio-hero h1{font-size:32px;margin:0 0 8px;}
.portfolio-hero p{color: var(--vp-c-text-2);margin:0;}

.cards-grid{
  display:grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap:16px;
  margin-top:24px;
}
.card{
  padding:16px 18px;
  border:1px solid var(--vp-c-border);
  border-radius:12px;
  background: var(--vp-c-bg-soft);
  transition: transform .2s ease, box-shadow .2s ease, border-color .2s ease;
}
.card:hover{transform: translateY(-2px); box-shadow:0 8px 24px rgba(0,0,0,.08); border-color: var(--vp-c-brand);}
.card-title{font-weight:600; margin-bottom:6px;}
.card-desc{color: var(--vp-c-text-2);}
</style>
