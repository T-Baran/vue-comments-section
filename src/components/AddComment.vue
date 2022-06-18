<template>
  <div class="main-container">
    <div class="container">
      <div class="input-container">
        <textarea
          class="inputText"
          rows="3"
          placeholder="Add a comment..."
        ></textarea>
      </div>
      <div class="button-container">
        <img :src="props.image" alt="" />
        <button>SEND</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  image: String,
});

console.log(props.image);
</script>

<style scoped lang="sass">

.main-container
  width: min(90vw, 800px)
  background: hsl(0, 0%, 100%)
  margin: 1rem auto


.container
  padding: 1rem

.input-container
  border: 1px solid hsl(239, 57%, 85%)
  padding: 1rem
  font-size: 1.2rem
  border-radius: 10px
  .inputText
    background-color: transparent
    resize: none
    outline: none
    border: none
    width: 100%

.button-container
  display: flex
  justify-content: space-between
  align-items: center
  margin-top: 1rem

  img
    width: 40px
    height: 40px

  button
    padding: 1rem 2rem
    background-color: hsl(238, 40%, 52%)
    border: none
    border-radius: 15px
    color: hsl(0, 0%, 100%)
    font-weight: 500
</style>
