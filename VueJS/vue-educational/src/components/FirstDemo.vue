<template>
  <button>{{ text }}</button>
</template>

<script setup>
// props
defineProps({
  text: String
})
</script>

<style>
button {
  padding: 12px;
  background: #4646dc;
  color: #f2f2f2;
  font-size: medium;
  font-weight: bold;
  border-radius: 8px;
  border: none;
  margin-top: 32px;
  width: 150px;
  height: 52px;
  margin-left: 25px;
  /*justify-content: flex-start;*/
}
</style>