const electron = require("electron");
const url = require("url");
const path = require("path");

const {app, BrowserWindow, Menu} = electron;

let mainWindow;


//Listen for the app to be ready
app.on("ready", function (){

    mainWindow = new BrowserWindow({width: 1920, hight: 1080});

    //Hide menu
    mainWindow.setMenu(null);


    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'mainWindow.html'),
        protocol: "file:",
        slashes: true
    }));




});

