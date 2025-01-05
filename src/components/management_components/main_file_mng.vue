<template class="">
  <VContainer class="pa-4 listingProduct " fluid>
    <div class="d-flex align-center justify-space-between">
      <h2 class="font-weight-black text-subtitle-1 text-uppercase">Products</h2>
      <v-breadcrumbs :items="['Products', 'listing']"></v-breadcrumbs>
    </div>
    <!--  -->
    <VCard class="pa-4">
      <VRow class="searchProduct">
        <VCol cols="12" lg="3" md="4" sm="6" xs="12">
          <v-text-field
            prepend-inner-icon="mdi-magnify"
            variant="outlined"
            density="compact"
            placeholder="Search product"
          ></v-text-field>
        </VCol>
        <VCol cols="12" md="4" sm="6" lg="3" xs="12">
          <v-select
            v-model="brand"
            :items="listBrands"
            chips
            clearable
            multiple
            variant="outlined"
            density="compact"
            placeholder="Choose categories"
          ></v-select>
        </VCol>
        <VCol cols="12" md="4" sm="6" lg="3" xs="12">
          <v-select
            v-model="categorie"
            :items="listCatg"
            chips
            multiple
            clearable
            variant="outlined"
            density="compact"
            placeholder="Choose categories"
          ></v-select>
        </VCol>
        <VCol cols="12" md="4" sm="6" lg="3" xs="12">
          <v-select
            v-model="discount"
            :items="listDisc"
            chips
            multiple
            clearable
            variant="outlined"
            density="compact"
            placeholder="Choose categories"
          ></v-select>
        </VCol>
        <VCol>
          <v-btn class="btnFilter" prepend-icon="mdi-filter-cog-outline"
            >Button</v-btn
          >
        </VCol>
      </VRow>
    </VCard>
    <!--  -->
    <VCard class="mt-6 pa-4 overflow-auto">
      <div class="d-flex align-center justify-space-between">
        <h1 class="text-subtitle-1 font-weight-bold">
          Products
          <VChip class="ma-2 font-weight-bold" size="x-small" label>
            {{ productsList.length  }} acticle
          </VChip>
        </h1>
        <VBtn prepend-icon="mdi-plus-circle-outline " color="primary"
          >Add Product</VBtn
        >
      </div>

      <v-data-table
        class="mt-6"
        v-model="productSelected"
        :items="productsList"
        :rows-per-page-items="[5, 10, 25, 50, 100]"
        :headers="headers"
        show-select
      >
        <template v-slot:item.image="{ value }">
          <v-avatar :image="value"></v-avatar>
        </template>
        <template v-slot:item.rate="{ value }">
          <v-chip
            label
            size="x-small"
            prepend-icon="mdi-star"
            class="ma-2"
            color="orange"
          >
            {{ value }}
          </v-chip>
        </template>
      </v-data-table>
    </VCard>
  </VContainer>
</template>
<script setup>
import { ref, onMounted } from "vue";
import instanceProducts from "@/axios/instanceProducts";
let discount = ref(null);
let brand = ref(null);
let categorie = ref(null);
let listBrands = ref(["items"]);
let listDisc = ref(["items 10%"]);
let listCatg = ref(["items"]);
let productSelected = ref([]);
let productsList = ref([]);

let headers = ref([
  { class: "my-header-style", title: "Product", key: "title", value: "title" },
  {
    class: "my-header-style",
    title: "Category",
    key: "category",
    value: "category",
  },
  { class: "my-header-style", title: "Image", key: "image", value: "image" },
  { class: "my-header-style", title: "Price", key: "price", value: "price" },
  {
    class: "my-header-style",
    title: "Stock",
    key: "stock",
    value: "rating.count",
  },
  {
    class: "my-header-style",
    title: "Rating",
    key: "rate",
    value: "rating.rate",
  },
]);

onMounted(() => {
  instanceProducts
    .get("products")
    .then((res) => {
      productsList.value = res.data;
      console.log(productsList.value);
      console.log();
    })
    .catch((error) => {
      console.log(error);
    });
});
</script>
<style scoped>
* {
  font-family: "Poppins", serif;
}
.btnFilter {
  background-color: var(--tb-secondary);
  color: white;
}
</style>

<style>
.v-field__field {
  font-size: smaller;
}
.listingProduct .v-input__details {
  display: none !important;
}
.my-header-style {
  background-color: #f7f7f7 !important;
}
.v-data-table__th {
  background-color: #f7f7f7 !important;
}
</style>
