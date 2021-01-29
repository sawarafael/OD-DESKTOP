<template>
    <div>        
        <q-tabs
        vertical
        class="text-primary"
        >
        <q-tab>
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
        </q-tab>
        </q-tabs>
    </div>

</template>

<script>
export default {
  data () {
    return {
      splitterModel: 50
    }
  }

}
</script>
