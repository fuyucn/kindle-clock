import { ref, onMounted, onUnmounted } from "@vue/composition-api";
import dayjs from "dayjs";

export default function useTimer() {
  let timer: NodeJS.Timer | null = null;
  const time = ref<number>(Date.now());
  const loading = ref<Boolean>(true);
  const hour = ref("");
  const minute = ref("");
  const second = ref("");

  const date = ref();
  const day = ref();
  const week = ref();
  const format24 = ref(true);

  onMounted(() => {
    time.value = Date.now();
    timer = setInterval(() => {
      hour.value = format24 ? dayjs().format("HH") : dayjs().format("kk");
      minute.value = dayjs().format("mm");
      second.value = dayjs().format("ss");
      date.value = dayjs().format("MMM D, YYYY");
      if (loading) loading.value = false;
    }, 1000);
  });

  onUnmounted(() => {
    timer && clearInterval(timer);
  });

  return { time, hour, minute, second, date, week, day, loading };
}
