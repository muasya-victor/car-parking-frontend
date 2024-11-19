<script setup>
import BaseDataTable from "@/components/base/BaseDataTable.vue";
import {ref} from "vue";
import router from "@/router/index.js";
import {formatDate} from "@/utility/functions.js";
import store from "@/store/index.js";

const columns = ref([
  {prop: "user_first_name", label: "First Name", minWidth: "200"},
  {prop: "user_last_name", label: "Last Name", minWidth: "200"},
  {prop: "email", label: "Email", minWidth: "200"},
  {prop: "user_is_active", label: "Is Active", minWidth: "200"},
  {prop: "user_id", label: "Actions", minWidth: "200", key: "actions"},
]);

const authData = JSON.parse(localStorage.getItem("authData"));


const goTo = (name, id) => {
  router.push({name: name, params: {id: id}});
};

const deleteUser = (id) => {
  store.dispatch('deleteData', {id: id, url:'users'});
};

const formatDateColumn = (dateString) => {
  return formatDate(dateString); // Assuming formatDate handles date formatting
};

const downloadReport = () => {
  try {
    store.dispatch('downloadFirmData', {
      url: 'report',
    })
        .then((response) => {

        });
  } catch (error) {
    console.error("Error downloading report:", error);
  }
};
</script>

<template>
  <router-view/>

  <h2 class="text-xl font-bold my-2">Users</h2>

  <el-button v-if="authData?.user?.user_role !== 'driver'" @click="downloadReport" class="mb-2 mr-2">Download User Report</el-button>
  <router-link v-if="authData?.user?.user_role !== 'driver'" :to="{name:'user-create'}">
    <el-button type="primary" class="mb-2">
      <span class="flex items-center gap-2">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="size-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
        <span>
          User
        </span>
      </span>

    </el-button>
  </router-link>

  <BaseDataTable
      :columns="columns"
      fetch-url="users"
      title="User"
  >
    <template v-slot:bodyCell="slotProps">
      <template v-if="slotProps.column.prop === 'user_first_name'">
        {{ slotProps.text }}
      </template>

      <template v-if="slotProps.column.prop === 'user_is_active'">

        <el-tag size="large" type="danger" v-if="slotProps.text === false">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </el-tag>

        <el-tag type="success" size="large" v-else>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </el-tag>
      </template>

      <template v-if="slotProps.column.prop === 'user_last_name'">
        {{ slotProps.text }}
      </template>

      <template v-if="slotProps.column.prop === 'email'">
        {{ slotProps.text }}
      </template>

      <template v-if="slotProps.column.prop === 'phone'">
        {{ slotProps.text }}
      </template>

      <template v-if="slotProps.column.prop === 'location'">
        {{ slotProps.text }}
      </template>

      <template v-if="slotProps.column.key === 'actions'">
        <ElButton type="primary" link @click="goTo('user-edit', slotProps.text)" size="default" plain>
          <span class="w-2"></span>
          <el-icon>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
            </svg>
          </el-icon>
        </ElButton>

        <ElButton v-if="authData?.user?.user_role !== 'driver'" type="danger" link @click="deleteUser(slotProps.text)" size="default" plain>
          <span class="w-2"></span>
          <el-icon>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>
          </el-icon>
        </ElButton>
      </template>
    </template>
  </BaseDataTable>
</template>

<style scoped>
/* Add any additional styles if needed */
</style>
