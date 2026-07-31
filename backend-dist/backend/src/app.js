"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const routes_1 = require("./routes");
const errorHandler_1 = __importDefault(require("./middleware/errorHandler"));
const notFound_1 = __importDefault(require("./middleware/notFound"));
const app = (0, express_1.default)();
const distRoot = path_1.default.resolve(process.cwd(), 'dist');
app.use(express_1.default.json());
app.use(express_1.default.static(distRoot));
app.get('/', (_req, res) => {
    res.sendFile(path_1.default.resolve(distRoot, 'index.html'));
});
(0, routes_1.registerRoutes)(app);
app.use(notFound_1.default);
app.use(errorHandler_1.default);
exports.default = app;
