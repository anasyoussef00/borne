<script setup lang="ts">
import RenewalForm from '@/components/renewal/forms/RenewalForm.vue';
import TestComponent from '@/components/TestComponent.vue';
import AnotherTestComponent from '@/components/AnotherTestComponent.vue';
import { IFormStep } from '@/stores/renewal/types';
import FormStepNavigationButton from '@/components/btns/FormStepNavigationButton.vue';
import { useFormStepsStore } from '@/stores/renewal/formSteps';
import RoutingNavigationButton from '@/components/btns/RoutingNavigationButton.vue';
import Swal from 'sweetalert2';
import { isNavigationFailure, useRouter } from 'vue-router';
import { inject } from 'vue';
import CNumberForm from '@/components/renewal/forms/CNumber/CNumberForm.vue';

const IS_DEV = inject<boolean>('IS_DEV');

const steps: IFormStep[] = [
  {
    title: 'Informations de Production',
    icon: 'user',
    component: CNumberForm,
  },
  {
    title: 'Récapitulatif',
    icon: 'clipboard-check',
    component: AnotherTestComponent,
  },
  {
    title: 'Paiement',
    icon: 'credit-card',
    component: TestComponent,
  },
];

const router = useRouter();
const formStepsStore = useFormStepsStore();

formStepsStore.steps = steps;

const test = () => {
  console.log('AAAAAAAAAAAA');
};

const confirmCancel = async () => {
  try {
    const BG_DANGER = '#FE0000';
    const BG_PRIMARY = '#7D7463';

    const contentTemplate = `<h2 class="font-semibold text-xl text-primary-text">Voulez-vous vraiment annuler cette opération?</h2>
             <h2 class="font-semibold text-xl text-primary-text">هل أنت متأكد أنك تريد إلغاء هذه العملية؟</h2>`;

    const { isConfirmed } = await Swal.fire({
      title: `<h1 class="font-bold text-2xl text-black">Confirmation - تأكيد</h1>`,
      html: contentTemplate,
      icon: 'question',
      showConfirmButton: true,
      focusConfirm: false,
      confirmButtonText: 'Oui (نعم)',
      confirmButtonColor: BG_PRIMARY,
      showCancelButton: true,
      focusCancel: true,
      cancelButtonText: 'Non (لا)',
      cancelButtonColor: BG_DANGER,
      showCloseButton: true,
    });
    if (!isConfirmed) return;

    return router.push({ name: 'renewal-search-by' });
  } catch (err) {
    const contentTemplate = `<h2 class="font-semibold text-primary-text">Une erreur interne s'est produite, veuillez contacter votre agence la plus proche.</h2>
                             <h2 class="font-semibold text-primary-text">حدث خطأ داخلي ، يرجى الاتصال بوكالتك المجاورة.</h2>`;
    const errTitle = isNavigationFailure(err) ? err.name : '';
    const errMsg = isNavigationFailure(err) ? err.message : (err as string);

    return Swal.fire({
      title: IS_DEV ? errTitle : 'Oops...!',
      html: IS_DEV ? `<h1>${errMsg}</h1>` : contentTemplate,
      icon: 'error',
      toast: true,
      timer: 5000,
      timerProgressBar: true,
      position: 'bottom',
      showConfirmButton: false,
      showCloseButton: true,
    });
  }
};

const confirmBackHome = async () => {
  try {
    const BG_DANGER = '#FE0000';
    const BG_PRIMARY = '#7D7463';

    const contentTemplate = `<h2 class="font-semibold text-xl text-primary-text">Voulez-vous vraiment revenir à l'écran d'accueil?</h2>
             <h2 class="font-semibold text-xl text-primary-text">هل أنت متأكد أنك تريد العودة إلى الشاشة الرئيسية؟</h2>`;

    const { isConfirmed } = await Swal.fire({
      title: `<h1 class="font-bold text-2xl text-black">Confirmation - تأكيد</h1>`,
      html: contentTemplate,
      icon: 'warning',
      showConfirmButton: true,
      focusConfirm: false,
      confirmButtonText: 'Oui (نعم)',
      confirmButtonColor: BG_PRIMARY,
      showCancelButton: true,
      focusCancel: true,
      cancelButtonText: 'Non (لا)',
      cancelButtonColor: BG_DANGER,
      showCloseButton: true,
    });
    if (!isConfirmed) return;

    return router.push({ name: 'home' });
  } catch (err) {
    const contentTemplate = `<h2 class="font-semibold text-primary-text">Une erreur interne s'est produite, veuillez contacter votre agence la plus proche.</h2>
                             <h2 class="font-semibold text-primary-text">حدث خطأ داخلي ، يرجى الاتصال بوكالتك المجاورة.</h2>`;
    const errTitle = isNavigationFailure(err) ? err.name : '';
    const errMsg = isNavigationFailure(err) ? err.message : (err as string);

    return Swal.fire({
      title: IS_DEV ? errTitle : 'Oops...!',
      html: IS_DEV ? `<h1>${errMsg}</h1>` : contentTemplate,
      icon: 'error',
      toast: true,
      timer: 5000,
      timerProgressBar: true,
      position: 'bottom',
      showConfirmButton: false,
      showCloseButton: true,
    });
  }
};
</script>

<template>
  <div
    class="flex flex-col gap-y-2 xl:gap-y-5 min-h-screen bg-primary-background"
  >
    <header class="my-4 mx-8">
      <nav class="inline-flex items-center gap-x-2">
        <RoutingNavigationButton
          icon="home"
          label="accueil"
          ar-label="الشاشة الرئيسية"
          color="bg-danger"
          @click="confirmBackHome"
        />

        <RoutingNavigationButton
          icon="person-walking-arrow-loop-left"
          label="annuler"
          ar-label="إلغاء"
          @click="confirmCancel"
        />
      </nav>
    </header>

    <section class="flex flex-col gap-y-8 w-10/12 mx-auto">
      <RenewalForm
        title-ext="Numéro d'attestation - رقم شهادة التأمين"
        :steps="steps"
        img-src="/src/assets/imgs/examples/ADODVTAM.jpg"
        object-top
      >
        <template #form-content>
          <div class="flex flex-col gap-y-8">
            <Transition name="slide-fade" mode="out-in">
              <component
                :is="steps[formStepsStore.currentStepIndex].component"
              />
            </Transition>

            <div
              class="flex items-center"
              :class="
                !formStepsStore.isFirstStep ? 'justify-between' : 'justify-end'
              "
            >
              <FormStepNavigationButton
                v-show="!formStepsStore.isFirstStep"
                label="précédent"
                ar-label="السابق"
                icon="arrow-left"
                color="bg-primary-text"
                @click="formStepsStore.previousStep"
              />

              <FormStepNavigationButton
                :label="formStepsStore.isLastStep ? 'soumettre' : 'suivant'"
                :ar-label="formStepsStore.isLastStep ? 'أنهي' : 'التالي'"
                :icon="formStepsStore.isLastStep ? 'check' : 'arrow-right'"
                :color="
                  formStepsStore.isLastStep ? 'bg-green-600' : 'bg-primary'
                "
                icon-right
                @click="
                  !formStepsStore.isLastStep
                    ? formStepsStore.nextStep()
                    : test()
                "
              />
            </div>
          </div>
        </template>
      </RenewalForm>
    </section>
  </div>
  <!--  <div class="flex flex-col justify-center gap-y-8 min-h-screen mx-4">-->
  <!--    <RenewalForm-->
  <!--      title-ext="Immatriculation - رقم اللوحة"-->
  <!--      img-src="/src/assets/imgs/examples/ADODVTAM.jpg"-->
  <!--      :steps="steps"-->
  <!--    >-->
  <!--      <template #content></template>-->
  <!--    </RenewalForm>-->
  <!--  </div>-->
</template>

<style scoped>
.slide-fade-enter-active {
  @apply transition-all duration-300 ease-in;
}

.slide-fade-leave-active {
  @apply transition-all duration-200 ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  @apply transform translate-x-5 opacity-0;
}
</style>
