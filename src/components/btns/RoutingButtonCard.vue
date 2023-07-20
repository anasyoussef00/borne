<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { RouteLocationRaw } from 'vue-router';
import { TFAIcon } from '../types';

defineProps<{
  to?: RouteLocationRaw;
  label: string;
  arLabel?: string;
  // icon: TFAIcon;
}>();
</script>

<template>
  <RouterLink
    :to="to ?? '#'"
    class="flex justify-between gap-x-4 bg-teal-600 w-full px-6 py-4 divide-x-2 rounded-lg"
  >
    <!-- <FontAwesomeIcon :icon="`fa-solid ${icon}`" /> -->
    <p class="text-2xl font-bold w-full">{{ label }}</p>
    <p v-if="arLabel" class="text-2xl font-bold text-end w-full">
      {{ arLabel }}
    </p>
    <!-- <div class="w-full"> -->
    <FontAwesomeIcon
      icon="fa-solid fa-chevron-right"
      class="text-slate-300 w-full text-end"
    />
    <!-- </div> -->
  </RouterLink>
</template>
