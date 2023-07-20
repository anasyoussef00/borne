<script setup lang="ts">
import StrippedModalMd from '@/components/modals/StrippedModalMd.vue';
import { ImgHTMLAttributes } from 'vue';

defineProps<{ imgSrc: ImgHTMLAttributes['src'] }>();
</script>

<template>
  <StrippedModalMd>
    <template #content>
      <img :src="imgSrc" alt="TAP TO ZOOM" class="w-3/4" loading="lazy" />
    </template>
  </StrippedModalMd>
</template>

<style scoped></style>
