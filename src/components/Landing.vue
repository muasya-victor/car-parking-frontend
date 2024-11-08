<script setup>

import BookingForm from "@/components/BookingForm.vue";
import TheHeader from "@/components/TheHeader.vue";
</script>

<template>
  <TheHeader/>
  <div class="w-screen h-screen bg-[url('/bg.jpg')] bg-cover grid grid-cols-1 md:grid-cols-2">
    <div class="p-6 flex flex-col items-center justify-center">
      <BookingForm/>
    </div>

  </div>
</template>

<style scoped>

</style>