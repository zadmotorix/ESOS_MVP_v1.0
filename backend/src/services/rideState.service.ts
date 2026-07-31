import {RideState} from '../models/RideState';
const order:RideState[]=['CREATED','DISPATCHED','DRIVER_ARRIVED','IN_PROGRESS','COMPLETED'];
export function nextState(state:RideState):RideState{
 const i=order.indexOf(state);
 return i>=0&&i<order.length-1?order[i+1]:state;
}
