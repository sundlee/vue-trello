import Vue from 'vue';
import Vuex from 'vuex';
import * as api from '../api';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isAddBoard: false,
    boards: [],
    token: null,
  },
  getters: {
    isAuth (state) {
      return !!state.token;
    },
  },
  mutations: {
    SET_IS_ADD_BOARD(state, toggle) {
      state.isAddBoard = toggle;
    },
    SET_BOARDS(state, boards) {
      state.boards = boards;
    },
    LOGIN (state, token) {
      if (!token) return;

      state.token = token;
      localStorage.setItem('token', token);
      api.setAuthInHeader(token);
    },
    LOGOUT (state) {
      state.token = null;
      delete localStorage.token;
      api.setAuthInHeader(null);
    },
  },
  actions: {
    ADD_BOARD(_, { title }) {
      return api.board.create(title);
    },
    FETCH_BOARDS({ commit }) {
      return api.board.fetch()
        .then((data) => {
          commit('SET_BOARDS', data.list);
        });
    },
    LOGIN ({ commit }, { email, password }) {
      return api.auth.login(email, password)
        .then(({ accessToken }) => commit('LOGIN', accessToken));
    }
  },
});

const { token } = localStorage;
store.commit('LOGIN', token);

export default store;
