"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const taskManager_service_1 = require("../services/taskManager.service");
const r = (0, express_1.Router)();
r.get('/', (_q, s) => s.json((0, taskManager_service_1.list)()));
exports.default = r;
