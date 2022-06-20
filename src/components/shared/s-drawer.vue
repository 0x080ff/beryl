<template>
  <v-navigation-drawer
    :value="value"
    :color="mdAndDown ? 'primary' : 'transparent'"
    floating
    :width="mdAndDown ? 280 : 320"
    class="pl-0 pl-lg-4"
  >
    <div class="s-drawer-bar" v-if="mdAndDown">
      <s-drawer-btn :icon="'$close'" @click.stop="close()">Закрыть</s-drawer-btn>
    </div>

    <div class="px-4 px-lg-9">
      <s-btn id="menu-activator" block append-icon="mdi-menu-down" color="white" class="s-drawer-btn">Личный кабинет</s-btn>
      <v-menu activator="#menu-activator">
        <v-list>
          <v-list-item>
            <v-list-item-title>Телевидение</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Мобильная связь</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>

    <div class="px-0 px-lg-9">
      <s-menu-list />
    </div>
  </v-navigation-drawer>
</template>

<script>
import { useDisplay } from 'vuetify';

import SDrawerBtn from '@/components/shared/s-drawer-btn.vue';
import SBtn from '@/components/shared/s-btn.vue';
import SMenuList from '@/components/shared/s-menu-list.vue';

export default {
  props: {
    value: Boolean,
  },

  setup(props, context) {
    const { mdAndDown } = useDisplay();

    const close = () => {
      context.emit('close');
    };

    return { mdAndDown, close };
  },

  components: {
    SDrawerBtn,
    SBtn,
    SMenuList,
  },
};
</script>

<style lang="scss" scoped>
.s-drawer-bar {
  width: 100%;
  height: 60px;
  padding-top: 8px;
  padding-left: 16px;
}

.s-drawer-btn {
  border-radius: $border-radius-m;
}
</style>
