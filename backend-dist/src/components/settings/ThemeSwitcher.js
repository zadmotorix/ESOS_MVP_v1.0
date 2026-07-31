"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ThemeSwitcher;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const ThemeService_1 = require("../../services/ThemeService");
function ThemeSwitcher() {
    const [theme, setLocal] = (0, react_1.useState)((0, ThemeService_1.getTheme)());
    return (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h3", { children: "Theme" }), (0, jsx_runtime_1.jsxs)("button", { onClick: () => { const n = theme === 'light' ? 'dark' : 'light'; (0, ThemeService_1.setTheme)(n); setLocal(n); }, children: ["Current: ", theme] })] });
}
