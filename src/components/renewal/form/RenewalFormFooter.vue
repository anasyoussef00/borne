<script setup lang="ts">
import { ImgHTMLAttributes } from 'vue';

withDefaults(
  defineProps<{
    imgSrc: ImgHTMLAttributes['src'];
    title: string;
    arTitle?: string;
  }>(),
  {
    arTitle: undefined,
  }
);
</script>

<template>
  <div
    class="flex flex-col justify-center items-center gap-y-4 cursor-zoom-in mx-auto"
  >
    <h4 class="inline-flex items-center text-2xl font-bold text-primary-text">
      <span
        >{{ title }} <span v-if="arTitle">- {{ arTitle }}</span></span
      >
    </h4>

    <section class="rounded-xl shadow-xl">
      <img
        :src="imgSrc"
        alt="DOCUMENT SCREENSHOT"
        class="w-96 h-56 object-cover object-top rounded-xl mx-auto"
      />
    </section>
  </div>
</template>
