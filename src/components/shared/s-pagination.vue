<template>
  <v-pagination v-model="page" :length="5" size="large" class="s-pagination"></v-pagination>
</template>

<script>
export default {
  setup() {},
};
</script>

<style lang="scss">
.s-pagination > ul > li.v-pagination__item {
  background-color: $secondary;
  border-radius: $border-radius-m;
}

.s-pagination > ul > li.v-pagination__item--is-active {
  background-color: $primary;
  color: white;
}
</style>
