"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nextState = nextState;
const order = ['CREATED', 'DISPATCHED', 'DRIVER_ARRIVED', 'IN_PROGRESS', 'COMPLETED'];
function nextState(state) {
    const i = order.indexOf(state);
    return i >= 0 && i < order.length - 1 ? order[i + 1] : state;
}
