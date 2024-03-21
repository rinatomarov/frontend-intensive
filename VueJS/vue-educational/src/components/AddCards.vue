<template>
<div class="card" v-for="elem in cardsArray">
    <h3>{{elem.name}}</h3>
    <h3>{{elem.price}}</h3>
    <FirstDemo text="Добавить в корзину" @click=""></FirstDemo>
</div>
</template>
<script setup>
import FirstDemo from "@/components/FirstDemo.vue";
import {ref} from "vue";

defineProps({
  nameThings: String,
  sumThings:Number
})
const cardsArray = ([
  {name:"Iphone 13 Pro Max", price: 456000},
  {name:"Airpods Max", price: 345000},
  {name:"Macbook 14 Max", price: 1230000}
])
</script>


<style scoped>
  .card{
    //display: flex;
    border: 1px solid;
    //width: 200px;
    padding: 16px;
    border-radius: 8px;
    flex-direction: column;
  }
  h3{
    margin: auto;
    padding-bottom: 4px;
  }
</style>