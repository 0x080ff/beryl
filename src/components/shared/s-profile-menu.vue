<template>
  <v-menu min-width="200px" rounded :location="mdAndDown ? 'start' : 'bottom'">
    <template v-slot:activator="{ props }">
      <div v-bind="props" class="s-btn-menu">
        <span class="s-btn-text" v-if="!mdAndDown">Илья Протас</span>
        <v-btn icon class="ml-1 ml-lg-4 mr-0 mr-lg-2">
          <v-avatar color="secondary" :size="mdAndDown ? 40 : 60">
            <v-img src="/src/assets/img/profile-image.svg" alt="Profile"></v-img>
          </v-avatar>
        </v-btn>
        <v-icon color="white" size="small">mdi-menu-down</v-icon>
      </div>
    </template>

    <v-card>
      <v-card-text>
        <div class="mx-auto text-center">
          <p class="mt-1">00@0x080.ru</p>
          <v-divider class="my-3"></v-divider>
          <v-btn rounded variant="text"> Edit Account </v-btn>
          <v-divider class="my-3"></v-divider>
          <v-btn rounded variant="text"> Disconnect </v-btn>
        </div>
      </v-card-text>
    </v-card>
  </v-menu>
</template>

<script>
import { useDisplay } from 'vuetify';

export default {
  setup() {
    const { mdAndDown } = useDisplay();

    return {
      mdAndDown,
    };
  },
};
</script>

<style lang="scss" scoped>
.s-btn-menu:hover {
  cursor: pointer;
}

.s-btn-text {
  color: white;
}
</style>
