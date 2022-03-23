<template>
  <el-config-provider :button="config" :locale="zhCn">
    <router-view></router-view>
  </el-config-provider>
</template>

<script setup>
import { reactive } from "@vue/reactivity";
import zhCn from "element-plus/lib/locale/lang/zh-cn";

const config = reactive({
  autoInsertSpace: true,
});
</script>