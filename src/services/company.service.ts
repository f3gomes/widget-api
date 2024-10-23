import { Company } from "@prisma/client";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createCompany = async (
  name: string,
  cnpj: string,
  address: string,
  phone: string,
  email: string
): Promise<Company> => {
  return prisma.company.create({
    data: {
      name,
      cnpj,
      address,
      phone,
      email,
    },
  });
};

export default {
  createCompany,
};
