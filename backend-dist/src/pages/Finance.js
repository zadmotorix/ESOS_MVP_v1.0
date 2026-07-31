"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Finance;
const jsx_runtime_1 = require("react/jsx-runtime");
const PageTitle_1 = __importDefault(require("../components/common/PageTitle"));
const StatBadge_1 = __importDefault(require("../components/common/StatBadge"));
function Finance() {
    return (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(PageTitle_1.default, { title: 'Finance' }), (0, jsx_runtime_1.jsx)(StatBadge_1.default, { label: 'Profit', value: '\u20B963,000' }), (0, jsx_runtime_1.jsx)(StatBadge_1.default, { label: 'Margin', value: '50.4%' })] });
}
