import { prisma } from '../config/prisma';
import bcrypt from 'bcryptjs';

export class UserService {
  async register(name:string,email:string,password:string,role='customer'){
    const hash=await bcrypt.hash(password,10);
    return prisma.user.create({
      data:{name,email,password:hash,role}
    });
  }

  async profile(id:string){
    return prisma.user.findUnique({where:{id: Number(id)}});
  }

  async findByEmail(email:string){
    return prisma.user.findUnique({where:{email}});
  }
}
