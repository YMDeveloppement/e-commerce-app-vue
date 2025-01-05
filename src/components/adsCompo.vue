<template>
  <v-sheet style="margin: 100px 0;">
    <div class="imageAds">
      <v-img cover height="300px" src="src/assets/img/cover2.png"></v-img>
      <div class="secondImg">
        <img src="/src/assets/img/mobile.png"></img>
        <div class="brend">
            <h1 class="brandName pl-10 pb-10" >Welcome to your <span>e - </span>Store</h1>
        </div>
      </div>
    </div>
  </v-sheet>
</template>
<style scoped>
.imageAds {
  position: relative;

}
.secondImg {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  left: 5%;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 20px;
  overflow: hidden;
}
.brandName {
  font-family: var(--fontLogo-2);
  font-size:x-large,
}
.brandName span {
  color: var(--mainGreen) !important;
}

@media screen and (max-width:600px){
.brandName {
    font-size: 1rem !important;
    padding:10px !important
  }
}
</style>
