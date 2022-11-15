<template>
  <v-dialog width="600" v-model="shouldShow" persistent>
    <v-card flat height="300" class="pa-4">
      <v-card-title class="text-justify text-break">Tem certeza que deseja remover o diretório para download e limpar o estado da aplicação?</v-card-title>
      <v-card-title class="text-justify text-break subtitle-1 text--secondary">Todos os arquivos serão excluídos.</v-card-title>
      <v-card-actions class="mt-8">
        <v-btn @click="closeDialog()" width="150" outlined>não</v-btn>
        <v-spacer></v-spacer>
        <v-btn @click="refresh()" width="150" color="green" class="white--text">sim</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import ApiClient from "@/commons/apiclient/ApiClient";

export default {
  name: "refreshDialog",
  methods: {
    closeDialog() {
      this.$store.state.project.shouldShowDialog = false
    },
    async refresh() {
      this.closeDialog()
      await ApiClient.deleteDirectory()
      this.$store.state.project = {
        username: '',
        numberOfArticles: null,
        articles: [],
        currentArticle: 0
      }
      await this.$router.push('/')
    }
  },
  computed: {
    shouldShow() {
      return this.$store.state.project.shouldShowDialog
    }
  }
}
</script>

<style scoped>

</style>