<script setup>
import { useCommentsStore } from "../store/comments";
import PostComponent from "./PostComponent.vue";

const commentsStore = useCommentsStore();

const props = defineProps({
  comment: Object,
  id: Number,
});
// console.log(props.comment.content);
</script>
<template>
  <div class="container">
    <PostComponent :comment="comment" />
    <div class="reply">
      <PostComponent
        v-for="reply in comment.replies"
        :key="reply.id"
        :comment="reply"
      />
    </div>
  </div>
</template>
<style lang="sass">
.container
  width: min(90vw, 800px)
  margin-inline: auto

.reply
  border-left: 3px solid  hsl(223, 19%, 93%)
  padding-left: 1rem

@media(min-width:800px)
  .reply
    margin-left: 2rem
    padding-left: 2rem
</style>
