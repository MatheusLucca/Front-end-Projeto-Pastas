<template>
  <v-container fluid class="d-flex justify-center py-16">
    <v-card width="800" flat>
      <v-row>
        <v-col class="pa-0">
          <span class="text--secondary text-h6">Article 1</span>
        </v-col>
      </v-row>
      <div class="px-4 my-8">
        <v-row>
          <v-col>
            <span class="text--secondary">Title*</span>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field v-model="article.title" hide-details outlined></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <span class="text--secondary">Abstract*</span>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field v-model="article.abstract" hide-details outlined></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <span class="text--secondary">Keywords</span>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field v-model="article.keywords" hide-details outlined></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <span class="text--secondary">File</span>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-file-input hide-details show-size single-line outlined></v-file-input>
          </v-col>
        </v-row>
      </div>
      <v-row>
        <v-col>
          <v-btn width="150" color="green" class="white--text" @click="insertArticle()">submit</v-btn>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "article",
  data() {
    return {
      article: {
        title: '',
        abstract: '',
        keywords: ''
      }
    }
  },
  methods: {
    insertArticle() {
      this.articles.push(this.article)
    }
  },
  computed: {
    articles() {
      return this.$store.state.project.articles
    }
  }
}
</script>

<style scoped>

</style>