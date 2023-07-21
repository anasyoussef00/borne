<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { RouteLocationRaw } from 'vue-router';

defineProps<{
  to?: RouteLocationRaw;
  icon: string;
  label: string;
  arLabel?: string;
}>();
</script>

<template>
  <RouterLink :to="to ?? '#'" class="routing-icon-btn">
    <FontAwesomeIcon :icon="`fa-solid fa-${icon}`" class="text-3xl" />
    <div class="label-container">
      <p>{{ label }}</p>
      <p v-if="arLabel">{{ arLabel }}</p>
    </div>
  </RouterLink>
</template>

<style scoped>
.routing-icon-btn {
  @apply inline-flex items-center gap-x-6 bg-primary text-white font-bold px-4 py-6 rounded-xl shadow-2xl text-xl;
}

.label-container {
  @apply flex flex-col;
}
</style>
