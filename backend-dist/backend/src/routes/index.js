"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRoutes = registerRoutes;
const health_1 = __importDefault(require("./health"));
const orchestrator_routes_1 = __importDefault(require("./orchestrator.routes"));
function registerRoutes(app) {
    app.use('/health', health_1.default);
    app.use('/orchestrator', orchestrator_routes_1.default);
}
