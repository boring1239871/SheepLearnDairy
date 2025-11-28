<script setup>
defineProps({
  /** 文章列表数据 */
  items: {
    type: Array,
    required: true,
  },
  /** 是否为时间线模式 */
  isTimeline: Boolean,
})
</script>

<template>
  <div class="card-grid">
    <div v-if="!items.length" class="empty-state">暂无文章</div>

    <div
      v-for="{ info, path } in items"
      :key="path"
      class="card"
    >
      <router-link :to="path" class="card-link">
        <div class="card-header">
          <h3 class="card-title">{{ info.title }}</h3>
        </div>
        
        <div class="card-content">
          <div class="card-meta">
            <span v-if="info.date" class="meta-item date">
              <svg class="icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              {{ new Date(info.date).toLocaleDateString('zh-CN') }}
            </span>
            
            <span v-if="info.author" class="meta-item author">
              <svg class="icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              {{ info.author }}
            </span>
          </div>
          
          <div v-if="info.excerpt" class="card-excerpt">
            {{ info.excerpt }}
          </div>
          
          <div class="card-tags">
            <span v-for="cat in info.category || []" :key="cat" class="tag category-tag">
              {{ cat }}
            </span>
            <span v-for="tag in info.tag || []" :key="tag" class="tag tag-item">
              {{ tag }}
            </span>
          </div>
        </div>
        
        <div class="card-footer">
          <span class="read-more">阅读更多 →</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss">
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 28px;
  padding: 1rem 0;
  max-width: 1200px;
  margin: 0 auto;
}

.empty-state {
  grid-column: 1 / -1;
  text-align: center;
  padding: 4rem 2rem;
  color: var(--vp-c-text-3);
  font-size: 1.2rem;
}

.card {
  background: var(--vp-c-bg);
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid var(--vp-c-border);
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    border-color: var(--vp-c-accent-light);
  }
}

.card-link {
  display: flex;
  flex-direction: column;
  height: 100%;
  text-decoration: none;
  color: inherit;
  padding: 1.5rem;
}

.card-header {
  margin-bottom: 1rem;
}

.card-title {
  font-size: 1.35rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  line-height: 1.4;
  margin: 0;
  transition: color 0.2s ease;

  .card:hover & {
    color: var(--vp-c-accent);
  }
}

.card-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.card-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 0.875rem;
  color: var(--vp-c-text-3);
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.icon {
  flex-shrink: 0;
}

.card-excerpt {
  font-size: 0.95rem;
  line-height: 1.6;
  color: var(--vp-c-text-2);
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0.5rem 0;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto;
}

.tag {
  font-size: 0.75rem;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-weight: 500;
  transition: all 0.2s ease;
}

.category-tag {
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  border: 1px solid var(--vp-c-border);
}

.tag-item {
  background-color: var(--vp-c-accent-bg);
  color: var(--vp-c-accent);
  border: 1px solid var(--vp-c-accent-light);
}

.card-footer {
  margin-top: 1.25rem;
  padding-top: 1rem;
  border-top: 1px solid var(--vp-c-border);
}

.read-more {
  font-size: 0.875rem;
  color: var(--vp-c-accent);
  font-weight: 500;
  transition: opacity 0.2s ease;
  display: inline-block;

  .card:hover & {
    opacity: 0.8;
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .card-grid {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 0 1rem;
  }
  
  .card {
    margin: 0;
  }
  
  .card-link {
    padding: 1.25rem;
  }
  
  .card-title {
    font-size: 1.25rem;
  }
  
  .card-meta {
    gap: 0.75rem;
    font-size: 0.8125rem;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .card-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
  }
}
</style>
