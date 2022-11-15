<template>
  <v-container fluid class="d-flex justify-center py-16">
    <v-card width="800" flat>
      <v-row>
        <v-col class="pa-0">
          <span class="text--secondary text-h6">Review articles</span>
        </v-col>
      </v-row>
      <div class="px-4 my-8">
        <v-data-table
            height="650"
            :headers="headers"
            :items="project.articles"
            hide-default-footer>
        </v-data-table>
      </div>
      <div class="d-flex">
        <v-btn v-if="!shouldShowDownload" width="150" color="green" class="white--text" @click="submit()">submit</v-btn>
        <v-btn v-else width="150" color="green" class="white--text" @click="download()">download</v-btn>
        <v-spacer></v-spacer>
      </div>
    </v-card>
  </v-container>
</template>

<script>
import ApiClient from "@/commons/apiclient/ApiClient";

export default {
  name: "index",
  data() {
    return {
      shouldShowDownload: false,
      headers: [
        {
          text: 'Title',
          align: 'start',
          sortable: true,
          value: 'title',
        },
        {
          text: 'Abstract',
          align: 'start',
          sortable: true,
          value: 'abstract',
        },
        {
          text: 'Keywords',
          align: 'start',
          sortable: true,
          value: 'keywords',
        },
        {
          text: 'File',
          align: 'start',
          sortable: true,
          value: 'file',
        },
      ],
    }
  },
  methods: {
    async submit() {
      await this.createDirectory()
      await this.populateDirectory()
      this.shouldShowDownload = true
    },
    async createDirectory() {
      await ApiClient.generateDirectoryTree(this.project.username)
    },
    async populateDirectory() {
      for (let i = 0; i < this.project.articles.length; i++) {
        let article = this.project.articles[i]
        let file = this.project.articles[i].file
        let id = await ApiClient.convert2txt(file)
        await ApiClient.populateDirectoryTree(id.id, article.title, article.abstract, article.keywords)
      }
    },
    async download() {
      window.open('http://localhost:3000/api/download')
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