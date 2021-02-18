<template>
    <div>
        <q-card>
            <q-card-section>
                <h3>
                    Sua Biblioteca, {{ userName }}
                </h3>
            </q-card-section>
            <q-card-section>                
                <h4>
                    Mesas que Acompanha
                </h4>   
            </q-card-section>
            <q-card-section>
                <h4>
                    Suas Mesas
                </h4>
            </q-card-section>
            <q-card-section>
                <h4>
                    Suas Skins
                </h4>                
                <q-btn-toggle 
                v-model="skinsToggle"
                push
                glossy
                toggle-color="primary"
                :options="[
                {label: 'One Destiny', value: 'destiny'},
                {label: '2ic', value: '2ic'}                
                ]"
                />        
            </q-card-section>
        </q-card>
    </div>

</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: 'Library',
  data () {
    return {
      slide: 'style',
      skinsToggle: 'destiny'
    }
  },

  methods: {
      ...mapActions(["fetchUser"])
  },

  computed: mapGetters([
      "userName"
  ]),
  created() {
      this.fetchUser();
  }

}

</script>
