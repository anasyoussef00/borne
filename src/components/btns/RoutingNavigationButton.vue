<script setup lang="ts">
import { RouteLocationRaw } from 'vue-router';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

withDefaults(
  defineProps<{
    to?: RouteLocationRaw;
    label: string;
    arLabel?: string;
    color?: string;
    icon: string;
  }>(),
  {
    to: '#',
    arLabel: undefined,
    color: 'bg-primary',
  }
);
</script>

<template>
  <RouterLink :to="to" class="routing-navigation-btn" :class="color">
    <FontAwesomeIcon v-if="icon" :icon="`fa-solid fa-${icon}`" />
    <span
      >{{ label }}<span v-if="arLabel"> - {{ arLabel }}</span></span
    >
  </RouterLink>
</template>

<style scoped>
.routing-navigation-btn {
  @apply inline-flex justify-center items-center gap-x-3 p-4 text-lg text-white font-bold capitalize rounded-lg shadow-lg;
}
</style>
