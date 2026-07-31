"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HR;
const jsx_runtime_1 = require("react/jsx-runtime");
const staff = [['Operations', 8], ['CRM', 4], ['Drivers', 26]];
function HR() { return (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h2", { children: "HR" }), (0, jsx_runtime_1.jsx)("ul", { children: staff.map(([d, c]) => (0, jsx_runtime_1.jsxs)("li", { children: [d, ": ", c] }, String(d))) })] }); }
