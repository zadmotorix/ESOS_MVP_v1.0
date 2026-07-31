"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ExportButtons;
const jsx_runtime_1 = require("react/jsx-runtime");
const ExportService_1 = require("../../services/ExportService");
function ExportButtons() {
    return (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("button", { onClick: () => (0, ExportService_1.exportJSON)('dashboard-report.json', { generated: new Date().toISOString() }), children: "Export JSON" }) });
}
