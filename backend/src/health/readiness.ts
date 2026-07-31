export function readiness(){
  return {
    api: true,
    database: false,
    websocket: false,
    timestamp: new Date().toISOString()
  };
}
