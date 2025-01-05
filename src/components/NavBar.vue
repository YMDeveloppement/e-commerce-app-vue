<template>
  <v-sheet>
    <v-app
      class="pa-10"
      style="max-height: 66px; padding: 0 !important; margin: 0"
    >
      <v-app-bar :elevation="1">
        <!-- <template v-slot:prepend> -->
        <v-app-bar-nav-icon v-if="toggleIcon" @click="changeSider" >
          <VAvatar class="brandIcon elevation-5	" icon="mdi-cart-variant" size="large" >
          </VAvatar>
          <!-- <VIcon  class="brandIcon" icon="mdi-cart-variant" >
          </VIcon> -->
        </v-app-bar-nav-icon>
        <v-app-bar-nav-icon v-if="!toggleIcon" @click="changeDrawer" >
          <VAvatar class="brandIcon elevation-5	" icon="mdi-menu" size="large" >
          </VAvatar>
          <!-- <VIcon  class="brandIcon" icon="mdi-cart-variant" >
          </VIcon> -->
        </v-app-bar-nav-icon>
        <!-- </template> -->

        <v-app-bar-title class="brandName text-h4 font-weight-black"
          ><span>e - </span>Store
        </v-app-bar-title>
        <!-- <template v-slot:append> -->
        <v-spacer></v-spacer>

        <v-badge overlap content="3" color="#FF6D59">
          <v-avatar color="#FFF0EE" size="small">
            <v-icon icon="mdi-heart-outline" color="#FF6D59" size="x-small">
            </v-icon>
          </v-avatar>
        </v-badge>
        <v-badge overlap class="pa-4" content="3" color="#41AB55">
          <v-avatar color="#ECF7EE" size="small">
            <v-icon icon="mdi-cart" color="#41AB55" size="x-small"> </v-icon>
          </v-avatar>
        </v-badge>
        <h3 v-if="showName" class="userName font-weight-bold pr-4">
          Yassine MESBAHI
        </h3>
        <v-avatar>
          <v-img
            alt="Avatar"
            src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
          ></v-img>
        </v-avatar>
        <v-btn icon dark>
          <v-icon icon="mdi-chevron-down"> </v-icon>
        </v-btn>

        <!-- </template> -->
      </v-app-bar>
    </v-app>
    <slot :sideBarToggle="changeSider"></slot>
    <!-- <slot @changeSideState = "changeSider"></slot> //emit not work -->
    <!-- emplacement du slot -->
  </v-sheet>
</template>
<script setup>
import { provide, watch, ref, onMounted, onUnmounted, watchEffect } from "vue";

const windowWidth = ref(window.innerWidth);
let showName = ref(true);
let showSide = ref(true);
let DrawerSide = ref(false);

let toggleIcon = ref(true);
console.log("origin", showSide.value);
provide(/* clé */ "showSide", /* valeur */ showSide);
provide(/* clé */ "DrawerSide", /* valeur */ DrawerSide);

const updateWidth = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener("resize", updateWidth);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateWidth);
});

// Optional: Watch for changes in windowWidth (if needed)
watch(windowWidth, (newWidth, oldWidth) => {
  if (newWidth < 800) {
    showName.value = false; 
  } else {
    showName.value = true;
  }
  
  if (newWidth < 1280) {
    toggleIcon.value = false; 
  } else {
    toggleIcon.value = true;
  }
});

function changeSider() {
  showSide.value = !showSide.value;
}
function changeDrawer() {
  DrawerSide.value = !DrawerSide.value;
}
</script>

<style scoped>
.brandIcon {
  color: var(--mainGreen) !important;
}
.userName {
  font-family: var(--fontLogo);
}
.brandName {
  font-family: var(--fontLogo-2);
}
.brandName span {
  color: var(--mainGreen) !important;
}

@media screen and (max-width: 800px) {
  .brandName {
    font-size: 1.5rem !important;
  }
  .userName {
    font-size: 1rem !important;
  }
}
</style>

<style>
.v-application__wrap {
  max-height: 100vh;
}
</style>
