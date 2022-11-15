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
          <v-col cols="auto" class="mt-n4">
            <v-file-input v-model="article.file" hide-details hide-input outlined accept="application/pdf"></v-file-input>
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
        <v-btn v-if="shouldReview()" width="150" color="green" class="white--text" @click="redirectToReview()"
               :disabled="!canGoNext()">review
        </v-btn>
        <v-btn v-else width="150" color="green" class="white--text" @click="insertArticle()" :disabled="!canGoNext()">
          next
        </v-btn>
      </v-card-actions>
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
    redirectToReview() {
      if (this.shouldInsert()) {
        this.article.file = this.article.file.name
        this.project.articles.push(this.article)
      }
      this.$router.push('/review')
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
    },
    shouldReview() {
      return (this.project.currentArticle + 1) == this.project.numberOfArticles
    }
  },
  computed: {
    project() {
      return this.$store.state.project
    }
  },
  created() {
    if (this.project.articles[this.project.currentArticle]) {
      this.article = this.project.articles[this.project.currentArticle]
    }
  },
}
</script>

<style scoped>

</style>