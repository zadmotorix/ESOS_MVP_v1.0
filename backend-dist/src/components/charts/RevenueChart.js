"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RevenueChart;
const jsx_runtime_1 = require("react/jsx-runtime");
const reportData_json_1 = __importDefault(require("../../data/reportData.json"));
function RevenueChart() {
    return (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h3", { children: "Revenue Trend" }), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Month" }), (0, jsx_runtime_1.jsx)("th", { children: "Revenue" })] }) }), (0, jsx_runtime_1.jsx)("tbody", { children: reportData_json_1.default.map((d) => (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: d.month }), (0, jsx_runtime_1.jsxs)("td", { children: ["\u20B9", d.revenue] })] }, d.month)) })] })] });
}
