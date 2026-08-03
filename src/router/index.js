import Vue from 'vue'
import VueRouter from 'vue-router'

import HeroView from '../views/HeroView.vue'
import OurCoffeeView from '../views/OurCoffeeView.vue'
import PleasureView from '../views/PleasureView.vue'
import ContactsView from '../views/ContactsView.vue'
import ThankPageView from '../views/ThankPageView.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: HeroView },
  { path: '/our-coffee', component: OurCoffeeView },
  { path: '/for-pleasure', component: PleasureView },
  { path: '/contact-us', component: ContactsView },
  { path: '/thank-page', component: ThankPageView },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
