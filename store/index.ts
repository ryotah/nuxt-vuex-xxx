import { ActionTree } from 'vuex'
import messageList, {
  State as messageListState,
} from '@/pages/message-list/store/index'
import counter, { State as counterState } from '@/pages/counter/store/index'
import { State as uiState } from './ui/index'

export type RootState = {
  counter: counterState
  messageList: messageListState
  ui: uiState
}

export const actions: ActionTree<{}, RootState> = {
  reset({ dispatch }) {
    dispatch('pages/messageList/reset')
    // dispatch("xxx/reset");
    // ...
    //
    // Note:
    // Or each module catches this event.
  },
}

export default {
  actions,
  modules: {
    counter,
    pages: {
      namespaced: true,
      modules: {
        messageList,
      },
    },
  },
}
