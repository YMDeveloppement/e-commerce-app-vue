<template>
  <v-sheet class="w-100 mx-auto listProduct">
    <h2 class="text-center mt-6">Products</h2>
    <VRow
      v-if="curProduct && curProduct.length > 0"
      class="rowProducts mx-auto my-10"
    >
      <VCol
        v-for="item in curProduct"
        lg="3"
        md="4"
        sm="6"
        xs="12"
        class="justify-center"
      >
        <VCard rounded="xl" elevation="5" class="pa-5 cardArticle">
          <div class="h-50" style="overflow: hidden">
            <v-img :src="item.img" alt="img" />
          </div>
          <div class="h-50">
            <h2>{{ item.label }}</h2>
            <p class="textSecondary py-2">1kg</p>
            <h4>{{ item.price + " DH" }}</h4>
            <div class="d-flex justify-space-between align-center pt-3">
              <div class="w-50 count d-flex align-center">
                <VBtn
                  size="small"
                  style="font-size: x-large"
                  @click="() => (item.qtSet < item.qt ? item.qtSet++ : null)"
                  >+</VBtn
                >
                <span class="px-3">{{ item.qtSet }}</span>
                <VBtn
                  size="small"
                  style="font-size: x-large"
                  @click="() => (item.qtSet > 0 ? item.qtSet-- : null)"
                  >-</VBtn
                >
              </div>

              <VAvatar color="#01a501" icon="mdi-shopping"> </VAvatar>
              <!-- <div> 
              </div> -->
            </div>
          </div>
        </VCard>
      </VCol>
    </VRow>

    <VRow v-else class="rowProducts pa-10 mx-auto">
      <VCol>
        <v-alert border="top" type="warning" variant="outlined" prominent>
          OOPS Sorry! No Product in this catrgory
        </v-alert>
      </VCol>
    </VRow>

  </v-sheet>
</template>

<script setup>
import { ref, defineProps, onMounted, watch } from "vue";
let products = ref({
  0: [
    {
      label: "Cabbage",
      img: "src/assets/img/products/p1.png",
      qt: 13,
      price: 300,
      qtSet: 1,
    },
    {
      label: "Lemon",
      img: "src/assets/img/products/p2.png",
      qt: 13,
      price: 300,
      qtSet: 1,
    },
    {
      label: "Fruits",
      img: "src/assets/img/products/p3.png",
      qt: 13,
      price: 300,
      qtSet: 1,
    },
    {
      label: "Yagourt",
      img: "src/assets/img/products/p4.png",
      qt: 13,
      price: 300,
      qtSet: 1,
    },
    {
      label: "Avocado",
      img: "src/assets/img/products/p5.png",
      qt: 13,
      price: 300,
      qtSet: 1,
    },
    {
      label: "Banana",
      img: "src/assets/img/products/p6.png",
      qt: 13,
      price: 300,
      qtSet: 1,
    },
    {
      label: "Cabbage",
      img: "src/assets/img/products/p1.png",
      qt: 13,
      price: 300,
      qtSet: 1,
    },
    {
      label: "Cabbage",
      img: "src/assets/img/products/p1.png",
      qt: 13,
      price: 300,
      qtSet: 1,
    },
    {
      label: "Lemon",
      img: "src/assets/img/products/p2.png",
      qt: 13,
      price: 300,
      qtSet: 1,
    },
    {
      label: "Fruits",
      img: "src/assets/img/products/p3.png",
      qt: 13,
      price: 300,
      qtSet: 1,
    },
    {
      label: "Yagourt",
      img: "src/assets/img/products/p4.png",
      qt: 13,
      price: 300,
      qtSet: 1,
    },
    {
      label: "Avocado",
      img: "src/assets/img/products/p5.png",
      qt: 13,
      price: 300,
      qtSet: 1,
    },
    {
      label: "Banana",
      img: "src/assets/img/products/p6.png",
      qt: 13,
      price: 300,
      qtSet: 1,
    },
    {
      label: "Cabbage",
      img: "src/assets/img/products/p1.png",
      qt: 13,
      price: 300,
      qtSet: 1,
    },
    {
      label: "Cabbage",
      img: "src/assets/img/products/p1.png",
      qt: 13,
      price: 300,
      qtSet: 1,
    },
    {
      label: "Lemon",
      img: "src/assets/img/products/p2.png",
      qt: 13,
      price: 300,
      qtSet: 1,
    },
    {
      label: "Fruits",
      img: "src/assets/img/products/p3.png",
      qt: 13,
      price: 300,
      qtSet: 1,
    },
    {
      label: "Yagourt",
      img: "src/assets/img/products/p4.png",
      qt: 13,
      price: 300,
      qtSet: 1,
    },
    {
      label: "Avocado",
      img: "src/assets/img/products/p5.png",
      qt: 13,
      price: 300,
      qtSet: 1,
    },
    {
      label: "Banana",
      img: "src/assets/img/products/p6.png",
      qt: 13,
      price: 300,
      qtSet: 1,
    },
    {
      label: "Cabbage",
      img: "src/assets/img/products/p1.png",
      qt: 13,
      price: 300,
      qtSet: 1,
    },
    {
      label: "Lemon",
      img: "src/assets/img/products/p2.png",
      qt: 13,
      price: 300,
      qtSet: 1,
    },
    {
      label: "Fruits",
      img: "src/assets/img/products/p3.png",
      qt: 13,
      price: 300,
      qtSet: 1,
    },
    {
      label: "Yagourt",
      img: "src/assets/img/products/p4.png",
      qt: 13,
      price: 300,
      qtSet: 1,
    },
    {
      label: "Avocado",
      img: "src/assets/img/products/p5.png",
      qt: 13,
      price: 300,
      qtSet: 1,
    },
    {
      label: "Banana",
      img: "src/assets/img/products/p6.png",
      qt: 13,
      price: 300,
      qtSet: 1,
    },
  ],
  1: [
    { label: "Butter", img: "src/assets/img/products/pr1.png", qt: 32 },
    { label: "Botato", img: "src/assets/img/products/pr2.png", qt: 32 },
    { label: "Biscuit 1", img: "src/assets/img/products/pr3.png", qt: 32 },
    { label: "Oreo", img: "src/assets/img/products/pr4.png", qt: 32 },
    { label: "Schoclate", img: "src/assets/img/products/pr5.png", qt: 32 },
    { label: "Fetrzi", img: "src/assets/img/products/pr6.png", qt: 32 },
    { label: "Butter", img: "src/assets/img/products/pr1.png", qt: 32 },
    { label: "Botato", img: "src/assets/img/products/pr2.png", qt: 32 },
    { label: "Biscuit 1", img: "src/assets/img/products/pr3.png", qt: 32 },
    { label: "Oreo", img: "src/assets/img/products/pr4.png", qt: 32 },
    { label: "Schoclate", img: "src/assets/img/products/pr5.png", qt: 32 },
    { label: "Fetrzi", img: "src/assets/img/products/pr6.png", qt: 32 },
  ],
});

let curProduct = ref([]);

let props = defineProps({
  typeProd: Number,
});

onMounted(() => {
  curProduct.value = products.value[props.typeProd];
});

watch(props, (newVal, oldVal) => {
  curProduct.value = [];
  curProduct.value = products.value[props.typeProd];
});
</script>

<style scoped>
.cardArticle:hover {
  border: 1px solid var(--mainGreen);
}
.rowProducts {
  /* overflow: hidden; */
  max-height: 100vh;
  overflow: auto;
  width: 90%;
}

/* @media screen and (min-width:500px){ */
::-webkit-scrollbar {
  width: 6px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgb(230, 230, 230);
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(238, 238, 238);
  /* opacity:70% ; */
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(228, 228, 228);
}

/* } */
/* width */
</style>
