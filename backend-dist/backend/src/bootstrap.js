"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBootstrap = validateBootstrap;
const config_1 = __importDefault(require("./config"));
function validateBootstrap() {
    if (!config_1.default.port)
        throw new Error('PORT missing');
    return true;
}
