import type { ReactElement, ReactNode } from 'react';

import { render, type RenderResult } from '@testing-library/react';

import { composeProviders, createProvider } from '@/providers/providerUtils';
import { NextIntlProvider } from '@/utils/testing/renderWithNextIntl';
import { QueryProvider } from '@/utils/testing/renderWithQueryClient';

const providers = [createProvider(NextIntlProvider), createProvider(QueryProvider)];

const AllProviders = composeProviders(providers);

export default function renderWithProviders(ui: ReactElement | ReactNode): RenderResult {
  return {
    ...render(<AllProviders>{ui}</AllProviders>),
  };
}
