<template>
    
    <div class="q-pa-md">
        <q-toolbar class="bg-primary text-white shadow-2 rounded-borders">

            <q-tabs v-model="tab" shrink stretch>
                <q-tab name="tab1" label="Destaques" />
                <q-tab name="tab2" label="Novas" />
                <q-tab name="tab3" label="Recomendações" />
                <q-tab name="tab4" label="De Amigos" />
            </q-tabs>
            <q-space />
             <q-input color="white" outlined v-model="text" label="Pesquisar Mesas">
        <template v-slot:append>
          <q-avatar>
            <q-icon class="fas fa-search" />
          </q-avatar>
        </template>
      </q-input>
        </q-toolbar>
    </div>

</template>


<script>
export default {
    data () {
        return {
            tab: '',
            text: ''
        }
    }
}
</script>