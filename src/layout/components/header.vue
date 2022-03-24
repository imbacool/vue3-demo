<template>
  <div class="header">
    <el-breadcrumb :separator-icon="'arrow-right'" class="breadcrumb">
      <el-breadcrumb-item
        v-for="item in breadcrumb_list"
        :key="item.path"
        :to="{ path: item.path }"
      >
        {{ item.meta.name }}
      </el-breadcrumb-item>
    </el-breadcrumb>
    <el-dropdown>
      <span class="dropdown">
        <el-icon><user /></el-icon>
        {{ user_detail.name }}
        <el-icon>
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="logout" icon="switch-button"
            >退出登录</el-dropdown-item
          >
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup>
import { watch, ref, computed } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

const route = useRoute();
const router = useRouter();
const store = useStore();
let user_detail = computed(() => store.state.user_detail);
let breadcrumb_list = ref([]);

function get_breadcrumb() {
  // console.log(route.matched);
  breadcrumb_list.value = route.matched.filter((item) => item.meta.name);
  if (breadcrumb_list.value.length == 1) {
    breadcrumb_list.value.unshift({
      path: "/",
      meta: { name: "导航" },
    });
  }
}
function logout() {
  store.commit("logout");
  router.push("/login");
}

get_breadcrumb();
watch(route, get_breadcrumb);
</script>

<style lang="scss" scoped>
.header {
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>