// 导入博客插件
import { blogPlugin } from "@vuepress/plugin-blog";
// 调试信息 - 检查博客插件是否正确加载
console.log('Blog plugin imported successfully');

// 定义一个调试函数来帮助排查文章列表不显示问题
const debugBlogPlugin = true;
// 导入默认主题
import { defaultTheme } from "@vuepress/theme-default";
// 导入配置函数
import { defineUserConfig } from "vuepress";
// 导入 Vite 打包器
import { viteBundler } from "@vuepress/bundler-vite";

export default defineUserConfig({
  port: 4700,

  // 修改这里为中文
  lang: "zh-CN",
  title: "SheepLearnLab",
  description: "学习学习学习",

  theme: defaultTheme({
    // 个人logo图标（放在public文件夹中）
    // 日间模式logo
    logo: "/images/logo.png",
    // 夜间模式logo
    darkLogo: "/images/logo-dark.png",

    // 导航栏中文
    navbar: [
      { text: "首页", link: "/" },
      { text: "博客", link: "/posts/blog/" },
      { text: "作品集", link: "/posts/portfolio/" },
      { text: "技能", link: "/posts/skills/" },
    ],

    // 添加主题配置让界面完全中文化
    locales: {
      "/": {
        selectLanguageName: "简体中文",
        // 其他中文文本配置
      },
    },
    // 配置全局侧边栏导航
    sidebar: {
      // 博客页面侧边栏
      "/posts/blog/": [
        {
          text: "博客文章",
          collapsible: true,
          children: [
            "",
            "github-pages-workflow-best-practices.md",
            "vuepress-theme-compatibility-guide.md",
            "如何零基础利用GithubPages搭建个人博客_1.md"
          ]
        }
      ],
      // 作品集页面侧边栏
      "/posts/portfolio/": [
        {
          text: "作品集",
          collapsible: true,
          children: [""]
        }
      ],
      // 技能页面侧边栏
      "/posts/skills/": [
        {
          text: "技能展示",
          collapsible: true,
          children: [""]
        }
      ]
    },
  }),

  plugins: [
    blogPlugin({
      // 调试模式 - 输出更多日志信息
      debug: debugBlogPlugin,
      
      // 文章必须放在 docs/posts/ 目录或其子目录下才会被识别为博客文章：
      filter: ({ filePathRelative, frontmatter }) => {
        const isPost = filePathRelative ? filePathRelative.startsWith("posts/") : false;
        // 排除 index.md 文件本身，只包含实际的文章
        const isNotIndex = filePathRelative ? !filePathRelative.endsWith("index.md") : false;
        if (debugBlogPlugin && isPost && isNotIndex) {
          console.log(`Found blog post: ${filePathRelative}, category: ${JSON.stringify(frontmatter.category)}`);
        }
        return isPost && isNotIndex;
      },

      // 获取文章信息
      getInfo: ({ frontmatter, title, data, filePathRelative }) => {
        const info = {
          title,
          author: frontmatter.author || "",
          date: frontmatter.date || null,
          category: frontmatter.category || [],
          tag: frontmatter.tag || [],
          path: filePathRelative,
          excerpt:
            // 支持通过 frontmatter 手动设置摘要
            typeof frontmatter.excerpt === "string"
              ? frontmatter.excerpt
              : data?.excerpt || "",
        };
        if (debugBlogPlugin) {
          console.log(`Processed post info: ${info.title}, categories: ${JSON.stringify(info.category)}`);
        }
        return info;
      },

      // 为所有页面生成摘要，除非用户选择禁用
      excerptFilter: ({ frontmatter }) =>
        !frontmatter.home &&
        frontmatter.excerpt !== false &&
        typeof frontmatter.excerpt !== "string",

      category: [
        {
          key: "category",
          getter: (page) => page.frontmatter.category || [],
          layout: "Category",
          itemLayout: "Category",
          frontmatter: () => ({
            title: "分类",
            sidebar: false,
          }),
          itemFrontmatter: (name) => ({
            title: `分类：${name}`,
            sidebar: false,
          }),
        },
        {
          key: "tag",
          getter: (page) => page.frontmatter.tag || [],
          layout: "Tag",
          itemLayout: "Tag",
          frontmatter: () => ({
            title: "标签",
            sidebar: false,
          }),
          itemFrontmatter: (name) => ({
            title: `标签：${name}`,
            sidebar: false,
          }),
        },
      ],

      type: [
        {
          key: "article",
          // Remove archive articles
          filter: (page) => !page.frontmatter.archive,
          layout: "Article",
          frontmatter: () => ({
            title: "文章列表",
            sidebar: false,
          }),
          // 按时间和置顶状态排序页面
          sorter: (pageA, pageB) => {
            if (pageA.frontmatter.sticky && pageB.frontmatter.sticky)
              return pageB.frontmatter.sticky - pageA.frontmatter.sticky;

            if (pageA.frontmatter.sticky && !pageB.frontmatter.sticky)
              return -1;

            if (!pageA.frontmatter.sticky && pageB.frontmatter.sticky) return 1;

            if (!pageB.frontmatter.date) return 1;
            if (!pageA.frontmatter.date) return -1;

            return (
              new Date(pageB.frontmatter.date).getTime() -
              new Date(pageA.frontmatter.date).getTime()
            );
          },
        },
        {
          key: "timeline",
          // 只有带日期的文章才应该添加到时间线
          filter: (page) => page.frontmatter.date instanceof Date,
          // 按时间排序页面
          sorter: (pageA, pageB) =>
            new Date(pageB.frontmatter.date).getTime() -
            new Date(pageA.frontmatter.date).getTime(),
          layout: "Timeline",
          frontmatter: () => ({
            title: "时间线",
            sidebar: false,
          }),
        },
      ],
      hotReload: true,
    }),
  ],

  bundler: viteBundler(),
});
