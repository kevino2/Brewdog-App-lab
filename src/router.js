import Vue from 'vue';
import Router from 'vue-router';
import BeersView from '@/views/BeersView.vue';
import BeerInfo from '@/views/BeerInfo.vue';


Vue.use(Router);

export const router = new Router ({
  routes: [
    {
      path: '',
      name: 'beers',
      component: BeersView
    },
    {
      path: '/beer',
      name: 'beerInfo',
      component: BeerInfo,
      props: true
    }
  ]
})
