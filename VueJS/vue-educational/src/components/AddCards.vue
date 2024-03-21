<template>
  <div class="cardAdd">
    <div class="card" v-for="elem in cardsArray" :key ='elem.name'>
      <h3>{{ elem.name }}</h3>
      <h3>{{ elem.price }}</h3>
      <FirstDemo text="Добавить в корзину" @click="addPrice(elem.price)"></FirstDemo>
    </div>
  </div>
  <div class="cardPrice">
    <span>Итого вышло на сумму {{cardPrice}}</span>
  </div>
</template>
<script setup>
import FirstDemo from "@/components/FirstDemo.vue";
import { computed, ref } from "vue";

const cardsArray = ([
  {name: "Iphone 13 Pro Max", price: 456000},
  {name: "Airpods Max", price: 345000},
  {name: "Macbook 14 Max", price: 1230000}
])

let cardPrice = ref(0)

const addPrice =(price) => {
  cardPrice.value += price;
  console.log(addPrice)
  return  cardPrice
}

</script>

<style scoped>
.cardAdd {
  display: flex;
  gap: 32px;
  justify-content: flex-start;
}
.card {
  display: flex;
  border: 1px solid;
  width: 200px;
  padding: 16px;
  border-radius: 8px;
  flex-direction: column;
  margin: 32px;
}

h3 {
  margin: auto;
  padding-bottom: 8px;
}
.cardPrice span{
  margin:32px;
  font-family: 'EB Garamond', serif;
  font-weight: bolder;
  font-size: 24px;
}

</style>