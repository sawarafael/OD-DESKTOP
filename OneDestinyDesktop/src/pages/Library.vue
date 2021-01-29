<template>
    <div>
        <q-card>
            <q-card-section>
                <h3>
                    Sua Biblioteca, {{ userName }}
                </h3>
            </q-card-section>
            <q-separator />
                <div class="q-pl-xl on-top col">
                    <q-btn label="Criar uma nova Mesa de RPG" @click="createRoom = true"/>
                </div>
            <q-separator />
            <q-card-section>
                <div>
                    <q-card class="cardAcomp">
                        <img 
                        height="360px"
                        src="https://i.pinimg.com/originals/2d/11/a3/2d11a390094c8851ec366c4742d37f1c.jpg">
                        <q-card-section>
                            <q-chip>Tags</q-chip>
                            <q-separator />
                            <div class="text-h6">
                                Content
                            </div>
                            <q-separator />
                            <div class="text-subtitle">
                                Owner
                            </div>
                        </q-card-section>
                    </q-card>
                </div>          
            </q-card-section>
            <q-card-section>
                <h4>
                    Suas Mesas
                </h4>                   
                <div class="row"
                v-for="userroom in getUserRooms"
                :key="userroom.id"
                >                  
                    <q-card class="cardAcomp">
                        <img 
                        height="360px"
                        src="https://i.pinimg.com/originals/2d/11/a3/2d11a390094c8851ec366c4742d37f1c.jpg">
                        <q-card-section>
                            <q-chip>{{ userroom }}</q-chip><q-chip>{{ userroom.id }}</q-chip>
                            <q-separator />
                            <div class="text-h6">
                                Content
                            </div>
                            <q-separator />
                            <div class="text-subtitle">
                                Owner
                            </div>
                        </q-card-section>
                    </q-card>
                </div>
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

        <q-dialog v-model="createRoom">
            <q-card>
                <q-card-section>
                   <q-stepper
                    v-model="roomCreating"
                    ref="stepper"
                    color="primary"
                    animated
                   >
                        <q-step
                        :name="1"
                        title="Insira as Informações Principais"
                        icon="settings"
                        :done="roomCreating > 1"
                        >
                        <q-input 
                        filled
                        v-model="roomName"
                        type="roomname"
                        label="Nome da Mesa"
                        />
                        <q-input 
                        filled
                        v-model="roomContent"
                        type="roomContent"
                        label="Informações da Mesa"
                        />                            
                        </q-step>


                        <q-step
                        :name="2"
                        title="Adicione Detalhes"
                        icon="create_new_folder"
                        :done="roomCreating > 2"
                        >
                        <q-input 
                        filled
                        v-model="roomAvatar"
                        type="avatar"
                        label="Avatar da Mesa"
                        />
                        <q-input 
                        filled
                        v-model="roomTagId"
                        type="avatar"
                        label="Tag da Mesa"
                        />

                        </q-step>

                        <q-step
                        :name="3"
                        title="Revise as Informações da Mesa!"
                        icon="assignment"
                        >
                        <h5>
                            O nome da sua Mesa de RPG será esta:
                        </h5>
                        {{ roomName }}
                        <h5>
                            A informação de sua Mesa será esta:
                        </h5>
                        {{ roomContent }}
                        <h5>
                            A imagem de sua Mesa será esta:
                        </h5>
                        <img height="250px" v-bind:src="roomAvatar" alt="">
                        <h5>
                            A Tag principal de sua mesa será esta:
                        </h5>
                        {{ roomTagId }}

                        </q-step>
                        <template v-slot:navigation>
                            <q-stepper-navigation>
                                <q-btn @click="createNewRoom()" color="primary" :label="roomCreating === 3 ? 'Tá tudo Ótimo, crie a minha Mesa!' : 'Continuar'" />
                                <q-btn v-if="roomCreating > 1" flat color="primary" @click="$refs.stepper.previous()" label="Voltar" class="q-ml-sm" />
                            </q-stepper-navigation>
                        </template>
                    </q-stepper>                   
                </q-card-section>
            </q-card>
        </q-dialog>

    </div>

</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { date } from 'quasar';

const userId = localStorage.getItem("id")
export default {
  name: 'Library',
  data () {
    return {
      createRoom: false,
      roomCreating: 1,
      roomName: "",
      roomContent: "",
      roomAvatar: "",
      roomTagId: "",
      padding: true,
      arrows: true,
      skinsToggle: 'destiny',
    }
  },

  methods: {
      ...mapActions(["fetchUser",
                     "seeUserOwnRoom", 
                     "createUserRoom"]),
        createNewRoom() {
            if(this.roomCreating === 3) {
                const timeStamp = Date.now()
                const stringedFormat = date.formatDate(timeStamp, 'YYYY-MM-DD')
                
                const dataRoom = {
                    id : userId,
                    roomname : this.roomName,
                    description : this.roomContent,
                    avatar : this.roomAvatar,
                    tagsid : this.roomTagId,
                    datecreated : stringedFormat
                }
                console.log(dataRoom)
                this.createUserRoom(dataRoom);
                this.createRoom = false
            } else {
                this.$refs.stepper.next();
            }
        }
  },

  computed: mapGetters([
      "userName",
      "getUserRooms"
  ]),
  created() {
      this.fetchUser();
      this.seeUserOwnRoom();
  }

}

</script>

<style lang="sass" scoped>
.cardAcomp
    width: 345px
    max-witdh: 100%
</style>
