const {contextBridge}=require('electron');contextBridge.exposeInMainWorld('pdv',{version:'1.1.0'});
