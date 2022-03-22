<template>
  <div class="layout">
    <el-container>
      <el-aside width="200px" class="aside">
        <Menu></Menu>
      </el-aside>
      <el-container class="container">
        <el-header>
          <Header></Header>
        </el-header>
        <el-main class="main">
          <el-scrollbar>
            <router-view v-slot="{ Component }">
              <transition name="fade">
                <component :is="Component" />
              </transition>
            </router-view>
          </el-scrollbar>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import Header from "./components/header.vue";
import Menu from "./components/menu.vue";
</script>

<style lang="scss" scoped>
.layout {
  width: 100vw;
  height: 100vh;
  .aside {
    ::v-deep .el-menu {
      height: 100vh;
    }
  }
  .container {
    height: 100vh;
    // .main {
    //   background-color: #e4e7ed;
    // }
  }
}
</style>