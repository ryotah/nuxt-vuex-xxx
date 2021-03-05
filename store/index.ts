import { Actions, Context, Module } from 'vuex-smart-module'
import { Store } from 'vuex'
import counter from '@/pages/counter/store'
import messageList from '@/pages/message-list/store'
import ui from './ui'

class IndexActions extends Actions {
  store!: Store<any>
  messageList!: Context<typeof messageList>

  $init(store: Store<any>): void {
    // Create and retain messageList module context
    this.messageList = messageList.context(store)

    this.store = store
  }

  reset() {
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    this.messageList.dispatch('reset') // Or this.messageList.actions.reset()

    // Get root context
    // const ctx = rootModule.context(this.store)
    // ctx.modules.pages.modules.messageList.state.messages

    // context.modules.xxx.dispatch("reset");;
    // ...
    //
    // Note:
    // ~~Or each module catches this event.~~
  }
}

export const rootModule = new Module({
  actions: IndexActions,
  modules: {
    ui,
    pages: new Module({
      namespaced: true,
      modules: {
        messageList,
      },
    }),
    // Note: No namespace for comparison.
    counter,
  },
})

const store = rootModule.getStoreOptions()

export default store
