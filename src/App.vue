<template>
  <div id="app">
    <router-view />
    <cld-snack-bar />
  </div>
</template>

<script>
  import CldSnackBar from './components/CldSnackBar.vue';

  export default {
    components: {
      CldSnackBar,
    },
  };
</script>

<style lang="scss">
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
