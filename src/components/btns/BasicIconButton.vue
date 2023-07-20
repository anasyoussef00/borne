<script setup lang="ts">
import { HTMLAttributes } from 'vue';

defineProps<{
  color?: HTMLAttributes['class'];
  icon?: string;
  label: string;
  arLabel?: string;
  onClickCallback?: (payload: MouseEvent) => void;
}>();
</script>

<template>
  <button
    class="inline-flex justify-between items-center gap-2 px-4 py-2 text-white rounded-xl shadow-lg font-semibold"
    :class="color ?? 'bg-egg-shell-500'"
    @click="onClickCallback"
  >
    <font-awesome-icon v-if="icon" :icon="`fa-solid ${icon}`" />
    <div>
      <span>{{ label }}</span
      ><span v-if="arLabel"> - {{ arLabel }}</span>
    </div>
  </button>
</template>
