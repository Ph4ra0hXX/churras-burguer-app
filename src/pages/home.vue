<script setup>
import { ref } from "vue";

import Card from "../components/card.vue";

import { produtosStore, produtosStore2 } from "../store/produtos";

const store = produtosStore();

const store2 = produtosStore2();

const cardData = ref(store.cardDataStore);
const cardData2 = ref(store2.cardDataStore);

function isWednesdayOrThursday() {
  const currentDate = new Date();
  const dayOfWeek = currentDate.getDay();

  return dayOfWeek === 3 || dayOfWeek === 4;
}
// || dayOfWeek === 4
</script>

<template>
 <!-- <h2 id="fechados">No momento estamos fechados!</h2>-->
   <Card
    v-if="isWednesdayOrThursday()"
    v-for="data2 in cardData2"
    :data="data2"
  />
  <Card v-if="!isWednesdayOrThursday()" v-for="data in cardData" :data="data" /> 
</template>

<style>
#fechados {
  color: #fdd426;
  text-align: center;
  font-family: Barlow-SemiBold;
  padding-bottom: 30px;
}
</style>
