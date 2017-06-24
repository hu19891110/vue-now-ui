import Vue from 'vue'
import Element from 'element-ui'
import entry from './app'
import VueRouter from 'vue-router'
import routes from './route.config'
import NowUI from 'src/index.js'
import demoBlock from './components/demo-block.vue'
import MainFooter from './components/footer.vue'
import MainHeader from './components/header.vue'
import SideNav from './components/side-nav'
import FooterNav from './components/footer-nav'
import title from './i18n/title.json'

Vue.use(NowUI)
Vue.use(Element)
Vue.use(VueRouter)
Vue.component('demo-block', demoBlock)
Vue.component('main-footer', MainFooter)
Vue.component('main-header', MainHeader)
Vue.component('side-nav', SideNav)
Vue.component('footer-nav', FooterNav)

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes
})

router.afterEach(route => {
  const data = title[route.meta.lang]
  for (let val in data) {
    if (new RegExp('^' + val, 'g').test(route.name)) {
      document.title = data[val]
      return
    }
  }
  document.title = 'Vue Now UI'
})

new Vue({ // eslint-disable-line
  render: h => h(entry),
  router
}).$mount('#app')