import { useSession } from "next-auth/react";

export function useAuth() {
  const { data: session, status } = useSession();

  return {
    user: session?.user,
    role: session?.user?.role,
    isAuthenticated: status === "authenticated",
    isLoading: status === "loading",
  };
}
