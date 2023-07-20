<script setup lang="ts">
import { RouterLink } from 'vue-router';

defineProps<{ name: string; icon: string; label: string }>();
</script>

<template>
  <div class="flex flex-col items-center gap-y-2">
    <RouterLink class="routing-btn" :to="{ name }">
      <font-awesome-icon :icon="`fa-solid ${icon}`" class="icon" />
    </RouterLink>
    <p class="routing-btn-label">{{ label }}</p>
  </div>
</template>

<style scoped>
@tailwind components;

@layer components {
  .routing-btn {
    @apply inline-flex items-center justify-center w-32 h-32 hover:bg-violet-400 focus:bg-violet-400 border-2 border-violet-300 shadow-md hover:shadow-lg focus:shadow-lg rounded-full text-white p-10 focus:ring-violet-500 focus:ring-2 focus:outline-none;
  }

  .routing-btn .icon {
    @apply w-2/3 h-2/3;
  }

  .routing-btn-label {
    @apply text-white font-semibold select-none text-xl;
  }
}
</style>
