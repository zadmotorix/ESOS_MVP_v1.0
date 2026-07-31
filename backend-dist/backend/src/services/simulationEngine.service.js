"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomEvent = exports.update = exports.getState = void 0;
const state = {
    speed: 1,
    scenario: "NORMAL",
    failures: false,
    rules: { surge: false, traffic: "NORMAL" }
};
const getState = () => state;
exports.getState = getState;
const update = (x) => Object.assign(state, x);
exports.update = update;
const randomEvent = () => ["BOOKING", "CANCEL", "SURGE", "TRAFFIC", "PET_EMERGENCY"][Math.floor(Math.random() * 5)];
exports.randomEvent = randomEvent;
