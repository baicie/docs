<template>
  <div>home</div>
  <!-- <a-button @click="handleTo" type="primary">中文2</a-button> -->
  <a-button type="primary" @click="handleTo">Primary Button</a-button>
</template>
<script lang="ts" setup>
import { useRouter } from "vue-router";

const router = useRouter();
const handleTo = () => {
  console.log("handle");

  router.push({
    path: `/docs/${encodeURIComponent("2. 中文")}`,
    // path: "/docs/index2",
    // path: "/docs/2. 中文",
    // path: "/docs/2.%20%E4%B8%AD%E6%96%87",
  });
};
</script>
<style lang="less" scoped></style>
