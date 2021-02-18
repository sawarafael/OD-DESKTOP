<template>
    <div class="q-pa-md">
            <div
            class="q-ml-xl"
            >   
                <q-btn icon="fas fa-arrow-circle-left"/>
                <q-btn icon="fas fa-user-friends" @click="$router.push('/groups/groups')"/>
            </div>
        <q-separator />
        <div class="row q-mt-xl">
            <div class="col">
            </div>
            <div class="col-12">
                <q-card>
                    <q-list>
                        <q-expansion-item
                        expand-separator
                        label="Online"
                        >
                        <div                        
                        v-for="userFriend in allUserFriends"
                        :key="userFriend.id"
                        class="p-ml-xl">
                        <q-btn @click="openChatWindow()">
                            <q-card>
                                    <q-avatar size="90px">
                                        <img v-bind:src="userFriend.userdatum.avatar" alt="">
                                        <q-badge floating color="teal">Online</q-badge>
                                    </q-avatar>
                                    <q-separator />
                                    <div class="text-h4"> 
                                        {{ userFriend.username }}
                                    </div>
                            </q-card>
                        </q-btn>
                        </div>
                        </q-expansion-item>
                        <q-expansion-item
                        label="Melhores Amigos"
                        >                            
                        <div                        
                        v-for="userBFriend in allUserBestFriends"
                        :key="userBFriend.id"
                        class="p-ml-xl">
                        <q-btn @click="openChatWindow()">
                            <q-card>
                                    <q-avatar size="90px">
                                        <img v-bind:src="userBFriend.userdatum.avatar" alt="">
                                        <q-badge floating color="teal">Online</q-badge>
                                    </q-avatar>
                                    <q-separator />
                                    <div class="text-h4"> 
                                        {{ userBFriend.username }}
                                    </div>
                            </q-card>
                        </q-btn>
                        </div>
                        </q-expansion-item>
                    </q-list>
                </q-card>
            </div>
            <div class="col">

            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    data () {
        return {
        }
    },
    computed: mapGetters(["allUserFriends", "allUserBestFriends"]),

    methods: {
        async openChatWindow () {
            if (this.$q.platform.is.electron) {
                const { ipcRenderer } = require('electron')
                ipcRenderer.send('open-chat-window')
            }
        }
    }
}
</script>