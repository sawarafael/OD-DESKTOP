<template>
  <q-card class="my-card">
    <img src="https://cdn.quasar.dev/img/mountains.jpg" />
    <q-card-section>
      <div class="text-h6">{{ userData.nickname }}</div>
      <div class="text-subtitle2">{{ userData.level }}</div>
    </q-card-section>
    <q-card-section>
      {{ userData.bio }}
    </q-card-section>
  </q-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["userData"])
  },
  methods: {
    ...mapActions(["fetchUser"])
  },
  created() {
    this.fetchUser();
  }
};
</script>

<style></style>
