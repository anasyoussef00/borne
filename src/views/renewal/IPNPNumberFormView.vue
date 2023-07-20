<script setup lang="ts">
import RenewalForm from '@/components/renewal/form/RenewalFormComponent.vue';
import IPNPNumberForm from '@/components/renewal/form/productionInfo/IPNPNumberForm.vue';
import TestComponent from '@/components/TestComponent.vue';
import AnotherTestComponent from '@/components/AnotherTestComponent.vue';
import { IFormStep } from '@/stores/renewal/types';

const steps: IFormStep[] = [
  {
    title: 'Informations de Production',
    icon: 'fa-user',
    component: IPNPNumberForm,
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
  <div class="flex flex-col justify-center gap-y-8 min-h-screen mx-4">
    <RenewalForm
      title-ext="Numéro d'attestation - رقم شهادة التأمين"
      img-src="/src/assets/imgs/examples/PNMNM.jpg"
      object-position="object-center"
      :steps="steps"
    >
      <template #content></template>
    </RenewalForm>
  </div>
</template>
