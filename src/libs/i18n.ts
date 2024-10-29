import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/locales/${locale}.json`
  );

  if (!response.ok) {
    throw new Error(`Failed to load messages for locale ${locale}`);
  }

  const messages = await response.json();
  return {
    messages
  };
});
