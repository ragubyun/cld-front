<template>
  <div class="home">
    <div class="main-page" v-if="beforeDraw">
      <img alt="cld main" title="cld main" src="../assets/cld-main.png">
      <img alt="cld schedule" title="cld schedule" src="../assets/cld-schedule.png">
      <img alt="cld place" title="cld place" src="../assets/cld-place.png">
    </div>
    <win-result :result="winResult" v-else></win-result>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex';

  import WinResult from './WinResult.vue';

  export default {
    name: 'home',
    components: {
      WinResult,
    },
    data() {
      return {
        winResult: '',
      };
    },
    computed: {
      ...mapState([
        'token',
        'beforeDraw',
      ]),
    },
    methods: {
      ...mapActions([
        'saveToken',
        'showSnackBar',
      ]),
      async getPushPermission() {
        if (Notification.permission !== 'granted') {
          try {
            await this.$messaging.requestPermission();
            console.log('Notification permission granted.');
            this.saveToken(await this.$messaging.getToken());
          } catch (e) {
            console.log('Unable to get permission to notify.', e);
          }
        }
      },
      addPushMessageHandler() {
        this.$messaging.onMessage((payload) => {
          this.showSnackBar({
            message: '커피 당첨 결과가 도착하였습니다.',
          });
          if (payload) {
            const { data: { winResult } } = payload;
            this.winResult = winResult;
          }
        });
      },
    },
    mounted() {
      this.getPushPermission();
      this.addPushMessageHandler();
    },
  };
</script>

<style lang="scss" scoped>
  .home {
    width: 100vw;
    height: 100vh;

    img {
      width: 100%;
    }
  }
</style>
