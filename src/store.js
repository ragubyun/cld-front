/* eslint-disable no-param-reassign */

import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

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
    async saveToken({ commit }, token) {
      console.log('token: ', token);
      if (!token) {
        console.log('fail to get token');
        return;
      }

      commit('setToken', token);

      axios.post('http://localhost:3000/api/v1/token', {
        userAgent: navigator.userAgent,
        token,
      });
    },
  },
});
