import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const todo = await prisma.todo.create({
    data: {
      title: 'Buy milk',
      description: 'Buy milk for the kids',
    },
  });
  console.log(todo);
}

main();
