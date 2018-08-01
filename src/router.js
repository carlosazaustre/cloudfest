import Vue from 'vue';
import Router from 'vue-router';
import { eventInfo } from '@/data/index';

import Home from './views/Home/Index.vue';
import Speakers from './views/Speakers/Index.vue';
import ConductCode from './views/ConductCode/Index.vue';

Vue.use( Router );

export default new Router( {
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/speakers',
      name: 'speakers',
      component: Speakers,
    },
    {
      path: '/tickets',
      beforeEnter() {
        window.location.href = eventInfo.ticketsURL;
      },
    },
    {
      path: '/c4p',
      beforeEnter() {
        window.location.href = eventInfo.c4pURL;
      },
    },
    {
      path: '/coc',
      name: 'coc',
      component: ConductCode,
    },
  ],
} );
