<template>
    
    <div>
        <q-splitter 
        v-model="splitterModel"
        style="height: 790px"
        >

    
 
    <q-tabs
          vertical
          class="text-teal"
        >
          <q-tab><q-img
          v-bind:src="avatar"
          style="width: 220px"
          rounded-borders
        >
          <div class="absolute-bottom text-subtitle1 text-center">
            <p>{{ username }}</p>
            <p>{{ bio }}</p>
            
          </div>
        </q-img>
          </q-tab>
        </q-tabs>
        
        </q-splitter>
        </div>

</template>


<script>
export default {
    data () {
        return {
            splitterModel: 50,

            friendDs: {},
            friendVs: {}

        }
    },

    mounted() {
      

     axios.get('http://localhost:3000/users/normal/friend/view/all/id', {
        headers: {
            authorization: dataauth
        },
        params: {
            id: id
        }
    }).then((resp) => {
    
        this.friendDs = resp.data.userd
        const idFriends = resp.data.userd.map(x => x.id)

        console.log(idFriends)
        
        axios.get('http://localhost:3000/users/normal/friend/view/id', {
            headers: {
                authorization: dataauth
            },
            params: {
                ids: idFriends
            }
        }).then((res) => {

            const idUsers = res.data.users
            
            console.log(res.data.users)

            this.friendVs = idUsers
        })
    })

    }

}
</script>