<template>
  <div class="main-container">
    <div class="top-container">
      <img src="images\avatars\image-amyrobson.png" alt="" />
      <p class="name">amyrobson</p>
      <p class="date">1mont ago</p>
    </div>
    <p class="text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, fuga
      accusamus natus voluptate, inventore doloremque praesentium perferendis,
      autem cumque quisquam repellat rerum beatae aliquam! Nesciunt non
      voluptates adipisci facilis consequuntur!
    </p>
    <div class="bottom-container">
      <div class="counter">
        <button>
          <img src="images\icon-plus.svg" alt="" />
        </button>
        <p>100</p>
        <button>
          <img src="images\icon-minus.svg" alt="" />
        </button>
      </div>
      <p class="action"><img src="images\icon-reply.svg" alt="" />Reply</p>
    </div>
  </div>
</template>
<script setup></script>
<style scoped lang="sass">
.main-container
  width: min(90vw, 800px)
  background: hsl(0, 0%, 100%)
  margin: 1rem auto
  border-radius: 10px
  padding: 1rem

.top-container
  display: flex
  justify-content: start
  align-items: center
  gap: 1.5rem
  margin-bottom: 1rem

  img
    height: 40px
    width: 40px

  .name
   font-weight: 500

  .date
    color: hsl(211, 10%, 45%)

.text
  color: hsl(211, 10%, 45%)

.bottom-container
  display: flex
  justify-content: space-between
  align-items: center
  margin-top: 1rem
.counter
  background-color: hsl(223, 19%, 93%)
  display: flex
  align-items: center
  height: 40px
  width: fit-content
  gap:0.5rem
  padding: 0.25rem
  border-radius: 15px

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
</style>
