<template>
    
<div>
        <GeneralNavbar></GeneralNavbar>    


        <div class="q-pa-md">
            <div class="row items-start q-gutter-md">
                <q-responsive :ratio="4/3" class="col" style="max-height: 390px">
                        <img class="col" v-bind:src="cover">
                </q-responsive>                                      
            </div>
            <q-avatar class="col absolute-center" size="250px">
                <img v-bind:src="avatar">
            </q-avatar>
        </div>
        
        <div class="q-mt-xl col-12 text-h1">
            <div class="q-mt-xl">
                <div class="q-mt-xl row text-capitalize">
                    {{ username }}
                </div>            
                <div class="row">
                    {{ role }}
                </div>
            </div>
        </div>        
        <div class="q-mt-xl row">
            <div class="col">
                <div>
                    Sobre Mim:
                   <p>
                       {{ bio }}
                    </p> 
                </div>
                <div class="row">
                    {{ level }}
                    <div class="row">
                        Tofreús e Insignias indisponíveis.
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="q-pa-md q-gutter-sm">
                   <input v-model="inputPost" type="text" label="texte">
                   <q-btn color="primary" @click="postar()">Postar</q-btn>
                </div>
                <div>
                    Posts:                
                <div v-for="post in posts" v-bind:key="post.id">
                    
                    <p>{{ post.id }}</p>
                    <p>{{ post.content }}</p> 
                    <q-chip>{{ post.createdAt }}</q-chip>
                </div>
                </div>
            </div>
            <div class="col">
                <div>
                    Amigos:

                    <div v-for="friendD in friendDs" v-bind:key="friendD.id">
                        <q-avatar size="120px">
                            <img v-bind:src="friendD.avatar">
                        </q-avatar>
                        <p>{{ friendD.id }}</p>
                        <div v-for="friendV in friendVs" v-bind:key="friendV.id">
                        {{ friendV.username }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <q-btn label="Alterar Dados" color="primary" @click="prompt = true"/>

             <q-dialog v-model="prompt" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Atualizando</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input label="nickname" dense v-model="usernameupd" autofocus />
          <q-input label="aboutme" dense v-model="bioupd" autofocus />
          <q-input label="avatar" dense v-model="avatarupd" autofocus />
          <q-input label="capa" dense v-model="coverupd" autofocus />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancelar" v-close-popup />
          <q-btn flat label="Atualizar" v-close-popup @click="atualizar()"/>
        </q-card-actions>
      </q-card>
    </q-dialog>
        </div>

</div>


</template>

<script>
import GeneralNavbar from './../components/shared/GeneralNavbar'
export default {
    components: { GeneralNavbar },


    data () {
        return {
            username: localStorage.getItem("usern"),
            role: localStorage.getItem("userr"),
            bio: localStorage.getItem("bio"),
            level: '',
            avatar: localStorage.getItem("avatar"),
            cover: localStorage.getItem("cover"),

            inputPost: '',
            posts: {   },

            usernameupd: '',
            bioupd: '',
            avatarupd: '',  
            coverupd: '',    

            prompt: false,
            address: '',

            
            friendDs: {   },
            friendVs: {   }
        }
    },


    methods : {
       
       //Atualiza os Dados do Usuário
       atualizar() {

            var update = {
                id: localStorage.getItem("hDzseX436jkUeD99D7q3st3ZXwpAo5WIXBsspqm1nng"),
                auth: localStorage.getItem("nJKgfIOlWjeIKwR50FIBvb9-J547BANhdQPDeKumDUM"),
                username: this.usernameupd,
                bio: this.bioupd,
                avatar: this.avatarupd,
                coverPage: this.coverupd
            }

            axios.patch(`http://51.220.52.152:54213/users/normal/datachange/${update.id}`, {
                avatar: update.avatar,
                bio: update.bio,
                coverPage: update.coverPage
            }, { headers: { authorization: update.auth } }).then((resp) => {
                console.log("deu certo!")
            }).catch((err) => {
                console.log("deu erro   " + error)
            })
        },

       //Permite que o Usuário realize um Post no seu Perfil
        postar() {

            var post = {
                id: localStorage.getItem("hDzseX436jkUeD99D7q3st3ZXwpAo5WIXBsspqm1nng"),
                content: this.inputPost                
            }

            axios.post('http://localhost:3000/users/normal/user/post/new/', post, {
                headers: { authorization: localStorage.getItem("nJKgfIOlWjeIKwR50FIBvb9-J547BANhdQPDeKumDUM") }
            })
            .then((resp) => {
                console.log()
            }).catch((err) => {
                alert("Deu erro em adicionar mais uma postagem pelo usuário!")
            })
        }
  },

    mounted () {

        const dataauth = localStorage.getItem("nJKgfIOlWjeIKwR50FIBvb9-J547BANhdQPDeKumDUM")
        const id = localStorage.getItem("hDzseX436jkUeD99D7q3st3ZXwpAo5WIXBsspqm1nng")
    
    } 
}
</script>