<script setup>
import url from "./FM files/data.json";
import { ref, reactive, onMounted } from "vue";
import AddComment from "./components/AddComment.vue";
import PostComponent from "./components/PostComponent.vue";
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

//   .reply
//   border-left: 3px solid  hsl(223, 19%, 93%)
//   padding-left: 1rem

// @media(min-width:800px)
//   .reply
//     margin-left: 2rem
//     padding-left: 2rem
</style>
