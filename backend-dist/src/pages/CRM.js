"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CRM;
const jsx_runtime_1 = require("react/jsx-runtime");
const LeadForm_1 = __importDefault(require("../components/forms/LeadForm"));
const leads = [{ id: 1, name: 'Pet Owner A', status: 'New' }, { id: 2, name: 'Pet Owner B', status: 'Follow-up' }];
function CRM() {
    return (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h2", { children: "CRM Pipeline" }), (0, jsx_runtime_1.jsx)(LeadForm_1.default, {}), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Name" }), (0, jsx_runtime_1.jsx)("th", { children: "Status" })] }) }), (0, jsx_runtime_1.jsx)("tbody", { children: leads.map(l => (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: l.name }), (0, jsx_runtime_1.jsx)("td", { children: l.status })] }, l.id)) })] })] });
}
