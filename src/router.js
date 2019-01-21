import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from './components/LandingPage.vue'
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
      path: '/landingpage',
      name: 'landingpage',
      component: LandingPage
    }
  ]
})
