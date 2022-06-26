<script setup>
import AddComment from "./components/AddComment.vue";
import { useCommentsStore } from "./store/comments";
import Comments from "./components/Comments.vue";
import Modal from "./components/modal.vue";

const commentsStore = useCommentsStore();
</script>

<template>
  <Modal v-if="commentsStore.isModalOn" />
  <div class="container">
    <Comments
      v-for="comment in commentsStore.comments.comments"
      :key="comment.id"
      :comment="comment"
    />

    <AddComment route="main" />
  </div>
</template>

<style scoped lang="sass">
.container
  width: min(90vw, 800px)
  margin-inline: auto
</style>
