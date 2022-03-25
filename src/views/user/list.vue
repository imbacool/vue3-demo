<template>
  <div class="user-list">
    <el-button type="primary" icon="plus" @click="add">新增</el-button>
    <el-button
      type="primary"
      icon="edit"
      @click="handleEdit()"
      :disabled="multipleSelection.length != 1"
      >编辑</el-button
    >
    <el-popconfirm title="确定要删除？" @confirm="handleDelete()">
      <template #reference>
        <el-button
          type="danger"
          icon="delete"
          :disabled="!multipleSelection.length"
          >删除</el-button
        >
      </template>
    </el-popconfirm>
    <el-button icon="refresh" circle @click="get_user_list" />
    <el-table
      v-loading="table_loading"
      :data="tableData"
      height="calc(100vh - 180px)"
      stripe
      border
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" />
      <el-table-column label="姓名" prop="name"> </el-table-column>
      <el-table-column label="性别" prop="gender">
        <template #default="scope">
          {{ scope.row.gender.name }}
        </template>
      </el-table-column>
      <el-table-column label="出生日期" prop="date"></el-table-column>
      <el-table-column
        label="地址"
        prop="address"
        show-overflow-tooltip
      ></el-table-column>
      <el-table-column label="用户状态" prop="status">
        <template #default="scope">
          <el-switch
            v-model="scope.row.status"
            inline-prompt
            :width="60"
            active-text="启用"
            active-color="#13ce66"
            inactive-text="停用"
            inactive-color="#ff4949"
          />
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <el-space wrap>
            <el-link
              type="primary"
              icon="edit"
              @click="handleEdit(scope.$index, scope.row)"
              >编辑</el-link
            >
            <el-popconfirm
              title="确定要删除？"
              @confirm="handleDelete(scope.$index, scope.row)"
            >
              <template #reference>
                <el-link type="danger" icon="delete">删除</el-link>
              </template>
            </el-popconfirm>
          </el-space>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      v-model:currentPage="page.current"
      v-model:page-size="page.size"
      :total="page.total"
      :page-sizes="[10, 20, 30, 40]"
      background
      layout="total, sizes, prev, pager, next, jumper"
    />
  </div>
</template>

<script setup>
import { reactive, ref } from "@vue/reactivity";
import { onMounted, watch } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import user_api from "@api/user";

const router = useRouter();
let tableData = ref([]);
let multipleSelection = ref([]);
let table_loading = ref(false);
let page = reactive({
  current: 1,
  size: 10,
  total: 12,
});
watch(page, get_user_list);
onMounted(() => {
  get_user_list();
});

async function get_user_list() {
  table_loading.value = true;
  let { code, msg, data } = await user_api.get_user_list();
  if (code == 200) {
    tableData.value = data;
  } else {
    message.error(msg);
  }
  table_loading.value = false;
}
function add() {
  router.push("/user/add");
}
function handleSelectionChange(val) {
  multipleSelection.value = val;
}
function handleEdit(index, row) {
  if (row) {
    router.push(`/user/edit/${row}`);
  } else {
    router.push(`/user/edit/${tableData.value[0]}`);
  }
}
function handleDelete(index, row) {
  if (row) {
    tableData.value.splice(index, 1);
  } else {
    for (const del of multipleSelection.value) {
      tableData.value = tableData.value.filter((item) => item != del);
    }
  }
}
</script>

<style lang="scss" scoped>
</style>