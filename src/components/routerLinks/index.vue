<script setup>

import {
  BellFilled,
  Cloudy,
  DataAnalysis,
  HomeFilled,
  Notebook,
  Setting,
  UserFilled,
  Wallet
} from "@element-plus/icons-vue";

const userType = JSON.parse(localStorage.getItem("authData"))?.user?.user_type;
const user = JSON.parse(localStorage.getItem("authData"))?.user;
// const branch = JSON.parse(localStorage.getItem("authData"))?.user?.branch;
const branch = user?.branch;
const branchUrl = 'branch-view'

</script>

<template>
  <el-menu-item
      index="landing">
    <el-icon>
      <home-filled/>
    </el-icon>
    <template #title>Home</template>
  </el-menu-item>

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

  <el-menu-item
      index="notifications">
    <el-icon>
      <bell-filled/>
    </el-icon>
    <template #title>Notifications</template>
  </el-menu-item>

  <el-menu-item
      index="parking-slots">
    <el-icon>
      <cloudy/>
    </el-icon>
    <template #title>Parking Slots</template>
  </el-menu-item>

  <el-menu-item
      index="payments">
    <el-icon>
      <wallet/>
    </el-icon>
    <template #title>Payments</template>
  </el-menu-item>

</template>

<style scoped>

</style>