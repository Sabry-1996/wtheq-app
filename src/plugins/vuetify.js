/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */
import "@fortawesome/fontawesome-free/css/all.css"; // Ensure your project is capable of handling css files

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import "vuetify/dist/vuetify.css"; // Import Vuetify CSS

// Composables
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { createVueI18nAdapter } from "vuetify/locale/adapters/vue-i18n";
import { useI18n } from "vue-i18n";
import { i18n } from "./I18n.js";
import { aliases, fa } from "vuetify/iconsets/fa";

export default createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "fa",
    aliases,
    sets: {
      fa,
    },
  },
  locale: {
    locale: "ar",
    fallback: "ar",
    adapter: createVueI18nAdapter({ i18n, useI18n }),
  },
  rtl: { ar: true },
  theme: {
    dark: false, // Set to true if you want a dark theme
    themes: {
      light: {
        // primary: "#1976D2",
        // secondary: "#424242",
        // accent: "#82B1FF",
        // error: "#FF5252",
        // info: "#2196F3",
        // success: "#4CAF50",
        // warning: "#FFC107",
      },
      dark: {
        // primary: "#2196F3",
        // secondary: "#FFC107",
        // accent: "#9C27B0",
        // error: "#FF5252",
        // info: "#2196F3",
        // success: "#4CAF50",
        // warning: "#FFC107",
      },
    },
    // Customize other aspects of the theme
    // For example:
    // spacing: [], // Define your spacing scale
    // shadows: [], // Define your custom shadow levels
    // borderRadius: [], // Define your border radius values
    // borderWidth: [], // Define your border width values
  },
});
