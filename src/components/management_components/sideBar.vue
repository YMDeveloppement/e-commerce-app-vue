<template>
  <v-card class="elevation-0	">
    <v-layout>
      <v-navigation-drawer
        style="margin-top: 60px"
        expand-on-hover
        v-model="drawer"
        :rail="rail"
      >
        <v-list>
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
            subtitle="sandra_a88@gmailcom"
            title="Sandra Adams"
          >
            <template v-slot:append>
                <!-- @click.stop="$emit('changeSideState')" -->
              <v-btn
                :icon="rail ? 'mdi-chevron-right' : 'mdi-chevron-left'"
                variant="text"
                @click.stop="chngEmit"
              ></v-btn>
            </template>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <router-link :to="{ name: 'products' }">
            <v-list-item
              prepend-icon="mdi-folder"
              title="My Files"
              value="myfiles"
            ></v-list-item>
          </router-link>

          <v-list-item
            prepend-icon="mdi-account-multiple"
            title="Shared with me"
            value="shared"
          ></v-list-item>
          <v-list-item
            prepend-icon="mdi-star"
            title="Starred"
            value="starred"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main class="mainStyle elevation-8 overflow-auto">
        <AppManagement></AppManagement>
      </v-main>



    </v-layout>
  </v-card>
</template>
<script setup>
import { watch ,ref ,onMounted,  onUnmounted, defineEmits,  inject} from "vue";
import AppManagement from './main_file_mng.vue'
let drawer = ref(false);
let rail = ref(true);

const emit = defineEmits(['sideBarToggle'])

// let screenWidth = ref(window.innerWidth );
const windowWidth = ref(window.innerWidth);

let showSide = inject('showSide') 
let DrawerSide = inject('DrawerSide') 

watch(showSide , (newVal ,  oldVal)=>{
  // if()
    rail.value = newVal
    // drawer.value = newVal

})

watch(DrawerSide , (newVal ,  oldVal)=>{
    drawer.value = newVal
})

const updateWidth = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener("resize", updateWidth);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateWidth);
});

watch(windowWidth, (newWidth, oldWidth) => {
  if (newWidth < 1280) {
    rail.value = false; 
  } else {
    rail.value = true;
  }
  console.log(rail.value)
});
// watch(screenWidth, (newVal ,  oldVal)=>{
//   // if()
//     // console.log(newVal)
// })
function chngEmit(){
  emit('sideBarToggle')
  rail.value = !rail.value
}
</script>


<style >
  a{
    text-decoration: none;
    color: inherit;
  }
  .mainStyle{
    height: 90vh ;
    background-color:#f7f7f7;
  }
</style>
