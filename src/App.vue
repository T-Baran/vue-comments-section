<script setup>
import url from "./FM files/data.json";
import { reactive, onMounted } from "vue";
import AddComment from "./components/AddComment.vue";
import PostComponent from "./components/PostComponent.vue";

onMounted(() => {
  console.log("mounted");
  console.log(url);
});

console.log(url.comments[1].replies);
</script>

<template>
  <PostComponent
    v-for="comment in url.comments"
    :key="comment.id"
    :name="comment.user.username"
    :image="comment.user.image.webp"
    :date="comment.createdAt"
    :score="comment.score"
    :content="comment.content"
    :replies="comment.replies"
  />
  <AddComment :image="url.currentUser.image.webp" />
</template>

<style></style>
