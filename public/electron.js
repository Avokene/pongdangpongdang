const { app, BrowserWindow } = require('electron')

app.whenReady().then(() => {
  const win = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      preload: __dirname + '/preload.js'
    }
  })
  win.loadURL('http://localhost:3000')
  console.log("this is the start")
  win.webContents.openDevTools()
})
app.on('window-all-closed', () => {
    app.quit()
})