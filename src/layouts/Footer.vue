<template>
  <footer id="footer">
    <div style="width: 400px; margin: 0 auto; padding: 20px 0">
      <a
        target="_blank"
        href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802037996"
        style="
          display: inline-block;
          text-decoration: none;
          height: 20px;
          line-height: 20px;
        "
        ><img src="https://www.beian.gov.cn/img/ghs.png" style="float: left" />
        <p
          style="
            float: left;
            height: 20px;
            line-height: 20px;
            margin: 0px 0px 0px 5px;
            color: #939393;
          "
        >
          京公网安备 11010802037996号 | 京ICP备2023004019号
        </p></a
      >
    </div>
  </footer>
</template>
<script>
import dayjs from "dayjs";
import { computed } from "vue";
export default {
  props: {
    isCN: Boolean,
  },
  setup() {
    const showJeecg = computed(() => {
      return dayjs().isBefore(dayjs("2023-09-10"));
    });
    return {
      dayjs,
      showJeecg,
    };
  },
};
</script>
