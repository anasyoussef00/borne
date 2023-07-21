<script setup lang="ts">
defineProps<{ titleExt: string }>();
</script>

<template>
  <div class="titles-container">
    <h1 class="title">Payer mes Quittances - دفع الإيصالات</h1>
    <h2 class="subtitle">{{ titleExt }}</h2>
  </div>
</template>

<style scoped>
.titles-container {
  @apply flex flex-col items-center justify-center gap-y-1;
}

.title {
  @apply font-bold text-3xl text-primary-text;
}

.subtitle {
  @apply font-bold text-2xl text-primary-text;
}
</style>
