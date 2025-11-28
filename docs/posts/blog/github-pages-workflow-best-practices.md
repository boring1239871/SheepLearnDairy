---
title: GitHub Pages 工作流最佳实践：从构建到发布
author: Sheep
date: 2025-11-28
category:
  - Blog
tag:
  - GitHub Actions
  - GitHub Pages
  - CI/CD
sticky: 15
excerpt: 给静态博客配置一套稳定的 CI/CD，自动构建与发布，避免线上线下不一致。
---

## 工作流目标

- 每次推送到 `master` 自动构建与部署
- 构建产物只进入 `gh-pages` 分支，保持仓库简洁
- 构建失败时给出足够日志排查

## 推荐 workflows/deploy-docs.yml

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ master ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: 'npm'
      - run: npm ci || npm install
      - run: npm run docs:build
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: docs/.vuepress/dist
          publish_branch: gh-pages
          force_orphan: true
          enable_jekyll: false
```

## 常见问题与解法

- 产物目录错误：确保 `publish_dir` 指向 `docs/.vuepress/dist`
- 依赖安装失败：优先用 `npm ci`，回退到 `npm install`
- 构建后退：检查 `vuepress` 与主题/插件版本一致性

## 总结

流水线明确、日志清晰、版本统一，就能让发布持续稳定。

