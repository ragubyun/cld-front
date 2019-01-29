<template>
  <div class="home">
    <img alt="cld main" title="cld main" src="../assets/cld-main.png">
    <img alt="cld schedule" title="cld schedule" src="../assets/cld-schedule.png">
    <div>
      <span class="push-message">
        pushMessage: {{ pushMessage }}
      </span>
    </div>
    <div>
      <v-btn @click="saveTokenTest">
        save token test
      </v-btn>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex';

  export default {
    name: 'home',
    data() {
      return {
        pushMessage: '',
      };
    },
    computed: mapState(['token']),
    methods: {
      ...mapActions(['saveToken']),
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
          console.log('payload: ', payload);
          if (payload) {
            const { data: { message } } = payload;
            this.pushMessage = message;
          }
        });
      },
      saveTokenTest() {
        this.saveToken({ token: this.token });
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
