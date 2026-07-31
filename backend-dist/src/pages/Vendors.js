"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Vendors;
const jsx_runtime_1 = require("react/jsx-runtime");
const vendors = [['Happy Paws Vet', 'Active'], ['Pet Groom Hub', 'Pending']];
function Vendors() { return (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h2", { children: "Vendor Partnerships" }), (0, jsx_runtime_1.jsx)("table", { children: (0, jsx_runtime_1.jsx)("tbody", { children: vendors.map(v => (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: v[0] }), (0, jsx_runtime_1.jsx)("td", { children: v[1] })] }, v[0])) }) })] }); }
