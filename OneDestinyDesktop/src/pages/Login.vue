<template>
  <q-page
    padding
    class="bg-blue-grey-1 full-width row justify-center items-center content-center"
  >
    <div class="col-8">
      <div class="q-pa-xl">
        <q-carousel
          animated
          v-model="slide"
          arrows
          navigation
          infinite
          height="35em"
          class="shadow-1 rounded-borders"
        >
          <q-carousel-slide
            :name="1"
            img-src="https://cdn.quasar.dev/img/mountains.jpg"
          />
          <q-carousel-slide
            :name="2"
            img-src="https://cdn.quasar.dev/img/parallax1.jpg"
          />
          <q-carousel-slide
            :name="3"
            img-src="https://cdn.quasar.dev/img/parallax2.jpg"
          />
          <q-carousel-slide
            :name="4"
            img-src="https://cdn.quasar.dev/img/quasar.jpg"
          />
        </q-carousel>
      </div>
    </div>
    <div class="col-auto">
      <div class="row">
        <h5 class="text-h5 text-dark text-weight-light q-my-sm">
          Login
        </h5>
      </div>
      <div class="row">
        <q-card bordered class="q-pa-lg shadow-1">
          <q-card-section>
            <q-form @submit.prevent="login" class="q-gutter-md">
              <q-input
                filled
                v-model="username"
                type="username"
                label="Usuário"
              />
              <q-input
                v-model="password"
                filled
                :type="isPwd ? 'password' : 'text'"
                label="Senha"
              >
                <template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                  />
                </template>
              </q-input>
              <q-btn
                unelevated
                class="full-width text-weight-light"
                size="lg"
                color="indigo-10"
                icon="check"
                label="login"
                type="submit"
              />
            </q-form>
          </q-card-section>
          <q-card-section class="text-center q-pa-none">
            <p class="text-grey-6">
              Não é cadastrado? <a class="text-indigo">Criar Conta</a>
            </p>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      slide: 1,
      username: "",
      password: "",
      isPwd: true
    };
  },
  methods: {
    login: function() {
      const username = this.username;
      const password = this.password;
      this.$store
        .dispatch("login", { username, password })
        .then(() => this.$router.push("/main/main"))
        .catch(err => console.log(err));
    }
  }
};
</script>
