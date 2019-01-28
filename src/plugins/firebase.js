/* eslint-disable */

import firebase from 'firebase/app';
import 'firebase/messaging';
import 'firebase/firestore';

export default {
  install(Vue, options) {
    firebase.initializeApp(options);

    const firestore = firebase.firestore();
    firestore.settings({ timestampsInSnapshots: true });

    Vue.firebase = Vue.prototype.$firebase = firebase;
    Vue.messaging = Vue.prototype.$messaging = firebase.messaging();
    Vue.firestore = Vue.prototype.$firestore = firestore;
  },
};
