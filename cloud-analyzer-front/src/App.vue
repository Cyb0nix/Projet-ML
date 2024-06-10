<script setup>

import Home from "@/components/Home.vue";
</script>

<template>
  <div id="app" class="h-screen">
    <header class="bg-base-200">
      <div class="cloud-header-div flex items-center ml-20">
        <img class="cloud-logo w-40 h-auto" alt="Logo" src="./assets/cloudLogo.png"/>
        <h1 class="text-2xl font-bold">Cloud Analyzer</h1>
      </div>
    </header>

    <div class="container-file h-full">
      <Home/>
    </div>

    <footer class="footer footer-center p-10 bg-base-200 text-base-content rounded absolute bottom-0">
      <aside>
        <p>Copyright © 2024 - All right reserved by Mariane Vigna and Cédric Yoganathan</p>
      </aside>
    </footer>
  </div>

</template>


<style scoped>







</style>
