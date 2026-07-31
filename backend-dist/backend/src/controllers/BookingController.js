"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingController = void 0;
const PrismaBookingRepository_1 = require("../repositories/PrismaBookingRepository");
const repo = new PrismaBookingRepository_1.PrismaBookingRepository();
class BookingController {
    list = async (_req, res) => res.json(await repo.findAll());
    create = async (req, res) => {
        res.status(201).json(await repo.create(req.body));
    };
    update = async (req, res) => {
        const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
        res.json(await repo.update(id, req.body));
    };
    remove = async (req, res) => {
        const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
        await repo.delete(id);
        res.status(204).send();
    };
}
exports.BookingController = BookingController;
