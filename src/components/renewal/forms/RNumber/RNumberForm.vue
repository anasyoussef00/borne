<template>
  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
    <div class="col-span-full xl:col-span-1">
      <label for="registration-number-inp" class="rn-label required"
        >Immatriculation - رقم اللوحة</label
      >
      <input
        id="registration-number-inp"
        class="rn-inp number-inp"
        type="number"
        placeholder="e.g. 54545"
        autofocus
      />
    </div>

    <div class="col-span-full md:col-span-1">
      <label for="registration-code-sel" class="rn-label required"
        >Code - رمز</label
      >
      <select id="registration-code-sel" class="rn-sel">
        <option value="" selected disabled>
          Veuillez sélectionner un code
        </option>
        <option value="A">A - أ</option>
        <option value="B">B - ب</option>
        <option value="D">D - د</option>
        <option value="T">T - ط</option>
        <option value="H">H - هـ</option>
        <option value="E">E - و</option>
      </select>
    </div>

    <div class="col-span-full md:col-span-1">
      <label
        for="registration-last-2-digits-inp required"
        class="rn-label required"
        >2 derniers chiffres - آخر رقمين</label
      >
      <input
        id="registration-last-2-digits-inp"
        class="rn-inp number-inp"
        type="number"
        placeholder="e.g. 54"
      />
    </div>
  </div>
</template>

<style scoped>
.rn-label {
  @apply block font-semibold text-primary-text text-xl mb-1.5;
}

.rn-inp {
  @apply w-full p-3 text-primary-text text-xl font-semibold bg-slate-50 focus:bg-white rounded-lg shadow-lg border-2 border-secondary focus:outline-none focus:ring placeholder-slate-400 placeholder:font-normal;
}

.rn-sel {
  @apply w-full p-3 text-primary-text text-xl font-semibold bg-slate-50 focus:bg-white rounded-lg shadow-lg border-2 border-secondary focus:outline-none focus:ring;
}
</style>
