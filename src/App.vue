<template>
  <v-app>
    <top-bar></top-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import TopBar from "@/views/components/TopBar";

export default {
  name: 'App',
  components: { TopBar }
};
</script>
