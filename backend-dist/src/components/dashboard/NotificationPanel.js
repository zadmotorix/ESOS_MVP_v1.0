"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = NotificationPanel;
const jsx_runtime_1 = require("react/jsx-runtime");
function NotificationPanel({ items }) {
    return (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h3", { children: "Notifications" }), (0, jsx_runtime_1.jsx)("ul", { children: items.map(i => (0, jsx_runtime_1.jsx)("li", { children: i }, i)) })] });
}
