export function backupLocalStorage(){
 const data={};
 for(let i=0;i<localStorage.length;i++){
   const k=localStorage.key(i);
   if(k)(data as any)[k]=localStorage.getItem(k);
 }
 return JSON.stringify(data,null,2);
}