<template>
    <q-layout>
      <GeneralNavbar />
        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script>
import GeneralNavbar from './../components/GeneralNavbar'
export default {
  name: 'ProfileLayout',
  components: { GeneralNavbar }
}
</script>
