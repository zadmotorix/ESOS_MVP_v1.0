export function logAction(action:string){
const logs=JSON.parse(localStorage.getItem('auditLogs')||'[]');
logs.push({action,time:new Date().toISOString()});
localStorage.setItem('auditLogs',JSON.stringify(logs));
}
