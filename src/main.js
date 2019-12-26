import Vue from 'vue';
import App from './App.vue'
import router from './router'
import VS2 from 'vue-script2'

Vue.use(VS2)
Vue.config.productionTip = false

new Vue(Vue.util.extend({ router }, App)).$mount('#app');
