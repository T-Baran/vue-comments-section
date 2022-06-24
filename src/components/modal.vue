<script setup>
import { useCommentsStore } from "../store/comments";

const commentsStore = useCommentsStore();
</script>
<template>
  <div class="modal-container">
    <div class="box">
      <h2>Delete Comment</h2>
      <p>
        Are you sure you want to delete this comment? This will remove the
        comment and can't be undone.
      </p>
      <div class="button-selection">
        <button @click="commentsStore.hideModal()">no, cancel</button>
        <button @click="commentsStore.deletePost()" class="delete">
          yes, delete
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped lang="sass">
.modal-container
  // display: none
  position: fixed
  z-index: 1
  left: 0
  top: 0
  width: 100%
  height: 100%
  overflow: auto
  background-color: rgb(0,0,0)
  background-color: rgba(0,0,0,0.4)
  display: flex
  justify-content: center
  align-items: center

.box
  width: min(90vw, 400px)
  background-color: #fff
  color: hsl(211, 10%, 45%)
  padding: 2rem
  border-radius: 10px

  h2
    margin-bottom: 1rem
  p
    line-height: 1.5rem
    margin-bottom: 1rem

.button-selection
  width: 100%
  display: flex
  justify-content: space-between
  align-content: center

  button
    padding: 0.75rem 0.75rem
    font-size: 18px
    color: white
    border-radius: 10px
    background-color: #777
    border: none
    text-transform: uppercase
  .delete
    background-color: hsl(358, 79%, 66%)


@media(min-width:800px)
  .button-selection

    button
      padding: 1rem 1.5rem
</style>
