<template>
    <div>
    <div class="q-ml-xl q-mr-xl">
        <q-img src="https://giffiles.alphacoders.com/121/121556.gif" height="590px"/>
            <q-avatar class="col absolute-center" size="250px">
                <img src="https://i.imgur.com/MryWPyT.gif" alt="">
            </q-avatar>
    </div>

    <div class="q-mt-xl col-12 text-h1">
        <div class="q-mt-xl">
            Username
        </div>
        <div class="text-h3">
            Role
        </div>
        <div class="q-mt-xl row text-h5">
            <div class="col">
                <div>
                    Sobre mim:
                    <p>
                        Biografia
                    </p>
                </div>
                <div>
                    Level
                    <div>
                        Tofreús, Insígnias e Medalhas
                    </div>
                </div>
            </div>
            <div class="col">
                <div>
                    <input type="text" aria-label="postagem">
                    <br>
                    <q-btn color="primary" label="Postar!" />
                </div>
                <div>
                    Posts:
                    <div>
                        <p>Id do Post</p>
                        <p>Conteúdo do Post</p>
                        <q-chip>Data do Post</q-chip>
                    </div>
                </div>
            </div>            
                Amigos:
            <div class="col"
            v-for="userFriendsName in allUserFriendsName"            
            :key="userFriendsName.id"
            >
                <div>
                    <div>
                        <q-avatar size="120px">
                            <img v-bind:src="userFriendsName.userdatum.avatar" alt="">
                        </q-avatar>
                        <br>
                        <q-chip>{{ userFriendsName.id }}</q-chip>
                        <q-chip>Level {{ userFriendsName.userdatum.level }}</q-chip>
                        <p>{{ userFriendsName.username }} - ( {{ userFriendsName.userdatum.nickname }} )</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: 'Profile',

  methods: {
      ...mapActions(["seeFriendData"]),
  },

  computed: mapGetters(["allUserFriendsName"]),
  created() {
      this.seeFriendData()
  }
  
      
}
</script>
