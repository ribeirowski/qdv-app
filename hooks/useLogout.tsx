"use client";

import { signOut } from "next-auth/react";
import { useMutation } from "@tanstack/react-query";

export function useLogout() {
  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
        await signOut({ callbackUrl: "/" });
    },
  });

  return { logout: mutate, isPending };
}
