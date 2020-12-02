<template>


  <div class="q-pa-md">
    <div class="q-gutter-md">
      <q-carousel
        v-model="slide"
        transition-prev="scale"
        transition-next="scale"
        swipeable
        animated
        control-color="white"
        navigation
        padding
        arrows
        height="900px"
        class="bg-primary text-white shadow-1 rounded-borders"
      >
        <q-carousel-slide name="style" class="column no-wrap flex-center">
          <h1>{{ title }}</h1>
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="tv" class="column no-wrap flex-center">
          <h1>{{ title }}</h1>
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="layers" class="column no-wrap flex-center">
          <h1>{{ title }}</h1>
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="map" class="column no-wrap flex-center">
          <h1>{{ title }}</h1>
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </div>

</template>

<style>
</style>

<script>
export default {
  name: 'HelloWorld',

  data () {
    return {
      slide: 'style',
      lorem: null,
      title: ''
    }
  },

  mounted() {

    axios.get('http://localhost:3000/articles/view/all').then((resp) => {
    
    this.title = resp.data.data[1].title
    this.lorem = resp.data.data[1].body
     
    }).catch((err) => {
      console.log(err)
    })

  },
}
</script>
