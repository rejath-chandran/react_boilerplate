import { useQuery } from "@tanstack/react-query";
import { GetUsersApi } from "./api";

export function AllUsers(InitFunc) {
  return useQuery({
    queryKey: ["user-data", InitFunc],
    queryFn: GetUsersApi,
    staleTime: 1000000,
  });
}
