const { app, BrowserWindow } = require('electron')

const isDev = require("electron-is-dev")

app.whenReady().then(() => {
  const win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      preload: __dirname + '/preload.js'
    }
  })
  win.loadURL( isDev ? 'http://localhost:3000'
    : `file://${path.join(__dirname,'../build/index.html')}`
  )
  console.log("this is the start")
  win.webContents.openDevTools()
})
app.on('window-all-closed', () => {
    app.quit()
})