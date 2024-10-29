import '@/styles/global.css';

import axios from 'axios';
// import axios from 'axios';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';

import { BaseTemplate } from '@/templates/BaseTemplate';
import { AppConfig } from '@/utils/AppConfig';

const roboto = Roboto({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '500', '700', '900']
});

export const metadata: Metadata = {
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png'
    },
    {
      rel: 'icon',
      url: '/favicon.ico'
    }
  ]
};

export default async function RootLayout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!AppConfig.locales.includes(props.params.locale)) notFound();
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/locales/${props.params.locale}.json`
  );
  const messages = response.data;

  return (
    <html
      lang={props.params.locale}
      className={`${roboto.className} text-default`}
    >
      <body>
        <NextIntlClientProvider
          messages={messages}
          locale={props.params.locale}
        >
          <BaseTemplate>{props.children}</BaseTemplate>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
