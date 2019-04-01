import Vue from 'vue';
import Router from 'vue-router';
import CallList from './views/CallList.vue';
import Call from "./views/Call.vue";
import store from "./store";

Vue.use(Router);

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'call-list',
      component: CallList
    },
    {
      path: '/call',
      name: 'call',
      component: Call,
      props: true,
      beforeEnter(to, from, next) {
        if (!to.params.call) next('/');
        next();
      }
    }
  ]
});

router.afterEach((to, from, next) => {
  // Clear Error
  store.commit("setError", "");
});

export default router;