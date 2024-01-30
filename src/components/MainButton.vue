<template>
  <button :class="style" :disabled="isLoading">
    <template v-if="isLoading">
      <v-progress-circular :size="size" :color="color" indeterminate />
    </template>
    <template v-else>
      <slot name="content" />
    </template>
  </button>
</template>
<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
      default: false,
    },
    style: {
      type: String,
      default: "main-btn",
    },
    size: {
      type: Number,
      default: 16,
    },
    color: {
      type: String,
      default: "white",
    },
  },
};
</script>
<style lang=""></style>
