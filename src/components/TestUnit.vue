<script setup>
import { inject } from 'vue';
const injectName = inject('name')
</script>

<template>
    <h1>{{ injectName }}</h1>
</template>

<style scoped>
h1{
    border: 1px red;
}
</style>