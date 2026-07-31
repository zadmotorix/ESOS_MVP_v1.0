let state={running:false,scenario:"NORMAL",tick:0};
export const start=()=>state={...state,running:true};
export const pause=()=>state={...state,running:false};
export const reset=()=>state={running:false,scenario:"NORMAL",tick:0};
export const step=()=>({...(state={...state,tick:state.tick+1})});
export const status=()=>state;
