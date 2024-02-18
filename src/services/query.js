import { useQuery, useMutation } from "@tanstack/react-query";

export function All() {
    return useQuery({
      queryKey: ["all"],
      queryFn: '',
    });
  }
  
  export function Create(client) {
    return useMutation({
      mutationFn: (data) =>'',
    //   onSuccess: () => {
    //     client.invalidateQueries({ queryKey: ["all-category"] });
    //   },
    });
  }