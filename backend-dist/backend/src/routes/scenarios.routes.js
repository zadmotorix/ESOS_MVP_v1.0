"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const scenario_service_1 = require("../services/scenario.service");
const r = (0, express_1.Router)();
r.get('/', (_q, s) => s.json((0, scenario_service_1.list)()));
r.get('/:name', (q, s) => s.json((0, scenario_service_1.get)(q.params.name.toUpperCase())));
exports.default = r;
