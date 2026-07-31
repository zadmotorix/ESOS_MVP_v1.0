"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = VersionInfo;
const jsx_runtime_1 = require("react/jsx-runtime");
const ConfigService_1 = require("../../services/ConfigService");
function VersionInfo() {
    return (0, jsx_runtime_1.jsxs)("div", { style: { fontSize: 12, opacity: .7 }, children: ["Version ", ConfigService_1.appConfig.version, " \u2022 ", ConfigService_1.appConfig.environment] });
}
