<template>
    <div>       

        <div class="q-pl-xl on-top col">            
            <q-btn label="Adicionar um Usuário" @click="findAndAddFriend = true"/>
            <q-btn label="Bloquear um Usuário"/>
        </div>

        <div>
            <q-card>
                <!-- Pedidos de Amizade -->
            <q-tabs
            v-model="tab"
            dense
            indicator-primary="primary"
            >
                <q-tab name="amizades"  label="Pedidos de Amizades"/>
                <q-tab name="mAmizades"  label="Pedidos de Melhores Amizades"/>
            </q-tabs>
            <q-tab-panels v-model="tab" animated>
                <q-tab-panel name="amizades">                    
                <q-card-section>
                    <div class="text-center text-h6">Pedidos de Amizade</div>
                    <div
                    class="row"
                    v-for="userRequest in allUserRequests"
                    :key="userRequest.id"
                    >
                        <div>
                            <div>
                                <q-avatar size="50px">
                                    <img v-bind:src="userRequest.userdatum.avatar" alt="">
                                </q-avatar>
                                <br />
                                <q-chip>{{ userRequest.id }}</q-chip>
                                <q-chip> Level {{ userRequest.userdatum.level }}</q-chip>
                                <p>
                                    {{ userRequest.username }} - (
                                    {{ userRequest.userdatum.nickname }} )
                                </p>
                                <q-btn label="Aceitar Usuário" @click="addThatFriend(userRequest.id)" />
                                <q-btn label="Recusar Usuário" @click="refThatFriend(userRequest.id)" />
                            </div>
                        </div>
                    </div>
                </q-card-section>
                </q-tab-panel>
                <q-tab-panel name="mAmizades">                    
                <q-card-section>
                    <div class="text-center text-h6">Pedidos de Melhores Amizade</div>
                    <div
                    class="row"
                    v-for="userRequest in allUserBFRequests"
                    :key="userRequest.id"
                    >
                        <div>
                            <div>
                                <q-avatar size="50px">
                                    <img v-bind:src="userRequest.userdatum.avatar" alt="">
                                </q-avatar>
                                <br />
                                <q-chip>{{ userRequest.id }}</q-chip>
                                <q-chip> Level {{ userRequest.userdatum.level }}</q-chip>
                                <p>
                                    {{ userRequest.username }} - (
                                    {{ userRequest.userdatum.nickname }} )
                                </p>
                                <q-btn label="Aceitar Usuário" @click="acceptThatBest(userRequest.id)" />
                                <q-btn label="Recusar Usuário" @click="refThatBest(userRequest.id)" />
                            </div>
                        </div>
                    </div>
                </q-card-section>
                </q-tab-panel>
            </q-tab-panels>
            <q-separator />
                <!-- AMIGOS -->
                <q-card-section>                    
                    <div class="text-center text-h6">Seus Amigos</div>
                    <div
                    class="row"
                    v-for="userFriend in allUserFriends"
                    :key="userFriend.id"
                    >
                        <div>
                            <div>
                                <q-avatar size="50px">
                                    <img v-bind:src="userFriend.userdatum.avatar" alt="">
                                </q-avatar>
                                <br />
                                <q-chip>{{ userFriend.id }}</q-chip>
                                <q-chip> Level {{ userFriend.userdatum.level }}</q-chip>
                                <p>
                                    {{ userFriend.username }} - (
                                    {{ userFriend.userdatum.nickname }} )
                                </p>
                                <q-btn label="Melhorar Amizade" @click="sendReqBestFriend(userFriend.id)" />
                                <q-btn label="Remover Usuário" @click="refThatFriend(userFriend.id)" />
                            </div>
                        </div>
                    </div>
                </q-card-section>
                <hr>                
                <!-- MELHORES AMIGOS -->
                <q-card-section>                    
                    <div class="text-center text-h6">Seus Melhores Amigos</div>
                    <div
                    class="row"
                    v-for="userBest in allUserBestFriends"
                    :key="userBest.id"
                    >
                        <div>
                            <div>
                                <q-avatar size="50px">
                                    <img v-bind:src="userBest.userdatum.avatar" alt="">
                                </q-avatar>
                                <br />
                                <q-chip>{{ userBest.id }}</q-chip>
                                <q-chip> Level {{ userBest.userdatum.level }}</q-chip>
                                <p>
                                    {{ userBest.username }} - (
                                    {{ userBest.userdatum.nickname }} )
                                </p>
                                <q-btn label="Remover Usuário" @click="refThatFriend(userBest.id)" />
                            </div>
                        </div>
                    </div>
                </q-card-section>
                <hr>
            </q-card>
        </div>

        
            


        <!-- FRIENDS -->
        <q-dialog v-model="findAndAddFriend">
                <q-card>
                    <div>
                    <q-form @submit="sendReqFriend">
                        Adicione um Usuário como Amigo!
                        <q-input 
                        filled 
                        clearable
                        v-model="id2"
                        label="Id do Usuário"
                        />
                        <q-input
                        filled
                        cleareble
                        v-model="username"
                        label="Username do Usuário"
                        />
                        <q-btn
                        unelevated
                        class="full-width text-weight-light"
                        size="lg"
                        color="indigo-10"
                        type="submit"
                        label="Enviar Pedido de Amizade"
                        />
                    </q-form>
                    </div>
                </q-card>
        </q-dialog>

    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

const idUser = localStorage.getItem("id");
const role = localStorage.getItem("role");

export default {
    name: 'Groups',

    data() {
        return {
            tab : "amizades",
            findAndAddFriend: false,
            id2: "",
            username: ""
        }
    },

    methods: {
        ...mapActions(["seeFriendData",
                       "requestFriend", 
                       "addFriend", 
                       "acceptBFriend",
                       "refuseFriend",
                       "upgradeFriend"]),
        sendReqFriend() {
            const reqFriends = {
                id1 : idUser,
                id2 : this.id2,
                username: this.username
            }
            location.reload();
            this.requestFriend(reqFriends);
        },        
        addThatFriend(idr) {
            const addFriend = {
                id1: idUser,
                idr: idr
            }; 
            location.reload();
            this.addFriend(addFriend);
        },
        blockThatFriend(idr) {
            const refFriend = {
                id1: idUser,
                idr: idr
            };
            location.reload();
            this.refuseFriend(refFriend);
        },
        sendReqBestFriend(idr) {
             const upFriend = {
                id1: idUser,
                idr: idr
            };
            if(role === '0') {
                if(this.countUserBestFriends < 1 ) {
                    this.upgradeFriend(upFriend)
                    location.reload();
                } else if (this.countUserBestFriends >= 1 ) {
                    alert("Não é premium! Assine o premium!")                    
                }
            } else if (role === '1') {
                this.upgradeFriend(upFriend)
                location.reload();
            }            
        },
        acceptThatBest(idr) {
           const acceptFriend = {
                id1: idUser, 
                idr: idr
            }; 
            this.acceptBFriend(acceptFriend);
            location.reload();
        }
    },

    computed: mapGetters(["allUserRequests", 
                       "allUserFriends",
                       "allUserBestFriends",
                       "allUserBFRequests",
                       "countUserBestFriends"]),
    created() {
        this.seeFriendData();
    }
    

}
</script>