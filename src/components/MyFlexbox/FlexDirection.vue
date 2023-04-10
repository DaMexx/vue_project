<script setup>
const testItems = [
  {
    value: "one",
    id: 1,
  },
  {
    value: "two",
    id: 2,
  },
  {
    value: "three",
    id: 3,
  },
  {
    value: "four",
    id: 4,
  },
  {
    value: "five",
    id: 5,
  },
  {
    value: "six",
    id: 6,
  },
  {
    value: "seven",
    id: 7,
  },
  {
    value: "eight",
    id: 8,
  },
  {
    value: "nine",
    id: 9,
  },
  {
    value: "ten",
    id: 10,
  },
];
</script>

<template>
  <div>
    <h1>Flex Direction - row</h1>
    <div class="direction__row">
      <div v-for="item in testItems" :key="item.id" class="direction_item">
        {{ item.value }}
      </div>
    </div>
    <h1>Flex Direction - column</h1>
    <div class="direction__column">
      <div v-for="item in testItems" :key="item.id" class="direction_item">
        {{ item.value }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.direction__row {
  display: flex;
}
.direction_item {
  width: 100px;
  height: 50px;
  border: 1px black solid;
  padding: 5px;
}

.direction__column {
  display: flex;
  flex-direction: column;
}

</style>
