<template >
  <div>
    <!-- {{ types }} -->
    <!-- {{ user }} -->

    <h2>{{ $t("SIGN_IN.TITLE") }}</h2>
    <p class="my-4">
      {{ $t("SIGN_IN.LOGIN_PROMPT") }}
    </p>

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

    {{ $t("COPY_RIGHT") }}
  </div>
</template>
<script>
import FiledInput from "@/components/FiledInput.vue";
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";

export default {
  components: { FiledInput },
  setup() {
    return { v$: useVuelidate() };
  },

  validations() {
    return {
      user: {
        phone: { required },
        password: { required },
      },
    };
  },

  data() {
    return {
      showPassword: false,
      user: {
        type: "",
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
        },
        {
          key: "individual",
        },
      ];
    },
  },
};
</script>
<style lang="">
</style>