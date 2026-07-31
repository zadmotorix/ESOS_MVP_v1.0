export function versionRoute(req:any,res:any){
  res.json({
    name:'ESOS API',
    version:'1.0.0',
    apiVersion:'v1'
  });
}
