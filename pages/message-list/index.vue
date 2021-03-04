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

export default Vue.extend({
  data() {
    return {
      mapper: this.$accessor.pages.messageList,
      template: 'Hey there! 👋',
    }
  },
  computed: {
    messages() {
      return this.$accessor.pages.messageList.messages
    },
    unread() {
      return this.$accessor.pages.messageList.unread
    },
  },
  methods: {
    onClickAddMessage() {
      this.$accessor.pages.messageList.addMessage({
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
