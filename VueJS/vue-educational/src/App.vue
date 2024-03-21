<template>
  <!--  <Counter></Counter>-->
  <!--  <Quotations></Quotations>-->
  <!--  <Counter></Counter>-->
  <!--  <p>Hello World</p>-->

  <!--  <FirstDemo text="Нажми меня"></FirstDemo>-->
  <!--  <FirstDemo text="Press me"></FirstDemo>-->
  <!--  <FirstDemo text="Submit"></FirstDemo>-->

<!--  <AddImage></AddImage>-->

  <SliderImage></SliderImage>

<!--  <div class="cardAdd">-->
<!--&lt;!&ndash;  <AddCards nameThings="Iphone 13 Pro Max" sumThings="450000"></AddCards>&ndash;&gt;-->
<!--&lt;!&ndash;  <AddCards nameThings="MacBook" sumThings="1190000"></AddCards>&ndash;&gt;-->
<!--&lt;!&ndash;  <AddCards nameThings="Airpods" sumThings="356000"></AddCards>&ndash;&gt;-->
<!--  <AddCards></AddCards>-->
<!--  </div>-->
</template>

<script setup>
// import FirstDemo from "@/components/FirstDemo.vue";
// import Counter from "@/components/Counter.vue";
// import Quotations from "@/components/icons/Quotations.vue";
import AddImage from "@/components/AddImage.vue";
import SliderImage from "@/components/SliderImage.vue";
import AddCards from "@/components/AddCards.vue";
</script>

<style>
p {
  color: red;
}
.cardAdd {
  display: flex;
  gap: 32px;
  justify-content: flex-start;
}
</style>