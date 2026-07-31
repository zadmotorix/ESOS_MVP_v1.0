"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readinessRoute = readinessRoute;
const readiness_1 = require("../health/readiness");
function readinessRoute(req, res) {
    res.json((0, readiness_1.readiness)());
}
