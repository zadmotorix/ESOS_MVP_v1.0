"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RecentActivityTable;
const jsx_runtime_1 = require("react/jsx-runtime");
function RecentActivityTable() {
    const rows = [['Ride Completed', '09:30'], ['Lead Created', '10:15'], ['Vendor Approved', '11:05']];
    return (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Activity" }), (0, jsx_runtime_1.jsx)("th", { children: "Time" })] }) }), (0, jsx_runtime_1.jsx)("tbody", { children: rows.map(r => (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: r[0] }), (0, jsx_runtime_1.jsx)("td", { children: r[1] })] }, r[0])) })] });
}
