"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SystemInfo;
const jsx_runtime_1 = require("react/jsx-runtime");
const EnvironmentService_1 = require("../services/EnvironmentService");
const StatusChip_1 = __importDefault(require("../components/common/StatusChip"));
function SystemInfo() {
    return (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h2", { children: "System Information" }), (0, jsx_runtime_1.jsxs)("p", { children: ["Environment: ", (0, jsx_runtime_1.jsx)(StatusChip_1.default, { label: EnvironmentService_1.environment.name })] }), (0, jsx_runtime_1.jsxs)("p", { children: ["API: ", EnvironmentService_1.environment.api] }), (0, jsx_runtime_1.jsxs)("p", { children: ["Maps: ", EnvironmentService_1.environment.maps] }), (0, jsx_runtime_1.jsxs)("p", { children: ["Charts: ", EnvironmentService_1.environment.charts] })] });
}
