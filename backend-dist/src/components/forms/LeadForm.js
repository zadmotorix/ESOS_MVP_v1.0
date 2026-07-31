"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LeadForm;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
function LeadForm() {
    const [name, setName] = (0, react_1.useState)('');
    return (0, jsx_runtime_1.jsxs)("form", { children: [(0, jsx_runtime_1.jsx)("h3", { children: "New Lead" }), (0, jsx_runtime_1.jsx)("input", { value: name, onChange: e => setName(e.target.value), placeholder: 'Customer name' }), (0, jsx_runtime_1.jsx)("button", { type: 'button', children: "Save" })] });
}
