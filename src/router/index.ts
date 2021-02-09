import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue'
import Forgot from '../views/Forgot.vue'
import Register from '../views/Register.vue'
import Intro from '../views/Intro.vue'
import Allletters from '../views/Allletters.vue'
import Choosetemplate from '../views/Choosetemplate.vue'
import Sendfax from '../views/Sendfax.vue';
import Sendprintedletter from '../views/Sendprintedletter.vue';
import Writedocument from '../views/Writedocument.vue';
import Changesignature from '../views/Changesignature.vue';
import Preview from '../views/Preview.vue';
import Selectsendtype from '../views/Selectsendtype.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/forgot',
    name: 'Forgot',
    component: Forgot
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/intro',
    name: 'Intro',
    component: Intro
  },
  {
    path: '/all-letters',
    name: 'Allletters',
    component: Allletters
  },
  {
    path: '/choose-template',
    name: 'Choosetemplate',
    component: Choosetemplate
  },
  {
    path: '/sendfax',
    name: 'Sendfax',
    component: Sendfax
  },
  {
    path: '/sendprintedletter',
    name: 'Sendprintedletter',
    component: Sendprintedletter
  },
  {
    path: '/writedocument',
    name: 'Writedocument',
    component: Writedocument
  },
  {
    path: '/changesignature',
    name: 'Changesignature',
    component: Changesignature
  },
  {
    path: '/preview',
    name: 'Preview',
    component: Preview
  },
  {
    path: '/selectsendtype',
    name: 'Selectsendtype',
    component: Selectsendtype
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
