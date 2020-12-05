<template>
    
 <div class="q-pa-md">
    <q-toolbar class="bg-primary text-white shadow-2 rounded-borders">
      <q-btn flat label="one destiny" />
      <q-btn flat label="Biblioteca" />
    <q-space />

    <q-tabs shrink stretch>
      <q-tab name="friends" @click="friends = true" label="Amigos" />
        <q-tab name="user" @click="card = true">{{ username }}</q-tab>  
        <q-tab name="notes" icon="fas fa-bell" />
        <q-tab  name="market" icon="fas fa-dollar-sign" />
        <q-tab name="config" icon="fas fa-cogs" />
     </q-tabs>
    </q-toolbar>

    <!--LISTA DE AMIZADES-->
    <q-dialog v-model="friends" position="right">
      <q-card style="width: 650px">   
        <q-card-section class="items-center no-wrap">
            <div>
              Amigos Onlines
              <q-btn label="adicionar amigo" @click="addFriend = true" />
              <div>
                amigo1
              </div>
            </div>
            <hr>
            <div>
              Chats de Conversa
              <div>
                Chat1
              </div>
            </div>
        </q-card-section>
      </q-card>
    </q-dialog>  

    <q-dialog v-model="addFriend" transition-show="scale" transition-hide="scale">
      <q-card class="bg-primary text-white" style="width: 300px">
        <q-card-section>
          <div class="text-h6">Adicionar Amigo</div>
            <div class="q-gutter-md row">
              <input v-model="searchFriend" type="text" label="Pesquisar pelo User">
            </div>
            <q-btn v-model="addFriend" label="Adicionar Usuário"/>
        </q-card-section>    
      </q-card>
    </q-dialog>

    <!--CARD DE PERFIL-->
    <q-dialog v-model="card" >
      <q-card class="my-card">
        <img v-bind:src="coverPage" />
        <div class="absolute-center">        
          <div class="row">
            <div class="col-12.col-md text-h6">
              {{ username }}
            </div>
          <div class="col-12.col-md">            
            <q-item-section>
              <q-avatar size="110px">
                <img 
                v-bind:src="avatar" />
                  <q-badge floating color="primary">{{ role }}</q-badge>
              </q-avatar>
            </q-item-section>
          </div>
        <div class="col-12.col-md text-right">
          Level {{ level }}
        </div>
          </div>
        </div>

        <q-card-section>
          <q-btn
            fab
            color="primary"
            class="absolute"
            label="Full"
            to="/Profile"
            style="top: 0; right: 12px; transform: translateY(-50%);"
          />          
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="text-h5">
            {{ bio }}
          </div>
          <div class="text-caption text-h6 text-grey">
            {{ tags }}
          </div>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn v-close-popup flat color="primary" label="fechar" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
     

</template>


<script>
import Axios from 'axios'

const users = [ 'karatian', 'bernah', 'tursman', 'eclair' ]

export default {
    data () {
    return {
      user: '',
      username: '',
      role: '',
      level: '',
      coverPage: '',
      avatar: '',

      bio: '',
      tags: 'consertarCoisas',

      
      card: false,
      friends: false,
      searchFriend: ''
    }
  },

  mounted() {

    const dataauth = localStorage.getItem("nJKgfIOlWjeIKwR50FIBvb9-J547BANhdQPDeKumDUM")
    const id = localStorage.getItem("hDzseX436jkUeD99D7q3st3ZXwpAo5WIXBsspqm1nng")

    
    axios.get('http://localhost:3000/users/normal/dataview/id', {
      headers: {
        "content-type": "application/json",
        authorization: 
         dataauth
      },
      params: {
        id: id
      }
    }).then((resp) => {
      const usern = resp.data.user_view.user_view_username;
      this.username = usern;
      localStorage.setItem("usern", usern);

      if(resp.data.user_role.user_is_free === true){
        this.role = 'User'
        const userrf = resp.data.user_role.user_is_free;
        localStorage.setItem("userr", "User") 
      } else if(resp.data.user_role.user_is_premium === true){
        this.role = 'Premium'
        const userrp = resp.data.user_role.user_is_premium;
        localStorage.setItem("userr", "Premium") 
      } else if(resp.data.user_role.user_is_mod === true){
        this.role = 'Mod' 
        const userrm = resp.data.user_role.user_is_mod;
        localStorage.setItem("userr", "Moderador(a)") 
      } else if(resp.data.user_role.user_is_adm){
        this.role = 'Adm'
        const userra = resp.data.user_role.user_is_adm;
        localStorage.setItem("userr", "Administrador(a)") 
      }
      this.level = resp.data.user_data.user_data_lvl;

      const bio = resp.data.user_data.user_data_bio;
      this.bio = bio;
      localStorage.setItem("bio", bio)

      const avatar = resp.data.user_data.user_data_avatar;
      this.avatar = avatar;
      localStorage.setItem("avatar", avatar)

      const cover = resp.data.user_data.user_data_coverPage;
      this.coverPage = cover;
      localStorage.setItem("cover", cover)

    }).catch((err) => {
      console.log("Erro" + err)
    })
  },
  
}
</script>