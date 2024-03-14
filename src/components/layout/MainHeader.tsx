import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

const MainHeader = () => {
  const t = useTranslations()

  return (
    <header className="pt-6 flex justify-between items-center text-white absolute z-50 px-8 py-4 w-full">
      <div className="">
          <Image
            alt="Edvent logo"
            width={170}
            height={15}
            src="/assets/images/header-logo.png" />
      </div>

      <div className="lg:flex justify-between hidden">
        <nav>
          <ul className="flex flex-wrap gap-x-5 text-md">
            <li>{t('Header.speakers')}</li>
            <li>{t('Header.venues')}</li>
            <li>{t('Header.tickets')}</li>
            <li>{t('Header.program')}</li>
            <li>{t('Header.partners')}</li>
          </ul>
        </nav>
      </div>
      
      <div className='md:flex justify-between items-center hidden'>
        <div className='hidden xl:block'>{t("Header.date")} </div>
        <div className='flex'>
          <Link href="instagram.com">
            <button className="rounded-full p-2 mx-3 bg-white">
              <Image alt="insta-link" width={16} height={18} src="/assets/images/instagram-icon.svg" />
            </button>
          </Link>
          <Link href="instagram.com">
            <button className="rounded-full p-2 bg-white mr-6">
              <Image alt="tg-link" width={16} height={18} src="/assets/images/telegram-icon.svg" />
            </button>
          </Link>
        </div>
        
        <div className='flex justify-end'>
          <button className="p-2 px-8 text-black bg-white border-2 border-white uppercase mr-3">{ t("Cta.buy_ticket") }</button>
          <button className="p-2 px-6 uppercase border-2 border-white">{ t("Cta.become_partner") }</button>
        </div>
      </div>

      <button className='md:hidden'>
        <div className='py-[2px] w-12 bg-white'></div>
        <div className='py-[2px] w-12 bg-white my-2'></div>
        <div className='py-[2px] w-12 bg-white'></div>
      </button>
    </header>
  )
}

export { MainHeader };
