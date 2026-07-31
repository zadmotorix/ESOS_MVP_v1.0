import { prisma } from '../config/prisma';

export class PrismaBookingRepository {
  findAll() {
    return prisma.booking.findMany({ orderBy: { createdAt: 'desc' } });
  }

  create(data:{customer:string;pickup:string;destination:string}) {
    return prisma.booking.create({ data });
  }

  update(id:string,data:Partial<{customer:string;pickup:string;destination:string;status:string}>) {
    return prisma.booking.update({ where:{id}, data });
  }

  delete(id:string) {
    return prisma.booking.delete({ where:{id} });
  }
}
