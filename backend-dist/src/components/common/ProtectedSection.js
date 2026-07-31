"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ProtectedSection;
const jsx_runtime_1 = require("react/jsx-runtime");
const appStore_1 = require("../../store/appStore");
const RoleService_1 = require("../../services/RoleService");
function ProtectedSection({ feature, children }) {
    const role = (0, appStore_1.useAppStore)(s => s.role);
    return (0, RoleService_1.canAccess)(role, feature) ? (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: children }) : (0, jsx_runtime_1.jsx)("div", { children: "Access denied." });
}
