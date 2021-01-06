<template>
  <div class="q-pa-md">
    <div>
      <q-toolbar class="bg-primary text-white shadow-2 rounded-borders">
        <q-btn flat label="Aventuras" @click="$router.push('/Main')" />
        <q-btn flat label="Biblioteca" @click="$router.push('/Library')" />
        <q-space />
        <q-tabs shrink stretch>
          <q-tab name="friends" label="Amigos" />
          <q-tab name="user" label="User" @click="userCard = true" />
          <q-tab name="notifications" icon="notifications">
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
            @click="$router.push('/Market')"
            icon="payments"
          />
          <q-tab name="config" icon="settings">
            <q-menu>
              <q-item>
                <q-item-section>
                  Configurações do Sistema
                </q-item-section>
                <q-item-section>
                  <q-btn color="white" text-color="black" label="Logout" />
                </q-item-section>
              </q-item>
            </q-menu>
          </q-tab>
        </q-tabs>
      </q-toolbar>

      <!-- CARD DE USER -->
      <q-dialog v-model="userCard">
        <profile-card />
      </q-dialog>
    </div>
  </div>
</template>
<script>
import ProfileCard from "./ProfileCard.vue";

// import axios from 'axios'
// const dataauth = localStorage.getItem('nJKgfIOlWjeIKwR50FIBvb9-J547BANhdQPDeKumDUM')
// const id = localStorage.getItem('hDzseX436jkUeD99D7q3st3ZXwpAo5WIXBsspqm1nng')
export default {
  components: { ProfileCard },

  data() {
    return {
      // users: {},
      // tags: {},
      // userCard: false
    };
  },
  methods: {
    // efetuarLogout() {
    //   this.$store.commit("DESLOGAR_USER");
    //   this.$router.push({ name: "/" });
    // }
  }
};
</script>
