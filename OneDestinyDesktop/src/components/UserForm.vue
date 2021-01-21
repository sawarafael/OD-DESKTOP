<template>
  <q-card>
    <q-card-section>
      <div class="text-h6 text-center text-primary text-weight-bold">
        Edite seu perfil
      </div>
    </q-card-section>

    <q-separator />

    <q-card-section
      style="max-height: 80vh; width: 500px; max-width: 80vw;"
      class="scroll"
    >
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <div class="text-subtitle2 q-px-sm text-primary">Nome de usuário</div>
        <q-input outlined v-model="userDatum.nickname" filled />
        <div class="text-subtitle2 q-px-sm text-primary">
          Biografia
        </div>
        <q-input
          outlined
          v-model="userDatum.bio"
          type="textarea"
          filled
          :rules="[val => val.length <= 140 || 'No maximo 140 caracteres']"
        />
        <div class="text-subtitle2 q-px-sm text-primary">Avatar do perfil</div>
        <q-file
          v-model="userDatum.avatar"
          filled
          outlined
          use-chips
          style="max-width: 300px"
        />
        <div class="text-subtitle2 q-px-sm text-primary">Capa de perfil</div>
        <q-file
          v-model="userDatum.coverPage"
          filled
          outlined
          use-chips
          style="max-width: 300px"
        />
      </q-form>
    </q-card-section>

    <q-separator />

    <q-card-actions align="right">
      <q-btn flat label="Fechar" color="primary" v-close-popup />
      <q-btn
        flat
        label="Confirmar"
        color="primary"
        type="submit"
        v-close-popup
      />
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  name: "UserForm",
  data() {
    return {
      userDatum: {}
    };
  },
  methods: {
    onSubmit: async function() {
      const userDatum = this.userDatum;
      this.$store
        .dispatch("sendUserData", userDatum)
        .catch(error => console.log(error));
    },
    onReset: function() {
      alert("A form foi resetada");
    }
  }
};
</script>

<style></style>
