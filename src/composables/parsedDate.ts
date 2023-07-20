import Utils from '@/utils';
import { onMounted, onUnmounted, ref, Ref } from 'vue';

interface IParsedDateRes {
  parsedDate: Ref<string>;
  parsedDateAr: Ref<string>;
}

const useParsedDate = (intervalMs: number = 1000): IParsedDateRes => {
  const parsedDate = ref<string>(Utils.parseDate(new Date()));
  const parsedDateAr = ref<string>(Utils.parseDate(new Date(), 'ar'));

  const parsedDateInterval = ref<NodeJS.Timer>();

  const updateParsedTime = () => {
    parsedDate.value = Utils.parseDate(new Date());
    parsedDateAr.value = Utils.parseDate(new Date(), 'ar');
  };

  onMounted(() => {
    parsedDateInterval.value = setInterval(updateParsedTime, intervalMs);
  });
  onUnmounted(() => clearInterval(parsedDateInterval.value));

  return { parsedDate, parsedDateAr };
};

export default useParsedDate;
