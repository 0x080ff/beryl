<template>
  <v-btn rounded="pill" flat color="transparent" :prepend-icon="icon" size="large" class="px-2">
    <span class="s-text"><slot /></span>
  </v-btn>
</template>

<script>
export default {
  props: {
    icon: String,
  },
};
</script>

<style lang="scss" scoped>
.s-text {
  text-transform: initial;
  font-size: 16px;
  letter-spacing: normal;
  font-weight: 400;
  color: white;
}
</style>
