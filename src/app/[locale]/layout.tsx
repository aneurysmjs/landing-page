import type { Metadata } from 'next';
import type { FC, PropsWithChildren } from 'react';

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import localFont from 'next/font/local';
import { notFound } from 'next/navigation';

import { type Locale, routing } from '@/i18n/routing';

import '../../assets/css/styles.css';

const ttNorms = localFont({
  src: '../../assets/fonts/TTNorms-Regular.otf',
  style: 'normal',
  variable: '--font-tt-norms',
  weight: '100 700 900',
});

const ttBold = localFont({
  src: '../../assets/fonts/TTNorms-Bold.otf',
  style: 'normal',
  variable: '--font-tt-norms-bold',
  weight: '100 900',
});

// const geistMono = localFont({
//   src: '../../assets/fonts/GeistMonoVF.woff',
//   variable: '--font-geist-mono',
//   weight: '100 900',
// });

export const metadata: Metadata = {
  description: 'Holistic approach to your wellness.',
  title: 'Manual Landing Page',
};

interface RootLayoutProps extends PropsWithChildren {
  params: Promise<{
    locale: Locale;
  }>;
}

const RootLayout: FC<RootLayoutProps> = async ({ children, params }) => {
  const locale = (await params).locale;
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`
          ${ttNorms.variable}
          ${ttBold.variable}
        `}
      >
        <h1 className="sr-only">Manual - Men’s health. The way it should be</h1>
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
