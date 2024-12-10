<script setup>
import BaseDataTable from "@/components/base/BaseDataTable.vue";
import {ref} from "vue";
import router from "@/router/index.js";
import {formatDate} from "@/utility/functions.js";
import store from "@/store/index.js";

const authData = JSON.parse(localStorage.getItem("authData"));

const columns = ref([
  {prop: "user", label: "Driver's Email", minWidth: "200"},
  {prop: "booking_start_time", label: "Start Time", minWidth: "200"},
  {prop: "booking_end_time", label: "Last End Time", minWidth: "200"},
  {prop: "booking_total_cost", label: "Total Cost", minWidth: "200"},
  {prop: "booking_status", label: "Status", minWidth: "200"},
]);

const goTo = (name, id) => {
  router.push({name: name, params: {id: id}});
};

const formatDateColumn = (dateString) => {
  return formatDate(dateString); // Assuming formatDate handles date formatting
};

const downloadReport = () => {
  try {
    store.dispatch('downloadFirmData', {
      url: 'booking/report',
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

  <h2 class="text-xl font-bold my-2">Bookings</h2>

  <el-button v-if="authData?.user?.user_role !== 'driver'" @click="downloadReport" class="mb-2 mr-2">Download Booking Report</el-button>


  <BaseDataTable
      :columns="columns"
      fetch-url="bookings"
      title="User"
  >
    <template v-slot:bodyCell="slotProps">
      <template v-if="slotProps.column.prop === 'user'">

        {{ authData?.user?.email }}
      </template>
      <template v-if="slotProps.column.prop === 'booking_start_time'">

        {{ formatDate(slotProps.text) }}
      </template>
      <template v-if="slotProps.column.prop === 'booking_end_time'">
        {{ formatDate(slotProps.text) }}

      </template>

      <template v-if="slotProps.column.prop === 'booking_status'">
        {{ slotProps.text }}
      </template>

      <template v-if="slotProps.column.prop === 'booking_total_cost'">
        {{ slotProps.text }}
      </template>

      <template v-if="slotProps.column.prop === 'phone'">
        {{ slotProps.text }}
      </template>

      <template v-if="slotProps.column.prop === 'location'">
        {{ slotProps.text }}
      </template>

      <template v-if="slotProps.column.key === 'actions'">
        <ElButton type="primary" link @click="goTo('customer-edit', slotProps.text)" size="default" plain>
          Edit
          <span class="w-2"></span>
          <el-icon>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
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
