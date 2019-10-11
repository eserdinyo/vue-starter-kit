import * as constants from './constants';

export default {
  [constants.DENEME](state) {
    state.isLoading = !state.isLoading;
  },
};
