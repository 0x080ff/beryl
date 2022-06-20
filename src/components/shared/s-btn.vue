<template>
  <v-btn
    @click="$emit('click', $event)"
    :to="to"
    :class="classes"
    :append-icon="appendIcon"
    :prepend-icon="prependIcon"
    :disabled="disabled"
    :block="block"
    variant="text"
    v-if="styleType === 'primary'"
  >
    <slot>{{ label }}</slot>
  </v-btn>

  <v-btn
    @click="$emit('click', $event)"
    :to="to"
    :class="classes"
    :color="color"
    :append-icon="appendIcon"
    :prepend-icon="prependIcon"
    :variant="variant || 'outlined'"
    :disabled="disabled"
    :block="block"
    v-else
  >
    <slot>{{ label }}</slot>
  </v-btn>
</template>

<script>
import { computed } from 'vue';

export default {
  props: {
    label: {
      type: String,
      required: false,
    },
    styleType: {
      type: String,
      default: '',
    },
    to: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: '',
    },
    block: {
      type: Boolean,
      default: false,
    },
    variant: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    prependIcon: {
      type: String,
      default: '',
    },
    appendIcon: {
      type: String,
      default: '',
    },
  },

  setup(props) {
    const classes = computed(() => {
      return {
        's-btn': true,
        's-btn_primary': props.styleType === 'primary',
        's-btn_default': props.styleType === '',
      };
    });

    return {
      classes,
    };
  },
};
</script>

<style lang="scss" scoped>
.s-btn {
  height: 56px !important;
  text-transform: initial;
  font-size: 17px;
  letter-spacing: normal;
  font-weight: 400;
  border-radius: $border-radius-l;

  &_primary {
    background-color: $primary;
    color: white;
  }

  &_default {
    color: $primary;
  }
}
</style>
