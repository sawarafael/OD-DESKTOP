<template>
    <q-layout>
        <BarraWindows />
        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>
<script>
import BarraWindows from "components/BarraWindows.vue"
export default {
    name: "ChatLayout",
    components: { BarraWindows }
}
</script>