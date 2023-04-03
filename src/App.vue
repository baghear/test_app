<template>
  <v-app>

    <v-main>
      <Auth/>
    </v-main>

  </v-app>
</template>

<script>
import Auth from "@/components/Auth";

export default {
  name: 'App',
  components: {Auth},
  data: () => ({

  }),
};
</script>
