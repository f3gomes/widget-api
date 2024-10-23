import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.company.create({
    data: {
      name: "Sabores do Campo",
      cnpj: "12345678901238",
      address: "Rua das Hortaliças, 123",
      phone: "(11) 98765-4321",
      email: "vendas@saboresdocampo.com",
    },
  });

  await prisma.company.create({
    data: {
      name: "Tech Solutions",
      cnpj: "98765432101234",
      address: "Avenida da Tecnologia, 456",
      phone: "(21) 12345-6789",
      email: "contato@techsolutions.com.br",
    },
  });

  await prisma.company.create({
    data: {
      name: "Clean & Shine",
      cnpj: "56789012345678",
      address: "Praça da Limpeza, 789",
      phone: "(19) 98765-4321",
      email: "atendimento@cleanandshine.com",
    },
  });

  await prisma.company.create({
    data: {
      name: "Conecta RH",
      cnpj: "34567890123456",
      address: "Rua dos Recursos Humanos, 1011",
      phone: "(41) 12345-6789",
      email: "carreiras@conectarh.com.br",
    },
  });

  const company1 = await prisma.company.findUnique({
    where: { name: "Sabores do Campo" },
  });

  const company2 = await prisma.company.findUnique({
    where: { name: "Tech Solutions" },
  });

  const company3 = await prisma.company.findUnique({
    where: { name: "Clean & Shine" },
  });

  const company4 = await prisma.company.findUnique({
    where: { name: "Conecta RH" },
  });

  for (let i = 1; i <= 25; i++) {
    await prisma.feedback.create({
      data: {
        type: "BUG",
        comment: `Erro encontrado ao acessar o sistema, número ${i}`,
        companyId: company1!.id,
      },
    });
  }

  for (let i = 1; i <= 25; i++) {
    await prisma.feedback.create({
      data: {
        type: "IDEA",
        comment: `Erro encontrado ao acessar o sistema, número ${i}`,
        companyId: company2!.id,
      },
    });
  }

  for (let i = 1; i <= 25; i++) {
    await prisma.feedback.create({
      data: {
        type: "OTHER",
        comment: `Erro encontrado ao acessar o sistema, número ${i}`,
        companyId: company3!.id,
      },
    });
  }

  for (let i = 1; i <= 25; i++) {
    await prisma.feedback.create({
      data: {
        type: "BUG",
        comment: `Erro encontrado ao acessar o sistema, número ${i}`,
        companyId: company4!.id,
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
