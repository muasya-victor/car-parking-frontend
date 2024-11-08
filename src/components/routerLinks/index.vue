<script setup>

import {DataAnalysis, HomeFilled, Notebook, Setting, UserFilled} from "@element-plus/icons-vue";

const userType = JSON.parse(localStorage.getItem("authData"))?.user?.user_type;
const user = JSON.parse(localStorage.getItem("authData"))?.user;
// const branch = JSON.parse(localStorage.getItem("authData"))?.user?.branch;
const branch = user?.branch;
const branchUrl = 'branch-view'

</script>

<template>
  <el-menu-item
      index="users">
    <el-icon>
      <user-filled/>
    </el-icon>
    <template #title>Users</template>
  </el-menu-item>

  <el-menu-item
      index="bookings">
    <el-icon>
      <notebook/>
    </el-icon>
    <template #title>Bookings</template>
  </el-menu-item>

</template>

<style scoped>

</style>