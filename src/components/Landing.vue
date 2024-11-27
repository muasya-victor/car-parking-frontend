<script setup>

import BookingForm from "@/components/BookingForm.vue";
import TheHeader from "@/components/TheHeader.vue";
</script>

<template>
  <div class="w-screen min-h-screen bg-[url('/bg.jpg')] bg-cover bg-norepeat bg-left-top flex flex-col gap-4 justify-center items-center">
  <TheHeader/>

    <div class="p-6 flex gap-2 items-start justify-between w-full container ">
      <div class="md:w-5/12">
        <BookingForm/>
      </div>
      

      <div class="flex flex-col text-white items-end gap-4">

        <h2 class="font-extrabold text-4xl">
          AFFORRDABLE AND RELIABLE
        </h2>

        <span>
          Safe and secure facilities for your vehicle
        </span>
      </div>
    </div>

    <!-- FAQ Section -->
    <section class="faq_section py-16 w-full">
      <div class="container mx-auto px-4 text-center text-white">
        <h2 class="text-4xl font-semibold mb-8">FAQ</h2>

        <!-- FAQ Collapse Section -->
        <el-collapse class="flex flex-col gap-6" v-model="activeNames">
          <el-collapse-item title="How do I find available parking spots using SmartPark?" name="1" class="faq-item">
            <template #title>
              <div class="flex items-center">
                <i class="fas fa-question-circle text-green-500 mr-3"></i>
                <span class="text-xl font-semibold text-black">How do I find available parking spots using SmartPark?</span>
              </div>
            </template>
            <p class="faq-answer text-black">
              You can use the SmartPark web portal to search for available parking spots in real-time by entering your location. The system will display nearby options for you to choose from.
            </p>
          </el-collapse-item>

          <el-collapse-item title="Can I reserve a parking spot in advance?" name="2" class="faq-item">
            <template #title>
              <div class="flex items-center">
                <i class="fas fa-calendar-check text-green-500 mr-3"></i>
                <span class="text-xl font-semibold text-black">Can I reserve a parking spot in advance?</span>
              </div>
            </template>
            <p class="faq-answer text-black">
              Yes, SmartPark allows you to book parking spots in advance. Simply select your desired parking spot and time, and complete the reservation through the web portal.
            </p>
          </el-collapse-item>

          <el-collapse-item title="How do I make payments for parking?" name="3" class="faq-item">
            <template #title>
              <div class="flex items-center">
                <i class="fas fa-credit-card text-green-500 mr-3"></i>
                <span class="text-xl font-semibold text-black">How do I make payments for parking?</span>
              </div>
            </template>
            <p class="faq-answer text-black">
              Payments can be securely made through the SmartPark web portal using integrated payment gateways. The system supports multiple payment methods to ensure convenience.
            </p>
          </el-collapse-item>

          <el-collapse-item title="Will I receive notifications about my booking?" name="4" class="faq-item">
            <template #title>
              <div class="flex items-center">
                <i class="fas fa-bell text-green-500 mr-3"></i>
                <span class="text-xl font-semibold text-black">Will I receive notifications about my booking?</span>
              </div>
            </template>
            <p class="faq-answer text-black">
              Yes, SmartPark provides real-time notifications regarding your booking status, including confirmations, reminders, and alerts about any changes.
            </p>
          </el-collapse-item>
        </el-collapse>
      </div>
    </section>


    <the-footer/>
  </div>
  
</template>


<style scoped>
.faq-item {
  background-color: #f3f4f6;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 12px;
}

.faq-answer {
  padding: 12px;
  background-color: #ffffff;
  border-left: 4px solid #4CAF50;
  border-radius: 8px;
  margin-top: 8px;
}

.faq-item .el-collapse-item__header {
  padding: 10px 12px;
  font-weight: 600;
}

.faq-item .el-collapse-item__header:hover {
  background-color: #e2e8f0;
}

.faq-item .el-collapse-item__content {
  padding: 0;
}

.faq-item .el-collapse-item__content p {
  font-size: 16px;
  line-height: 1.5;
  color: #333;
}
</style>