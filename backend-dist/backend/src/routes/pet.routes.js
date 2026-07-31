"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pet_service_1 = require("../services/pet.service");
const r = (0, express_1.Router)();
r.get('/', (_q, s) => s.json((0, pet_service_1.all)()));
exports.default = r;
