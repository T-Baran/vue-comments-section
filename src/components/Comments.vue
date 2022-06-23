<script setup>
import { useCommentsStore } from "../store/comments";
import PostComponent from "./PostComponent.vue";
import AddComment from "./AddComment.vue";
import { reactive } from "vue";

const commentsStore = useCommentsStore();

const state = reactive({
  replyClick: false,
});

const props = defineProps({
  comment: Object,
  id: Number,
});
// console.log(props.comment.content);
</script>
<template>
  <div class="container">
    <PostComponent
      :comment="props.comment"
      :commentId="props.comment.id"
      @replyClicked="state.replyClick = !state.replyClick"
    />
    <div class="reply">
      <PostComponent
        v-for="reply in props.comment.replies"
        :key="reply.id"
        :comment="reply"
        :commentId="props.comment.id"
        @replyClicked="state.replyClick = !state.replyClick"
      />
      <AddComment
        v-if="state.replyClick"
        :route="reply"
        :commentId="props.comment.id"
      />
    </div>
  </div>
</template>
<style scoped lang="sass">
.container
  // width: min(90vw, 800px)
  // margin-inline: auto

.reply
  border-left: 3px solid  hsl(223, 19%, 93%)
  padding-left: 1rem

@media(min-width:800px)
  .reply
    margin-left: 2rem
    padding-left: 2rem
</style>
