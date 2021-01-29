<template>
  <q-layout>
    <BarraWindows />
    <GeneralNavbar />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script>
import GeneralNavbar from "components/GeneralNavbar.vue";
import BarraWindows from "components/BarraWindows.vue";
export default {
  name: "MainLayout",
  components: { GeneralNavbar, BarraWindows }
};
</script>
