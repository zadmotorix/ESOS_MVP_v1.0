const KEY='esos_session';
export function saveSession(user:any){localStorage.setItem(KEY,JSON.stringify(user));}
export function getSession(){const s=localStorage.getItem(KEY);return s?JSON.parse(s):null;}
export function clearSession(){localStorage.removeItem(KEY);}
