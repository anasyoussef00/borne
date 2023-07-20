<template>
  <div class="inline-flex justify-around items-center gap-x-6">
    <div class="w-full">
      <label class="label required" for="member-number-inp"
        >Numéro de Sociétaire - رقم الشريك</label
      >
      <input
        id="member-number-inp"
        type="number"
        class="member-number-inp"
        placeholder="e.g. 245965"
      />
    </div>

    <div class="w-full">
      <label class="label required" for="police-number-inp"
        >Numéro de Police - رقم بوليصة التأمين</label
      >
      <input
        id="police-number-inp"
        type="number"
        class="police-number-inp"
        placeholder="e.g. 0237641577"
      />
    </div>
  </div>
</template>

<style scoped>
@tailwind components;

@layer components {
  .label {
    @apply block font-semibold leading-relaxed text-slate-600 mb-0.5 select-none;
  }

  .member-number-inp {
    @apply block w-full shadow-md rounded-md border-0 p-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-slate-400 focus:ring-inset focus:outline-none focus:ring-egg-shell-500;
  }

  .police-number-inp {
    @apply block w-full shadow-md rounded-md border-0 p-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-slate-400 focus:ring-inset focus:outline-none focus:ring-egg-shell-500;
  }
}
</style>
