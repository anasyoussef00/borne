<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
</script>

<template>
  <FontAwesomeIcon icon="fa-solid fa-spinner" class="loading-spinner" />
</template>

<style scoped>
.loading-spinner {
  @apply text-9xl animate-spin text-primary;
}
</style>
