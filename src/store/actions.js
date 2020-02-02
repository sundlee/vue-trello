import * as api from '../api';

const actions = {
  LOGIN({ commit }, { email, password }) {
    return api.auth.login(email, password)
      .then(({ accessToken }) => commit('LOGIN', accessToken));
  },
  ADD_BOARD(_, { title }) {
    return api.board.create(title)
      .then((data) => data.item);
  },
  FETCH_BOARDS({ commit }) {
    return api.board.fetch()
      .then((data) => {
        commit('SET_BOARDS', data.list);
      });
  },
  FETCH_BOARD({ commit }, { id }) {
    return api.board.fetch(id)
      .then((data) => {
        commit('SET_BOARD', data.item);
      });
  },
  ADD_CARD({ dispatch, state }, { title, listId, pos }) {
    return api.card.create(title, listId, pos)
      .then(() => dispatch('FETCH_BOARD', { id: state.board.id }));
  }
};

export default actions;
