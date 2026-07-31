export type Theme='light'|'dark';
const KEY='esos_theme';
export const getTheme=():Theme=>(localStorage.getItem(KEY) as Theme)||'light';
export const setTheme=(t:Theme)=>localStorage.setItem(KEY,t);
