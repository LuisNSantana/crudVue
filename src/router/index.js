import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Todos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect:'/todos'
  },
  {
    path: '/todos',
    name: 'todos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "todos" */ '../views/Todos.vue')
  },
  {
   path: '/todos/create',
   name: 'todos-create',
    component: () => import(/* webpackChunkName: "todos-create" */ '../views/TodoCreate.vue')

  },
  {
    path: '/todos/:id/update',
    name: 'todos-update',
    component: () => import(/* webpackChunkName: "todos-update" */ '../views/TodosUpdate.vue')

  }
]

const router = new VueRouter({
  routes
})

export default router
