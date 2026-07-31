export type Channel='sms'|'whatsapp'|'email';
const log:any[]=[];
export function send(channel:Channel,to:string,message:string){
 const item={channel,to,message,timestamp:new Date().toISOString(),status:'queued'};
 log.push(item);
 return item;
}
export const history=()=>log;
