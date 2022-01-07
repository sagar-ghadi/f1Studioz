import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CreateNewOrder from '../components/CreateNewOrder.vue'
import ConfigureNewDoor from '../components/ConfigureNewDoor.vue'
import ConfigureNewDoorOptions from '../components/ConfigureNewDoorOptions.vue'
import Cart from '../components/Cart.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/createNewOrder',
    name: 'Create New Order',
    component: CreateNewOrder
  },
  {
    path: '/configureNewDoor',
    name: 'Configure New Door',
    component: ConfigureNewDoor
  },
  {
    path: '/configureNewDoorOptions',
    name: 'Configure New Door Options',
    component: ConfigureNewDoorOptions
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  }
]

const router = new VueRouter({
  routes
})

export default router
