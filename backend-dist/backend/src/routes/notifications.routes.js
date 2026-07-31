"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const notification_service_1 = require("../services/notification.service");
const r = (0, express_1.Router)();
r.get('/', (_q, s) => s.json((0, notification_service_1.history)()));
r.post('/send', (q, s) => s.json((0, notification_service_1.send)(q.body.channel, q.body.to, q.body.message)));
exports.default = r;
