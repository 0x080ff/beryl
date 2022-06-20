<template>
  <v-app-bar color="transparent" flat class="pr-4 pr-lg-15" :height="mdAndDown ? 60 : 110" :order="mdAndDown ? '0' : '-1'">
    <s-drawer-btn :icon="'$menu'" @click.stop="open()" v-if="mdAndDown">Меню</s-drawer-btn>
    <template v-if="!mdAndDown">
      <s-logo class="s-logo" />
    </template>

    <v-spacer />
    <div class="mx-0 mr-lg-8">
      <s-app-bar-btn icon="$notifications" :quantity="3"></s-app-bar-btn>
      <s-app-bar-btn icon="$security" :quantity="6" v-if="!xs"></s-app-bar-btn>
      <s-app-bar-btn icon="$chat" :quantity="0"></s-app-bar-btn>
    </div>
    <s-profile-menu />
  </v-app-bar>
</template>

<script>
import { useDisplay } from 'vuetify';

import SDrawerBtn from '@/components/shared/s-drawer-btn.vue';
import SLogo from '@/components/shared/s-logo.vue';
import SProfileMenu from '@/components/shared/s-profile-menu.vue';
import SAppBarBtn from '@/components/shared/s-app-bar-btn.vue';

export default {
  setup(props, context) {
    const { xs, mdAndDown } = useDisplay();

    const open = () => {
      context.emit('open');
    };

    return {
      xs,
      mdAndDown,
      open,
    };
  },

  components: {
    SDrawerBtn,
    SLogo,
    SProfileMenu,
    SAppBarBtn,
  },
};
</script>

<style lang="scss" scoped>
.s-logo {
  width: 320px;
  padding-right: 70px;
}
</style>
