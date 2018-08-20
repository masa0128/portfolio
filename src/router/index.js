import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Pingpong from '@/components/Pingpong'
import Hospital from '@/components/Hospital'
import Kampa from '@/components/Kampa'
import Bentou from '@/components/Bentou'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/pingpong',
      name: 'Pingpong',
      component: Pingpong
    },
    {
      path: '/hospital',
      name: 'Hospital',
      component: Hospital
    },
    {
      path: '/kampa',
      name: 'Kampa',
      component: Kampa
    },
    {
      path: '/bentou',
      name: 'Bentou',
      component: Bentou
    }
  ]
})
