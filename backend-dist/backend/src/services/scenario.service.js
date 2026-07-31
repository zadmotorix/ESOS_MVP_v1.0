"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = exports.list = void 0;
const scenarios_json_1 = __importDefault(require("../../../config/scenarios.json"));
const list = () => scenarios_json_1.default;
exports.list = list;
const get = (name) => scenarios_json_1.default[name] || null;
exports.get = get;
