"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaBookingRepository = void 0;
const prisma_1 = require("../config/prisma");
class PrismaBookingRepository {
    findAll() {
        return prisma_1.prisma.booking.findMany({ orderBy: { createdAt: 'desc' } });
    }
    create(data) {
        return prisma_1.prisma.booking.create({ data });
    }
    update(id, data) {
        return prisma_1.prisma.booking.update({ where: { id }, data });
    }
    delete(id) {
        return prisma_1.prisma.booking.delete({ where: { id } });
    }
}
exports.PrismaBookingRepository = PrismaBookingRepository;
