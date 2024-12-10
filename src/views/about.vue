<template>
  <div class="relative">
    <div class="w-full bg-blue-700 sticky top-0 left-0">
      <TheHeader />
    </div>
    <!-- About Section -->
    <section class="about_section py-16">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Left Column -->
          <div class="detail-box">
            <h2 class="text-3xl font-semibold text-black mb-4">About Us</h2>
            <p class="text-black">
              At SmartPark, we are committed to revolutionizing the parking experience by leveraging advanced technology to reduce congestion in urban areas. Our platform seamlessly integrates real-time data processing and predictive analytics to provide drivers with accurate, up-to-date parking availability. Through our user-friendly web portal, drivers can locate, book, and pay for parking with ease.
              Beyond convenience, SmartPark's robust architecture ensures secure data management and communication, offering an optimized experience for both users and city planners. By supporting efficient parking utilization, reducing traffic congestion, and enhancing urban mobility, SmartPark is shaping smarter, more sustainable cities.
            </p>
          </div>
          <!-- Right Column (Image) -->
          <div class="img-box">
            <img src="/bg.jpg" alt="" class="w-full rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </section>

    <!-- Mission and Vision Section -->
    <section class="about_section py-16 bg-gray-100">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Mission -->
          <div class="detail-box">
            <div class="card border border-gray-300 rounded-lg p-6">
              <i class="fas fa-globe text-green-500 text-3xl mb-4"></i>
              <h3 class="text-center text-xl font-semibold text-black mb-4">OUR MISSION</h3>
              <p class="text-center text-black">
                To simplify urban parking by providing a smart, efficient, and user-friendly system that reduces traffic congestion, saves time, and improves the overall driving experience. We aim to make parking accessible and stress-free, while contributing to smarter urban mobility and sustainability.
              </p>
            </div>
          </div>
          <!-- Vision -->
          <div class="detail-box">
            <div class="card border border-gray-300 rounded-lg p-6">
              <i class="fas fa-eye text-green-500 text-3xl mb-4"></i>
              <h3 class="text-center text-xl font-semibold text-black mb-4">OUR VISION</h3>
              <p class="text-center text-black">
                To become the leading solution for urban parking management, revolutionizing how cities handle parking by leveraging cutting-edge technology. We strive to create a future where parking is seamlessly integrated into daily life, enhancing the efficiency of cities and the quality of life for drivers worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- WhatsApp Icon -->
    <div id="whatsapp-icon" class="fixed bottom-6 right-6 z-50 animate-pulse">
      <a href="https://wa.me/+254758507879" target="_blank">
        <i class="fab fa-whatsapp text-green-500 text-5xl"></i>
      </a>
    </div>

    <!-- FAQ Section -->
    <section class="faq_section py-16" :style="{ backgroundImage: 'url(/multi-storey-car-park.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }">
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
  </div>
</template>

<script>
import { ElCollapse, ElCollapseItem } from 'element-plus';
import TheHeader from "@/components/TheHeader.vue";

export default {
  name: 'AboutUs',
  components: {
    TheHeader,
    ElCollapse,
    ElCollapseItem
  },
  data() {
    return {
      activeNames: ['1']  // Holds the currently active FAQ items
    };
  },
};
</script>

<style scoped>
.faq-item {
  background-color: #7aa3f6;
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