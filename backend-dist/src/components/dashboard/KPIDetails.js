"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = KPIDetails;
const jsx_runtime_1 = require("react/jsx-runtime");
function KPIDetails() {
    const items = [['Avg Response', '3.4 min'], ['Ride Completion', '98.7%'], ['NPS', '74']];
    return (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h3", { children: "KPI Details" }), (0, jsx_runtime_1.jsx)("table", { children: (0, jsx_runtime_1.jsx)("tbody", { children: items.map(i => (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: i[0] }), (0, jsx_runtime_1.jsx)("td", { children: i[1] })] }, i[0])) }) })] });
}
