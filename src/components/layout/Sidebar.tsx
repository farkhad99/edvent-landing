import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const Sidebar = (props: { closeSidebar: () => void; isOpen: boolean }) => {
  const t = useTranslations();

  const close = () => {
    props.closeSidebar();
  };

  return (
    <header
      className={`${!props.isOpen && 'hidden'} fixed right-0 z-50 flex h-full w-[300px] flex-col items-center justify-between bg-white px-8 py-4 pt-6 text-black lg:hidden`}
      onBlur={close}
    >
      <button
        type="button"
        className="absolute right-10 text-2xl font-bold"
        onClick={close}
      >
        X
      </button>

      <div className="flex justify-between pt-10">
        <nav>
          <ul className="flex flex-col gap-5 text-xl">
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

      <div className="items-center justify-between md:flex">
        <div className="flex flex-col justify-end gap-4">
          <button
            type="button"
            className="w-full border-2 border-black bg-black p-2 px-8 uppercase text-white"
          >
            {t('Cta.buy_ticket')}
          </button>
          <button
            type="button"
            className="w-full border-2 border-black p-2 px-6 uppercase"
          >
            {t('Cta.become_partner')}
          </button>
        </div>
      </div>

      <div className="flex">
        <Link href="instagram.com">
          <button className="mx-3 rounded-full p-2" type="button">
            <Image
              alt="insta-link"
              width={26}
              height={28}
              src="/assets/images/instagram-icon.svg"
            />
          </button>
        </Link>
        <Link href="instagram.com">
          <button className="mr-6 rounded-full bg-white p-2" type="button">
            <Image
              alt="tg-link"
              width={26}
              height={28}
              src="/assets/images/telegram-icon.svg"
            />
          </button>
        </Link>
      </div>
    </header>
  );
};

export { Sidebar };
