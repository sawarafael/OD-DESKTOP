<template>
  <q-page class="MainPage">
    <q-tabs
      v-model="tab"
      align="left"
      class="room-tabs bg-primary text-white shadow-2"
    >
      <q-tab name="destaque" label="Destaque" />
      <q-tab name="novas" label="Novas" />
      <q-tab name="recomendados" label="Recomendados" />
      <q-tab name="amigos" label="De Amigos" />
    </q-tabs>
    <q-tab-panels v-model="tab" animated class="shadow-2 rounded-borders">
      <q-tab-panel name="destaque">
        <div class="text-h6">Destaque</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </q-tab-panel>
      <q-tab-panel name="novas">
        <div class="text-h6">Novas</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </q-tab-panel>
      <q-tab-panel name="recomendados">
        <div class="text-h6">Recomendados</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </q-tab-panel>
      <q-tab-panel name="amigos">
        <div class="text-h6">De Amigos</div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </q-tab-panel>
    </q-tab-panels>
  </q-page>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "HomePage",

  data() {
    return {
      tab: "destaque"
    };
  },

  methods: {
    ...mapActions(["fetchRoomPlaying"])
  },

  computed: {
    ...mapGetters(["roomID", "roomName"])
  },

  created() {
    this.fetchRoomPlaying();
  }
};
</script>

<style lang="sass" scoped>
.room-tabs
  margin-left: 2em
  margin-right: 2em
  border-radius: 5px
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px
</style>
