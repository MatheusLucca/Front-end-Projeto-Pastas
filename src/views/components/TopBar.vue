<template>
  <v-app-bar
      app
      color="#2089B7"
      dark
  >
    <div class="d-flex align-center">
      <v-img
          src="/UFMS_WHITE_LOGO.png"
          width="85"
          class="ml-n3 mt-3"
      />
    </div>
    <span class="text-h6 white--text">Projeto Pastas</span>

    <v-spacer></v-spacer>

    <v-btn icon class="mr-2" @click="redirectToHome()">
      <v-icon>mdi-home</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
  export default {
    name: 'TopBar',
    methods: {
      redirectToHome() {
        this.$router.push('/')
      }
    }
  }
</script>
