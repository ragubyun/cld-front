/* eslint-disable no-param-reassign */

import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

import ServerConfig from './server-config';

const { address } = ServerConfig;

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: '',
    snackBar: {
      visibility: false,
      message: '',
      timeout: 5000,
    },
    beforeDraw: true,
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setSnackBar(state, snackBar) {
      state.snackBar = {
        ...state.snackBar,
        ...snackBar,
      };
    },
    setBeforeDraw(state, beforeDraw) {
      state.beforeDraw = beforeDraw;
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

      axios.post(`${address}/token`, {
        userAgent: navigator.userAgent,
        token,
      });
    },
    showSnackBar({ commit }, snackBar) {
      commit('setSnackBar', {
        ...snackBar,
        visibility: true,
      });
    },
    hideSnackBar({ commit }) {
      commit('setSnackBar', { visibility: false });
      commit('setBeforeDraw', false);
    },
  },
});
