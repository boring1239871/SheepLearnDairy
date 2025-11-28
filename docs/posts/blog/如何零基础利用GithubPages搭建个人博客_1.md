---
title: 如何零基础利用GithubPages搭建个人博客
author: Sheep
date: 2024-01-01
category:
  - Blog
tag:
  - GitHub Pages
  - 个人博客
  - VuePress
excerpt: 省流版本！搭建自己个人网站，其实拆分下来重点就三个：怎么搭建网站、怎么部署网站、怎么进行数据存储更新
---

> 省流版本！搭建自己个人网站，其实拆分下来重点就三个：
> 
> 1. 怎么搭建网站
> 2. 怎么部署网站
> 3. 怎么进行数据存储更新
> 

因为博客对我来说，主要是以静态内容呈现的，所以我不用考虑太多第三个数据存储更新这个问题，考虑这个的话，得加买服务器部署  
我选择就GithubPages直接进行部署，重要的不是麻烦，是它免费！github可以进行免费静态内容部署，免去了我很多烦恼！

ok，我们废话不多说，接下来直接进入实操。

## 搭建网站
### 博客脚手架选型
对于博客而言，“博客脚手架”就是能让你**快速拥有一个功能完备、架构清晰的博客系统**的工具或框架。它决定了你的博客是如何构建的、有哪些功能以及未来的扩展方向。

#### 脚手架类型微介绍：
市面上现在有很多脚手架可供选择，目前据我所知，是Vuepress，Hexo，Hugo，WordPress等等，都各有各的优点，目前是选择了VuePress来进行搭建的，应该还有很多其他的，大家可以自行判断判断，选择自己需要的脚手架来

| 类型 | 核心原理 | 代表工具 | 核心特点 | 适用人群与场景 |
| :--- | :--- | :--- | :--- | :--- |
| **🚀**** 静态博客生成器** | 将 Markdown 等格式的文本，通过模板渲染，批量生成最终的静态 HTML、CSS、JS 文件。 | **Hexo** (Node.js)   **Hugo** (Go)   **Jekyll** (Ruby)   **VuePress** (Vue.js)   **Gatsby** (React) | - **极致性能**：全是静态文件，访问速度极快。   - **超高安全性**：无数据库和动态脚本，攻击面小。   - **低成本/免费**：可部署到 GitHub Pages, Vercel, Netlify 等平台。   - **版本控制友好**：内容即文件，可与 Git 完美结合。   - **学习曲线较低** (对于开发者)。 | 程序员、技术爱好者、追求性能和简洁性的写作者、主要用于技术分享和个人记录。 |
| **🛠️**** 动态博客框架/CMS** | 基于服务器端语言，内容通常存储在数据库（如 MySQL）中，用户请求时动态生成页面。 | **WordPress** (PHP)   **Ghost** (Node.js)   **Typecho** (PHP)   **Drupal** (PHP) | - **功能强大全面**：拥有丰富的插件和主题生态系统。   - **可视化管理**：提供非常完善、易用的后台管理界面。   - **交互性强**：原生支持评论、用户权限、表单等动态功能。   - **高度可定制** | 非技术用户、需要强大功能（如电商、会员、多用户）的博主、企业官网、不介意管理服务器。 |
| **🌐**** 全栈博客框架** | 提供前后端一体化的开发解决方案，允许开发者从数据库到用户界面进行完全定制。 | **NestJS** + 前端框架   **Meteor**   **MEAN/MERN Stack**    **Blazor** (.NET) | - **技术栈统一**：前后端可使用相同语言（如 JavaScript/TypeScript）。   - **完全控制权**：从数据库设计到 API 接口，再到 UI 组件，均可精细控制。   - **现代化开发体验**：适合构建复杂、实时的 Web 应用。   - **高学习成本** | 全栈开发者、希望深度定制博客每个细节、或希望将博客作为更大应用一部分的团队。 |
| **📝**** 在线博客平台** | 无需自行部署，直接在该平台的网站上注册账号即可开始写作和发布。 | **Medium**   **知乎专栏**   **CSDN**   **博客园** | - **零门槛**：无需任何技术知识，最快开始写作。   - **自带流量**：平台本身有用户社区，内容可能被推荐。   - **功能受限**：自定义程度低，受平台规则约束。   - **数据所有权**：你的内容存储在第三方平台。 | 纯粹的写作者、初学者、希望快速接触受众、不在意技术控制和品牌独立性的用户。 |
| **⚡**** 无头CMS架构** | 将内容管理（后台）和内容呈现（前端）分离。后台只提供 API，前端可以使用任何技术。 | **Strapi**   **Contentful**   **Sanity**   **搭配**: 无头CMS + Next.js/Gatsby | - **内容与表现分离**：内容可以多渠道发布（网站、APP、大屏等）。   - **技术选型自由**：前端可以选择最擅长的技术（如 React, Vue）。   - **强大的内容建模**：可以定义复杂的内容结构。   - **架构稍复杂** | 对内容管理有专业要求、需要多端统一内容输出、技术团队较强的项目。 |


#### VuePress框架微介绍
    1. 官方文档放这里：[https://vuepress.vuejs.org/zh/](https://vuepress.vuejs.org/zh/)
    2. Vue生态，顾名思义，与Vue脱不开关系，主要用来编写技术文档，所以整体的页面呈现效果是长这样的

![](https://cdn.nlark.com/yuque/0/2025/png/46030861/1764065291585-f172a52e-9bd3-4d74-98e7-b9bc32ff15b7.png)

    3. 不过VuePress还是有其他的一些主题插件来进行自定义页面修改的，目前也还在研究深入中！

:::danger
    4. <font style="color:#DF2A3F;">最新战报！VuePress一切换其他的主题插件，版本兼容问题有点问题，需要根据文档修改修改</font>

:::



### 博客部署（GithubPages部署）
具体流程如下：

#### 项目配置文件编写
    1. 先在本地项目根目录，建立一个文件夹（github）存储工作流的配置文件
    2. 然后建立一个配置文件，这边命名为deploy.yml
    3. 文件夹目录结构如图：![](https://cdn.nlark.com/yuque/0/2025/png/46030861/1764066569381-eb28d115-184f-4ce8-94e3-8a2f518b397d.png)
    4. deploy.yml文件如下：

```plain
# GitHub Actions workflow 配置文件
# 部署 VuePress 站点到 GitHub Pages

# 显式声明 schema 版本
"$schema": https://json.schemastore.org/github-workflow

name: Deploy to GitHub Pages

on:
  push:
    branches: [ master ]
  pull_request:
    branches: [ master ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v4
      with:
        fetch-depth: 0

    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: 18
        cache: 'npm'

    - name: Install dependencies
      run: npm install

    - name: Build VuePress site
      run: npm run docs:build

    - name: Check build output
      run: |
        echo "检查构建输出目录..."
        ls -la docs/.vuepress/dist/
        echo "构建完成，准备部署"

    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: docs/.vuepress/dist
        publish_branch: gh-pages
        force_orphan: true
        # 添加详细日志输出
        enable_jekyll: false
        # 确保构建目录存在
        keep_files: false  
```

#### 在本地项目开创一个新的分支“gh-pages”存储vuepress项目生成的dist文件夹	
注意！只存储生成的文件夹！不然github部署识别根文件错误得重新修改

#### <font style="color:#DF2A3F;">进入github开始正式部署</font>
    1. 进入项目，点击“setting”，点击pages进入配置

![](https://cdn.nlark.com/yuque/0/2025/png/46030861/1764067152441-3a181330-62d5-4dc2-be67-72862c0b4487.png)

    2. 这里的“3”区域就是我们的主要部署设置
        1. 这里选择的是“Deploy from a branch”模式，部署我们的分支,第二个步骤存储dist文件夹的（gh-pages）

![](https://cdn.nlark.com/yuque/0/2025/png/46030861/1764067324597-8d283778-f2d3-4096-a2af-d14163bc3e72.png)

        2. 选择分支，以及路径设置

![](https://cdn.nlark.com/yuque/0/2025/png/46030861/1764067373699-09804340-0e9a-44a0-83fa-6c74b22c2d65.png)![](https://cdn.nlark.com/yuque/0/2025/png/46030861/1764067400947-23f1d2fc-03d2-4fad-a560-6324b3d5c330.png)

    3. 刷新页面，查看这里出现的地址，访问看看
    4. 接下来，刷新等待，可以在本地项目发送一个空提交，触发workflow工作流工作，在仓库项目的“Action”区域，查看运行是否成功，显示绿色就是ok的，工作流处理需要些时间，要等待部署，大概一两分钟
    5. 最后最后，访问你的网址，看到内容应该根本地运行的内容是一致的！恭喜！你已经成功部署了

### 
---
title: 如何零基础利用 Github Pages 搭建个人博客（实操）
author: Sheep
date: 2025-11-28
category:
  - Blog
tag:
  - VuePress
  - GitHub Pages
sticky: 5
excerpt: 省流版总结 + VuePress 博客脚手架选型与在 GitHub Pages 上的部署流程实操。
---
