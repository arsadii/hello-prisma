import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  /**
   * How to create user
  const user = await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@prisma.io',
    },
  })
   */
  /**
   * Get All user
  const users = await prisma.user.findMany() 
   */
  /**
   * How to create with relation
  const user = await prisma.user.create({
    data: {
      email: "arsadi@mail.com",
      name: "Arsadi",
      posts: {
        create: {
          title: "Belajar prisma",
        },
      },
    },
  });
  */
  /**
   * How to get data with relation
  const usersWithPosts = await prisma.user.findMany({
    include: {
      posts: true,
    },
  });
  */
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
