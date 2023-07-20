<script setup lang="ts">
import { onMounted, onUnmounted, ref, toRefs } from 'vue';

const props = defineProps<{
  imgPaths: string[];
}>();

const { imgPaths } = toRefs(props);

const activeSlideIndex = ref<number>(0);
const sliderInterval = ref<NodeJS.Timer>();
const sliderIntervalIndex = ref<number>(0);

onMounted(() => {
  sliderIntervalIndex.value = 0;
  sliderInterval.value = setInterval(startSlideShow, 3500);
});

const startSlideShow = (): void => {
  if (sliderIntervalIndex.value > imgPaths.value.length - 1)
    sliderIntervalIndex.value = 0;
  activeSlideIndex.value = sliderIntervalIndex.value;
  sliderIntervalIndex.value++;
};

const currentSlide = (index: number): void => {
  clearInterval(sliderInterval.value);
  activeSlideIndex.value = index;
  sliderIntervalIndex.value = index + 1;
  sliderInterval.value = setInterval(startSlideShow, 3500);
};

onUnmounted(() => clearInterval(sliderInterval.value));
</script>

<template>
  <div>
    <div class="fixed inset-0 opacity-70 bg-black"></div>
    <!-- <div v-if="imgPaths.length > 1" class="absolute bottom-0 mb-4 w-full">
      <ul class="carousel-indicator-container">
        <li
          v-for="(_, index) in imgPaths"
          :id="`indicator-${index}`"
          :key="index"
          :class="`${activeSlideIndex === index ? 'active' : 'inactive'}`"
          class="carousel-indicator w-2 h-2 md:w-3 md:h-3 rounded-full cursor-pointer mx-2"
          @click="currentSlide(index)"
        ></li>
      </ul>
    </div> -->

    <div
      v-for="(imgPath, index) in imgPaths"
      :id="`slide-${index}`"
      :key="index"
      :class="`${activeSlideIndex === index ? 'active' : 'inactive'}`"
      class="slide-img-container"
    >
      <img class="slide-img" :src="imgPath" alt="SLIDE" />
    </div>
  </div>
</template>

<style scoped>
@tailwind components;

@layer components {
  /* .carousel-item {
    @apply float-left relative block w-full -mr-[100%] backface-hidden inset-0 transform transition-all duration-700 ease-in-out;
  } */

  .slide-img-container.active {
    @apply block;
  }

  .slide-img-container.inactive {
    @apply hidden;
  }

  .slide-img {
    @apply w-screen max-h-screen min-h-screen;
  }

  .carousel-item.active {
    @apply left-0;
  }

  .carousel-indicator-container {
    @apply flex justify-center;
  }

  .carousel-indicator {
    @apply border border-white transition-all duration-100 ease-in;
  }

  .carousel-indicator.active {
    @apply bg-violet-500 hover:bg-violet-600 scale-125 hover:scale-150;
  }

  .carousel-indicator.inactive {
    @apply bg-slate-400 hover:bg-slate-500 hover:scale-125;
  }
}
</style>
