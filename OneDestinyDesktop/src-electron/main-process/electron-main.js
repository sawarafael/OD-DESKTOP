import { app, BrowserWindow, ipcMain, nativeTheme } from "electron";

try {
  if (
    process.platform === "win32" &&
    nativeTheme.shouldUseDarkColors === true
  ) {
    require("fs").unlinkSync(
      require("path").join(app.getPath("userData"), "DevTools Extensions")
    );
  }
} catch (_) {}

/**
 * Set `__statics` path to static files in production;
 * The reason we are setting it here is that the path needs to be evaluated at runtime
 */
if (process.env.PROD) {
  global.__statics = __dirname;
}

let mainWindow;

function createWindow() {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    width: 1700,
    height: 1000,
    frame: false,
    useContentSize: true,
    autoHideMenuBar: true,
    webPreferences: {
      // Change from /quasar.conf.js > electron > nodeIntegration;
      // More info: https://quasar.dev/quasar-cli/developing-electron-apps/node-integration
      nodeIntegration: process.env.QUASAR_NODE_INTEGRATION,
      nodeIntegrationInWorker: process.env.QUASAR_NODE_INTEGRATION
      //contextIsolation: true,
      // worldSafeExecuteJavaScript: true

      // More info: /quasar-cli/developing-electron-apps/electron-preload-script
      // preload: path.resolve(__dirname, 'electron-preload.js')
    },
    backgroundColor: "#1d1d1d"
  });

  mainWindow.loadURL(process.env.APP_URL);

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

ipcMain.on('open-chat-window', (event) => {
  const janelasChat = []
  const chatWindow = new BrowserWindow({ 
    width: 750,
    height: 650,
    frame: false,
    useContentSize: true,
    autoHideMenuBar: true,
    webPreferences: {
        nodeIntegration: process.env.QUASAR_NODE_INTEGRATION,
        nodeIntegrationInWorker: process.env.QUASAR_NODE_INTEGRATION
    },   
    backgroundColor: "#1d1d1d"
  })

  chatWindow.loadURL(process.env.APP_URL + '#/chat/chat')

  janelasChat.push(chatWindow)
  event.reply('Janela de Chat Aberta')
})


app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
