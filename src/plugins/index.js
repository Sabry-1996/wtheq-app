// Plugins
import vuetify from "./vuetify";
import { i18n } from "./I18n";
import pinia from "@/stores";
import router from "@/router";
import VueCookies from "vue-cookies";
import Toast, { POSITION } from "vue-toastification";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

export function registerPlugins(app) {
  app.use(i18n).use(vuetify).use(router).use(pinia).use(VueCookies);
}
