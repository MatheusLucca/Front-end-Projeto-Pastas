<template>
  <v-container fluid class="d-flex justify-center py-16">
    <v-card width="800" flat>
      <v-row>
        <v-col class="pa-0">
          <span class="text--secondary text-h6">New project</span>
        </v-col>
      </v-row>
      <div class="px-4 my-8">
        <v-row>
          <v-col>
            <span class="text--secondary">Username</span>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field hide-details outlined v-model="project.username"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <span class="text--secondary">Number of articles</span>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field hide-details outlined v-model="project.numberOfArticles"></v-text-field>
          </v-col>
        </v-row>
      </div>
      <div class="d-flex">
        <v-btn width="150" color="green" class="white--text" @click="redirectToArticle()" :disabled="!canSubmit()">submit</v-btn>
        <v-spacer></v-spacer>
      </div>
    </v-card>
  </v-container>
</template>

<script>

export default {
  name: 'Home',
  methods: {
    redirectToArticle(){
      this.$router.push('/article')
    },
    canSubmit() {
      return this.project.numberOfArticles && this.project.username
    }
  },
  computed: {
    project() {
      return this.$store.state.project
    }
  }
}
</script>
