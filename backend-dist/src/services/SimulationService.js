"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getScenarios = getScenarios;
const scenarios_json_1 = __importDefault(require("../data/scenarios.json"));
function getScenarios() { return scenarios_json_1.default; }
