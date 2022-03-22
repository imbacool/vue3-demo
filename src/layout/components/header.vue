<template>
  <div>
    <el-breadcrumb :separator-icon="'arrow-right'">
      <el-breadcrumb-item :to="{ path: '/home' }">homepage</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/login' }"
        >promotion management</el-breadcrumb-item
      >
      <el-breadcrumb-item>promotion list</el-breadcrumb-item>
      <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup>
import { watch } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();

const get_breadcrumb = () => {
  console.log(route.matched);
};

get_breadcrumb();
watch(route, get_breadcrumb);
</script>

<style lang="scss" scoped>
</style>