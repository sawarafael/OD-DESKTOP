<template>
  <q-card class="my-card">
    <q-card-section>
      <div class="col-6">
        <q-img
          src="https://pbs.twimg.com/media/Eljq4M_WoAAWHQp.jpg"
          class="cover-image"
          native-context-menu
        />
        <div>
          <q-btn round class="absolute" style="top: 160px; right: 220px;">
            <q-avatar size="5em">
              <img
                src="https://i.pinimg.com/564x/84/e2/49/84e2493bf512671ce27e6f86abc03e7d.jpg"
                alt="Seu avatar"
                class="user-avatar"
              />
            </q-avatar>
          </q-btn>
        </div>
      </div>
    </q-card-section>
    <q-card-section class="q-pa-md q-ma-md">
      <div class="text-h6">{{ userDatum[0].nickname }}</div>
      <div class="text-subtitle2 ">Level: {{ userDatum[0].level }}</div>
    </q-card-section>
    <q-card-section>
      <div class="text-subtitle1">Bio</div>
      <div class="text-body2">{{ userDatum[0].bio }}</div></q-card-section
    >
    <q-card-actions align="right">
      <q-btn v-close-popup flat color="primary" label="Fechar" />
      <q-btn
        v-close-popup
        flat
        color="primary"
        @click="$router.push('/profile/profile')"
        label="Abrir Perfil Completo"
      />
    </q-card-actions>
  </q-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["userID", "userName", "userDatum"])
  },
  methods: {
    ...mapActions(["fetchUser"])
  },
  created() {
    this.fetchUser();
  }
};
</script>

<style lang="sass" scoped>
.my-card
  border-radius: 20px
  width: 100%
  max-width: 500px
  text-align: center

.user-avatar
    top: auto

.cover-image
    border-radius: 10px
</style>
