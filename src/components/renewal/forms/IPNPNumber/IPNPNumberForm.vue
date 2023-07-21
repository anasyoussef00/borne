<template>
  <div class="grid grid-cols-2 gap-4">
    <div>
      <label for="member-number-inp" class="ipnpn-label required"
        >Numéro de Sociétaire - رقم الشريك</label
      >
      <input
        id="member-number-inp"
        class="ipnpn-inp number-inp"
        type="number"
        placeholder="e.g. 245965"
        autofocus
      />
    </div>

    <div>
      <label for="police-number-inp required" class="ipnpn-label required"
        >Numéro de police - رقم بوليصة التأمين</label
      >
      <input
        id="police-number-inp"
        class="ipnpn-inp number-inp"
        type="number"
        placeholder="e.g. 0237641577"
      />
    </div>
  </div>
</template>

<style scoped>
.ipnpn-label {
  @apply block font-semibold text-primary-text text-xl mb-1.5;
}

.ipnpn-inp {
  @apply w-full p-3 text-primary-text text-xl font-semibold bg-slate-50 focus:bg-white rounded-lg shadow-lg border-2 border-secondary focus:outline-none focus:ring placeholder-slate-400 placeholder:font-normal;
}
</style>
