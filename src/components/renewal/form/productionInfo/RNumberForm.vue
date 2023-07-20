<template>
  <div class="w-full">
    <label class="label required" for="registration-number-inp"
      >Immatriculation - رقم اللوحة</label
    >
    <div class="grid grid-cols-2 shadow-md rounded-md">
      <input
        id="registration-number-inp"
        type="number"
        class="registration-number-inp"
        placeholder="e.g. 54545"
      />

      <select id="registration-code-sel" class="registration-code-sel">
        <option value="" disabled selected>
          Veuillez sélectionner un code
        </option>
        <option value="A">A - أ</option>
        <option value="B">B - ب</option>
        <option value="D">D - د</option>
        <option value="T">T - ط</option>
        <option value="H">H - هـ</option>
        <option value="E">E - و</option>
      </select>

      <input
        id="registration-last-2-digits-inp"
        type="number"
        class="registration-last-2-digits-inp"
        placeholder="e.g. 54"
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

  .registration-number-inp {
    @apply col-span-full block w-full rounded-t-md border-0 p-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-slate-400 focus:ring-inset focus:outline-none;
  }

  .registration-code-sel {
    @apply block w-full rounded-bl-md border-0 p-2 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-inset focus:outline-none;
  }

  .registration-last-2-digits-inp {
    @apply block w-full rounded-br-md border-0 p-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-slate-400 focus:ring-inset focus:outline-none;
  }
}
</style>
