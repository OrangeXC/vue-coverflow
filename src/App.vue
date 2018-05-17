<template>
  <div id="app">
    <header class="head">vue-coverflow</header>
    <demo></demo>
    <footer class="foot">
      <a href="https://github.com/OrangeXC/vue-coverflow">Github</a> |
      <a href="http://orangexc.xyz/">Blog</a>
    </footer>
  </div>
</template>

<script>
import Demo from './components/Demo'

export default {
  components: {
    Demo
  }
}
</script>

<style>
@import '~highlight.js/styles/agate.css';
@import './assets/styles/reset.css';
</style>
