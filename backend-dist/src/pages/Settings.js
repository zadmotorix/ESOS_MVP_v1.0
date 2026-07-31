"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Settings;
const jsx_runtime_1 = require("react/jsx-runtime");
const LoginCard_1 = __importDefault(require("../components/auth/LoginCard"));
const RoleManager_1 = __importDefault(require("../components/settings/RoleManager"));
const ThemeSwitcher_1 = __importDefault(require("../components/settings/ThemeSwitcher"));
const AppInfo_1 = __importDefault(require("../components/common/AppInfo"));
function Settings() {
    return (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h2", { children: "Settings" }), (0, jsx_runtime_1.jsx)(LoginCard_1.default, {}), (0, jsx_runtime_1.jsx)(RoleManager_1.default, {}), (0, jsx_runtime_1.jsx)(ThemeSwitcher_1.default, {}), (0, jsx_runtime_1.jsx)(AppInfo_1.default, {})] });
}
