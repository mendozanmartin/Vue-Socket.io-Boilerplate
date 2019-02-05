import Vue from 'vue'
import Router from 'vue-router'

import Start from './components/Start'
import DesktopDirectory from './components/Directory/DesktopDirectory'
import MobileDirectory from './components/Directory/MobileDirectory'
import DesktopLounge from './components/Lounge/DesktopLounge'
import MobileLounge from './components/Lounge/MobileLounge'
import DesktopPhaser from './components/PhaserGame/DesktopPhaser'
import MobilePhaser from './components/PhaserGame/MobilePhaser'
import Thanks from './components/Thanks'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Start
    },
    {
      path: '/mobiledirectory',
      component: MobileDirectory
    },
    {
      path: '/desktopdirectory',
      component: DesktopDirectory
    },
    {
      path: '/mobilelounge',
      component: MobileLounge
    },
    {
      path: '/desktoplounge',
      component: DesktopLounge
    },
    {
      path: '/desktopphaser',
      component: DesktopPhaser
    },
    {
      path: '/mobilephaser',
      component: MobilePhaser
    },
    {
      path: '/thanks',
      component: Thanks
    }
  ]
})
