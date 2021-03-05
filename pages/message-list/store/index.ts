/* eslint-disable no-unused-expressions */
import {
  Actions,
  Mutations,
  Getters,
  Module,
  createMapper,
  Context,
} from 'vuex-smart-module'
import { Store } from 'vuex'
import { rootModule } from '@/store'

export type Message = {
  value: string
  read: boolean
}

class LocalState {
  messages: Message[] = [
    {
      value: "What's going on? 👋",
      read: true,
    },
  ]
}

class LocalGetters extends Getters<LocalState> {
  rootCtx!: Context<typeof rootModule>

  $init(store: Store<any>): void {
    this.rootCtx = rootModule.context(store)
  }

  get unread() {
    // [NOTE] You can also access to `getters`, `rootState`, and `rootGetters`
    // This is a better point compare to "nuxt-typed-vuex".
    // https://github.com/ryotah/nuxt-vuex-xxx/blob/examples/nuxt-typed-vuex/pages/message-list/store/index.ts#L22
    this.getters.test
    this.rootCtx.modules.pages.modules.messageList.getters.test
    this.rootCtx.modules.ui.state.loading
    this.rootCtx.modules.counter.getters.evenOrOdd

    return this.state.messages.filter((message) => message.read)
  }

  get test() {
    return 'test'
  }
}

class LocalMutations extends Mutations<LocalState> {
  addMessage(payload: Message) {
    this.state.messages.push(payload)
  }

  reset() {
    Object.assign(this.state, new LocalState())
  }
}

class LocalActions extends Actions<
  LocalState,
  LocalGetters,
  LocalMutations,
  LocalActions
> {
  store!: Store<any>
  rootCtx!: Context<typeof rootModule>

  $init(store: Store<any>): void {
    this.rootCtx = rootModule.context(store)
    this.store = store
  }

  async addMessage(payload: Message) {
    this.rootCtx.modules.ui.commit('showLoading')
    this.commit(
      'addMessage',
      await new Promise((resolve) => setTimeout(() => resolve(payload), 300))
    )
    this.rootCtx.modules.ui.commit('hideLoading')
  }

  reset() {
    this.commit('reset')
  }
}

export const localModule = new Module({
  state: LocalState,
  getters: LocalGetters,
  mutations: LocalMutations,
  actions: LocalActions,
})

// Create mapper
export const messageListMapper = createMapper(localModule)

export default localModule
