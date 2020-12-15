<template>

<div>
  <GeneralNavbar></GeneralNavbar>   
    <div>
      <div class="row">
        <div class="col-2">
          <ActiveNavbar></ActiveNavbar>
        </div>
      <div class="col">
        <RoomsNavbar></RoomsNavbar>
      <div>
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
            height="700px"
            class="text-purple rounded-borders"
          >
      <q-carousel-slide name="style" class="column no-wrap flex-center">
        <q-img
          src="https://mindcraftstories.ro/images/2020/07/Mindcraftstories_Vara-misiunilor-spre-Marte-III-NASA-Perseverance-%C8%99i-speran%C8%9Bele-de-viitor_Deschidere-v2_NASA.jpg"
          style="width: 1350px; height: 850px"
          class="rounded-borders"
        > 
          <div class="absolute-bottom text-weight-medium">
            <p>{{ title }}</p>
              {{ lorem + tags }}
          </div>
        </q-img>
      </q-carousel-slide> 
          </q-carousel>
                  </div>
                </div>
            </div>
        </div>
    </div>
</div>


</template>


<script>
import GeneralNavbar from '../components/shared/GeneralNavbar.vue'
import RoomsNavbar from '../components/shared/RoomsNavbar.vue'
import ActiveNavbar from '../components/shared/ActiveNavbar.vue'

export default {
  components: { GeneralNavbar, RoomsNavbar, ActiveNavbar },

  data () {
    return {
      controlType: 'flat',     

      title: 'titulo',
      tags: '[tag1, tag2, tag3]',
      slide: 'style',
      lorem: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo.'


    
    }
  }


  
    
}
</script>