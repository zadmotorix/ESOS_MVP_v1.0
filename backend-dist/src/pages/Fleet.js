"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Fleet;
const jsx_runtime_1 = require("react/jsx-runtime");
const FleetMap_1 = __importDefault(require("../components/maps/FleetMap"));
const vehicles = [{ id: 'CAB-101', driver: 'Anil', status: 'Available' }, { id: 'CAB-102', driver: 'Sara', status: 'On Trip' }];
function Fleet() {
    return (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h2", { children: "Fleet" }), (0, jsx_runtime_1.jsx)(FleetMap_1.default, {}), (0, jsx_runtime_1.jsxs)("table", { children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("th", { children: "Vehicle" }), (0, jsx_runtime_1.jsx)("th", { children: "Driver" }), (0, jsx_runtime_1.jsx)("th", { children: "Status" })] }) }), (0, jsx_runtime_1.jsx)("tbody", { children: vehicles.map(v => (0, jsx_runtime_1.jsxs)("tr", { children: [(0, jsx_runtime_1.jsx)("td", { children: v.id }), (0, jsx_runtime_1.jsx)("td", { children: v.driver }), (0, jsx_runtime_1.jsx)("td", { children: v.status })] }, v.id)) })] })] });
}
