import Vue from 'vue'
import VueRouter from 'vue-router'
import Movie from '@/views/Movie'
import Cinema from '@/views/Cinema'
import Mine from '@/views/Mine'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/movie',
  //   name: 'Movie',
  //   component: Movie
  // },
  {
    path: '/movie',
    name: 'Movie',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "movie" */ '@/views/Movie')
  }, {
    path: '/cinema',
    name: 'Cinema',
    component: () => import('@/views/Cinema')
  }, {
    path: '/mine',
    name: 'Mine',
    component: () => import('@/views/Mine')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
