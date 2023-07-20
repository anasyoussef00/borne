<script setup lang="ts">
import { RouterView } from 'vue-router';
import { useLoadingStore } from '@/stores/loading';
import LoadingSpinner from '@/components/loading/LoadingSpinner.vue';

const loadingStore = useLoadingStore();
</script>

<template>
  <main
    class="select-none"
    :class="
      loadingStore.isLoading
        ? 'flex justify-center items-center min-h-screen bg-transparent'
        : undefined
    "
  >
    <LoadingSpinner v-if="loadingStore.isLoading" />
    <RouterView v-else />
  </main>
</template>
