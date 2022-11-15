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

    <v-btn icon class="mr-2" @click="refreshState()">
      <v-icon>mdi-refresh</v-icon>
    </v-btn>
    <v-btn icon class="mr-2" @click="redirectToHome()">
      <v-icon>mdi-home</v-icon>
    </v-btn>
    <refresh-dialog></refresh-dialog>
  </v-app-bar>
</template>

<script>
import refreshDialog from "@/views/components/refreshDialog";

  export default {
    name: 'TopBar',
    components: { refreshDialog },
    methods: {
      redirectToHome() {
        this.$router.push('/')
      },
      refreshState() {
        this.$store.state.project.shouldShowDialog = true
      }
    }
  }
</script>
