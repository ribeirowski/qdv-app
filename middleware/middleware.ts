import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function middleware(req: Request) {
  const { pathname } = new URL(req.url);

  const protectedRoutes = ["/home", "/estoque", "/preparo", "/consumo"];
  const adminRoutes = ["/admin", "/admin/cadastro"];
  const authRoutes = ["/sign-in"];

  const session = await auth();

  if (!session && protectedRoutes.some(route => pathname.startsWith(route))) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (session && session.user?.role !== "admin" && adminRoutes.some(route => pathname.startsWith(route))) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (session && authRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/home", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/home",
    "/estoque",
    "/preparo",
    "/consumo",
    "/sign-in",
    "/admin",
    "/admin/cadastro",
  ],
};
