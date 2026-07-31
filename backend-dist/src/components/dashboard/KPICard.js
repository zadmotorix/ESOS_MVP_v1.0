"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = KPICard;
const jsx_runtime_1 = require("react/jsx-runtime");
function KPICard({ title, value }) { return (0, jsx_runtime_1.jsxs)("div", { style: { border: '1px solid #ccc', padding: 12, borderRadius: 8 }, children: [(0, jsx_runtime_1.jsx)("strong", { children: title }), (0, jsx_runtime_1.jsx)("div", { children: value })] }); }
