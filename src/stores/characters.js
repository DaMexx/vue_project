import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

const END_POINT = "/characters";

export const useCharacterStore = defineStore("character", () => {
  const characters = ref([]);
  const FetchCharacters = async () => {
    await axios
      .get(END_POINT)
      .then((res) => (characters.value = res.data))
      .catch((error) => console.error(error));
  };

  return {
    characters,
    FetchCharacters,
  };
});
