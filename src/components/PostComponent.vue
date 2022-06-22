<script setup>
import { useCommentsStore } from "../store/comments";
import { reactive } from "vue";

defineEmits(["addCounter"]);

const commentsStore = useCommentsStore();

const state = reactive({
  wasAdded: false,
});

const props = defineProps({
  comment: Object,
  commentId: Number,
});
console.log(props.comment.id);
console.log(props.commentId);
console.log(state.wasAdded);
</script>

<template>
  <div class="main-container">
    <div class="top-container">
      <img :src="commentsStore.getImage(props.comment.user.image.png)" alt="" />
      <p class="name">{{ props.comment.user.username }}</p>
      <p class="date">{{ props.comment.createdAt }}</p>
    </div>
    <p class="text">
      {{ props.comment.content }}
    </p>

    <div class="counter">
      <button
        @click="commentsStore.addCounter(props.comment.id, props.commentId)"
      >
        <img src="\src\images\icon-plus.svg" alt="" />
      </button>
      <p>{{ props.comment.score }}</p>
      <button
        @click="commentsStore.subCounter(props.comment.id, props.commentId)"
      >
        <img src="\src\images\icon-minus.svg" alt="" />
      </button>
    </div>
    <button v-if="props.name !== 'juliusomo'" class="action">
      <img src="\src\images\icon-reply.svg" alt="" />Reply
    </button>
    <div v-else class="delete-edit">
      <button class="action delete">
        <img src="\src\images\icon-delete.svg" alt="" />Delete
      </button>
      <button class="action">
        <img src="\src\images\icon-edit.svg" alt="" />Edit
      </button>
    </div>
  </div>
</template>

<style scoped lang="sass">
.main-container
  // width: min(90vw, 800px)
  background: hsl(0, 0%, 100%)
  margin: 1rem auto
  border-radius: 10px
  padding: 1rem
  display: grid
  grid-template-columns: 50px 8fr 2fr
  grid-template-rows:50px 1fr 60px
  row-gap:0.5rem

.top-container
  display: flex
  justify-content: start
  align-items: center
  gap: 1.5rem
  grid-column: 1/4
  justify-self: left
  align-self: center


  img
    height: 40px
    width: 40px

  .name
   font-weight: 500

  .date
    color: hsl(211, 10%, 45%)

.text
  color: hsl(211, 10%, 45%)
  grid-column: 1/4


.counter
  background-color: hsl(223, 19%, 93%)
  display: flex
  align-items: center
  height: 40px
  width: fit-content
  gap:0.5rem
  padding: 0.25rem
  border-radius: 15px
  justify-self: left
  align-self: center

  button
    display: flex
    align-items: center
    justify-content: center
    border: none
    cursor: pointer
    height: 100%
    background-color: inherit

    img
      padding:0 0.5rem

  p
    color: hsl(238, 40%, 52%)
    font-weight: 500
    font-size: 1.1rem

.action
  display: flex
  align-items: center
  gap:0.5rem
  color: hsl(238, 40%, 52%)
  font-weight: 500
  font-size: 1.1rem
  grid-column: 2/4
  align-self: center
  justify-self: right
  border: none
  background: inherit
  cursor: pointer
.delete
  color: hsl(358, 79%, 66%)
.delete-edit
  display: flex
  align-items: center
  justify-content: end
  gap: 1rem
  grid-column: 2/4


@media(min-width:800px)

  .main-container
    column-gap: 1.5rem
  .counter
    flex-direction: column
    height: fit-content
    padding: 1rem 0.5rem
    gap: 15px
    grid-column: 1/2
    grid-row:1/4,
    align-self: center

  .top-container
    grid-column: 2/3
  .action
    grid-column: 3/4
    grid-row: 1/2
  .text
    grid-column: 2/4
    grid-row: 2/4


  .delete-edit
    grid-column: 3/4
</style>
