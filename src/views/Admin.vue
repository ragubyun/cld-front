<template>
  <div class="admin">
    <v-btn
      color="#ffd904"
      @click="startDraw"
      large
      round
      class="ma-5 font-weight-bold"
    >
      추첨하기
    </v-btn>

    <transition name="fade">
      <v-card class="ml-2 mr-2" v-if="winners.length > 0">
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          축하합니다!
        </v-card-title>

        <v-card-text v-for="winner in winners" :key="winner.token">
          {{ winner }}
        </v-card-text>
      </v-card>
    </transition>
  </div>
</template>

<script>
  import axios from 'axios';

  import ServerConfig from '../server-config';

  const { address } = ServerConfig;

  export default {
    name: 'Admin',
    data() {
      return {
        winners: [],
      };
    },
    methods: {
      startDraw() {
        setTimeout(() => {
          axios.get(`${address}/lottery`)
            .then((response) => {
              console.log(response);
              this.winners = response.data;
            })
            .catch((error) => {
              console.log(`[추첨 실패...] ${error}`);
            });
        }, 1500);
      },
    },
  };
</script>

<style lang="scss" scoped>
  .admin {
    display: flex;
    flex-direction: column;
  }
</style>
