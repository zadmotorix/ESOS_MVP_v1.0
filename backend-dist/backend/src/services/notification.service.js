"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.history = void 0;
exports.send = send;
const log = [];
function send(channel, to, message) {
    const item = { channel, to, message, timestamp: new Date().toISOString(), status: 'queued' };
    log.push(item);
    return item;
}
const history = () => log;
exports.history = history;
