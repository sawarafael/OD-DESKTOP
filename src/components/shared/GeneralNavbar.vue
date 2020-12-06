<template>
    
 <div class="q-pa-md">
    <q-toolbar class="bg-primary text-white shadow-2 rounded-borders">
      <q-btn flat label="one destiny" />
      <q-btn flat label="Biblioteca" />
    <q-space />

    <q-tabs shrink stretch>
      <q-tab name="friends" @click="friends = true" label="Amigos" />
        <q-tab name="user" @click="card = true">{{ username }}</q-tab>  
        <q-tab name="notes" @click="showRequestFriends" icon="fas fa-bell">
          <q-menu>
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup>
              <q-item-section>{{ NewRequestFriend }} enviou um pedido de Amizade para Você! <q-btn label="Aceitar" @click="" /><q-btn label="Recusar" /> </q-item-section>
            </q-item>
          </q-list>
          </q-menu>
        </q-tab>
        <q-tab  name="market" icon="fas fa-dollar-sign" />
        <q-tab name="config" icon="fas fa-cogs">
         <q-menu>
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup>
              <q-item-section>Resolução de Tela</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>Reportar Abuso</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup>
              <q-item-section>Informar Bug</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>Encerrar Sessão</q-item-section>
            </q-item>
            <q-item clickable v-close-popup>
              <q-item-section>Ajuda &amp; Feedback</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
        </q-tab>

     </q-tabs>
    </q-toolbar>

    <!--LISTA DE AMIZADES-->
    <q-dialog v-model="friends" position="right">
      <q-card style="width: 650px">   
        <q-card-section class="items-center no-wrap">
            <div>
              Amigos Onlines
              <q-btn label="adicionar amigo" @click="addFriends = true" />
              <div class="row">
                <q-avatar>
                  <img v-bind:src="friendAvatar" alt="">
                </q-avatar>
                <p>{{ friendUsername }}</p>
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

    <q-dialog v-model="addFriends" transition-show="scale" transition-hide="scale">
      <q-card class="bg-primary text-white" style="width: 300px">
        <q-card-section>
          <div class="text-h6">Adicionar Amigo</div>
            <div class="q-gutter-md row">
              <q-input label="Pesquisar pelo nome do usuário" v-model="searchFriendUsername" />
              <q-input label="Pesquisar pelo ID do usuário" v-model="searchFriendID" />
            </div>
            <q-btn @click="encontrar()" label="Adicionar Usuário"/>
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

 const dataauth = localStorage.getItem("nJKgfIOlWjeIKwR50FIBvb9-J547BANhdQPDeKumDUM")
 const id = localStorage.getItem("hDzseX436jkUeD99D7q3st3ZXwpAo5WIXBsspqm1nng")

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
      tags: 'tag1, tag2, tag3',

      
      card: false,
      friends: false,
      searchFriendUsername: '',
      searchFriendID: '',
      addFriends: false,

      friendAvatar: '',
      friendUsername: '',

      notifications: false,
      NewRequestFriend: {  }
    }
  },

  mounted() {   
    
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

      const userPerfil = {
        username    : resp.data.user_view.user_view_username,
        role        : [resp.data.user_role.user_is_free, resp.data.user_role.user_is_premium, resp.data.user_role.user_is_mod, resp.data.user_role.user_is_adm],
        level       : resp.data.user_data.user_data_lvl,
        bio         : resp.data.user_data.user_data_bio,
        avatar      : resp.data.user_data.user_data_avatar,
        cover       : resp.data.user_data.user_data_coverPage
      }     
      
      this.username   = userPerfil.username;
      this.bio        = userPerfil.bio;
      this.level      = userPerfil.level;
      this.avatar     = userPerfil.avatar;
      this.coverPage  = userPerfil.cover;

      localStorage.setItem("usern", userPerfil.username);
      localStorage.setItem("bio", userPerfil.bio);
      localStorage.setItem("avatar", userPerfil.avatar);
      localStorage.setItem("cover", userPerfil.cover);

      if(userPerfil.role[0] === true){
        this.role = 'User'
        localStorage.setItem("userr", "User") 
      } else if(userPerfil.role[1] === true){
        this.role = 'Premium'
        const userrp = resp.data.user_role.user_is_premium;
        localStorage.setItem("userr", "Premium") 
      } else if(userPerfil.role[2] === true){
        this.role = 'Mod' 
        localStorage.setItem("userr", "Moderador(a)") 
      } else if(userPerfil.role[3] === true){
        this.role = 'Adm'
        localStorage.setItem("userr", "Administrador(a)") 
      }
    }).catch((err) => {
      console.log(err)
    })



    
  },
  

  methods: {

    encontrar() {

      var search = {
        id1       : id,
        id2       : this.searchFriendID,
        usernamer : this.searchFriendUsername,
        action    : `O Usuário ID ${id} enviou uma requisição de amizade para o Usuário ID ${this.searchFriendID}`
      }

      axios.post('http://localhost:3000/users/normal/friend/request', search, {
        headers: { authorization: localStorage.getItem("nJKgfIOlWjeIKwR50FIBvb9-J547BANhdQPDeKumDUM")}
      })
      .then((resp) => {
        console.log(resp)
      }).catch((err) => {
        console.log(err)
      })
    },


    showRequestFriends() {      
      axios.get('http://localhost:3000/users/normal/friend/view/id', {
        headers: {
          "content-type": "application/json",
          authorization: dataauth 
        },
        params: {
          id: id
        }
      }).then((respF) => {
          
          const friendStatusRequest = respF.data.user_friends
          const userRequested = respF.data.id_user

          console.log(respF)

          friendStatusRequest.forEach(userFriendData => {  
            
            console.log(userFriendData, userRequested)
          
          
          
          });

          
      }).catch((err) => {
        console.log(err)
      })
    }
  }



}
</script>