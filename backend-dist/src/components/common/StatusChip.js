"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = StatusChip;
const jsx_runtime_1 = require("react/jsx-runtime");
function StatusChip({ label }) {
    return (0, jsx_runtime_1.jsx)("span", { style: { padding: '2px 8px', border: '1px solid #999', borderRadius: 10 }, children: label });
}
