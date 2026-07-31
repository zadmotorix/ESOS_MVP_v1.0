"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Dashboard;
const jsx_runtime_1 = require("react/jsx-runtime");
const useDashboard_1 = require("../hooks/useDashboard");
const Loading_1 = __importDefault(require("../components/common/Loading"));
const SearchBox_1 = __importDefault(require("../components/common/SearchBox"));
const VersionInfo_1 = __importDefault(require("../components/dashboard/VersionInfo"));
const SummaryPanel_1 = __importDefault(require("../components/dashboard/SummaryPanel"));
function Dashboard() {
    const { data, loading } = (0, useDashboard_1.useDashboard)();
    if (loading)
        return (0, jsx_runtime_1.jsx)(Loading_1.default, {});
    return (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Enterprise Dashboard" }), (0, jsx_runtime_1.jsx)(SearchBox_1.default, {}), (0, jsx_runtime_1.jsx)(SummaryPanel_1.default, {}), (0, jsx_runtime_1.jsx)(VersionInfo_1.default, {}), (0, jsx_runtime_1.jsx)("pre", { children: JSON.stringify(data.kpis, null, 2) })] });
}
