import { defineStore } from "pinia";
import data from "../FM files/data.json";
import { useLocalStorage } from "@vueuse/core";
import { ref } from "vue";
export const useCommentsStore = defineStore({
  id: "comments",
  state: () => ({
    comments: useLocalStorage("comments", {
      comments: data.comments,
    }),
    currentUser: data.currentUser,
    isModalOn: false,
  }),
  actions: {
    getImage(url) {
      return "src" + url.slice(1);
    },
    addCounter(childId, parrentId) {
      childId === parrentId
        ? this.comments.comments.find((comment) => comment.id === parrentId)
            .score++
        : this.comments.comments
            .find((comment) => comment.id === parrentId)
            .replies.find((reply) => reply.id === childId).score++;
    },
    subCounter(childId, parrentId) {
      childId === parrentId
        ? this.comments.comments.find((comment) => comment.id === parrentId)
            .score--
        : this.comments.comments
            .find((comment) => comment.id === parrentId)
            .replies.find((reply) => reply.id === childId).score--;
    },
    curAddPost(text, route, id) {
      if (text.length == 0) return;
      console.log(text);
      console.log(this.comments.comments);
      let post = {
        id: Math.floor(Math.random() * 10000),
        content: text,
        createdAt: "Now",
        score: 0,
        user: {
          image: {
            png: this.currentUser.image.png,
            webp: this.currentUser.image.webp,
          },
          username: this.currentUser.username,
        },
        replies: [],
      };
      if (route == "main") {
        this.comments.comments.push(post);
      } else {
        this.comments.comments
          .find((comment) => comment.id === id)
          .replies.push(post);
      }
      console.log(post);
    },
    showModal() {
      this.isModalOn = true;
    },
    hideModal() {
      this.isModalOn = false;
    },
  },
  getters: {},
});
