<template>
  <div>
    Clicked: {{ count }} times, count is {{ evenOrOdd }}.
    <button @click="onIncrement">+</button>
    <button @click="onDecrement">-</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      mapper: this.$accessor.counter,
    }
  },
  computed: {
    count(): number {
      return this.mapper.count
    },
    evenOrOdd(): 'even' | 'odd' {
      return this.mapper.evenOrOdd
    },
  },
  methods: {
    onIncrement() {
      this.mapper.increment(1)
    },
    onDecrement() {
      this.mapper.decrement(1)
    },
  },
})
</script>
