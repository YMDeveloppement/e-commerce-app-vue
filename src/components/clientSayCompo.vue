<template>
  <v-sheet class=" bgSecondary" >
    <h2 class="text-center py-10">What Our Client Say</h2>
    <v-container fluid>
      <VRow class="justify-center">
        <VCol
          xs="12"
          lg="3"
          md="6"
          sm="12"
          v-for="(client, index) in clients"
          :key="index"
        >
          <VCard class="pa-3" elevation="10">
            <div class="d-flex align-center justify-start ga-4">
              <VAvatar
                size="x-large"
                cover
                image="src/assets/img/users/user1.jpg"
              >
              </VAvatar>
              <div>
                <h4>{{ client.name }}</h4>
                <h5 class="textSecondary">{{ client.country }}</h5>
              </div>
            </div>
            <div class="py-4">
              <VIcon
                color="#ffc60a"
                v-for="(n, i) in client.vote"
                :key="i"
                icon="mdi-star"
              ></VIcon>
            </div>
            <p class="paragraphe">
              {{ client.description }}
            </p>
          </VCard>
        </VCol>
      </VRow>
    </v-container>
  </v-sheet>
</template>

<script setup>
import { ref } from "vue";

let clients = ref([
  {
    name: "Yassine MESBAHI",
    country: "Morroco",
    vote: 5,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum suscipit dolorem adipisci quia, veritatis quidem quasi odit iste.",
  },
  {
    name: "Hamza Reda",
    country: "Italia",
    vote: 3,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum suscipit dolorem adipisci quia, veritatis quidem quasi odit iste.",
  },
  {
    name: "anass Gorchan",
    country: "Katar",
    vote: 6,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum suscipit dolorem adipisci quia, veritatis quidem quasi odit iste.",
  },
]);
</script>

<style scoped></style>
