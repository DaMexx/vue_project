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
  grid-template-areas:
    "name image image"
    "gender image image"
    "species image image"
    "planet image image"
    "occupation image image";
    /* "sayings sayings"; */
    border: black 1px solid;
    padding: 20px;
    max-width: 500px;
    border-radius: 30px;
    align-items: center;
}

.card__name {
  grid-area: name;
}
.card__gender {
  grid-area: gender;
}
.card__species {
  grid-area: species;
}
.card__planet {
  grid-area: planet;
}
.card__occupation {
  grid-area: occupation;
}
.card__image {
  grid-area: image;
  margin: auto;
  max-width: 150px;
  height: auto;
}
.card__sayings {
  grid-area: sayings;
}

</style>
