<script setup lang="ts">
import { ImgHTMLAttributes } from 'vue';

defineProps<{ logoPath: ImgHTMLAttributes['src']; title: string }>();
</script>

<template>
  <nav class="nav-bar">
    <img :src="logoPath" alt="LOGO" class="logo" />
    <h1 class="title">{{ title }}</h1>
  </nav>
</template>

<style scoped>
.nav-bar {
  @apply flex flex-col justify-center items-center text-primary-text;
}

.logo {
  @apply w-[14.8%];
}

.title {
  @apply font-bold text-3xl;
}
</style>
