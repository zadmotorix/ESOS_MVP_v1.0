"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SearchBox;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
function SearchBox() {
    const [q, setQ] = (0, react_1.useState)('');
    return (0, jsx_runtime_1.jsx)("input", { value: q, onChange: e => setQ(e.target.value), placeholder: 'Search...' });
}
