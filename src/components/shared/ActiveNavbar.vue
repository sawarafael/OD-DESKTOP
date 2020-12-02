<template>
    
    <div>
        <q-splitter 
        v-model="splitterModel"
        style="height: 790px"
        >

    
 
    <q-tabs
          v-model="tab"
          vertical
          class="text-teal"
        >
          <q-tab><q-img
          src="https://cdn3.dualshockers.com/wp-content/uploads/2020/04/FFVIIR-tifa-ds1-1340x1340.jpg"
          style="width: 220px"
          rounded-borders
        >
          <div class="absolute-bottom text-subtitle1 text-center">
            <p>Final Fantasy 7</p>
            <p>Fantasia Aventura</p>
            
          </div>
        </q-img>
          </q-tab>
          <q-tab>
          <q-img
          src="https://pbs.twimg.com/media/C3zyS2DWEAE1aHK.jpg"
          style="width: 220px"
          rounded-borders
        >
          <div class="absolute-bottom text-subtitle1 text-center">
            <p>Nier Automata</p>
            <p>Aventura Apocalipse</p>
          </div>
        </q-img>
          </q-tab>
          <q-tab>
          <q-img
          src="https://i.pinimg.com/originals/83/d1/14/83d11486b6af10b679c8f55cbc0fd51c.jpg"
          style="width: 220px"
          rounded-borders
        >
          <div class="absolute-bottom text-subtitle1 text-center">
            <p>Fate Stay Night</p>
            <p>Battle Royale</p>
          </div>
        </q-img>
          </q-tab>

          <q-tab>
          <q-img
          src="https://cdn140.picsart.com/330464299061201.jpg?type=webp&to=crop&r=256"
          style="width: 220px"
          rounded-borders
        >
          <div class="absolute-bottom text-subtitle1 text-center">
            <p>Heh</p>
            <p>Taverna</p>
          </div>
        </q-img>
          </q-tab>
        </q-tabs>
        
        </q-splitter>
        </div>

</template>


<script>
export default {
    data () {
        return {
            tab: '',
            splitterModel: 50
        }
    }
}
</script>