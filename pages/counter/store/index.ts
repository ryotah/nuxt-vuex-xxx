import { getterTree, mutationTree, actionTree } from 'nuxt-typed-vuex'

function initialState() {
  return {
    count: 0,
  }
}

const getters = getterTree(initialState, {
  evenOrOdd(state) {
    return state.count % 2 === 0 ? 'even' : 'odd'
  },
})

const mutations = mutationTree(initialState, {
  increment(state, payload: number) {
    state.count += payload
  },
  decrement(state, payload: number) {
    state.count -= payload
  },
  reset(state) {
    state.count = 0
  },
})

const actions = actionTree(
  { state: initialState, getters, mutations },
  {
    increment({ commit }, payload: number) {
      commit('increment', payload)
    },
    decrement({ commit }, payload: number) {
      commit('decrement', payload)
    },
    reset({ commit }) {
      commit('reset')
    },
  }
)

export default {
  // Note: No namespace for comparison.
  namespaced: false,
  state: initialState,
  getters,
  mutations,
  actions,
}
