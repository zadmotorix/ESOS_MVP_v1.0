"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SummaryPanel;
const jsx_runtime_1 = require("react/jsx-runtime");
function SummaryPanel() {
    return (0, jsx_runtime_1.jsxs)("div", { style: { border: '1px solid #ccc', padding: 12, borderRadius: 8 }, children: [(0, jsx_runtime_1.jsx)("h3", { children: "Today's Summary" }), (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsx)("li", { children: "Completed rides: 148" }), (0, jsx_runtime_1.jsx)("li", { children: "Active drivers: 27" }), (0, jsx_runtime_1.jsx)("li", { children: "Open CRM leads: 19" })] })] });
}
