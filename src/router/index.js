import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import count from '@/pages/demo/count'
import music from '@/pages/music'
import mymusic from '@/pages/music/mymusic'
import diy from '@/pages/music/mymusic/diy'
import lists from '@/pages/music/mymusic/lists'
import musicItems from '@/pages/music/mymusic/musicItems'
import preredio from '@/pages/music/mymusic/preredio'
import radiomusic from '@/pages/music/radiomusic'
import indexmusic from '@/pages/music/indexmusic'
import discuz from '@/pages/discuz'
import iqiyi from '@/pages/iqiyi'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Home
    },
    {
      path: '/count',
      name: 'count',
      component: count
    },
    {
      path: '/discuz',
      name: 'discuz',
      component: discuz
    },
    {
      path: '/iqiyi',
      name: 'iqiyi',
      component: iqiyi
    },
    {
      path: '/music',
      component: music,
      children: [
        {
          path: 'mymusic',
          component: mymusic,
          children: [
            {
              path: '/',
              name: 'diy',
              component: diy
            },
            {
              path: 'lists',
              name: 'lists',
              component: lists
            },
            {
              path: 'musicItems',
              name: 'musicItems',
              component: musicItems
            },
            {
              path: 'preredio',
              name: 'preredio',
              component: preredio
            }
          ]
        },
        {
          path: 'radiomusic',
          name: 'radiomusic',
          component: radiomusic
        },
        {
          path: '/',
          name: 'indexmusic',
          component: indexmusic
        }
      ]
    }
  ]
})
