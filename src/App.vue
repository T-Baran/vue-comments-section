<script setup>
import url from "./FM files/data.json";
import { reactive, onMounted } from "vue";
import AddComment from "./components/AddComment.vue";
import PostComponent from "./components/PostComponent.vue";

onMounted(() => {
  console.log("mounted");
  console.log(url);
  console.log(url.currentUser.image.webp);
});
</script>

<template>
  <AddComment :image="url.currentUser.image.webp" />
  <PostComponent />
</template>

<style></style>
