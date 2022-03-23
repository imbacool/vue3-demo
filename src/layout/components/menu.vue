<template>
  <div>
    <el-menu
      :default-active="path"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
      <el-menu-item
        v-for="item in menu_list"
        :key="item.path"
        :index="item.path"
        @click="menu_click(item.path)"
      >
        <el-icon>
          <component :is="item.icon"></component>
        </el-icon>
        <span>{{ item.name }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";

let menu_list = ref([
  { path: "/user", icon: "user-filled", name: "用户管理" },
  { path: "/role", icon: "setting", name: "角色权限" },
  { path: "/order", icon: "list", name: "工单管理" },
]);
let path = ref(sessionStorage.getItem("path") || "/user");

function menu_click(path) {
  sessionStorage.setItem("path", path);
}
</script>

<style lang="scss" scoped>
</style>