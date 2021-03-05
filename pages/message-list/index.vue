<template>
  <div>
    <div>You have {{ unread.length }} unread messages</div>
    <ul>
      <li v-for="(m, i) in messages" :key="i" :class="{ read: m.read }">
        {{ m.value }}
      </li>
    </ul>
    <button @click="onClickAddMessage">Add message</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import { localModule, Message } from './store'

export default Vue.extend({
  data() {
    return {
      mapper: localModule.context(this.$store),
      template: 'Hey there! 👋',
    }
  },
  computed: {
    messages(): Message[] {
      return this.mapper.state.messages
    },
    unread(): Message[] {
      return this.mapper.getters.unread
    },
  },
  methods: {
    onClickAddMessage() {
      this.mapper.actions.addMessage({
        value: this.template,
        read: false,
      })
    },
  },
})
</script>

<style scoped>
.read {
  text-decoration: line-through;
}
</style>
