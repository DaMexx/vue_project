<script setup>
import { provide, ref } from 'vue';
import TestUnit from './components/TestUnit.vue';
const name = ref('User')

provide('name', name)
</script>

<template>
<div>{{ name }}</div>
<input 
  type="text"
  v-model="name"
  >
<TestUnit />
</template>

<style scoped>

</style>
