<script setup lang="ts">
import { ImgHTMLAttributes } from 'vue';
import ModalMd from '../ModalMd.vue';

defineProps<{ imgSrc?: ImgHTMLAttributes['src'] }>();
</script>

<template>
  <ModalMd
    title="ATTESTATION D'ASSURANCE OBLIGATOIRE DES VEHICULES TERRESTRES A MOTEUR"
  >
    <template #content>
      <div class="flex justify-center items-center">
        <img
          :src="imgSrc ?? '/src/assets/imgs/examples/ADODVTAM.jpg'"
          alt="EXAMPLE"
          class="w-2/3"
          loading="lazy"
        />
      </div>
    </template>
  </ModalMd>
</template>
