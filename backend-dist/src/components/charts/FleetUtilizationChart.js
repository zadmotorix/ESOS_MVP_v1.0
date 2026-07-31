"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FleetUtilizationChart;
const jsx_runtime_1 = require("react/jsx-runtime");
function FleetUtilizationChart() {
    const rows = [['Available', 18], ['On Trip', 12], ['Maintenance', 2]];
    return (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h3", { children: "Fleet Utilization" }), (0, jsx_runtime_1.jsx)("table", { children: (0, jsx_runtime_1.jsx)("tbody", { children: rows.map(r => (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: r[0] }), (0, jsx_runtime_1.jsx)("td", { children: r[1] })] }, String(r[0]))) }) })] });
}
