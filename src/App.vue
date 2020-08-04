<template>
  <div id="app"><Index /></div>
</template>

<script>
import Index from './views/index'
export default {
  name: 'App',
  components: { Index }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
