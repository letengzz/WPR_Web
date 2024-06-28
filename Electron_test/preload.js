const { contextBridge, ipcRenderer } = require('electron')
// 暴露数据给渲染进程
contextBridge.exposeInMainWorld('myAPI', {
    n: 666,
    version: process.version,
    saveFile(str) {
        // 渲染进程给主进程发送一个消息
        ipcRenderer.send('create-file', str)
    },
    readFile (path){
        return ipcRenderer.invoke('read-file',path)
    }
})