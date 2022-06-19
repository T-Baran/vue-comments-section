<template>
  <div class="main-container">
    <div class="top-container">
      <img :src="props.image" alt="" />
      <p class="name">{{ props.name }}</p>
      <p class="date">{{ props.date }}</p>
    </div>
    <p class="text">
      {{ props.content }}
    </p>

    <div class="counter">
      <button>
        <img src="images\icon-plus.svg" alt="" />
      </button>
      <p>{{ props.score }}</p>
      <button>
        <img src="images\icon-minus.svg" alt="" />
      </button>
    </div>
    <p class="action"><img src="images\icon-reply.svg" alt="" />Reply</p>
  </div>
  <div class="replySection" v-if="props.replies !== null">
    <div class="vl">
      <PostComponent
        v-for="reply in props.replies"
        :key="reply.id"
        :name="reply.user.username"
        :image="reply.user.image.webp"
        :date="reply.createdAt"
        :score="reply.score"
        :content="reply.content"
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  name: String,
  image: String,
  date: String,
  score: Number,
  content: String,
  replies: Array,
});
</script>
<style scoped lang="sass">
.main-container
  width: min(90vw, 800px)
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


.replySection
  margin-inline: auto
  width: min(90vw, 800px)

.vl
  border-left: 3px solid hsl(223, 19%, 93%)
  padding-left: 20px
  width: fit-content
  // margin-left: auto

.vl > *
  width: 100%
  // margin: 1rem 10px 1rem auto
  // margin-left: auto




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

  .vl
    margin-left: 30px
    padding-left:30px
</style>
