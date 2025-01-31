import type { ComponentProps, FC, ReactElement, ReactNode } from 'react';

import { render, type RenderResult } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';

import enMessages from '@/i18n/locales/en.json';

type NextIntlClientProviderProps = ComponentProps<typeof NextIntlClientProvider>;

export const NextIntlProvider: FC<NextIntlClientProviderProps> = ({
  children,
  locale = 'en',
  messages = enMessages,
}) => (
  <NextIntlClientProvider locale={locale} messages={messages}>
    {children}
  </NextIntlClientProvider>
);

export default function renderWithNextIntl(
  ui: ReactElement | ReactNode,
  locale = 'en',
): RenderResult {
  return {
    ...render(
      <NextIntlProvider locale={locale} messages={enMessages}>
        {ui}
      </NextIntlProvider>,
    ),
  };
}
