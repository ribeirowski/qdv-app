import { prisma } from "@/lib/prisma";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";
import { ERROR_MESSAGES } from "@/lib/errors";

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      select: { id: true, email: true, responsavel: true, nucleo: true, role: true },
    });

    return NextResponse.json({ user: users }, { status: 201 });
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    return NextResponse.json({ error: "Erro ao buscar usuários" }, { status: 500 });
  }
}

export async function POST(req: Request) {
    try {
      console.log("req", req);
      const { responsavel, nucleo, email, password, role, username } = await req.json();

      const existingEmail = await prisma.user.findUnique({
        where: { email },
      });

      const existingUsername = await prisma.user.findUnique({
        where: { username },
      });
  
      if (existingEmail) {
        return NextResponse.json({ error: ERROR_MESSAGES.EMAIL_ALREADY_EXISTS }, { status: 400 });
      }

      if (existingUsername) {
        return NextResponse.json({ error: ERROR_MESSAGES.USER_ALREADY_EXISTS }, { status: 400 });
      }
  
      const hashedPassword = await hash(password, 10);
  
      const newUser = await prisma.user.create({
        data: {
          responsavel,
          username,
          nucleo,
          email,
          password: hashedPassword,
          role: role ?? false,
        },
      });
  
      return NextResponse.json({ user: newUser }, { status: 201 });
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
      return NextResponse.json({ error: ERROR_MESSAGES.SERVER_ERROR }, { status: 500 });
    }
}
