import { Company } from "@prisma/client";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createCompany = async (name: string): Promise<Company> => {
  return prisma.company.create({
    data: {
      name,
    },
  });
};

export default {
  createCompany,
};
