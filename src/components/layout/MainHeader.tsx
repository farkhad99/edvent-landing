import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

const MainHeader = (props: { toggleSidebar: any }) => {
  const t = useTranslations();

  const currentPath = usePathname();

  return (
    <header className="absolute z-50 flex w-full items-center justify-between px-8 py-4 pt-6 text-white">
      <div className="">
        <Link href="/">
          <Image
            alt="Edvent logo"
            width={170}
            height={15}
            src="/assets/images/header-logo.png"
          />
        </Link>
      </div>

      <div className="hidden justify-between lg:flex">
        <nav>
          <ul className="text-md flex flex-wrap gap-x-5">
            <li>
              <a href="/#speakers">{t('Header.speakers')}</a>
            </li>
            <li>
              <a href="/#venues">{t('Header.venues')}</a>
            </li>
            <li>
              <a href="/#tickets">{t('Header.tickets')}</a>
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

      <div className="hidden items-center justify-between md:flex">
        <div className="hidden xl:block">{t('Header.date')} </div>
        <div className="flex">
          <Link href="https://www.instagram.com/edvent.uz" target="_blank">
            <button className="mx-3 rounded-full bg-white p-2" type="button">
              <Image
                alt="insta-link"
                width={16}
                height={18}
                src="/assets/images/instagram-icon.svg"
              />
            </button>
          </Link>
          <Link href="https://t.me/edventcau" target="_blank">
            <button className="mr-6 rounded-full bg-white p-2" type="button">
              <Image
                alt="tg-link"
                width={16}
                height={18}
                src="/assets/images/telegram-icon.svg"
              />
            </button>
          </Link>
        </div>

        <div className="flex justify-end">
          <Link href={`${currentPath}?ticketModal=true`}>
            <button
              type="button"
              className="mr-3 border-2 border-white bg-white p-2 px-8 uppercase text-black"
            >
              {t('Cta.buy_ticket')}
            </button>
          </Link>

          <Link href={`${currentPath}?partnerModal=true`}>
            <button
              type="button"
              className="border-2 border-white p-2 px-6 uppercase"
            >
              {t('Cta.become_partner')}
            </button>
          </Link>
        </div>
      </div>

      <button
        className="md:hidden"
        type="button"
        onClick={() => props.toggleSidebar(true)}
        aria-label="Open sidebar"
      >
        <div className="w-12 bg-white py-[2px]" />
        <div className="my-2 w-12 bg-white py-[2px]" />
        <div className="w-12 bg-white py-[2px]" />
      </button>
    </header>
  );
};

export { MainHeader };
