"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = login;
exports.logout = logout;
async function login(name) { return { id: 1, name, role: 'Administrator' }; }
function logout() { return true; }
