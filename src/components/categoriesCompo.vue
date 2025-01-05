<template>
  <v-sheet class="mx-auto sheetWidth">
    <h2 class="text-center mt-10">Categories</h2>
    
    <v-slide-group
      v-model="model"
      class="pa-4 mx-auto"
      selected-class="classActive"
      show-arrows
    >
      <v-slide-group-item
        v-for="(item, index) in allCategories"
        :key="index"
        v-slot="{ isSelected, toggle, selectedClass }"
        @click="parentToggle"
      >
        <v-card
          :class="['ma-4', 'justify-center', selectedClass]"
          height="200"
          width="200"
          @click="toggle"
        >
          <div class="h-75 d-flex align-center justify-center">
            <VIcon size="60" :icon="item.icon"></VIcon>
          </div>
          <div class="h-25 headerCat">
            <h3 class="text-center">{{ item.label }}</h3>
          </div>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
  <ProductCompo :typeProd="model"></ProductCompo>
</template>

<script setup>
import ProductCompo from "@/components/productCompo.vue";
import { ref, watch } from "vue";
let model = ref(0);

watch(model, (newVal, oldVal) => {
  console.log(newVal);
});
let allCategories = ref([
  { icon: "mdi-fish", label: "Fish", url: "#", active: true },
  { icon: "mdi-food-drumstick", label: "Chicken", url: "#", active: false },
  { icon: "mdi-food-steak", label: "Meat", url: "#", active: false },
  { icon: "mdi-carrot", label: "Vegetables", url: "#", active: false },
  { icon: "mdi-cake", label: "Sweets", url: "#", active: false },
  { icon: "mdi-food-steak", label: "Meat", url: "#", active: false },
  { icon: "mdi-carrot", label: "Vegetables", url: "#", active: false },
  { icon: "mdi-cake", label: "Sweets", url: "#", active: false },
]);

</script>

<style scoped>
.active .headerCat h3 {
  color: var(--mainGreen);
}
.classActive {
  color: var(--mainGreen);
  background-color: var(--bgGreen);
  border: 3px solid var(--mainGreen);
  border-radius: 10px;
}
.sheetWidth{
  width :80%;
  
}
@media screen and (max-width:900px) {
  .sheetWidth{
  width :95%;
  
}
}
</style>
