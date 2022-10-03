import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/home'
import Article from "@/views/article";
import Review from "@/views/review";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/article',
    name: 'Article',
    component: Article
  },
  {
    path: '/review',
    name: 'Review',
    component: Review
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
