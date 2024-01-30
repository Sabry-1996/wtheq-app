<template >
  <div class="test">
    <v-row>
      <v-col md="6" cols="12">
        <div class="d-flex flex-column justify-space-between h-100">
          <div>
            <div class="pa-8">
              <img src="/images/auth/logo.svg" alt="logo" />
            </div>
            <div class="pa-12">
              <router-view />
            </div>
          </div>
          <div>
            <p class="text-center">
              {{ $t("COPY_RIGHT") }}
            </p>
          </div>
        </div>
      </v-col>
      <v-col md="6" cols="12" class="pa-0 h-100">
        <div class="bg-section"></div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.bg-section {
  background-image: url("./images/auth/bg.svg");
  height: 100dvh;
  background-size: cover;
}
</style>