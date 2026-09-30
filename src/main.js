const {app,BrowserWindow}=require('electron');const path=require('path');
function createWindow(){const w=new BrowserWindow({width:1440,height:900,minWidth:1100,minHeight:700,backgroundColor:'#111',autoHideMenuBar:true,title:'Frango do Mindu PDV',webPreferences:{contextIsolation:true,nodeIntegration:false}});w.loadFile(path.join(__dirname,'index.html'))}
app.whenReady().then(()=>{createWindow();app.on('activate',()=>{if(!BrowserWindow.getAllWindows().length)createWindow()})});app.on('window-all-closed',()=>{if(process.platform!=='darwin')app.quit()});
