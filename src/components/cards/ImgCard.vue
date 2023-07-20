<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { ImgHTMLAttributes } from 'vue';
import { RouteLocationRaw, RouterLink } from 'vue-router';

defineProps<{
  to: RouteLocationRaw;
  toText: string;
  arToText?: string;
  imgSrc: ImgHTMLAttributes['src'];
  label: string;
  arLabel?: string;
  objectPosition?: string;
  btnIcon?: string;
}>();
</script>

<template>
  <RouterLink :to="to" class="img-card-container">
    <header class="w-full">
      <img
        :src="imgSrc"
        alt="HEADER IMAGE"
        class="img-card-img"
        :class="objectPosition ?? 'object-center'"
      />
    </header>

    <article class="img-card-title">
      <h3>{{ label }}</h3>
      <h3 v-if="arLabel">({{ arLabel }})</h3>
    </article>

    <footer>
      <RouterLink :to="to" class="img-card-to-btn">
        <FontAwesomeIcon v-if="btnIcon" :icon="`fa-solid ${btnIcon}`" />
        <span>{{ toText }} ({{ arToText }})</span>
      </RouterLink>
    </footer>
  </RouterLink>
</template>

<style scoped>
@tailwind components;

@layer components {
  .img-card-container {
    @apply flex flex-col rounded-2xl bg-slate-200 shadow-lg w-1/4 gap-y-2 justify-center items-center pb-5;
  }

  .img-card-img {
    @apply w-[50rem] h-[17rem] object-cover rounded-t-2xl;
  }

  .img-card-title {
    @apply text-lg text-slate-800 font-semibold text-center my-2;
  }

  .img-card-to-btn {
    @apply inline-flex justify-center items-center gap-x-2 p-2 bg-teal-500 rounded-lg shadow-lg text-white;
  }
}
</style>
