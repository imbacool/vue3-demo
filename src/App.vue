<template>
  <el-config-provider :button="config">
    <router-view></router-view>
  </el-config-provider>
</template>

<script setup>
import { reactive } from "@vue/reactivity";

const config = reactive({
  autoInsertSpace: true,
});
</script>