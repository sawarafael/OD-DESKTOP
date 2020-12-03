<template>
    
<div>
        <GeneralNavbar></GeneralNavbar>    


        <div class="q-pa-md">
            <div class="row items-start q-gutter-md">
                <q-responsive :ratio="4/3" class="col" style="max-height: 390px">
                        <img class="col" src="https://thumbs.gfycat.com/BestAmusingBrant-size_restricted.gif">
                </q-responsive>                                      
            </div>
            <q-avatar class="col absolute-center" size="250px">
                <img v-bind:src="url">
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
                        Tofreús ainda indisponível.
                    </div>
                </div>
            </div>
            <div class="col">
                <div>
                    Post
                </div>
            </div>
            <div class="col">
                <div>
                    Amigos
                </div>
            </div>
        </div>
        <div>
            <q-btn label="Alterar Dados" color="primary" @click="prompt = true"/>

             <q-dialog v-model="prompt" persistent>
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Your address</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input dense v-model="usernameupd" autofocus />
          <q-input dense v-model="bioupd" autofocus />
          <q-input dense v-model="avatarupd" autofocus />
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
            url: localStorage.getItem("avatar"),

            usernameupd: '',
            bioupd: '',
            avatarupd: '',
            

            prompt: false,
            address: ''
        }
    },


    methods : {
       
       
       atualizar() {

            var update = {
                id: localStorage.getItem("hDzseX436jkUeD99D7q3st3ZXwpAo5WIXBsspqm1nng"),
                username: this.usernameupd,
                bio: this.bioupd,
                avatar: this.avatarupd,
                auth: localStorage.getItem("nJKgfIOlWjeIKwR50FIBvb9-J547BANhdQPDeKumDUM")
            }

            console.log(update.id, update.username, update.bio, update.avatar)


            axios.patch(`http://localhost:3000/users/normal/datachange/${update.id}`, {
                avatar: update.avatar,
                bio: update.bio
            }, { headers: { authorization: update.auth } }).then((resp) => {
                console.log("deu certo!")
            }).catch((err) => {
                console.log("deu erro   " + error)
            })

        }
    }


    
}
</script>