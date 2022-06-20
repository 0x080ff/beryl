<template>
  <v-app class="s-app">
    <v-layout>
      <s-drawer v-model="drawer" @close="closeDrawer()" />

      <s-app-bar @open="openDrawer()" />

      <v-main>
        <v-container fluid class="py-0 px-0 px-sm-2">
          <s-page>
            <BalanceInfo />

            <BalanceDetailing />
          </s-page>
        </v-container>
      </v-main>

      <s-footer></s-footer>
    </v-layout>
  </v-app>
</template>

<script>
import { ref } from 'vue';
import { useDisplay } from 'vuetify';

import BalanceInfo from '@/components/balance-info.vue';
import BalanceDetailing from '@/components/balance-detailing.vue';

import SAppBar from '@/components/shared/s-app-bar.vue';
import SDrawer from '@/components/shared/s-drawer.vue';
import SPage from '@/components/shared/s-page.vue';
import SFooter from '@/components/shared/s-footer.vue';

export default {
  setup() {
    const { smAndDown } = useDisplay();

    const drawer = ref(null);
    const openDrawer = () => {
      drawer.value = true;
    };
    const closeDrawer = () => {
      drawer.value = false;
    };

    return {
      smAndDown,
      drawer,
      openDrawer,
      closeDrawer,
    };
  },

  components: {
    BalanceInfo,
    SAppBar,
    SDrawer,
    SPage,
    BalanceDetailing,
    SFooter,
  },
};
</script>

<style lang="scss">
html {
  overflow-y: scroll;
}

body {
  font-family: 'Rubik', sans-serif;
}

.v-navigation-drawer__scrim {
  background: white !important;
}
</style>

<style lang="scss" scoped>
.s-app {
  background-image: $background-image;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
