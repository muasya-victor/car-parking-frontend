<script setup>

import BookingForm from "@/components/BookingForm.vue";
import TheHeader from "@/components/TheHeader.vue";
</script>

<template>
  <div class="w-screen min-h-screen  flex flex-col justify-center items-center">
  <TheHeader class=""/>

    <div class="px-6 py-16 flex gap-2 items-start justify-between w-full bg-[url('/bg.jpg')] bg-cover bg-norepeat bg-left-top min-h-[60VH]">
      <div class="md:w-5/12 container mx-auto">
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

    <section class="about_section p-12 bg-gray-50 rounded-md">
      <div class=" mx-auto">
        <div class="flex gap-4 justify-between flex-wrap items-center p-4">
          <!-- Text Section -->
          <div class="w-full md:w-1/3 ">
            <h4 class="text-lg font-bold mb-4">Join us today!</h4>
            <div class="detail-box">
              <p class="text-black mb-6">
                Welcome to <b>SmartPark</b>, an innovative parking solution designed to reduce congestion in crowded urban areas by identifying available parking slots in real time. Our system provides a seamless, user-friendly experience that allows drivers to quickly locate, book, and pay for parking spaces. With SmartPark, we aim to improve traffic flow and save time by eliminating the hassle of searching for parking.
                Our mission is to make city parking smarter, more efficient, and accessible to all drivers.
              </p>
              <a href="/about" class="text-white bg-green-700 p-4 rounded-md hover:bg-green-800 font-medium">
                Learn more
              </a>
            </div>
          </div>

          <!-- Image Section -->
          <div class="w-full md:w-1/2 bg-[url('/bg.jpg')] h-[300px] bg-cover bg-norepeat bg-left-top ">

          </div>
        </div>
      </div>
    </section>


    <the-footer/>
  </div>
  
</template>


<style scoped>
.faq-item {
  background-color: #577ace;
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