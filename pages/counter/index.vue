<template>
  <div>
    Clicked: {{ count }} times, count is {{ evenOrOdd }}.
    <button @click="onIncrement">+</button>
    <button @click="onDecrement">-</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { counterMapper, localModule } from './store'

export default Vue.extend({
  data() {
    return {
      mapper: localModule.context(this.$store),
    }
  },
  computed: {
    ...counterMapper.mapState(['count']),
    // ...counterMapper.mapGetters(['evenOrOdd']),
    // Or
    // count(): number {
    //   return this.mapper.state.count
    // },
    evenOrOdd(): 'even' | 'odd' {
      return this.mapper.getters.evenOrOdd
    },
  },
  methods: {
    onIncrement() {
      this.mapper.dispatch('increment', 1)
    },
    onDecrement() {
      this.mapper.actions.decrement(1)
    },
  },
})
</script>
