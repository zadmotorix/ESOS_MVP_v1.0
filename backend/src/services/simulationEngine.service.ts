const state={
  speed:1,
  scenario:"NORMAL",
  failures:false,
  rules:{surge:false,traffic:"NORMAL"}
};
export const getState=()=>state;
export const update=(x:any)=>Object.assign(state,x);
export const randomEvent=()=>["BOOKING","CANCEL","SURGE","TRAFFIC","PET_EMERGENCY"][Math.floor(Math.random()*5)];
