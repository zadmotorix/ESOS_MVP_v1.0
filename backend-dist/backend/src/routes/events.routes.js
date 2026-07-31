"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const eventNotification_service_1 = require("../services/eventNotification.service");
const r = (0, express_1.Router)();
r.post('/notify', (req, res) => {
    const { event, channel, to } = req.body;
    res.json((0, eventNotification_service_1.notify)(event, channel, to));
});
exports.default = r;
