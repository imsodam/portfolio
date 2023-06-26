<template>
  <v-app-bar app color="#181818" dark flat class="px-8">
    <v-spacer></v-spacer>
    <v-btn text @click="scroll('home')">Home</v-btn>
    <v-btn text @click="scroll('about')">About</v-btn>
    <v-btn text @click="scroll('project')">Project</v-btn>
    <v-btn text @click="scroll('skills')">Skills</v-btn>
    <v-btn text @click="scroll('contact')">Contact</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    scroll(refName) {
      const element = document.getElementById(refName);
      element.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
