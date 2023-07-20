<script setup lang="ts">
import { RouteLocationRaw, RouterLink } from 'vue-router';

defineProps<{
  to?: RouteLocationRaw;
  label: string;
  arLabel?: string;
  roundedStart?: boolean;
}>();
</script>

<template>
  <RouterLink
    class="routing-btn"
    :class="
      roundedStart
        ? 'rounded-s-full bg-gradient-to-bl from-green-400 via-green-500 to-green-600'
        : 'rounded-e-full bg-gradient-to-tl from-green-600 via-green-500 to-green-400'
    "
    :to="to ?? '#'"
    ><p>{{ label }}</p>
    <p>{{ arLabel }}</p></RouterLink
  >
</template>

<style scoped>
@tailwind components;

@layer components {
  /* #c2845a */
  .routing-btn {
    @apply shadow-2xl text-white p-5 text-center text-2xl font-semibold select-none w-full;
  }
}
</style>
