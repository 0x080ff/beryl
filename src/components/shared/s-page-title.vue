<template>
  <v-card-header class="px-8 px-sm-12 pt-14 pb-10">
    <v-card-header-text>
      <v-card-title class="justify-space-between">
        <div class="s-title__text"><slot name="text" /></div>
        <div class="d-none d-md-block"><slot name="data" /></div>
      </v-card-title>
    </v-card-header-text>
  </v-card-header>
</template>

<style lang="scss" scoped>
.s-title__text {
  font-size: 30px;
  font-weight: 600;
}
</style>
