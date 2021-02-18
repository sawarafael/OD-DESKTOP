import Vue from 'vue'
import io  from 'socket.io-client'

export default async function ({ app, store }) {
    const client = io('http://localhost:54213')
    app.socket = client
    store.$socket = client
  
    Vue.mixin({
      beforeCreate () {
        const options = this.$options
        if (options.socket) {
          this.$socket = options.socket
        } else if (options.parent) {
          this.$socket = options.parent.$socket
        }
      }
    })
  }
  