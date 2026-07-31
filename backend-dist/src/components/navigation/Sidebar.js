"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Sidebar;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const items = [['/', 'Dashboard'], ['/operations', 'Operations'], ['/crm', 'CRM'], ['/fleet', 'Fleet'], ['/finance', 'Finance'], ['/hr', 'HR'], ['/marketing', 'Marketing'], ['/vendors', 'Vendors'], ['/reports', 'Reports'], ['/settings', 'Settings']];
function Sidebar() { return (0, jsx_runtime_1.jsx)("aside", { style: { width: 220, padding: 12, borderRight: '1px solid #ddd' }, children: items.map(([p, l]) => (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, { to: p, children: l }) }, p)) }); }
