import {
  Actions,
  Mutations,
  Getters,
  Module,
  createMapper,
} from 'vuex-smart-module'

class LocalState {
  count = 0
}

class LocalGetters extends Getters<LocalState> {
  get evenOrOdd() {
    return this.state.count % 2 === 0 ? 'even' : 'odd'
  }
}

class LocalMutations extends Mutations<LocalState> {
  increment(payload: number) {
    this.state.count += payload
  }

  decrement(payload: number) {
    this.state.count -= payload
  }

  reset() {
    this.state.count = 0
  }
}

class LocalActions extends Actions<
  LocalState,
  LocalGetters,
  LocalMutations,
  LocalActions
> {
  increment(payload: number) {
    this.commit('increment', payload)
  }

  decrement(payload: number) {
    this.commit('decrement', payload)
  }

  reset() {
    this.commit('reset')
  }
}

export const localModule = new Module({
  // Note: No namespace for comparison.
  namespaced: false,
  state: LocalState,
  getters: LocalGetters,
  mutations: LocalMutations,
  actions: LocalActions,
})

// Create mapper
export const counterMapper = createMapper(localModule)

export default localModule
