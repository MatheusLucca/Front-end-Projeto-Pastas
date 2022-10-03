<template>
  <v-container fluid class="d-flex justify-center py-16">
    <v-card width="800" flat>
      <v-row>
        <v-col class="pa-0">
          <span class="text--secondary text-h6">Article {{ project.currentArticle + 1 }}</span>
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
        <v-row align="center">
          <v-col cols="auto">
            <v-file-input v-model="article.file" hide-details hide-input outlined></v-file-input>
          </v-col>
          <v-col>
            {{ (article.file.name != null) ? article.file.name : article.file }}
          </v-col>
        </v-row>
      </div>
      <v-card-actions class="pt-8">
        <v-btn width="150" color="grey" outlined @click="redirectToPrevious()" :disabled="!canGoToPrevious()">previous
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn width="150" color="green" class="white--text" @click="insertArticle()" :disabled="!canGoNext()">next
        </v-btn>
      </v-card-actions>
      {{shouldInsert()}}
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
        keywords: '',
        file: {
          name: ''
        }
      }
    }
  },
  methods: {
    insertArticle() {
      if (this.shouldInsert()) {
        this.article.file = this.article.file.name
        this.project.articles.push(this.article)
      }
      this.redirectToNext()
    },
    redirectToNext() {
      this.project.currentArticle += 1
      if (this.project.articles[this.project.currentArticle]) {
        this.article = this.project.articles[this.project.currentArticle]
      } else {
        this.resetForm()
      }
    },
    redirectToPrevious() {
      this.project.currentArticle -= 1
      this.article = this.project.articles[this.project.currentArticle]
    },
    canGoToPrevious() {
      return this.project.currentArticle > 0
    },
    canGoNext() {
      return this.article.title && this.article.file && this.article.keywords && this.article.abstract
    },
    resetForm() {
      this.article = {
        title: '',
        abstract: '',
        keywords: '',
        file: {
          name: ''
        }
      }
    },
    shouldInsert() {
      return this.article !== this.project.articles[this.project.currentArticle]
    }
  },
  computed: {
    project() {
      return this.$store.state.project
    }
  }
}
</script>

<style scoped>

</style>