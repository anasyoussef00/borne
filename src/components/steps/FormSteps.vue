<script setup lang="ts">
import { IFormStep } from '@/components/types';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { useFormStepsStore } from '@/stores/renewal/formSteps';

defineProps<{ steps: IFormStep[] }>();

const formStepsStore = useFormStepsStore();
</script>

<template>
  <ul class="steps-container">
    <li
      v-for="(step, index) in steps"
      :id="`${step.title}-${index}`"
      :key="index"
      class="step"
    >
      <div
        class="step-icon-container"
        :class="
          formStepsStore.currentStepIndex === index ? 'active' : 'inactive'
        "
      >
        <FontAwesomeIcon :icon="`fa-solid fa-${step.icon}`" class="step-icon" />
      </div>
      <p class="step-title">
        {{ step.title }}
      </p>
    </li>
  </ul>
</template>

<style scoped>
.steps-container {
  @apply flex justify-evenly items-center;
}

.step {
  @apply flex flex-col gap-y-2 items-center flex-auto lg:flex-1;
}

.step-icon-container {
  @apply rounded-full border-4;
}

.step-icon-container.active {
  @apply bg-primary-text text-white shadow-xl border-primary font-bold transition-colors duration-300 ease-in;
}

.step-icon-container.inactive {
  @apply bg-slate-50 border-secondary text-primary-text font-semibold transition-colors duration-200 ease-out;
}

.step-icon {
  @apply w-8 h-7 md:w-10 md:h-9 m-4;
}

.step-title {
  @apply text-primary-text md:text-lg lg:text-xl font-semibold text-center;
}
</style>
