<template>
  <v-sheet class="footer">
    <h6>Yassine MESBAHI. All right reserved © {{year}}</h6>
  </v-sheet>
</template>
<script setup>
import {onMounted, ref } from "vue";
let year = ref(null)
onMounted(()=>{
    let date = new Date()
    year.value = date.getFullYear()
})
</script>
<style scoped>
.footer {
  height: 30px;
  width: 100vw;
  background-color: var(--bgColor);
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
