<script setup>
import BaseDataTable from "@/components/base/BaseDataTable.vue";
import {ref} from "vue";
import router from "@/router/index.js";
import {formatDate} from "@/utility/functions.js";

const authData = JSON.parse(localStorage.getItem("authData"));

const columns = ref([
  {prop: "user", label: "Driver's Email", minWidth: "200"},
  {prop: "notification_message", label: "Message", minWidth: "200"},
]);

const goTo = (name, id) => {
  router.push({name: name, params: {id: id}});
};

const formatDateColumn = (dateString) => {
  return formatDate(dateString); // Assuming formatDate handles date formatting
};
</script>

<template>
  <router-view/>

  <h2 class="text-xl font-bold my-2">Notifications</h2>

  <BaseDataTable
      :columns="columns"
      fetch-url="notifications"
      title="User"
  >
    <template v-slot:bodyCell="slotProps">
      <template v-if="slotProps.column.prop === 'user'">

        {{ authData?.user?.email }}
      </template>
      <template v-if="slotProps.column.prop === 'notification_message'">

        {{ slotProps.text }}
      </template>

    </template>
  </BaseDataTable>
</template>

<style scoped>
/* Add any additional styles if needed */
</style>
