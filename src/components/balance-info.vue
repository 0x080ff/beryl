<template>
  <s-page-title>
    <template #text>Ваш баланс</template>
    <template #data><s-balance-status /></template>
  </s-page-title>

  <v-card-text class="px-8 px-sm-12">
    <v-row>
      <v-col class="d-flex align-center mb-1" :class="xs ? 'justify-center' : ''">
        <icon-wallet />
        <div class="s-balans-sum">209,30 ₽</div>
      </v-col>

      <v-col cols="12" class="d-flex align-center justify-center d-md-none">
        <s-balance-status />
      </v-col>

      <v-col class="d-flex justify-end flex-wrap">
        <s-btn class="mr-md-4" :block="smAndDown ?? false">Пополнить счет</s-btn>
        <s-btn style-type="primary" append-icon="mdi-plus" class="mt-3 mt-md-0" :block="smAndDown ?? false"
          >Временный кредит</s-btn
        >
      </v-col>
    </v-row>

    <v-row class="pt-9">
      <v-col>
        <v-card variant="outlined" class="s-balance-card d-none d-md-block">
          <v-card-text class="d-flex justify-space-between flex-wrap align-stretch">
            <v-card flat class="s-balance-item-card" v-for="item in infoItems" :key="item.id">
              <v-card-text class="s-balance-item-card__title px-2"> {{ item.title }}: </v-card-text>
              <v-card-text class="s-balance-item-card__text px-2 pt-0" :class="item.primary ? 'text-primary' : ''">
                {{ item.text }}
              </v-card-text>
            </v-card>
          </v-card-text>
        </v-card>

        <v-card variant="outlined" class="s-balance-card-list d-md-none px-2 py-1">
          <v-card-text class="s-balance-card-list__item d-flex justify-space-between" v-for="item in infoItems" :key="item.id">
            <div class="s-balance-card-list__title">{{ item.title }}:</div>
            <div class="s-balance-card-list__text" :class="item.primary ? 'text-primary' : ''">{{ item.text }}</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="pt-9">
      <v-col cols="12" md="7" class="mt-0">
        <v-card flat class="s-bonus-card pl-3">
          <v-card-title class="pt-0"><span class="mt-n2">Бонусная программа</span></v-card-title>
          <v-card-text class="s-bonus-card__text pt-2">
            При оплате от <span class="font-weight-medium">2000</span> до <span class="font-weight-medium">3000</span> рублей вы
            получаете <span class="text-primary font-weight-medium">2%</span>,<br />
            от <span class="font-weight-medium">3001</span> до <span class="font-weight-medium">4000</span> рублей –
            <span class="text-primary font-weight-medium">3%</span>,<br />
            от <span class="font-weight-medium">4001</span> рублей – <span class="text-primary font-weight-medium">4%</span> от
            суммы платежа на бонусный счёт.
          </v-card-text>
          <v-card-text class="pb-0">
            <s-btn>Узнать подробнее</s-btn>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="5">
        <v-card flat class="s-info-card pa-5 bg-grey-lighten-3">
          <v-card-text class="s-info-card__text">
            *В случае если Ваше подключение было заблокировано, с момента поступления денежных средств на Лицевой счёт в полном
            объёме разблокировка произойдет в течение 1 (одного) часа.
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-card-text>
</template>

<script>
import { useDisplay } from 'vuetify';

import SPageTitle from '@/components/shared/s-page-title.vue';
import SBalanceStatus from '@/components/shared/s-balance-status.vue';
import SBtn from '@/components/shared/s-btn.vue';
import IconWallet from '@/components/icons/icon-wallet.vue';

export default {
  setup() {
    const { xs, smAndDown } = useDisplay();

    const infoItems = [
      { id: 0, title: 'Договор', text: '661-00-015', primary: true },
      { id: 1, title: 'Автоплатеж', text: 'Включен', primary: true },
      { id: 2, title: 'Ежемесячный платеж', text: '550,00 ₽', primary: false },
      { id: 3, title: 'Следующий платеж', text: '20.06.20', primary: false },
      { id: 4, title: 'Сумма к оплате', text: '341,00 ₽', primary: false },
    ];

    return { xs, smAndDown, infoItems };
  },

  components: {
    SPageTitle,
    SBalanceStatus,
    SBtn,
    IconWallet,
  },
};
</script>

<style lang="scss" scoped>
.s-balans-sum {
  padding-top: 8px;
  padding-left: 20px;
  font-size: 40px;
  font-weight: 500;
  white-space: nowrap;
}

.s-balance-card {
  border-radius: $border-radius-l;
  border-color: #ccc;
}

.s-balance-card-list {
  border-radius: $border-radius-l;
  border-color: #ccc;

  &__title {
    font-size: 16px;
  }

  &__text {
    font-size: 16px;
    font-weight: 500;
    white-space: nowrap;
  }

  &__item {
    border-bottom: 1px solid #ccc;
  }

  &__item:last-child {
    border-bottom: 0;
  }
}

.s-balance-item-card {
  &__title {
    font-size: 15px;
  }

  &__text {
    font-size: 20px;
    font-weight: 500;
  }
}

.s-bonus-card {
  border-left: 2px solid $primary;
  border-radius: 0;

  &__text {
    font-size: 16px;
  }
}

.s-info-card {
  &__text {
    font-size: 16px;
  }
}
</style>
