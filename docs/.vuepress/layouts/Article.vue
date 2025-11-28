<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
import ArticleList from '../components/ArticleList.vue'
import { usePageFrontmatter } from '@vuepress/client'
import { ref } from 'vue'

const fm = usePageFrontmatter()

// 直接在组件初始化时就设置 displayItems 数据，不要等到 onMounted
const displayItems = ref([
  {
    info: {
      title: 'GitHub Pages 工作流最佳实践：从构建到发布',
      author: 'Sheep',
      date: '2025-11-28',
      category: ['Blog'],
      tag: ['GitHub Actions', 'GitHub Pages', 'CI/CD'],
      excerpt: '这是一篇关于 GitHub Pages 工作流的最佳实践指南。'
    },
    path: '/posts/blog/github-pages-workflow-best-practices.md'
  },
  {
    info: {
      title: 'VuePress 主题与插件兼容性避坑指南',
      author: 'Sheep',
      date: '2025-11-28',
      category: ['Blog'],
      tag: ['VuePress', 'Theme', 'Plugin'],
      excerpt: 'VuePress 主题与插件的兼容性问题及解决方案。'
    },
    path: '/posts/blog/vuepress-theme-compatibility-guide.md'
  },
  {
    info: {
      title: '如何零基础利用GithubPages搭建个人博客',
      author: 'Sheep',
      date: '2025-11-28',
      category: ['Blog'],
      tag: ['GitHub Pages', '博客'],
      excerpt: '从零开始搭建个人博客的详细教程。'
    },
    path: '/posts/blog/如何零基础利用GithubPages搭建个人博客_1.md'
  }
])

console.log('Article layout initialized with mock data')
console.log('Initial displayItems:', displayItems.value)
</script>

<template>
  <ParentLayout>
    <template #page>
      <main class="page">
        <h1>博客文章</h1>
        <ArticleList :items="displayItems" />
      </main>
    </template>
  </ParentLayout>
</template>

<style scoped>
.page {
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
  color: var(--vp-c-text-1);
}
</style>
