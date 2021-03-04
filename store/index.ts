import { actionTree, getAccessorType, useAccessor } from 'typed-vuex'
import { Store } from 'vuex'
import counter from '@/pages/counter/store/index'
import messageList from '@/pages/message-list/store/index'
import ui from './ui/index'

const actions = actionTree(
  {
    state: {},
  },
  {
    reset() {
      const accessor = getAccessor(this)
      accessor.pages.messageList.reset()
      // [WARN]:
      // accessor.pages.nonExistent.reset() will be an error, but
      // accessor.nonExistent.messageList.reset() will NOT be an error.

      // accessor.xxx.reset();
      // ...
      //
      // Note:
      // Or each module catches this event.
    },
  }
)

const rootModule = {
  actions,
  modules: {
    ui,
    pages: {
      namespaced: true,
      modules: {
        messageList,
      },
    },
    // Note: No namespace for comparison.
    counter,
  },
}

// nuxt-typed-vuex
export const accessorType = getAccessorType(rootModule)
export const getAccessor = (store?: Store<any>) => {
  if (!store) {
    throw new Error('store is undefined')
  }
  return useAccessor(store, rootModule)
}

export default rootModule
