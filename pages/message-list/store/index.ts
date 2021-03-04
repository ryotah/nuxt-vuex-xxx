import { getterTree, mutationTree, actionTree } from 'nuxt-typed-vuex'
import rootModule, { getAccessor } from '~/store'

export type Message = {
  value: string
  read: boolean
}

function initialState(): { messages: Message[] } {
  return {
    messages: [
      {
        value: "What's going on? 👋",
        read: true,
      },
    ],
  }
}

const getters = getterTree(initialState, {
  unread(state, _getters, _rootState, _rootGetters) {
    // [WARN] `getters`, `rootState`, and `rootGetters` are NOT type-safe
    // https://typed-vuex.roe.dev/getters
    return state.messages.filter((message) => message.read)
  },
  test() {
    return 'test'
  },
})

const mutations = mutationTree(initialState, {
  addMessage(state, payload: Message) {
    state.messages.push(payload)
  },
  reset(state) {
    Object.assign(state, initialState())
  },
})

const actions = actionTree(
  { state: initialState, mutations },
  {
    async addMessage({ commit }, payload: Message) {
      const accessor = getAccessor(this)
      accessor.ui.showLoading()
      commit(
        'addMessage',
        await new Promise((resolve) => setTimeout(() => resolve(payload), 300))
      )
      accessor.ui.hideLoading()
    },
    reset({ commit }) {
      commit('reset')
    },
  }
)

export default {
  namespaced: true,
  state: initialState,
  getters,
  mutations,
  actions,
}
