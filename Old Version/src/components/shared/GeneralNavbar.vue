<template>
    
 <div class="q-pa-md">
    <div v-for="user in users" v-bind:key="user.id">
    <q-toolbar class="bg-primary text-white shadow-2 rounded-borders">
      <q-btn flat label="one destiny" />
      <q-btn flat label="Biblioteca" />
    <q-space />

    <q-tabs shrink stretch>
      <q-tab name="friends" @click="friends = true" label="Amigos" />
        <q-tab name="user" @click="card = true">{{ user.username }}</q-tab>  
        <q-tab name="notes" @click="showRequestFriends" icon="fas fa-bell">
          <q-menu>
          <q-list style="min-width: 100px">
            <q-item clickable v-close-popup>
                <q-item-section>{{ NewRequestFriends }} quer ser seu amigo(a)! 
                  <q-btn @click="acceptNewRequestFriends()" label="aceitar" /> 
                  <q-btn @click="refuseNewRequestFriends()" label="recusar" /></q-item-section>
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
              Grupos de Conversa
              <div>
                Botão para levar o usuário para a tela de grupos de conversa
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
            <q-btn @click="findFriend()" label="Adicionar Usuário"/>
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
              {{ user.username }}
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
          Level {{ user.userdatum.level }}
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
            {{ user.userdatum.bio }}
          </div>
          <div class="text-caption text-h6 text-grey" v-for="tag in tags" v-bind:key="tag.id">
            {{ tag.title }}
          </div>
        </q-card-section>

        <q-separator />

        <q-card-actions align="right">
          <q-btn v-close-popup flat color="primary" label="fechar" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
 </div>
     

</template>


<script>
import Axios from 'axios'

 const dataauth = localStorage.getItem("nJKgfIOlWjeIKwR50FIBvb9-J547BANhdQPDeKumDUM")
 const id = localStorage.getItem("hDzseX436jkUeD99D7q3st3ZXwpAo5WIXBsspqm1nng")
 const idFriend = localStorage.getItem("idFriend")

export default {
    data () {
    return {
      user: '',
      users: { },
      role: '',
      level: '',
      coverPage: '',
      avatar: '',

      bio: '',
      tags: {  },

      
      card: false,
      friends: false,
      searchFriendUsername: '',
      searchFriendID: '',
      addFriends: false,

      friendAvatar: '',
      friendUsername: '',
      
      NewRequestFriends: '',
    }
  },

  mounted() {   
    
    axios.get('http://31.220.52.152:54213/users/normal/dataview/id', {
      headers: {
        "content-type": "application/json",
        authorization: 
         dataauth
      },
      params: {
        id: id
      }
    }).then((resp) => {

      console.log(resp.data.userd)

      const userPerfil = {
        username    : resp.data.userd.map(x => x.username),
        level       : resp.data.userd.map(x => x.userdatum.level),
        bio         : resp.data.userd.map(x => x.userdatum.bio),
        avatar      : resp.data.userd.map(x => x.userdatum.avatar),
        cover       : resp.data.userd.map(x => x.userdatum.coverPage)
      }     

      this.users      = resp.data.userd;
      this.bio        = userPerfil.bio;
      this.level      = userPerfil.level;
      this.avatar     = userPerfil.avatar;
      this.coverPage  = userPerfil.cover;

      localStorage.setItem("usern", userPerfil.username);
      localStorage.setItem("bio", userPerfil.bio);
      localStorage.setItem("avatar", userPerfil.avatar);
      localStorage.setItem("cover", userPerfil.cover);

    }).catch((err) => {
      console.log(err)
    })
   
  },  

  methods: {

    findFriend() {

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

          friendStatusRequest.forEach(userFriendData => {  
          
            axios.get('http://localhost:3000/users/normal/dataview/id', {
            headers: {
              authorization: dataauth
            },
            params: {
              id: userFriendData.idFriend
            }
          }).then((respD) => {              
              
              const verfiyId = respD.data.user_view.user_view_id    
              const userFriendName = respD.data.user_view.user_view_username 

          if(userFriendData.status == 0) {
               if(verfiyId != id) {
                this.NewRequestFriends = userFriendName
                localStorage.setItem("idFriend", verfiyId)
              } else {
                this.NewRequestFriends = 'Sem requisições ou pedidos de amizade ainda...'
              }
          } else {
              this.NewRequestFriends = 'Sem requisições ou pedidos de amizade ainda...'
          }
             

          }).catch((err) => {
            console.log(err)
          })
          })
      }).catch((err) => {
        console.log(err)
      })
    },

    acceptNewRequestFriends(){

      const requestAccept = {        
        action: `O Usuário ID ${id} aceitou a requisição de amizade do Usuário ID ${idFriend}`,
        id1: id,
        id2: idFriend
      }

      axios.patch(`http://localhost:3000/users/normal/friend/update/1`, {
        action: requestAccept.action,
        id1: requestAccept.id1,
        id2: requestAccept.id2
      }, { headers: {authorization: dataauth} }).then((resp) => {
        console.log("Usuário foi aceitado!");
      }).catch((err) => {
        console.log(err)
      })
        
    },

    refuseNewRequestFriends(){

        console.log("recusado!")
    }
  }      

}
</script>