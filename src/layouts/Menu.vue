<template>
  <a-menu
    :inline-indent="30"
    class="aside-container menu-site"
    mode="inline"
    :selected-keys="[activeMenuItem]"
  >
    <template v-for="m in menus">
      <template v-if="m.children">
        <a-menu-item-group :key="m.order" :title="isZhCN ? m.title : m.enTitle">
          <template v-for="n in m.children">
            <a-menu-item v-if="n.path" :key="n.path">
              <a v-if="n.target" :target="n.target" :href="n.path">
                <span>{{ isZhCN ? n.title : n.enTitle || n.title }}</span>
                <span v-if="isZhCN" class="chinese">{{ n.subtitle }}</span>
              </a>
              <router-link v-else :to="getLocalizedPathname(n.path, isZhCN)">
                <span>{{ isZhCN ? n.title : n.enTitle || n.title }}</span>
                <span v-if="isZhCN" class="chinese">{{ n.subtitle }}</span>
              </router-link>
            </a-menu-item>
          </template>
        </a-menu-item-group>
      </template>
      <template v-else>
        <a-menu-item :key="m.path">
          <a v-if="m.target" :target="m.target" :href="m.path">
            {{
              isZhCN ? `${m.title} ${m.subtitle || ""}` : m.enTitle || m.title
            }}
          </a>
          <router-link v-else :to="getLocalizedPathname(m.path, isZhCN)">
            {{
              isZhCN ? `${m.title} ${m.subtitle || ""}` : m.enTitle || m.title
            }}
          </router-link>
        </a-menu-item>
      </template>
    </template>
  </a-menu>
</template>
<script lang="ts" setup>
import { watch } from "vue";
import { getLocalizedPathname } from "../utils/util";
// export default defineComponent({
// name: "Menu",
// props: ["menus", "isZhCN", "activeMenuItem"],
// setup(props) {

const props = defineProps({
  menus: {
    type: Array<any>,
    default: () => [],
  },
  activeMenuItem: {
    type: String,
    require: true,
  },
  isZhCN: {
    type: Boolean,
    require: true,
  },
});

watch(
  [() => props.activeMenuItem, () => props.isZhCN, () => props.menus],
  () => {
    const menus = props.menus.reduce(
      (pre, current) => [...pre, current, ...(current.children || [])],
      [
        {
          path: "/components/overview",
          title: "组件总览",
          enTitle: "Components Overview",
        },
      ]
    );
    const item = menus.find((m) => m.path === props.activeMenuItem);
    let title = "文档";
    if (item && item.title) {
      title = props.isZhCN
        ? `${item.subtitle || ""} ${item.title} - 文档`
        : `${item.enTitle || item.title} - 文档`;
    }
    document.title = title.trim();
  },
  { immediate: true, flush: "post" }
);

//   },
// });
</script>
<style lang="less" scoped></style>
