export type User={id:number;name:string;role:string};
export async function login(name:string){return {id:1,name,role:'Administrator'} as User;}
export function logout(){return true;}
