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
          <q-tab name="Grupos" label="Grupos" @click="drawerRight = !drawerRight" />
          <q-tab name="Perfil" label="Perfil" @click="userCard = true" />
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
            <q-menu transition-show="scale" transition-hide="scale">
              <q-list style="min-width: 150px">
                <q-item-section>
                  <q-btn
                    unelevated
                    icon="fas fa-adjust"
                    label="Dark Mode"
                    @click="turnOnDarkMode()"
                  ></q-btn>

                  <q-btn unelevated label="Logout" @click.prevent="logout()" />
                </q-item-section>
              </q-list>
            </q-menu>
          </q-tab>
        </q-tabs>
      </q-toolbar>

      <!-- CARD DE USER -->
      <q-dialog v-model="userCard">
        <user-card />
      </q-dialog>

      <!-- LISTA DE AMIGS -->
      <q-drawer
      side="right" 
      class="friendList"
      v-model="drawerRight"
      :width="250"
      :breakpoint="1100"
      content-class="bg-primary text-white"
      >
        <friend-list />     
      </q-drawer>  
    </div>
  </div>
</template>
<script>
// import axios from 'axios'
// const dataauth = localStorage.getItem('nJKgfIOlWjeIKwR50FIBvb9-J547BANhdQPDeKumDUM')
// const id = localStorage.getItem('hDzseX436jkUeD99D7q3st3ZXwpAo5WIXBsspqm1nng')

import { mapGetters, mapActions } from "vuex";
import UserCard from "./UserCard.vue";
import FriendList from "./FriendList"
export default {
  components: { UserCard, FriendList },
  data() {
    return {
      userdatum: {},
      tags: {},
      userCard: false,
      drawerRight: false
    };
  },

  methods: {
    ...mapActions(["fetchUser"]),
    logout: function() {
      this.$store.dispatch("logout").then(this.$router.push("/"));
    },
    turnOnDarkMode: function() {
      this.$q.dark.toggle();
    }
  },

  computed: mapGetters(["userDatum", "userName"]),
};
</script>
