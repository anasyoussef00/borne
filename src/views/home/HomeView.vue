<script setup lang="ts">
import NavBar from '@/components/bars/NavBar.vue';
import AdvertisementCarousel from '@/components/AdvertisementCarousel.vue';
import { ref, onMounted, onUnmounted } from 'vue';
import BasicCopyrightFooter from '@/components/footers/BasicCopyrightFooter.vue';
import RoutingIconButton from '@/components/btns/RoutingIconButton.vue';
import RenewalModal from '@/components/renewal/RenewalModal.vue';
import { useModalStore } from '@/stores/modal';

const modalStore = useModalStore();
const slideImgsPath = ref<string[]>([]);

onMounted(async () => {
  const assetSlideImgsPath = import.meta.glob(
    '@/assets/imgs/slides/*.{png,jpg,jpeg,webp}'
  );

  try {
    for (const assetSlideImgPath in assetSlideImgsPath) {
      await assetSlideImgsPath[assetSlideImgPath]();
      slideImgsPath.value.push(assetSlideImgPath);
    }
  } catch (e) {
    console.error(e);
  }
});

onUnmounted(() => modalStore.close());
</script>

<template>
  <div
    class="flex flex-col gap-y-8 min-h-screen px-4 pb-4 bg-primary-background"
  >
    <header class="m-auto">
      <NavBar
        logo-path="/src/assets/imgs/logo/mamda-mcma-logo.png"
        title="Bienvenue à Borne | MAMDA-MCMA"
      />
    </header>

    <section class="grid grid-cols-10 gap-x-3">
      <div class="flex flex-col justify-evenly col-span-2">
        <RoutingIconButton
          icon="recycle"
          label="Renouvèlement"
          ar-label="التجديد"
          @click.passive="modalStore.toggle"
        />
        <RenewalModal
          title="Cliquer sur le mode de recherche - انقر على طريقة البحث"
        />

        <RoutingIconButton
          icon="file-signature"
          :to="{ name: 'renewal-search-by' }"
          label="Déclaration Sinistre"
          ar-label="الإبلاغ عن حادث"
        />
      </div>

      <div class="col-span-6">
        <AdvertisementCarousel :slide-imgs-path="slideImgsPath" />
      </div>

      <div class="flex flex-col justify-evenly col-span-2">
        <RoutingIconButton
          icon="credit-card"
          :to="{ name: 'renewal-search-by' }"
          label="Paiement"
          ar-label="الدفع"
        />

        <RoutingIconButton
          icon="user"
          :to="{ name: 'renewal-search-by' }"
          label="Souscription"
          ar-label="الاشتراك"
        />
      </div>
    </section>

    <footer class="mx-auto">
      <BasicCopyrightFooter content="&#169; 2023 MAMDA-MCMA" />
    </footer>
  </div>
</template>
