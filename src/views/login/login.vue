<template>
  <div class="login">
    <img :src="logo" />
    <el-form
      :model="form"
      :rules="rules"
      ref="form_ref"
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
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { reactive, ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import logo from "@img/logo.png";
import user_api from "@api/user";
import message from "@utils/message";

const form = reactive({
  username: "",
  password: "",
});
const rules = reactive({
  username: [
    {
      required: true,
      message: "账号不能为空",
      trigger: ["change", "blur"],
    },
  ],
  password: [
    {
      required: true,
      message: "密码不能为空",
      trigger: ["change", "blur"],
    },
    { min: 3, max: 6, message: "密码必须包含3-6个字符", trigger: "blur" },
  ],
});
const form_ref = ref(null);
const router = useRouter();
const store = useStore();
const login = async () => {
  await form_ref.value.validate(async (valid, fields) => {
    if (valid) {
      const { username, password } = form;
      const { code, msg, data } = await user_api.login({
        username,
        password,
      });
      if (code === 200) {
        message.success(msg);
        sessionStorage.setItem("token", data.token);
        store.commit("edit_user_info", data.user_info);
        router.push("/home");
      } else {
        message.error(msg);
      }
    } else {
    }
  });
};
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