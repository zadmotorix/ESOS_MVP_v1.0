export function runDiagnostics(){
return {
routing:true,
storage:typeof localStorage!=='undefined',
timestamp:new Date().toISOString()
};
}