export function buildHealthReport(){
  return {
    api:'healthy',
    database:'pending',
    cache:'pending',
    websocket:'pending',
    generatedAt:new Date().toISOString()
  };
}
