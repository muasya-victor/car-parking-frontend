<!-- components/BookingForm.vue -->
<template>
  <div class="bg-blue-400 p-6 text-white w-full">
    <h2 class="text-center text-xl font-semibold mb-4">BOOK CAR PARKING SPACE</h2>
    <div class="mb-4 w-full">
      <label for="location" class="block mb-1">Parking Slot</label>
      <el-select size="large" placeholder="Select Location"
                 :loading="parkingSlotLoader"
                 @focus="getParkingSlots"
                 v-model="form.parking_slot_id" style="width: 100%" class="w-full">
        <el-option v-for="slot in parkingSlots"
                   :key="slot.parking_slot_id"
                   :value="slot.parking_slot_id">
          {{slot.parking_slot_floor_number}} :
          {{slot.parking_slot_location}}
        </el-option>
      </el-select>
    </div>

    <div class="mb-4">
      <el-date-picker
          size="large"
          style="width: 100%" class="w-full"
          v-model="form.entryDate"
          type="datetime"
          format="YYYY-MM-DD HH:mm:ss"
          date-format="YYYY/MM/DD ddd"
          value-format="YYYY-MM-DD"
      />
    </div>

<!--    -->
    <el-button size="large"
               @click="setToLocalStorage"
               type="primary"
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
    localStorage.setItem("parkingSlotData", JSON.stringify(form.value));

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
              }
            }
        ).then((resp)=>{
          showLogin.value = false
          // localStorage.setItem("parkingSlotData", JSON.stringify(form.value));
          form.value.booking_total_cost = resp?.data?.booking_total_cost;
          localStorage.setItem("parkingSlotData", JSON.stringify(form.value));

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
