<template>
  <div>
    <!-- {{ types }} -->
    <!-- {{ user }} -->

    <h2>{{ $t("SIGN_IN.TITLE") }}</h2>
    <p class="my-4">
      {{ $t("SIGN_IN.LOGIN_PROMPT") }}
    </p>

    <form @submit.prevent="submitSignIn">
      <div class="d-flex ga-4 tabs mb-4">
        <button
          v-for="(item, index) in types"
          :key="index"
          class="pa-2 d-flex ga-4 justify-center align-center tabs__tab"
          @click="() => (user.type = item.key)"
          :class="{ isActive: user.type == item.key }"
        >
          <span class="mdi mdi-24px" :class="item.icon"></span>
          <span> {{ item.label }}</span>
        </button>
      </div>

      <filed-input
        v-model="user.email"
        :value="user.email"
        type="email"
        :error="v$.user.email.$error"
        :label="$t('FORM.EMAIL.LABEL')"
        :placeholder="$t('FORM.EMAIL.PLACEHOLDER')"
        :error-text="$t('ERRORS.EMAIL')"
        :show-password="showPassword"
        @blur="v$.user.email.$touch()"
      />

      <filed-input
        v-model="user.password"
        :value="user.password"
        type="password"
        :error="v$.user.password.$error"
        :label="$t('FORM.PASSWORD.LABEL')"
        :placeholder="$t('FORM.PASSWORD.PLACEHOLDER')"
        :error-text="$t('ERRORS.PASSWORD')"
        :show-password="showPassword"
        @blur="v$.user.password.$touch()"
        @show-password="showPassword = !showPassword"
      />

      <router-link to="/forget-password" class="d-block text-end mb-4">
        <span>
          {{ $t("SIGN_IN.FORGOT_PASSWORD") }}
        </span>
      </router-link>

      <main-button type="submit" :isLoading="isLoading" class="w-100">
        <template #content>
          {{ $t("SIGN_IN.BTN_LOGIN") }}
        </template>
      </main-button>
    </form>

    <div class="d-flex align-center ga-2 justify-center mt-4">
      <span> {{ $t("SIGN_IN.NO_ACCOUNT") }}</span>
      <router-link to="/forget-password">
        <span>
          {{ $t("SIGN_IN.CREATE_NEW_ACCOUNT") }}
        </span>
      </router-link>
    </div>
  </div>
</template>
<script>
import FiledInput from "@/components/FiledInput.vue";
import MainButton from "@/components/MainButton.vue";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";

export default {
  components: { FiledInput, MainButton },
  setup() {
    return { v$: useVuelidate() };
  },

  validations() {
    return {
      user: {
        email: { required },
        password: { required },
      },
    };
  },

  data() {
    return {
      showPassword: false,
      isLoading: false,
      user: {
        type: "company",
        email: "",
        password: "",
      },
    };
  },
  computed: {
    types() {
      return [
        {
          key: "company",
          label: this.$t("SIGN_IN.COMPANY"),
          icon: "mdi-account-group",
        },
        {
          key: "individual",
          label: this.$t("SIGN_IN.INDIVIDUAL"),
          icon: "mdi-account",
        },
      ];
    },
  },

  methods: {
    submitSignIn() {
      console.log("submitSignIn");
    },
  },
};
</script>
<style lang="scss" scoped>
.tabs {
  &__tab {
    transition: 0.3s;
    border: 1px solid #e8e8e8;
    border-radius: 18px;
    &.isActive {
      background-color: $main-color;
      color: #fff;
      border-color: transparent;
    }
  }
}
</style>
