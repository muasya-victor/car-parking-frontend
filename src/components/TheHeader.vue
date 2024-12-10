<template>
    <header class="w-full bg-black py-4 ">
      <div class="container mx-auto px-4">
        <nav class="flex items-center justify-between capitalize">

          <!-- Standalone SmartPark Brand on the far left -->
          <router-link to="/" class="flex items-center space-x-2 text-white font-bold text-2xl">
            <span class="font-extrabold">SMARTPARK</span>
          </router-link>

          <!-- Navigation Menu (Home, About Us, Services, Login) on the right -->
          <ul class="flex items-center space-x-6 text-white capitalize font-bold">
            <li>
              <router-link to="/" class="hover:text-blue-200 transition-colors">HOME</router-link>
            </li>
            <li>
              <router-link to="/about" class="hover:text-blue-200 transition-colors">ABOUT US</router-link>
            </li>
            <li>
              <router-link to="/dashboard" class="hover:text-blue-200 transition-colors">DASHBOARD</router-link>
            </li>
          </ul>

        </nav>
      </div>
    </header>
</template>

<script>
export default {
  name: "TheHeader",
};
</script>
