/*
main.js运行在应用的主进程上，无法访问Web相关API，主要负责：控制生命周期、显示界面、
控制渲染进程等其他操作。
*/
const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path');
const fs = require('fs');
//当app准备好，调用回调函数
// app.on('ready', () => {
//     //创建窗口
//     const win = new BrowserWindow({
//         'width': 800,
//         'height': 600,
//         'autoHideMenuBar': true, //自动隐藏菜单栏
//         x: 0, //窗口x轴坐标
//         y: 0,  //窗口y轴坐标
//         alwaysOnTop: true //一直固定(置顶)
//     })
//     //在窗口加载页面
//     // win.loadURL('http://www.baidu.com')
//     //加载文件
//     win.loadFile('./page/index.html')
// })
console.log(process.version)
console.log(process.versions)
console.log(__dirname)

function createWindow() {

    //创建窗口
    const win = new BrowserWindow({
        'width': 800,
        'height': 600,
        'autoHideMenuBar': true, //自动隐藏菜单栏
        x: 0, //窗口x轴坐标
        y: 0,  //窗口y轴坐标
        // alwaysOnTop: true //一直固定(置顶)
        webPreferences: {
            preload: path.resolve(__dirname, './preload.js')
        },
    })
    //在窗口加载页面
    // win.loadURL('http://www.baidu.com')
    // 主进程注册对应回调
    ipcMain.on('create-file', createFile)
    // 主进程注册对应回调
    ipcMain.handle('read-file', readFile)
    //加载文件
    win.loadFile('./pages/index.html')
}
// 当所有窗口都关闭时
app.on('window-all-closed', () => {
    // 如果所处平台不是mac(darwin)，则退出应用。
    if (process.platform !== 'darwin') app.quit()
})

// 当app准备好后，执行createWindow创建窗口
app.on('ready', () => {
    createWindow()
    // 当应用被激活时
    app.on('activate', () => {
        //如果当前应用没有窗口，则创建一个新的窗口
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

//创建文件
function createFile(event, data) {
    fs.writeFileSync('D:/hello.txt', data)
}

//读取文件
function readFile(event, path) {
    return fs.readFileSync(path).toString()
}