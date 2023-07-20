<script setup lang="ts">
import ModalMd from '@/components/modals/ModalMd.vue';
import RenewalModalOptions from '@/components/renewal/RenewalModalOptions.vue';

defineProps<{ title: string }>();
</script>

<template>
  <ModalMd :title="title">
    <template #content>
      <RenewalModalOptions />
    </template>
  </ModalMd>
</template>
