import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from './pages/Home';

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: '/',
      name: "home",
      components: Home
    },
    {
      path: '/chi-siamo',
      name: "about",
      components: About
    }
  ]
});

export default router;
