<template>
    <div>
    <h4>
        Biblioteca de Usuário
    </h4>
    <div>
        <h4>
            RPGs que o Usuário está jogando.
        </h4>
        <q-carousel
        animated
        >

        </q-carousel>
    </div>
    <div>
        <h4>
            RPGs que o Usuário está mestrando.
        </h4>
        <q-carousel
        v-model="slide"
        transition-prev="slide-right"
        transition-next="slide-left"
        animated
        control-color="primary"
        >
            <q-img
            src="https://www.sideshow.com/wp/wp-content/uploads/2019/12/Cyberpunk-Keanu.jpg"
            style="width: 220px; height: 320px"
            rounded-borders
            >
                <div class="absolute-bottom text-subtitle1 text-center">
                    <p>Nome da Mesa</p>
                    <p>Descrição</p>
                </div>
            </q-img>
        </q-carousel>
    </div>
    </div>

</template>

<script>
export default {
  name: 'Library',
  data () {
    return {
      slide: 'style'
    }
  }

}

</script>
