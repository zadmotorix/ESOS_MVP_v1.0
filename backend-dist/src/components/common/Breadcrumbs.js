"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Breadcrumbs;
const jsx_runtime_1 = require("react/jsx-runtime");
function Breadcrumbs({ items }) { return (0, jsx_runtime_1.jsx)("nav", { children: items.join(' / ') }); }
