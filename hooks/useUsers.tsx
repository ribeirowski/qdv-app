import { useQuery } from "@tanstack/react-query";

async function fetchUsers() {
  const res = await fetch("/api/users", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!res.ok) throw new Error("Erro ao buscar usuários");

  return res.json();
}

export function useUsers() {
  return useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    staleTime: 1000 * 60 * 5,
  });
}
