"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setTheme = exports.getTheme = void 0;
const KEY = 'esos_theme';
const getTheme = () => localStorage.getItem(KEY) || 'light';
exports.getTheme = getTheme;
const setTheme = (t) => localStorage.setItem(KEY, t);
exports.setTheme = setTheme;
