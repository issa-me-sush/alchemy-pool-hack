import { config, queryClient } from "@/lib/config";
import { AlchemyAccountProvider } from "@account-kit/react";
import { QueryClientProvider } from "@tanstack/react-query";

export function Providers({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <AlchemyAccountProvider config={config}>
        {children}
      </AlchemyAccountProvider>
    </QueryClientProvider>
  );
}