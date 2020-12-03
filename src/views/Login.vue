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
     
     axios.post('http://localhost:3000/users/normal/signin', credentials)
     .then((resp) => {      
       var token = resp.data.token;
       var id = resp.data.id

       localStorage.setItem("hDzseX436jkUeD99D7q3st3ZXwpAo5WIXBsspqm1nng", id);
       localStorage.setItem("nJKgfIOlWjeIKwR50FIBvb9-J547BANhdQPDeKumDUM", token)

     }).catch((err) => {
       console.log("Não passou" + err)
     })
    }
  }
}
</script>
