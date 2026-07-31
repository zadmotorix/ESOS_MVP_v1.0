"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AppRouter;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const DashboardLayout_1 = __importDefault(require("../layouts/DashboardLayout"));
const Dashboard_1 = __importDefault(require("../pages/Dashboard"));
const Operations_1 = __importDefault(require("../pages/Operations"));
const CRM_1 = __importDefault(require("../pages/CRM"));
const Fleet_1 = __importDefault(require("../pages/Fleet"));
const Finance_1 = __importDefault(require("../pages/Finance"));
const HR_1 = __importDefault(require("../pages/HR"));
const Marketing_1 = __importDefault(require("../pages/Marketing"));
const Vendors_1 = __importDefault(require("../pages/Vendors"));
const Reports_1 = __importDefault(require("../pages/Reports"));
const Settings_1 = __importDefault(require("../pages/Settings"));
function AppRouter() {
    return (0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Routes, { children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Route, { element: (0, jsx_runtime_1.jsx)(DashboardLayout_1.default, {}), children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { index: true, element: (0, jsx_runtime_1.jsx)(Dashboard_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: 'operations', element: (0, jsx_runtime_1.jsx)(Operations_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: 'crm', element: (0, jsx_runtime_1.jsx)(CRM_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: 'fleet', element: (0, jsx_runtime_1.jsx)(Fleet_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: 'finance', element: (0, jsx_runtime_1.jsx)(Finance_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: 'hr', element: (0, jsx_runtime_1.jsx)(HR_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: 'marketing', element: (0, jsx_runtime_1.jsx)(Marketing_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: 'vendors', element: (0, jsx_runtime_1.jsx)(Vendors_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: 'reports', element: (0, jsx_runtime_1.jsx)(Reports_1.default, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: 'settings', element: (0, jsx_runtime_1.jsx)(Settings_1.default, {}) })] }) }) });
}
