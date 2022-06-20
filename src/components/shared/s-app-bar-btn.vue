<template>
  <v-btn :icon="icon" class="px-0" v-if="mdAndDown || !quantity"></v-btn>
  <v-btn rounded="pill" flat class="px-0" color="white" :prepend-icon="icon" size="x-large" v-else>+{{ quantity }}</v-btn>
</template>

<script>
import { useDisplay } from 'vuetify';

export default {
  props: {
    icon: String,
    quantity: Number,
  },

  setup() {
    const { mdAndDown } = useDisplay();

    return { mdAndDown };
  },
};
</script>
