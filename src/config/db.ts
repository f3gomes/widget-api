import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function main() {
  // ... you will write your Prisma Client queries here
}

main()
  .then(async () => {
    await prisma.$disconnect();
    console.log("DB Prisma connect");
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
