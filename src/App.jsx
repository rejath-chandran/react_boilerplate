import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, Routes } from "react-router-dom";
import Table from "./components/Table";
import MainAppRoutes from "./routes/MainRoute";
export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <MainAppRoutes />
    </QueryClientProvider>
  );
}
