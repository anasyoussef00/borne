<script setup lang="ts">
import { ButtonHTMLAttributes } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

withDefaults(
  defineProps<{
    label: string;
    arLabel?: string;
    icon?: string;
    color?: string;
    type?: ButtonHTMLAttributes['type'];
    iconRight?: boolean;
  }>(),
  {
    arLabel: undefined,
    icon: undefined,
    color: 'bg-primary',
    type: 'button',
    iconRight: false,
  }
);
</script>

<template>
  <button
    class="form-step-navigation-btn"
    :class="`${iconRight ? 'flex-row-reverse' : 'flex-row'} ${color}`"
    :type="type"
  >
    <FontAwesomeIcon
      v-if="icon"
      :icon="`fa-solid fa-${icon}`"
      class="text-xl"
    />
    <span
      >{{ label }} <span v-if="arLabel"> - {{ arLabel }}</span></span
    >
  </button>
</template>

<style scoped>
.form-step-navigation-btn {
  @apply inline-flex justify-between items-center gap-x-4 p-4 text-white font-bold text-lg capitalize rounded-lg shadow-xl focus:outline-none focus:ring-4;
}
</style>
