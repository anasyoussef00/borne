<script setup lang="ts">
import RenewalFormHeader from '@/components/renewal/form/RenewalFormHeader.vue';
import { IFormStep } from '@/components/types';
import FormSteps from '@/components/steps/FormSteps.vue';
import RenewalFormFooter from '@/components/renewal/form/RenewalFormFooter.vue';
import { ImgHTMLAttributes, onUnmounted } from 'vue';
import { useModalStore } from '@/stores/modal';
import RNumberImgModal from '@/components/renewal/form/production-info/RNumber/modals/RNumberImgModal.vue';

defineProps<{
  titleExt: string;
  steps: IFormStep[];
  imgSrc: ImgHTMLAttributes['src'];
}>();

const modalStore = useModalStore();

onUnmounted(() => modalStore.close());
</script>

<template>
  <section class="text-center">
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

  <footer>
    <RenewalFormFooter
      :img-src="imgSrc"
      title="Cliquez pour agrandir l'image"
      ar-title="اضغط لتكبير الصورة"
      @click="modalStore.toggle"
    />
    <RNumberImgModal :img-src="imgSrc" />
  </footer>
</template>
