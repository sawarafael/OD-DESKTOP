<template>
  
  <div class="row">
    <div class="col-9">
      <News></News>
    </div>
    <div class="col">
       <div class="q-pa-md row items-start q-gutter-md">
        <q-card class="my-card">
          <q-card-section>
        
            <q-form
            @submit="login()"
            class="q-gutter-md"
            >
              <q-input v-model="username" label="Username" :dense="dense" />
              <q-input v-model="password" label="Password" type="password" :dense="dense" />
              <q-btn label="Login" type="submit" color="primary"/>
              <br>
              <a href="">Esqueci minha senha</a>
            </q-form>        
          </q-card-section>
          {{ version }}
    </q-card>        
       </div>
    </div>
    

     
  </div>


</template>

<script>
import News from '../components/News.vue'
import Axios from 'axios'
import VueRouter from 'vue-router'

export default {
  components: { News },
  name: 'Home',

  data () {
    return {
      username: '',
      password: '',
      ph: '',
      version: '1.0.0v',
      

      dense: false
    }
  },    

  methods: {
    login() {

      var credentials = {
        username : this.username,
        password : this.password
      }
     
     //https://31.220.52.152:54213/

     //nota: O Chromium não vai permitir fazer request pois 
     //como o SSL não é autentificado por um terceiro, ele acredita que seja
     //um site hostil, então para trabalhar não pode usar o desktop e sim web desse app
     //npm run serve ==> website
     //npm run electron:serve ==> desktop

     axios.post('url', credentials, {
       httpsAgent: false
     })
     .then((resp) => {      
       
       //Sempre use o console para ver que tipos de dados está lhe retornando
       //console.log(resp.data)

     }).catch((err) => {
       console.log("Não passou" + err)
     })

    }
  }
}
</script>
