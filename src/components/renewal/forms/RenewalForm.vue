<script setup lang="ts">
import RenewalFormHeader from '@/components/renewal/forms/RenewalFormHeader.vue';
import { IFormStep } from '@/components/types';
import FormSteps from '@/components/steps/FormSteps.vue';
import RenewalFormFooter from '@/components/renewal/forms/RenewalFormFooter.vue';
import { ImgHTMLAttributes, onUnmounted } from 'vue';
import { useModalStore } from '@/stores/modal';
import RNumberImgModal from '@/components/renewal/forms/modals/RenewalImgModal.vue';
import { useFormStepsStore } from '@/stores/renewal/formSteps';

withDefaults(
  defineProps<{
    titleExt: string;
    steps: IFormStep[];
    imgSrc: ImgHTMLAttributes['src'];
    objectTop?: boolean;
  }>(),
  {
    objectTop: false,
  }
);

const modalStore = useModalStore();
const formStepStore = useFormStepsStore();

onUnmounted(() => modalStore.close());
</script>

<template>
  <section>
    <RenewalFormHeader :title-ext="titleExt" />
  </section>

  <section>
    <FormSteps :steps="steps" />
  </section>

  <section>
    <form method="POST">
      <slot name="form-content" />
    </form>
  </section>

  <footer v-if="formStepStore.isFirstStep">
    <RenewalFormFooter
      :img-src="imgSrc"
      title="Cliquez pour agrandir l'image"
      ar-title="اضغط لتكبير الصورة"
      :object-top="objectTop"
      @click="modalStore.toggle"
    />
    <RNumberImgModal :img-src="imgSrc" />
  </footer>
</template>
