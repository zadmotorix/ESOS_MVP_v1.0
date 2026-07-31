"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = StatBadge;
const jsx_runtime_1 = require("react/jsx-runtime");
function StatBadge({ label, value }) { return (0, jsx_runtime_1.jsxs)("span", { style: { border: '1px solid #bbb', padding: '4px 8px', borderRadius: 12, marginRight: 8 }, children: [label, ": ", value] }); }
