import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import LocaleSwitcher from '@/components/LocaleSwitcher';
import { AppConfig } from '@/utils/AppConfig';

const MainFooter = () => {
  const t = useTranslations();

  return (
    <footer className="flex flex-col justify-between bg-black p-8 py-12 text-center text-sm text-white md:flex-row">
      <div className="flex flex-col gap-2">
        <div className="text-left">
          <Image
            alt="Edvent logo"
            width={170}
            height={15}
            src="/assets/images/header-logo.png"
          />

          <p className="py-6">
            © Copyright {new Date().getFullYear()} {AppConfig.name} <br />
            {t('Footer.all_rights')}
          </p>

          <p>{t('Footer.address')}</p>
        </div>
      </div>

      <div className="my-6 md:my-0">
        <nav>
          <ul className="flex flex-col flex-wrap gap-y-2 text-left">
            <li>
              <a href="#speakers">{t('Header.speakers')}</a>
            </li>
            <li>
              <a href="#venues">{t('Header.venues')}</a>
            </li>
            <li>
              <a href="#tickets">{t('Header.tickets')}</a>
            </li>
            <li>
              <a href="/program">{t('Header.program')}</a>
            </li>
            <li>
              <a href="#partners">{t('Header.partners')}</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="text-left text-base">
        <p className="pb-2">{t('Footer.contacts')}</p>
        <p>+998(50)724-01-64</p>
        <p>info@edvent.uz</p>
      </div>

      <div className="mt-6 flex flex-col gap-y-2 md:mt-0">
        <LocaleSwitcher />

        <div className="flex justify-end">
          <Link href="youtube.com">
            <button type="button" className="rounded-full bg-white p-2">
              <Image
                alt="insta-link"
                width={16}
                height={18}
                src="/assets/images/youtube-icon.svg"
              />
            </button>
          </Link>
          <Link href="instagram.com">
            <button type="button" className="mx-3 rounded-full bg-white p-2">
              <Image
                alt="insta-link"
                width={16}
                height={18}
                src="/assets/images/instagram-icon.svg"
              />
            </button>
          </Link>
          <Link href="instagram.com">
            <button type="button" className="rounded-full bg-white p-2">
              <Image
                alt="tg-link"
                width={16}
                height={18}
                src="/assets/images/telegram-icon.svg"
              />
            </button>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export { MainFooter };
