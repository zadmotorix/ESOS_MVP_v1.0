"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ActivityFeed;
const jsx_runtime_1 = require("react/jsx-runtime");
function ActivityFeed() {
    const items = ['Driver reassigned', 'CRM lead added', 'Vendor accepted booking'];
    return (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h3", { children: "Activity" }), (0, jsx_runtime_1.jsx)("ul", { children: items.map(i => (0, jsx_runtime_1.jsx)("li", { children: i }, i)) })] });
}
