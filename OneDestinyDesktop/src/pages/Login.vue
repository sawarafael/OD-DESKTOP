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
            <q-form @submit.prevent="efetuarLogin" class="q-gutter-md">
              <q-input
                filled
                clearable
                v-model="user.username"
                type="username"
                label="Usuário"
              />
              <q-input
                filled
                clearable
                v-model="user.password"
                type="password"
                label="Senha"
              />
              <p class="alert alert-danger" v-if="mensagemErro">{{ mensagemErro }}</p>
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
      user: {},
      mensagemErro: ''
    };
  },
  methods: {
    efetuarLogin() {
      this.$store.dispatch("auth/efetuarLogin", this.user).then(() => {
        this.$router.push('/Main')
      }).catch((err) => {
        if (err) {
            console.log(err)
            // this.mensagemErro = "Login ou senha inválido(s)!!!";
          }
      });
    }
  }
};
</script>
