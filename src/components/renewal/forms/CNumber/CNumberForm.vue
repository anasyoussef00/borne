<template>
  <div class="grid gap-4">
    <div>
      <label for="certificate-number-inp" class="cn-label required"
        >Numéro d'attestation - رقم شهادة التأمين</label
      >
      <input
        id="certificate-number-inp"
        class="cn-inp number-inp"
        type="number"
        placeholder="e.g. 144461086"
        autofocus
      />
    </div>
  </div>
</template>

<style scoped>
.cn-label {
  @apply block font-semibold text-primary-text text-xl mb-1.5;
}

.cn-inp {
  @apply w-full p-3 text-primary-text text-xl font-semibold bg-slate-50 focus:bg-white rounded-lg shadow-lg border-2 border-secondary focus:outline-none focus:ring placeholder-slate-400 placeholder:font-normal;
}
</style>
