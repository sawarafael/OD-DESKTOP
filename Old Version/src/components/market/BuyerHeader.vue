<template>

    <div class="q-pa-md">
        <q-toolbar class="bg-primary text-white shadow-2 rounded-borders">

            <q-item>{{ username }}</q-item>
            <q-space />
            <q-tabs v-model="tab" >
            <q-tab class="fas fa-cart-arrow-down"  />
            </q-tabs>

        </q-toolbar>
    </div>


</template>

<script>
export default {
    data () {
        return {
            tab: '',
            username: 'user'
        }
    }
}
</script>