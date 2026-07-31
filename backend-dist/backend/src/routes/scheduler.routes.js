"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const scheduler_service_1 = require("../services/scheduler.service");
const r = (0, express_1.Router)();
r.get('/timeline', (_q, s) => s.json((0, scheduler_service_1.getTimeline)()));
r.get('/current/:hour', (q, s) => s.json((0, scheduler_service_1.current)(Number(q.params.hour))));
exports.default = r;
