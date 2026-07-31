"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Header;
const jsx_runtime_1 = require("react/jsx-runtime");
const appStore_1 = require("../../store/appStore");
function Header() { const role = (0, appStore_1.useAppStore)(s => s.role); return (0, jsx_runtime_1.jsxs)("header", { style: { padding: 16, borderBottom: '1px solid #ddd' }, children: [(0, jsx_runtime_1.jsx)("b", { children: "ESOS MVP" }), (0, jsx_runtime_1.jsx)("span", { style: { float: 'right' }, children: role })] }); }
