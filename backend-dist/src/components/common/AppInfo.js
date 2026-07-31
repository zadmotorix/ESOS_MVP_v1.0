"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AppInfo;
const jsx_runtime_1 = require("react/jsx-runtime");
const ConfigService_1 = require("../../services/ConfigService");
function AppInfo() {
    return (0, jsx_runtime_1.jsxs)("small", { children: [ConfigService_1.appConfig.appName, " v", ConfigService_1.appConfig.version] });
}
