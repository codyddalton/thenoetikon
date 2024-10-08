const { app, BrowserWindow } = require('electron')

require('@electron/remote/main').initialize()

function createWindow() {
    const win = new BrowserWindow({
        width: 1280,
        height: 832,
        webPreferences: {
            enabledRemoteModule: true
        }
    })

    win.loadURL('http://localhost:3000')
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function () {
    if(BrowserWindow.getAllWindows().length === 0) createWindow()
})