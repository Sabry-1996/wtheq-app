<template>
  <button>
    <slot name="btn"></slot>
    <v-dialog
      :persistent="false"
      v-model="showModel"
      activator="parent"
      class="model"
      width="auto"
      :min-width="size"
    >
      <div class="model__content pa-md-6 pa-2 rounded-lg">
        <div class="model__header">
          <div>
            <slot name="header"></slot>
          </div>
          <button @click="showModel = false">
            <span class="mdi mdi-close mdi-24px"></span>
          </button>
        </div>
        <div class="model__body">
          <slot name="content"></slot>
        </div>
      </div>
    </v-dialog>
  </button>
</template>
<script>
export default {
  props: {
    size: {
      type: String,
      default: "40%",
    },
  },
  data() {
    return {
      showModel: false,
    };
  },
  methods: {},
};
</script>
<style lang="scss">
.model {
  &__header {
    display: flex;
    justify-content: space-between;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 8px;
    color: #344863;
  }
  &__content {
    min-width: fit-content;
    background-color: #fff;
    margin: auto;
    width: 100%;
  }
  &__body {
    padding: 8px 16px;
  }
}
</style>
