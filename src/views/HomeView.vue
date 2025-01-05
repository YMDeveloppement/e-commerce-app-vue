<template>
  <div>
    <NavBar></NavBar>
    <SliderHome></SliderHome>
    <CategoriesCompo></CategoriesCompo>
    <ClientSayCompo></ClientSayCompo>
    <AdsImg></AdsImg>
    <Footer></Footer>
  </div>
</template>

<script setup>
    import NavBar from '@/components/NavBar.vue';
    import SliderHome from '@/components/sliderHome.vue';
    import CategoriesCompo from '@/components/categoriesCompo.vue';
    import ClientSayCompo from '@/components/clientSayCompo.vue';
    import AdsImg from '@/components/adsCompo.vue';
    import Footer from '@/components/footerCompo.vue';
</script>