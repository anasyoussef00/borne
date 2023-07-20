import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useModalStore = defineStore('modal', () => {
  const open = ref<boolean>(false);

  const toggle = (): boolean => (open.value = !open.value);
  const close = () => (open.value = false);

  return { open, toggle, close };
});
