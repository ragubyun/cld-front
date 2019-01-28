/* eslint-disable no-param-reassign */

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: '',
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
  },
  actions: {
    async saveToken({ commit }, { os, token }) {
      console.log('token: ', token);
      if (!token) {
        console.log('fail to get token');
        return;
      }

      commit('setToken', token);

      let newTokens;
      const { exists, _document: { data: { tokens } = {} } = {} } = await Vue.firestore.collection('cld').doc(os).get();

      if (exists && tokens) {
        newTokens = tokens.push(token);
      } else {
        newTokens = [token];
      }

      Vue.firestore.collection('cld')
        .doc(os)
        .set({
          newTokens,
        })
        .then(() => {
          console.log('[firestore] Token successfully written!');
        })
        .catch((error) => {
          console.error('[firestore] Error writing token: ', error);
        });
    },
  },
});
