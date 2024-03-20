<template>
  <div><img :src=currentImage alt="image" width="400" height="350"></div>
  <FirstDemo text="<" @click="prevImage"></FirstDemo>
  <FirstDemo text=">" @click="nextImage"></FirstDemo>
</template>
<script setup>
import FirstDemo from "@/components/FirstDemo.vue";
import {ref} from "vue";
const imagesArray = [
  'https://media.istockphoto.com/id/183412466/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%B2%D0%BE%D1%81%D1%82%D0%BE%D1%87%D0%BD%D1%8B%D0%B5-bluebirds-%D0%BC%D1%83%D0%B6%D1%81%D0%BA%D0%BE%D0%B3%D0%BE-%D0%B8-%D0%B6%D0%B5%D0%BD%D1%81%D0%BA%D0%BE%D0%B3%D0%BE-%D0%BF%D0%BE%D0%BB%D0%B0.jpg?s=612x612&w=0&k=20&c=h67A1VxL4ca0AztbhFCJlEcLSr3QMmTmMn0Cmu6PS1M=',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1TAN8OtW4W7nW2aaA57-DoHiJIel4UcI9OZQWstxFyw&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3RtYYcHG0c74yS80R6c5tn-KdeRseSdjpGvY62GWgcQ&s',
  'https://content.skyscnr.com/m/30c17f9542f75237/original/GettyImages-148199249.jpg?resize=2560px:1693px'
]
let counter = ref(0)
let currentImage = ref(imagesArray[counter.value])
const prevImage = () => {
  counter.value = (counter.value - 1 + imagesArray.length) % imagesArray.length
  currentImage.value = imagesArray[counter.value]
}
const nextImage = () => {
  counter.value = (counter.value + 1) % imagesArray.length
  currentImage.value = imagesArray[counter.value]
}
</script>
<style scoped>
</style>
<!--https://stackoverflow.com/questions/61005346/custom-image-slider-in-vue-js-->