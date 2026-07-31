"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = About;
const jsx_runtime_1 = require("react/jsx-runtime");
const AppInfo_1 = __importDefault(require("../components/common/AppInfo"));
const BuildInfo_1 = __importDefault(require("../components/common/BuildInfo"));
function About() {
    return (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h2", { children: "About ESOS" }), (0, jsx_runtime_1.jsx)(AppInfo_1.default, {}), (0, jsx_runtime_1.jsx)(BuildInfo_1.default, {})] });
}
