import Vue from 'vue'
import Router from 'vue-router'
import StartPage from '@/components/StartPage.vue'
import ListPage from '@/components/ListPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'StartPage',
      component: StartPage
    },
    {
      path: '/list',
      name: 'ListPage',
      component: ListPage
    }
  ]
})
