<template>
    <header class="bg-blue-500 py-4 shadow-xl">
      <div class="container mx-auto px-4">
        <nav class="flex items-center justify-between">

          <!-- Standalone SmartPark Brand on the far left -->
          <router-link to="/" class="flex items-center font-mono space-x-2 text-white font-bold text-2xl">
            <span>Smart Park</span>
          </router-link>

          <!-- Navigation Menu (Home, About Us, Services, Login) on the right -->
          <ul class="flex items-center space-x-6 text-white">
            <li>
              <router-link to="/" class="hover:text-blue-200 transition-colors">Home</router-link>
            </li>
            <li>
              <router-link to="/about" class="hover:text-blue-200 transition-colors">About Us</router-link>
            </li>
            <li>
              <router-link to="/dashboard" class="hover:text-blue-200 transition-colors">Dashboard</router-link>
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
