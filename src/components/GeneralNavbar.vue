<template>
<div class="q-pa-md">
  <div>
    <q-toolbar class="bg-primary text-white shadow-2 rounded-borders">
      <q-btn flat label="Aventuras" @click="$router.push('/Main/main')" />
      <q-btn flat label="Biblioteca" @click="$router.push('/Library/library')"/>
      <q-space />
      <q-tabs shrink stretch>
        <q-tab name="friends" label="Amigos" />
        <q-tab name="user" label="User" @click="userCard = true"/>
        <q-tab name="notifications" icon="notifications">
          <q-menu>
            <q-list style="min-width: 100px">
              <q-item>
                Requests e Notificações!
              </q-item>
            </q-list>
          </q-menu>
        </q-tab>
        <q-tab name="market" @click="$router.push('/Market/market')" icon="payments"/>
        <q-tab name="config" icon="settings">
          <q-menu>
            <q-item>
              <q-item-section>
                Configurações do Sistema
              </q-item-section>
            </q-item>
          </q-menu>
        </q-tab>
      </q-tabs>
    </q-toolbar>

    <!-- CARD DE USER -->
    <q-dialog v-model="userCard">
      <q-card>
        <img src="https://giffiles.alphacoders.com/121/121556.gif" alt="">
        <div class="absolute-center">
          <div class="row">
            <div class="col-12.col-md text-h6">
              Username
            </div>
          <div class="col-12.col-md">
            <q-item-section>
              <q-avatar size="110px">
                <img src="https://i.imgur.com/MryWPyT.gif" alt="">
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
          <q-btn v-close-popup flat color="primary" @click="$router.push('/profile/profile')" label="Abrir Perfil Completo" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</div>
</template>
<script>
// import axios from 'axios'
// const dataauth = localStorage.getItem('nJKgfIOlWjeIKwR50FIBvb9-J547BANhdQPDeKumDUM')
// const id = localStorage.getItem('hDzseX436jkUeD99D7q3st3ZXwpAo5WIXBsspqm1nng')
export default {
  data () {
    return {
      users: { },
      tags: {},
      userCard: false
    }
  }

}
</script>
