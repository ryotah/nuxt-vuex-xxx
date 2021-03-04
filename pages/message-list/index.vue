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
import { mapGetters, mapActions, mapState } from 'vuex'
// Note:
// You can also use `createNamespacedHelpers`
// const { mapState, mapActions } = createNamespacedHelpers('some/nested/module')

export default Vue.extend({
  data() {
    return {
      template: 'Hey there! 👋',
    }
  },
  computed: {
    ...mapState('pages/messageList', ['messages']),
    ...mapGetters('pages/messageList', ['unread']),
  },
  methods: {
    ...mapActions('pages/messageList', ['addMessage']),
    onClickAddMessage() {
      // Note:
      // If you use `dispatch` directly, it will be the following.
      // this.$store.dispatch("messageList/addMessage", {
      //   value: this.template,
      //   read: false
      // });
      this.addMessage({
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
