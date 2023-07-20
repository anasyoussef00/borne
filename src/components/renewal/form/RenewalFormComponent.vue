<script async setup lang="ts">
import BasicIconButton from '@/components/btns/BasicIconButton.vue';
import { useRouter } from 'vue-router';
import ADODVTAMModal from '@/components/modals/renewal/ADODVTAMModal.vue';
import { useModalStore } from '@/stores/modal';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  HTMLAttributes,
  ImgHTMLAttributes,
  onMounted,
  onUnmounted,
  ref,
  toRefs,
} from 'vue';
import FormSteps from '@/components/FormSteps.vue';
import { IFormStep } from '@/components/types';
import { useFormStepsStore } from '@/stores/renewal/formSteps';
import Sweet from 'sweetalert2';

const props = defineProps<{
  titleExt?: string;
  imgSrc?: ImgHTMLAttributes['src'];
  objectPosition?: HTMLAttributes['class'];
  steps: IFormStep[];
}>();

const router = useRouter();
const modalStore = useModalStore();
const formStepsStore = useFormStepsStore();

const navigationBtnsContainer = ref<HTMLDivElement>();

const { steps } = toRefs(props);

onMounted(() => (formStepsStore.steps = steps.value));
onUnmounted(() => {
  modalStore.close();
  formStepsStore.currentStepIndex = 0;
});

const confirmCancellation = async (): Promise<void> => {
  try {
    const { isConfirmed } = await Sweet.fire({
      title: 'Confirmation (تأكيد)',
      html: `<p class="text-xl text-slate-700">Voulez-vous vraiment annuler cette opération?</p>
            <p class="text-slate-700">(هل أنت متأكد أنك تريد إلغاء هذه العملية؟)</p>`,
      icon: 'warning',
      showConfirmButton: true,
      confirmButtonText: 'Oui (نعم)',
      confirmButtonColor: '#14b8a6',
      showCancelButton: true,
      cancelButtonText: 'Non (لا)',
      cancelButtonColor: '#ef4444',
    });

    if (!isConfirmed) return;
    router.back();
  } catch (err) {
    Sweet.fire({
      title: 'Erreur',
      text: "Une erreur s'est produite lors de la tentative de terminer votre opération.",
      icon: 'error',
      toast: true,
      timer: 2000,
      timerProgressBar: true,
    });
    import.meta.env.DEV ? console.error(err) : null;
  }
};

const confirmHomeScreenReturn = async (): Promise<void> => {
  try {
    const { isConfirmed } = await Sweet.fire({
      title: 'Confirmation (تأكيد)',
      html: `<p class="text-xl text-slate-700">Voulez-vous vraiment revenir à l'écran d'accueil?</p>
            <p class="text-slate-700">(هل أنت متأكد أنك تريد العودة إلى الشاشة الرئيسية؟)</p>`,
      icon: 'warning',
      showConfirmButton: true,
      confirmButtonText: 'Oui (نعم)',
      confirmButtonColor: '#14b8a6',
      showCancelButton: true,
      cancelButtonText: 'Non (لا)',
      cancelButtonColor: '#ef4444',
    });

    if (!isConfirmed) return;
    router.push({ name: 'home' });
  } catch (err) {
    Sweet.fire({
      title: 'Erreur',
      text: "Une erreur s'est produite lors de la tentative de terminer votre opération.",
      icon: 'error',
      toast: true,
      timer: 2000,
      timerProgressBar: true,
    });
    import.meta.env.DEV ? console.error(err) : null;
  }
};
</script>

<template>
  <section
    class="inline-flex items-center absolute left-0 top-0 gap-x-2 my-6 mx-10"
  >
    <BasicIconButton
      color="bg-red-500"
      icon="fa-x"
      label="Annuler"
      ar-label="إلغاء"
      @click-callback="confirmCancellation"
    />

    <BasicIconButton
      label="Accueil"
      ar-label="الشاشة الرئيسية"
      icon="fa-home"
      color="bg-teal-600"
      @click-callback="confirmHomeScreenReturn"
    />
  </section>

  <section class="mt-16 relative">
    <form class="flex flex-col items-center gap-y-12">
      <h1
        class="m-auto text-2xl font-bold text-slate-700 capitalize select-none text-center"
      >
        Payer mes Quittances - دفع الإيصالات
        <p v-if="titleExt">({{ titleExt }})</p>
      </h1>

      <div class="w-3/4">
        <FormSteps :steps="formStepsStore.steps" />
      </div>

      <!-- <CRNumberForm /> -->
      <div class="flex flex-col gap-y-12 w-3/4">
        <!-- <slot name="form" /> -->
        <slot name="content">
          <component
            :is="steps[formStepsStore.currentStepIndex].component"
          ></component>
          <!-- <component :is="TestComponent"></component> -->
        </slot>

        <div
          ref="navigationBtnsContainer"
          :class="`flex ${
            formStepsStore.isFirstStep ? 'justify-end' : 'justify-between'
          }`"
        >
          <button
            v-if="!formStepsStore.isFirstStep"
            type="button"
            class="navigation-btn prev"
            @click="formStepsStore.previousStep"
          >
            <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
            <span class="first-letter:uppercase">précédent - السابق</span>
          </button>

          <button
            :type="
              formStepsStore.currentStepIndex ===
              formStepsStore.steps.length - 1
                ? 'submit'
                : 'button'
            "
            class="navigation-btn next"
            @click.prevent="formStepsStore.nextStep"
          >
            <span class="first-letter:uppercase">{{
              formStepsStore.isLastStep
                ? 'soumettre - إدخال'
                : 'suivant - التالي'
            }}</span>
            <FontAwesomeIcon
              :icon="`fa-solid ${
                formStepsStore.isLastStep ? 'fa-check' : 'fa-arrow-right'
              }`"
            />
          </button>
        </div>
      </div>
    </form>
  </section>

  <section v-if="imgSrc">
    <div class="flex flex-col justify-center items-center">
      <h3
        class="font-semibold leading-relaxed text-slate-600 mb-1 text-lg select-none"
      >
        Cliquez pour agrandir l'image - اضغط لتكبير الصورة
      </h3>
      <img
        :src="imgSrc"
        alt="CLICKABLE EXAMPLE IMAGE"
        class="w-96 h-52 object-cover cursor-zoom-in rounded-2xl"
        :class="objectPosition ?? 'object-top'"
        @click="modalStore.toggle"
      />
    </div>
    <ADODVTAMModal :img-src="imgSrc" />
  </section>
</template>

<style scoped>
@tailwind components;

@layer components {
  .navigation-btn.next {
    @apply inline-flex items-center gap-2 px-4 py-2 rounded-md bg-teal-500 disabled:opacity-50 disabled:bg-slate-400 disabled:text-slate-800 disabled:cursor-not-allowed text-white font-semibold text-lg enabled:shadow-md;
  }

  .navigation-btn.prev {
    @apply inline-flex items-center gap-2 px-4 py-2 rounded-md bg-sky-500 disabled:opacity-50 disabled:bg-slate-400 disabled:text-slate-800 disabled:cursor-not-allowed text-white font-semibold text-lg enabled:shadow-md;
  }
}
</style>
