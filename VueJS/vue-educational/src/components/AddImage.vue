<template>
  <div>
    <img v-for="image in imagesArray" :src=image alt="image" srcset="">
  </div>
  <FirstDemo text="Добавить картинку" @click="addImage"></FirstDemo>
</template>

<script setup>
import FirstDemo from "@/components/FirstDemo.vue";
import {ref} from "vue";
const imagesArray = ref([
  'https://i.bigenc.ru/resizer/resize?sign=0XCBKSpwnVriZkUs3luWkg&filename=vault/7c764cf5e5f3003ca9563e0277a4c189.webp&width=1200',
  'https://pm1.aminoapps.com/7733/585ad666898858483726755df7818f5c0c759ae8r1-1489-2048v2_uhq.jpg',
])
const addImage = () =>{
  let imageLink = prompt("Введите URL картинки")
  if (!imageLink.toLowerCase().substring(0,4).includes('http')){
    alert("Прошу ввести правильный путь к картинку!!!")
  }else
    imagesArray.value.push(imageLink)
}
</script>
<style scoped>
div{
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: flex-start;
}
img{
  width: 200px;
  height: 200px;
}
</style>