<template>
  <div class="main-container">
    <div class="input-container">
      <textarea
        class="inputText"
        rows="3"
        placeholder="Add a comment..."
        v-model="state.text"
      ></textarea>
    </div>

    <img :src="props.image" alt="" />
    <button
      @click="
        $emit('addPost', state.text);
        state.text = '';
      "
    >
      SEND
    </button>
  </div>
</template>

<script setup>
import { reactive } from "vue";

defineEmits(["addPost"]);

const props = defineProps({
  image: String,
});

const state = reactive({
  text: "",
});
</script>

<style scoped lang="sass">

.main-container
  width: min(90vw, 800px)
  background: hsl(0, 0%, 100%)
  margin: 1rem auto
  border-radius:10px
  padding: 1rem
  display: grid
  grid-template-columns: 1fr 7fr 2fr
  grid-template-rows: 3fr 2fr
  row-gap: 1rem



.input-container
  border: 1px solid hsl(239, 57%, 85%)
  padding: 1rem
  font-size: 1.2rem
  border-radius: 10px
  grid-column: 1/4

  .inputText
    background-color: transparent
    resize: none
    outline: none
    border: none
    width: 100%

img
  width: 40px
  height: 40px
  justify-self: center
  align-self: center

button
  padding: 1rem 2rem
  background-color: hsl(238, 40%, 52%)
  border: none
  border-radius: 10px
  color: hsl(0, 0%, 100%)
  font-weight: 500
  grid-column: 3/4
  justify-self: center
  align-self: center



@media(min-width:800px)
  .input-container
    grid-column: 2/3
    grid-row: 1/3
</style>
