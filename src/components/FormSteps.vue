<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { useFormStepsStore } from '@/stores/renewal/formSteps';

const formStepsStore = useFormStepsStore();
</script>

<template>
  <ul class="flex justify-between items-center w-full">
    <li
      v-for="(step, index) in formStepsStore.steps"
      :id="`step-${index}`"
      :key="index"
      class="flex flex-col justify-center items-center gap-y-1"
    >
      <div
        class="step-indicator bg-white"
        :class="
          formStepsStore.currentStepIndex === index ? 'active' : 'inactive'
        "
      >
        <FontAwesomeIcon v-if="step.icon" :icon="`fa-solid ${step.icon}`" />
        <p v-else>{{ index + 1 }}</p>
      </div>

      <p class="font-semibold text-slate-700 text-lg">{{ step.title }}</p>
    </li>
  </ul>
</template>

<style scoped>
@tailwind components;

@layer components {
  .step-indicator {
    @apply inline-flex justify-center items-center w-14 h-14 rounded-full shadow-md border-2 font-bold text-2xl border-teal-600;
  }

  .step-indicator.active {
    @apply bg-teal-500 text-white;
  }

  .step-indicator.inactive {
    @apply bg-white text-teal-600;
  }
}
</style>
