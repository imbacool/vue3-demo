<template>
  <div class="user-add">
    <el-form :model="form" :rules="rules" ref="el_form">
      <el-row justify="center" :gutter="100">
        <el-col :span="8">
          <el-form-item label="姓名" prop="name">
            <el-input v-model="form.name" placeholder="请输入姓名" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="性别">
            <el-select v-model="form.gender" placeholder="请选择性别">
              <el-option
                v-for="item in gender_list"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8" :offset="14">
          <el-form-item>
            <el-button @click="back" :loading="btn_loading" icon="back"
              >返回
            </el-button>
            <el-button
              type="primary"
              @click="submit"
              :loading="btn_loading"
              icon="check"
              >提交
            </el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import detail_validate from "./detail_validate";

const props = defineProps({
  type: {
    type: String,
    required: true,
  },
});
const router = useRouter();
let btn_loading = ref(false);
let form = ref({
  name: "",
  gender: "",
});
let rules = ref(detail_validate);
let el_form = ref(null);
let gender_list = ref([
  { id: "0", name: "女" },
  { id: "1", name: "男" },
]);

function submit() {
  console.log(form.value);
}
function back() {
  router.back();
}
</script>

<style lang="scss" scoped>
.user-add {
  padding: 50px;
}
</style>