<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="renewal-modal-options-container">
    <RouterLink to="#" class="renewal-modal-options-btn-container">
      <img
        src="@/assets/imgs/thumbnails/qr_code.png"
        alt="QR CODE"
        class="renewal-modal-options-thumbnail"
      />

      <div class="renewal-modal-options-btn">
        <p>Scanner Le QR Code</p>
        <p>(QR مسح رمز)</p>
      </div>
    </RouterLink>

    <RouterLink
      :to="{ name: 'renewal-search-by' }"
      class="renewal-modal-options-btn-container"
    >
      <img
        src="@/assets/imgs/thumbnails/keyboard.png"
        alt="KEYBOARD"
        class="renewal-modal-options-thumbnail"
      />

      <div class="renewal-modal-options-btn">
        <p>Saisir les informations</p>
        <p>(إدخال المعلومات)</p>
      </div>
    </RouterLink>
  </div>
</template>

<style scoped>
.renewal-modal-options-container {
  @apply inline-flex items-center divide-x-2 divide-secondary my-4;
}

.renewal-modal-options-btn {
  @apply flex flex-col items-center bg-primary w-2/3 rounded-xl py-3 text-white text-xl font-bold shadow-xl capitalize;
}

.renewal-modal-options-btn-container {
  @apply flex flex-col items-center gap-y-6;
}

.renewal-modal-options-thumbnail {
  @apply w-2/3 border-2 border-secondary p-4 rounded-lg shadow-lg;
}
</style>
