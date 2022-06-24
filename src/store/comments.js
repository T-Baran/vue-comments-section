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
    deleteData: {
      parentId: Number,
      childId: Number,
    },
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
    curAddPost(text, route, id, replyTo = null) {
      if (text.length == 0) return;
      console.log(text);
      console.log(this.comments.comments);
      let post = {
        id: Math.floor(Math.random() * 10000),
        content: text,
        replyingTo: replyTo,
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
    showModal(parentId, childId) {
      this.isModalOn = true;
      this.deleteData.parentId = parentId;
      this.deleteData.childId = childId;
      // console.log(this.deleteData.parentId);
      // console.log(this.deleteData.childId);
    },
    hideModal() {
      this.isModalOn = false;
    },
    deletePost() {
      this.deleteData.parentId == this.deleteData.childId
        ? (this.comments.comments = this.comments.comments.filter(
            (comment) => comment.id !== this.deleteData.parentId
          ))
        : (this.comments.comments.find(
            (comment) => comment.id === this.deleteData.parentId
          ).replies = this.comments.comments
            .find((comment) => comment.id === this.deleteData.parentId)
            .replies.filter((reply) => reply.id !== this.deleteData.childId));
      this.isModalOn = false;
    },
    editPost(childId, parentId, content) {
      childId === parentId
        ? (this.comments.comments.find(
            (comment) => comment.id === parentId
          ).content = content)
        : (this.comments.comments
            .find((comment) => comment.id === parentId)
            .replies.find((reply) => reply.id === childId).content = content);
    },
  },
  getters: {},
});
