<template>
  <div class="w-full">
    <label class="label required" for="certificate-number-inp"
      >Numéro d'attestation - رقم شهادة التأمين</label
    >
    <input
      id="certificate-number-inp"
      type="number"
      class="certificate-number-inp"
      placeholder="e.g. 14461086"
      autofocus
    />
  </div>
</template>

<style scoped>
@tailwind components;

@layer components {
  .label {
    @apply block font-semibold leading-relaxed text-slate-600 mb-0.5 select-none;
  }

  .certificate-number-inp {
    @apply block w-full shadow-lg rounded-md border border-sky-400 p-3 text-gray-900 ring-0 placeholder:text-slate-400 focus:ring-2 focus:outline-none focus:ring-teal-600 bg-white;
  }
}
</style>
