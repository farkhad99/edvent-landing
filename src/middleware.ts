// import { authMiddleware, } from '@clerk/nextjs';
import createMiddleware from 'next-intl/middleware';

import { AppConfig } from './utils/AppConfig';

export default createMiddleware({
  locales: AppConfig.locales,
  localePrefix: AppConfig.localePrefix,
  defaultLocale: AppConfig.defaultLocale
});

// export default authMiddleware({
//   beforeAuth: (req) => {
//     // Execute next-intl middleware before Clerk's auth middleware
//     return intlMiddleware(req);
//   },
// });

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)']
};
