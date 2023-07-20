<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { RouteLocationRaw } from 'vue-router';
import { AnchorHTMLAttributes } from 'vue';

withDefaults(
  defineProps<{
    to?: RouteLocationRaw;
    label: string;
    arLabel?: string;
    bgColor?: AnchorHTMLAttributes['class'];
    icon?: string;
    flexCol?: boolean;
  }>(),
  {
    to: '#',
    arLabel: undefined,
    bgColor: undefined,
    icon: undefined,
    flexCol: false,
  }
);
</script>

<template>
  <RouterLink
    :to="to"
    class="routing-icon-btn-nav"
    :class="bgColor ?? 'bg-primary'"
  >
    <div
      class="label-container"
      :class="
        flexCol ? 'flex flex-col items-start' : 'inline-flex items-center'
      "
    >
      <p>{{ label }}</p>
      <p>{{ arLabel }}</p>
    </div>
    <FontAwesomeIcon
      :icon="`fa-solid fa-${icon ?? 'chevron-right'}`"
      class="text-3xl"
    />
  </RouterLink>
</template>

<style scoped>
.routing-icon-btn-nav {
  @apply inline-flex justify-between items-center gap-x-6 col-span-1 text-white font-bold p-6 rounded-xl shadow-lg text-xl w-full;
}

.label-container {
  @apply gap-y-1 gap-x-8 flex-wrap;
}
</style>
