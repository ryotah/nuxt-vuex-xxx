import { ActionTree, MutationTree, GetterTree } from 'vuex'
import { RootState } from '@/store'

export type Message = {
  value: string
  read: boolean
}

export type State = {
  messages: Message[]
}

function initialState(): State {
  return {
    messages: [
      {
        value: "What's going on? 👋",
        read: true,
      },
    ],
  }
}

const getters: GetterTree<State, RootState> = {
  unread(state) {
    return state.messages.filter((message) => message.read)
  },
}

const mutations: MutationTree<State> = {
  addMessage(state, payload: Message) {
    state.messages.push(payload)
  },
  reset(state) {
    Object.assign(state, initialState())
  },
}

const actions: ActionTree<State, RootState> = {
  async addMessage({ commit }, payload: Message) {
    commit('ui/showLoading', null, { root: true })
    commit(
      'addMessage',
      await new Promise((resolve) => setTimeout(() => resolve(payload), 300))
    )
    commit('ui/hideLoading', null, { root: true })
  },
  reset({ commit }) {
    commit('reset')
  },
}

export default {
  namespaced: true,
  state: initialState,
  getters,
  mutations,
  actions,
}
