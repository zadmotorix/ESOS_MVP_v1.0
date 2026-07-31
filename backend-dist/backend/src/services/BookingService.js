"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingService = void 0;
class BookingService {
    async list() { return []; }
    async create(data) {
        return { id: Date.now(), status: 'created', ...data };
    }
}
exports.BookingService = BookingService;
