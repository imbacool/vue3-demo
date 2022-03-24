<template>
  <div class="login">
    <img :src="logo" />
    <el-form
      :model="form"
      :rules="rules"
      ref="el_form"
      hide-required-asterisk
      class="form"
    >
      <el-form-item label="账号" prop="username">
        <el-input v-model="form.username" placeholder="请输入账号" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="form.password"
          show-password
          placeholder="请输入密码"
          @keyup.enter="login"
        />
      </el-form-item>
      <el-form-item>
        <el-button
          class="block"
          type="primary"
          @click="login"
          :loading="btn_loading"
          icon="key"
          >登录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import logo from "@img/logo.png";
import user_api from "@api/user";
import message from "@utils/message";
import login_validate from "./login_validate";

const router = useRouter();
const store = useStore();
let btn_loading = ref(false);
let form = ref({
  username: "",
  password: "",
});
let rules = ref(login_validate);
let el_form = ref(null);

async function login() {
  await el_form.value.validate(async (valid, fields) => {
    if (valid) {
      let { username, password } = form.value;

      btn_loading.value = true;
      let { code, msg, data } = await user_api.login({ username, password });
      if (code == 200) {
        message.success(msg);
        store.commit("login", data);
        router.push("/user");
      } else {
        message.error(msg);
      }
      btn_loading.value = false;
    } else {
    }
  });
}
</script>

<style lang="scss" scoped>
.login {
  width: 100vw;
  height: 100vh;
  background-color: $bg-color;
  text-align: center;
  box-sizing: border-box;
  padding-top: 30px;
  .form {
    width: 20%;
    margin: 0 auto;
    padding-top: 60px;
  }
}
</style>