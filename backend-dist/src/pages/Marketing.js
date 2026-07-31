"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Marketing;
const jsx_runtime_1 = require("react/jsx-runtime");
const campaigns = ['Referral Program', 'Pet Clinic Partnership', 'Social Media Ads'];
function Marketing() { return (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h2", { children: "Marketing" }), (0, jsx_runtime_1.jsx)("ul", { children: campaigns.map(c => (0, jsx_runtime_1.jsx)("li", { children: c }, c)) })] }); }
