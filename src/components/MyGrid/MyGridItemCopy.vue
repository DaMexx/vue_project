<script setup>
import { defineProps } from "vue";
const props = defineProps(["character"]);
</script>
<template>
  <div class="card">
    <div class="card__name">
      Name:
      {{ character.name.first }}
      {{ character.name.middle }}
      {{ character.name.last }}
    </div>
    <div class="card__gender">
      Gender:
      {{ character.gender }}
    </div>
    <div class="card__species">
      Gender:
      {{ character.species }}
    </div>
    <div class="card__planet">
      Home planet:
      {{ character.homePlanet }}
    </div>
    <div class="card__occupation">
      Occupation:
      {{ character.occupation }}
    </div>
    <img :src="character.images.main" class="card__image" />
    <!-- <div class="card__sayings">
      <span v-for="phrase in character.sayings">{{ phrase }} <br /></span>
    </div> -->
  </div>
</template>

<style scoped>
.card {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: repeat(5, 1fr);
  border: black 1px solid;
  padding: 20px;
  max-width: 400px;
  border-radius: 30px;
  align-items: center;
}

.card__name {
  grid-row: 1/2;
  grid-column: 1/2;
}
.card__gender {
  grid-row: 2/3;
  grid-column: 1/2;
}
.card__species {
  grid-row: 3/4;
  grid-column: 1/2;
}
.card__planet {
  grid-row: 4/5;
  grid-column: 1/2;
}
.card__occupation {
  grid-row: 5/6;
  grid-column: 1/2;
}
.card__image {
  grid-row: 1/-1;

  margin: auto;
  /* max-width: 150px; */
  /* height: auto; */
}
.card__sayings {
}
</style>
