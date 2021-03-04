import { ActionTree, MutationTree } from 'vuex'
import { RootState } from '@/store'

export type State = ReturnType<typeof initialState>

function initialState() {
  return { loading: false }
}

const mutations: MutationTree<State> = {
  showLoading(state) {
    state.loading = true
  },
  hideLoading(state) {
    state.loading = false
  },
}

const actions: ActionTree<State, RootState> = {
  showLoading({ commit }) {
    commit('showLoading')
  },
  hideLoading({ commit }) {
    commit('hideLoading')
  },
}

export default {
  state: initialState,
  getters: {
    test() {
      return 'test'
    },
  },
  mutations,
  actions,
}
