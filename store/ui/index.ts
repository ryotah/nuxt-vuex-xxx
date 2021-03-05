import {
  Actions,
  Mutations,
  Getters,
  Module,
  createMapper,
} from 'vuex-smart-module'

class LocalState {
  loading = false
}

class LocalGetters extends Getters<LocalState> {}

class LocalMutations extends Mutations<LocalState> {
  showLoading() {
    this.state.loading = true
  }

  hideLoading() {
    this.state.loading = false
  }
}

class LocalActions extends Actions<
  LocalState,
  LocalGetters,
  LocalMutations,
  LocalActions
> {
  showLoading() {
    this.commit('showLoading')
  }

  hideLoading() {
    this.commit('hideLoading')
  }
}

const localModule = new Module({
  state: LocalState,
  getters: LocalGetters,
  mutations: LocalMutations,
  actions: LocalActions,
})

// Create mapper
export const uiMapper = createMapper(localModule)

export default localModule
