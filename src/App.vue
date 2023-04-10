<script setup>
import { onMounted } from "vue";

import { useCharacterStore } from "@/stores/characters";
const characterStore = useCharacterStore();

onMounted(() => {
  characterStore.FetchCharacters();
});
</script>

<template>
  <RouterLink to="/">home</RouterLink>
  <br>
  <RouterLink to="grid">grid</RouterLink>
  <br>
  <RouterLink to="flex">flex</RouterLink>
  <router-view />
</template>

<style scoped></style>
