type Listener=(event:string,payload:any)=>void;
const listeners:Listener[]=[];
export const subscribe=(fn:Listener)=>listeners.push(fn);
export const publish=(event:string,payload:any)=>listeners.forEach(l=>l(event,payload));
