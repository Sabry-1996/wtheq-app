<template>
  <label>
    <p class="d-block mb-3 font-weight-bold">{{ label }}</p>
    <div class="filed mb-6">
      <div class="position-relative">
        <input
          :type="showPassword ? 'text' : type"
          class="filed__input"
          :placeholder="placeholder.length ? placeholder : label"
          :class="error && 'error'"
          :value="value"
          @input="($event) => update($event.target.value)"
          @blur="$emit('blur')"
          :disabled="disabled"
        />
      </div>
      <p class="error-text" v-if="error">{{ errorText }}</p>
    </div>
  </label>
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    label: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    error: {
      type: Boolean,
      default: false,
    },
    errorText: {
      type: String,
      default: "",
    },
    showPassword: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    update(value) {
      this.$emit("update:modelValue", value);
    },
  },
};
</script>
<style lang="scss" scoped>
</style>
