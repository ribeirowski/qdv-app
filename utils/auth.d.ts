import "next-auth";

declare module "next-auth" {
  interface User {
    responsavel?: string;
    nucleo?: string;
    role?: string;
    username?: string;
  }

  interface JWT {
    responsavel?: string;
    nucleo?: string;
    role?: string;
    username?: string;
  }
}