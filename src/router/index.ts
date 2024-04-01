import { createRouter, createWebHistory } from 'vue-router'
import Background from '../views/main.vue'
import Theater from '../views/theater.vue'
import Svg from '../components/icon-arrow.vue'
import Test from '@/views/test/test3.vue'
import ArticleShow from '@/views/articleShow.vue'
// import ArticleShow from '@/views/test/test2.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'background',
      component: Background
    },
    {
      path: '/theater',
      name: 'theater',
      component: Theater
    },
    {
      path: '/svg',
      name: 'svg',
      component: Svg
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
      path: '/articleShow/:id',
      name: 'articleShow',
      component: ArticleShow
    }
  ]
})

export default router
