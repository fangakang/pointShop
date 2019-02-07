import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/index'
import PointRecord from '@/components/pointRecord'
import ProductShowA from '@/components/productShowA'
import Sign from '@/components/sign'
import TrailNotice from '@/components/trailNotice'
import PointAdd from '@/components/pointAdd'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
        path: '/pointRecord',
        name: 'pointRecord',
        component: PointRecord
    },
      {
          path: '/productShowA',
          name: 'productShowA',
          component: ProductShowA
      },
      {
          path: '/sign',
          name: 'sign',
          component: Sign
      },
      {
          path: '/trailNotice',
          name: 'trailNotice',
          component: TrailNotice
      },
      {
          path: '/pointAdd',
          name: 'pointAdd',
          component: PointAdd
      },
      {
          path: '/',
          redirect: '/index'
      },
  ]
})
