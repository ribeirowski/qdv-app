import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "./prisma"
import Credentials from "next-auth/providers/credentials"
import { findUserByCredentials } from "@/services/auth"

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      credentials: {
        email: { },
        password: { },
      },
      authorize: async (credentials) => {
        if (!credentials?.email || !credentials?.password) {
            throw new Error("Email e senha são obrigatórios.");
        }
        try {
            const user = await findUserByCredentials(
              credentials.email as string, 
              credentials.password as string
            );

            return user;
          } catch (error) {
            console.error("Erro na autenticação:", error);
            return null;
          }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.responsavel = user.responsavel;
        token.nucleo = user.nucleo;
        token.username = user.username;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
        session.user.responsavel = token.responsavel as string;
        session.user.nucleo = token.nucleo as string;
        session.user.username = token.username as string;
      }
      return session;
    },
  },
  pages: {
    signIn: "/sign-in",
  },
  session: { strategy: "jwt" },
})