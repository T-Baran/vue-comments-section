import { defineStore } from "pinia";
import data from "../FM files/data.json";
export const useCurrentUserStore = defineStore({
  id: "currentUser",
  state: () => ({
    ...data.currentUser,
  }),
  actions: {
    getImage(url) {
      return "src" + url.slice(1);
    },
  },
  getters: {},
});
