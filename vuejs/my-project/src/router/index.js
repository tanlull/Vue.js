import Vue from 'vue'
import Router from 'vue-router'
//import Hello from '@/components/Hello'
import Contacts from '@/page/Contacts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Contacts',
      component: Contacts
    }
  ]
})
