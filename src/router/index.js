import Vue from 'vue'
import Router from 'vue-router'
import StartPage from '@/components/StartPage.vue'
import ListPage from '@/components/ListPage.vue'
import Card from '../components/cardComponent.vue'
import DialogCustom from '@/components/matDialog.vue'

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
      component: ListPage,
      children: [
        {
          path: ':id',
          name: 'DialogCustom',
          component: DialogCustom
        }
      ]
    },
    {
      path: '/card',
      name: 'Card',
      component: Card
    }
  ]
})
