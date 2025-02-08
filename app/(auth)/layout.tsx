"use client";

import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, isLoading, role } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && isAuthenticated) {
      router.replace(role === "admin" ? "/admin" : "/home");
    }
  }, [isLoading, isAuthenticated, router, role]);

  if (isLoading || isAuthenticated) return null;

  return (
    <div className="flex min-h-svh w-full items-center justify-center px-8 py-6 bg-primary">
      {children}
    </div>
  );
}
