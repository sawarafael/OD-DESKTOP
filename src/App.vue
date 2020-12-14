<template>

<Login />

</template>

<script>

import Login from './views/Login'
import Main from './views/Main.vue'
import Market from './views/Market.vue'
import Profile from './views/Profile.vue'
import Groups from './views/Groups.vue'
import Library from './views/Library.vue'

export default {
  name: 'LayoutDefault',

  components: {
    Login,
    Main,
    Market,
    Profile,
    Groups,
    Library
  }

}
</script>

<style>
</style>
