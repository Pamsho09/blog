import { PrismaClient } from "@prisma/client";
import "server-only";

//createa sinflgton instance of prisma client

class PrismaService {
  private prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }
  public init() {
    return this.prisma;
  }
  static getInstance() {
    const prisma = new PrismaService(); /// ---> this is the singleton
    return prisma;
  }
}

export default PrismaService.getInstance().init();
