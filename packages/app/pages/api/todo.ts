import { prisma } from "../../db";

export default async function handler(req: any, res: any) {
  const todos = await prisma.todo.findMany();

  console.log(todos);
  
  res.status(200).json(todos);
}
