<template>
  <q-card>
    <q-card-section>
      <div class="text-h6 text-center">Edite seu perfil</div>
    </q-card-section>

    <q-separator />

    <q-card-section
      style="max-height: 80vh; width: 500px; max-width: 80vw;"
      class="scroll"
    >
      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
        <q-input rounded outlined v-model="nickname" label="Nome de usuário" />
        <q-input
          rounded
          outlined
          autogrow
          v-model="bio"
          type="textarea"
          label="Bio"
          :rules="[val => val.length <= 140 || 'No maximo 140 caracteres']"
        />
        <q-file
          rounded
          v-model="avatar"
          label="Avatar"
          outlined
          use-chips
          style="max-width: 300px"
        />
        <q-file
          rounded
          v-model="coverPage"
          label="Cover"
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
      nickname: "",
      bio: "",
      avatar: null
    };
  }
};
</script>

<style></style>
