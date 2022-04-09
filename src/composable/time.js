import dayjs from 'dayjs'
const timeMixin = {
  data: function () {
    return {
      format24: true,
      year: dayjs().format("YYYY"),
      month: dayjs().format("MMM"),
      day: dayjs().format("D"),
      loading: true,
      hour: null,
      minute: null,
      second: null
    }
  },
  mounted() {
    setInterval(() => {
      this.setTime();
      if (this.loading) this.loading = false;
    }, 1000)
  },
  computed: {
  },
  methods: {
    setTime: function () {
      this.hour = this.format24
        ? dayjs().format("HH") : dayjs().format("kk");
      this.minute = dayjs().format("mm")
      this.second = dayjs().format("ss")

      this.year = dayjs().format("YYYY")
      this.month = dayjs().format("MMM")
      this.day = dayjs().format("D")
    }
  },
  watch: {}
}




export default timeMixin