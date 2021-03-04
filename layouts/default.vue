<template>
  <div>
    <main>
      <h1>Nuxt × Vuex demo</h1>
      <nuxt-link to="counter">/counter</nuxt-link> |
      <nuxt-link to="message-list">/message-list</nuxt-link>
      <div class="example">
        <Nuxt />
      </div>
    </main>
    <pre>{{ $store.state }}</pre>
    <button @click="onReset">Reset</button>
    <div v-if="loading" class="blocker">Loading ...</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    loading() {
      return this.$store.state.ui.loading
    },
  },
  methods: {
    onReset() {
      this.$store.dispatch('reset')
    },
  },
})
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.blocker {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  font-size: 3rem;
  font-weight: bold;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
}

.example {
  padding: 16px;
  border-radius: 4px;
  border: 1px solid darkgray;
}
</style>
