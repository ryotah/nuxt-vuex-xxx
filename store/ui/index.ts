import { mutationTree, actionTree } from 'nuxt-typed-vuex'

function initialState() {
  return { loading: false }
}

const mutations = mutationTree(initialState, {
  showLoading(state) {
    state.loading = true
  },
  hideLoading(state) {
    state.loading = false
  },
})

const actions = actionTree(
  { state: initialState, mutations },
  {
    showLoading({ commit }) {
      commit('showLoading')
    },
    hideLoading({ commit }) {
      commit('hideLoading')
    },
  }
)

export default {
  namespaced: true,
  state: initialState,
  getters: {
    test() {
      return 'test'
    },
  },
  mutations,
  actions,
}
