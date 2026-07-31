import {send} from './notification.service';
import {templates} from './template.service';

export function notify(event:string,channel:any,to:string){
 const msg=(templates as any)[event]||`Event: ${event}`;
 return send(channel,to,msg);
}
