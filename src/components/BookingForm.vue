<!-- components/BookingForm.vue -->
<template>
  <div class=" rounded p-6 text-white w-full">
    <h2 class="text-center text-xl font-semibold mb-4 bg-blue-700 p-4 rounded-md">BOOK CAR PARKING SPACE</h2>
    <div class="mb-4 w-full bg-blue-700 p-4 rounded-md">
      <label for="location" class="block mb-1">Parking Slot</label>
      <el-select size="large" placeholder="Select Location"
                 :loading="parkingSlotLoader"
                 @focus="getParkingSlots"
                 v-model="form.parking_slot_id" style="width: 100%" class="w-full">
        <el-option v-for="slot in parkingSlots"
                   :key="slot"
                   :value="slot?.parking_slot_id"
                   :label="slot?.parking_slot_location"
        >
          Floor No
          {{slot.parking_slot_floor_number}} :
          {{slot.parking_slot_location}}
        </el-option>
      </el-select>
    </div>

    <div class="mb-4 bg-blue-700 p-4 rounded-md">
      <el-date-picker
          size="large"
          style="width: 100%" class="w-full"
          v-model="form.entryDate"
          type="datetime"
          format="YYYY-MM-DD HH:mm:ss"
          date-format="YYYY/MM/DD ddd"
          value-format="YYYY-MM-DD HH:mm:ss"
      />
    </div>

<!--    -->
    <el-button size="large"
               @click="setToLocalStorage"
               type="primary"
               style="background-color: rgba(29, 78, 216, var(--tw-bg-opacity)); --tw-bg-opacity: 1;"
               class="w-full">Book Now</el-button>
  </div>
  <el-dialog  v-model="showLogin">
    <LoginForm/>
  </el-dialog>
</template>

<script setup>
import { ref } from 'vue';
import store from "@/store/index.js";
import router from "@/router/index.js";
import LoginForm from "@/views/auth/forms/LoginForm.vue";

const form = ref({
  parking_slot_id: '',
  entryDate: '',
});

const parkingSlots = ref([])
const parkingSlotLoader = ref(false)

const getParkingSlots = ()=>{
  parkingSlotLoader.value = true
  store.dispatch('fetchList', {url:'parking-slots'})
      .then((resp)=>{
        parkingSlots.value = resp?.data
        parkingSlotLoader.value = false
      })
      .catch((err)=>{
        parkingSlotLoader.value = false
      })
}

const setToLocalStorage = () => {
  if (form?.value?.entryDate !== '' && form?.value?.parking_slot_id !== '') {

    const authData = JSON.parse(localStorage.getItem("authData"));

    if (authData) {
      const userAuthData = JSON.parse(localStorage.getItem("authData"))?.user;
      console.log(userAuthData?.user_id, 'user')

      if (userAuthData ) {
        store.dispatch('postData',
            {
              url: 'bookings',
              data: {
                booking_user: userAuthData?.user_id,
                booking_end_time: form.value?.entryDate,
                booking_parking_slot: form.value?.parking_slot_id,
              }
            }
        ).then((resp)=>{
          showLogin.value = false
          localStorage.setItem("parkingSlotData", JSON.stringify(resp?.data));
          form.value.booking_total_cost = resp?.data?.booking_total_cost;

          router.push({name: 'make-payment'});
        })
      }
    } else {
      showLogin.value = true
    }
  } else {
    alert('All fields are required');
  }
};

const showLogin = ref(false)


</script>
