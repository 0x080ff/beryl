<template>
  <v-footer app color="transparent" height="140" class="s-footer pt-16 d-none d-sm-block" v-if="!xs">
    <v-row class="pr-lg-12">
      <v-col class="s-footer__text d-flex align-center">BERYL © 2020 Все права защищены</v-col>
      <v-col class="s-footer__text">
        <div class="d-flex float-right align-center">
          Следите за нами:
          <v-btn class="ma-1" size="small" variant="outlined" icon="mdi-twitter"></v-btn>
          <v-btn class="ma-1" size="small" variant="outlined" icon="mdi-facebook"></v-btn>
          <v-btn class="ma-1" size="small" variant="outlined" icon="mdi-instagram"></v-btn>
          <v-btn class="ma-1" size="small" variant="outlined" icon="mdi-youtube"></v-btn>
        </div>
      </v-col>
    </v-row>
  </v-footer>

  <v-footer app color="white" height="220" class="s-footer-mobile d-block d-sm-none" v-else>
    <div class="s-footer-mobile__line mb-10"></div>
    <v-row class="">
      <v-col cols="12" class="s-footer-mobile__text d-flex align-center justify-center">
        <div>Следите за нами:</div>
      </v-col>
      <v-col cols="12" class="s-footer-mobile__text d-flex align-center justify-center">
        <v-btn class="ma-1" size="small" variant="outlined" icon="mdi-twitter" color="primary"></v-btn>
        <v-btn class="ma-1" size="small" variant="outlined" icon="mdi-facebook" color="primary"></v-btn>
        <v-btn class="ma-1" size="small" variant="outlined" icon="mdi-instagram" color="primary"></v-btn>
        <v-btn class="ma-1" size="small" variant="outlined" icon="mdi-youtube" color="primary"></v-btn>
      </v-col>

      <v-col cols="12" class="s-footer-mobile__text d-flex align-center justify-center">BERYL © 2020 Все права защищены</v-col>
    </v-row>
  </v-footer>
</template>

<script>
import { useDisplay } from 'vuetify';

export default {
  setup() {
    const { xs } = useDisplay();

    return {
      xs,
    };
  },
};
</script>
<style lang="scss" scoped>
.s-footer {
  &__text {
    color: #9ba5dc;
  }
}

.s-footer-mobile {
  &__line {
    border-top: 2px solid #f2f2f2;
  }

  &__text {
    color: #9fa0a1;
  }
}
</style>
