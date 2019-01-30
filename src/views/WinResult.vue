<template>
  <transition name="fade">
    <div class="win-result">
      <div class="win" v-if="result === 'win'">
        <img alt="winner" title="You win!" src="../assets/coffee-200.jpg">
      </div>
      <div class="lose" v-else>
        <img alt="loser" title="You lose..." src="../assets/coffee-404.jpg">
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'WinResult',
    props: {
      result: {
        type: String,
        default: 'lose',
      },
    },
  };
</script>

<style lang="scss" scoped>
  .win-result {
    width: 100%;
    height: 100%;

    & > div {
      width: 100%;
      height: 100%;

      & > img {
        width: 100%;
      }
    }
  }
</style>
