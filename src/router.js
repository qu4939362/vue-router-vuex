import Vue from 'vue'
import VueRouter from 'vue-router'
import Logo from './views/logo'
import Home from './views/home'
import Chat from './views/chat'
import Text from './views/text'
// import Footers from "./views/footers"

Vue.use(VueRouter)

export default new VueRouter ({
  mode:'history',
  routes:[
    {
      path:'/',
      redirect: {name:'logo'}
      // redirect:'/home'
    }, {
      path:'/logo',
      component: Logo,
      name:'logo'
    }, {
      path:'/home',
      component:Home,
    }, {
      path:'/chat',
      component:Chat
    }, {
      path:'/text/:id',
      component:Text
    }
  ]
})