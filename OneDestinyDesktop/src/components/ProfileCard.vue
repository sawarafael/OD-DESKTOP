<template>
  <q-card>
    <!-- <img src="https://giffiles.alphacoders.com/121/121556.gif" alt="" />
    <div class="absolute-center">
      <div class="row">
        <div class="col-12.col-md text-h6">
          Username
        </div>
        <div class="col-12.col-md">
          <q-item-section>
            <q-avatar size="110px">
              <img src="https://i.imgur.com/MryWPyT.gif" alt="" />
              <q-badge floating color="primary">Adm</q-badge>
            </q-avatar>
          </q-item-section>
        </div>
        <div class="col-12.col-md text-right">
          Level 1
        </div>
      </div>
    </div>
    <q-card-section>
      <div class="text-h5">
        Biografia do Usuário
      </div>
      <div class="text-caption text-h6 text-grey">
        Tags do Usuário
      </div>
    </q-card-section>
    <q-separator />
    <q-card-actions align="right">
      <q-btn v-close-popup flat color="primary" label="Fechar" />
      <q-btn
        v-close-popup
        flat
        color="primary"
        @click="$router.push('/Profile')"
        label="Abrir Perfil Completo"
      />
    </q-card-actions> -->
    <q-card-section>
      <q-img src="" />
    </q-card-section>
    <q-card-section>
      <div class="row no-wrap items-center">
        <div class="col text-h6 ellipsis"></div>
        <div class="row items-center">
          <q-item-section>
            <q-avatar size="110px">
              <img src="" alt="" />
              <q-badge floating color="primary"></q-badge>
            </q-avatar>
          </q-item-section>
        </div>
      </div>
    </q-card-section>
    <q-card-section>
      <div class="text-h5">
        Biografia do Usuário
      </div>
      <div class="text-caption text-h6 text-grey">
        Tags do Usuário
      </div>
    </q-card-section>
    <q-card-actions>
      <q-btn v-close-popup flat color="primary" label="Fechar" />
      <q-btn
        v-close-popup
        flat
        color="primary"
        @click="$router.push('/Profile')"
        label="Abrir Perfil Completo"
      />
    </q-card-actions>
  </q-card>
</template>

<script>
// import http from "./../services/http";
// import store from "../store/auth";
export default {
  data() {
    // return {
    //   id: {}
    // };
  },
  mounted() {
    // http
    //   .get(`users/normal/dataview/id?${store.state.id}`, {
    //     headers: { Authorization: `token` }
    //   })
    //   .then(response => {
    //     this.id = response.data.id;
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }
};
</script>

<style></style>
