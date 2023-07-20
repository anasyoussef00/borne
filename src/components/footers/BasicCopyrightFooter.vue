<script setup lang="ts">
defineProps<{ content: string }>();
</script>

<template>
  <span
    class="capitalize font-bold select-none text-center text-lg text-primary-text"
    >{{ content }}</span
  >
</template>
