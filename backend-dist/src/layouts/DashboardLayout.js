"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DashboardLayout;
const jsx_runtime_1 = require("react/jsx-runtime");
const Sidebar_1 = __importDefault(require("../components/navigation/Sidebar"));
const Header_1 = __importDefault(require("../components/navigation/Header"));
const react_router_dom_1 = require("react-router-dom");
function DashboardLayout() {
    return (0, jsx_runtime_1.jsxs)("div", { style: { display: 'flex' }, children: [(0, jsx_runtime_1.jsx)(Sidebar_1.default, {}), (0, jsx_runtime_1.jsxs)("div", { style: { flex: 1 }, children: [(0, jsx_runtime_1.jsx)(Header_1.default, {}), (0, jsx_runtime_1.jsx)("main", { style: { padding: 16 }, children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Outlet, {}) })] })] });
}
