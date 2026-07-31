const coupons={WELCOME10:10,PET20:20};
export function apply(code:string,total:number){
 const pct=(coupons as any)[code]||0;
 const discount=+(total*pct/100).toFixed(2);
 return {code,discount,finalAmount:+(total-discount).toFixed(2)};
}
