"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveSession = saveSession;
exports.getSession = getSession;
exports.clearSession = clearSession;
const KEY = 'esos_session';
function saveSession(user) { localStorage.setItem(KEY, JSON.stringify(user)); }
function getSession() { const s = localStorage.getItem(KEY); return s ? JSON.parse(s) : null; }
function clearSession() { localStorage.removeItem(KEY); }
