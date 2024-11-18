import { AlchemyAccountProvider } from '@account-kit/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function AlchemyProvider({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <AlchemyAccountProvider>
        {children}
      </AlchemyAccountProvider>
    </QueryClientProvider>
  );
} 