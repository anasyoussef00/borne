<script setup lang="ts">
defineProps<{ titleExt: string }>();
</script>

<template>
  <h1 class="title">Payer mes Quittances - دفع الإيصالات</h1>
  <h2 class="subtitle">{{ titleExt }}</h2>
</template>

<style scoped>
.title {
  @apply font-bold text-3xl text-primary-text;
}

.subtitle {
  @apply font-bold text-2xl text-primary-text;
}
</style>
