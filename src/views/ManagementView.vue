<template>
  <v-sheet>
    <NavBar>
      <SideBar></SideBar>
    </NavBar>
    <v-footer max-height="max-content" class="pa-0 ma-0">
      <Footer></Footer>
    </v-footer>
  </v-sheet>
</template>

<script setup>
import NavBar from "@/components/NavBar.vue";
import SideBar from "@/components/management_components/sideBar.vue";
import Footer from "@/components/footerCompo.vue";
</script>
