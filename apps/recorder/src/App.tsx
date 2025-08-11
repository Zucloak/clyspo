import { Routes } from "@generouted/solid-router";
import { QueryClient, QueryClientProvider } from "@tanstack/solid-query";
import { Toaster } from "solid-toast";

import "@cap/ui-solid/main.css";
import "unfonts.css";
import "./styles/theme.css";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 3500,
          style: {
            padding: "8px 16px",
            "border-radius": "15px",
            "border-color": "var(--gray-200)",
            "border-width": "1px",
            "font-size": "1rem",
            "background-color": "var(--gray-50)",
            color: "var(--text-secondary)",
          },
        }}
      />
      <Routes />
    </QueryClientProvider>
  );
}
