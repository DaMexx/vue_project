<script setup>
import { onMounted } from "vue";

import MyGrid from "./components/MyGrid/index.vue";
import { useCharacterStore } from "@/stores/characters";
const characterStore = useCharacterStore();

onMounted(() => {
  characterStore.FetchCharacters();
});
</script>

<template>
  <MyGrid />
</template>

<style scoped></style>
