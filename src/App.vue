<script>
  import Navbar from './components/layout/Navbar.vue';
  export default {
    name: 'App',
    components: {
        Navbar
    }
  }
</script>

<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<style>
  body{
    font-family: 'Oxanium', cursive, sans-serif;

  }
</style>
