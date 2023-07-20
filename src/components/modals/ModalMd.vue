<script setup lang="ts">
import { useModalStore } from '@/stores/modal';

defineProps<{ title?: string }>();

const modalStore = useModalStore();
</script>

<template>
  <Teleport to="#modal">
    <div
      v-if="modalStore.open"
      class="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none"
    >
      <div
        class="opacity-70 fixed inset-0 bg-black"
        @click="modalStore.close"
      ></div>

      <div class="relative w-auto my-6 mx-auto max-w-3xl">
        <div
          class="relative flex flex-col border-0 rounded-lg shadow-lg w-full bg-slate-100 outline-none focus:outline-none"
        >
          <header
            v-if="title"
            class="inline-flex items-center justify-between p-5 border-b border-b-secondary"
          >
            <h1
              class="text-lg font-bold capitalize text-primary-text leading-relaxed"
            >
              {{ title.toLowerCase() }}
            </h1>
            <div
              class="inline-flex justify-center items-center p-2 rounded-full bg-danger"
            >
              <font-awesome-icon
                class="cursor-pointer text-white font-bold outline-none focus:outline-none w-4 h-4"
                icon="fa-solid fa-x"
                @click="modalStore.close"
              />
            </div>
          </header>

          <article class="m-2">
            <slot name="content" />
          </article>

          <footer class="footer">
            <slot name="footer" />
          </footer>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.footer {
  @apply flex justify-end items-center p-6 border-t border-solid border-slate-200 rounded empty:hidden;
}
</style>
