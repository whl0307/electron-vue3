import * as childPro from 'child_process';
import * as f from 'fs';
import * as electron from 'electron';
export const ipcRenderer:typeof electron.ipcRenderer = window.require('electron').ipcRenderer;
export const webFrame:typeof electron.webFrame = window.require('electron').webFrame;
export const childProcess: typeof childPro = window.require('child_process');   
export const fs:typeof f = window.require('fs');