<script setup>
import {ref, onMounted} from "vue";
const now = ref(new Date().toLocaleString());

onMounted(() => {
  setInterval(() => {
    now.value = new Date().toLocaleString();
  }, 1000)
})

</script>

<template>
  <span>当前时间</span>
  <span>{{ now }}</span>
</template>

<style scoped>

</style>