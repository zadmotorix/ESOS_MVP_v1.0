"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SystemStatus;
const jsx_runtime_1 = require("react/jsx-runtime");
function SystemStatus() {
    const items = [['API', 'Online'], ['Database', 'Connected'], ['Dispatch', 'Healthy']];
    return (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h3", { children: "System Status" }), (0, jsx_runtime_1.jsx)("ul", { children: items.map(i => (0, jsx_runtime_1.jsxs)("li", { children: [i[0], ": ", i[1]] }, i[0])) })] });
}
