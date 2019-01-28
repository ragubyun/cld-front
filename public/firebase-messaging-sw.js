/* eslint-disable */

importScripts('https://www.gstatic.com/firebasejs/5.7.3/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.7.3/firebase-messaging.js');

firebase.initializeApp({
  apiKey: 'AIzaSyCm9wlz3mgA9A0pBH7XVdnSb8ZS-idytTE',
  authDomain: 'cld-fcm.firebaseapp.com',
  databaseURL: 'https://cld-fcm.firebaseio.com',
  projectId: 'cld-fcm',
  storageBucket: 'cld-fcm.appspot.com',
  messagingSenderId: '10197781024',
});

firebase.messaging();

self.addEventListener('fetch', (event) => {
  console.log('fetch event');
  if (event.request.cache === 'only-if-cached') {
    event.request.mode = 'same-origin';
  }
  // 현재는 network only
  event.respondWith(fetch(event.request));
});
