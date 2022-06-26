<script setup>
import { useCommentsStore } from "../store/comments";
import PostComponent from "./PostComponent.vue";
import AddComment from "./AddComment.vue";
import { reactive } from "vue";

// const commentsStore = useCommentsStore();

const state = reactive({
  replyClick: false,
  replyTo: "",
});

const props = defineProps({
  comment: Object,
  id: Number,
});

function updateReply(username) {
  state.replyTo = username;
  state.replyClick = !state.replyClick;
}
</script>
<template>
  <div class="container">
    <PostComponent
      :comment="props.comment"
      :commentId="props.comment.id"
      @replyClicked="updateReply($event)"
    />
    <div class="reply">
      <PostComponent
        v-for="reply in props.comment.replies"
        :key="reply.id"
        :comment="reply"
        :commentId="props.comment.id"
        @replyClicked="updateReply($event)"
      />
      <AddComment
        v-if="state.replyClick"
        route="reply"
        :commentId="props.comment.id"
        :replyTo="state.replyTo"
        @sendClicked="state.replyClick = false"
      />
    </div>
  </div>
</template>
<style scoped lang="sass">


.reply
  border-left: 3px solid  hsl(223, 19%, 93%)
  padding-left: 1rem

@media(min-width:800px)
  .reply
    margin-left: 2rem
    padding-left: 2rem
</style>
