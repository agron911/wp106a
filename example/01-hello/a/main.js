const {app, BrowserWindow} = require('electron')

function createWindow () {
  var win = new BrowserWindow({width: 800, height: 600})
  win.loadURL('file://' + __dirname + '/index.html')
  win.webContents.openDevTools()
}

app.on('ready', createWindow)
