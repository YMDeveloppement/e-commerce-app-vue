<template>
  <div class="carosselBox ma-3">
    <div class="smallSearch">
      <div class="mainSearch d-flex ga-3 pt-4">
        <div style="width: 95%">
          <v-text-field
            label="Search your daily groceries"
            prepend-inner-icon="mdi-magnify"
            variant="solo"
          >
          </v-text-field>
        </div>
        <v-btn class="btnSearch" rounded="xl" size="large">
          <VIcon icon="mdi-magnify"></VIcon>
        </v-btn>
      </div>
    </div>
    <!-- <v-window v-model="window" show-arrows>
      <v-window-item v-for="(element, index) in imgs" :key="index">
        <v-card
          class="d-flex justify-center align-center"
          style="width: 100vw; padding: 0; margin: 0"
        >
          <img :src="element" :alt="element" />
        </v-card>
      </v-window-item>
    </v-window> -->
    <v-carousel
      class="myCarrocel"
      hide-delimiters
      style="padding: 0 !important ; margin: 0 !important ;border-radius: 20px;overflow:hidden"
      height="700px"
    >
      <v-carousel-item
      style=""
        v-for="(img, index) in imgs"
        :key="index"
        :src="img"
        cover
      ></v-carousel-item>
    </v-carousel>
    <div class="mainTitle">
      <h1>Welcome To Your e-Store</h1>
      <h3 class="pt-4">#Free Delivery</h3>
      <div class="mainSearch d-flex ga-3 pt-4">
        <div style="width: 95%">
          <v-text-field
            label="Search your daily groceries"
            prepend-inner-icon="mdi-magnify"
            variant="solo"
          >
          </v-text-field>
        </div>
        <v-btn class="btnSearch" rounded="xl" size="x-large"> Search </v-btn>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
let length = ref(1);
let window = ref(0);

let imgs = ref([
  "src/assets/img/cover.png",
  "src/assets/img/tea-cup.jpg",
  "src/assets/img/tea.jpg",
  "src/assets/img/product.jpg",
  "src/assets/img/champTea.jpg",
]);

let metaHost = document
  .querySelector("meta[name='host']")
  .getAttribute("content");
</script>

<style scoped>
img {
  object-fit: cover !important;
  width: 100vw;
  padding: 0;
  margin: 0;
  /* height: 70vh; */
}

.carosselBox {
  position: relative;
  border-radius: 20px !important;
  overflow: hidden !important;
}
.mainTitle:hover {
  border: 2px solid var(--mainGreen);
}
.mainTitle {
  transition: all 1s;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1000 !important;
  /* background-color: red; */
  transform: translate( -50% , -50%);
  color: rgb(255, 255, 255);
  width: 50%;
  padding: 2rem;
  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.13);
  border-radius: 2rem;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(1px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
.mainTitle h3 {
  color: var(--mainGreen);
}
.mainSearch button {
  background-color: var(--mainGreen);
  color: white;
}
.mainSearch {
  position: relative;
}
.smallSearch {
  display: none;
}
@media screen and (max-width: 900px) {
  .mainTitle{
    width: 75%;
  }
}
@media screen and (max-width: 600px) {
  .mainTitle{
    top: 35%;
  }
  .smallSearch {
    display: block;
  }
  .mainTitle .mainSearch {
    display: none !important;
  }
  .myCarrocel{
    height: 500px !important;
  }
  .mainTitle h3, .mainTitle h1 {
    text-align: center;
  }
}
</style>

<style>
.mainSearch .v-field--center-affix .v-field__prepend-inner {
  color: var(--mainGreen) !important;
  font-size: x-large;
  border-radius: 30px;
}
.mainSearch .v-field.v-field--prepended {
  border-radius: 30px;
  border: 2px solid var(--mainGreen);
}
.mainSearch .btnSearch {
  position: absolute;
  right: 0;
}
.mainSearch .v-btn.v-btn--density-default {
  height: 60%;
}
.mainSearch .v-field--variant-solo {
  box-shadow: none;
}
</style>
