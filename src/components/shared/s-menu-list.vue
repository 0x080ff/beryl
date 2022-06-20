<template>
  <v-list bg-color="transparent" class="mt-6">
    <v-list-item
      class="s-list-item px-2"
      :class="mdAndDown ? 's-list-item_mobile' : 's-list-item_desktop'"
      v-for="item in items"
      :key="item.id"
      to="/"
      active-class="s-list-item_active"
      :active="item.active"
      active-color="white"
    >
      <v-list-item-avatar start class="s-list-item__avatar mr-1" :class="item.active ? 's-list-item__avatar_active' : ''">
        <v-icon :icon="item.icon"></v-icon>
      </v-list-item-avatar>
      <span class="s-list-item__title" :class="item.active ? 's-list-item__title_active' : ''">{{ item.title }}</span>
      <v-spacer />
      <v-list-item-icon
        icon="mdi-chevron-right"
        class="s-list-item__icon"
        :class="item.active ? 's-list-item__icon_active' : ''"
        v-if="mdAndDown || item.active"
      ></v-list-item-icon>
    </v-list-item>
  </v-list>
</template>

<script>
import { ref } from 'vue';
import { useDisplay } from 'vuetify';

export default {
  setup() {
    const { mdAndDown } = useDisplay();

    const items = ref([
      { id: 0, title: 'Баланс', icon: '$balance', active: true },
      { id: 1, title: 'Услуги', icon: '$services' },
      { id: 2, title: 'Акции', icon: '$stock' },
      { id: 3, title: 'Новости', icon: '$news' },
      { id: 4, title: 'FAQ', icon: '$faq' },
      { id: 5, title: 'О нас', icon: '$about' },
      { id: 6, title: 'Договор', icon: '$contract' },
      { id: 7, title: 'Настройки', icon: '$settings' },
    ]);

    return { mdAndDown, items };
  },
};
</script>
<style lang="scss" scoped>
.s-list-item {
  overflow: hidden;

  &_desktop {
    margin-bottom: 2px;
    border-radius: $border-radius-m;
    background-color: rgba($color: #111111, $alpha: 0.1);
  }

  &_mobile {
    background-color: $primary;
    border-bottom: 1px solid rgba($color: $secondary, $alpha: 0.3);
    border-radius: 0;
  }

  &_active {
    background-color: white;
  }

  &:last-child {
    border: 0;
  }

  &__avatar {
    color: white;

    &_active {
      color: $primary-dark;
      filter: invert(37%) sepia(95%) saturate(357%) hue-rotate(193deg) brightness(75%) contrast(100%);
    }
  }

  &__icon {
    color: white;

    &_active {
      color: $primary-dark;
    }
  }

  &__title {
    color: white;
    font-size: 16px;
    font-weight: 400;

    &_active {
      color: $primary-dark;
      font-weight: 500;
    }
  }
}
</style>
