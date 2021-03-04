import { ActionTree, MutationTree, GetterTree } from 'vuex'
import { RootState } from '@/store'

export type State = ReturnType<typeof initialState>

function initialState() {
  return {
    count: 0,
  }
}

const getters: GetterTree<State, RootState> = {
  evenOrOdd(state) {
    return state.count % 2 === 0 ? 'even' : 'odd'
  },
}

const mutations: MutationTree<State> = {
  increment(state, payload: number) {
    state.count += payload
  },
  decrement(state, payload: number) {
    state.count -= payload
  },
  reset(state) {
    state.count = 0
  },
}

const actions: ActionTree<State, RootState> = {
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

export default {
  // Note: No namespace for comparison.
  namespaced: false,
  state: initialState,
  getters,
  mutations,
  actions,
}
