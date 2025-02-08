import { compare } from "bcrypt";
import { prisma } from "@/lib/prisma";

interface User {
  id: string;
  email: string;
  responsavel: string;
  nucleo: string;
  role: string;
  username: string;
}

export async function findUserByCredentials(
  email: string, 
  password: string
): Promise<User | null> {
  const user = await prisma.user.findFirst({
    where: {
      email: email,
    },
  });

  if (!user) {
    throw new Error("Usuário não encontrado.");
  };

  const passwordMatch = await compare(password, user.password);

  if (!passwordMatch) {
    throw new Error("Senha incorreta.");
  }

  return {
    id: user.id,
    email: user.email,
    responsavel: user.responsavel,
    nucleo: user.nucleo,
    role: user.role,
    username: user.username,
  };
}