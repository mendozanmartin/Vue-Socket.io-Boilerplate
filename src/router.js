import Vue from 'vue'
import Router from 'vue-router'
import WVLounge from './components/WVLounge.vue'
import Directory from './components/Directory'
import Start from './components/Start'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'start',
      component: Start
    },
    {
      path: '/directory',
      name: 'directory',
      component: Directory
    },
    {
      path: '/lounge',
      name: 'wvlounge',
      component: WVLounge
    }
  ]
})
