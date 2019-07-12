import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import ProjectView from './views/ProjectView.vue';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/projectView',
      name: 'ProjectView',
      component: ProjectView,
      props: true,
    },
  ],
});
export default router;
