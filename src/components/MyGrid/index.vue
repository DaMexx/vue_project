<script setup>
// import MyGridItem from "./MyGridItem.vue";
import MyGridItemCopy from "./MyGridItemCopy.vue";
import Header from "../Header/index.vue";
import Footer from "../Footer/index.vue";
import { useCharacterStore } from "@/stores/characters";
import { storeToRefs } from "pinia";
const characterStore = useCharacterStore();
const { characters } = storeToRefs(characterStore);
</script>

<template>
  <div class="page-wrapper">
    <header class="header">
      <Header />
    </header>
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
    <footer class="footer">
      <Footer />
    </footer>
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
  grid-template-rows: 1fr auto;
  padding: 25px;
  gap: 1%;
  margin: 0 auto;
  /* height: 100%; */
}
.footer {
  grid-area: footer;
}
</style>
