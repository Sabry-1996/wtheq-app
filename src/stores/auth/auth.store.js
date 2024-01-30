import { defineStore } from "pinia";
// import { useToast } from "vue-toastification";
import router from "@/router";
import Auth from "@/service/auth/auth.service";
// const toast = useToast();

export const useAuthStore = defineStore("auth", {
  state: () => ({
    records: null,
    isLoading: false,
  }),
  getters: {},
  actions: {
    async signup(user) {
      try {
        this.isLoading = true;
        const { data } = await Auth.register(user);
        console.log("data :", data);
      } catch (error) {
        console.log(error);
      } finally {
        this.isLoading = false;
      }
    },
  },
});
