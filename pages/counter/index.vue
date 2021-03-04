<template>
  <div>
    Clicked: {{ count }} times, count is {{ evenOrOdd }}.
    <button @click="onIncrement">+</button>
    <button @click="onDecrement">-</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters, mapActions, mapState } from 'vuex'

export default Vue.extend({
  computed: {
    ...mapState({
      // Note:
      // You can also add a type annotation like `state: CounterState`.
      // However it may be a little annoying for everyday development.
      count: (state: any) => state.counter.count,
    }),
    ...mapGetters(['evenOrOdd']),
  },
  methods: {
    ...mapActions(['increment', 'decrement']),
    onIncrement() {
      this.increment(1)
    },
    onDecrement() {
      this.decrement(1)
    },
  },
})
</script>
