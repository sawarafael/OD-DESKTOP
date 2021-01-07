<template>
    <q-layout>
        <GeneralNavbar />
    <q-page-container>
        <router-view />
    </q-page-container>
    </q-layout>
</template>
<script>

import GeneralNavbar from 'components/GeneralNavbar.vue'
export default {
  name: 'LibraryLayout',
  components: { GeneralNavbar }
}
</script>
