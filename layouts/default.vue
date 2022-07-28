<template>
  <div>
    <Header />
    <nav className="d-flex flex-row-reverse">
      <nuxt-link to="/">Home</nuxt-link> |
      <nuxt-link to="/about">About</nuxt-link> |
      <nuxt-link to="/mystyle">MyStyle</nuxt-link> |
      <nuxt-link to="/notes">Notes</nuxt-link> |
      <nuxt-link to="/contact">Contact</nuxt-link>
      <hr />
    </nav>
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
})
</script>

<style>
html {
  max-width: 70ch;
  padding: 3em 1em;
  margin: auto;
  line-height: 1.75;
  font-size: 1.25em;
  color: #333;
}

a {
  color: chocolate;
  text-decoration: none;
}

nav a.nuxt-link-exact-active {
  border-bottom: 2px solid chocolate;
}

body {
  overflow-y: scroll;
}

img {
  width: 100%;
}
</style>
