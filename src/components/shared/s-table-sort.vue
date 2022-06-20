<template>
  <div>
    <div class="d-none d-md-inline-flex text-body-1">Смотреть по датам:</div>
    <s-btn
      id="menu-activator"
      :variant="smAndDown ? 'outlined' : 'text'"
      append-icon="mdi-chevron-down"
      :block="smAndDown ?? false"
      >За все время</s-btn
    >
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

    <s-btn class="ml-0 ml-md-4 mt-3 mt-md-0" :block="smAndDown ?? false">Отправить на E-mail</s-btn>
  </div>
</template>

<script>
import { useDisplay } from 'vuetify';

import SBtn from '@/components/shared/s-btn.vue';

export default {
  components: {
    SBtn,
  },

  setup() {
    const { smAndDown } = useDisplay();

    return { smAndDown };
  },
};
</script>
