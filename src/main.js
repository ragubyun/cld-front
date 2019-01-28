import Vue from 'vue';
import './plugins/vuetify';
import Firebase from './plugins/firebase';

import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;

Vue.use(Firebase, {
  apiKey: 'AIzaSyCm9wlz3mgA9A0pBH7XVdnSb8ZS-idytTE',
  authDomain: 'cld-fcm.firebaseapp.com',
  databaseURL: 'https://cld-fcm.firebaseio.com',
  projectId: 'cld-fcm',
  storageBucket: 'cld-fcm.appspot.com',
  messagingSenderId: '10197781024',
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
