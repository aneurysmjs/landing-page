import type { ComponentProps, FC, ReactElement, ReactNode } from 'react';

import { QueryClient, type QueryClientConfig, QueryClientProvider } from '@tanstack/react-query';
import { render, type RenderResult } from '@testing-library/react';

const defaultQueryClientConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      // ✅ turns retries off
      retry: false,
    },
  },
};

const defaultQueryClient = new QueryClient(defaultQueryClientConfig);

type QueryProviderProps = ComponentProps<typeof QueryClientProvider>;

export const QueryProvider: FC<Partial<QueryProviderProps>> = ({
  children,
  client = defaultQueryClient,
}) => <QueryClientProvider client={client}>{children}</QueryClientProvider>;

export default function renderWithQueryClient(
  ui: ReactElement | ReactNode,
  queryClientConfig: QueryClientConfig = defaultQueryClientConfig,
): RenderResult {
  const queryClient = new QueryClient(queryClientConfig);

  return {
    ...render(<QueryProvider client={queryClient}>{ui}</QueryProvider>),
  };
}
