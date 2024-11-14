<script setup>
import BaseDataTable from "@/components/base/BaseDataTable.vue";
import {ref} from "vue";
import router from "@/router/index.js";
import {formatDate} from "@/utility/functions.js";
import store from "@/store/index.js";

const columns = ref([
  {prop: "payment_amount", label: "Amount Paid", minWidth: "200"},
  {prop: "payment_complete", label: "Payment Complete", minWidth: "200", key: "slot_availability"},
  {prop: "payment_date", label: "Payment Date", minWidth: "200", key: "parking_slot_floor_number"},
]);

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

  <h2 class="text-xl font-bold my-2">Payments</h2>

<!--  <router-link :to="{name:'make-payment'}">-->
<!--    <el-button type="primary" class="mb-2">-->
<!--      <span class="flex items-center gap-2">-->
<!--         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"-->
<!--              stroke="currentColor" class="size-4">-->
<!--          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />-->
<!--        </svg>-->
<!--        <span>-->
<!--          Payment-->
<!--        </span>-->
<!--      </span>-->

<!--    </el-button>-->
<!--  </router-link>-->

  <BaseDataTable
      :columns="columns"
      fetch-url="payments"
      title="payments"
  >
    <template v-slot:bodyCell="slotProps">
      <template v-if="slotProps.column.prop === 'payment_amount'">
        {{ slotProps.text }}
      </template>

      <template v-if="slotProps.column.prop === 'payment_complete'">
        {{ slotProps.text }}
      </template>

      <template v-if="slotProps.column.prop === 'payment_date'">
        {{ slotProps.text }}
      </template>

    </template>
  </BaseDataTable>
</template>

<style scoped>
/* Add any additional styles if needed */
</style>
