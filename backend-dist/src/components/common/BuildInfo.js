"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BuildInfo;
const jsx_runtime_1 = require("react/jsx-runtime");
const BuildInfoService_1 = require("../../services/BuildInfoService");
function BuildInfo() {
    return (0, jsx_runtime_1.jsxs)("div", { style: { fontSize: 12, opacity: .7 }, children: ["Build ", BuildInfoService_1.buildInfo.version, " \u2022 ", BuildInfoService_1.buildInfo.environment, (0, jsx_runtime_1.jsx)("br", {}), "Generated: ", BuildInfoService_1.buildInfo.buildDate] });
}
