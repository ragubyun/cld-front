/* eslint-disable */

import firebase from 'firebase/app';
import 'firebase/messaging';

export default {
  install(Vue, options) {
    firebase.initializeApp(options);

    Vue.firebase = Vue.prototype.$firebase = firebase;
    Vue.messaging = Vue.prototype.$messaging = firebase.messaging();
  },
};
