<template>
  <v-container fluid class="d-flex justify-center py-16">
    <v-card width="800" flat>
      <v-row>
        <v-col>
          <span class="text--secondary text-h6">Novo projeto</span>
        </v-col>
      </v-row>
      <div class="px-4 my-8">
        <v-row>
          <v-col>
            <span class="text--secondary">Nome de usuário</span>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field outlined></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <span class="text--secondary">Quantidade de artigos</span>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-text-field outlined></v-text-field>
          </v-col>
        </v-row>
      </div>
      <div class="d-flex">
        <v-btn width="150" color="green" class="white--text">enviar</v-btn>
        <v-spacer></v-spacer>
      </div>
    </v-card>
  </v-container>
</template>

<script>

export default {
  name: 'Home',
}
</script>
