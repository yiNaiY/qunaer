import Vue from 'vue'
import Router from 'vue-router'
import Index from './components/index.vue'
import City from './components/city.vue'
import Detail from './components/detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    }
  ]
})
