import Vue from 'vue'
import Router from 'vue-router'
import Start from './components/Start'
import DesktopDirectory from './components/DesktopDirectory'
import MobileDirectory from './components/MobileDirectory'
import DesktopLounge from './components/DesktopLounge'
import MobileLounge from './components/MobileLounge'
import DesktopPacman from './components/PacmanGame/DesktopPacman'


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
      path: '/desktoppacman',
      component: DesktopPacman
    }
  ]
})
