import { defineStore } from "pinia";
import data from "../FM files/data.json";

export const useCommentsStore = defineStore({
  id: "comments",
  state: () => ({
    comments: data.comments,
    currentUser: data.currentUser,
  }),
  actions: {
    getImage(url) {
      return "src" + url.slice(1);
    },
    addCounter(id) {
      // console.log(this.comments);
      const item = this.comments;
      const found = item.find((comment) => comment.id === id);
      // console.log(found);
      // console.log(item[1].replies[0].id);
      // if (found !== undefined) {
      //   found.score++;
      // } else {
      for (let i = 0; i < item.length; i++) {
        if (item[i].id === id) {
          item[i].score++;
        } else {
          console.log("test");
          for (let j = 0; j < item[i].length; j++) {
            if (item[i].replies[j].id === id) {
              console.log(item[i].replies[j].id);
              item[i].replies[j].score++;
            }
          }
        }
      }
      // const foundReply = item.replies.find((comment) => comment.id === id);
      // if (foundReply !== undefined) return
      // });
      // console.log(item[1].replies);
      // foundReply.score++;
      // }
    },
  },
  getters: {},
});
