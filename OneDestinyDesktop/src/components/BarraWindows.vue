<template>
  <div>
    <q-bar class="windows-bar bg-primary text-white fixed-top q-electron-drag">
      <div class="col text-center text-weight-bold">
        One Destiny Desktop App
      </div>
      <q-space />
      <q-btn dense flat icon="minimize" @click="minimize" />
      <q-btn dense flat icon="crop_square" @click="maximize" />
      <q-btn dense flat icon="close" @click="closeApp" />
    </q-bar>
    <div class="spacer">
      &nbsp;
    </div>
  </div>
</template>

<script>
// We guard the Electron API calls, but this
// is only needed if we build same app with other
// Quasar Modes as well (SPA/PWA/Cordova/SSR...)

// The code below requires Node Integration being kept turned "on"
// More info: https://quasar.dev/quasar-cli/developing-electron-apps/node-integration

export default {
  name: "BarraWindows",
  methods: {
    minimize() {
      if (process.env.MODE === "electron") {
        this.$q.electron.remote.BrowserWindow.getFocusedWindow().minimize();
      }
    },

    maximize() {
      if (process.env.MODE === "electron") {
        const win = this.$q.electron.remote.BrowserWindow.getFocusedWindow();

        if (win.isMaximized()) {
          win.unmaximize();
        } else {
          win.maximize();
        }
      }
    },

    closeApp() {
      if (process.env.MODE === "electron") {
        this.$q.electron.remote.BrowserWindow.getFocusedWindow().close();
      }
    }
  }
};
</script>

<style scoped>
.windows-bar {
  z-index: 10;
}
.spacer {
  width: 100%;
  height: 30px;
}
</style>
