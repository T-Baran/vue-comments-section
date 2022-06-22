<script setup>
import url from "./FM files/data.json";
import { ref, reactive, onMounted } from "vue";
import AddComment from "./components/AddComment.vue";
import PostComponent from "./components/PostComponent.vue";
import { useCommentsStore } from "./store/comments";
import Comments from "./components/Comments.vue";

const commentsStore = useCommentsStore();
// console.log(commentsStore[0].user.image.png);
// const createPost = (content) => {
//   let post = {
//     id: Math.floor(Math.random() * 10000),
//     content: content,
//     createdAt: "Now",
//     score: 0,
//     user: {
//       image: {
//         png: "./images/avatars/image-juliusomo.png",
//         webp: "./images/avatars/image-juliusomo.webp",
//       },
//       username: "juliusomo",
//     },
//     replies: [],
//   };
//   comments.push(post);
// };

// const addCounter = (id) => {
//   console.log(id);
//   console.log("maybe working");

//   comments.forEach((item) => {
//     console.log("abc");
//     if (item.id == id) {
//       item.score++;
//     }
//   });
//   console.log(
//     comments.filter((item) => {
//       return item.id == id;
//     })
//   );
// };
</script>

<template>
  <div class="container">
    <Comments
      v-for="comment in commentsStore.comments.comments"
      :key="comment.id"
      :comment="comment"
    />

    <AddComment :route="'main'" />
  </div>
</template>

<style lang="sass">
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
