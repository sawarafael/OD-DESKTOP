<template>
  <q-page class="">
    <div class="row">
      <div class="col-2">
      <ActiveNavbar />
      </div>
      <div class="col-10">
        <div class="q-pl-xl q-pr-xl">
          <q-toolbar class="bg-primary text-white shadow-2 rounded-borders">
            <q-tabs shrink stretch v-model="tab">
              <q-tab name="des" label="Destaques" />
              <q-tab name="nov" label="Novas"/>
              <q-tab name="rec" label="Recomendações" />
              <q-tab name="dea" label="De Amigos" />
            </q-tabs>
            <q-space />
            <q-input color="white" outlined label="Pesquisar por uma mesa" >
            <template v-slot:append>
              <q-avatar>
                <q-icon class="search" />
              </q-avatar>
            </template>
            </q-input>
          </q-toolbar>
        </div>
        <div class="q-pa-md">
          <q-carousel
          v-model="slide"
          swipeable
          animated
          :control-type="controlType"
          control-color="primary"
          navigation
          padding
          arrows
          height="500px"
          class="text-purple rounded-borders"
          >
          <q-carousel-slide>
            <q-img
            src="https://mindcraftstories.ro/images/2020/07/Mindcraftstories_Vara-misiunilor-spre-Marte-III-NASA-Perseverance-%C8%99i-speran%C8%9Bele-de-viitor_Deschidere-v2_NASA.jpg"
            style="width: 135px; height: 850px"
            class="rounded-borders"
            >
            <div class="absolute-bottom text-weight-medium">
              <p>Título</p>
              Descrição + Tags
            </div>
            </q-img>
          </q-carousel-slide>
          </q-carousel>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import ActiveNavbar from '../components/ActiveNavbar.vue'
import { mapActions } from 'vuex'
export default {
  name: 'PageIndex',
  components: { ActiveNavbar }, 
  data () {
    return {
      tab: "des",
      slide: 'style',
      controlType: 'flat'
    }
  },
  methods: {
    ...mapActions(["isThisUserOnline"])
  }
}
</script>
