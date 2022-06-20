<template>
  <s-page-title>
    <template #text>Детализация</template>
    <template #data><s-table-sort /></template>
  </s-page-title>

  <v-card-text class="d-none d-md-block px-8 px-sm-12">
    <v-table class="s-table-detailing">
      <thead>
        <tr>
          <th>Дата</th>
          <th>Операция</th>
          <th>Сумма</th>
          <th>Остаток</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.name">
          <td>{{ item.date }}</td>
          <td>{{ item.operation }}</td>
          <td :class="item.sum < 0 ? 'text-red' : 'text-green'">{{ item.sum }}</td>
          <td>{{ item.balance }}</td>
        </tr>
      </tbody>
    </v-table>
    <div class="text-center mt-10">
      <s-pagination />
    </div>
  </v-card-text>

  <v-card-text class="d-block d-md-none px-8 px-sm-12">
    <s-table-sort class="mb-8" />
    <v-row>
      <v-col>
        <v-card variant="outlined" class="s-detailing-card-list d-md-none pa-0 mb-3" v-for="item in items" :key="item.name">
          <v-card-text class="s-detailing-card-list__item d-flex justify-space-between align-center">
            <div class="s-detailing-card-list__title">Дата:</div>
            <div class="s-detailing-card-list__text">{{ item.date }}</div>
          </v-card-text>
          <v-card-text class="s-detailing-card-list__item d-flex justify-space-between align-center">
            <div class="s-detailing-card-list__title">Денежная операция:</div>
            <div class="s-detailing-card-list__text">{{ item.operation }}</div>
          </v-card-text>
          <v-card-text class="s-detailing-card-list__item d-flex justify-space-between align-center">
            <div class="s-detailing-card-list__title">Сумма, руб.:</div>
            <div class="s-detailing-card-list__text" :class="item.sum < 0 ? 'text-red' : 'text-green'">{{ item.sum }}</div>
          </v-card-text>
          <v-card-text class="s-detailing-card-list__item d-flex justify-space-between align-center">
            <div class="s-detailing-card-list__title">Остаток, руб.:</div>
            <div class="s-detailing-card-list__text">{{ item.balance }}</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <div class="text-center mt-10 px-4">
      <s-pagination />
    </div>
  </v-card-text>
</template>

<script>
import { ref } from 'vue';

import SPageTitle from '@/components/shared/s-page-title.vue';
import STableSort from '@/components/shared/s-table-sort.vue';
import SPagination from '@/components/shared/s-pagination.vue';

export default {
  setup() {
    const items = [
      { date: '07.05.2020 00:05:07', operation: 'Абонентская плата', sum: '-558.61', balance: '0.00' },
      { date: '07.05.2020 00:05:07', operation: 'Оплата через Сбербанк', sum: '558.61', balance: '558.61' },
      { date: '07.05.2020 00:05:07', operation: 'Абонентская плата', sum: '-558.61', balance: '0.00' },
      { date: '07.05.2020 00:05:07', operation: 'Оплата через Сбербанк', sum: '558.61', balance: '558.61' },
      { date: '07.05.2020 00:05:07', operation: 'Абонентская плата', sum: '-558.61', balance: '0.00' },
      { date: '07.05.2020 00:05:07', operation: 'Оплата через Сбербанк', sum: '558.61', balance: '558.61' },
      { date: '07.05.2020 00:05:07', operation: 'Абонентская плата', sum: '-558.61', balance: '0.00' },
    ];

    const page = ref(1);

    return {
      items,
      page,
    };
  },

  components: {
    SPageTitle,
    STableSort,
    SPagination,
  },
};
</script>

<style lang="scss" scoped>
.s-table-detailing thead tr,
.s-table-detailing tbody tr {
  height: 60px;
}

.s-table-detailing thead tr th,
.s-table-detailing tbody tr td {
  font-size: 16px !important;
  text-align: left;
}

.s-table-detailing thead tr th,
.s-table-detailing tbody tr td {
  border-bottom: 0 !important;
}

.s-table-detailing tbody tr td:first-child {
  border-top-left-radius: $border-radius-m;
  border-bottom-left-radius: $border-radius-m;
}

.s-table-detailing tbody tr td:last-child {
  border-top-right-radius: $border-radius-m;
  border-bottom-right-radius: $border-radius-m;
}

.s-table-detailing tbody tr:nth-child(odd) {
  background: $secondary;
}

.s-detailing-card-list {
  border-radius: $border-radius-l;
  border-color: #ccc;

  &__item {
    min-height: 60px;
  }

  &__title {
    font-size: 16px;
    font-weight: 500;
  }

  &__text {
    font-size: 16px;
    text-align: right;
  }
}

.s-detailing-card-list__item:nth-child(odd) {
  background: $secondary;
}

.s-detailing-card-list__item:last-child {
  border-bottom-left-radius: $border-radius-l;
  border-bottom-right-radius: $border-radius-l;
}
</style>
