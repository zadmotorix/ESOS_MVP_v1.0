const incidents=[
{id:1,type:"Driver Delay",priority:"HIGH",status:"OPEN"},
{id:2,type:"Vehicle Cleaning",priority:"MEDIUM",status:"OPEN"},
{id:3,type:"Pet Emergency",priority:"CRITICAL",status:"ESCALATED"}
];
export const list=()=>incidents;
export const summary=()=>({
open:incidents.filter(i=>i.status=="OPEN").length,
critical:incidents.filter(i=>i.priority=="CRITICAL").length,
escalated:incidents.filter(i=>i.status=="ESCALATED").length
});
