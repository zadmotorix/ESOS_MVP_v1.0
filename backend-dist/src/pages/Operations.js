"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Operations;
const jsx_runtime_1 = require("react/jsx-runtime");
const scenarios_json_1 = __importDefault(require("../data/scenarios.json"));
function Operations() {
    return (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h2", { children: "Operations" }), (0, jsx_runtime_1.jsx)("ul", { children: scenarios_json_1.default.map((s) => (0, jsx_runtime_1.jsxs)("li", { children: [(0, jsx_runtime_1.jsx)("b", { children: s.title }), (0, jsx_runtime_1.jsx)("ul", { children: s.options.map((o) => (0, jsx_runtime_1.jsx)("li", { children: o }, o)) })] }, s.id)) })] });
}
