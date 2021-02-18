<template>
    <div class="q-pa-md row justify-center">
        <div style="width: 100%; max-width: 900px; max-height: 350px">   
            <q-card>
                <q-card-section>
                    <q-chat-message
                    :text="[sent]"
                    sent
                    />
                    <q-chat-message 
                    v-for="(msgRecebida, index) in messages" :key="index"
                    :text="[received]"
                    />
                    <q-form
                    @submit="enviarMsg()"
                    class="q-gutter-md"                    
                    >
                    <q-input
                    v-model="input"
                    filled
                    type="Sua Mensagem Aqui"
                    />
                    <q-btn icon="fas fa-reply" type="submit"/>
                    </q-form>
                </q-card-section>
            </q-card>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import { io } from 'socket.io-client';

const socket = io('http://localhost:54213')
export default {
    data() {
        return {
            input: "",
            sent: "",
            messages: []
        }
    },
    methods: {
        ...mapActions(["fetchUser"]),
        enviarMsg() {  
            console.log(this.input)
            const socket = this.$socket
            socket.emit("sendMessage", this.input)
        }
    },
    computed: mapGetters([
        "userName",
        "userDatum"
    ]),
    created() {
        this.fetchUser()
        socket.emit('chatRoom', this.input)
        socket.on('message', (test) => {
            console.log(test)
        })
    }
}
</script>