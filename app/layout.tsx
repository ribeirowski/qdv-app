import type { Metadata } from "next";
import "./globals.css";
import ReactQueryProvider from "@/lib/react-query";
import { SessionProvider } from "next-auth/react";

export const metadata: Metadata = {
  title: "Quarto do Vegetal",
  description: "Uma nova forma de administrar o Quarto do Vegetal do seu Núcleo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <ReactQueryProvider>
          <SessionProvider>
            {children}
          </SessionProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
