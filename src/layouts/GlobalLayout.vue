<template>
  <div class="layout">
    <!-- 左側 Menu Bar -->
    <aside class="menu-bar">
      <div
        class="menu-item"
        :class="{ active: isActive(item.route) }"
        v-for="item in menuItems"
        :key="item.name"
        @click="onMenuClick(item)"
      >
        <img :src="item.icon" :alt="item.name" class="menu-icon" />
      </div>
    </aside>

    <!-- 主內容區域 -->
    <main class="main-content">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const menuItems = ref([
  { name: 'Explorer', icon: '/icons/explorer.svg', route: '/' },
  { name: 'Search', icon: '/icons/search.svg', route: '/search' },
  { name: 'Source Control', icon: '/icons/source-control.svg', route: '/source-control' },
  { name: 'Run and Debug', icon: '/icons/debug.svg', route: '/debug' },
  { name: 'Extensions', icon: '/icons/extensions.svg', route: '/extensions' }
])

const isActive = (itemRoute: string) => route.path === itemRoute

const onMenuClick = (item: { name: string; icon: string; route: string }) => {
  router.push(item.route)
}
</script>

<style scoped>
.layout {
  display: flex;
  height: 100%;
  width: 100%;
}

.menu-bar {
  position: relative;
  width: 60px;
  background-color: #1e1e1e;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
}

.menu-item {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
}

.menu-item.active {
  background-color: #333; /* 點選時的背景色 */
}

.menu-item.active::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px; /* 細條寬度 */
  background-color: #0078d4; /* 藍色細條 */
}

.menu-icon {
  width: 24px;
  height: 24px;
  filter: invert(0.7); /* 默認圖標顏色 */
  transition: filter 0.3s;
}

.menu-item.active .menu-icon {
  filter: invert(1); /* 點選時圖標顏色變亮 */
}

.main-content {
  flex: 1;
  background-color: #252526;
  color: #fff;
  overflow: auto;
}
</style>