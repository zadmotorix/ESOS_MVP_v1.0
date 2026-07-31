"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const startupDiagnostics_1 = require("./src/startupDiagnostics");
const app_1 = __importDefault(require("./src/app"));
const PORT = process.env.PORT || 3000;
console.log((0, startupDiagnostics_1.startupDiagnostics)());
app_1.default.listen(PORT, () => console.log(`ESOS running on ${PORT}`));
