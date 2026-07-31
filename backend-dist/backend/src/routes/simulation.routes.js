"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const simulationEngine_service_1 = require("../services/simulationEngine.service");
const r = (0, express_1.Router)();
r.get('/state', (_q, s) => s.json((0, simulationEngine_service_1.getState)()));
r.post('/state', (q, s) => s.json((0, simulationEngine_service_1.update)(q.body)));
r.get('/event', (_q, s) => s.json({ event: (0, simulationEngine_service_1.randomEvent)() }));
exports.default = r;
