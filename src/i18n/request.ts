import { getRequestConfig } from 'next-intl/server';
import { routing, type Locale } from '@/i18n/routing';

export default getRequestConfig(async (config) => {
  const { requestLocale } = config;
  // This typically corresponds to the `[locale]` segment
  let locale = await requestLocale;

  // Ensure that a valid locale is used
  if (!locale || !routing.locales.includes(locale as Locale)) {
    locale = routing.defaultLocale;
  }

  const localeImportPromise = import(`./locales/${locale}.json`) as Promise<{
    default: Record<string, string>;
  }>;

  return {
    locale,
    messages: (await localeImportPromise).default,
  };
});
