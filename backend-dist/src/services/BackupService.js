"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.backupLocalStorage = backupLocalStorage;
function backupLocalStorage() {
    const data = {};
    for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (k)
            data[k] = localStorage.getItem(k);
    }
    return JSON.stringify(data, null, 2);
}
