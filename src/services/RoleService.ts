export const permissions={
Administrator:['*'],
'Strategy & Operations Consultant':['dashboard','operations','crm','reports']
};
export function canAccess(role:string,feature:string){
 const p=(permissions as any)[role]||[];
 return p.includes('*')||p.includes(feature);
}
