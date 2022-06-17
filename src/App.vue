<script setup>
import url from "./FM files/data.json";
import { reactive, onMounted } from "vue";

onMounted(() => {
  console.log("mounted");
  console.log(url);
});
</script>

<template></template>

<style></style>
