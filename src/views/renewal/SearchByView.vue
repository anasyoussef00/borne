<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import RoutingIconButtonNav from '@/components/btns/RoutingIconButtonNav.vue';
import Swal from 'sweetalert2';
import { useRouter, isNavigationFailure } from 'vue-router';
import { inject, onUnmounted } from 'vue';
import { useFormStepsStore } from '@/stores/renewal/formSteps';

const IS_DEV = inject<boolean>('IS_DEV');

const router = useRouter();

const formStepsStore = useFormStepsStore();

onUnmounted(() => (formStepsStore.currentStepIndex = 0));

const confirmExit = async () => {
  try {
    const BG_DANGER = '#FE0000';
    const BG_PRIMARY = '#7D7463';

    const { isConfirmed } = await Swal.fire({
      title: `<h1 class="font-bold text-primary-text">Confirmation (تأكيد)</h1>`,
      html: `<h1 class="font-semibold">Voulez-vous vraiment quitter la page d'accueil?</h1>
             <h2 class="font-semibold">هل أنت متأكد أنك تريد المغادرة إلى الصفحة الرئيسية؟</h2>`,
      icon: 'question',
      showConfirmButton: true,
      focusConfirm: false,
      confirmButtonText: 'Oui (نعم)',
      confirmButtonColor: BG_PRIMARY,
      showCancelButton: true,
      focusCancel: false,
      cancelButtonText: 'Non (لا)',
      cancelButtonColor: BG_DANGER,
      showCloseButton: true,
    });
    if (!isConfirmed) return;

    await router.push({ name: 'home' });
  } catch (err) {
    if (isNavigationFailure(err)) {
      const NAVIGATION_ERR =
        "Une erreur interne s'est produite, veuillez contacter votre agence la plus proche.";
      const NAVIGATION_ERR_AR =
        'حدث خطأ داخلي ، يرجى الاتصال بوكالتك المجاورة.';

      IS_DEV ? console.error(err) : undefined;
      return Swal.fire({
        title: err.name,
        html: `<p class="font-semibold">${
          IS_DEV ? err.message : NAVIGATION_ERR
        }</p> ${
          !IS_DEV ? `<p class="font-semibold">${NAVIGATION_ERR_AR}</p>` : ''
        }`,
        toast: true,
        icon: 'error',
        timer: 5000,
        showCloseButton: true,
        timerProgressBar: true,
        position: 'bottom',
        showConfirmButton: false,
      });
    } else {
      const ERR_MSG =
        "Une erreur s'est produite lors de la tentative de terminer votre opération, veuillez réessayer plus tard.";
      const ERR_MSG_AR =
        'حدث خطأ أثناء محاولة إكمال العملية الخاصة بك ، يرجى المحاولة مرة أخرى في وقت لاحق.';

      IS_DEV ? console.error(err) : undefined;
      return Swal.fire({
        title: 'Oops...!',
        html: `<p class="font-semibold">${
          IS_DEV ? (err as any) : ERR_MSG
        }</p> ${!IS_DEV ? `<p class="font-semibold">${ERR_MSG_AR}</p>` : ''}`,
        toast: true,
        icon: 'error',
        timer: 5000,
        showCloseButton: true,
        timerProgressBar: true,
        position: 'bottom',
        showConfirmButton: false,
      });
    }
  }
};
</script>

<template>
  <div
    class="flex justify-center items-center min-h-screen bg-primary-background"
  >
    <section class="bg-secondary p-8 rounded-xl shadow-2xl w-10/12">
      <h1
        class="flex justify-center items-center gap-x-4 text-primary-text text-4xl font-bold mb-8 uppercase"
      >
        <FontAwesomeIcon icon="fa-solid fa-search" class="text-3xl" />
        recherché par
      </h1>

      <div class="grid grid-cols-2 gap-4">
        <RoutingIconButtonNav
          :to="{ name: 'renewal-rn' }"
          label="Immatricule"
          ar-label="رقم اللوحة"
        />

        <RoutingIconButtonNav
          :to="{ name: 'renewal-cn' }"
          label="Numéro d'Attestation"
          ar-label="رقم شهادة التأمين"
        />

        <RoutingIconButtonNav
          :to="{ name: 'renewal-ipnpn' }"
          label="Numéro de Police et Numéro de Sociétaire"
          ar-label="رقم بوليصة التأمين و رقم الشريك"
        />

        <RoutingIconButtonNav
          icon="person-walking-arrow-loop-left"
          label="Accueil"
          ar-label="الشاشة الرئيسية"
          bg-color="bg-danger"
          flex-col
          @click="confirmExit"
        />
      </div>
    </section>
  </div>
</template>
