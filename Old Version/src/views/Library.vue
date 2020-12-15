<template>
    
    <div>
        <h3>
            Criar Mesa
        </h3>
        <q-btn @click="createRoom = true" label="Criar" />

        <h3>
            Suas Skins
        </h3>
        <div>
            Skins
        </div>

        <q-dialog v-model="createRoom">
        <q-card>
            Informações de Criação da Mesa:

            <q-input label="Qual será o nome do seu mundo RPG?" v-model="newRoomName" />
            <q-select
        filled
        v-model="model"
        label="Simple select"
        :options="stringOptions"
        style="width: 250px"
        behavior="menu"
      />
        </q-card>
        </q-dialog>

    </div>

</template>

<script>
    
const stringOptions = ['Google', 'Facebook', 'Twitter', 'Apple', 'Oracle']

export default {
    data () {
        return {
            createRoom: false,
            newRoomName: '',

            model: null,
            stringOptions,
            options: stringOptions
    }
  },

  methods: {
    filterFn (val, update) {
      if (val === '') {
        update(() => {
          this.options = stringOptions
        })
        return
      }

      update(() => {
        const needle = val.toLowerCase()
        this.options = stringOptions.filter(v => v.toLowerCase().indexOf(needle) > -1)
      })
    }
  }


}
</script>