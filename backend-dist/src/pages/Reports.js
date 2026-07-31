"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Reports;
const jsx_runtime_1 = require("react/jsx-runtime");
const KPITrend_1 = __importDefault(require("../components/charts/KPITrend"));
const RevenueChart_1 = __importDefault(require("../components/charts/RevenueChart"));
const FleetUtilizationChart_1 = __importDefault(require("../components/charts/FleetUtilizationChart"));
const ExportButtons_1 = __importDefault(require("../components/reports/ExportButtons"));
function Reports() {
    return (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h2", { children: "Reports & Analytics" }), (0, jsx_runtime_1.jsx)(ExportButtons_1.default, {}), (0, jsx_runtime_1.jsx)(KPITrend_1.default, {}), (0, jsx_runtime_1.jsx)(RevenueChart_1.default, {}), (0, jsx_runtime_1.jsx)(FleetUtilizationChart_1.default, {})] });
}
