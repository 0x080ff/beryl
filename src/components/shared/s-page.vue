<template>
  <v-row class="pr-lg-12">
    <v-col class="px-0 px-sm-4 pb-0">
      <v-card min-height="400" class="s-card pb-10" flat>
        <slot />
      </v-card>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
.s-card {
  border-radius: $border-radius-l;
}
</style>
