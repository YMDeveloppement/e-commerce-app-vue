<template>
  <v-app class="pa-10">
    <v-app-bar :elevation="1">
      <!-- <template v-slot:prepend> -->
      <v-app-bar-nav-icon>
        <VIcon size="x-large" class="brandIcon" icon="mdi-cart-variant">
        </VIcon>
      </v-app-bar-nav-icon>
      <!-- </template> -->

      <v-app-bar-title class="brandName text-h4 font-weight-black"
        ><span>e - </span>Store
      </v-app-bar-title>
      <!-- <template v-slot:append> -->
      <v-spacer></v-spacer>

      <v-badge overlap content="3" color="#FF6D59">
        <v-avatar color="#FFF0EE">
          <v-icon icon="mdi-heart-outline" color="#FF6D59"> </v-icon>
        </v-avatar>
      </v-badge>
      <v-badge overlap class="pa-4" content="3" color="#41AB55">
        <v-avatar color="#ECF7EE">
          <v-icon icon="mdi-cart" color="#41AB55"> </v-icon>
        </v-avatar>
      </v-badge>
      <h3 class="userName font-weight-bold pr-4">Yassine MESBAHI</h3>
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
</template>
<style>
.brandIcon {
  color: var(--mainGreen) !important;
}
.brandName {
  font-family: var(--fontLogo-2);
}
.userName {
  font-family: var(--fontLogo);
}
.brandName span {
  color: var(--mainGreen) !important;
}
</style>
