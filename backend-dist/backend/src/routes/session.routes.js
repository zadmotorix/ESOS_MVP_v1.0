"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const SessionController_1 = require("../controllers/SessionController");
const router = (0, express_1.Router)();
const controller = new SessionController_1.SessionController();
router.post('/refresh', (req, res) => controller.refresh(req, res));
exports.default = router;
