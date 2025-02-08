"use client";

import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && user?.role !== "admin") {
      router.replace("/home");
    }
  }, [isLoading, user, router]);

  if (isLoading || user?.role !== "admin") return null;

  return (
    <>
      {children}
    </>
  );
}
