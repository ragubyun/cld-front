<template>
  <v-snackbar
    :value="snackBar.visibility"
    :timeout="snackBar.timeout"
    @input="hideSnackBar"
    top
    class="font-weight-bold"
  >
    {{ snackBar.message }}
    <v-btn
      color="#ffd904"
      flat
      @click="hideSnackBar"
    >
      결과 보기
    </v-btn>
  </v-snackbar>
</template>

<script>
  import { mapState, mapActions } from 'vuex';

  export default {
    name: 'CldSnackBar',
    computed: mapState(['snackBar']),
    methods: mapActions(['hideSnackBar']),
  };
</script>
