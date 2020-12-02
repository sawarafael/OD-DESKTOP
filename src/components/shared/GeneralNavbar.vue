<template>
    
 <div class="q-pa-md">
    <q-toolbar class="bg-primary text-white shadow-2 rounded-borders">
      <q-btn flat label="one destiny" />
      <q-btn flat label="Aventuras" />
      <q-btn flat label="Biblioteca" />
      <q-space />

      <q-tabs v-model="tab" shrink stretch>
        <q-tab name="tab1" label="Amigos" />
           <q-tab name="tab2">
        <q-img
        class="height=50px width=50px  rounded-borders" 
        src="https://lastfm.freetls.fastly.net/i/u/300x300/9b4117f9b595d14275d850df1438d20d.jpg"
        >        
        </q-img></q-tab>  
        <q-tab name="tab3" icon="fas fa-bell" />
        <q-tab name="tab4" icon="fas fa-dollar-sign" />
        <q-tab name="tab5" icon="fas fa-cogs" />
      </q-tabs>
    </q-toolbar>
  </div>

</template>


<script>
import Axios from 'axios'
export default {
    data () {
    return {
      tab: '',
      username: null,
      id: localStorage.getItem("token")
    }
  },

  mounted() {

    /*
    axios.get('http://localhost:3000/users/normal/dataview', {
      headers: {
        authorization: "Bearer" + localStorage.getItem("token")
      },
      data: {
        id : localStorage.getItem("PXOIDOD")
      }
    }).then((resp) => {
      this.username = resp.data.user_view_username
    }).catch((err) => {
      console.log("Erro" + err)
    })
  }
*/
  }
}
</script>