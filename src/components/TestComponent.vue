<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
  <div>
    <h1>TEST COMPONENT</h1>
    <button
      class="bg-violet-500 text-white p-2 w-full"
      @click="router.push({ name: 'another-test-view' })"
    >
      GO TO ANOTHER TEST COMPONENT
    </button>
  </div>
</template>
