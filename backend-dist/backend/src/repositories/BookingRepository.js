"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingRepository = void 0;
class BookingRepository {
    async findAll() { return []; }
    async create(data) { return { id: Date.now(), ...data }; }
}
exports.BookingRepository = BookingRepository;
