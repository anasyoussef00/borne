<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
  <div>
    <h1>ANOTHER TEST COMPONENT</h1>
    <button
      class="bg-red-500 text-white p-2 w-full"
      @click="router.push({ name: 'home' })"
    >
      GO BACK
    </button>
  </div>
</template>
