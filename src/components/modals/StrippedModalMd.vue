<script setup lang="ts">
import { useModalStore } from '@/stores/modal';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const modalStore = useModalStore();
</script>

<template>
  <Teleport to="#modal">
    <Transition>
      <div
        v-if="modalStore.open"
        class="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none"
      >
        <div
          class="opacity-70 fixed inset-0 bg-black cursor-zoom-out"
          @click="modalStore.close"
        >
          <FontAwesomeIcon
            icon="fa-solid fa-x"
            class="absolute top-5 right-6 text-5xl text-white cursor-pointer"
            @click="modalStore.close"
          />
        </div>

        <article class="flex justify-center items-center w-1/2 h-1/2 relative">
          <slot name="content" />
        </article>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  @apply transition-opacity duration-300 ease-in-out;
}

.v-enter-from,
.v-leave-to {
  @apply opacity-0;
}
</style>
