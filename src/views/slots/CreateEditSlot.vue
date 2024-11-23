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
        <div class="flex gap-2 items-center">
          <h1 class="font-bold text-2xl text-blue-500">{{ config.appName }}</h1>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-2 items-center">
          <el-form-item label="Location" prop="parking_slot_location">
            <el-input
                v-model="form.parking_slot_location"
                placeholder="Parking Slot Location"
                size="large"
                type="text"
            />
          </el-form-item>
          <el-form-item label="Availability" prop="parking_slot_available">
            <el-switch
                v-model="form.parking_slot_available"
                active-text="Available"
                inactive-text="Unavailable"
            />
          </el-form-item>
          <el-form-item label="Price per Hour" prop="parking_slot_price_per_hour">
            <el-input
                v-model="form.parking_slot_price_per_hour"
                placeholder="Price per Hour"
                size="large"
                type="number"
            />
          </el-form-item>
          <el-form-item label="Floor Number" prop="parking_slot_floor_number">
            <el-input
                v-model="form.parking_slot_floor_number"
                placeholder="Floor Number"
                size="large"
                type="number"
            />
          </el-form-item>
          <el-form-item label="Capacity" prop="parking_slot_capacity">
            <el-input
                v-model="form.parking_slot_capacity"
                placeholder="Capacity"
                size="large"
                type="number"
            />
          </el-form-item>
        </div>

        <div class="flex w-full">
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
      </el-form>
    </template>
  </base-dialog>
</template>

<script lang="ts" setup>
import { reactive, ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { FormInstance, FormRules } from "element-plus";
import config from "@/utility/configs.json";
import BaseDialog from "@/components/base/BaseDialog.vue";

const route = useRoute();
const store = useStore();

const submitLoading = ref(false);
const loading = ref(false);

const form = ref({
  parking_slot_location: "",
  parking_slot_available: false,
  parking_slot_price_per_hour: 0,
  parking_slot_floor_number: 0,
  parking_slot_capacity: 0,
});

const ruleForm = ref<FormInstance>();
const rules = reactive<FormRules>({
  parking_slot_location: [
    { required: true, message: "Please enter the parking slot location", trigger: "blur" },
  ],
  parking_slot_price_per_hour: [
    { required: true, message: "Please enter the price per hour", trigger: "blur" },
  ],
});

const fetchOnMount = () => {
  if (route.name === "slot-edit") {
    store
        .dispatch("fetchSingleItem", { url: "parking-slots", id: route.params.slotId })
        .then((res) => {
          form.value = res.data;
        });
  }
};

const submitForm = async (formEl: FormInstance | undefined) => {
  console.log('her')
  if (!formEl) return;
  submitLoading.value = true;
  await formEl.validate((valid) => {
    if (valid) {
      if (route.name === "slot-edit") {
        store.dispatch("patchData", { url: "parking-slots", data: form.value, id: route.params.slotId });
      } else {
        store.dispatch("postData", { url: "parking-slots", data: form.value });
      }
    }
    submitLoading.value = false;
  });
};

onMounted(fetchOnMount);
</script>

<style scoped></style>
