"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchDashboard = fetchDashboard;
const mockApi_json_1 = __importDefault(require("../data/mockApi.json"));
async function fetchDashboard() { return Promise.resolve(mockApi_json_1.default); }
