import { IFormStep } from '@/components/types';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useFormStepsStore = defineStore('forms-steps', () => {
  const currentStepIndex = ref<number>(0);
  const steps = ref<IFormStep[]>([]);

  const isFirstStep = computed<boolean>(() => currentStepIndex.value === 0);

  const isLastStep = computed<boolean>(
    () => currentStepIndex.value === steps.value.length - 1
  );

  // const setSteps = (formSteps: IFormStep[]) => (steps.value = formSteps);

  const nextStep = (): number =>
    (currentStepIndex.value =
      currentStepIndex.value < steps.value.length - 1
        ? currentStepIndex.value + 1
        : 0);

  const setCurrentStep = (index: number): number =>
    (currentStepIndex.value = index);

  const previousStep = (): number => (currentStepIndex.value -= 1);

  return {
    currentStepIndex,
    steps,
    // setSteps,
    nextStep,
    setCurrentStep,
    previousStep,
    isFirstStep,
    isLastStep,
  };
});
