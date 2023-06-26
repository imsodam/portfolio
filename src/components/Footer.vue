<template>
  <v-footer dark padless>
    <v-card flat tile class="black white--text py-5 px-5 text-center" width="100%">
      <v-row>
        <v-col cols="12" sm="3"> </v-col>

        <v-col cols="12" sm="7" class="text-center text-xl-end">
          <v-card-text class="pt-2">
            <v-btn class="mx-1 white--text" icon> copyright © 2023 LIM SODAM. all rights reserved. </v-btn>
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>

<style lang="scss" scoped></style>
