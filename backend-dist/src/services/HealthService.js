"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.health = health;
function health() {
    return {
        api: 'healthy',
        database: 'healthy',
        storage: 'healthy',
        version: '1.0.0'
    };
}
