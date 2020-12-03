<template>

<Main></Main>

</template>

<script>

import Login from './views/Login'
import Main from './views/Main.vue'
import Market from './views/Market.vue'
import Profile from './views/Profile.vue'

export default {
  name: 'LayoutDefault',

  components: {
    Login,
    Main,
    Market,
    Profile
  }

}
</script>

<style>
</style>
