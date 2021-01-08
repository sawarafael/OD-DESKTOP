<template>
    <div>       

        <q-btn label="Adicionar um Usuário" @click="addFriend = true"/>
        <q-btn label="Remover uma Amizade" />

        <h2>Amigos do Usuário</h2>


        <h2> Grupos de Amigos de Usuário </h2>
        <h4>Ainda não disponível...</h4>



        <!-- FRIENDS -->
        <q-dialog v-model="addFriend">
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
                        <q-btn
                        unelevated
                        class="full-width text-weight-light"
                        size="lg"
                        color="indigo-10"
                        label="Enviar Pedido de Amizade"
                        />
                    </q-form>
                    </div>
                </q-card>
        </q-dialog>

    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    name: 'Groups',

    data() {
        return {
            addFriend: false,
            id2: ""
        }
    },

    methods: {
        ...mapActions(["requestFriend"]),
        sendReqFriend(evt) {
            evt.preventDefault();
            this.requestFriend(this.id2);
        } 
    }
}
</script>