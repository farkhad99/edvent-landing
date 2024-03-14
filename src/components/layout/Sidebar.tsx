import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const Sidebar = (props: { closeSidebar: () => void, isOpen: boolean }) => {
  const t = useTranslations();

  const close = () => {
    props.closeSidebar()
  }

  return (
    <header className={`${!props.isOpen && 'hidden'} lg:hidden fixed right-0 h-full z-50 flex flex-col bg-white w-[300px] items-center justify-between px-8 py-4 pt-6 text-black`} onBlur={close}>
      <button type='button' className='absolute right-10 font-bold text-2xl' onClick={close}>X</button>

      <div className="justify-between flex pt-10">
        <nav>
          <ul className="text-xl flex flex-col gap-5">
            <li>
              <a href="#speakers">{t('Header.speakers')}</a>
            </li>
            <li>
            <a href="#venues">
                {t('Header.venues')}
              </a>
            </li>
            <li><a href="#tickets">{t('Header.tickets')}</a></li>
            <li><a href="/program">{t('Header.program')}</a></li>
            <li><a href="#partners">{t('Header.partners')}</a></li>
          </ul>
        </nav>
      </div>

      <div className="items-center justify-between md:flex">
        <div className="flex flex-col gap-4 justify-end">
          <button
            type="button"
            className="border-2 border-black bg-black p-2 px-8 w-full uppercase text-white"
          >
            {t('Cta.buy_ticket')}
          </button>
          <button
            type="button"
            className="border-2 border-black p-2 px-6 w-full uppercase"
          >
            {t('Cta.become_partner')}
          </button>
        </div>
      </div>

      <div className="flex">
          <Link href="instagram.com">
            <button className="mx-3 rounded-full bg- p-2" type="button">
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

      <button className="md:hidden" type="button">
        <div className="w-12 bg-white py-[2px]" />
        <div className="my-2 w-12 bg-white py-[2px]" />
        <div className="w-12 bg-white py-[2px]" />
      </button>
    </header>
  );
};

export { Sidebar };
