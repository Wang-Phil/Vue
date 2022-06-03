import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterOne from '../components/RegisterOne.vue'
//import Login from "../components/Login";
import LoginOne from "../components/LoginOne"
import LogoutOne from "../components/LogoutOne"
import VerifyOne from "../components/VerifyOne"


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: LoginOne
  },
  {
    path: '/verify',
    name: 'verify',
    component: Verify
  },
  {
    path: '/logout',
    name: 'logout',
    component: Logout
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
