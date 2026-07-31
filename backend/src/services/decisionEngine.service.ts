export function evaluate(i:any){
 const revenue=Number(i.revenue||0);
 const completed=Number(i.completed||0);
 const cancelled=Number(i.cancelled||0);
 const complaints=Number(i.complaints||0);
 const csat=Math.max(0,100-complaints*5-cancelled*2);
 const ops=Math.min(100,completed*2-complaints);
 const finance=Math.min(100,revenue/100);
 const overall=Math.round((csat+ops+finance)/3);
 return {csat,operationsScore:ops,financeScore:finance,overall};
}
