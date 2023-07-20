<script setup lang="ts">
import RenewalForm from '@/components/renewal/form/RenewalFormComponent.vue';
import CNumberForm from '@/components/renewal/form/productionInfo/CNumberForm.vue';
import TestComponent from '@/components/TestComponent.vue';
import AnotherTestComponent from '@/components/AnotherTestComponent.vue';
import { IFormStep } from '@/stores/renewal/types';

const steps: IFormStep[] = [
  {
    title: 'Informations de Production',
    icon: 'fa-user',
    component: CNumberForm,
  },
  {
    title: 'Récapitulatif',
    icon: 'fa-clipboard-check',
    component: AnotherTestComponent,
  },
  {
    title: 'Paiement',
    icon: 'fa-credit-card',
    component: TestComponent,
  },
];
</script>

<template>
  <div class="wrapper">
    <div class="flex flex-col justify-center gap-y-14 min-h-screen mx-4">
      <div class="absolute z-0 top-0 right-0 w-1/3 opacity-50">
        <img
          src="@/assets/imgs/bg/filler/leaves-filler.png"
          alt="SPLASH FILLER"
        />
      </div>
      <div class="absolute z-0 bottom-0 left-0 w-1/3 opacity-50 rotate-180">
        <img
          src="@/assets/imgs/bg/filler/leaves-filler.png"
          alt="SPLASH FILLER"
        />
      </div>

      <RenewalForm
        title-ext="Numéro d'attestation - رقم شهادة التأمين"
        img-src="/src/assets/imgs/examples/ADODVTAM.jpg"
        :steps="steps"
      >
        <template #content></template>
      </RenewalForm>
    </div>
  </div>
</template>
