<template>
  <base-dialog>
    <template #content>
      <el-form
          ref="ruleForm"
          :model="form"
          :rules="rules"
          class="flex flex-col gap-4 w-full h-fit"
          label-position="top"
      >
        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 items-center">
          <el-form-item label="Payment Amount" prop="payment_amount">
            <el-input-number
                style="width: 100%"
                v-model="parkingSlotData.booking_total_cost"
                placeholder="100"
                disabled
                size="large"
            />
          </el-form-item>
          <el-form-item label="Parking Slot" prop="payment_parking_slot">
            <el-select disabled size="large" placeholder="Select Location"
                       :loading="parkingSlotLoader"
                       @focus="getParkingSlots"
                       v-model="parkingSlotData.parking_slot_id" style="width: 100%" class="w-full">
              <el-option v-for="slot in parkingSlots"
                         :key="slot.parking_slot_id"
                         :value="slot.parking_slot_id">
                {{ slot.parking_slot_floor_number }} :
                {{ slot.parking_slot_location }}
              </el-option>
            </el-select>
          </el-form-item>
        </div>
        <div class="flex w-full ">
          <el-button
              :loading="submitLoading"
              class="w-fit"
              size="large"
              style="border-radius: 4px"
              type="primary"
              html-type="submit"
              @click="submitForm(ruleForm)"
          >
            Submit
          </el-button>
        </div>
        <div class="text-sm hidden">
          <span class="text-gray-400"> Already have an Account ? </span>
          <router-link :to="{ name: 'login' }" class="text-blue-400 hover:text-blue-500 hover:font-bold">
            Sign In
          </router-link>
        </div>
      </el-form>
    </template>
  </base-dialog>
</template>

<script lang="ts" setup>
import { reactive, ref, onMounted, inject, watch } from "vue";
import { FormInstance, FormRules } from "element-plus";
import { useRoute, useRouter } from "vue-router";
import BaseDialog from "@/components/base/BaseDialog.vue";
import { useStore } from "vuex";

const route = useRoute();
const router = useRouter();
const store = useStore();

const parkingSlotData = JSON.parse(localStorage.getItem("parkingSlotData"));
const authData = JSON.parse(localStorage.getItem("authData"));

const { pushDataToDatabase, submitLoading } = inject("useLifecycle");
const loading = ref(false);
const form = ref({
  first_name: "",
  last_name: "",
  email: ""
});

const ruleForm = ref<FormInstance>();
const rules = reactive<FormRules>({
  username: [
    {
      required: true,
      trigger: "blur",
      message: "Please enter username",
    },
  ],
  password: {
    required: true,
    trigger: "blur",
    message: "Please enter password",
  },
});

const parkingSlotLoader = ref(false);
const parkingSlots = ref([]);
const previousRouteName = ref(null); // Store the previous route name
const newGRouteName = ref(null); // Store the previous route name

const getParkingSlots = () => {
  parkingSlotLoader.value = true;
  store.dispatch("fetchList", { url: "parking-slots" })
      .then((resp) => {
        parkingSlots.value = resp?.data;
        parkingSlotLoader.value = false;
      })
      .catch((err) => {
        parkingSlotLoader.value = false;
      });
};

// Watch route for changes and update previousRouteName
watch(
    () => route.name,
    (newRouteName, oldRouteName) => {
      previousRouteName.value = oldRouteName
      newGRouteName.value = newRouteName;
      console.log(oldRouteName, 'route ya kitambo')
    }
);

const submitForm = async (formEl: FormInstance | undefined) => {
  submitLoading.value = true;
  if (!formEl) return;

  const payload = {
    payment_user: authData?.user?.user_id,
    payment_parking_slot: parkingSlotData?.parking_slot_id,
    payment_amount: 400
  };

  await formEl.validate((valid, fields) => {
    if (valid) {
      if (route.name === "make-payment") {
        store.dispatch("postData", { url: "payments", data: payload })
            .then((response) => {
              localStorage.removeItem("parkingSlotDetails");
              submitLoading.value = false;
              router.push({ name: "payments" });
            })
            .catch((err) => {
              submitLoading.value = false;
            });
      }

      if (route.name === "user-edit") {
        let payload = { ...form.value };
        store.dispatch("patchData", { url: "users", data: payload, id: route?.params.id })
            .then((response) => {
              submitLoading.value = false;
            });
      }
    } else {
      submitLoading.value = false;
    }
    loading.value = false;
  });
};

const fetchOnMount = () => {
  if (route.name === "user-edit") {
    store.dispatch("fetchSingleItem", { url: `users`, id: route?.params?.id })
        .then((res) => {
          form.value = res?.data;
        });
  }
};

onMounted(() => {
  console.log(newGRouteName.value, "prev route");
  previousRouteName.value = route.name;
  fetchOnMount();
});

</script>

<style scoped></style>
