<script>
  import Navbar from './components/layout/navbar.vue';
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
    background-color: #16A34A ; /* Verde claro */
  }
</style>
