<template>
  <div class="q-pa-md">
    <div>
      <q-toolbar class="bg-primary text-white shadow-2 rounded-borders">
        <q-btn flat label="Aventuras" @click="$router.push('/Main/main')" />
        <q-btn
          flat
          label="Biblioteca"
          @click="$router.push('/Library/library')"
        />
        <q-space />
        <q-tabs shrink stretch>
          <q-tab name="Grupos" label="Grupos" @click="friends = true" />
          <q-tab
            :name="userData.nickname"
            label="User"
            @click="userCard = true"
          />
          <q-tab name="Notifications" icon="notifications">
            <q-menu>
              <q-list style="min-width: 100px">
                <q-item>
                  Requests e Notificações!
                </q-item>
              </q-list>
            </q-menu>
          </q-tab>
          <q-tab
            name="market"
            @click="$router.push('/Market/market')"
            icon="payments"
          />
          <q-tab name="config" icon="settings">
            <q-menu>
              <q-item>
                <q-item-section>
                  <q-btn
                    color="white"
                    text-color="black"
                    label="Logout"
                    @click.prevent="logout()"
                  />
                </q-item-section>
              </q-item>
            </q-menu>
          </q-tab>
        </q-tabs>
      </q-toolbar>

      <!-- CARD DE USER -->
      <q-dialog v-model="userCard">
        <user-card />
      </q-dialog>

      <!-- LISTA DE AMIGS -->
      <q-dialog v-model="friends">
        <q-card style="width: 650px">
          <q-card-section class="items-center no-wrap">
            Amigos Onlines
            <div v-for="userFriend in allUserFriends" :key="userFriend.id">
              <div class="row">
                <q-avatar>
                  <img v-bind:src="userFriend.userdatum.avatar" alt="" />
                </q-avatar>
                <p>{{ userFriend.username }}</p>
              </div>
            </div>
            <hr />
            <div>
              Grupos de Conversa
              <div>
                <q-btn
                  label="Ir aos Grupos de Amigos"
                  @click="$router.push('/groups/groups')"
                />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </q-dialog>
    </div>
  </div>
</template>
<script>
// import axios from 'axios'
// const dataauth = localStorage.getItem('nJKgfIOlWjeIKwR50FIBvb9-J547BANhdQPDeKumDUM')
// const id = localStorage.getItem('hDzseX436jkUeD99D7q3st3ZXwpAo5WIXBsspqm1nng')

import { mapGetters, mapActions } from "vuex";
import UserCard from "./UserCard.vue";

export default {
  components: { UserCard },
  data() {
    return {
      users: {},
      tags: {},
      userCard: false,
      friends: false
    };
  },

  methods: {
    ...mapActions(["fetchUser"]),
    logout: function() {
      this.$store.dispatch("logout").then(this.$router.push("/"));
    }
  },

  computed: mapGetters(["allUserFriends", "userData"]),
  created() {
    this.fetchUser();
  }
};
</script>
