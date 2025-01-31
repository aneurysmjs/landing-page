/**
 * @see https://dev.to/yutakusuno/nextjs14-firebase-authentication-with-google-sign-in-using-cookies-middleware-and-server-actions-48h4
 */
import { type NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';

import { routing } from '@/i18n/routing';

const i18nMiddleware = createMiddleware(routing);

/**
 * TODO:
 * @see https://www.reddit.com/r/Firebase/comments/y4hts8/nextjs_middleware/
 */
export default function middleware(request: NextRequest) {
  return i18nMiddleware(request);
}

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(en|es|ru)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)'],
};
