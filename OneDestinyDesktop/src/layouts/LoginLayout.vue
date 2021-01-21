<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-indigo-10 text-white">
      <barra-windows></barra-windows>
      <q-toolbar>
        <q-toolbar-title class="text-weight-light">
          <q-avatar>
            <img src="../../public/icondice.png" />
          </q-avatar>
          One Destiny
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-indigo-10 text-white">
      <q-toolbar class="justify-center">
        <div class="col-auto">One Destiny - 2020</div>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import BarraWindows from "../components/BarraWindows.vue";
export default {
  components: { BarraWindows },
  data() {
    return {};
  }
};
</script>
