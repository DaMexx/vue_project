<script setup>
// import MyGridItem from "./MyGridItem.vue";
import MyGridItemCopy from "./MyGridItemCopy.vue";
import Header from '../Header/index.vue'
import { useCharacterStore } from "@/stores/characters";
import { storeToRefs } from "pinia";
const characterStore = useCharacterStore();
const { characters } = storeToRefs(characterStore);
</script>

<template>
  <div class="page-wrapper">
    <Header class="header" />
    <main class="main">
      <!-- <MyGridItem
        v-for="character in characters"
        :key="character.id"
        :character="character"
      /> -->
      <MyGridItemCopy
        v-for="character in characters"
        :key="character.id"
        :character="character"
      />
    </main>
    <footer class="footer"></footer>
  </div>
</template>

<style scoped>
.page-wrapper {
  display: grid;
  grid-template-areas:
    "header"
    "main"
    "footer";
}
.header {
  grid-area: header;
}
.main {
  grid-area: main;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 25px;
  gap: 1%;
  margin: 0 auto;
}
.footer {
  grid-area: footer;
}
</style>
