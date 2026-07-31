"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = QuickActions;
const jsx_runtime_1 = require("react/jsx-runtime");
function QuickActions() {
    const actions = ['Create Lead', 'Dispatch Driver', 'Generate Report'];
    return (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h3", { children: "Quick Actions" }), (0, jsx_runtime_1.jsx)("ul", { children: actions.map(a => (0, jsx_runtime_1.jsx)("li", { children: a }, a)) })] });
}
