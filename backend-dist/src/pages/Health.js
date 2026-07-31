"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Health;
const jsx_runtime_1 = require("react/jsx-runtime");
const HealthService_1 = require("../services/HealthService");
function Health() {
    const h = (0, HealthService_1.health)();
    return (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h2", { children: "System Health" }), (0, jsx_runtime_1.jsx)("table", { children: (0, jsx_runtime_1.jsx)("tbody", { children: Object.entries(h).map(([k, v]) => (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: k }), (0, jsx_runtime_1.jsx)("td", { children: String(v) })] }, k)) }) })] });
}
