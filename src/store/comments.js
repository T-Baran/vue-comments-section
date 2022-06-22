import { defineStore } from "pinia";
import data from "../FM files/data.json";
import { useLocalStorage } from "@vueuse/core";
import { ref } from "vue";
export const useCommentsStore = defineStore({
  id: "comments",
  state: () => ({
    // comments: data.comments,
    // currentUser: data.currentUser,
    comments: useLocalStorage("comments", {
      comments: data.comments,
      currentUser: data.currentUser,
    }),
    // currentUser: useLocalStorage("currentUser", {
    //   currentUser: data.currentUser,
    // }),
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
  },
  getters: {},
});
