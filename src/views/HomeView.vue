<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import AdvertisementCarousel from '@/components/AdvertisementCarousel.vue';
import RoutingButton from '@/components/btns/RoutingButton.vue';
import BasicCopyrightFooter from '@/components/footers/BasicCopyrightFooter.vue';
import { useModalStore } from '@/stores/modal';
import RenewalModal from '@/components/renewal/RenewalModal.vue';
import FAdvertisementCarousel from '@/components/carousels/FAdvertisementCarousel.vue';

const imgPaths = ref<string[]>([]);
const logoPath = ref('');

const modalStore = useModalStore();

onMounted(() => {
  const assetLogoPath = import.meta.glob(
    '@/assets/imgs/logo/mamda-mcma-logo.png'
  );
  for (const asstLogoPath in assetLogoPath) {
    assetLogoPath[asstLogoPath]()
      .then(() => (logoPath.value = asstLogoPath))
      .catch((err) => (import.meta.env.DEV ? console.error(err) : null));
  }

  const assetImgPaths = import.meta.glob(
    '@/assets/imgs/slides/new/*.{png,jpg,jpeg,webp}'
  );
  for (const assetImgPath in assetImgPaths) {
    assetImgPaths[assetImgPath]()
      .then(() => imgPaths.value.push(assetImgPath))
      .catch((err) => (import.meta.env.DEV ? console.error(err) : null));
  }
});

onUnmounted(() => modalStore.close());
</script>

<template>
  <div class="flex flex-col relative min-h-screen gap-y-4 bg-primary">
    <div class="absolute z-0 top-0 right-0 w-1/3 opacity-50">
      <img
        src="@/assets/imgs/bg/filler/leaves-filler.png"
        alt="SPLASH FILLER"
      />
    </div>
    <div class="absolute z-0 bottom-0 inset-x-0 opacity-50">
      <img
        src="@/assets/imgs/bg/filler/grass-filler.png"
        alt="SPLASH FILLER"
        class="w-screen"
      />
    </div>

    <header class="flex justify-center items-center mx-auto relative">
      <img class="w-1/4 aspect-auto" :src="logoPath" alt="LOGO" />
    </header>

    <section class="grid grid-cols-9 gap-x-6 relative">
      <div class="flex flex-col justify-around items-center col-span-2">
        <RoutingButton
          :to="{ name: 'test-view' }"
          label="Déclaration Sinistre"
          ar-label="الإبلاغ عن حادث"
        />
        <RoutingButton
          label="Renouvèlement"
          ar-label="التجديد"
          @click="modalStore.toggle"
        />
        <RenewalModal
          title="Cliquer sur le mode de recherche - انقر على طريقة البحث"
        />
      </div>

      <div class="col-span-5 mx-auto">
        <AdvertisementCarousel :slide-imgs-path="imgPaths" />
      </div>

      <div
        class="flex flex-col justify-around items-center col-span-2 relative"
      >
        <RoutingButton
          :to="{ name: 'test-view' }"
          label="Paiement"
          ar-label="الدفع"
          :rounded-start="true"
        />
        <RoutingButton
          :to="{ name: 'test-view' }"
          label="Souscription"
          ar-label="الاشتراك"
          :rounded-start="true"
        />
      </div>
    </section>
    <footer class="m-auto relative">
      <BasicCopyrightFooter content="&#169; 2023 MAMDA-MCMA" />
    </footer>
  </div>

  <!-- <div class="relative">
    <header
      class="absolute left-0 right-0 mx-auto w-1/4 bg-white rounded-b-lg py-2 z-10 shadow-2xl opacity-70"
    >
      <img class="w-1/2 m-auto" :src="logoPath" alt="LOGO" />
    </header>

    <section
      class="flex justify-between items-center w-screen min-h-screen absolute z-10"
    >
      <div class="flex flex-col justify-between items-center w-1/4 h-[50vh]">
        <RoutingButton
          :to="{ name: 'test-view' }"
          label="Déclaration Sinistre"
          ar-label="الإبلاغ عن حادث"
        />

        <RoutingButton
          label="Renouvèlement"
          ar-label="التجديد"
          @click="modalStore.toggle"
        />
        <RenewalModal
          title="Cliquer sur le mode de recherche - انقر على طريقة البحث"
        />
      </div>

      <div class="flex flex-col justify-between items-center w-1/4 h-[50vh]">
        <RoutingButton
          :to="{ name: 'test-view' }"
          label="Paiement"
          ar-label="الدفع"
          :rounded-start="true"
        />
        <RoutingButton
          :to="{ name: 'test-view' }"
          label="Souscription"
          ar-label="الاشتراك"
          :rounded-start="true"
        />
      </div>
    </section>

    <footer
      class="inline-flex justify-center items-center absolute left-0 right-0 bottom-0 mx-auto w-1/4 h-[8%] bg-white rounded-t-lg py-2 z-10 shadow-2xl opacity-70"
    >
      <BasicCopyrightFooter content="&#169; 2023 MAMDA-MCMA" />
    </footer>

    <section>
      <FAdvertisementCarousel :img-paths="imgPaths" />
    </section>
  </div> -->
</template>
